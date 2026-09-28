# Connector API

All `/v1` calls require `Authorization: Bearer $INTERNAL_API_KEY` when configured and `x-organization-id`. In production, `INTERNAL_API_KEY` is mandatory.

Write calls require `x-confirm-write: true`; deletes and disconnects additionally require `x-confirm-destructive: true`. Creates require a unique `Idempotency-Key`.

- `GET /healthz`
- `GET /v1/connections`
- `POST /v1/connections` with `{ name, baseUrl, companyId }`
- `GET /v1/connections/:id/oauth/start`
- `POST /v1/connections/:id/disconnect`
- `GET /v1/resources/:connectionId/:resource?page=1&pageSize=50`
- `POST /v1/resources/:connectionId/:resource`
- `PUT /v1/resources/:connectionId/:resource/:id`
- `DELETE /v1/resources/:connectionId/:resource/:id`
- `POST /v1/sync` to queue a synchronization run
- `POST /v1/exports` with `{ connectionId, resource, format, filters }`
- `GET /v1/exports/:id/download`

Supported resources currently include customers, sites, jobs, quotes, invoices, staff, schedules, and notes.
