import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { formatCurrency, formatPercentage } from '../utils/helpers';

interface StatsCardProps {
  title: string;
  value: number | string;
  change?: number;
  icon: LucideIcon;
  index?: number;
  type?: 'currency' | 'number' | 'percentage';
}

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  index = 0,
  type = 'number',
}: StatsCardProps) {
  const isPositive = change !== undefined && change >= 0;

  const formatValue = () => {
    if (typeof value === 'string') return value;
    if (type === 'currency') return formatCurrency(value) + ' so\'m';
    if (type === 'percentage') return value.toFixed(2) + '%';
    return value.toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            {title}
          </p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {formatValue()}
          </h3>
        </div>
        <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
      </div>

      {change !== undefined && (
        <div className="flex items-center gap-2">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-green-600" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-600" />
          )}
          <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {formatPercentage(change)}
          </span>
          <span className="text-sm text-gray-500">oxirgi oyda</span>
        </div>
      )}
    </motion.div>
  );
}
