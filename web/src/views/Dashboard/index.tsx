import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Block, Button, H1 } from 'components/ui';

import Layout from 'features/Layout';

import TransactionsList from 'features/Transactions';

const DashboardView: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const handleSeeAllClick = useCallback(() => {
    navigate('/transactions');
  }, [navigate]);

  return (
    <Layout>
      <div className="layout-view">
        <H1 heading={2}>Recent transactions</H1>
  
        <Block offset offsetSize="lg">
          <TransactionsList limit={5} />
  
          <Block offset offsetSize="lg">
            <Button onClick={handleSeeAllClick}>See all transactions</Button>
          </Block>
        </Block>
      </div>
    </Layout>
  );
};

export default DashboardView;
