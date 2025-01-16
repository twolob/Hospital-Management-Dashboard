export interface Patient {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  address: string;
  bloodType: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  medicalHistory: {
    conditions: string[];
    allergies: string[];
    medications: string[];
  };
  lastVisit: string;
  upcomingAppointment?: string;
  status: 'Active' | 'Inactive';
  treatmentPlan?: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  availability: string;
  patients: number;
  rating: number;
  image: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
  type: 'Regular' | 'Emergency' | 'Follow-up';
  notes?: string;
  reminders: boolean;
}

export interface Stats {
  label: string;
  value: string | number;
  change: number;
  icon: React.ComponentType;
}

export interface Alert {
  id: string;
  type: 'emergency' | 'reminder' | 'info';
  message: string;
  timestamp: string;
  read: boolean;
  patientId?: string;
}