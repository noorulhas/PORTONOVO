import React from 'react';
import type { Person } from '../types';
import type { SortConfig, SortKey, SortDirection } from '../App';

interface PeopleTableProps {
  people: Person[];
  sortConfig: SortConfig;
  setSortConfig: (config: SortConfig) => void;
}

const SortableHeader: React.FC<{
  label: string;
  sortKey: SortKey;
  sortConfig: SortConfig;
  requestSort: (key: SortKey) => void;
}> = ({ label, sortKey, sortConfig, requestSort }) => {
  const isSorted = sortConfig.key === sortKey;
  const sortIcon = isSorted ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ' ';

  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider cursor-pointer select-none"
      onClick={() => requestSort(sortKey)}
    >
      <div className="flex items-center">
        {label}
        <span className="ml-2 w-4 text-center">{sortIcon}</span>
      </div>
    </th>
  );
};

const PeopleTable: React.FC<PeopleTableProps> = ({ people, sortConfig, setSortConfig }) => {
  const requestSort = (key: SortKey) => {
    let direction: SortDirection = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };
  
  return (
    <div className="bg-card p-6 rounded-lg shadow-md">
       <h3 className="text-xl font-semibold mb-4 text-text-secondary">City Population Details</h3>
       <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <SortableHeader label="Name" sortKey="firstName" sortConfig={sortConfig} requestSort={requestSort} />
              <SortableHeader label="Age" sortKey="age" sortConfig={sortConfig} requestSort={requestSort} />
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Gender
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Education
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Job Sector
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                Town
              </th>
              <SortableHeader label="Registration Date" sortKey="registrationDate" sortConfig={sortConfig} requestSort={requestSort} />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {people.map((person) => (
              <tr key={person.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">{person.firstName} {person.familyName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{person.age}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{person.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{person.education}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{person.job}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{person.town}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{formatDate(person.registrationDate)}</td>
              </tr>
            ))}
             {people.length === 0 && (
                <tr>
                    <td colSpan={7} className="text-center py-10 text-text-secondary">No population data available.</td>
                </tr>
            )}
          </tbody>
        </table>
       </div>
    </div>
  );
};

export default PeopleTable;