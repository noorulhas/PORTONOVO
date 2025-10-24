
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold text-text-secondary">{title}</h3>
      <p className="text-4xl font-bold text-primary mt-2">{value}</p>
    </div>
  );
};

export default StatCard;
