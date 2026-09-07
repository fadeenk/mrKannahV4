# mrkannah-contact-worker

Cloudflare Worker service that securely handles contact form submissions from [mrkannah.com](https://mrkannah.com) and dispatches emails via the [Resend](https://resend.com) API.

## Overview

- **Source Domain**: `consulting.mrkannah.com` (verified sender domain)
- **Sender Address**: `contact@consulting.mrkannah.com`
- **Destination**: `fadeekannah@gmail.com`
- **Reply-To**: Submitter's email address
- **CORS Allowed Origins**:
  - `https://mrkannah.com`
  - `https://www.mrkannah.com`
  - `https://fadeenk.github.io`
  - `http://localhost:3000`
  - `http://localhost:3001`
- **Production Endpoint**: `https://mrkannah-contact-worker.fadeekannah.workers.dev`

---

## 1. Prerequisites & Setup

1. **Node.js**: Ensure Node.js (v18+) is installed.
2. **Cloudflare Account**: Ensure you have authenticated with Cloudflare CLI:
   ```bash
   npx wrangler login
   ```
3. **Install Dependencies**:
   Navigate to the `worker/` directory and install required packages:
   ```bash
   cd worker
   npm install
   ```

---

## 2. Setting Secrets

The worker requires the `RESEND_API_KEY` secret to authenticate with Resend.

### Production Secret (Cloudflare)

Run the following command in the `worker/` directory:

```bash
npx wrangler secret put RESEND_API_KEY
```

When prompted, paste your Resend API key:
```text
<YOUR_RESEND_API_KEY>
```

### Local Development Secret

For local testing with `wrangler dev`, create a `.dev.vars` file inside the `worker/` folder (never commit this file to git):

```env
RESEND_API_KEY=<YOUR_RESEND_API_KEY>
```

Wrangler automatically loads environment variables from `.dev.vars` during local execution.

---

## 3. Local Development

To run the worker locally:

```bash
cd worker
npm run dev
```

Or using wrangler directly:

```bash
npx wrangler dev
```

By default, the local worker will be available at `http://localhost:8787`.

---

## 4. Deploying to Cloudflare Workers

To deploy the worker to production:

```bash
cd worker
npm run deploy
```

Or using wrangler directly:

```bash
npx wrangler deploy
```

Once deployed, your worker is accessible at:
`https://mrkannah-contact-worker.fadeekannah.workers.dev`

---

## 5. Testing & Verification

### Test Local Worker via `curl`

```bash
curl -X POST http://localhost:8787 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Submitter",
    "email": "test@example.com",
    "message": "Hello from local Cloudflare Worker test!"
  }'
```

Expected Response:
```json
{"success":true,"id":"..."}
```

### Test Production Worker via `curl`

```bash
curl -X POST https://mrkannah-contact-worker.fadeekannah.workers.dev \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Submitter",
    "email": "test@example.com",
    "message": "Hello from production Cloudflare Worker test!"
  }'
```

Expected Response:
```json
{"success":true,"id":"..."}
```

### Test CORS Preflight (`OPTIONS`)

```bash
curl -i -X OPTIONS https://mrkannah-contact-worker.fadeekannah.workers.dev \
  -H "Origin: https://mrkannah.com" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type, Accept"
```

Expected Response:
- HTTP Status: `204 No Content`
- `Access-Control-Allow-Origin: https://mrkannah.com`
- `Access-Control-Allow-Methods: POST, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Accept`

### Test Validation Error Handling

Send an incomplete payload to verify input validation:

```bash
curl -i -X POST https://mrkannah-contact-worker.fadeekannah.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"name": "Missing Fields"}'
```

Expected Response:
- HTTP Status: `400 Bad Request`
- Body: `{"error":"Name, email, and message are required."}`

---

## 6. Continuous Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow in [`.github/workflows/deploy-worker.yml`](../.github/workflows/deploy-worker.yml) that automatically builds and deploys the worker whenever code under `worker/**` is pushed to `main` (or triggered manually via `workflow_dispatch`).

### Required GitHub Repository Secrets

Configure the following secrets in your GitHub repository (**Settings > Secrets and variables > Actions > New repository secret**):

| Secret Name | Description | Where to find |
|---|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token with Workers edit permissions | Cloudflare Dashboard > My Profile > API Tokens > Create Custom Token (Permissions: `Account > Workers Scripts > Edit`) |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare Account ID | Cloudflare Dashboard > Workers & Pages > Overview (sidebar on right) |
| `RESEND_API_KEY` | Your Resend API key | Resend Dashboard > API Keys |
