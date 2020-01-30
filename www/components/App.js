import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { useToggle } from '../../src/js/hooks';
import { SlidingPanel } from '../../src/js/components';

import Nav from './Nav';
import HomePage from './HomePage';

const App = () => {
  const panel = useToggle();

  useEffect(() => {
    setTimeout(() => {
      panel.show();
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <Nav />
      <main>
        <Switch>
          <Route path='/' exact={true} component={HomePage} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
