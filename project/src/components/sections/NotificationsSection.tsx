import React from 'react';
import { AlertSystem } from '../AlertSystem';
import { Bell, Settings } from 'lucide-react';

export function NotificationsSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <Settings className="h-4 w-4 mr-2" />
          Notification Settings
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-blue-100">
              <Bell className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="ml-3 text-lg font-medium text-gray-900">All Notifications</h3>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md">
              Mark all as read
            </button>
            <button className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md">
              Clear all
            </button>
          </div>
        </div>

        <AlertSystem />
      </div>
    </div>
  );
}