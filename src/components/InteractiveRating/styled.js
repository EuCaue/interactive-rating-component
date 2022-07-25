import styled from 'styled-components';
import * as colors from '../../Assets/styles/colors';
// Mobile: 375px
// Desktop: 1440px

export const Form = styled.form`
  background-color: ${colors.veryDarkBlue};
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 450px;
  padding: 30px;
  height: fit-content;
  margin-top: 100px !important;
  margin-left: 30% !important;
  border-radius: 5px;
  color: ${colors.white};

  article {
    width: 100%;

  }

  img {
    background-color: ${colors.darkBlue};
    border: none;
    border-radius: 40px;
    width: 20px;
  }

  h1 {
    padding-top: 25px;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${colors.white}
  }

  h2 {
    font-weight: 400;
    color: ${colors.lightGrey}
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 15px;
    li {
      margin: 10px;
      border-radius: 50%;
      background-color: ${colors.darkBlue};
      cursor: pointer;
      height: 50px;
      width: 50px;
      text-align: center;
    }
  }

  input {
    background-color: ${colors.orange};
    color: ${colors.white};
    padding: 2px;
    width: 300px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
  }

@media screen and (max-width: 350px) {
  display: flex;
  width: 350px;
  justify-content: center;
}
`;
