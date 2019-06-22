import styled from "styled-components";

const CloseButton = styled.button`
  background: ${props => props.theme.olive};
  border-bottom-left-radius: 5px;
  color: white;
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  &:hover {
    box-shadow: 0px 0px 7px 0px ${props => props.theme.olive};
  }
`;

export default CloseButton;
