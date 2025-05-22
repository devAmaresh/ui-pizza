# 🚀 Next.js Dashboard with Google Authentication

## Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-blue?style=for-the-badge&logo=vercel)](https://ui-pizza-blond.vercel.app/dashboard)

## 📖 Project Overview

This project is a modern dashboard web application built with Next.js 15 using the App Router. It features Google OAuth authentication via NextAuth.js, a beautiful and responsive UI using Tailwind CSS, and two protected pages:

- **Hello \[User]** page that greets the user post login.
- **Pizza Orders** page displaying a mock table of pizza orders.

The application is deployed and publicly accessible.

---

## 🔧 Tech Stack

- **Framework**: Next.js
- **Authentication**: NextAuth.js with Google Provider
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Language**: TypeScript

---

## 🔐 Authentication

- Google OAuth using NextAuth.js
- Protected routes: Authenticated users only
- Custom login and error pages
- Secure session handling

---

## 📄 Pages Overview

### 👋 Hello Page

- Accessible post-login
- Displays: `Hello, [User's Google Name]!`
- Redirected to after successful authentication

### 🍕 Pizza Orders Page

- Navigation link in the header
- Responsive data table
- Columns:

  - **Order ID** (e.g., PZA001)
  - **Customer Name** (e.g., John Doe)
  - **Pizza Type** (e.g., Margherita)
  - **Quantity** (e.g., 2)
  - **Order Date** (e.g., 2025-05-20 14:30)
  - **Status** with visual cues (badges/colors)

- Data Source: Hardcoded JSON

---

## 💻 Running Locally

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/devAmaresh/ui-pizza.git
cd ui-pizza
# Install dependencies
npm install
```

### 🔑 Environment Variables

Create a `.env.local` file in the root of your project with the following:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 🚀 Start Development Server

```bash
npm run dev
```

---

## 🌐 Deployment

The application is deployed on **Vercel** and can be accessed at:

🔗 [Live App URL](https://ui-pizza-blond.vercel.app)

---

## 📁 Folder Structure (Important Parts)

```
app/
├── api/
│   └── auth/
│       └── [...nextauth]/route.ts
├── dashboard/
│   └── page.tsx        // Hello User Page
├── orders/
│   └── page.tsx        // Pizza Orders Page
components/
├── Header.tsx          // Navigation
├── OrderTable.tsx      // Pizza table
lib/
└── auth.ts             // Auth config
```

---

## ❗ Assumptions & Notes

- All pizza data is static for demo purposes.
- No backend or database integration required.
- Error handling included for authentication and invalid routes.
- Responsive UI with graceful fallbacks for smaller screens.

---

## 🧰 Third-Party Libraries

- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [Classnames](https://github.com/JedWatson/classnames) - Utility

---

## ✅ Completed Features

- [x] Google OAuth using NextAuth.js
- [x] Protected routes
- [x] Hello User Page
- [x] Pizza Orders Page with table and badges
- [x] Tailwind styling
- [x] Responsive layout
- [x] used React Context API
- [x] Vercel deployment

---

## 📌 Conclusion

This project demonstrates a secure and modern Next.js dashboard with authentication, responsive UI, and elegant handling of protected content. It adheres to best practices in structure, performance, and developer experience.

Feel free to reach out if you'd like me to walk you through any part of the codebase!

## 👤 Author

**Amaresh**

---
