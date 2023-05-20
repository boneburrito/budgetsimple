import React from 'react';

import type { Envelope } from '_data/types';

export interface EnvelopesOverviewItemProps {
  envelope: Envelope;
}

const EnvelopesOverviewItem = React.memo<EnvelopesOverviewItemProps>(({ envelope }) => {
  return (
    <li className="envelope-item -flex --space-sm -inset --all -border --trailing">
      <div className="-stretch">
        <strong>{envelope.title}</strong>
        {!!envelope.description && <p className="-offset --xxs -text-sm">{envelope.description}</p>}
      </div>

      <div>
        <span>${envelope.balance.toFixed(2)}</span>
      </div>
    </li>
  );
});

export default EnvelopesOverviewItem;
