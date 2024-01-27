import React, { useCallback, useState } from 'react';

import ImportModal from 'features/ImportModal';

import Header from './components/Header';

import './index.css';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = React.memo<LayoutProps>(({ children }) => {
  const [showImportModal, setShowImportModal] = useState(false);

  const handleToggleImportModal = useCallback(() => {
    setShowImportModal((prev) => !prev);
  }, []);

  return (
    <div className="layout">
      <Header onImportClick={handleToggleImportModal} />
      <div className="layout-body">{children}</div>
      {showImportModal && <ImportModal onClose={handleToggleImportModal} />}
    </div>
  );
});

export default Layout;
