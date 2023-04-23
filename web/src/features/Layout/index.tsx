import React from 'react';

import Header from './components/Header';

import './index.css';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = React.memo<LayoutProps>(({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body">{children}</div>
    </div>
  );
});

export default Layout;
