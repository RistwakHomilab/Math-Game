import React from 'react';

const APIKeyChecker: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // This component's API key checking logic has been removed.
  // API key presence is now handled within the services that require it,
  // preventing the app from crashing and improving security by not
  // showing configuration instructions to users.
  return <>{children}</>;
};

export default APIKeyChecker;
