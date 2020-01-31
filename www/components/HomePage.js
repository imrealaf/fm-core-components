import React from 'react';

import { Hero } from '../../src/js/components';

const HomePage = () => {
  return (
    <div className='page'>
      <Hero
        img='https://images.unsplash.com/photo-1580414409701-0da195c2935a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950'
        vh={75}
      >
        <div className='container'>
          <h1>Title</h1>
        </div>
      </Hero>
    </div>
  );
};

export default HomePage;
