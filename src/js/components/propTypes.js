import PropTypes from 'prop-types';

export const VariantPropType = PropTypes.oneOf(['light', 'dark']);

export const SizePropType = PropTypes.oneOf(['xs', 'sm', 'lg', 'xl']);

export const CSSPositionPropType = PropTypes.oneOf(['rel', 'abs', 'fxd']);

export const PositionPropType = PropTypes.oneOf(['left', 'right']);

export const AlignmentPropType = PropTypes.oneOf(['left', 'center', 'right']);
