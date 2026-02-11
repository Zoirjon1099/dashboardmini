🚀 Professional Dashboard

A modern, professional admin dashboard built with React, TypeScript, and the latest technologies.

✨ Features

⚡ Vite – Fast development environment

⚛️ React 18 + TypeScript

🎨 Tailwind CSS – Modern styling

📊 Recharts – Beautiful charts

🔄 React Query – Server state management

🗂️ React Router – Routing

📝 React Hook Form + Zod – Form validation

🎭 Framer Motion – Animations

🏪 Zustand – State management

🌗 Dark Mode – Theme support

📱 Responsive – Mobile-friendly

📦 Technologies
Core

React 18.2.0

TypeScript 5.3.3

Vite 5.0.11

UI & Styling

Tailwind CSS 3.4.1

Framer Motion 11.0.3

Lucide Icons

Recharts 2.10.4

State & Data

Zustand 4.5.0

TanStack Query 5.17.19

React Router DOM 6.21.3

Axios 1.6.5

🚀 Getting Started
1. Installation
# Clone repository
cd professional-dashboard

# Install dependencies
npm install

2. Run the Project
# Start development server
npm run dev


Open in browser: http://localhost:5173

3. Production Build
npm run build
npm run preview

📁 Project Structure
professional-dashboard/
├── src/
│   ├── components/          # UI Components
│   │   ├── Layout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── StatsCard.tsx
│   │   ├── RevenueChart.tsx
│   │   ├── OrdersTable.tsx
│   │   ├── TopProducts.tsx
│   │   └── RecentActivity.tsx
│   │
│   ├── pages/               # Pages
│   │   ├── DashboardPage.tsx
│   │   └── LoginPage.tsx
│   │
│   ├── store/               # Zustand Store
│   │   └── useAppStore.ts
│   │
│   ├── data/                # Mock Data
│   │   └── mockData.ts
│   │
│   ├── utils/               # Utilities
│   │   └── helpers.ts
│   │
│   ├── types/               # TypeScript Types
│   │   └── index.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json

🎨 Dashboard Features
1. Stats Cards

Total Revenue

Total Users

Number of Orders

Conversion Rate

2. Revenue Chart (Recharts)

Line chart

12-month data

Hover tooltip

Responsive

3. Orders Table

Recent orders

Status indicators

Hover effects

Animations

4. Top Products

Best-selling products

Price and quantity sold

Hover effects

5. Recent Activity

Real-time updates

User actions

Timestamps

🔐 Login

For demo purposes:

Email: Any email (example@test.com
)

Password: 6+ characters (123456)

🎯 Scripts
npm run dev      # Development
npm run build    # Production build
npm run preview  # Preview production build

🔧 Customization
Change Colors

File: tailwind.config.js

colors: {
  primary: {
    500: '#3b82f6',  // Change this
    600: '#2563eb',
  }
}

Logo

File: src/components/Sidebar.tsx

<span className="text-white font-bold text-lg">D</span>
// Change this

API URL

.env file:

VITE_API_URL=https://your-api.com

📊 Mock Data

Currently using mock data:

File: src/data/mockData.ts

To integrate a real API:

Create an API service

Create React Query hooks

Replace mock data with API data

🚀 Deployment
Vercel
npm install -g vercel
vercel

Netlify
npm run build
# Deploy the dist/ folder

GitHub Pages
npm run build
# Deploy the dist/ folder to GitHub Pages

🆘 Troubleshooting
Node modules error
rm -rf node_modules package-lock.json
npm install

Port already in use
npm run dev -- --port 3000

📝 Next Steps

Backend API – Express, Django, Laravel

Database – PostgreSQL, MongoDB

Authentication – JWT, OAuth

More Pages – Users, Products, Settings

Testing – Jest, React Testing Library

📄 License

MIT

Good luck! 🎉
