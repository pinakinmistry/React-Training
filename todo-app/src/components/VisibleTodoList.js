import { connect } from 'react-redux'
import TodoList from './TodoList'
import { toggleTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'all':
            return todos
        case 'active':
            return todos.filter(todo => !todo.completed)
        case 'completed':
            return todos.filter(todo => todo.completed)
    }
}

const mapStateToProps = (state, props) => ({
    todos: getVisibleTodos(state.todos, props.filter)
})

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id))
    }
})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList