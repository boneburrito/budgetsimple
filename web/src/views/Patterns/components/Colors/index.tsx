import React, { useMemo } from 'react';

import { Block } from 'components/ui';
import { PatternsSection } from 'views/Patterns/components/Shared';

import ColorGroup from './components/ColorGroup';

const greys = ['grey-100', 'grey-200', 'grey-300', 'grey-400', 'grey-500', 'grey-600', 'grey-700', 'grey-800'];
const primaries = ['primary-100', 'primary-200', 'primary-300', 'primary-400', 'primary-500', 'primary-600', 'primary-700', 'primary-800'];
const secondaries = ['secondary-100', 'secondary-200', 'secondary-300', 'secondary-400', 'secondary-500', 'secondary-600', 'secondary-700', 'secondary-800'];
const dangers = ['danger-100', 'danger-200', 'danger-300', 'danger-400', 'danger-500', 'danger-600', 'danger-700', 'danger-800'];

const groups = [
  {id: 'greys', colors: greys, title: 'Greys' },
  {id: 'primaries', colors: primaries, title: 'Primaries' },
  {id: 'secondaries', colors: secondaries, title: 'Secondaries' },
  {id: 'dangers', colors: dangers, title: 'Dangers' },
];

const ColorsPatterns = () => {
  const colorGroups = useMemo(() => groups.map((group) => <ColorGroup key={group.id} colors={group.colors} title={group.title} />), []);

  return (
    <PatternsSection title="Colors">
      <Block isRow rowGap="lg" rowWrap="wrap">

      {colorGroups}
      </Block>
    </PatternsSection>
  );
};

export default ColorsPatterns;
