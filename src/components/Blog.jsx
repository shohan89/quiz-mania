import React from 'react';

const Blog = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-16'>
      <div>
        <h3 className='text-2xl font-bold'>Whats is the purpose of react router?</h3>
        <p>React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>
      </div>
      <div>
        <h3 className='text-2xl font-bold'>How does Context API works?</h3>
        <p>Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.</p>
      </div>
      <div>
        <h3 className='text-2xl font-bold'>What is useref in react?</h3>
        <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
      </div>
    </div>
  );
};

export default Blog;