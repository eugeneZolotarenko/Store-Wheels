import styled from "styled-components";

const SickButton = styled.button`
  background: ${props => props.theme.pink};
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  transition: 0.3s;
  font-family: Montserrat;
  cursor: pointer;
  outline: none;
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    box-shadow: ${props => props.theme.buttonShadow};
  }
`;

export default SickButton;
