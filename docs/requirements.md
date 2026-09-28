# Requirements

## Product scope

The connector aggregates data from multiple Simpro Australia accounts into the host application. A connection belongs to an organization and identifies one Simpro build/company context.

## Functional requirements

- Add, test, reconnect, and disconnect Simpro accounts.
- Support OAuth authorization code where available; avoid legacy API keys for hosted production use.
- Read customers, sites, jobs, quotes, invoices, staff, schedules, notes, and supported attachments.
- Create and update supported records through validated domain operations.
- Defer delete and financial/destructive operations until approval and audit controls exist.
- Run incremental and scheduled synchronization.
- Export selected or filtered data as CSV, XLSX, and JSON.
- Provide job status, progress, errors, retry, and download information for exports.
- Expose normalized internal models so the host application is not coupled to raw Simpro payloads.
- Provide an optional MCP layer that calls the same authorized connector services.

## Non-functional requirements

- Node.js and TypeScript.
- PostgreSQL for durable state.
- Background queue/worker for sync and exports.
- Encrypted secrets with a production secret manager.
- Tenant isolation on every database query and API request.
- Idempotency for writes and sync operations.
- Audit record for every write, export, connection event, and authorization failure.
- Pagination, rate-limit handling, retries, timeouts, and structured errors.
- Automated unit, integration, and contract tests.
- Docker-based local development and deployment.

## Initial domain entities

- Organization
- User
- SimproConnection
- Customer
- Site
- Job
- Quote
- Invoice
- Staff
- SyncRun
- ExportJob
- AuditEvent

## Open decisions

- Host application's existing authentication and user/organization model.
- Simpro OAuth application details and supported scopes.
- Required first-release resources and write operations.
- Real-time versus scheduled synchronization requirements.
- Deployment target and managed database/queue provider.
