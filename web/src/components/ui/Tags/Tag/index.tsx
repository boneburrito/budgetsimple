import React, { useMemo } from 'react';
import classNames from 'classnames';

import { Icon, isIconType, type IconType } from 'components/ui';

export interface TagProps {
  children?: React.ReactNode;
  className?: string;
  hue?: 'alpha' | 'beta' | 'gamma' | 'delta' | 'epsilon' | 'zeta' | 'eta' | 'grey';
  icon?:
    | IconType
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >;
  isDanger?: boolean;
  isNotify?: boolean;
  isPrimary?: boolean;
  isRectangle?: boolean;
  isRound?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Tag = React.memo<TagProps>(
  ({
    children,
    className,
    hue,
    icon,
    isDanger,
    isNotify,
    isPrimary,
    isRectangle,
    isRound,
    size,
  }) => {
    const classes = useMemo(
      () =>
        classNames('tag', className, {
          '--sm': size === 'sm',
          '--lg': size === 'lg',

          '--rectangle': !!isRectangle,
          '--round': !!isRound,

          '--danger': !!isDanger,
          '--notify': !!isNotify,
          '--primary': !!isPrimary,

          '--alpha': hue === 'alpha',
          '--beta': hue === 'beta',
          '--gamma': hue === 'gamma',
          '--delta': hue === 'delta',
          '--epsilon': hue === 'epsilon',
          '--grey': hue === 'grey',
          '--zeta': hue === 'zeta',
          '--eta': hue === 'eta',
        }),
      [className, hue, isDanger, isNotify, isPrimary, isRectangle, isRound, size]
    );

    const TagIcon = useMemo(() => {
      if (typeof icon === 'string' && isIconType(icon)) {
        return <Icon type={icon} />;
      } else if (icon) {
        const Icon = icon;
        return <Icon />;
      }

      return null;
    }, [icon]);

    return (
      <span className={classes}>
        {}
        {!!TagIcon && TagIcon}
        {children}
      </span>
    );
  }
);

export default Tag;
