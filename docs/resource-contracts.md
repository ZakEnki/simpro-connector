# Resource contracts

Write payloads are validated before they reach Simpro.

- Customers require `GivenName` or `CompanyName`.
- Jobs accept `Project`, `Service`, or `Prepaid` work types.
- Sites require `Name`.
- Quotes share the job identity fields and support `DateIssued`/`DueDate`.
- Invoices support identity, description, dates, and status fields.

The schemas are deliberately conservative. Simpro fields not yet modeled can be added after a sandbox response is captured and tested. Reads remain flexible so the connector can return the full Simpro response.
