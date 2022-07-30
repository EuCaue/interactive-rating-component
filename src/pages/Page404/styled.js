import styled from 'styled-components';
import * as colors from '../../Assets/styles/colors';

// main tag styled 💬
export const Main = styled.main`
 background-color: ${colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  font-weight: 600;
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


  `;
