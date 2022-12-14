import styled from 'styled-components';

const LayoutPage = styled.section`align-items: center;
  align-self: center;
  background: rgb(67, 59, 103);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  max-width: 360;
  padding: 0 0.5rem;
  width: 360;

  @media ( min-width : 200px ) and ( max-width : 1600px ) {
    align-items: space-evenly;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
    max-width: 360;
  }
`;

export default LayoutPage;
