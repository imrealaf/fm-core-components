import React, { useState, useEffect } from 'react';

import { useToggle } from '../../src/js/hooks';
import { SlidingPanel } from '../../src/js/components';

const App = () => {
  const panel = useToggle();

  useEffect(() => {
    setTimeout(() => {
      panel.show();
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <nav>nav</nav>
      <main>
        <SlidingPanel
          id='my-panel'
          className='my-class'
          active={panel.active}
          variant='dark'
          toggle={panel.toggle}
          onShow={() => {
            console.log('panel Show');
          }}
          onShown={() => {
            console.log('panel Shown');
          }}
          onHide={() => {
            console.log('panel hide');
          }}
          onHidden={() => {
            console.log('panel hidden');
          }}
        >
          <SlidingPanel.Header>
            This is a sliding panel Header
          </SlidingPanel.Header>
          <SlidingPanel.Body>This is a sliding panel body</SlidingPanel.Body>
        </SlidingPanel>
      </main>
    </React.Fragment>
  );
};

export default App;
