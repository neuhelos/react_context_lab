import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className='navBar'>
                <NavLink to={"/Home"} className="navBarLink" activeClassName='selected'>HOME</NavLink>
                <NavLink to={"/Weather"} className="navBarLink" activeClassName='selected'>WEATHER</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;
