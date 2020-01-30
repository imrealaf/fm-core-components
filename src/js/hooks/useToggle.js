import { useState } from 'react';

/**
 *
 *  useToggle
 *  @type hook
 *  @description handles visibilty state for a toggleable component
 *  @return object - api
 *
 */

export default () => {
  /**
   *  active
   *  @type boolean
   *  @description the value of the current active state
   */
  const [active, setActive] = useState(false);

  /**
   *  show()
   *  @type method
   *  @description sets active state to true (transition in)
   */
  const show = () => setActive(true);

  /**
   *  hide()
   *  @type method
   *  @description sets active state to false (transition out)
   */
  const hide = () => setActive(false);

  /**
   *  toggle()
   *  @type method
   *  @description switches between active state
   */
  const toggle = () => {
    !active ? show() : hide();
  };

  /**
   *  return api
   */
  return {
    active,
    show,
    hide,
    toggle
  };
};
