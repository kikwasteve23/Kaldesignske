# Kaldesigns

Client-facing site for **Kaldesigns** — data analysis (BI & big-data visualization), automation-focused data science, and software engineering.

Live site: [https://kaldesigns.vercel.app/](https://kaldesigns.vercel.app/)

## Positioning

Kaldesigns helps operators, founders, and product teams:

- analyze and visualize data with BI tools and big-data stacks
- automate reporting and operational workflows
- ship custom software and internal tools around real processes

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Lucide icons
- Nodemailer (optional Gmail delivery)

## Run locally

```bash
npm install
cp .env.example .env.local
# add WEB3FORMS_ACCESS_KEY or GMAIL_APP_PASSWORD
npm run dev -- --port 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Contact form

The form posts to `/api/contact`, which delivers mail via:

1. **Web3Forms** if `WEB3FORMS_ACCESS_KEY` is set (recommended)
2. **Gmail SMTP** if `GMAIL_APP_PASSWORD` is set
3. **FormSubmit AJAX fallback** in the browser if neither secret is configured

For Vercel, add the same env vars in Project Settings → Environment Variables, then redeploy.

If you use the FormSubmit fallback for the first time, open `stevenkikwa@gmail.com` (including spam) and click the FormSubmit activation link, then submit again.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint
