import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.header`
  .bar {
    position: fixed;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.grey};
    padding: 1rem;
    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <nav className="bar">
      <Link href="/">
        <a>
          <img src="../static/logo.png" />
        </a>
      </Link>
      <Nav />
    </nav>
  </StyledHeader>
);

export default Header;
