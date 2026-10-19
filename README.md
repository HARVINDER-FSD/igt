# 🚀 NEXUS™ | Full-Stack Digital Marketing & 3D Web Agency

An ultra-modern, high-converting digital marketing agency website built with **React 19**, **Three.js (WebGL 3D Core)**, and an **Express + Nodemailer** backend engine.

---

## 🌟 Key Highlights & Features

### 1. 🌐 Interactive 3D WebGL Hero Canvas
- **Dynamic 3D Geometric Core**: Interactive wireframe torus knot and icosahedron shield with orbiting marketing data nodes and 700+ floating dynamic particles.
- **Mouse Parallax**: Responsive camera tilting and lighting tracking cursor movements.
- **Live 3D Customizer**: Instant switching between 4 lighting color themes (Cyber Cyan, Neon Violet, Emerald AI, Solar Gold) and Wireframe/Solid/Hybrid display modes.

### 2. ⚡ All Digital Marketing Services (Deep-Dive Hub)
Complete detailed breakdown with deliverables, metrics, tech stacks, and real client case studies:
- **Enterprise SEO & Generative AI Search Dominance** (Google SGE, Perplexity, SearchGPT, Core Web Vitals)
- **Performance Marketing & Paid Ads** (Meta Advantage+, Google PMax & Search, TikTok Spark Ads)
- **High-Converting 3D Web Development & CRO** (Three.js WebGL, Sub-second LCP, A/B Split Testing)
- **Social Media Domination & Viral Content Studio** (Reels, TikTok, Motion Graphics)
- **Email Marketing & Lifecycle Automation** (Klaviyo dynamic flows, SMS VIP drops, Churn prevention)
- **Influencer Marketing & Creator Whitelisting** (Paid dark-posting, contract negotiation, UTM attribution)
- **AI Analytics, Attribution & Data Infrastructure** (Server-Side GTM, GA4, Multi-Touch Attribution)
- **Digital PR & Brand Authority Building** (Forbes, Bloomberg, Podcast guest bookings)

### 3. 🔍 360° AI Marketing Diagnostic Scanner
- Live simulated multi-step scan of any business website URL.
- Inspects Technical SEO, Mobile Speed, Server-side CAPI pixel tracking, and Funnel CRO drop-offs.
- Generates an actionable growth scorecard and pre-fills the strategy form.

### 4. 💰 Dynamic ROI & Revenue Growth Calculator
- Interactive sliders for Monthly Ad Spend ($2,000 - $100,000+), Average Order Value, and Conversion Rate.
- Computes projected 4.4x ROAS, monthly net revenue added, and annual ARR lift.
- 1-click "Lock In Budget" button that links directly to the proposal form.

### 5. 📬 Full Nodemailer Backend Integration
- **Server**: Express Node.js backend located in `server/server.js`.
- **Automatic Fallback / Ethereal Test Inbox**: If live credentials aren't set in `.env`, the server automatically initializes an Ethereal SMTP test account and provides live clickable preview links for all submitted inquiries.
- **Dual Email Dispatch**:
  1. **Agency Lead Notification**: Full HTML-styled email sent to the agency owner with client name, email, budget, service selection, website, and message.
  2. **Automated Client Confirmation**: Immediate branded confirmation email sent to the client with next steps.
- **Celebration Effect**: Interactive confetti burst (`canvas-confetti`) on successful form submission.

---

## 🛠️ Getting Started

### 1. Start Both Frontend & Backend (Recommended)
Run:
```bash
npm run dev
```
This runs both:
- **Express Backend (Nodemailer)** on `http://localhost:5000`
- **Vite React Frontend** on `http://localhost:3000`

### 2. Or Run Separately
In Terminal 1 (Backend Server):
```bash
npm run server
```

In Terminal 2 (React Frontend):
```bash
npm run client
```

---

## ⚙️ Setting Up Live Gmail / SMTP in `.env`

Open `.env` in the root folder and add your credentials:

```env
PORT=5000

# Gmail SMTP Configuration:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_digit_google_app_password

# Where lead notification emails should arrive:
CONTACT_EMAIL_RECEIVER=your_email@gmail.com
```

> **Note for Gmail**: Generate a 16-character App Password at:  
> **Google Account → Security → 2-Step Verification → App passwords**.
