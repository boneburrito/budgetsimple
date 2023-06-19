import React from 'react';

import Layout from 'features/Layout';

import Buttons from './components/Buttons';
import Typography from './components/Typography';

import './index.css';

interface PatternsSection {
  id: string;
  title: string;
  Component: React.FunctionComponent;
}

const SECTIONS: PatternsSection[] = [
  { id: 'typography', title: 'Typography', Component: Typography },
  { id: 'buttons', title: 'Buttons', Component: Buttons },
  // { id: 'colors', title: 'Colors', Component: null },
];

const PatternsView = () => {
  return (
    <Layout>
      <div className="layout-view">
        <h1 className="heading-1">Patterns</h1>

        <div className="-offset --lg -flex --column">
          {SECTIONS.map(({ id, Component }) => <Component key={id} />)}
        </div>
      </div>
    </Layout>
  );
};

export default PatternsView;
