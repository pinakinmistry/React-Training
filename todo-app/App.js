import React from 'react'

const App = React.createClass({
	render: function() {
		return <h1>{this.props.header}</h1>
	}
})

App.propTypes = {
	header: React.PropTypes.string.isRequired,
	body: React.PropTypes.number
}

export default App