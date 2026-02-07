# 🚀 Professional Dashboard

Zamonaviy, professional admin dashboard. React, TypeScript va eng so'nggi texnologiyalar asosida qurilgan.

## ✨ Xususiyatlar

- ⚡ **Vite** - Tezkor development
- ⚛️ **React 18** + TypeScript
- 🎨 **Tailwind CSS** - Zamonaviy dizayn
- 📊 **Recharts** - Chiroyli grafiklar
- 🔄 **React Query** - Server state
- 🗂️ **React Router** - Routing
- 📝 **React Hook Form + Zod** - Form validation
- 🎭 **Framer Motion** - Animatsiyalar
- 🏪 **Zustand** - State management
- 🌗 **Dark Mode** - Tema
- 📱 **Responsive** - Mobile-friendly

## 📦 Texnologiyalar

### Core
- React 18.2.0
- TypeScript 5.3.3
- Vite 5.0.11

### UI & Styling
- Tailwind CSS 3.4.1
- Framer Motion 11.0.3
- Lucide Icons
- Recharts 2.10.4

### State & Data
- Zustand 4.5.0
- TanStack Query 5.17.19
- React Router DOM 6.21.3
- Axios 1.6.5

## 🚀 Boshlash

### 1. O'rnatish

\`\`\`bash
# Clone repository
cd professional-dashboard

# Install dependencies
npm install
\`\`\`

### 2. Ishga tushirish

\`\`\`bash
# Development server
npm run dev
\`\`\`

Brauzerda: http://localhost:5173

### 3. Production build

\`\`\`bash
npm run build
npm run preview
\`\`\`

## 📁 Loyiha Strukturasi

\`\`\`
professional-dashboard/
├── src/
│   ├── components/          # UI Komponentlar
│   │   ├── Layout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── StatsCard.tsx
│   │   ├── RevenueChart.tsx
│   │   ├── OrdersTable.tsx
│   │   ├── TopProducts.tsx
│   │   └── RecentActivity.tsx
│   │
│   ├── pages/              # Sahifalar
│   │   ├── DashboardPage.tsx
│   │   └── LoginPage.tsx
│   │
│   ├── store/              # Zustand store
│   │   └── useAppStore.ts
│   │
│   ├── data/               # Mock data
│   │   └── mockData.ts
│   │
│   ├── utils/              # Utilities
│   │   └── helpers.ts
│   │
│   ├── types/              # TypeScript types
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
\`\`\`

## 🎨 Dashboard Xususiyatlari

### 1. Stats Cards
- Umumiy daromad
- Jami foydalanuvchilar
- Buyurtmalar soni
- Konversiya darajasi

### 2. Daromad Grafigi (Recharts)
- Line chart
- 12 oylik ma'lumot
- Hover tooltip
- Responsive

### 3. Buyurtmalar Jadvali
- So'nggi buyurtmalar
- Holat ko'rsatkichlari
- Hover effects
- Animatsiyalar

### 4. Top Mahsulotlar
- Eng ko'p sotiladigan
- Narx va sotilgan miqdor
- Hover effects

### 5. So'nggi Faoliyat
- Real-time updates
- User actions
- Timestamp

## 🔐 Login

Demo uchun:
- **Email:** istalgan email (example@test.com)
- **Parol:** 6+ belgi (123456)

## 🎯 Scriptlar

\`\`\`bash
npm run dev      # Development
npm run build    # Production build
npm run preview  # Preview build
\`\`\`

## 🔧 Sozlash

### Ranglarni o'zgartirish

**Fayl:** `tailwind.config.js`

\`\`\`js
colors: {
  primary: {
    500: '#3b82f6',  // O'zgartiring
    600: '#2563eb',
  }
}
\`\`\`

### Logo

**Fayl:** `src/components/Sidebar.tsx`

\`\`\`tsx
<span className="text-white font-bold text-lg">D</span>
// O'zgartiring
\`\`\`

### API URL

**.env** fayl:

\`\`\`env
VITE_API_URL=https://your-api.com
\`\`\`

## 📊 Mock Data

Hozirda mock data ishlatilmoqda:

**Fayl:** `src/data/mockData.ts`

Real API uchun:
1. API service yarating
2. React Query hooks yarating
3. Mock data o'rniga API'dan data oling

## 🚀 Deploy

### Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Netlify

\`\`\`bash
npm run build
# dist/ papkani deploy qiling
\`\`\`

### GitHub Pages

\`\`\`bash
npm run build
# dist/ papkani GitHub Pages ga deploy qiling
\`\`\`

## 🆘 Muammolar

### Node modules xatoligi

\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Port band

\`\`\`bash
npm run dev -- --port 3000
\`\`\`

## 📝 Keyingi Qadamlar

1. **Backend API** - Express, Django, Laravel
2. **Database** - PostgreSQL, MongoDB
3. **Authentication** - JWT, OAuth
4. **More Pages** - Users, Products, Settings
5. **Tests** - Jest, React Testing Library

## 📄 License

MIT

---

**Muvaffaqiyatlar! 🎉**
