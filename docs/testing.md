# Testing strategy

CI runs TypeScript validation and unit/contract tests. The test suite includes:

- Token encryption round trips
- CSV escaping
- Simpro write schema validation
- Resource path mapping
- Simpro API company scoping and pagination
- HTTP 429 retry behavior
- Normalized-record tenant/connection scoping

The next environment test should use a Simpro Australia sandbox or a dedicated least-privilege test account. Production credentials must not be used in CI.
