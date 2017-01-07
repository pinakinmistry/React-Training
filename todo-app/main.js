import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'

const Home = () => <div><h1>Home</h1></div>
const HomeBody = () => <div>Home body</div>
const Other = () => <div><h1>Other</h1></div>
const OtherBody = () => <div>Other body</div>

const Container = (props) => <div>{props.header} {props.body} <Links /></div>

const Links = () => (
    <nav>
        <Link to="/">Home | </Link>
        <Link to="/other">Other</Link>
    </nav>
)

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Container}>
            <IndexRoute components={{header: Home, body: HomeBody}}></IndexRoute>
            <Route path="other" components={{header: Other, body: OtherBody}}></Route>
        </Route>
    </Router>,
    document.getElementById('app')
)

// ReactDOM.render(
//     <Router history={ browserHistory }>
//         <Route path="/(:show)" component={App}></Route>
//     </Router>,
//     document.getElementById('app'))