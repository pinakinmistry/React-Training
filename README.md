# React Training

## Pre-Requisites:
- HTML
- CSS
- JavaScript

### What is React?
- A JavaScript library for building user interface 
- HTML is written in JavaScript without using HTML ;-)
- Declarative
- Functional
- Component based
- Virtual DOM

### What it's not?
- Not a framework
- Doesn't cover anything other than view, not even model or routing
- Controller ??? (Component controls itself)

### MVC in View is not appropriate.

### How it works?
- Views are written in JavaScript/JSX (JavaScript Syntax eXtension)
- User interface and user interaction are written declaratively in form of components
- App then becomes a tree of components and sub components
- Data is passed in form of props and states from top of the tree
- Data flow only in one direction from top to bottom
- Re-render only what has changed with help of shallow comparison
- Entire DOM interaction is handled by React

### Why React? Why is it Awesome?
- Radically different way of writing view/client side App
- Makes views lot more powerful, interesting and irresistable to 'React' to ;-)
- Everything packed into logical components is easy to reason about and debug
- Learn once, write anywhere (React Native for native apps)
- Learn once, forget everything else ;-)
- Super Fast and Fun

### Look Ma, who all are using it:
- Facebook, Instagram
- Netflix
(2 names are enough)

## Functional View

```js
//Function returning just a view with no other power:
ViewComponent = (function(props) {
	return <View />
})();
```

```js
//Returning a ViewComponent with lots of powers:
ViewComponent = React.createClass({
	render: function() {
		return <View />
	}
});
````

> NOTE: simple function or `render` method is returning a view

## 3 Ways of Creating React Components:
- Classical way (ES5 way)
- Classy way (ES6 way)
- Functional way (Stateless Components)

### Classical way example

```js
ViewComponent = React.createClass({
	method: function() {
		...
	},
	...,
	render: function() {
		return <View />
	}
});
```

### Classy way example

```js
class ViewComponent extends React.Component {
	method() {
		...
	}
	render() {
		return <View />
	}
}
```


### Functional way example

```js
ViewComponent = function() {
	return <View />
};
```

> NOTE: Once again, simple function or `render` method returns a view

## Dev Environment Setup

We need below NPM packages:
- react
- react-dom
- babel
- babel-core
- babel-preset-react
- babel-preset-es2015
- babel-loader
- webpack
- webpack-dev-server


### Installation:

```
npm init -y
npm install react react-dom --save
npm i -g babel webpack webpack-dev-server
npm i -g babel-core babel-loader babel-preset-react babel-preset-es2015
```

## My First React Component

```
touch index.html App.js main.js webpack.config.js
```

#### webpack.config.js
```js
module.export = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
```

#### index.html
```html
<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	<title>React Training</title>
</head>
<body>
	<div id="app"></div>
	<script src="bundle.js"></script>
</body>
</html>
```

#### App.js
```js
import React from 'react'

//Component name should start with capital letter 
const App = React.createClass({
	render: function () {
		return <h1>My First React Component</h1>
	}
})

export default App
```

#### main.js
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))
```

#### Add scripts property in package.json to start webpack dev server
```js
{
	...
	"scripts" {
		"start": "webpack-dev-server"
	}
}
```

#### Start the application
```
npm start
```

### Exercise: Classy and Functional way of creating components

#### App.js
```js
//Classy way
import React from 'react'

class App extents React.Component {
	render() {
		return <h1>My First React Component</h1>
	}
}

export default App
```

```js
//Functional way

const App = () => <h1>My First React Component</h1>

export default App
```

## ES6 fat arrow function variants:
```js
() => ... 				//Single line output

(inputs) => (output)	//Multi line output

input => whatever		//Single input with optional () before =>

input => {body}			//body with statements with/without a return output
```

## What is JSX? Why use it?
- JSX stands for JavaScript Syntax eXtension
- Easier way of creating HTML nodes/elements in React code
- Requires Babel to convert JSX code to JavaScript that browsers understand
- Without JSX, we have to write React code this way
```js
const App = () => React.createElement('h1', props, 'React Node/Element')
```

## Hardcoded Components No Fun - Pass Data and Actions using `props`
- Nothing should be set in stone
- Pass data/actions as properties on component just like normal HTML attributes
- The passed properties are accessible in `this.props` inside of component

#### main.js
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App header="Dynamic Header"/>, document.getElementById('app'))
```

#### App.js
```js
import React from 'react'

const App = React.createClass({
	render: function () {
		return <h1>{this.props.header}</h1>
	}
})

export default App
```

> Note: `{}` is used to interleave/invoke JavaScript expression within JSX

## Props Validation
#### App.js
```js
import React from 'react'

const App = React.createClass({
	render: function () {
		return <h1>{this.props.header}</h1>
	}
})

App.propTypes = {
	header: React.PropTypes.string,
	body: React.PropTypes.number.isRequired
}

export default App
```

## Default Props
#### App.js
```js
import React from 'react'

const App = React.createClass({
	render: function () {
		return <h1>{this.props.header}</h1>
	}
})

App.defaultProps = {
	header: 'Default Header'
}

export default App
```

## Handling User Input

#### main.js
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App header="Dynamic Header" input="Enter text"/>, document.getElementById('app'))
```

#### App.js
```js
import React from 'react'

const App = React.createClass({
	render: function () {
		return (
			<div>
				<h1>{this.props.heading}</h1>
				<input value={this.props.input} />
			</div>
		)
	}
})

export default App
```

## Props are input and can't be changed within component
- No two way data flow
- Even DOM doesn't have control over view values
- Change in value should go through `render` method
- But props can't change

##Let's use `state` to handle change
- Component can have its own data in `state` property
- Component gets its state using `getInitialState` method
- state can undergo changes but can't be mutated (Once set, can't be reassigned later)
- Component should manage change in its state using its methods

#### main.js
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//Don't pass input as its no more a prop
ReactDOM.render(<App header="Dynamic Header" />, document.getElementById('app'))
```

#### App.js
```js
import React from 'react'

const App = React.createClass({
	getInitialState: function() {
		return {
			input: 'Enter text'
		}
	},
	render: function () {
		return (
			<div>
				<h1>{this.props.heading}</h1>
				<input value={this.state.input} />
			</div>
		)
	}
})
```

### Handle user input using `onChange` event
#### App.js
```js
import React from 'react'

const App = React.createClass({
	getInitialState: function() {
		return {
			input: 'Enter text'
		}
	},
	onChangeHandler: function(e) {
		this.setState({ input: e.target.value })
	},
	render: function () {
		return (
			<div>
				<h1>{this.props.heading}</h1>
				<input
					value={this.state.input} 
					onChange={this.onChangeHandler}
				/>
			</div>
		)
	}
})

## Setting up state is Classy Component
#### App.js
```js
import React from 'react'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			input: 'Enter text'
		}
	}
	onChangeHandler(e) {
		this.setState({ input: e.target.value })
	}
	render() {
		return (
			<div>
				<h1>{this.props.heading}</h1>
				<input
					value={this.state.input} 
					onChange={this.onChangeHandler.bind(this)}
				/>
			</div>
		)
	}
}


## MultiSelect Dropdown Component

## Passing data using props

## Stateless Component
- Takes data as input
- Takes methods as input
- Renders it to view
- Don't own data

## Stateful Component
- Contains data
- Goes through change in data/state
- Manages data with methods
- Passes data/methods to children components
- Owns data

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.j8hahvdyg
