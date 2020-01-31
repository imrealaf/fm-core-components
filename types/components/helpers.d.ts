import * as React from 'react';

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export type Position = 'left' | 'right' | 'center';
export type CSSPosition = 'ref' | 'abs' | 'fxd';
export type Variant = 'light' | 'dark';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ViewHeight = 25 | 50 | 75 | 100;

export interface TransitionCallbacks {
  onShow?(): void;
  onShown?(): void;
  onHide?(): void;
  onHidden?(): void;
}
