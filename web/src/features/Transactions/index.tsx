import React, { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'state';
import { getMerchants } from 'state/categories';
import { getTransactions } from 'state/transactions';

import Transaction from 'components/Transactions/Transaction';
import { ListItem } from 'components/ui';

const TransactionsList = React.memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMerchants());
    dispatch(getTransactions());
  }, [dispatch]);

  const transactions = useSelector((state) => state.transactions).transactions;

  const items = useMemo(() => transactions.map((transaction) => (
    <ListItem key={transaction.id}>
      <Transaction transaction={transaction} />
    </ListItem>
  )), [transactions]);

  return (
    <div className="transactions"><ul>{items}</ul></div>
  );
});

export default TransactionsList;
