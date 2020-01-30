import React, { useRef } from 'react';
import classNames from 'classnames';

import * as types from './propTypes';

/**
 *
 *  Comp name
 *
 */
const compName = 'close-btn';

/**
 *
 *  Prop types
 *
 */
const propTypes = {
  /**
   *  size
   *  @type string - xs, sm, lg, xl
   */
  size: types.SizePropType,

  /**
   *  variant
   *  @type string - light, dark
   */
  variant: types.VariantPropType,

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
  variant: 'dark',
  pos: 'rel',
  posAlign: 'left'
};

const Close = ({ variant, pos, posAlign, size, onClick }) => {
  const initialClasses = classNames(
    compName,
    pos !== 'rel' ? `${compName}--${pos} ${compName}--${posAlign}` : '',
    size ? `${compName}--${variant}` : ''
  );

  const ref = useRef();

  return (
    <button
      type='button'
      className={initialClasses}
      ref={ref}
      onClick={onClick}
    />
  );
};

/**
 *
 *  Assign values
 *
 */
Close.propTypes = propTypes;
Close.defaultProps = defaultProps;

export default Close;
