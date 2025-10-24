import React from 'react';
import type { Person } from '../types';
import StatCard from './StatCard';
import GenderDistributionChart from './GenderDistributionChart';
import AgeDistributionChart from './AgeDistributionChart';
import EducationDistributionChart from './EducationDistributionChart';
import JobDistributionChart from './JobDistributionChart';
import DataInsights from './DataInsights';

interface DashboardProps {
  people: Person[];
  onAddPersonClick: () => void;
  onNavigateToDetails: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ people, onAddPersonClick, onNavigateToDetails }) => {
  const averageAge = people.length > 0
    ? (people.reduce((sum, person) => sum + person.age, 0) / people.length).toFixed(1)
    : '0';

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
        <div className="flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <h1 className="text-2xl font-bold ml-2">City Data Analyzer</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onNavigateToDetails}
            className="flex items-center justify-center bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-200"
          >
            <svg xmlns="http://www.w.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            View Population Details
          </button>
          <button
            onClick={onAddPersonClick}
            className="flex items-center justify-center bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add New Person
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-text-primary">City Dashboard</h2>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Population" value={people.length.toString()} />
        <StatCard title="Average Age" value={averageAge} />
        <StatCard title="Distinct Religions" value={new Set(people.map(p => p.religion)).size.toString()} />
      </div>

      {/* AI Insights */}
      <div className="mb-8">
        <DataInsights people={people} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-text-secondary">Gender Distribution</h3>
          <GenderDistributionChart data={people} />
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-text-secondary">Age Distribution</h3>
          <AgeDistributionChart data={people} />
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-text-secondary">Education Levels</h3>
          <EducationDistributionChart data={people} />
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-text-secondary">Job Sectors</h3>
          <JobDistributionChart data={people} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
