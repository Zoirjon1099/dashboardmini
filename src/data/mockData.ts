import { DashboardStats, Order, Product, Activity, ChartData } from '../types';

export const dashboardStats: DashboardStats = {
  totalRevenue: 45231000,
  revenueChange: 12.5,
  totalUsers: 2453,
  usersChange: 8.2,
  totalOrders: 892,
  ordersChange: -3.1,
  conversionRate: 3.24,
  conversionChange: 0.4,
};

export const revenueChartData: ChartData[] = [
  { name: 'Yan', value: 3200000, orders: 120 },
  { name: 'Fev', value: 3800000, orders: 145 },
  { name: 'Mar', value: 4200000, orders: 160 },
  { name: 'Apr', value: 3900000, orders: 152 },
  { name: 'May', value: 4500000, orders: 178 },
  { name: 'Iyun', value: 5100000, orders: 195 },
  { name: 'Iyul', value: 4800000, orders: 188 },
  { name: 'Avg', value: 5300000, orders: 205 },
  { name: 'Sen', value: 5600000, orders: 215 },
  { name: 'Okt', value: 5900000, orders: 228 },
  { name: 'Noy', value: 6200000, orders: 240 },
  { name: 'Dek', value: 6500000, orders: 255 },
];

export const recentOrders: Order[] = [
  {
    id: '1',
    customer: 'Aziz Rahimov',
    product: 'Premium Package',
    amount: 450000,
    status: 'completed',
    date: '2024-02-07',
  },
  {
    id: '2',
    customer: 'Nilufar Karimova',
    product: 'Standard Plan',
    amount: 250000,
    status: 'processing',
    date: '2024-02-07',
  },
  {
    id: '3',
    customer: 'Jamshid Tursunov',
    product: 'Basic Service',
    amount: 150000,
    status: 'pending',
    date: '2024-02-06',
  },
  {
    id: '4',
    customer: 'Malika Alimova',
    product: 'Pro Package',
    amount: 380000,
    status: 'completed',
    date: '2024-02-06',
  },
  {
    id: '5',
    customer: 'Sardor Yusupov',
    product: 'Enterprise Plan',
    amount: 650000,
    status: 'processing',
    date: '2024-02-05',
  },
];

export const topProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Package',
    category: 'Subscription',
    price: 450000,
    stock: 15,
    sales: 145,
  },
  {
    id: '2',
    name: 'Pro Package',
    category: 'Subscription',
    price: 380000,
    stock: 22,
    sales: 128,
  },
  {
    id: '3',
    name: 'Standard Plan',
    category: 'Subscription',
    price: 250000,
    stock: 35,
    sales: 112,
  },
  {
    id: '4',
    name: 'Basic Service',
    category: 'Service',
    price: 150000,
    stock: 50,
    sales: 98,
  },
];

export const recentActivity: Activity[] = [
  {
    id: '1',
    user: 'Aziz Rahimov',
    action: 'yangi buyurtma yaratdi',
    timestamp: '5 daqiqa oldin',
  },
  {
    id: '2',
    user: 'Nilufar Karimova',
    action: 'profilni yangiladi',
    timestamp: '15 daqiqa oldin',
  },
  {
    id: '3',
    user: 'Jamshid Tursunov',
    action: 'to\'lovni amalga oshirdi',
    timestamp: '1 soat oldin',
  },
  {
    id: '4',
    user: 'Malika Alimova',
    action: 'buyurtmani bekor qildi',
    timestamp: '2 soat oldin',
  },
  {
    id: '5',
    user: 'Sardor Yusupov',
    action: 'yangi hisob yaratdi',
    timestamp: '3 soat oldin',
  },
];
