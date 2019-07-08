import styled from "styled-components";

const Item = styled.div`
  background: white;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 18px 0px ${props => props.theme.olive};
  max-height: 620px;
  img {
    cursor: pointer;
    width: 100%;
    height: 300px;
    object-fit: contain;
    border-radius: 10px;
  }
  p {
    font-size: 12px;
    line-height: 1.7;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
    text-align: center;
    overflow: hidden;
  }
  .buttonList {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    grid-gap: 1px;
    background: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > * {
      background: ${props => props.theme.olive};
      color: white;
      border: 0;
      font-size: 1.45rem;
      font-weight: 600;
      padding: 1rem 0.45rem;
      font-family: Montserrat;
      cursor: pointer;
      transition: background-color 0.3s;
      outline: none;
      &:hover {
        background-color: ${props => props.theme.pink};
      }
    }
    *:nth-child(1) {
      border-bottom-left-radius: 10px;
    }
    *:last-child {
      border-bottom-right-radius: 10px;
    }
  }
  @media(min-width: 701px){
    max-width: 510px;
  }
`;

export default Item;
