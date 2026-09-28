# Simpro Connector

Private Node.js/TypeScript connector for Simpro Australia.

## Goals

- Support multiple Simpro accounts for one or more client organizations.
- Secure OAuth-based connection management and encrypted token storage.
- Full controlled read/write access to supported Simpro resources.
- Background synchronization and CSV/XLSX/JSON exports.
- REST API for the host application.
- Optional MCP adapter for AI-assisted workflows.

## Architecture

```text
Host application -> Connector API -> tenant/account authorization
                  -> connection/token manager -> Simpro Australia API
                  -> database, sync workers, and export jobs
                  -> optional MCP adapter
```

## Security principles

- Every request is scoped to an authenticated organization and Simpro connection.
- Credentials and refresh tokens are encrypted at rest and never returned to clients.
- Write and destructive operations are audited and validated.
- Destructive or bulk operations require explicit confirmation/approval.
- No production credentials are committed to Git.

## Planned first milestone

1. Organization and Simpro connection data model.
2. OAuth connect/callback/refresh/disconnect flow.
3. Connection health check.
4. Simpro client with pagination, retries, rate limiting, and company scoping.
5. Read-only customers, sites, jobs, quotes, and invoices.
6. Asynchronous export jobs.
7. Tests and local Docker development environment.

## Source reference

The initial Simpro API/MCP implementation is being evaluated from [ozmarks/simpro-mcp](https://github.com/ozmarks/simpro-mcp). It remains an upstream reference; this repository will contain the production multi-tenant design.

## Status

Architecture and requirements phase. Do not use against production Simpro accounts yet.
