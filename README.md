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

The form submits **from the browser** to [Web3Forms](https://web3forms.com) (free plan requires client-side).

Set in `.env.local` / Vercel:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key
```

Optional backup: configure `GMAIL_APP_PASSWORD` for the `/api/contact` Gmail path.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint
