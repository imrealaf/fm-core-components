import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as types from './propTypes';

/**
 *
 *  Component name
 *
 */
const compName = 'burger';

/**
 *
 *  Prop types
 *
 */
const propTypes = {
  /**
   *  type
   *  @type string
   */
  type: PropTypes.oneOf(['spin', 'collapse']),

  /**
   *  active
   *  @type boolean
   */
  active: PropTypes.bool,

  /**
   *  pos
   *  @type string - rel, abs, fxd
   */
  pos: types.CSSPositionPropType,

  /**
   *  posAlign
   *  @type string - left, right
   */
  posAlign: types.AlignmentPropType
};

/**
 *
 *  Default props
 *
 */
const defaultProps = {
  type: 'spin',
  active: false,
  pos: 'rel',
  posAlign: 'right'
};

const Burger = ({ type, active, pos, posAlign, onClick }) => {
  /**
   *  Construct className string
   */
  const classes = classNames(
    compName,
    `${compName}--${type}`,
    pos !== 'rel' ? `${compName}--${pos} ${compName}--${posAlign}` : '',
    active ? 'active' : ''
  );

  /**
   *  Render
   */
  return (
    <div className={classes} ref={ref} onClick={onClick}>
      <span className={`${compName}__box`}>
        <span className={`${compName}__inner`}></span>
      </span>
    </div>
  );
};

/**
 *
 *  Assign values
 *
 */
Burger.propTypes = propTypes;
Burger.defaultProps = defaultProps;

export default Burger;
