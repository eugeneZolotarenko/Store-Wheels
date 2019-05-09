import Nav from './Nav';
// import MenuButton from './MenuButton';
import Link from 'next/link';
import styled from 'styled-components';

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
    padding-left: 3rem;
    padding-bottom: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.grey};
    position: relative;
    .encourage-words{
      display: flex;
      justify-content: center;
      align-items: center;
      h1{
        margin: 0;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
        line-height: 49px;
        @media(max-width: 1100px){
          padding: 2.5rem 0 2.5rem 2.5rem;
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
    .wave{
      background-image: url(../static/wave.svg);
      background-repeat: no-repeat;
      width: 100%;
      height: 78px;
      position: absolute;
      top: calc(100% - 78px);
      left: 0;
    }
    .main-car{
      @media(max-width: 1100px){
        width: 500px;
      }
      @media(max-width: 850px){
        width: 80%
      }
    }
    @media(max-width: 1100px){
      padding-left: 0;
    }
    @media(max-width: 850px){
      flex-wrap: wrap;
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
          <div className="encourage-words">
            <h1>Looking for stylish wheels<br/>for your car?<br/><br/>So, Let’s go!</h1>
          </div>
          <button className="arrow-next-block"><img src="../static/arrow.svg"/></button>
          <img className="main-car" src="../static/gt86.png" alt="Toyota GT-86" />
          <div className="wave"></div>
        </div>
        <div className="sub-bar">
           <p>Search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
);

export default Header;