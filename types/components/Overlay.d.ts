import * as React from 'react';

import { Variant } from './helpers';

export interface OverlayProps {
  variant: Variant;
  active: boolean;
  opacity: number;
}

declare class Overlay extends React.Component<OverlayProps> {}

export default Overlay;
