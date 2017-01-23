import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

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

const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: todoId++,
    text
})

const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }}/>
            <button onClick={() => {
                dispatch(addTodo(input.value))
                input.value = ''
            }}>Add Tasks</button>
        </div>
    )
}
AddTodo = connect()(AddTodo)

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

const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}
const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}
const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link)

const Footer = (props, {store}) => (
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
Footer.contextTypes = {
    store: React.PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) =>
            dispatch(toggleTodo(id))
    }
}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

let todoId = 0;
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
)