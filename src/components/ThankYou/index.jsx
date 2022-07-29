// Global Imports 💬
import React from 'react';

// Local Imports 💬
import { Container } from '../../Assets/styles/GlobalStyles';
import { Main } from './styled';
import thankYouSvg from '../../Assets/images/illustration-thank-you.svg';

export default function ThankYou() {
  // Recovering the state of rating page 💬
  const stars = localStorage.getItem('stars');
  const star = JSON.parse(stars);
  return (
    <Container>
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
    </Container>
  );
}
