import React, { useMemo } from 'react';
import classNames from 'classnames';

import { Transaction } from 'state/transactions/types';

import { Block, Tag } from 'components/ui';

import DateTime from './components/DateTime';

import './index.css';

export interface TransactionProps {
  transaction: Transaction;
}

const TransactionComponent = React.memo<TransactionProps>(({ transaction }) => {
  const classes = useMemo(() => classNames('transaction', {
    '--pending': transaction.status !== 'CLEARED',
  }), [transaction]);

  return (
    <Block className={classes} border inset isRounded isRow rowAlign="center">
      <Block isRow isStretch rowAlign="center">
        <strong>{transaction.description}</strong>
        <Tag size="sm">{transaction.transactionType}</Tag>
        <DateTime value={transaction.postedDate} />
      </Block>

      <Block className="transaction-amount" isRounded>${transaction.amount.toFixed(2)}</Block>
    </Block>
  );
});

export default TransactionComponent;
