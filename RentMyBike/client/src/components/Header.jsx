import React from 'react'
import { NavLink } from 'react-router-dom'



function Header(props){
  return (
    <header>
      {props.auth ? (
        <nav>
          <NavLink exact to='/'><div className="name"></div></NavLink>
          <ul>
            <li>
              <NavLink exact to='/'>HOME</NavLink>
            </li>
            <li><NavLink exact to='/dash' >PROFILE</NavLink></li>
            {/* <li><NavLink exact to='/bikes' >BIKES</NavLink></li> */}
            <li><NavLink exact to='/login' onClick={() => props.logout()}>LOGOUT</NavLink></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <NavLink exact to='/'><div className="name"></div></NavLink>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='active'>
                HOME
              </NavLink>
            </li>
            <li><NavLink exact to='/login'>LOGIN</NavLink></li>
            <li><NavLink exact to='/register'>REGISTER</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
