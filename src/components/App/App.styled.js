import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 80px;
  padding: 20px;
  width: 300px;
  height: auto;
  text-align: center;

  border-radius: 20px;
  border: 5px solid ${({ theme: { helpers } }) => helpers.floralWhite}
  
  background-color: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,65,45,0.8827906162464986) 100%);
`;
