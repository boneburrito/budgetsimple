export const PatternsSection: React.FunctionComponent<{ children?: React.ReactNode, title: string }> = ({ children, title }) => (
  <section className="layout-section">
    <h2 className="heading-2">{title}</h2>
    <div className="-offset">{children}</div>
  </section>
);

export const PatternsGroup: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="-offset">
    {children}
  </div>
);

export const Pattern: React.FunctionComponent<{ children?: React.ReactNode; cssClass?: string }> = ({ children, cssClass }) => (
  <div className="-offset --sm -flex --center">
    <div>{children}</div>
    {!!cssClass && <div><span className="-code">{cssClass}</span></div>}
  </div>
);
