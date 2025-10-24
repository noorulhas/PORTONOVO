
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Person } from '../types';
import { AGE_CHART_COLOR } from '../constants';

interface ChartProps {
  data: Person[];
}

const AgeDistributionChart: React.FC<ChartProps> = ({ data }) => {
  const ageBrackets = {
    '0-17': 0,
    '18-25': 0,
    '26-35': 0,
    '36-50': 0,
    '51-65': 0,
    '66+': 0,
  };

  data.forEach(person => {
    if (person.age <= 17) ageBrackets['0-17']++;
    else if (person.age <= 25) ageBrackets['18-25']++;
    else if (person.age <= 35) ageBrackets['26-35']++;
    else if (person.age <= 50) ageBrackets['36-50']++;
    else if (person.age <= 65) ageBrackets['51-65']++;
    else ageBrackets['66+']++;
  });

  const chartData = Object.entries(ageBrackets).map(([name, value]) => ({ name, count: value }));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={AGE_CHART_COLOR} name="People" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AgeDistributionChart;
