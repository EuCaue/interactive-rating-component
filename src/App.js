import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './Assets/styles/GlobalStyles';
import Router from './routes';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles />
      <ToastContainer autoClose={1000} />
    </BrowserRouter>
  );
}

export default App;
