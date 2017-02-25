import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import TodoApp from './components/App'

const persistedState = {
    todos: [
        {
            id: 0,
            text: 'Persisted task!',
            completed: false
        }
    ]
}

const store = createStore(todoApp, persistedState)

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
)