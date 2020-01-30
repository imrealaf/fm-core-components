import React, { useEffect, useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { DOM_STATE } from '../constants';
import {
  onTransitionEnd,
  hasClass,
  addClass,
  removeClass,
  defer
} from '../utils';

import Header from './SlidingPanelHeader';
import Body from './SlidingPanelBody';

import CloseBtn from './CloseBtn';
import Overlay from './Overlay';

/**
 *  Component name
 */
const compName = 'sliding-panel';

/**
 *  Prop types
 */
const propTypes = {
  /**
   *  pos
   *  @type string
   */
  pos: PropTypes.oneOf(['left', 'right']),

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
   *  closeBtn
   *  @type boolean
   */
  closeBtn: PropTypes.bool,

  /**
   *  overlay
   *  @type boolean
   */
  overlay: PropTypes.bool,

  /**
   *  overlayOpacity
   *  @type number (float)
   */
  overlayOpacity: PropTypes.number,

  /**
   *  shadow
   *  @type boolean
   */
  shadow: PropTypes.bool,

  /**
   *  toggle
   *  @type function
   *  @description triggers the visibilty state of the component, passed to close btn and overlay
   */
  toggle: PropTypes.func,

  /**
   *  onShow
   *  @type function
   *  @description fires when component is first transitioned in
   */
  onShow: PropTypes.func,

  /**
   *  onShown
   *  @type function
   *  @description fires when component is finished transitioning in
   */
  onShown: PropTypes.func,

  /**
   *  onHide
   *  @type function
   *  @description fires when component is first transitioned out
   */
  onHide: PropTypes.func,

  /**
   *  onHidden
   *  @type function
   *  @description fires when component is finished transitioning out
   */
  onHidden: PropTypes.func
};

/**
 *  Default props
 */
const defaultProps = {
  pos: 'left',
  variant: 'dark',
  active: false,
  closeBtn: true,
  overlay: true,
  overlayOpacity: undefined,
  shadow: true
};

const SlidingPanel = ({
  id,
  className,
  pos,
  variant,
  active,
  closeBtn,
  overlay,
  overlayOpacity,
  shadow,
  toggle,
  onShow,
  onShown,
  onHide,
  onHidden,
  children
}) => {
  /**
   *  Class name generation
   */
  const initialClasses = classNames(
    compName,
    className,
    `${compName}--${variant}`,
    `${compName}--${pos}`,
    shadow ? `${compName}--shadow` : ''
  );

  /**
   *  Swipe handling
   */
  const swipeEvent = pos === 'left' ? 'onSwipedLeft' : 'onSwipedRight';
  const swipeHandler = useSwipeable({
    [swipeEvent]: () => toggle()
  });

  /**
   *  Overlay state
   */
  const [showOverlay, setShowOverlay] = useState(false);

  /**
   *  Element ref
   */
  const ref = useRef();

  /**
   *  componentDidUpdate
   *  @type hook
   *  @description fires when the value of active changes, toggling the visibilty of the component
   */
  useEffect(() => {
    active ? show() : hide();
  }, [active]);

  /**
   *  show()
   *  @type method
   */
  const show = () => {
    if (hasClass(ref, DOM_STATE.SHOW)) return;

    // Set active class
    addClass(ref, DOM_STATE.ACTIVE);

    // Trigger on show
    if (onShow) onShow();

    // Trigger transition in ..
    defer(() => {
      setShowOverlay(true);
      addClass(ref, DOM_STATE.SHOW);
    }, 0);

    // Trigger on shown when transition ends
    onTransitionEnd(ref, () => {
      if (onShown) onShown();
    });
  };

  /**
   *  hide()
   *  @type method
   */
  const hide = () => {
    if (!hasClass(ref, DOM_STATE.SHOW)) return;

    // Trigger transition out
    removeClass(ref, DOM_STATE.SHOW);

    // Trigger on hide
    if (onHide) onHide();

    // When fully transitoned out ..
    onTransitionEnd(ref, () => {
      // Hide overlay & display of element
      removeClass(ref, DOM_STATE.ACTIVE);
      setShowOverlay(false);

      // Trigger on hidden
      if (onHidden) onHidden();
    });
  };

  /**
   *  Render
   */
  return (
    <div id={id} className={`${compName}-wrapper`} {...swipeHandler}>
      <div className={initialClasses} ref={ref}>
        {closeBtn ? (
          <CloseBtn
            pos='abs'
            posAlign={pos === 'right' ? 'left' : 'right'}
            onClick={toggle ? toggle : null}
          />
        ) : null}
        {children}
      </div>
      {overlay && showOverlay ? (
        <Overlay
          active={active}
          variant={variant}
          opacity={overlayOpacity}
          onClick={toggle ? toggle : null}
        />
      ) : null}
    </div>
  );
};

/**
 *  Assign values & child components
 */
SlidingPanel.propTypes = propTypes;
SlidingPanel.defaultProps = defaultProps;
SlidingPanel.Header = Header;
SlidingPanel.Body = Body;

export default SlidingPanel;
