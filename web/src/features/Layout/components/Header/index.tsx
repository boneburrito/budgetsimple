import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Button } from 'components/ui';

interface LayoutHeaderProps {
  onImportClick?: () => void;
}

const MAINNAV_ITEMS = [
  { id: 'home', path: '/', text: 'Home' },
  { id: 'transactions', path: '/transactions', text: 'Transactions' },
  { id: 'settings', path: '/settings', text: 'Settings' },
  { id: 'patterns', path: '/patterns', text: 'Patterns' }
];

const LayoutHeader = React.memo<LayoutHeaderProps>(({ onImportClick }) => {
  const items = useMemo(() => MAINNAV_ITEMS.map(
    (item) => (
      <li key={item.id} className="layout-header-nav-item">
        <NavLink className={({ isActive }) => classNames('layout-header-nav-link', { '--selected': isActive })} to={item.path}>{item.text}</NavLink>
      </li>
    )
  ), []);

  return (
    <div className="layout-header -row --row-align-c">
      <nav className="layout-header-nav -grow">
        <ul>
          {items}
        </ul>
      </nav>

      <div className="-in --in-x">
        <Button onClick={onImportClick} size="xs">Import</Button>
      </div>
    </div>
  );
});

export default LayoutHeader;
