import React from 'react';
import { StatsGrid } from '../StatsGrid';
import { AppointmentList } from '../AppointmentList';
import { DoctorList } from '../DoctorList';

function DashboardSection() {
  return (
    // <div className="min-h-screen bg-gray-100">
      <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <StatsGrid />
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <AppointmentList />
              <DoctorList />
            </div>
          </div>
        </main>
    // </div>
  );
}

export default DashboardSection;