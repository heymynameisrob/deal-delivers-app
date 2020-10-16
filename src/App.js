import React from 'react';

import { CookieNotice, } from './components/Cards';
import createRoutes from './routes';

const App = ()  => {
  return(
    <>
      {createRoutes()}
      <CookieNotice />
    </>
  )
}

export default App;
