import styled from "styled-components";

const StyleFooter = styled.footer`
  height: 100px;
  background-color: ${props => props.theme.grey};
  position: relative;
  margin-top: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .wave {
    background-image: url(../static/wave-2.svg);
    background-position-x: right;
    background-repeat: no-repeat;
    width: 100%;
    height: 78px;
    position: absolute;
    top: calc(0% - 78px);
    right: 0;
  }
  a {
    font-size: 17px;
    color: ${props => props.theme.semiblack};
    font-weight: 500;
    text-align: center;
    transition: 0.3s;
    line-height: 3rem;
    &:hover {
      color: ${props => props.theme.pink};
    }
  }
  .wes-bos {
    font-size: 15px;
    color: ${props => props.theme.semiblack};
    font-weight: 600;
    &:hover {
      color: #ecd018;
      text-shadow: 0px 1px 12px #1d1d1e;
    }
  }
`;

const Foooter = () => (
  <StyleFooter>
    <div className="wave" />
    <a href="https://github.com/eugeneZolotarenko">
      Designed & Developed by Eugene Zolotarenko
    </a>
    <a className="wes-bos" href="https://wesbos.com/">
      With Wes Bos's helping
    </a>
  </StyleFooter>
);
export default Foooter;
