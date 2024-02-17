import React, { useMemo } from 'react';

import { Block, H4 } from 'components/ui';
import { Pattern } from 'views/Patterns/components/Shared';

import Color from '../Color';

type ColorGroupComponentProps = {
  colors: string[];
  title: string;
};

type ColorGroupComponent = React.FunctionComponent<ColorGroupComponentProps>;

const ColorGroup: ColorGroupComponent = ({ colors, title }) => {
  const swatches = useMemo(() => colors.map((hue) => <Color key={hue} hue={hue} label={hue} />), []);
  return (
    <Block className="patterns-color-group" offsetSize="xs">
      <H4>{title}</H4>
      <Pattern>{swatches}</Pattern>
    </Block>
  );
};

export default ColorGroup;
