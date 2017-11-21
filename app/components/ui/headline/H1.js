import styled from 'styled-components';

const H1 = styled.h1`
  font-family: Verdana;
  font-weight: normal;
  line-height: 30px;
  font-size: 180%;
  color: ${props => props.theme.headline};
`;

export default H1;
