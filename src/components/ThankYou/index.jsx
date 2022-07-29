// Global Imports 💬
import React from 'react';

// Local Imports 💬
import { Container } from '../../Assets/styles/GlobalStyles';
import { Main } from './styled';
import thankYouSvg from '../../Assets/images/illustration-thank-you.svg';

export default function ThankYou() {
  const star = localStorage.getItem('stars');
  const stars = JSON.parse(star);
  return (
    <Container>
      <Main>
        <img src={thankYouSvg} alt="Thank you" />

        <p>You Selected {stars} out of 5</p>

        <h1>Thank you!</h1>
        <h2>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </h2>
      </Main>
    </Container>
  );
}
