# Escrow Application

A modern, AI-powered escrow platform built with Next.js. This application demonstrates how technology can make online transactions safer, more transparent, and user-friendly. It is designed for marketplaces, freelancers, and anyone who needs secure, trust-based payments between parties.

## Key Features

### 1. AI-Powered Dispute Agent (Basic MVP)
- Leverages OpenAI or Vercel AI SDK to analyze mock chat histories between buyers and sellers
- Suggests fair resolutions and drafts responses automatically
- Delivers a "wow" factor with a conversational chatbot interface

### 2. Trust Score System
- Calculates a simple trust score using mock KYC, transaction history, and user behavior
- Displays visual badges (e.g., “Verified”, “Trusted”, “New”) on user profiles
- Easy to implement on the frontend, providing strong perceived value

### 3. Delivery Confirmation via Logistics API (Simulated)
- Simulates integration with logistics providers like GIG or NIPOST using mock data
- Automatically releases funds upon delivery confirmation via webhook
- Includes a dummy delivery tracking UI for demonstration purposes

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

You can start editing the main page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Tech Stack
- [Next.js](https://nextjs.org) for the frontend and API routes
- [Tailwind CSS](https://tailwindcss.com) for styling
- [OpenAI](https://openai.com) or [Vercel AI SDK](https://vercel.com/ai) for AI features

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

*This project is for demonstration and educational purposes only. Not for production use.*
