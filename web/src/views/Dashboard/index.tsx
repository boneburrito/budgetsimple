import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'state';
import { getTransactions } from 'state/transactions';

import Layout from 'features/Layout';
import Envelopes from 'features/Envelopes/OverviewList';

const DashboardView: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const transactions = useSelector((state) => state.transactions).transactions;

  return (
    <Layout>
      <div className="layout-view">
        <h1>Envelopes</h1>

        <div className="-offset">
          <ul>
            {transactions.map(({ id, description }) => (<li key={id}>{description}</li>))}
          </ul>
        </div>

        <div className="-offset">
          <Envelopes />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardView;
