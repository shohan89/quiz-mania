import React, { useContext } from 'react';
import { Hero } from './Hero';
import { TopicsContext } from './Root';
import Topic from './Topic';

const Topics = () => {
  const topics = useContext( TopicsContext );
  console.log( topics );
  return (
    <div>
      <Hero />
      <h2 className='text-center font-bold text-2xl mt-5 mb-10'>All Topics</h2>
      {/* TODO: Add a list of all the topics */}
      <div className="ml-12 mr-12 grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        {
          topics.map( topic => <Topic key={ topic.id } topic={ topic } /> )
        }
      </div>
    </div>
  );
};

export default Topics;