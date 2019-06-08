import Link from "next/link";
import { Mutation } from "react-apollo";
import { TOGGLE_CART_MATATION } from "./Cart";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition
    });
  }
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <NavStyles>
            <div className={this.state.condition ? "menu" : "menu hide-menu"}>
              <Link href="/items">
                <a onClick={this.handleClick}>Shop</a>
              </Link>
              {me && (
                <>
                  <Link href="/sell">
                    <a onClick={this.handleClick}>Sell</a>
                  </Link>
                  <Link href="/orders">
                    <a onClick={this.handleClick}>Orders</a>
                  </Link>
                  <Link href="/me">
                    <a onClick={this.handleClick}>Account</a>
                  </Link>
                  <Signout />
                  <Mutation mutation={TOGGLE_CART_MATATION}>
                    {toggleCart => (
                      <button onClick={this.handleClick} onClick={toggleCart}>
                        My Cart
                      </button>
                    )}
                  </Mutation>
                </>
              )}
              {!me && (
                <Link href="/signup">
                  <a onClick={this.handleClick}>Sign In</a>
                </Link>
              )}
            </div>

            {/*START responsive Menu button */}
            <button
              onClick={this.handleClick}
              className={
                this.state.condition
                  ? "burger-container change-burger"
                  : "burger-container"
              }
            >
              <div className="burger-line-1" />
              <div className="burger-line-2" />
              <div className="burger-line-3" />
            </button>
            {/*END responsive Menu button */}
          </NavStyles>
        )}
      </User>
    );
  }
}

export default Nav;
