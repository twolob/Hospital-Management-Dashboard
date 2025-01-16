import React from 'react';
import { MessageSquare, Search, Edit } from 'lucide-react';

export function MessagesSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          <Edit className="h-4 w-4 mr-2" />
          New Message
        </button>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          {/* Message List */}
          <div className="col-span-1">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search messages..."
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {[
                { name: 'Dr. Sarah Wilson', message: 'Patient test results are ready', time: '10:30 AM', unread: true },
                { name: 'Dr. Michael Brown', message: 'Schedule update for tomorrow', time: '9:15 AM', unread: false },
                { name: 'Nurse Emma Davis', message: 'New patient admission', time: 'Yesterday', unread: false },
              ].map((chat, index) => (
                <div
                  key={index}
                  className={`p-4 hover:bg-gray-50 cursor-pointer ${
                    chat.unread ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-gray-500" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {chat.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {chat.message}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-xs text-gray-500">{chat.time}</p>
                      {chat.unread && (
                        <span className="inline-flex items-center justify-center h-2 w-2 rounded-full bg-blue-600 mt-1">
                          <span className="sr-only">Unread</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Content */}
          <div className="col-span-2 flex flex-col h-[600px]">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Dr. Sarah Wilson</h3>
                  <p className="text-sm text-gray-500">Online</p>
                </div>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Message bubbles would go here */}
              <div className="flex justify-center items-center h-full text-gray-500">
                Select a conversation to start messaging
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}