import styled from 'styled-components';
import * as colors from '../../Assets/styles/colors';
// Mobile: 375px
// Desktop: 1440px

export const Form = styled.form`
  background-color: ${colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  filter: brightness(88%);
  border-radius: 8%;
  width: 30%;
  -webkit-box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  -moz-box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  padding: 30px;
  height: fit-content;
  margin-top: 100px;
  margin-left: 30%;
  /* border-radius: 5px; */
  color: ${colors.white};

  article {
    width: 100%;

  }

    div {
      height: 40px;
      width: 40px;
      filter: brightness(120%);
      background-color: ${colors.darkBlue};
      border: none;
      border-radius: 40px;
      display: flex;
    justify-content: center;
    align-items: center;

    }



   img {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 40px;
    width: 15px;
  }

  h1 {
    padding-top: 25px;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${colors.white};
    font-size: 28px;
  }

  h2 {
    font-weight: 400;
    color: ${colors.lightGrey};
  }

  /* ul  */

  input {
    background-color: ${colors.orange};
    color: ${colors.white};
    /* padding:  2px; */
    width: 100%;
    height: 35px;
    font-size: 14px;
    border-radius: 15px;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: flex-end; */
    text-align: center;
    /* margin: 0 50px; */

  }

@media screen and (max-width: 375px) {
  display: flex;
  margin: 0 auto;
  margin-top: 20%;
  width: 90%;
}
`;

export const Ul = styled.ul`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 15px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      color: ${colors.lightGrey};
      border-radius: 50%;
      background-color: ${colors.darkBlue};
      filter: brightness(130%);
      cursor: pointer;
      height: 50px;
      width: 50px;
      text-align: center;
      transition: all 900ms;

      :hover {
        background-color: ${colors.orange};
      }
      ::before {
        background-color: ${props.colors.white};
      }
    }


`;
