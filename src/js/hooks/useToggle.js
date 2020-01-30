import { useState } from 'react';

export default () => {
  /**
   *  Active state
   */
  const [active, setActive] = useState(false);

  /**
   * Show method
   */
  const show = () => setActive(true);

  /**
   *  Hide method
   */
  const hide = () => setActive(false);

  /**
   *  Toggle method
   */
  const toggle = () => {
    !active ? show() : hide();
  };

  /**
   *  Return api
   */
  return {
    active,
    setActive,
    show,
    hide,
    toggle
  };
};
