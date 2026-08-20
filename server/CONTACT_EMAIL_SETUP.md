# Contact form → Email setup

Frontend `Contact` page submits to:
- `POST /api/contact`

## 1) Install server deps
From `server/`:
- `npm install`

## 2) Configure environment
Copy `server/.env.example` → `server/.env` and fill:
- `SMTP_USER` = `flytowardsdigitalinnovation@gmail.com`
- `SMTP_PASS` = Gmail **App Password** (not your normal password)

## 3) Run backend
- `node server.js`

The website will send contact form submissions to:
- `CONTACT_TO_EMAIL` (defaults to `flytowardsdigitalinnovation@gmail.com`)
