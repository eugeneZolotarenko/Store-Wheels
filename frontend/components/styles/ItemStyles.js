import styled from "styled-components";

const Item = styled.div`
  background: white;
  // border: 1px solid ${props => props.theme.offWhite};
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 18px 0px ${props => props.theme.olive};
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
  p {
    font-size: 12px;
    line-height: 1.7;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    & > * {
      background: ${props => props.theme.olive};
      color: white;
      border: 0;
      font-size: 1.5rem;
      font-weight: 600;
      padding: 1rem;
      font-family: Montserrat;
    }
    *:nth-child(1){
      border-bottom-left-radius: 10px;
    }
    *:last-child{
      border-bottom-right-radius: 10px;
    }
  }
`;

export default Item;
