import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useToggle } from '../../src/js/hooks';
import { SlidingPanel } from '../../src/js/components';
import { Burger } from '../../src/js/components';

const Nav = () => {
  const panel = useToggle();

  return (
    <Fragment>
      <Burger pos='abs' active={panel.active} onClick={panel.toggle} />
      <nav className='navbar navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          <strong>FM</strong> Core Components
        </Link>
      </nav>
      <SlidingPanel
        active={panel.active}
        toggle={panel.toggle}
        overlayOpacity={0}
        pos='right'
        closeBtn={false}
      >
        <SlidingPanel.Body className='mt-5'>
          <ul className='nav flex-column'>
            <li className='nav-item'>
              <Link className='nav-link link--accent py-3 px-5' to='/'>
                Sliding Panel
              </Link>
            </li>
          </ul>
        </SlidingPanel.Body>
      </SlidingPanel>
    </Fragment>
  );
};

export default Nav;
