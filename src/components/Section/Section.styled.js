import styled from 'styled-components';

export const Wrapper = styled.section`
  &:first-child {
    margin-bottom: 10px;
  };
`;
export const Title = styled.h2`
  font-family: 'Alkatra', cursive;
  margin-bottom: 12px;
  color: ${({ theme: { helpers } }) => helpers.floralWhite};
`;