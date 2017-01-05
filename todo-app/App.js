import React from 'react'
import Links from './links'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			input: '',
			tasks: []
		}
	}
	onChange(e) {
		this.setState({
			input: e.target.value
		})
	}
	onAddTask() {
		this.setState({
			input: '',
			tasks: [...this.state.tasks, {text: this.state.input, done: false}]
		})
		this.refs.input.focus()
	}
	toggleTodo(i) {
		let tasks = this.state.tasks
		tasks[i].done = !tasks[i].done
		this.setState({
			tasks
		})
	}
	componentDidMount() {
		this.refs.input.focus()
	}
	render() {
		let filter, visibleTasks = this.state.tasks;

		if(this.props.params.show) {
			filter = this.props.params.show === 'done' ? true : false
			visibleTasks = this.state.tasks.filter(task => task.done === filter)
		}
		if(filter) {
			visibleTasks = this.state.tasks.filter(task => task.done === filter)
		}

		return (
			<div>
				<h1>{this.props.header}</h1>
				<input type="text"
					placeholder="Enter task"
					value={this.state.input}
					ref="input"
					onChange={this.onChange.bind(this)} />
				<button onClick={this.onAddTask.bind(this)}>Add</button>
				<ul>
					{visibleTasks.map((task, i) =>
						<li key={i}>
							<label>
								<input type="checkbox"
									checked={task.done}
									onClick={this.toggleTodo.bind(this, i)}/>
								<span style={{textDecoration: task.done ? 'line-through' : 'none'}}>
									{task.text}
								</span>
							</label>
						</li>)
					}
				</ul>
				<Links />
			</div>
		);
	}
}

export default App