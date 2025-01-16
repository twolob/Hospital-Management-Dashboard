import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { PatientsSection } from './components/sections/PatientsSection';
import { AppointmentsSection } from './components/sections/AppointmentsSection';
import { MedicalRecordsSection } from './components/sections/MedicalRecordsSection';
import { BillingSection } from './components/sections/BillingSection';
import { InventorySection } from './components/sections/InventorySection';
import { AnalyticsSection } from './components/sections/AnalyticsSection';
import { SettingsSection } from './components/sections/SettingsSection';
import { NotificationsSection } from './components/sections/NotificationsSection';
import { MessagesSection } from './components/sections/MessagesSection';
import { TelemedicineSection } from './components/sections/TelemedicineSection';
// import { StatsGrid } from './components/StatsGrid';
import DashboardSection from './components/sections/DashboardSection';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection />
      case 'patients':
        return <PatientsSection />;
      case 'appointments':
        return <AppointmentsSection />;
      case 'records':
        return <MedicalRecordsSection />;
      case 'billing':
        return <BillingSection />;
      case 'inventory':
        return <InventorySection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'settings':
        return <SettingsSection />;
      case 'notifications':
        return <NotificationsSection />;
      case 'messages':
        return <MessagesSection />;
      case 'telemedicine':
        return <TelemedicineSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="lg:pl-64">
        <Header />
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;