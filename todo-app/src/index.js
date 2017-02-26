import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import TodoApp from './components/App'
import { loadState, saveState } from './localStorage'


const persistedState = loadState()
const store = createStore(todoApp, persistedState)
store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    })
})

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
)