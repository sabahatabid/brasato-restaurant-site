# 🍽️ Brasato — Restaurant Landing Page

A modern, responsive restaurant landing page built with **Next.js 14** (App Router) and **Tailwind CSS**.

## ✨ Features

- **Hero Section** — Full-screen background, animated headline, dual CTA buttons
- **Menu Section** — Category tabs, food cards with hover effects
- **About Section** — Two-column layout with story and values
- **Testimonials** — Auto-advancing carousel with all reviews grid
- **Contact Section** — Reservation form with validation + Google Maps
- **Footer** — Links, social icons, CTA strip

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher

### Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

| Tech | Usage |
|------|-------|
| Next.js 14 | App Router, SSR |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Lucide React | Icons |
| Unsplash | Images |

## 📁 Project Structure

```
brasato/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Menu.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts
└── package.json
```

## 🌐 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Click **Deploy** — done!

## 📄 License

MIT License — free to use for personal and commercial projects.
