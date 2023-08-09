import React, { useMemo } from 'react';
import classNames from 'classnames';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isBasic?: boolean;
  isBordered?: boolean;
  isDanger?: boolean;
  isIcon?: boolean;
  isLink?: boolean;
  isPrimary?: boolean;
  isRectangle?: boolean;
  isStretch?: boolean;
  isTall?: boolean;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      isBasic,
      isBordered,
      isDanger,
      isIcon,
      isLink,
      isPrimary,
      isRectangle,
      isStretch,
      isTall,
      size = 'md',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const classes = useMemo<string>(
      () =>
        classNames('button', className, {
          '--xs': size === 'xs',
          '--sm': size === 'sm',
          '--lg': size === 'lg',
          '--xl': size === 'xl',
          '--basic': !!isBasic,
          '--bordered': !!isBordered,
          '--danger': !!isDanger,
          '--icon': !!isIcon,
          '--link': !!isLink,
          '--primary': !!isPrimary,
          '--rectangle': !!isRectangle,
          '--stretch': !!isStretch,
          '--tall': !!isTall,
        }),
      [
        className,
        isBasic,
        isBordered,
        isDanger,
        isIcon,
        isLink,
        isPrimary,
        isRectangle,
        isStretch,
        isTall,
        size,
      ]
    );

    return (
      <button className={classes} type={type} ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

export default React.memo(Button);
