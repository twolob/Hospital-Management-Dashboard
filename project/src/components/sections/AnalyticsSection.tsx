import React from 'react';
import { BarChart2, TrendingUp, Users, Calendar } from 'lucide-react';

export function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Total Patients', value: '2,543', change: '+12.5%', icon: Users, color: 'blue' },
          { title: 'Monthly Revenue', value: '$124,592', change: '+8.2%', icon: TrendingUp, color: 'green' },
          { title: 'Appointments', value: '1,234', change: '+15.3%', icon: Calendar, color: 'purple' },
          { title: 'Patient Satisfaction', value: '95%', change: '+2.1%', icon: BarChart2, color: 'yellow' },
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="ml-2 text-sm font-medium text-green-600">{stat.change}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Patient Demographics</h3>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
            {/* Placeholder for demographic chart */}
            <BarChart2 className="h-12 w-12 text-gray-400" />
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trends</h3>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
            {/* Placeholder for revenue chart */}
            <TrendingUp className="h-12 w-12 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Performing Departments</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patients
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Growth
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { department: 'Cardiology', patients: 524, revenue: '$125,430', growth: '+15.3%' },
                  { department: 'Orthopedics', patients: 423, revenue: '$98,234', growth: '+12.1%' },
                  { department: 'Pediatrics', patients: 389, revenue: '$87,654', growth: '+8.7%' },
                ].map((dept, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {dept.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dept.patients}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {dept.revenue}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                      {dept.growth}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}