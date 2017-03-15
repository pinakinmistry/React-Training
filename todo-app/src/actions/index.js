import * as api from '../api'
import { getIsFetching } from '../reducers'

export const fetchTodos = (filter) => (dispatch, getState) => {
    if(getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter,
    })
    return api.fetchTodos(filter).then(
        response =>
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                filter,
                response
            })
        , error =>
            dispatch({
                type: 'FETCH_TODOS_ERROR',
                filter,
                message: error.message
            })
    )
}

export const addTodo = (text) => (dispatch) => {
    return api.addTodo(text).then(
        response =>
            dispatch({
                type: 'ADD_TODO_SUCCESS',
                response
            })
    )
}

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})