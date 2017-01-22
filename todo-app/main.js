import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'

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

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_ACTIVE': 
            return todos.filter(todo => !todo.completed)
        case 'SHOW_COMPLETED': 
            return todos.filter(todo => todo.completed)
    }
}

const Todo = ({onClick, completed, text}) => (
    <li onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
        {text}
    </li>
)

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)

//const store = createStore(todoApp)

const AddTodo = ({store}) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }}/>
            <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    id: todoId++,
                    text: input.value
                })
                input.value = ''
            }}>Add Tasks</button>
        </div>
    )
}

const Link = ({active, children, onClick}) => {
    if(active) {
        return <span>{children}</span>
    }
    return (
        <a href="#" onClick={(e) => {
            e.preventDefault()
            onClick()
        }} >
            {children}
        </a>
    )
}

class FilterLink extends Component {
    componentDidMount() {
        const {store} = this.props
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const props = this.props
        const {store} = this.props
        const state = store.getState()

        return (
            <Link 
                active={props.filter === state.visibilityFilter}
                onClick={() => store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                })}
            >
                {props.children}
            </Link>
        )
    }
}

const Footer = ({store}) => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter="SHOW_ALL"
            store={store}
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_ACTIVE"
            store={store}
         >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_COMPLETED"
            store={store}
         >
            Completed
        </FilterLink>
    </p>
)

class VisibleTodoList extends Component {
    componentDidMount() {
        const {store} = this.props
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const props = this.props
        const {store} = this.props
        const state = store.getState()

        return (
            <TodoList
                todos={getVisibleTodos(state.todos, state.visibilityFilter)}
                onTodoClick={id => store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })}
            />
        )
    }
}

let todoId = 0;
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

const TodoApp = ({store}) => (
    <div>
        <AddTodo store={store} />
        <VisibleTodoList store={store} />
        <Footer store={store} />
    </div>
)

ReactDOM.render(
    <TodoApp store={createStore(todoApp)} />,
    document.getElementById('app')
)