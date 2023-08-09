import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorView = () => {
  const error = useRouteError() as { statusText?: string; message?: string } | undefined;

  return (
    <div>
      <h1>Error</h1>
      <p>{error?.statusText || error?.message}</p>
    </div>
  );
};

export default ErrorView;
