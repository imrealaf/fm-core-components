import React, { useState, useEffect } from 'react';

import SlidingPanel from '../../src/js/SlidingPanel';

const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <nav>nav</nav>
      <main>
        <SlidingPanel
          id='my-panel'
          className='my-class'
          active={show}
          variant='dark'
          toggle={() => {
            setShow(false);
          }}
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
