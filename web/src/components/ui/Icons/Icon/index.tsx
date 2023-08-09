import React, { useMemo } from 'react';
import classNames from 'classnames';

import { ICONS } from './constants';
import { type IconType, isIconType } from './types';

export { type IconType, isIconType };

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  isRotated?: boolean;
  type: IconType;
}

const Icon = React.memo<IconProps>(({ className, isRotated = false, type, ...rest }) => {
  const Icon = ICONS[type];

  const classes = useMemo(
    () =>
      classNames('icon', className, {
        '--rotated': isRotated,
      }),
    [className, isRotated]
  );

  if (Icon) {
    return (
      <span aria-hidden className={classes} {...rest}>
        <Icon />
      </span>
    );
  }

  return null;
});

export default Icon;
