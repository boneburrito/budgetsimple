import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'state';
import { getTransactions } from 'state/transactions';

import Layout from 'features/Layout';

const TransactionsView: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const transactions = useSelector((state) => state.transactions).transactions;

  return (
    <Layout>
      <div className="layout-view">
        <h1>Transactions</h1>

        <div className="-offset">
          <ul>
            {transactions.map((t) => (<li key={t.id}>${t.amount.toFixed(2)} - {t.description}</li>))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default TransactionsView;
