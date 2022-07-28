import styled, { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: 'Overpass', sans-serif;
    font-weight: 400;
}

html, body , #root {
  background-color: ${colors.veryDarkBlue};

  height: 100%;
}

li {
  list-style-type: none;
}

input {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms;
}

`;

export const Container = styled.section`
  /* margin: 100px 50px 10px 50px; */
  footer {
    position: absolute;
    top: 120%;
    color: ${colors.lightGrey};
    a {
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1em;
        :link {
          color: ${colors.orange};
        }

        :visited {
          color: ${colors.orange};
        }

        :active {
          color: ${colors.white};
        }
    }
  }

  @media screen and (max-width: 375px) {
      footer {
        width: 60%;
      }
    }

`;
