import styled from "styled-components";

const CartStyles = styled.div`
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 300px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 3000;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${props => props.open && `transform: translateX(0);`};
  header {
    margin: 0 0 0 7px;
    border-bottom: 5px solid ${props => props.theme.olive};
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double ${props => props.theme.olive};
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 2.3rem;
    font-weight: 900;
    margin: 0 7px 10px 7px;
    span {
      justify-self: end;
    }
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0 0 0 7px;
    padding: 0;
    list-style: none;
    overflow: scroll;
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-thumb {
      border-width: 1px 1px 1px 2px;
      border-color: #777;
      background-color: ${props => props.theme.olive};
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #aaa;
    }
    ::-webkit-scrollbar-track {
      border-width: 0;
    }
    ::-webkit-scrollbar-track:hover {
      border-radius: 5px;
      background-color: #eee;
    }
  }
`;

export default CartStyles;
