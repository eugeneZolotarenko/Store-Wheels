import styled from "styled-components";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.5rem;
  z-index: 999;
  @media(max-width: 700px){
    width: 100%;
    align-self: center;
    flex-direction: column;
    text-align: center;
    transition: .3s;
  }

  a{
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
    color: ${props => props.theme.semiblack};
    @media (max-width: 700px) {
      padding: .8rem 10px;
      text-align: center;
      justify-content: center;
    }
  }
    &:hover,
    &:focus {
      outline: none;
    }
  }

  // Start Button to MENU
  .burger-container {
    position: fixed;
    top: 2%;
    right: 4%;
    z-index: 999;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    @media (min-width: 700px) {
      display: none;
    }
  }
.burger-container .burger-line-1, .burger-container .burger-line-2, .burger-container .burger-line-3 {
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

  .menu{
    @media(min-width: 700px){
    display: flex;
    }
    @media(max-width: 700px){
      transition: .4s ease-in-out;
      position: absolute;
      background-color: ${props => props.theme.semiblack};
      width: 100%;
      left: 0;
      margin-top: 10px;
      // transform: translateY(8%);
      a{
        color: white;
      }
    }
    @media(min-width: 700px){
      display: flex;
    }
  }
  .hide-menu{
    @media(max-width: 700px){
      transform: translateY(-250%);
      transition: .4s ease-in-out;
      }
    }
  }
  // END Settings for responsive menu
`;

export default NavStyles;
