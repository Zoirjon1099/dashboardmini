import { motion } from 'framer-motion';
import { recentOrders } from '../data/mockData';
import { formatCurrency } from '../utils/helpers';

const statusColors = {
  completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  processing: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

const statusLabels = {
  completed: 'Bajarildi',
  processing: 'Jarayonda',
  pending: 'Kutilmoqda',
  cancelled: 'Bekor qilindi',
};

export default function OrdersTable() {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold">So'nggi Buyurtmalar</h3>
        <a href="/orders" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          Barchasini ko'rish →
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Mijoz
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Mahsulot
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Summa
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Holat
              </th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, index) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="py-4 px-4">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {order.customer}
                  </p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </td>
                <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                  {order.product}
                </td>
                <td className="py-4 px-4 font-semibold text-gray-900 dark:text-white">
                  {formatCurrency(order.amount)} so'm
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                    {statusLabels[order.status]}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
