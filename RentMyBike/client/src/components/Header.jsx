import React from 'react'
import { NavLink } from 'react-router-dom';
import Auth from '../modules/Auth';

// Header component. Has conditional rendering for login.

function Header(props){
  return (
    <header>
      <div className='logo'/>
      
        <nav>
          <NavLink exact to='/'><div className="name"></div></NavLink>
          <ul>
            <li>
              <NavLink exact to='/'>HOME</NavLink>
            </li>
            <li><NavLink exact to='/login'>LOGIN</NavLink></li>
            <li><NavLink exact to='/register'>REGISTER</NavLink></li>
            <li><NavLink exact to='/dash' >PROFILE</NavLink></li>
            <li><NavLink exact to='/bikes' >BIKES</NavLink></li>
            <li><NavLink exact to='/login' onClick={() => props.logout()}>LOGOUT</NavLink></li>
          </ul>
        </nav>
    
    </header>
  )
}

export default Header