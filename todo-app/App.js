import React from 'react'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			input: 'Enter task'
		}
	}
	onChange(e) {
		this.setState({
			input: e.target.value
		})
	}
	render() {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<input type="text"
					placeholder={this.state.input}
					onChange={this.onChange.bind(this)} />
				<h2>{this.state.input}</h2>
			</div>
		);
	}
}

export default App