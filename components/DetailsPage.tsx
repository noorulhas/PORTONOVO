import React from 'react';
import type { Person } from '../types';
import type { SortConfig } from '../App';
import PeopleTable from './PeopleTable';

interface DetailsPageProps {
  people: Person[];
  sortConfig: SortConfig;
  setSortConfig: (config: SortConfig) => void;
  onNavigateBack: () => void;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ people, sortConfig, setSortConfig, onNavigateBack }) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">City Population Details</h1>
        </div>
        <button
          onClick={onNavigateBack}
          className="flex items-center justify-center bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Dashboard
        </button>
      </div>

      <PeopleTable 
        people={people} 
        sortConfig={sortConfig} 
        setSortConfig={setSortConfig} 
      />
    </div>
  );
};

export default DetailsPage;
