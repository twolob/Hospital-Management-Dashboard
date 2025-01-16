import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  CreditCard,
  Package,
  BarChart2,
  Settings,
  Bell,
  MessageSquare,
  Video,
} from 'lucide-react';

const navigation = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'patients', name: 'Patients', icon: Users },
  { id: 'appointments', name: 'Appointments', icon: Calendar },
  { id: 'records', name: 'Medical Records', icon: FileText },
  { id: 'billing', name: 'Billing', icon: CreditCard },
  { id: 'inventory', name: 'Inventory', icon: Package },
  { id: 'analytics', name: 'Analytics', icon: BarChart2 },
  { id: 'settings', name: 'Settings', icon: Settings },
  { id: 'notifications', name: 'Notifications', icon: Bell },
  { id: 'messages', name: 'Messages', icon: MessageSquare },
  { id: 'telemedicine', name: 'Telemedicine', icon: Video },
];

export function Sidebar({ activeSection, onSectionChange }: { 
  activeSection: string;
  onSectionChange: (section: string) => void;
}) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto bg-white border-r border-gray-200 pt-5 pb-4">
        <div className="flex items-center flex-shrink-0 px-4">
          <h1 className="text-xl font-bold text-gray-900">MediCare Plus</h1>
        </div>
        <nav className="mt-8 flex-1 space-y-1 px-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium ${
                activeSection === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className={`mr-3 h-5 w-5 ${
                activeSection === item.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
              }`} />
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}