import React from 'react';

import Layout from 'features/Layout';
import Envelopes from 'features/Envelopes/OverviewList';

const DashboardView: React.FunctionComponent = () => (
  <Layout>
    <div className="layout-view">
      <h1>Envelopes</h1>

      <div className="-offset">
        <Envelopes />
      </div>
    </div>
  </Layout>
);

export default DashboardView;
