import React, { useMemo } from 'react';

import { Block, Text } from 'components/ui';

import Swatch from '../Swatch';

type ColorComponentProps = {
  hue: string;
  label: string;
};

type ColorComponent = React.FunctionComponent<ColorComponentProps>;

const Color: ColorComponent = ({ hue, label }) => {
  return (
    <Block className="patterns-color" isRow rowAlign="center" offset offsetFirst={false} offsetSize="xs">
      <Swatch hue={hue} /><Text isMonospace>{label}</Text>
    </Block>
  );
};

export default Color;
