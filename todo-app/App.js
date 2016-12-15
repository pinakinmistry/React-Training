import React from 'react'

const App = React.createClass({
	getInitialState: function() {
		return {
			input: 'Enter task'
		}
	},
	onChange: function(e) {
		this.setState({
			input: e.target.value
		})
	},
	render: function() {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<input type="text"
					placeholder={this.state.input}
					onChange={this.onChange} />
			</div>
		);
	}
})

export default App