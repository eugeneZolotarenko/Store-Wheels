import styled from "styled-components";

const EncBlock = styled.div`
  .encourage-block {
    padding-left: 5rem;
    padding-bottom: 2rem;
    background-color: ${props => props.theme.grey};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 849px) {
      padding-left: 2rem;
    }
    .encourage-wrapper {
      width: 1280px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .encourage-words {
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          margin: 0;
          font-style: normal;
          font-weight: normal;
          font-size: 38px;
          line-height: 49px;
          @media (max-width: 1100px) {
            padding: 1.5rem 0 3.5rem 2.5rem;
            font-size: 35px;
          }
          @media (max-width: 849px) {
            padding: 1.5rem 1.5rem 0 0;
            font-size: 32px;
          }
          @media (max-width: 500px) {
            padding: 1.5rem 1.5rem 0 0;
          }
        }
      }
      .arrow-next-block {
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
        height: fit-content;
        margin-top: 140px;
        @media (max-width: 484px) {
          display: none;
        }
      }
      .main-car {
        // width: 680px;
        // margin-top: 2rem;
        @media (max-width: 1100px) {
          margin: 0;
          width: 500px;
        }
        @media (max-width: 850px) {
          width: 80%;
        }
        @media (max-width: 500px) {
          width: 100%;
        }
      }
      @media (max-width: 1100px) {
        padding-left: 0;
        padding-bottom: 4rem;
      }
      @media (max-width: 850px) {
        flex-wrap: wrap;
        justify-content: center;
      }
      @media (max-width: 500px) {
        justify-content: space-between;
        padding-bottom: 6rem;
      }
    }
    .wave {
      background-image: url(../static/wave.svg);
      background-repeat: no-repeat;
      width: 100%;
      height: 78px;
      position: absolute;
      top: calc(100% - 78px);
      left: 0;
    }
  }
`;

export default EncBlock;
