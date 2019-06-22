import styled from "styled-components";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.5rem;
  z-index: 999;
  @media (max-width: 700px) {
    width: fit-content;
    align-self: center;
    flex-direction: column;
    text-align: center;
    transition: 0.3s;
  }
  .active{
      color: ${props => props.theme.pink};
    }
  a,
  .signout-btn {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    font-family: Montserrat;
    color: ${props => props.theme.semiblack};
    /* border-top: 1px solid transparent;
    border-bottom: 1px solid transparent; */
    transition: all 0.3s;
    &:hover {
      color: ${props => props.theme.pink};
      /* border-color: ${props => props.theme.semiblack}; */
    }
    @media (max-width: 900px) {
      padding: 1rem 1.1rem;
    }
    @media (max-width: 700px) {
      padding: 0.8rem 10px;
      text-align: center;
      justify-content: center;
    }
  }
  .signout-btn {
    @media (max-width: 700px) {
      width: 100%;
      color: white;
    }
  }
  &:hover,
  &:focus {
    outline: none;
  }

  // Start Button to MENU
  .burger-container {
    z-index: 999;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    width: fit-content;
    @media (min-width: 701px) {
      display: none;
    }
  }
  .burger-container .burger-line-1,
  .burger-container .burger-line-2,
  .burger-container .burger-line-3 {
    border-radius: 2px;
    width: 35px;
    height: 5px;
    background-color: ${props => props.theme.semiblack};
    margin: 6px 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .change-burger .burger-line-1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }
  .change-burger .burger-line-2 {
    opacity: 0;
  }
  .change-burger .burger-line-3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
  // END Button to MENU

  // START Settings for responsive menu

  @media (max-width: 1300px) {
    font-size: 1.6rem;
  }

  .menu {
    @media (min-width: 701px) {
      display: flex;
    }
    @media (max-width: 700px) {
      transition: 0.4s ease-in-out;
      position: absolute;
      background-color: ${props => props.theme.grey};
      width: 100%;
      left: 0;
      transform: translateY(55px);
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      z-index: 900;
      a, button {
        color: ${props => props.theme.semiblack};
        font-weight: 700;
      }
    }
  }
  .hide-menu {
    @media (max-width: 700px) {
      transform: translateY(-150%);
      transition: 0.4s ease-in-out;
    }
  }
  // END Settings for responsive menu
`;

export default NavStyles;
