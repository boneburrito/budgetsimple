import React from 'react';

import { Block, H1 } from 'components/ui';

import Layout from 'features/Layout';

import TransactionsList from 'features/Transactions';

const DashboardView: React.FunctionComponent = () => (
  <Layout>
    <div className="layout-view">
      <H1>Recent transactions</H1>

      <Block offset>
        <TransactionsList />
      </Block>
    </div>
  </Layout>
);

export default DashboardView;
