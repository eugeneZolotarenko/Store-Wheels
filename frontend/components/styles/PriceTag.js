import styled from 'styled-components';

const PriceTag = styled.span`
  background: ${props => props.theme.pink};
  transform: rotate(3deg);
  color: white;
  text-shadow: 2px 2px ${props => props.theme.semiblack};
  border-radius: 10px;
  font-weight: 600;
  padding: 7px;
  line-height: 1;
  font-size: 3rem;
  width: fit-content;
  margin: 7px auto;
  // display: inline-block;
  // position: absolute;
  // top: -3px;
  // right: -3px;
`;

export default PriceTag;
