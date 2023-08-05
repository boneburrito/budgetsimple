import React, { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';

import { Label, Icon } from 'components/ui';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isChecked?: boolean;
  labelHidden?: boolean;
  labelText?: string;
}

const Checkbox = React.memo<CheckboxProps>(
  ({ className, isChecked = false, labelHidden = false, labelText, ...rest }) => {
    const [checked, setChecked] = useState(isChecked ?? false);

    useEffect(() => {
      setChecked(checked);
    }, [checked]);

    const handleChange = useCallback<(event: React.ChangeEvent<HTMLInputElement>) => void>(
      (event) => {
        setChecked(event.target.checked);
      },
      []
    );

    const classes = useMemo(() => classNames('checkbox', className), [className]);

    return (
      <>
        <input
          className={classes}
          checked={checked}
          onChange={handleChange}
          type="checkbox"
          {...rest}
        />
        <Label>
          {checked && <Icon aria-hidden type="check-circle" />}
          <span hidden={labelHidden}>{labelText}</span>
        </Label>
      </>
    );
  }
);

export default Checkbox;
