
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Person } from '../types';
import { EducationLevel } from '../types';
import { EDUCATION_COLORS } from '../constants';

interface ChartProps {
  data: Person[];
}

const EducationDistributionChart: React.FC<ChartProps> = ({ data }) => {
  const educationData = Object.values(EducationLevel).map(level => ({
    name: level,
    value: data.filter(p => p.education === level).length,
  })).filter(item => item.value > 0);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={educationData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            nameKey="name"
          >
            {educationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={EDUCATION_COLORS[index % EDUCATION_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EducationDistributionChart;
