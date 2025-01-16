import React from 'react';
import type { Doctor } from '../types';

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialization: 'Cardiologist',
    availability: 'Available',
    patients: 125,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '2',
    name: 'Dr. Michael Brown',
    specialization: 'Pediatrician',
    availability: 'In Surgery',
    patients: 98,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '3',
    name: 'Dr. Emily Davis',
    specialization: 'Neurologist',
    availability: 'Available',
    patients: 156,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export function DoctorList() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Active Doctors
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={doctor.image}
                    alt={doctor.name}
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {doctor.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {doctor.specialization}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-500">
                    {doctor.patients} patients
                  </div>
                  <div className="text-sm text-gray-500">
                    Rating: {doctor.rating}
                  </div>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      doctor.availability === 'Available'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {doctor.availability}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}