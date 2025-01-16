import React from 'react';
import { Video, Phone, MessageSquare, Calendar } from 'lucide-react';

export function TelemedicineSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Telemedicine</h2>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          { title: 'Upcoming Consultations', value: '8', icon: Calendar, color: 'blue' },
          { title: 'Active Sessions', value: '2', icon: Video, color: 'green' },
          { title: 'Completed Today', value: '12', icon: Phone, color: 'purple' },
          { title: 'Patient Messages', value: '24', icon: MessageSquare, color: 'yellow' },
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Virtual Consultations</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 bg-gray-50"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { patient: 'John Smith', time: '10:30 AM', type: 'Follow-up', status: 'Scheduled' },
                  { patient: 'Emma Johnson', time: '11:15 AM', type: 'Initial Consultation', status: 'Confirmed' },
                  { patient: 'Michael Brown', time: '2:00 PM', type: 'Emergency', status: 'Waiting' },
                ].map((appointment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {appointment.patient}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {appointment.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {appointment.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        appointment.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
                        appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        Join Call
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
              <div className="text-center">
                <Video className="mx-auto h-8 w-8 text-gray-400" />
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  Start Video Call
                </span>
              </div>
            </button>
            <button className="flex items-center justify-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
              <div className="text-center">
                <Phone className="mx-auto h-8 w-8 text-gray-400" />
                <span className="mt-2 block text-sm font-medium text-gray-900">
                  Start Audio Call
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Video Quality</span>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Excellent
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Network Status</span>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Strong
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Server Status</span>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}