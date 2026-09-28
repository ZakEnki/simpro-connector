# Simpro Australia test connection

Use a dedicated Simpro Australia test account or sandbox. Do not use a production administrator account.

## Required test configuration

Create a Simpro OAuth application according to the Simpro account's API settings and grant only the permissions required for the smoke test. Store these values as GitHub Actions environment secrets in the `simpro-test` environment:

- `SIMPRO_TEST_BASE_URL`
- `SIMPRO_TEST_COMPANY_ID`
- `SIMPRO_TEST_ACCESS_TOKEN`

Do not commit these values or paste client secrets/access tokens into GitHub issues, commits, or chat.

## Read-only run

Run the integration workflow with `enable_writes` set to `false`. It performs a one-row customer-list smoke test.

## Controlled write run

Only run with `enable_writes` set to `true` against the dedicated test account. It creates a uniquely named test customer and immediately reads it back. The test does not run in normal CI. Review and delete test records through the Simpro test account after validation.

Local commands:

```bash
npm run test:integration
SIMPRO_TEST_ENABLE_WRITES=true npm run test:integration
```
