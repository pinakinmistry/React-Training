import React from 'react'
import {Link} from 'react-router'

const Links = () =>
    <nav>
        <Link to="/">All | </Link>
        <Link to="/notdone">Not Done | </Link>
        <Link to="/done">Done</Link>
    </nav>

export default Links