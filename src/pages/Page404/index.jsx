// Global Imports 💬
import React from 'react';
import { Link } from 'react-router-dom';

import { Main } from './styled';

export default function Page404() {
  return (
    <Main>
      Sorry this page does not exist
      <Link to="/">Return to the home page</Link>
      <footer>
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        Coded by
        <a href="https://github.com/EuCaue/" target="_blank" rel="noreferrer">
          Cauê Souza
        </a>
        With
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          ReactJS
        </a>
      </footer>
    </Main>
  );
}
