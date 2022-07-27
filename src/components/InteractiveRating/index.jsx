/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Form, Ul } from './styled';
import { Container } from '../../Assets/styles/GlobalStyles';
import star from '../../Assets/images/icon-star.svg';

export default function InteractiveRating() {
  // const handleSelect = (e) => {
  //   console.log('click');
  //   e.target.style.background = 'black';
  // };

  return (
    <Container>
      <Form>
        <article>
          <div>
            <img src={star} alt="Star Logo" />
          </div>

          <h1>How did we do?</h1>
          <h2>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </h2>

          <Ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </Ul>
          <label htmlFor="submit">
            <input type="submit" name="submit" value="SUBMIT" />
          </label>
          {/* Thank you! We appreciate you taking the time to give a rating. If you
          ever need more support, don’t hesitate to get in touch! */}
        </article>
      </Form>

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
