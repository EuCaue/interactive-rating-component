import styled from 'styled-components';
import * as colors from '../../Assets/styles/colors';

export const Main = styled.main`
 background-color: ${colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(90%);
  border-radius: 8%;
  width: 30%;
  -webkit-box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  -moz-box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  padding: 30px;
  height: fit-content;
  margin: 0 auto;
  margin-top: 100px;
  color: ${colors.white};
  flex-direction: column;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  p {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  h1 {
    padding-bottom: 20px;
    
  }
`;
