export const Form = styled.form`
  max-width: 1440px;
  background-color: ${colors.veryDarkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding: 30px;
  height: fit-content;
  margin: 100px;
  border-radius: 5px;
  color: ${colors.white};

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
      border-radius: 10px;
      background-color: ${colors.darkBlue};
      cursor: pointer;
      height: 19px;
      width: 10%;
      text-align: center;
    }
  }

  input {
    background-color: ${colors.orange};
    color: ${colors.white};
    padding: 2px;
    width: 200px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
  }


`;
