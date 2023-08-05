import React, { useMemo } from 'react';
import classNames from 'classnames';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {}

const Field = React.memo<FieldProps>(({ children, className, ...rest }) => {
  const classes = useMemo(() => classNames('field', className), [className]);

  return (
    <div className={classes} {...rest}>{children}</div>
  );
});

export default Field;
