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
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.grey};
    padding: 1rem;
    @media (max-width: 700px) {
        flex-direction: column;
    }
  }
  .encourage-block{
    padding-left: 5rem;
    padding-bottom: 2rem;
    background-color: ${props => props.theme.grey};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .encourage-wrapper{
      width: 1280px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .encourage-words{
        display: flex;
        justify-content: center;
        align-items: center;
        h1{
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 38px;
        line-height: 49px;
        @media(max-width: 1100px){
          padding: 1.5rem 0 3.5rem 2.5rem;
          font-size: 35px;
        }
      }
    }
    .arrow-next-block{
      background: none;
      border: none;
      cursor: pointer;
      outline: none;
      height: fit-content;
      margin-top: 140px;
      @media(max-width: 592px){
        margin-top: 0;
      }
    }
    .main-car{
      // width: 680px;
      // margin-top: 2rem;
      @media(max-width: 1100px){
        margin: 0;
        width: 500px;
      }
      @media(max-width: 850px){
        width: 80%
      }
    }
    @media(max-width: 1100px){
      padding-left: 0;
      padding-bottom: 4rem;
    }
    @media(max-width: 850px){
      flex-wrap: wrap;
      justify-content: center;
    }
    @media(max-width: 500px){
      padding-bottom: 6rem;
    }
   }
   .wave{
    background-image: url(../static/wave.svg);
    background-repeat: no-repeat;
    width: 100%;
    height: 78px;
    position: absolute;
    top: calc(100% - 78px);
    left: 0;
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
        <div className="encourage-block">
          <div className="encourage-wrapper">
            <div className="encourage-words">
              <h1>Looking for stylish wheels<br/>for your car?<br/><br/>So, Let’s go!</h1>
            </div>
            <button className="arrow-next-block"><img src="../static/arrow.svg"/></button>
            <img className="main-car" src="../static/gt86.png" alt="Toyota GT-86" />
          </div>
          <div className="wave"></div>
        </div>
        <div className="sub-bar">
           <p>Search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
);

export default Header;