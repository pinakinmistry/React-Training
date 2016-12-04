# React Training

## Pre-Requisites:
- HTML
- CSS
- JavaScript

### What is React?
- A JavaScript library for building user interface 
- HTML is written in JavaScript without using HTML
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
- Radical way of writing views
- Logic is packed in component and easy to reason about and debug
- Learn once, write anywhere (React Native for native apps)
- Super Fast

### Functional View

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
- Classical way (ES5 way)
- Classy way (ES6 way)
- Functional way (Stateless Components)

### Classical way example

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

### Classy way example

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


### Functional way example

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
