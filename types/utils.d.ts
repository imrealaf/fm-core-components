import { MutableRefObject } from 'react';

declare type onTransitionEnd = (
  ref: MutableRefObject<Element>,
  callback: () => void
) => void;

export default onTransitionEnd;
