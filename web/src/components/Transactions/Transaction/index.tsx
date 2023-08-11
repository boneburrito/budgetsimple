import React, { useMemo } from 'react';
import classNames from 'classnames';

import { Transaction } from 'state/transactions/types';

import DateTime from './components/DateTime';
import { Block, Strong, Tag, Text } from 'components/ui';

import './index.css';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
export interface TransactionProps {
  transaction: Transaction;
}

const TransactionComponent = React.memo<TransactionProps>(({ transaction }) => {
  const description = useMemo(() => 
    transaction.description
      .replace(/^(withdrawal)|(deposit) /i, '')
      .replace(/(pos #[0-9]+ )/i, '')
      .replace(/(debit card signature)/i, ''), 
    [transaction.description]
  );

  const amount = useMemo(() => 
    `${transaction.isCredit ? '+' : ''}${currencyFormatter.format(transaction.amount)}`,
    [transaction]
  );

  const classes = useMemo(() => classNames('transaction', {
    '--credit': transaction.isCredit,
    '--pending': transaction.status !== 'CLEARED',
  }), [transaction]);

  return (
    <Block className={classes} border="top" inset isRow rowAlign="center">
      <Block isRow isStretch rowAlign="center" title={transaction.description}>
        <Text size="sm"><DateTime value={transaction.postedDate} /></Text>
        <Strong className="transaction-desc" isTruncated>{description}</Strong>
        <Tag size="sm">{transaction.transactionType}</Tag>
      </Block>

      <Block className="transaction-amount" isRounded roundedSize="xl">
        {amount}
      </Block>
    </Block>
  );
});

export default TransactionComponent;
