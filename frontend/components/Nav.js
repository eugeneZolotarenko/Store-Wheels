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
          <a>Items</a>
        </Link>
        <Link href="/sell">
          <a>Sell</a>
        </Link>
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
        <Link href="/orders">
          <a>Orders</a>
        </Link>
        <Link href="/me">
          <a>Account</a>
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