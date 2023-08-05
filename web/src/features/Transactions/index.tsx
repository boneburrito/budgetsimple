import React, { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'state';
import { getTransactions } from 'state/transactions';

import Transaction from 'components/Transactions/Transaction';

const TransactionsList = React.memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const transactions = useSelector((state) => state.transactions).transactions;

  const items = useMemo(() => transactions.map((transaction) => (
    <li key={transaction.id} className="-offset --following"><Transaction transaction={transaction} /></li>
  )), [transactions]);

  return (
    <div className="envelopes"><ul>{items}</ul></div>
  );
});

export default TransactionsList;
