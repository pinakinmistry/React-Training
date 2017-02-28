import React from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

const TodoApp = ({params}) => (
    <div>
        <AddTodo />
        <VisibleTodoList filter={params.filter || 'all'}/>
        <Footer />
    </div>
)

export default TodoApp