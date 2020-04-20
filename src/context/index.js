import React, { useEffect } from 'react';
import { DataProvider } from './DataProvider';
import metadata from '../metadata.json';

const ThemeProvider = ({ children }) => {

  // Adds theme to html root element
  useEffect(() => {
    document.documentElement.dataset.theme = metadata.theme;
  }, []);
  return <div>{children}</div>
}

const AppProviders = ({ children }) => {
  return (
    <DataProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </DataProvider>
  );
};

export default AppProviders;