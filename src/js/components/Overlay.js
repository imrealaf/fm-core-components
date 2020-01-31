import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as types from './propTypes';
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
  variant: types.VariantPropType,

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
  /**
   *  Construct className string
   */
  const classes = classNames(compName, `${compName}--${variant}`);

  /**
   *  Element ref
   */
  const ref = useRef();

  /**
   *  Component update hook
   *  @description toggling the visibilty of the component
   */
  useEffect(() => {
    active ? show() : hide();
  });

  /**
   *  Show method
   */
  const show = () => {
    defer(() => {
      setOpacity(ref, opacity);
    });
  };

  /**
   *  Hide method
   */
  const hide = () => {
    setOpacity(ref);
  };

  /**
   *  Render
   */
  return <div className={classes} ref={ref} onClick={onClick} />;
};

/**
 *
 *  Assign values
 *
 */
Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default Overlay;
