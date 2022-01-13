import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// containers
import Auth from './containers/Auth/Auth';

// routes
import Routes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Auth>
        <Routes />
      </Auth>
    </BrowserRouter>
  );
}

export default App;
