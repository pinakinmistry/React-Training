import React from 'react'

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
			tasks: [...this.state.tasks, this.state.input]
		})
		this.refs.input.focus()
	}
	componentDidMount() {
		this.refs.input.focus()
	}
	render() {
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
					{this.state.tasks.map((task) => 
						<li><label><input type="checkbox" /> {task}</label></li>)}
				</ul>
			</div>
		);
	}
}

export default App