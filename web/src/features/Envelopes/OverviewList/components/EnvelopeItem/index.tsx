import React from 'react';

import type { Envelope } from '_data/types';

import { Block, ListItem, Text } from 'components/ui';

export interface EnvelopesOverviewItemProps {
  envelope: Envelope;
}

const EnvelopesOverviewItem = React.memo<EnvelopesOverviewItemProps>(({ envelope }) => {
  return (
    <ListItem className="envelope-item" border inset isRow rowGap="sm">
      <Block isStretch>
        <strong>{envelope.title}</strong>
        {!!envelope.description && <Block offset offsetSize="xxs"><Text element="p" size="sm">{envelope.description}</Text></Block>}
      </Block>

      <div>
        <span>${envelope.balance.toFixed(2)}</span>
      </div>
    </ListItem>
  );
});

export default EnvelopesOverviewItem;
