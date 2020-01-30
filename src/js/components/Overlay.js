import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { setOpacity } from '../utils';

const compName = 'overlay';

const propTypes = {
  variant: PropTypes.string,
  active: PropTypes.bool,
  opacity: PropTypes.number
};

const defaultProps = {
  variant: 'dark',
  active: false,
  opacity: 0.3
};

const Overlay = ({ variant, active, opacity, onClick }) => {
  const initialClasses = classNames(compName, `${compName}--${variant}`);
  const ref = useRef();

  useEffect(() => {
    active ? show() : hide();
  });

  const show = () => {
    setTimeout(() => {
      setOpacity(ref, opacity);
    });
  };

  const hide = () => {
    setOpacity(ref);
  };

  return <div className={initialClasses} ref={ref} onClick={onClick} />;
};

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default Overlay;
