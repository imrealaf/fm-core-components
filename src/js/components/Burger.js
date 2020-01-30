import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const compName = 'burger';

const propTypes = {
  type: PropTypes.oneOf(['spin', 'collapse']),
  active: PropTypes.bool
};

const defaultProps = {
  type: 'spin',
  active: false
};

const Burger = ({ type, active, onClick }) => {
  const initialClasses = classNames(
    compName,
    `${compName}--${type}`,
    active ? 'active' : ''
  );
  const ref = useRef();

  return (
    <div className={initialClasses} ref={ref} onClick={onClick}>
      <span className={`${compName}__box`}>
        <span className={`${compName}__inner`}></span>
      </span>
    </div>
  );
};

Burger.propTypes = propTypes;
Burger.defaultProps = defaultProps;

export default Burger;
