# Connector API

All `/v1` calls require `Authorization: Bearer $INTERNAL_API_KEY` when `INTERNAL_API_KEY` is configured and `x-organization-id`.

- `GET /healthz`
- `GET /v1/connections`
- `POST /v1/connections` with `{ name, baseUrl, companyId }`
- `GET /v1/connections/:id/oauth/start`
- `GET /v1/resources/:connectionId/:resource?page=1&pageSize=50`
- `POST /v1/resources/:connectionId/:resource`
- `PUT /v1/resources/:connectionId/:resource/:id`
- `DELETE /v1/resources/:connectionId/:resource/:id`
- `POST /v1/exports` with `{ connectionId, resource, format, filters }`

Supported resources currently include customers, sites, jobs, quotes, invoices, staff, schedules, and notes. The connector validates organization ownership before every operation.
