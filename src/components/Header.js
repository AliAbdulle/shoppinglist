import React from 'react'
import {Link} from 'react-router-dom'

function Header () {
    return (
        <Header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </Header>
    )
}
export default Header