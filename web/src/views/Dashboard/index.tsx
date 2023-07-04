import React, { useEffect } from 'react';

import { useDispatch } from 'state';
import { getTest } from 'state/test';

import Layout from 'features/Layout';
import Envelopes from 'features/Envelopes/OverviewList';

const DashboardView: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTest());
  }, [dispatch]);

  return (
  <Layout>
    <div className="layout-view">
      <h1>Envelopes</h1>

      <div className="-offset">
        <Envelopes />
      </div>
    </div>
  </Layout>
)};

export default DashboardView;
