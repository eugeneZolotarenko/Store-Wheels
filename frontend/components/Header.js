import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () =>{
  NProgress.start();
}
Router.onRouteChangeComplete = () =>{
  NProgress.done();
}
Router.onRouteChangeError = () =>{
  NProgress.done();
}

const StyledHeader = styled.header`
  .bar{
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
`


const Header = () => (
    <StyledHeader>
        <nav className="bar">
            <Link href="/">
              <a><img src="../static/logo.png"/></a>
            </Link>
           <Nav />
        </nav>
        {/* <div className="encourage-block">
          <div className="encourage-wrapper">
            <div className="encourage-words">
              <h1>Looking for stylish wheels<br/>for your car?<br/><br/>So, Let’s go!</h1>
            </div>
            <button className="arrow-next-block"><img src="../static/arrow.svg"/></button>
            <img className="main-car" src="../static/gt86.png" alt="Toyota GT-86" />
          </div>
          <div className="wave"></div>
        </div> */}
        <div className="sub-bar">
           {/* <p>Search</p> */}
        </div>
    </StyledHeader>
);

export default Header;