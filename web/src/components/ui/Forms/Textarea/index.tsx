import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isBare?: boolean;
  onEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onEsc?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  size?: 'sm' | 'md' | 'lg';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ children, className, isBare = false, onEnter, onEsc, onKeyDown, size, ...rest }, ref) => {
    const classes = useMemo(
      () =>
        classNames('textarea', className, {
          '--bare': isBare,
          '--sm': size === 'sm',
          '--lg': size === 'lg',
        }),
      [className, isBare, size]
    );

    const handleKeyDown = useCallback<React.KeyboardEventHandler<HTMLTextAreaElement>>(
      (event) => {
        if (event.key === 'Escape') {
          onEsc?.(event);
        } else if (event.key === 'Enter' && event.metaKey) {
          onEnter?.(event);
        }

        onKeyDown?.(event);
      },
      [onEnter, onEsc, onKeyDown]
    );

    return (
      <textarea className={classes} onKeyDown={handleKeyDown} {...rest} ref={ref}>
        {children}
      </textarea>
    );
  }
);

export default React.memo(Textarea);
