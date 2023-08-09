import { Block, H2, Text } from 'components/ui';

export const PatternsSection: React.FunctionComponent<{ children?: React.ReactNode, title: string }> = ({ children, title }) => (
  <section className="layout-section">
    <H2>{title}</H2>
    <Block offset>{children}</Block>
  </section>
);

export const PatternsGroup: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <Block offset>
    {children}
  </Block>
);

export const Pattern: React.FunctionComponent<{ children?: React.ReactNode; cssClass?: string }> = ({ children, cssClass }) => (
  <Block isRow offset offsetSize="sm" rowAlign="center">
    <div>{children}</div>
    {!!cssClass && <div><Text isCode>{cssClass}</Text></div>}
  </Block>
);
