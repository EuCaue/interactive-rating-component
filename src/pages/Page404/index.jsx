// Global Imports 💬
import React from 'react';
import { Link } from 'react-router-dom';

import { Main } from './styled';

export default function Page404() {
  return (
    <Main>
      Sorry this page does not exist
      <Link to="/">Return to the home page</Link>
    </Main>
  );
}
