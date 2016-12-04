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
- Controller ???

### MVC in View is not appropriate.

### How it works?
- Views are written in JavaScript/JSX (JavaScript Syntax eXtension)
- User interface and user interaction are written declaratively in form of components
- App then becomes a tree of components and sub components
- Data is passed in form of props and states from top of the tree
- Data flow only in one way direction from top to bottom
- Re-render only what has changed with help of shallow comparison
- Entire DOM interaction is handled by React

### Why React? Why is it Awesome?
- Radically different way of writing view/client side App
- Logic is packed in component and easy to reason about and debug
- Learn once, write anywhere (React Native for native apps)
- Super Fast

### Look Ma, who all are using it:
- Facebook, Instagram
- Netflix

(2 names are enough)

### Functional View

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

```js
//webpack.config.js
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

```html
//index.html
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

```js
//App.js
import React from 'react'

const App = React.createClass({
	render: function () {
		return <div>Hello World</div>
	}
})

export default App
```

```js
//main.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('app'))
```

```js
//Add scripts property in package.json
{
	...
	"scripts" {
		"start": "webpack-dev-server"
	}
}
```

## No Hardcoding - Nothing is set in stone.

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
