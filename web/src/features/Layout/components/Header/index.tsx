import React, { useMemo } from 'react';
import { useResolvedPath, Link } from 'react-router-dom';
import classNames from 'classnames';

interface LayoutHeaderProps {}

const MAINNAV_ITEMS = [
  { id: 'home', path: '/', text: 'Home' },
  { id: 'transactions', path: '/transactions', text: 'Transactions' },
  { id: 'settings', path: '/settings', text: 'Settings' },
  { id: 'patterns', path: '/patterns', text: 'Patterns' }
];

const LayoutHeader = React.memo<LayoutHeaderProps>(() => {
  const resolvedPath = useResolvedPath('/');

  const items = useMemo(() => MAINNAV_ITEMS.map(
    (item) => (
      <li key={item.id} className={classNames('layout-header-nav-item', { '--selected': item.path === resolvedPath.pathname })}>
        <Link className="layout-header-nav-link" to={item.path}>{item.text}</Link>
      </li>
    )
  ), [resolvedPath]);

  return (
    <div className="layout-header">
      <nav className="layout-header-nav">
        <ul>
          {items}
        </ul>
      </nav>
    </div>
  );
});

export default LayoutHeader;
