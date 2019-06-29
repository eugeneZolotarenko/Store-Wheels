import styled from "styled-components";

const StyleFooter = styled.footer`
  height: 100px;
  background-color: ${props => props.theme.grey};
  position: relative;
  margin-top: 78px;
  display: flex;
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
    font-size: 18px;
    color: ${props => props.theme.semiblack};
    font-weight: 500;
    text-align: center;
    &:hover {
      color: ${props => props.theme.pink};
    }
  }
`;

const Foooter = () => (
  <StyleFooter>
    <div className="wave" />
    <a href="https://github.com/eugeneZolotarenko">
      Designed & Developed by Eugene Zolotarenko
    </a>
  </StyleFooter>
);
export default Foooter;
