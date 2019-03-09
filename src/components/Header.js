import React,{Component} from 'react'
import { Link } from 'react-router'

export default class Header extends Component {

    constructor()
    {
        super();
        this.state={
            isNavOpen:false
        }
    }

    buttonClicked=()=>
    {
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }

  render() {
      console.log("rendering");
    return (
        <header>
          <nav className='container navbar navbar-expand-lg navbar-light justify-content-between '>
            <a className='navbar-brand' href='#'>EğitimBudur</a>
            <button className="navbar-toggler" type="button" onClick={this.buttonClicked}>
        <span className="navbar-toggler-icon"></span>
      </button>
            <div className='navbar-collapse' style={{display: this.state.isNavOpen ? 'block':'none'}}>
            <ul className='navbar-nav'>
              <li className='nav-item'>
              <Link to='/' activeClassName='active'  className='nav-link'>Anasayfa</Link>
                </li>
                <li className='nav-item'>
              <Link to='/about' href='#'  className='nav-link'>Hakkımızda</Link>
                </li>
                <li className='nav-item'>
              <Link to='/contact' href='#'  className='nav-link'>İletişim</Link>
                </li>
               </ul>
            </div>
          </nav>
        </header>
      )
  }
}


