# PocketBase Backend Setup

This folder contains the PocketBase binary for persisting registrations and future CMS/lead data.

## 1. Start PocketBase

Run the following command inside this directory:

```bash
cd backend
./pocketbase serve
```

PocketBase will be available at:
- **Admin UI**: [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/)
- **API URL**: [http://127.0.0.1:8090](http://127.0.0.1:8090)

---

## 2. Create the Seminar Registration Collection

1. Open the Admin UI at `http://127.0.0.1:8090/_/` (create your superuser account if it's the first time).
2. Click **"New Collection"** and set the Name to: `seminar_registrations`.
3. Set **Type**: `Base collection`.
4. Add the following Fields:

| Field Name | Type | Options |
|---|---|---|
| `fullName` | Plain text | Required: Yes |
| `email` | Email | Required: Yes |
| `phone` | Plain text | Required: Yes |
| `companyOrInstitution` | Plain text | Required: No |
| `jobTitle` | Plain text | Required: No |
| `eventSlug` | Plain text | Required: No |
| `notes` | Plain text | Required: No |

5. Under **API Rules**:
   - Set **"Create rule"** to: **`""` (Public)** — this allows unauthenticated landing page visitors to register for the seminar.
   - Set **"List/Search rule"**, **"View rule"**, **"Update rule"**, and **"Delete rule"** to: **Superusers only** (or locked) to keep registrant data private.
6. Click **Save Changes**.
