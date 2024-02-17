import React, { useMemo } from 'react';

type ColorSwatchStyles = React.CSSProperties & {
  '--color': string;
};

type ColorSwatchComponentProps = {
  hue: string;
};

type ColorSwatchComponent = React.FunctionComponent<ColorSwatchComponentProps>;

const ColorSwatch: ColorSwatchComponent = ({ hue }) => {
  const styles = useMemo<ColorSwatchStyles>(() => ({
    '--color': `var(--theme-color-${hue})`,
  }), [hue]);

  return (
    <div className="patterns-swatch" style={styles} />
  );
};

export default ColorSwatch;
