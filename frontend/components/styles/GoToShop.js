import styled from "styled-components";

const GoToShop = styled.section`
  max-width: calc(${props => props.theme.maxWidth} + 30px);
  margin: 0 auto;
  padding: 10px 15px;
  width: 100%;
  p {
    font-size: 34px;
    line-height: 43px;
    color: ${props => props.theme.semiblack};
    strong {
      color: ${props => props.theme.pink};
    }
  }
  .go-ahead {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 34px  0;
    p {
      margin: 5px;
    }
    button {
      margin: 0 15px;
      height: fit-content;
      width: fit-content;
      a {
        height: fit-content;
        color: white;
        font-size: 28px;
        font-weight: 700;
      }
    }
  }
`;

export default GoToShop;
