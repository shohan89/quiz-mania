import React, { useContext } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { TopicsContext } from './Root';

const Statistics = () => {
  const quiz = useContext( TopicsContext ); //? Using context for accessing quiz
  return (
    <div className='mt-10 content-center grid grid-cols-1 md:grid-cols-2 ml-16 mr-16 justify-items-center items-center	 '>
      <div>
      <h2 className='text-2xl font-bold mb-3 text-orange-600'>Statistics</h2>
      <p>The chart represents number of total questions based on the topic.</p>
      </div>
      <div className="chart-container">
            <LineChart width={ 600 } height={ 300 } data={ quiz } margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type={ 'monotone' } dataKey= 'total' stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
            </LineChart>
      </div>
    </div>
  );
};

export default Statistics;