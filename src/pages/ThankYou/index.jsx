// Global Imports 💬
import React from 'react';

// Local Imports 💬
import { Footer } from '../../Assets/styles/GlobalStyles';
import { Main } from './styled';
import thankYouSvg from '../../Assets/images/illustration-thank-you.svg';

export default function ThankYou() {
  // Recovering the state of rating page 💬
  const stars = localStorage.getItem('stars');
  const star = JSON.parse(stars);
  return (
    <>
      <Main>
        {/* IMG */}
        <img src={thankYouSvg} alt="Thank you" />

        {/*  */}
        <span className="background-state">
          <p>You Selected {star} out of 5</p>
        </span>

        <h1>Thank you!</h1>
        <h2>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </h2>
      </Main>

      <Footer>
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
      </Footer>
    </>
  );
}
