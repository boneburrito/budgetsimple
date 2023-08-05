import React from 'react';

import Layout from 'features/Layout';

import TransactionsList from 'features/Transactions';

const DashboardView: React.FunctionComponent = () => (
  <Layout>
    <div className="layout-view">
      <h1>Recent transactions</h1>

      <div className="-offset">
        <TransactionsList />
      </div>
    </div>
  </Layout>
);

export default DashboardView;
