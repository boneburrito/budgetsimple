export type BlockElement =
  | 'aside'
  | 'div'
  | 'footer'
  | 'form'
  | 'header'
  | 'li'
  | 'ol'
  | 'nav'
  | 'section'
  | 'ul';

export type GapPrimitive = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GapMixed = `${GapPrimitive},${GapPrimitive}`;

export type SpacingUnit = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type SpacingMixed = `${SpacingUnit},${SpacingUnit}`;

export interface BlockProps extends React.HTMLAttributes<HTMLElement> {
  background?: boolean | 'secondary' | 'tertiary';
  border?: boolean | 'all' | 'none' | 'top' | 'end' | 'bottom' | 'start';
  borderFirst?: boolean;
  borderSize?: 'lg' | 'xl';
  colAlign?: 'baseline' | 'center' | 'end' | 'start';
  colGap?: GapPrimitive | GapMixed;
  colJustify?: 'center' | 'end' | 'start';
  element?: BlockElement;
  inset?:
    | boolean
    | 'block-start'
    | 'block-end'
    | 'inline-start'
    | 'inline-end'
    | 'sides'
    | 'top-bottom';
  insetSize?: SpacingUnit | SpacingMixed;
  isColumn?: boolean;
  isFullHeight?: boolean;
  isRounded?: boolean;
  isRow?: boolean;
  isRowInline?: boolean;
  isShadowed?: boolean;
  isStretch?: boolean;
  offset?: boolean | 'all' | 'sides';
  offsetFirst?: boolean;
  offsetSize?: SpacingUnit | SpacingMixed;
  position?: 'absolute' | 'relative';
  roundedSize?: 'sm' | 'lg' | 'xl';
  rowAlign?: 'baseline' | 'center' | 'end' | 'start';
  rowGap?: GapPrimitive | GapMixed;
  rowJustify?: 'center' | 'end' | 'start';
  rowWrap?: 'none' | 'wrap';
  scroll?: 'none' | 'x' | 'y';
  shadowSize?: 'sm' | 'lg';
  textAlign?: 'center' | 'end' | 'start';
}
