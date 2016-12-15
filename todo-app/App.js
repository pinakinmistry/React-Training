import React from 'react'

const App = (props) => <h1>{props.header}</h1>

App.propTypes = {
	header: React.PropTypes.string.isRequired,
	body: React.PropTypes.number
}

export default App