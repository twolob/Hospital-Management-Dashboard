import React from 'react';
import { AppointmentCalendar } from '../AppointmentCalendar';
import { AppointmentList } from '../AppointmentList';

export function AppointmentsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
      <AppointmentCalendar />
      <AppointmentList />
    </div>
  );
}