import React from 'react';
import type { Appointment } from '../types';

const appointments: Appointment[] = [
  {
    id: '1',
    patientName: 'John Smith',
    doctorName: 'Dr. Sarah Wilson',
    date: '2024-03-15',
    time: '09:00 AM',
    status: 'Scheduled',
    type: 'Regular',
    patientId: 'p1',
    doctorId: 'd1',
    reminders: [],
  },
  {
    id: '2',
    patientName: 'Emma Johnson',
    doctorName: 'Dr. Michael Brown',
    date: '2024-03-15',
    time: '10:30 AM',
    status: 'In Progress',
    type: 'Emergency',
    patientId: 'p2',
    doctorId: 'd2',
    reminders: [],
  },
  {
    id: '3',
    patientName: 'Robert Davis',
    doctorName: 'Dr. Sarah Wilson',
    date: '2024-03-15',
    time: '02:00 PM',
    status: 'Scheduled',
    type: 'Follow-up',
    patientId: 'p3',
    doctorId: 'd1',
    reminders: [],
  },
];

const statusColors = {
  Scheduled: 'bg-yellow-100 text-yellow-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  Completed: 'bg-green-100 text-green-800',
  Cancelled: 'bg-red-100 text-red-800',
};

const typeColors = {
  Regular: 'bg-gray-100 text-gray-800',
  Emergency: 'bg-red-100 text-red-800',
  'Follow-up': 'bg-purple-100 text-purple-800',
};

export function AppointmentList() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Today's Appointments
        </h3>
      </div>
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {appointment.patientName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {appointment.doctorName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{appointment.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      typeColors[appointment.type]
                    }`}
                  >
                    {appointment.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      statusColors[appointment.status]
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}