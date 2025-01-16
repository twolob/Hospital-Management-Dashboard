import React from 'react';
import { User, Lock, Bell, Globe, Shield, Palette } from 'lucide-react';

export function SettingsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      
      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {/* Profile Settings */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-blue-100">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Profile Settings</h3>
                <p className="text-sm text-gray-500">Update your personal information and preferences</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-red-100">
                <Lock className="h-5 w-5 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Security</h3>
                <p className="text-sm text-gray-500">Manage your password and security preferences</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-yellow-100">
                <Bell className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                <p className="text-sm text-gray-500">Configure how you receive notifications</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
        </div>

        {/* Language Settings */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-green-100">
                <Globe className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Language & Region</h3>
                <p className="text-sm text-gray-500">Set your language and regional preferences</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-purple-100">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Privacy</h3>
                <p className="text-sm text-gray-500">Manage your privacy settings and data sharing</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-indigo-100">
                <Palette className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Appearance</h3>
                <p className="text-sm text-gray-500">Customize the look and feel of your dashboard</p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}