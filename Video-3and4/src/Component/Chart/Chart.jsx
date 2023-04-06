import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
let students = [
    { id: 1, name: "John", math: 90, physics: 80, chemistry: 85 },
    { id: 2, name: "Jane", math: 85, physics: 90, chemistry: 95 },
    { id: 3, name: "Bob", math: 75, physics: 80, chemistry: 90 },
    { id: 4, name: "Alice", math: 95, physics: 90, chemistry: 85 }
  ];
const Chart = () => {
    return (
        <div>
<LineChart  width={500}
          height={300}
          data={students}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
              <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
 <Line type="monotone" dataKey="math" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
          <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
</LineChart>
            
        </div>
    );
};

export default Chart;