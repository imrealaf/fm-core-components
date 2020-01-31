import * as React from 'react';

import { Variant, ViewHeight, Position } from './helpers';

export interface HeroProps {
  variant: Variant;
  img?: string;
  preloadImg: boolean;
  vh?: ViewHeight;
  overlay: boolean;
  overlayOpacity: number;
  alignContent: Position;
}

declare class Hero extends React.Component<HeroProps> {}

export default Hero;
