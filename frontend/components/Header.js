import Nav from './Nav';
// import MenuButton from './MenuButton';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  .bar{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    @media (max-width: 700px) {
        flex-direction: column;
      }
  }
`


const Header = () => (
    <StyledHeader>
        <div className = "bar">
            <Link href="/">
              <a><img src="../static/logo.png"/></a>
            </Link>
           <Nav />
        </div>
        <div className = "sub-bar">
           <p>Search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
);

export default Header;