import React, { useMemo } from 'react';

import { ENVELOPES } from '_data/envelopes';

import Item from './components/EnvelopeItem';

export interface EnvelopesOverviewListProps {
}

const EnvelopesOverviewList = React.memo(() => {
  const items = useMemo(() => ENVELOPES.map((envelope) => <Item key={envelope.id} envelope={envelope} />), []);

  return (
    <div className="envelopes"><ul>{items}</ul></div>
  );
});

export default EnvelopesOverviewList;
