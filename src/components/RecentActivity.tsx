import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { recentActivity } from '../data/mockData';

export default function RecentActivity() {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-bold mb-6">So'nggi Faoliyat</h3>

      <div className="space-y-4">
        {recentActivity.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
              <Activity className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900 dark:text-white">
                <span className="font-semibold">{activity.user}</span>{' '}
                {activity.action}
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
