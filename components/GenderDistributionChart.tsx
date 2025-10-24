
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Person } from '../types';
import { Gender } from '../types';
import { GENDER_COLORS } from '../constants';

interface ChartProps {
  data: Person[];
}

const GenderDistributionChart: React.FC<ChartProps> = ({ data }) => {
  const genderData = Object.values(Gender).map(gender => ({
    name: gender,
    value: data.filter(p => p.gender === gender).length,
  })).filter(item => item.value > 0);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={genderData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {genderData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenderDistributionChart;
