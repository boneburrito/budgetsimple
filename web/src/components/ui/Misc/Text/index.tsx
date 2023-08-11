import React, { useMemo } from 'react';
import classNames from 'classnames';

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  align?: 'end' | 'center' | 'start';
  children?: React.ReactNode;
  className?: string;
  element?: TextElement;
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
  isCode?: boolean;
  isMonospace?: boolean;
  isMuted?: boolean;
  isSerif?: boolean;
  isTruncated?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const Text = React.memo<TextProps>(
  ({
    align = 'start',
    children,
    className,
    element,
    heading,
    isCode = false,
    isMonospace = false,
    isMuted = false,
    isSerif = false,
    isTruncated = false,
    size,
  }) => {
    const elementType = useMemo<TextElement>(() => {
      if (element) {
        return element;
      }

      if (heading) {
        return `h${heading}`;
      }

      return 'span';
    }, [element, heading]);

    const classes = useMemo<string>(
      () =>
        classNames(className, {
          '-align --center': align === 'center',
          '-align --end': align === 'end',
          '-code': isCode,
          '-ellipsis': isTruncated,
          '-t-h1': heading === 1,
          '-t-h2': heading === 2,
          '-t-h3': heading === 3,
          '-t-h4': heading === 4,
          '-t-h5': heading === 5,
          '-t-h6': heading === 6,
          '-t-sm': size === 'sm',
          '-t-md': size === 'md',
          '-t-lg': size === 'lg',
          '-t-xl': size === 'xl',
          '-t-xxl': size === 'xxl',
          '-t-mono': isMonospace,
          '-t-serif': isSerif,
          '-t-muted': isMuted,
        }),
      [align, className, heading, isCode, isMonospace, isMuted, isSerif, isTruncated, size]
    );

    return React.createElement(elementType, { className: classes }, children);
  }
);

export default Text;
