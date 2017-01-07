import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'

const Home = (props) => (
    <div>
        <h1>{props.location.query.message || 'Hello'}</h1>
        <h2>{props.location.query.name || 'Moto'}</h2>
        <Links />
    </div>
)

const Links = () => (
    <nav>
        <Link to={{pathname: '/', query: {message: 'Yo', name: 'You'}}}>Yo</Link>
    </nav>
)

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
    </Router>,
    document.getElementById('app')
)

// ReactDOM.render(
//     <Router history={ browserHistory }>
//         <Route path="/(:show)" component={App}></Route>
//     </Router>,
//     document.getElementById('app'))