import styled from "styled-components";

const PriceTag = styled.span`
  background: ${props => props.theme.pink};
  transform: rotate(2deg);
  color: white;
  text-shadow: 2px 2px ${props => props.theme.semiblack};
  border-radius: 10px;
  font-weight: 600;
  padding: 7px;
  line-height: 1;
  font-size: 3rem;
  width: fit-content;
  margin: 15px auto;
`;

export default PriceTag;
