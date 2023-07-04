import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'state';
import { getColors } from 'state/colors';

import Layout from 'features/Layout';
import Envelopes from 'features/Envelopes/OverviewList';

const DashboardView: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColors());
  }, [dispatch]);

  const colors = useSelector((state) => state.colors).colors;

  return (
    <Layout>
      <div className="layout-view">
        <h1>Envelopes</h1>

        <h2 className="-offset">Colors</h2>
        <ul>
          {colors.map((color) => (<li key={color.id}>{color.name} #({color.hex})</li>))}
        </ul>

        <div className="-offset">
          <Envelopes />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardView;
