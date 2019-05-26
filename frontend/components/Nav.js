import Link from 'next/link';
import NavStyles from './styles/NavStyles'

class Nav extends React.Component {
  constructor(props) {    
      super(props)
      this.state = {
        condition: false
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
      this.setState({
        condition: !this.state.condition
      })
    }
  render() {
    return ( 

    <NavStyles >
      <div className= { this.state.condition ? "menu" : "menu hide-menu" }>
        <Link href="/items">
          <a onClick={ this.handleClick }>Shop</a>
        </Link>
        <Link href="/sell">
          <a onClick={ this.handleClick }>Sell</a>
        </Link>
        <Link href="/signup">
          <a onClick={ this.handleClick }>Sign up</a>
        </Link>
        <Link href="/orders">
          <a onClick={ this.handleClick }>Orders</a>
        </Link>
        <Link href="/me">
          <a onClick={ this.handleClick }>Account</a>
        </Link>
      </div>

      {/*START responsive Menu button */}
        <button 
          onClick={ this.handleClick } 
          className= { this.state.condition ? "burger-container change-burger" : "burger-container" }
        >
          <div className="burger-line-1"></div>
          <div className="burger-line-2"></div>
          <div className="burger-line-3"></div>
        </button>
      {/*END responsive Menu button */}

    </NavStyles>
  )
 }
};

export default Nav