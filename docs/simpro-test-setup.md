# Simpro Australia test connection

Use a dedicated Simpro Australia test account or sandbox. Do not use a production administrator account.

## Required test configuration

Create a Simpro OAuth application according to the Simpro account's API settings and grant only the permissions required for the smoke test. Store these values as GitHub Actions environment secrets in the `simpro-test` environment:

- `SIMPRO_TEST_BASE_URL` — for example `https://yourbuild.simprosuite.com`
- `SIMPRO_TEST_COMPANY_ID`
- `SIMPRO_TEST_ACCESS_TOKEN`

Do not commit these values or paste client secrets/access tokens into GitHub issues, commits, or chat.

## Run

The integration workflow is manually triggered from GitHub Actions. It runs a read-only customer-list smoke test with page size 1.

For local testing:

```bash
export SIMPRO_TEST_BASE_URL=https://yourbuild.simprosuite.com
export SIMPRO_TEST_COMPANY_ID=0
export SIMPRO_TEST_ACCESS_TOKEN='temporary-test-token'
npm run test:integration
```

The next step after the smoke test passes is OAuth callback testing through the API, followed by read-only resource checks for customers, sites, jobs, quotes, and invoices.
