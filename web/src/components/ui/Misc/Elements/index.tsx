import React from 'react';

import { Block, type BlockProps, Text, type TextProps } from 'components/ui';

/* INLINE ELEMENTS */

export type InlineElementProps = Omit<TextProps, 'element'>;

export const H1 = React.memo<InlineElementProps>(({ children, heading, ...rest }) => (
  <Text {...rest} element="h1" heading={heading ?? 1}>
    {children}
  </Text>
));

export const H2 = React.memo<InlineElementProps>(({ children, heading, ...rest }) => (
  <Text {...rest} element="h2" heading={heading ?? 2}>
    {children}
  </Text>
));

export const H3 = React.memo<InlineElementProps>(({ children, heading, ...rest }) => (
  <Text {...rest} element="h3" heading={heading ?? 3}>
    {children}
  </Text>
));

export const H4 = React.memo<InlineElementProps>(({ children, heading, ...rest }) => (
  <Text {...rest} element="h4" heading={heading ?? 4}>
    {children}
  </Text>
));

export const H5 = React.memo<InlineElementProps>(({ children, heading, ...rest }) => (
  <Text {...rest} element="h5" heading={heading ?? 5}>
    {children}
  </Text>
));

export const H6 = React.memo<InlineElementProps>(({ children, heading, ...rest }) => (
  <Text {...rest} element="h6" heading={heading ?? 6}>
    {children}
  </Text>
));

export const Strong = React.memo<InlineElementProps>(({ children, heading, ...rest }) => (
  <Text {...rest} element="strong">
    {children}
  </Text>
));

/* BLOCK ELEMENTS */

export type BlockElementProps = Omit<BlockProps, 'element'>;

export const Aside = React.memo<BlockElementProps>(({ children, ...rest }) => (
  <Block {...rest} element="aside">
    {children}
  </Block>
));

export const Footer = React.memo<BlockElementProps>(({ children, ...rest }) => (
  <Block {...rest} element="footer">
    {children}
  </Block>
));

export const Form = React.memo<BlockElementProps>(({ children, ...rest }) => (
  <Block {...rest} element="form">
    {children}
  </Block>
));

export const Header = React.memo<BlockElementProps>(({ children, ...rest }) => (
  <Block {...rest} element="header">
    {children}
  </Block>
));

export const ListItem = React.memo<BlockElementProps>(({ children, ...rest }) => (
  <Block {...rest} element="li">
    {children}
  </Block>
));

export const Nav = React.memo<BlockElementProps>(({ children, ...rest }) => (
  <Block {...rest} element="nav">
    {children}
  </Block>
));

export const OrderedList = React.memo<BlockElementProps>(({ children, ...rest }) => (
  <Block {...rest} element="ol">
    {children}
  </Block>
));

export const Section = React.memo<BlockElementProps>(({ children, ...rest }) => (
  <Block {...rest} element="section">
    {children}
  </Block>
));

export const UnorderedList = React.memo<BlockElementProps>(({ children, ...rest }) => (
  <Block {...rest} element="ul">
    {children}
  </Block>
));

