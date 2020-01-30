import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
   *  @type string
   */
  size: PropTypes.oneOf(['sm', 'lg']),

  /**
   *  variant
   *  @type string
   */
  variant: PropTypes.oneOf(['light', 'dark']),

  /**
   *  pos
   *  @type string
   */
  pos: PropTypes.oneOf(['rel', 'abs', 'fxd']),

  /**
   *  posAlign
   *  @type string
   */
  posAlign: PropTypes.oneOf(['left', 'right'])
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
