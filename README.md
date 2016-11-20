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

ViewComponent = function (props){
	return <View />
};

```

## Stateless Component
- Takes data/props as input
- Renders it to view
- Don't own data

## Stateful Component
- Contains of data
- Manages data with methods
- Passes data/methods to children components
- Owns data