import React, { useMemo } from 'react';
import classNames from 'classnames';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isHidden?: boolean;
}

const Label = React.memo<LabelProps>(
  ({
    children,
    className,
    isHidden = false,
    ...rest
  }) => {
    const classes = useMemo(() => classNames('label', className), [className]);

    return (
      <label className={classes} hidden={isHidden} {...rest}>{children}</label>
    );
  }
);

export default Label;
