import styled from 'styled-components';
import * as colors from '../../Assets/styles/colors';
// Mobile: 375px
// Desktop: 1440px

// Form 💬
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  width: 30%;
  -webkit-box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  -moz-box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  box-shadow: 0px 6px 36px -5px rgba(0,0,0,0.77);
  padding: 30px;
  height: 60%;
  margin: auto;
  margin-top: 10vh;
  color: ${colors.white};
  background: linear-gradient(180deg, ${colors.darkBlue}, ${colors.veryDarkBlue});

   article{
    width: 100%;
  }

  h1 {
    padding-top: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${colors.white};
    font-size: 28px;
  }

  h2 {
    color: ${colors.lightGrey};
  }



  @media only screen and (min-width: 1440px) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 50%;

}

  @media only screen and (max-width: 968px) {
  display: flex;
  margin: 0 auto;
  margin-top: 20%;
  width: 40%;
  height: fit-content;

 Ul {
    li {
      border-radius: 60%;
      width: 15%;
      height: 45px;
    }
  }

}

 @media only screen and (max-width: 768px) {
  display: flex;
  margin: 0 auto;
  margin-top: 20%;
  width: 43%;
  height: fit-content;

 Ul {
    li {
      border-radius: 60%;
      width: 15%;
      height: 45px;
    }
  }

}

@media only screen and (max-width: 600px) {
  display: flex;
  margin: 0 auto;
  margin-top: 20%;
  width: 55%;
  height: fit-content;

 Ul {
    li {
      border-radius: 60%;
      width: 15%;
      height: 45px;
    }
  }

}


@media only screen and (max-width: 475px) {
  display: flex;
  margin: 0 auto;
  margin-top: 20%;
  width: 80%;
  height: max-content;
  article {
    width: 100%;
  }
 Ul {
    li {
      border-radius: 60%;
      width: 15%;
      height: 45px;
    }
  }

}
@media only screen and (max-width: 375px) {
  display: flex;
  margin: 0 auto;
  margin-top: 20%;
  width: 90%;
  height: max-content;
  article {
    width: 100%;
  }
 Ul {
    li {
      border-radius: 60%;
      width: 15%;
      height: 45px;
    }
  }

}

`;

// UL 💬
export const Ul = styled.ul`

    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 15px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      color: ${colors.lightGrey};
      border-radius: 50%;
      background-color: ${colors.darkBlue};
      cursor: pointer;
      height: 50px;
      width: 14%;
      text-align: center;
      transition: all 200ms ease-out;
      font-weight: bold;

      :focus {
      background-color: ${colors.mediumGrey};
      color: ${colors.white};
    }
      :hover {
        background-color: ${colors.orange};
        color: ${colors.white};
      }
    }

`;

// Input 💬
export const Input = styled.input`
    background-color: ${colors.orange};
    color: ${colors.white};
    width: 100%;
    height: 40px;
    font-size: 14px;
    border-radius: 15px;
    text-align: center;

    :hover {
      background-color: ${colors.white};
      color: ${colors.orange};
    }
`;

// Div for the starimg 💬
export const StarDiv = styled.div`
      height: 40px;
      width: 40px;
      filter: brightness(120%);
      background-color: ${colors.darkBlue};
      border: none;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 40px;
      width: 15px;
   }

`;
