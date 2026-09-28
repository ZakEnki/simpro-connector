# Security model

A request must resolve through:

```text
authenticated user -> organization -> authorized SimproConnection -> Simpro token -> API request
```

Never trust a connection ID, company ID, or account identifier supplied by a client without checking ownership and permissions.

## Write safety

- Separate read and write permissions in the application.
- Validate payloads using schemas.
- Require idempotency keys for create operations.
- Require confirmation for bulk, delete, cancellation, and financial actions.
- Store actor, organization, connection, operation, target, request ID, result, and timestamp in the audit log.
- Redact access tokens, client secrets, and sensitive personal data from logs.

## Credential handling

- Encrypt refresh tokens at rest.
- Use a managed secret/key service in production.
- Keep OAuth client secrets outside Git and application logs.
- Rotate keys and support disconnect/revocation.
- Use least-privilege Simpro users/scopes where Simpro permits.
