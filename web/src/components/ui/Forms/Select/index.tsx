import React, { useMemo } from 'react';
import classNames from 'classnames';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isBare?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, className, isBare = false, ...rest }, ref) => {
    const classes = useMemo(
      () =>
        classNames('select', className, {
          '--bare': isBare,
        }),
      [className, isBare]
    );

    return (
      <select className={classes} ref={ref} {...rest}>
        {children}
      </select>
    );
  }
);

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export const Option = React.memo<OptionProps>(({ children, ...rest }) => {
  return <option {...rest}>{children}</option>;
});

export default React.memo(Select);
