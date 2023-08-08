import React, { useContext } from 'react';
import { Hero } from './Hero';
import { TopicsContext } from './Root';

const Topics = () => {
  const topics = useContext( TopicsContext );
  console.log( topics );
  return (
    <div>
      <Hero />
      <h2>This is static</h2>
    </div>
  );
};

export default Topics;