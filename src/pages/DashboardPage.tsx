import { motion } from 'framer-motion';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import RevenueChart from '../components/RevenueChart';
import OrdersTable from '../components/OrdersTable';
import TopProducts from '../components/TopProducts';
import RecentActivity from '../components/RecentActivity';
import { dashboardStats } from '../data/mockData';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Biznesingizni boshqarish va tahlil qilish
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Umumiy Daromad"
          value={dashboardStats.totalRevenue}
          change={dashboardStats.revenueChange}
          icon={DollarSign}
          type="currency"
          index={0}
        />
        <StatsCard
          title="Jami Foydalanuvchilar"
          value={dashboardStats.totalUsers}
          change={dashboardStats.usersChange}
          icon={Users}
          index={1}
        />
        <StatsCard
          title="Buyurtmalar"
          value={dashboardStats.totalOrders}
          change={dashboardStats.ordersChange}
          icon={ShoppingCart}
          index={2}
        />
        <StatsCard
          title="Konversiya"
          value={dashboardStats.conversionRate}
          change={dashboardStats.conversionChange}
          icon={TrendingUp}
          type="percentage"
          index={3}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <TopProducts />
        </div>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrdersTable />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
