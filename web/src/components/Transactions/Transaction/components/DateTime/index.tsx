import React from 'react';
import { format } from 'date-fns';

export interface TransactionDateTimeProps {
  formatPattern?: string;
  value: Date | number | string;
}

const TransactionDateTime = React.memo<TransactionDateTimeProps>(({ formatPattern = 'MMM dd, yyyy', value }) => {
  let dateValue: Date | number = 0;

  if (typeof value === 'string') {
    dateValue = new Date(Date.parse(value));
  } else {
    dateValue = value;
  }

  return <span>{format(dateValue, formatPattern)}</span>;
});

export default TransactionDateTime;
