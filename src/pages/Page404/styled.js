import styled from 'styled-components';
import * as colors from '../../Assets/styles/colors';

// main tag styled 💬
export const Main = styled.main`
 background-color: ${colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  /* filter: brightness(90%); */
  font-size: 20px;
  width: 30%;
  height: 30%;
  -webkit-box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  -moz-box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  padding: 30px;
  padding-bottom: 30px;
  margin: 0 auto;
  margin-top: 12%;
  color: ${colors.white};
  flex-direction: column;

  :hover {
    font-weight: bold;
  }
  `;
