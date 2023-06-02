import styled from 'styled-components';
// import 'components/Fonts/Caveat-VariableFont_wght.ttf'
export const OptionsWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`;
export const OptionBtn = styled.button`
  font-family: 'Alkatra', cursive;
  font-weight: 700;
  color: ${({ theme: { helpers } }) => helpers.black};
  cursor: pointer;
 

  padding: 10px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 5px solid ${({ theme: { helpers } }) => helpers.floralWhite};
  &:hover {
    border-color: ${({ theme: { helpers } }) => helpers.floralWhite};
  }

  background-color: ${props => {
    switch (props.option) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'goldenRod';
      case 'bad':
        return 'red';
      default:
        return 'transparent';
    }
  }};
`;
