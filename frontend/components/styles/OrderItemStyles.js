import styled from "styled-components";

const OrderItemStyles = styled.li`
  list-style: none;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 18px 0px ${props => props.theme.olive};
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 4px 18px 0px ${props => props.theme.pink};
  }
  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 200px;
      object-fit: contain;
      width: 100%;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25px, 1fr));
    display: grid;
    grid-gap: 0.6rem;
    text-align: center;
    & > * {
      color: white;
      font-weight: 500;
      margin: 0;
      background: ${props => props.theme.olive};
      padding: 1rem 0.4rem;
      border-radius: 10px;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }
`;

export default OrderItemStyles;
