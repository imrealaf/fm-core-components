import React from 'react';
import classNames from 'classnames';

export default className =>
  React.forwardRef((props, ref) => (
    <div
      {...props}
      ref={ref}
      className={classNames(props.className, className)}
    />
  ));
