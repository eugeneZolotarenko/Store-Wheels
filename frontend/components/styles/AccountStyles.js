import styled from "styled-components";

const AccountStyles = styled.div`
  max-width: calc(${props => props.theme.maxWidth} + 30px);
  margin: 0 auto;
  padding: 0 15px;
  h3 {
    text-align: center;
    color: ${props => props.theme.semiblack};
    font-size: 190%;
  }
  .permissions-block,
  .orders-block,
  .mail-block {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    padding: 2.5rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 18px 0px ${props => props.theme.olive};
    a {
      font-size: 90%;
      display: block;
      justify-self: center;
      color: white;
      padding: 0.2rem;
    }
  }
  p {
    font-size: 1.8rem;
    margin: 0;
    padding: 2.5rem 1.5rem;
  }
`;

export default AccountStyles;
