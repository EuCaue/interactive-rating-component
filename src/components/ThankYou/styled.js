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
  padding-bottom: 30px;
  margin: 0 auto;
  margin-top: 100px;
  color: ${colors.white};
  flex-direction: column;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    padding-top: 10px;
  }
  .background-state {
    background-color: ${colors.darkBlue};
    filter: contrast(92%);
    border-radius: 15px;
    width: 52%;
  }

  p {
    color: ${colors.orange};
    text-align: center;
    line-height: 10px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: brightness(120%);
  }

  h1 {
    padding: 10px;
    padding-top: 25px;
    font-size: 25px;
    font-weight: bold;
    color: ${colors.white};
  }

  h2 {
    color: ${colors.lightGrey};
    width: 98%;
    text-align: center;
    padding-bottom: 10px;
    filter: brightness(110%);
  }

  @media screen and (max-width: 375px) {
  display: flex;
  margin: 0 auto;
  margin-top: 20%;
  margin-right: 10px;
  margin-left: 10px;
  width: 95%;

  .background-state {
    width: 62%;
  }
}
`;
