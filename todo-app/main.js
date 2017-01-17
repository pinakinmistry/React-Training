import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'
import expect from 'expect'
import { createStore, combineReducers } from 'redux'
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

const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if(state.id != action.id) {
                return state
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch(action.type)  {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action))
        default:
            return state
    }
}

const visibilityFilter = (
    state = 'SHOW_ALL',
    action
) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

// const todoApp = (state = {}, action) => {
//     return {
//         todos: todos(
//             state.todos,
//             action
//         ),
//         visibilityFilter: visibilityFilter(
//             state.visibilityFilter,
//             action
//         )
//     }
// }

const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
})

const testTodos = () => {
    const todosBefore = []
    const action = {
        type: 'ADD_TODO',
        id: '1',
        text: 'Learn Redux'
    }
    const todosAfter = [{
        id: '1',
        text: 'Learn Redux',
        completed: false
    }]
    
    deepFreeze(todosBefore)
    deepFreeze(action)

    expect(
        todos(todosBefore,action)
    ).toEqual(todosAfter)
}

const testToggleTodo = () => {
	const todosBefore = [
		{
			id: '1',
			text: 'Learn React',
			completed: false
		},
		{
			id: '2',
			text: 'Learn Redux',
			completed: false
		}
	]
	const action = {
		type: 'TOGGLE_TODO',
		id: '1'
	}
	const todosAfter = [
		{
			id: '1',
			text: 'Learn React',
			completed: true
		},
		{
			id: '2',
			text: 'Learn Redux',
			completed: false
		}
	]

	deepFreeze(todosBefore)
	deepFreeze(action)

	expect(
		todos(todosBefore, action)
	).toEqual(todosAfter)
}

testTodos()
testToggleTodo()
console.log('All tests passed')

const store = createStore(todoApp)
console.log(store.getState())

store.dispatch({type: 'ADD_TODO', id: '1', text: 'Learn React'})
console.log(store.getState())

store.dispatch({type: 'ADD_TODO', id: '2', text: 'Learn Redux'})
console.log(store.getState())

store.dispatch({type: 'TOGGLE_TODO', id: '1'})
console.log(store.getState())

store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'COMPLETED'})
console.log(store.getState())


// expect(counter(0, { type: 'INCREMENT' })).toEqual(1);

// expect(counter(1, { type: 'INCREMENT' })).toEqual(2);

// expect(counter(2, { type: 'DECREMENT' })).toEqual(1);

// expect(counter(1, { type: 'DECREMENT' })).toEqual(0);

// console.log('All tests passed');
