import React from 'react';
import { AlertTriangle, Bell, Info } from 'lucide-react';
import type { Alert } from '../types';

const alerts: Alert[] = [
  {
    id: '1',
    type: 'emergency',
    message: 'Patient John Smith reporting severe chest pain',
    timestamp: '2024-03-15T10:30:00Z',
    read: false,
    patientId: '1',
  },
  {
    id: '2',
    type: 'reminder',
    message: 'Appointment reminder: Emma Johnson at 2:00 PM',
    timestamp: '2024-03-15T13:45:00Z',
    read: false,
    patientId: '2',
  },
  {
    id: '3',
    type: 'info',
    message: 'Lab results available for Robert Davis',
    timestamp: '2024-03-15T14:00:00Z',
    read: true,
    patientId: '3',
  },
];

const alertStyles = {
  emergency: 'bg-red-50 text-red-700 border-red-100',
  reminder: 'bg-yellow-50 text-yellow-700 border-yellow-100',
  info: 'bg-blue-50 text-blue-700 border-blue-100',
};

const alertIcons = {
  emergency: AlertTriangle,
  reminder: Bell,
  info: Info,
};

export function AlertSystem() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Alerts & Notifications
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {alerts.map((alert) => {
          const Icon = alertIcons[alert.type];
          return (
            <div
              key={alert.id}
              className={`p-4 ${alertStyles[alert.type]} ${
                !alert.read ? 'border-l-4' : ''
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="mt-1 text-sm opacity-75">
                    {new Date(alert.timestamp).toLocaleTimeString()}
                  </p>
                </div>
                {!alert.read && (
                  <div className="ml-4 flex-shrink-0">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      New
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}