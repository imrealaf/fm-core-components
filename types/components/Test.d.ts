import * as React from 'react';

// import TestBody from './TestBody';
// import TestDialog from './TestDialog';
// import TestFooter from './TestFooter';
// import TestHeader from './TestHeader';
// import TestTitle from './TestTitle';

import { FmPrefixComponent, TransitionCallbacks } from './helpers';

export interface TestProps extends TransitionCallbacks {
  size?: 'sm' | 'lg' | 'xl';
  centered?: boolean;
  backdrop?: 'static' | boolean;
  backdropClassName?: string;
  keyboard?: boolean;
  animation?: boolean;
  dialogClassName?: string;
  dialogAs?: React.ElementType;
  autoFocus?: boolean;
  enforceFocus?: boolean;
  restoreFocus?: boolean;
  restoreFocusOptions?: FocusOptions;
  show?: boolean;
  onShow?: () => void;
  onHide?: () => void;
  container?: any;
  scrollable?: boolean;
  onEscapeKeyDown?: () => void;
}

declare class Test<
  As extends React.ElementType = 'div'
> extends FmPrefixComponent<As, TestProps> {
  // static Body: typeof TestBody;
  // static Header: typeof TestHeader;
  // static Title: typeof TestTitle;
  // static Footer: typeof TestFooter;
  // static Dialog: typeof TestDialog;
}

export default Test;
