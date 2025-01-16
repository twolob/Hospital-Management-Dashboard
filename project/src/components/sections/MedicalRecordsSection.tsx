import React from 'react';
import { FileText, Download, Upload, Search } from 'lucide-react';

export function MedicalRecordsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Medical Records</h2>
      
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="relative flex-1 max-w-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="search"
                placeholder="Search medical records..."
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                <Upload className="h-4 w-4 mr-2" />
                Upload Records
              </button>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Lab Results', count: 156, icon: FileText },
              { name: 'Prescriptions', count: 89, icon: FileText },
              { name: 'Imaging Reports', count: 42, icon: FileText },
              { name: 'Clinical Notes', count: 234, icon: FileText },
              { name: 'Vaccination Records', count: 67, icon: FileText },
              { name: 'Treatment Plans', count: 112, icon: FileText },
            ].map((category) => (
              <div key={category.name} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-500 cursor-pointer transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <category.icon className="h-8 w-8 text-blue-600" />
                    <h3 className="mt-2 text-lg font-medium text-gray-900">{category.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{category.count} files</p>
                  </div>
                  <Download className="h-5 w-5 text-gray-400 hover:text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}