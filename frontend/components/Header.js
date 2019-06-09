import { Mutation } from "react-apollo";
import { TOGGLE_CART_MATATION } from "./Cart";
import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import Cart from "./Cart";
import User from "./User";
import CartCount from "./CartCount";

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
    .main-logo,
    .order-button {
      width: fit-content;
    }
    .nav-orders {
      display: flex;
      .order-button {
        background: none;
        border: none;
        display: flex;
        padding: 1rem 2rem;
        text-transform: uppercase;
        font-weight: 600;
        font-family: Montserrat;
        font-size: 1.1em;
        cursor: pointer;
        color: ${props => props.theme.semiblack};
        align-items: center;
      }
      @media (max-width: 700px) {
        flex-direction: row-reverse;
      }
    }
  }
`;

const Header = () => (
  <User>
    {({ data: { me } }) => (
      <StyledHeader>
        <nav className="bar">
          <Link href="/">
            <a className="main-logo">
              <img src="../static/logo.png" />
            </a>
          </Link>
          <div className="nav-orders">
            <Nav />
            {/* My Order Button */}
            {me && (
              <Mutation mutation={TOGGLE_CART_MATATION}>
                {toggleCart => (
                  <button className="order-button" onClick={toggleCart}>
                    <i className="fas fa-shopping-basket fa-lg" />
                    <CartCount
                      count={me.cart.reduce(
                        (tally, cartItem) => tally + cartItem.quantity,
                        0
                      )}
                    />
                  </button>
                )}
              </Mutation>
            )}
            {/*End My Order Button */}
          </div>
        </nav>
        <Cart />
      </StyledHeader>
    )}
  </User>
);

export default Header;
