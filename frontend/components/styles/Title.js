import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  // margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    color: ${props => props.theme.olive};
    text-shadow: 2px 2px ${props => props.theme.semiblack};
    display: inline;
    line-height: 1.2;
    font-size: 3.3rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

export default Title;
