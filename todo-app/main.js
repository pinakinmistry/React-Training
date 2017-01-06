import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'

const Outer = (props) => <div><h1>ToDo App</h1><Links />{props.children}</div>
const About = (props) => <div><h1>About</h1>{props.children}</div>
const Contact = (props) => <div><h1>Contact</h1>{props.children}</div>
const Email = () => <div><h1>Email</h1></div>
const Links = () => (
    <nav>
        <Link to="/">Home | </Link>
        <Link to="/about">About | </Link>
        <Link to="/about/contact">Contact | </Link>
        <Link to="/about/contact">Email</Link>
    </nav>
)
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Outer}>
            <Route path="about" component={About}>
                <Route path="contact" component={Contact}>
                    <IndexRoute component={Email}></IndexRoute>
                </Route>
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
)

// ReactDOM.render(
//     <Router history={ browserHistory }>
//         <Route path="/(:show)" component={App}></Route>
//     </Router>,
//     document.getElementById('app'))