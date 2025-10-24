
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Person } from '../types';
import { JobSector } from '../types';
import { JOB_SECTOR_COLORS } from '../constants';

interface ChartProps {
  data: Person[];
}

const JobDistributionChart: React.FC<ChartProps> = ({ data }) => {
  const jobData = Object.values(JobSector).map((sector, index) => ({
    name: sector,
    count: data.filter(p => p.job === sector).length,
    fill: JOB_SECTOR_COLORS[index % JOB_SECTOR_COLORS.length],
  })).filter(item => item.count > 0);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={jobData} layout="vertical" margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={100} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" name="People" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default JobDistributionChart;
