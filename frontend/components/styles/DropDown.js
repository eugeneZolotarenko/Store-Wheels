import styled, { keyframes } from "styled-components";

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 2px solid ${props => props.theme.olive};
  border-radius: 10px;
`;

const DropDownItem = styled.div`
  border-bottom: 2px solid ${props => props.theme.olive};
  background: ${props => (props.highlighted ? "#f7f7f7" : "white")};
  padding: 1rem;
  transition: all 0.2s;
  ${props => (props.highlighted ? "padding-left: 2rem;" : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${props => (props.highlighted ? props.theme.pink : "white")};
  img {
    margin-right: 10px;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: none;
  }
  &:nth-child(1) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px ${props => props.theme.pink};
  }

  to {
    box-shadow: 0 0 10px 1px ${props => props.theme.pink};
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    font-family: Montserrat;
    width: 100%;
    padding: 10px;
    border: 2px solid ${props => props.theme.olive};
    border-radius: 10px;
    font-size: 2rem;
    outline: none;
    margin-bottom: 5px;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
