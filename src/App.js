import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import InteractiveRating from './components/InteractiveRating';
import GlobalStyles from './Assets/styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <InteractiveRating />;
      <ToastContainer autoClose={1000} />
    </BrowserRouter>
  );
}

export default App;
