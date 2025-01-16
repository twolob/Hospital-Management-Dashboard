import React from 'react';
import { PatientList } from '../PatientList';

export function PatientsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
      <PatientList />
    </div>
  );
}