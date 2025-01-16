import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1">
          <div className="flex w-full md:ml-0">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search patients, appointments..."
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="ml-4 flex items-center space-x-4">
          <button className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
          </button>
          <div className="flex items-center">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Dr. Sarah Wilson</span>
          </div>
        </div>
      </div>
    </header>
  );
}