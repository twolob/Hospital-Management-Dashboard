import React from 'react';
import { Users, Calendar, DollarSign, Activity } from 'lucide-react';
import type { Stats } from '../types';

const stats: Stats[] = [
  {
    label: 'Total Patients',
    value: '2,543',
    change: 12.5,
    icon: Users,
  },
  {
    label: 'Today\'s Appointments',
    value: '24',
    change: -2.3,
    icon: Calendar,
  },
  {
    label: 'Revenue (MTD)',
    value: '$42,500',
    change: 8.2,
    icon: DollarSign,
  },
  {
    label: 'Patient Satisfaction',
    value: '95%',
    change: 3.1,
    icon: Activity,
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-md bg-blue-500 p-3">
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              {stat.label}
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                stat.change >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change >= 0 ? '+' : ''}
              {stat.change}%
            </p>
          </dd>
        </div>
      ))}
    </div>
  );
}