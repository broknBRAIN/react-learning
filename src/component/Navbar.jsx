//boiler code for component
//rafce
//with the help of es7+ snippet installed in vscode
import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/' className={({isActive}) => isActive?"currPage":"notActive"}>Home</NavLink>
        </li>

        <li>
          <NavLink to='/about' className={({isActive}) => isActive?"currPage":"notActive"}>About</NavLink>
        </li>

        <li>
          <NavLink to='/dashboard' className={({isActive}) => isActive?"currPage":"notActive"}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}

//we never use anchor tag
//because it updates the whole webpage
//whereas react supports dynamic dom
//only those components update which are changed

//we use Link or NavLink
//Link just prevents reload
//NavLink has an activeClass attached to it as well, se we could know details about the page we are on

//how are we making a border around the curr page
//very easy
//NavLink has a isActive member
//is becomes active for the link we are on
//and to that link we give class = currPage
//in css we do .currpage and set the border
//this is why NavLink is important

export default Navbar
