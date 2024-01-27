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
  console.log(transaction);

  const description = useMemo(() => transaction.description.replace(/^WITHDRAWAL /, ''), [transaction]);

  const classes = useMemo(() => classNames('transaction', {
    '--credit': transaction.isCredit,
    '--pending': transaction.status !== 'CLEARED',
  }), [transaction]);

  return (
    <Block className={classes} border inset isRounded isRow rowAlign="center">
      <Block isStretch>
        <strong>{description}</strong>
        <Block isRow offset offsetSize="xxs" rowGap="xs">
          <Tag size="sm">{transaction.transactionType}</Tag>
          <DateTime value={transaction.postedDate} />
        </Block>
      </Block>

      <Block className="transaction-amount" isRounded>${transaction.amount.toFixed(2)}</Block>
    </Block>
  );
});

export default TransactionComponent;
