import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'state';
import { getTransactions } from 'state/transactions';

import { Block, H1 } from 'components/ui';

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
        <H1>Transactions</H1>

        <Block offset>
          <ul>
            {transactions.map((t) => (<li key={t.id}>${t.amount.toFixed(2)} - {t.description}</li>))}
          </ul>
        </Block>
      </div>
    </Layout>
  );
};

export default TransactionsView;
