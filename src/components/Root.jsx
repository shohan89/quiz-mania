import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

// creating Topics Context for accessing all context 
export const TopicsContext = createContext([]);
const Root = () => {
  const topicsData = useLoaderData();
  const topics = topicsData.data;
  return (
    <div>
      <TopicsContext.Provider value={ topics }>
        <Header />
        <Outlet />
        <Footer />
      </TopicsContext.Provider>
    </div>
  );
};

export default Root;