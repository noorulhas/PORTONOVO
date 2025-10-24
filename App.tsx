import React, { useState, useMemo } from 'react';
import type { Person } from './types';
import { MOCK_PEOPLE } from './constants';
import AddPersonForm from './components/AddPersonForm';
import Dashboard from './components/Dashboard';
import DetailsPage from './components/DetailsPage';
import Modal from './components/Modal';

export type SortKey = 'firstName' | 'age' | 'registrationDate';
export type SortDirection = 'asc' | 'desc';
export type Page = 'dashboard' | 'details';

export interface SortConfig {
  key: SortKey;
  direction: SortDirection;
}

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>(MOCK_PEOPLE);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'registrationDate', direction: 'desc' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const addPerson = (person: Omit<Person, 'id' | 'registrationDate'>) => {
    setPeople(prevPeople => [
      ...prevPeople,
      { ...person, id: Date.now(), registrationDate: new Date() }
    ]);
  };

  const sortedPeople = useMemo(() => {
    let sortablePeople = [...people];
    sortablePeople.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      
      let comparison = 0;
      if (aVal > bVal) {
        comparison = 1;
      } else if (aVal < bVal) {
        comparison = -1;
      }
      
      return sortConfig.direction === 'asc' ? comparison : comparison * -1;
    });
    return sortablePeople;
  }, [people, sortConfig]);

  const renderPage = () => {
    switch (currentPage) {
      case 'details':
        return (
          <DetailsPage
            people={sortedPeople}
            sortConfig={sortConfig}
            setSortConfig={setSortConfig}
            onNavigateBack={() => setCurrentPage('dashboard')}
          />
        );
      case 'dashboard':
      default:
        return (
          <Dashboard 
            people={sortedPeople} 
            onAddPersonClick={() => setIsModalOpen(true)} 
            onNavigateToDetails={() => setCurrentPage('details')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <main className="flex-1 p-6 lg:p-8">
        {renderPage()}
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddPersonForm 
          addPerson={addPerson}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default App;