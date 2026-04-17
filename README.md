# EIMA Fisioterapia

SvelteKit site for [eimafisioterapia.es](https://eimafisioterapia.es) — fisioterapia y ejercicio a domicilio en Mallorca para personas con cáncer y dolor crónico.

## Stack

- SvelteKit 2 + Svelte 5
- Tailwind v4
- MDSvex (blog)
- Nodemailer (contact form)
- Vercel adapter

## Development

```bash
npm install
cp .env.example .env   # edit with real SMTP credentials
npm run dev            # http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push to a repo connected to Vercel. Set the SMTP env vars in the Vercel project settings.
