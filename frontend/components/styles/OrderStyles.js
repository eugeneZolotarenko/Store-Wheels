import styled from "styled-components";

const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 5% auto;
  border-radius: 10px;
  box-shadow: 0px 4px 18px 0px ${props => props.theme.olive};
  padding: 2rem;
  border-top: 10px solid ${props => props.theme.olive};
  border-bottom: 10px solid ${props => props.theme.olive};
  & > p {
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin: 0;
    border-bottom: 1px solid ${props => props.theme.olive};
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }
  .order-item {
    border-bottom: 1px solid ${props => props.theme.olive};
    display: grid;
    grid-template-columns: 300px 1fr;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
export default OrderStyles;
