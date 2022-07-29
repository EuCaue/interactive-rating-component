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
    // Checking if no stars were given 💬
    if (!stars) return toast.info('Select a value');

    // Checking if the value does not correspond to a star 💬
    if (stars === '12345') {
      return toast.info('Error with the value, select again.');
    }
    localStorage.setItem('stars', JSON.stringify(stars));

    // Navigate to the thanks page 💬
    navigate('/thanks');
    return true;
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <main>
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
          <Ul onClick={(e) => setStars(e.target.textContent)} role="listitem">
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
        </main>
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
        . With{' '}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          ReactJS
        </a>
        .
      </footer>
    </Container>
  );
}
