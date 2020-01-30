import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { setOpacity, defer } from '../utils';

/**
 *
 *  Comp name
 *
 */
const compName = 'overlay';

/**
 *
 *  Prop types
 *
 */
const propTypes = {
  /**
   *  variant
   *  @type string
   */
  variant: PropTypes.oneOf(['light', 'dark']),

  /**
   *  active
   *  @type boolean
   */
  active: PropTypes.bool,

  /**
   *  opacity
   *  @type number (float)
   */
  opacity: PropTypes.number
};

/**
 *
 *  Default props
 *
 */
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
    defer(() => {
      setOpacity(ref, opacity);
    });
  };

  const hide = () => {
    setOpacity(ref);
  };

  return <div className={initialClasses} ref={ref} onClick={onClick} />;
};

/**
 *
 *  Assign values
 *
 */
Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default Overlay;
