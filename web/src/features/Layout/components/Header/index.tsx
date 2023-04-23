import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutHeaderProps {}

const LayoutHeader = React.memo<LayoutHeaderProps>(() => {
  return (
    <div className="layout-header">
      <nav className="layout-header-nav">
        <ul>
          <li className="layout-header-nav-item">
            <Link className="layout-header-nav-link" to="/">Home</Link>
          </li>

          <li className="layout-header-nav-item">
            <Link className="layout-header-nav-link" to="/envelopes">Envelopes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default LayoutHeader;
