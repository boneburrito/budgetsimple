import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  isBare?: boolean;
  isInset?: boolean;
  isPill?: boolean;
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  onEsc?: React.KeyboardEventHandler<HTMLInputElement>;
  size?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      className,
      isBare = false,
      isInset = false,
      isPill = false,
      onEnter,
      onEsc,
      onKeyDown,
      size,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const classes = useMemo(
      () =>
        classNames('input', className, {
          '--bare': isBare,
          '--inset': isInset,
          '--pill': isPill,
          '--sm': size === 'sm',
          '--lg': size === 'lg',
        }),
      [className, isBare, isInset, isPill, size]
    );

    const handleKeyDown = useCallback<React.KeyboardEventHandler<HTMLInputElement>>(
      (event) => {
        if (event.key === 'Escape') {
          onEsc?.(event);
        } else if (event.key === 'Enter') {
          onEnter?.(event);
        }

        onKeyDown?.(event);
      },
      [onEnter, onEsc, onKeyDown]
    );

    return (
      <input className={classes} onKeyDown={handleKeyDown} ref={ref} type={type} {...rest}>
        {children}
      </input>
    );
  }
);

export default React.memo(Input);
