import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { CLASSES } from '../constants';
import {
  onTransitionEnd,
  setDisplay,
  hasClass,
  addClass,
  removeClass
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
   *  @values left, right
   */
  pos: PropTypes.string,

  /**
   *  variant
   *  @type string
   *  @values light, dark
   */
  variant: PropTypes.string,

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
   *  @values 0.0 - 1.0
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
    if (hasClass(ref, CLASSES.active)) return;

    // Show overlay & set display of element
    setDisplay(ref, true, 'flex');

    // Trigger on show
    if (onShow) onShow();

    // Trigger transition in ..
    setTimeout(() => {
      setShowOverlay(true);
      addClass(ref, CLASSES.active);
    });

    // Trigger on shown when transition ends
    onTransitionEnd(ref.current, () => {
      if (onShown) onShown();
    });
  };

  /**
   *  hide()
   *  @type method
   */
  const hide = () => {
    if (!hasClass(ref, CLASSES.active)) return;

    // Trigger transition out
    removeClass(ref, CLASSES.active);

    // Trigger on hide
    if (onHide) onHide();

    // When fully transitoned out ..
    onTransitionEnd(ref.current, () => {
      // Hide overlay & display of element
      setDisplay(ref, false);
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
            posAlign='right'
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
