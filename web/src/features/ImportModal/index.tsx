import React, { useCallback, useMemo, useState } from 'react';

import { useDispatch } from 'state';
import { uploadTransactions } from 'state/transactions';

import { Block, H4, Modal } from 'components/ui';

import './index.css';
import classNames from 'classnames';

const ImportModal: React.FunctionComponent<{ onClose?: () => void }> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = useCallback<React.DragEventHandler<HTMLDivElement>>((event) => {
    event.preventDefault();
    setIsOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsOver(false);
  }, []);

  const handleDrop = useCallback<React.DragEventHandler<HTMLDivElement>>((event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(uploadTransactions(event.dataTransfer.files));

    onClose?.();
  }, [onClose, dispatch]);

  const classes = useMemo(() => classNames('import-modal-drop', {
    '--dragging': isOver,
  }), [isOver]);

  return (
    <Modal onClose={onClose}>
      <H4>Import transactions</H4>

      <Block
        className={classes}
        offset
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >Drop zone</Block>
    </Modal>
  );
};

export default ImportModal;
