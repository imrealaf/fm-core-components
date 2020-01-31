import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { removeClass } from '../utils';
import * as types from './propTypes';
import Overlay from './Overlay';

/**
 *
 *  Component name
 *
 */
const compName = 'hero';

/**
 *
 *  Prop class names
 *
 */
const propClassNames = {
  img: 'has-img',
  preload: 'has-preload',
  vh: 'has-vh'
};

/**
 *
 *  Prop types
 *
 */
const propTypes = {
  /**
   *  variant
   *  @type string - light, dark
   */
  variant: types.VariantPropType,

  /**
   *  img
   *  @type string
   */
  img: PropTypes.string,

  /**
   *  preloadImg
   *  @type boolean
   */
  preloadImg: PropTypes.bool,

  /**
   *  vh
   *  @type number -  25, 50, 75, 100
   */
  vh: types.ViewHeightPropType,

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
   *  alignContent
   *  @type string - left, center, right
   */
  alignContent: types.AlignmentPropType
};

/**
 *
 *  Default props
 *
 */
const defaultProps = {
  variant: 'light',
  overlay: true,
  preloadImg: true,
  alignContent: 'left'
};

const Hero = ({ img, preloadImg, vh, overlay, overlayOpacity, children }) => {
  /**
   *  Element ref
   */
  const ref = useRef();

  /**
   *  On mount, preload image if set
   */
  useEffect(() => {
    if (img && preloadImg) {
      initImageLoad();
    }
  }, []);

  /**
   *  Class name
   */
  const initialClasses = classNames(
    compName,
    `${compName}--${img ? 'dark' : variant}`,
    img
      ? `${propClassNames.img}${preloadImg ? ` ${propClassNames.preload}` : ''}`
      : '',
    vh ? propClassNames.vh : ''
  );

  /**
   *  Styles
   */
  const styles = () => {
    const style = {};
    if (vh) style.height = `${vh}vh`;
    if (img) style.backgroundImage = `url(${img})`;
    return style;
  };

  /**
   *  Init image preloading
   */
  const initImageLoad = () => {
    if (!img) return;
    const imgSrc = new Image();
    imgSrc.onload = onImageLoad;
    imgSrc.src = img;
  };

  /**
   *  On image loaded
   */
  const onImageLoad = () => {
    setTimeout(() => {
      if (ref.current) removeClass(ref, 'has-preload');
    }, 100);
  };

  /**
   *  Render
   */
  return (
    <div className={initialClasses} style={styles()} ref={ref}>
      {img && overlay ? (
        <Overlay active={true} opacity={overlayOpacity} />
      ) : null}
      <div className={`${compName}__content`}>{children}</div>
    </div>
  );
};

/**
 *
 *  Assign values
 *
 */
Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
