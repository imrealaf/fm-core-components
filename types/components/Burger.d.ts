import * as React from 'react';

import { Position, CSSPosition } from './helpers';

export interface BurgerProps {
  type: 'spin' | 'collapse';
  active: boolean;
  pos: CSSPosition;
  posAlign: Position;
}

declare class Burger extends React.Component<BurgerProps> {}

export default Burger;
