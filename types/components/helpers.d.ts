import * as React from 'react';

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type Position = 'left' | 'right';
export type CSSPosition = 'ref' | 'abs' | 'fxd';
export type Variant = 'light' | 'dark';

export interface TransitionCallbacks {
  onShow?(): void;
  onShown?(): void;
  onHide?(): void;
  onHidden?(): void;
}
