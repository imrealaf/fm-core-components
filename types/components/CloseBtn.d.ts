import * as React from 'react';

import { Variant, Size, Position, CSSPosition } from './helpers';

export interface CloseBtnProps {
  variant: Variant;
  size: Size;
  pos: CSSPosition;
  posAlign: Position;
}

declare class CloseBtn extends React.Component<CloseBtnProps> {}

export default CloseBtn;
