import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <div className="card card-side bg-base-100 shadow-xl rounded-lg">
      <figure><img className='w-[100%] mb-2 p-2 bg-gray-200' src={ logo } alt="Movie"/></figure>
      <div className="card-body flex justify-between p-5">
        <h2 className="card-title font-bold text-gray-600">{ name }</h2>
        <div className="card-actions justify-end">
          <button className="bg-orange-400 px-2 py-2 text-white rounded-sm">
            <Link to='/blog'>Start Practice</Link>
          </button>
    </div>
  </div>
</div>
  );
};

export default Topic;