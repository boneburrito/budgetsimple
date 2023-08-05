import React, { useMemo } from 'react';
import classNames from 'classnames';

import { Transaction } from 'state/transactions/types';

import DateTime from './components/DateTime';

import './index.css';

export interface TransactionProps {
  transaction: Transaction;
}

const TransactionComponent = React.memo<TransactionProps>(({ transaction }) => {
  const classes = useMemo(() => classNames('transaction -flex --center -inset --all -border -rounded', {
    '--pending': transaction.status !== 'CLEARED',
  }), [transaction]);

  return (
    <div className={classes}>
      <div className="-stretch -flex --center">
        <strong>{transaction.description}</strong>
        <span className="tag --sm">{transaction.transactionType}</span>
        <DateTime value={transaction.postedDate} />
      </div>

      <span className="transaction-amount -rounded">${transaction.amount.toFixed(2)}</span>
    </div>
  );
});

export default TransactionComponent;
