import React from 'react'
import {Link} from 'react-router'

const Links = () =>
    <nav>
        <Link activeClassName="active" to="/">All | </Link>
        <Link activeClassName="active" to="/notdone+">Not Done | </Link>
        <Link activeClassName="active" to="/done">Done</Link>
    </nav>

export default Links