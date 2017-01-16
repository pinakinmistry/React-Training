import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'
import expect from 'expect'
//import { createStore } from 'redux'
import deepFreeze from 'deep-freeze'

const Home = React.createClass({
    componentWillMount() {
        this.context.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    },
    routerWillLeave(nextLocation) {
        return 'Going to ' + JSON.stringify(nextLocation)
    },
    render() {
        return <div><h1>Home</h1><Links /></div>
    }
})
Home.contextTypes = { router: React.PropTypes.object.isRequired }

const About = () => <div><h1>About</h1><Links /></div>

const Links = () => (
    <nav>
        <Link to='/'>Home | </Link>
        <Link to='/about'>About</Link>
    </nav>
)

// ReactDOM.render(
//     <Router history={browserHistory}>
//         <Route path='/' component={Home}></Route>
//         <Route path='/about' component={About}></Route>
//     </Router>,
//     document.getElementById('app')
// )

// ReactDOM.render(
//     <Router history={ browserHistory }>
//         <Route path="/(:show)" component={App}></Route>
//     </Router>,
//     document.getElementById('app'))


const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

const createStore = (reducer) => {
    let state;
    let listeners = []

    const getState = () => state

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listerners = listerners.filter(l => l != listener)
        }
    }

    dispatch({})

    return { getState, dispatch, subscribe }
}

const store = createStore(counter)
console.log(store.getState())

// store.dispatch({type: 'INCREMENT'})
// console.log(store.getState())

store.subscribe(() => {
    render()
})

const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />,
        document.getElementById('app')
    )
}

render()

const toggleTodo = (todo) => {
    return Object.assign({}, todo, { completed: !todo.completed })
    //return { ...todo, completed: !todo.completed }
}

const testToggleTodo = () => {
    const todoBefore = {
        id: '1',
        text: 'Learn Redux',
        completed: false
    }
    const todoAfter = {
        id: '1',
        text: 'Learn Redux',
        completed: true
    }

    deepFreeze(todoBefore)

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter)
}

testToggleTodo()
console.log('All tests passed')

// expect(counter(0, { type: 'INCREMENT' })).toEqual(1);

// expect(counter(1, { type: 'INCREMENT' })).toEqual(2);

// expect(counter(2, { type: 'DECREMENT' })).toEqual(1);

// expect(counter(1, { type: 'DECREMENT' })).toEqual(0);

// console.log('All tests passed');
