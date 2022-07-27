/* eslint-disable jsx-a11y/label-has-associated-control */
// Global Imports 💬
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Local Imports 💬
import { Container } from '../../Assets/styles/GlobalStyles';
import { Form, Ul, Input, StarDiv } from './styled';
import star from '../../Assets/images/icon-star.svg';

export default function InteractiveRating() {
  // Hooks 💬
  const [stars, setStars] = useState('');
  const navigate = useNavigate();

  // Function to handle the submit event, and go to thanks page 💬
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!stars) toast.info('Select a value');
    navigate('/thanks');
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <article>
          {/* Div with styled-components, for the starSv 💬 */}
          <StarDiv>
            <img src={star} alt="Star Logo" />
          </StarDiv>

          <h1>How did we do?</h1>
          <h2>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </h2>

          {/* Ranking 💬 */}
          <Ul onClick={(e) => setStars(e.target.textContent)}>
            <li tabIndex={-1}>1</li>
            <li tabIndex={-1}>2</li>
            <li tabIndex={-1}>3</li>
            <li tabIndex={-1}>4</li>
            <li tabIndex={-1}>5</li>
          </Ul>
          {/* button for submit 💬 */}
          <label htmlFor="submit">
            <Input type="submit" name="submit" value="SUBMIT" />
          </label>
          {/* Thank you! We appreciate you taking the time to give a rating. If you
          ever need more support, don’t hesitate to get in touch! */}
        </article>
      </Form>

      {/* Footer 💬 */}
      <footer>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://github.com/EuCaue/" target="_blank" rel="noreferrer">
          Cauê Souza
        </a>
        .
      </footer>
    </Container>
  );
}
