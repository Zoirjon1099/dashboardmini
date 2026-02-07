import { motion } from 'framer-motion';
import { topProducts } from '../data/mockData';
import { formatCurrency } from '../utils/helpers';

export default function TopProducts() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-bold mb-6">Top Mahsulotlar</h3>

      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {product.name}
              </h4>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-900 dark:text-white">
                {formatCurrency(product.price)} so'm
              </p>
              <p className="text-sm text-gray-500">{product.sales} sotildi</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
