import { v4 } from 'node-uuid'

const fakeDatabase = {
    todos: [{
        id: v4(),
        text: 'Learn React',
        completed: true
    }, {
        id: v4(),
        text: 'Learn React Router',
        completed: true
    }, {
        id: v4(),
        text: 'Learn Redux',
        completed: false
    }]
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = (filter) =>
    delay(5000).then(() => {
        switch(filter) {
            case 'all':
                return fakeDatabase.todos
            case 'active':
                return fakeDatabase.todos.filter(todo => !todo.completed)
            case 'completed':
                return fakeDatabase.todos.filter(todo => todo.completed)
            default:
            throw new Error(`Unknown filter: ${filter}`)
        }
    })