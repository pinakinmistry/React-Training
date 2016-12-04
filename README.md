# React Training

## Pre-Requisites:
- HTML
- CSS
- JavaScript

## What is React?

## What it's not?

## How it works?

## Why React? Why is it Awesome?

## Functional View

```
//Function returning just a view with no other power:
View = (function(props) {
	return <View />
})();

```

```
//Returning a ViewComponent with lots of powers:
ViewComponent = React.createClass({
	render() {
		return <View />
	}
});

````

## 3 Ways of Creating React Components:
- Classical Way (ES5 way)
- Classy Way (ES6 way)
- Functional Way (Stateless Components)

### Classical Way example

```
ViewComponent = React.createClass({
	method() {
		...
	},
	...,
	render() {
		return <View />
	}
});

```

### Classy Way example

```
class ViewComponent extends React.Component {
	method() {
		...
	}
	render() {
		return <View />
	}
}

```


### Functional Way example

```
ViewComponent = function (){
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
