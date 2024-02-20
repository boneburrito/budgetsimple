import React from 'react';

import { Block, H1 } from 'components/ui';

import Layout from 'features/Layout';
import TransactionsList from 'features/Transactions';

const TransactionsView: React.FunctionComponent = () => {
  return (
    <Layout>
      <div className="layout-view">
        <H1 heading={2}>Transactions</H1>

        <Block offset offsetSize="lg">
          <TransactionsList />
        </Block>
      </div>
    </Layout>
  );
};

export default TransactionsView;
