import { connect } from 'react-redux'
import { withRouter } from 'react-router'
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

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, ownProps.params.filter || 'all')
})

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id))
    }
})

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList))

export default VisibleTodoList