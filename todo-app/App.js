import React from 'react'

class App extends React.Component {
	render() {
		return <h1>{this.props.header}</h1>
	}
}

App.propTypes = {
	header: React.PropTypes.string.isRequired,
	body: React.PropTypes.number
}

App.defaultProps = {
	header: "Classy Default Header"
}

export default App