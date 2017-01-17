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
- It outsources client side routing to npm package `react-router`
- It outsources model/state management to npm packages like `react-redux`, `flux`, etc.
- MVC in View is not appropriate.

### How it works?
- Views are written in form of JavaScript functions
- User interface and user interaction are written declaratively in form of components
- App then becomes a tree of components and sub components
- Data is passed in form of `props` and `state` from top of the tree
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
- Cut the Crap; Go for Gold

### Look Ma, who all are using React:
- Facebook, Instagram
- Netflix

> 2 names are enough

## Functional View (Function returning a view)
```js
//A function taking some input and returning a view.
//ES5 syntax
function(input) {
	return view;
}
//ES6/ES2015 syntax
(input) => view
```

```js
//Function returning just a view with no other power:
ViewComponent = (function() {
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
import React from 'react'

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
import React from 'react'

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
npm i -g babel babel-core babel-loader babel-preset-react babel-preset-es2015 --save-dev
npm i -g webpack webpack-dev-server
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

class App extends React.Component {
	render() {
		return <h1>My First React Component</h1>
	}
}

export default App
```

```js
//Functional way
import React from 'react'

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
//Classical way
import React from 'react'

const App = React.createClass({
	render: function () {
		return <h1>{this.props.header}</h1>
	}
})

export default App
```

> Note: `{}` is used to interleave/invoke JavaScript expression within JSX

```js
//Classy way
import React from 'react'

class App extends React.Component {
	render() {
		return <h1>{this.props.header}</h1>
	}
}

export default App
```

## `props` are received as input to functional/stateless components:

#### App.js ()
```js
//Functional way
import React from 'react'

const App = (props) => <h1>{props.header}</h1>

export default App
```

## What if `props` are not passed?

###Props Validation
#### App.js
```js
import React from 'react'

const App = React.createClass({
	render: function () {
		return <h1>{this.props.header}</h1>
	}
})

App.propTypes = {
	header: React.PropTypes.string.isRequired,
	body: React.PropTypes.number
}

export default App
```

#### PropTypes that can be validated:
```js
```
> NOTE: props validation is done in same way in Classical, Classy and Functional Components

### Default Props
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
> NOTE: props validation is done in same way in Classical, Classy and Functional Components

## Handling User Input

#### main.js
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App header="ToDo App" input="Enter task"/>, document.getElementById('app'))
```

#### App.js
```js
import React from 'react'

const App = React.createClass({
	render: function () {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<input value={this.props.input} />
			</div>
		)
	}
})

export default App
```

## `props` are input and can't be changed within component
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
ReactDOM.render(<App header="ToDo App" />, document.getElementById('app'))
```

#### App.js
```js
import React from 'react'

const App = React.createClass({
	getInitialState: function() {
		return {
			input: 'Enter task'
		}
	},
	render: function () {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<input value={this.state.input} />
			</div>
		)
	}
})

export default App
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
	onChange: function(e) {
		this.setState({
			input: e.target.value
		})
	},
	render: function () {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<input
					value={this.state.input} 
					onChange={this.onChange}
				/>
			</div>
		)
	}
})

export default App
```

## Setting up `state` is Classy Component
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
	onChange(e) {
		this.setState({ input: e.target.value })
	}
	render() {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<input
					value={this.state.input} 
					onChange={this.onChange.bind(this)}
				/>
				<h2>{this.state.input}</h2>
			</div>
		)
	}
}

export default App
```

## `state` vs `props`

# ToDo App Implementation

#### App.js
```js
import React from 'react'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			input: '',
			tasks: []
		}
	}
	onChange(e) {
		this.setState({
			input: e.target.value
		})
	}
	onAddTask() {
		this.setState({
			input: '',
			tasks: [...this.state.tasks, this.state.input]
		})
	}
	render() {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<input type="text"
					placeholder="Enter task"
					value={this.state.input}
					onChange={this.onChange.bind(this)} />
				<button onClick={this.onAddTask.bind(this)}>Add</button>
				<ul>
					{this.state.tasks.map((task) => 
						<li><label><input type="checkbox" /> {task}</label></li>)}
				</ul>
			</div>
		);
	}
}

export default App
```
## Toggle task as done/not done

#### App.js
```js
import React from 'react'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			input: '',
			tasks: []
		}
	}
	onChange(e) {
		this.setState({
			input: e.target.value
		})
	}
	onAddTask() {
		this.setState({
			input: '',
			tasks: [...this.state.tasks, {text: this.state.input, done: false}]
		})
		this.refs.input.focus()
	}
	toggleTodo(i) {
		let tasks = this.state.tasks;
		tasks[i].done = !tasks[i].done;
		this.setState({
			tasks
		})
	}
	componentDidMount() {
		this.refs.input.focus()
	}
	render() {
		return (
			<div>
				<h1>{this.props.header}</h1>
				<input type="text"
					placeholder="Enter task"
					value={this.state.input}
					ref="input"
					onChange={this.onChange.bind(this)} />
				<button onClick={this.onAddTask.bind(this)}>Add</button>
				<ul>
					{this.state.tasks.map((task, i) => 
						<li>
							<label>
								<input type="checkbox"
									checked={task.done}
									onClick={this.toggleTodo.bind(this, i)}/>
								<span style={{textDecoration: task.done ? 'line-through' : 'none'}}>
									{task.text}
								</span>
							</label>
						</li>)
					}
				</ul>
			</div>
		);
	}
}

export default App
```

# Composition of Components
- React components can be nested
- A React component should be broken down into logical sub components
- Child properties can be accessed using `props.children`

#### App.js
```js
import React from 'react'

class App extends React.Component {
	render() {
		return <Button>I <Heart /> React</Button>
	}
}

const Button = (props) => <button>{props.children}</button>

const Heart = () => <span>&heart;</span>

export default App
```



# Component Life Cycle



# Client Side Routing using `react-router` npm package
- `react-router` gives JSX styled syntax for defining client side routes in a span
- `this.props.params` holds route parameters defined using `path="/:routeParam"` in `Route` definition
- Route parameters can be made optional using `path=/(:optionalRouteParam)` syntax

```
npm install react-router --save
```

## Using `Router` to define various `Route`s in To Do App

#### main.js
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/(:show)" component={App}></Route>
    </Router>,
    document.getElementById('app'))
```

## Accessing route parameter using `this.props.params` and filtering To Do tasks

#### App.js
```js
import React from 'react'
import Links from './links'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			input: '',
			tasks: []
		}
	}
	onChange(e) {
		this.setState({
			input: e.target.value
		})
	}
	onAddTask() {
		this.setState({
			input: '',
			tasks: [...this.state.tasks, {text: this.state.input, done: false}]
		})
		this.refs.input.focus()
	}
	toggleTodo(i) {
		let tasks = this.state.tasks
		tasks[i].done = !tasks[i].done
		this.setState({
			tasks
		})
	}
	componentDidMount() {
		this.refs.input.focus()
	}
	render() {
		let filter, visibleTasks = this.state.tasks;

		if(this.props.params.show) {
			filter = this.props.params.show === 'done' ? true : false
			visibleTasks = this.state.tasks.filter(task => task.done === filter)
		}
		if(filter) {
			visibleTasks = this.state.tasks.filter(task => task.done === filter)
		}

		return (
			<div>
				<h1>{this.props.header}</h1>
				<input type="text"
					placeholder="Enter task"
					value={this.state.input}
					ref="input"
					onChange={this.onChange.bind(this)} />
				<button onClick={this.onAddTask.bind(this)}>Add</button>
				<ul>
					{visibleTasks.map((task, i) =>
						<li key={i}>
							<label>
								<input type="checkbox"
									checked={task.done}
									onClick={this.toggleTodo.bind(this, i)}/>
								<span style={{textDecoration: task.done ? 'line-through' : 'none'}}>
									{task.text}
								</span>
							</label>
						</li>)
					}
				</ul>
				<Links />
			</div>
		);
	}
}

export default App
```

## Using `Link` from `react-router` to do client side routing

#### links.js
```js
import React from 'react'
import {Link} from 'react-router'

const Links = () =>
    <nav>
        <Link to="/">All | </Link>
        <Link to="/notdone">Not Done | </Link>
        <Link to="/done">Done</Link>
    </nav>

export default Links
```
## `activeClassName` and `activeStyle` props for styling active `Link`
#### links.js
```js
import React from 'react'
import {Link} from 'react-router'

const Links = () =>
    <nav>
        <Link activeClassName="active" to="/">All | </Link>
        <Link activeClassName="active" to="/notdone+">Not Done | </Link>
        <Link activeClassName="active" to="/done">Done</Link>
    </nav>

export default Links
```

```js
import React from 'react'
import {Link} from 'react-router'

const Links = () =>
    <nav>
        <Link activeStyle={{fontWeight: 'bolder'}} to="/">All | </Link>
        <Link activeStyle={{fontWeight: 'bolder'}} to="/notdone+">Not Done | </Link>
        <Link activeStyle={{fontWeight: 'bolder'}} to="/done">Done</Link>
    </nav>

export default Links
```

## Nested `Route`s and default routing using `IndexRoute`
#### main.js
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'

const Outer = (props) => <div><h1>Home</h1><Links />{props.children}</div>
const About = (props) => <div><h1>About</h1>{props.children}</div>
const Contact = (props) => <div><h1>Contact</h1>{props.children}</div>
const Email = () => <div><h1>Email</h1></div>
const Links = () => (
    <nav>
        <Link to="/">Home | </Link>
        <Link to="/about">About | </Link>
        <Link to="/about/contact">Contact | </Link>
        <Link to="/about/contact">Email</Link>
    </nav>
)
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Outer}>
            <Route path="about" component={About}>
                <Route path="contact" component={Contact}>
                    <IndexRoute component={Email}></IndexRoute>
                </Route>
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
)
```

## Named components within a container component
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'

const Home = () => <div><h1>Home</h1></div>
const HomeBody = () => <div>Home body</div>
const Other = () => <div><h1>Other</h1></div>
const OtherBody = () => <div>Other body</div>

const Container = (props) => <div>{props.header} {props.body} <Links /></div>

const Links = () => (
    <nav>
        <Link to="/">Home | </Link>
        <Link to="/other">Other</Link>
    </nav>
)

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Container}>
            <IndexRoute components={{header: Home, body: HomeBody}}></IndexRoute>
            <Route path="other" components={{header: Other, body: OtherBody}}></Route>
        </Route>
    </Router>,
    document.getElementById('app')
)
```

## Passing query paramters in URL using `props.location`
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'

const Home = (props) => (
    <div>
        <h1>{props.location.query.message || 'Hello'}</h1>
        <h2>{props.location.query.name || 'Moto'}</h2>
        <Links />
    </div>
)

const Links = () => (
    <nav>
        <Link to={{pathname: '/', query: {message: 'Yo', name: 'You'}}}>Yo</Link>
    </nav>
)

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}></Route>
    </Router>,
    document.getElementById('app')
)
```

## Route leave check using `this.context.router.setRouteLeaveHook`
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'

const Home = React.createClass({
    componentWillMount() {
        this.context.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    },
    routerWillLeave(nextLocation) {
        return 'Going to ' + JSON.stringify(nextLocation)
    },
    render() {
        return <div><h1>Home</h1><Links /></div>
    }
})
Home.contextTypes = { router: React.PropTypes.object.isRequired }

const About = () => <div><h1>About</h1><Links /></div>

const Links = () => (
    <nav>
        <Link to='/'>Home | </Link>
        <Link to='/about'>About</Link>
    </nav>
)

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
    </Router>,
    document.getElementById('app')
)

```

# Redux:
- A predictable container to hold entire application state
- Entire application state is maintained as an object in one single store
- Store is created using `Redux.createStore` by providing a reducer function as input
- State can be changed only by dispatching action to the store
- Reducer function takes existing state and action and returns new state based on the action
- Action is minimal plain JavaScript object with `type` property defining the action 
- Internally reducer function gets called on dispatch of action which then returns a new state
- All listeners subscribed to store gets called after reducer function completes

## Principle of Redux:
- Whole state of application is represented as single JavaScript object
- State is read only. It can be changed only by dispatching an action
- Reducer is pure function and doesn't cause side effects

## Writing `counter` reducer with tests:
#### main.js
```js
const counter = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}

expect(counter(0, { type: 'INCREMENT' })).toEqual(1)

expect(counter(1, { type: 'INCREMENT' })).toEqual(2)

expect(counter(2, { type: 'DECREMENT' })).toEqual(1)

expect(counter(1, { type: 'DECREMENT' })).toEqual(0)

console.log('All tests passed');
``` 

## Redux store method: `getState`, `dispatch` and `subscribe`
#### main.js
```js
import { createStore } from 'redux'

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

const store = createStore(counter)
console.log(store.getState())

store.dispatch({type: 'INCREMENT'})
console.log(store.getState())

store.subscribe(() => {
    render()
})

const render = () => {
    document.body.innerHTML = store.getState()
}

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

render()
```

## Implementing Redux `createStore` from scratch
#### main.js
```js
const createStore = (reducer) => {
    let state;
    let listeners = []

    const getState = () => state

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listerners = listerners.filter(l => l != listener)
        }
    }

    dispatch({})

    return { getState, dispatch, subscribe }
}
```

## Implementing Counter as a React component
#### main.js
```js
const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />,
		document.getElementById('app')
	)
}
```

## Avoid array mutation using `concat`, `slice` and `...`(spread)
#### main.js
```js
const addCounter = (list) => {
    return [...list, 0]
}

const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ]
}

const incrementCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ]
}

const testAddCounter = () => {
    const listBefore = []
    const listAfter = [0]

    deepFreeze(listBefore)

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter)
}

const testRemoveCounter = () => {
    const listBefore = [0, 10, 20]
    const listAfter = [0, 20]

    deepFreeze(listBefore)

    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter)
}

const testIncrementCounter = () => {
    const listBefore = [0, 10, 20]
    const listAfter = [0, 11, 20]

    deepFreeze(listBefore)

    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter)
}

testAddCounter()
testRemoveCounter()
testIncrementCounter()

console.log('All tests passed')
```

## Avoid object mutation using `Object.assign` or object `...`(spread):
#### main.js
```js
const toggleTodo = (todo) => {
    return Object.assign({}, todo, { completed: !todo.completed })
    //return { ...todo, completed: !todo.completed }
}

const testToggleTodo = () => {
    const todoBefore = {
        id: '1',
        text: 'Learn Redux',
        completed: false
    }
    const todoAfter = {
        id: '1',
        text: 'Learn Redux',
        completed: true
    }

    deepFreeze(todoBefore)

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter)
}

testToggleTodo()
console.log('All tests passed')
``` 

## Implement Todos reducer with a test:
#### main.js
```js
const todos = (state = [], action) => {
    switch(action.type)  {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state;
    }
}

const testTodos = () => {
    const todosBefore = []
    const action = {
        type: 'ADD_TODO',
        id: '1',
        text: 'Learn Redux'
    }
    const todosAfter = [{
        id: '1',
        text: 'Learn Redux',
        completed: false
    }]
    
    deepFreeze(todosBefore)
    deepFreeze(action)

    expect(
        todos(todosBefore,action)
    ).toEqual(todosAfter)
}

testTodos()
console.log('All tests passed')
```

## Implement ToggleTodo action with a test
#### main.js
```js
const todos = (state = [], action) => {
    switch(action.type)  {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if(todo.id != action.id) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        default:
            return state
    }
}

const testToggleTodo = () => {
	const todosBefore = [
		{
			id: '1',
			text: 'Learn React',
			completed: false
		},
		{
			id: '2',
			text: 'Learn Redux',
			completed: false
		}
	]
	const action = {
		type: 'TOGGLE_TODO',
		id: '1'
	}
	const todosAfter = [
		{
			id: '1',
			text: 'Learn React',
			completed: true
		},
		{
			id: '2',
			text: 'Learn Redux',
			completed: false
		}
	]

	deepFreeze(todosBefore)
	deepFreeze(action)

	expect(
		todos(todosBefore, action)
	).toEqual(todosAfter)
}

testToggleTodo()
console.log('All tests passed')
```

## Reducer composition with arrays:
- Split a reducer when it handles multiple concerns
- `todos` reducer is currently handling both `todos` array as well as individual `todo`
- Individual todo related logic can be splitted into a new reducer named `todo`
- Splitting and combining reducers is called Reducer Composition. 

#### main.js
```js
const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if(state.id != action.id) {
                return state
            }
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch(action.type)  {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action))
        default:
            return state
    }
}
```

## Reducer composition with objects
- Entire application state should be an object instead of an array
- An object can hold more than an array and scales well in app of any size
- Combine existing reducers in a new reducer to create subset of state tree
- Existing reducers can remain as is

#### main.js
```js
const visibilityFilter = (
    state = 'SHOW_ALL',
    action
) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

const todoApp = (state = {}, action) => {
    return {
        todos: todos(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilter(
            state.visibilityFilter,
            action
        )
    }
}

const store = createStore(todoApp)
console.log(store.getState())

store.dispatch({type: 'ADD_TODO', id: '1', text: 'Learn React'})
console.log(store.getState())

store.dispatch({type: 'ADD_TODO', id: '2', text: 'Learn Redux'})
console.log(store.getState())

store.dispatch({type: 'TOGGLE_TODO', id: '1'})
console.log(store.getState())

store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'COMPLETED'})
console.log(store.getState())
```

> NOTE: Where is default state and action coming from?

## Reducer composition using `combineReducer` from Redux library
#### main.js
```js
...
import { createStore, combineReducers } from 'redux'
...

const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
})

//Using ES6 shortcut object notation
const todoApp = combineReducers({
    todos,
    visibilityFilter
})
```

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
