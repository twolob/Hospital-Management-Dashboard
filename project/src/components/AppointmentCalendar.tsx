import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';
import type { Appointment } from '../types';

const appointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    patientName: 'John Smith',
    doctorId: '1',
    doctorName: 'Dr. Sarah Wilson',
    date: '2024-03-15',
    time: '09:00 AM',
    status: 'Scheduled',
    type: 'Regular',
    reminders: true,
  },
  // Add more appointments
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function AppointmentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];
    
    // Add padding days from previous month
    for (let i = 0; i < firstDay.getDay(); i++) {
      const prevDate = new Date(year, month, -i);
      days.unshift({ date: prevDate, isCurrentMonth: false });
    }
    
    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }
    
    return days;
  };

  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter(appointment => appointment.date === date.toISOString().split('T')[0]);
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Appointment Calendar
            </h3>
            <div className="flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => setView('month')}
                className={`px-4 py-2 text-sm font-medium ${
                  view === 'month'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-300 rounded-l-md`}
              >
                Month
              </button>
              <button
                onClick={() => setView('week')}
                className={`px-4 py-2 text-sm font-medium ${
                  view === 'week'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border-t border-b border-gray-300`}
              >
                Week
              </button>
              <button
                onClick={() => setView('day')}
                className={`px-4 py-2 text-sm font-medium ${
                  view === 'day'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-300 rounded-r-md`}
              >
                Day
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                const newDate = new Date(currentDate);
                newDate.setMonth(newDate.getMonth() - 1);
                setCurrentDate(newDate);
              }}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <h4 className="text-lg font-medium text-gray-900">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h4>
            <button
              onClick={() => {
                const newDate = new Date(currentDate);
                newDate.setMonth(newDate.getMonth() + 1);
                setCurrentDate(newDate);
              }}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {days.map((day) => (
            <div
              key={day}
              className="bg-gray-50 py-2 text-center text-sm font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
          {getDaysInMonth(currentDate).map(({ date, isCurrentMonth }, index) => {
            const appointments = getAppointmentsForDate(date);
            return (
              <div
                key={index}
                className={`min-h-32 bg-white p-2 ${
                  isCurrentMonth ? '' : 'bg-gray-50 text-gray-400'
                }`}
              >
                <div className="font-medium text-sm">{date.getDate()}</div>
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="mt-1 text-xs bg-blue-50 text-blue-700 p-1 rounded"
                  >
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {appointment.time}
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {appointment.patientName}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}