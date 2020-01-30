import * as React from 'react';

import SlidingPanelBody from './SlidingPanelBody';
import SlidingPanelHeader from './SlidingPanelHeader';

import { TransitionCallbacks, Variant, Position, CSSPosition } from './helpers';

export interface SlidingPanelProps extends TransitionCallbacks {
  pos: CSSPosition;
  variant: Variant;
  closeBtn: boolean;
  overlay: boolean;
  overlayOpacity: number;
  shadow: boolean;
  toggle(): void;
}

declare class SlidingPanel extends React.Component<SlidingPanelProps> {
  static Body: typeof SlidingPanelBody;
  static Header: typeof SlidingPanelHeader;
}

export default SlidingPanel;
