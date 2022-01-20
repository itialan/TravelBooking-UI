import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// commons
import ModalManager from './components/Common/ModalManager/ModalManager';

// containers
import Auth from './containers/Auth/Auth';

// routes
import Routes from './routes/routes';

function App() {
  const [modal, setModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    console.log('clicked!');
    const {
      target: {
        dataset: { modalname },
      },
    } = e;
    console.log(e.target);
    if (modalname) setModal(modalname);
  };

  const closeModal = () => {
    setModal('');
  };

  return (
    <BrowserRouter>
      <Auth>
        <Routes />
        {/* <ModalManager closeFn={closeModal} modal={modal} /> */}
      </Auth>
    </BrowserRouter>
  );
}

export default App;
