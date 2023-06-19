import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface LayoutHeaderProps {}

const MAINNAV_ITEMS = [
  { id: 'home', path: '/', text: 'Home' },
  { id: 'transactions', path: '/transactions', text: 'Transactions' },
  { id: 'settings', path: '/settings', text: 'Settings' },
  { id: 'patterns', path: '/patterns', text: 'Patterns' }
];

const LayoutHeader = React.memo<LayoutHeaderProps>(() => {
  const items = useMemo(() => MAINNAV_ITEMS.map(
    (item) => (
      <li key={item.id} className="layout-header-nav-item">
        <NavLink className={({ isActive }) => classNames('layout-header-nav-link', { '--selected': isActive })} to={item.path}>{item.text}</NavLink>
      </li>
    )
  ), []);

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
