import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import todoApp from './reducers'

const configureStore = () => {
    const persistedState = loadState()
    const middlewares = [promise]

    if(process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger())
    }

    const store = createStore(
        todoApp,
        applyMiddleware(...middlewares)
    )
    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        })
    }, 2000))

    return store
}

export default configureStore