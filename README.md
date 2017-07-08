# React Training

## Pre-Requisites:
- HTML
- CSS
- JavaScript

## What is React?
- A JavaScript library for building user interface
- HTML is written in JavaScript without using HTML ;-)
- Declarative (says `What` to do instead of `How` to do)
- Functional (Entire app is written in form of composible functions)
- Component based (instead of following MVC pattern)
- Virtual DOM (in memory replica of actual DOM)

## What it's not?
- Not a framework (Batteries not included)
- Doesn't cover anything other than view, not even model or routing
- Controller ??? (Component controls itself)
- It outsources client side routing to npm package `react-router`
- It outsources model/state management to npm packages like `react-redux`, `flux`, etc.

## MVC in View is not appropriate
- MVC works well in overall client server model wherein View is the client/frontend
- MVC pattern was first introduced in frontend by Backbone (MVC in View)
- Component pattern introduced by [Web Components](https://en.wikipedia.org/wiki/Web_Components) is more suitable in frontend due to its characteristics like composibility, resuability, custom elements, shadow DOM, etc.
- Sharing of Model across multiple Controllers/Views is evil
- Some behavior/update can be difficult to debug/reason about
- Components address these issues very well

## How React works?
- Views are written in form of JavaScript functions
- User interface and user interaction are written declaratively in form of components
- App then becomes a tree of components and sub components
- Data is passed in form of `props` from top of the tree, parent component to child component
- Component can store internal data in form of `state` for its current state
- Data flows only in one direction from top to bottom
- Re-render only what has changed with help of shallow comparison of virtual DOM
- Entire DOM interaction is handled by React

## React brings discipline and best practices for DOM interactions
- React sits between application code and DOM
- All UI interactions go via React in super efficient way (async, batched)
- ReactDOM can be replaced with React Native/VR to target multi platforms
- Prioritized, Incremental Rendering with [React Fiber](https://github.com/acdlite/react-fiber-architecture) is a game changer in UI/UX

## Why React? Why is it Awesome?
- Radically different way of writing view/client side App
- Makes views lot more powerful, interesting and irresistable to 'React' to ;-)
- Everything packed into logical components is easy to reason about and debug
- Learn once, write anywhere (React Native for native apps)
- Learn once, forget everything else ;-)
- Super Fast and Fun
- Cut the Crap; Go for Gold

## Look Ma, who all are using React:
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
```

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
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
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
> We need to import React even if it is functional component

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

> NOTE: createStore internally calls dispatch with an empty action object to initialize the state with defaults set in reducer

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

## Reducer composition using `combineReducers` from Redux library
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

## Implementing `combineReducers` from scratch
#### main.js
```js
const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key],
                    action
                )
                return nextState
            },
            {}
        )
    }
}
```

> Note: A dipatched action goes through all reducers that are combined into one reducer.

## TodoApp with `ADD_TODO` action `dispatch`ed to Redux `store`
#### main.js
```js
let todoId = 0;

class TodoApp extends Component {
    render() {
        return (
            <div>
                <input ref={node => { this.input = node }}/>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: todoId++
                    })
                    this.input.value = ''
                }}>Add Tasks</button>
                <ul>
                    {this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const render = () => {
    ReactDOM.render(
        <TodoApp todos={store.getState().todos} />,
        document.getElementById('app')
    )
}

store.subscribe(render)
render()
```

## `TOGGLE_TODO` action `dispatch`ing `onClick` of todo and its styling
#### main.js
```js
class TodoApp extends Component {
    render() {
        return (
            <div>
                <input ref={node => { this.input = node }}/>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: todoId++
                    })
                    this.input.value = ''
                }}>Add Tasks</button>
                <ul>
                    {this.props.todos.map(todo => (
                        <li key={todo.id}
                            onClick={() => {
                                store.dispatch({
                                    type: 'TOGGLE_TODO',
                                    id: todo.id
                                })
                            }}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}>
                            {todo.text}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
```

## Filtering Todos by `dispatch`ing `SET_VISIBILITY_FILTER` action
#### main.js
```js
const FilterLink = ({children, filter, currentFilter}) => {
    if(filter === currentFilter) {
        return <span>{children}</span>
    }
    return (
        <a href="#" onClick={(e) => {
            e.preventDefault()
            store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            })
        }} >
            {children}
        </a>
    )
}

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed)
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
    }
}

let todoId = 0;

class TodoApp extends Component {
    render() {
        let {todos, visibilityFilter} = this.props;
        const visibleTodos = getVisibleTodos(todos, visibilityFilter)

        return (
            <div>
                <input ref={node => { this.input = node }}/>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: todoId++
                    })
                    this.input.value = ''
                }}>Add Tasks</button>
                <ul>
                    {visibleTodos.map(todo => (
                        <li key={todo.id}
                            onClick={() => {
                                store.dispatch({
                                    type: 'TOGGLE_TODO',
                                    id: todo.id
                                })
                            }}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}>
                            {todo.text}
                        </li>
                    ))}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter="SHOW_ALL"
                        currentFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter="SHOW_ACTIVE"
                        currentFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter="SHOW_COMPLETED"
                        currentFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        )
    }
}
```
> NOTE: How {} is used to de-structure/extract individual properties from `props` input of `FilterLink`

# Extracting Presentational Components:

## Extracting `Todo` and `TodoList` as presentational components from `TodoApp`
#### main.js
```js
const Todo = ({onClick, completed, text}) => (
    <li onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
        {text}
    </li>
)

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)

let todoId = 0;

class TodoApp extends Component {
    render() {
        let {todos, visibilityFilter} = this.props;
        const visibleTodos = getVisibleTodos(todos, visibilityFilter)

        return (
            <div>
                <input ref={node => { this.input = node }}/>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: todoId++
                    })
                    this.input.value = ''
                }}>Add Tasks</button>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id => store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })}
                />
...
```
## Presentational Component vs Container Component
### Presentational Component
- Takes data as input
- Takes methods as input
- Renders it to view
- Don't own data

### Container Component
- Owns data
- Owns change in data/state
- Passes data/methods to children components
- Manages data/state by dispatching actions

[Dan Abramov's Blog](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.j8hahvdyg)

## Extracting `AddTodo` and `Footer` as presentational components
#### main.js
```js
const AddTodo = ({onAddClick}) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }}/>
            <button onClick={() => {
                onAddClick(input.value)
                input.value = ''
            }}>Add Tasks</button>
        </div>
    )
}

const FilterLink = ({children, filter, currentFilter, onClick}) => {
    if(filter === currentFilter) {
        return <span>{children}</span>
    }
    return (
        <a href="#" onClick={(e) => {
            e.preventDefault()
            onClick(filter)
        }} >
            {children}
        </a>
    )
}

const Footer = ({visibilityFilter, onFilterClick}) => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter="SHOW_ALL"
            currentFilter={visibilityFilter}
            onClick={onFilterClick}
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_ACTIVE"
            currentFilter={visibilityFilter}
            onClick={onFilterClick}
        >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_COMPLETED"
            currentFilter={visibilityFilter}
            onClick={onFilterClick}
        >
            Completed
        </FilterLink>
    </p>
)

let todoId = 0;

class TodoApp extends Component {
    render() {
        let {todos, visibilityFilter} = this.props;
        const visibleTodos = getVisibleTodos(todos, visibilityFilter)

        return (
            <div>
                <AddTodo onAddClick={(text) => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: todoId++,
                        text
                    })
                }} />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id => store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })}
                />
                <Footer
                    visibilityFilter={visibilityFilter}
                    onFilterClick={(filter) => {
                        store.dispatch({
                            type: 'SET_VISIBILITY_FILTER',
                            filter
                        })
                    }}
                />
            </div>
        )
    }
}
```

## Refactoring `TodoApp` to a functional component
#### main.js
```js
const TodoApp = ({todos, visibilityFilter}) => (
    <div>
        <AddTodo onAddClick={(text) => {
            store.dispatch({
                type: 'ADD_TODO',
                id: todoId++,
                text
            })
        }} />
        <TodoList
            todos={getVisibleTodos(todos, visibilityFilter)}
            onTodoClick={id => store.dispatch({
                type: 'TOGGLE_TODO',
                id
            })}
        />
        <Footer
            visibilityFilter={visibilityFilter}
            onFilterClick={(filter) => {
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                })
            }}
        />
    </div>
)
```

# Extracting Container Components:

## `Footer`(Presentation) = `FooterLink`(Container) + `Link`(Presentation)
- `Footer` component is accepting props (`visibilityFilter` and `onFilterClick`) but not using them.
- It simply passes them to `FooterLink` presentational component.
- `Footer` can become a presentational component by making `FooterLink` as container component

#### main.js
```js
//Presentational Component
const Link = ({active, children, onClick}) => {
    if(active) {
        return <span>{children}</span>
    }
    return (
        <a href="#" onClick={(e) => {
            e.preventDefault()
            onClick()
        }} >
            {children}
        </a>
    )
}

//Container Component
class FilterLink extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const props = this.props
        const state = store.getState()

        return (
            <Link
                active={props.filter === state.visibilityFilter}
                onClick={() => store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                })}
            >
                {props.children}
            </Link>
        )
    }
}

//Presentational Component
const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter="SHOW_ALL"
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_ACTIVE"
         >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_COMPLETED"
         >
            Completed
        </FilterLink>
    </p>
)

let todoId = 0;

const TodoApp = ({todos, visibilityFilter}) => (
    <div>
        <AddTodo onAddClick={(text) => {
            store.dispatch({
                type: 'ADD_TODO',
                id: todoId++,
                text
            })
        }} />
        <TodoList
            todos={getVisibleTodos(todos, visibilityFilter)}
            onTodoClick={id => store.dispatch({
                type: 'TOGGLE_TODO',
                id
            })}
        />
        <Footer />
    </div>
)
```

## Extracting `AddTodo` and `VisibleTodoList` as container components
#### main.js
```js
const AddTodo = () => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }}/>
            <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    id: todoId++,
                    text: input.value
                })
                input.value = ''
            }}>Add Tasks</button>
        </div>
    )
}

class VisibleTodoList extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const props = this.props
        const state = store.getState()

        return (
            <TodoList
                todos={getVisibleTodos(state.todos, state.visibilityFilter)}
                onTodoClick={id => store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })}
            />
        )
    }
}

const TodoApp = ({todos, visibilityFilter}) => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)
```

## Refactor `TodoApp` and remove subscription to render on state change:
#### main.js
```js
const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
)
```

## Avoiding `store` in global scope by passing it explicitly via `props`
#### main.js
```js
//const store = createStore(todoApp)

const AddTodo = ({store}) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }}/>
            <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    id: todoId++,
                    text: input.value
                })
                input.value = ''
            }}>Add Tasks</button>
        </div>
    )
}

const Link = ({active, children, onClick}) => {
    if(active) {
        return <span>{children}</span>
    }
    return (
        <a href="#" onClick={(e) => {
            e.preventDefault()
            onClick()
        }} >
            {children}
        </a>
    )
}

class FilterLink extends Component {
    componentDidMount() {
        const {store} = this.props
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const props = this.props
        const {store} = this.props
        const state = store.getState()

        return (
            <Link
                active={props.filter === state.visibilityFilter}
                onClick={() => store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                })}
            >
                {props.children}
            </Link>
        )
    }
}

const Footer = ({store}) => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter="SHOW_ALL"
            store={store}
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_ACTIVE"
            store={store}
         >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_COMPLETED"
            store={store}
         >
            Completed
        </FilterLink>
    </p>
)

class VisibleTodoList extends Component {
    componentDidMount() {
        const {store} = this.props
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const props = this.props
        const {store} = this.props
        const state = store.getState()

        return (
            <TodoList
                todos={getVisibleTodos(state.todos, state.visibilityFilter)}
                onTodoClick={id => store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })}
            />
        )
    }
}

let todoId = 0;
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

const TodoApp = ({store}) => (
    <div>
        <AddTodo store={store} />
        <VisibleTodoList store={store} />
        <Footer store={store} />
    </div>
)
```

## Passing `store` implicitly with help of `Provider` component and `context`
#### main.js
```js
const AddTodo = (props, {store}) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }}/>
            <button onClick={() => {
                store.dispatch({
                    type: 'ADD_TODO',
                    id: todoId++,
                    text: input.value
                })
                input.value = ''
            }}>Add Tasks</button>
        </div>
    )
}
AddTodo.contextTypes = {
    store: React.PropTypes.object
}

const Link = ({active, children, onClick}) => {
    if(active) {
        return <span>{children}</span>
    }
    return (
        <a href="#" onClick={(e) => {
            e.preventDefault()
            onClick()
        }} >
            {children}
        </a>
    )
}

class FilterLink extends Component {
    componentDidMount() {
        const {store} = this.context
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const props = this.props
        const {store} = this.context
        const state = store.getState()

        return (
            <Link
                active={props.filter === state.visibilityFilter}
                onClick={() => store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                })}
            >
                {props.children}
            </Link>
        )
    }
}
FilterLink.contextTypes = {
    store: React.PropTypes.object
}

const Footer = (props, {store}) => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter="SHOW_ALL"
            store={store}
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_ACTIVE"
            store={store}
         >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter="SHOW_COMPLETED"
            store={store}
         >
            Completed
        </FilterLink>
    </p>
)
Footer.contextTypes = {
    store: React.PropTypes.object
}

class VisibleTodoList extends Component {
    componentDidMount() {
        const {store} = this.context
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    render() {
        const props = this.props
        const {store} = this.context
        const state = store.getState()

        return (
            <TodoList
                todos={getVisibleTodos(state.todos, state.visibilityFilter)}
                onTodoClick={id => store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })}
            />
        )
    }
}
VisibleTodoList.contextTypes = {
    store: React.PropTypes.object
}

let todoId = 0;
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

class Provider extends Component {
    getChildContext() {
        return {
            store: this.props.store
        }
    }
    render() {
        return this.props.children
    }
}
Provider.childContextTypes = {
    store: React.PropTypes.object
}

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
)
```

## Using `Provider` from `react-redux` npm package
```
npm install react-redux --save
```

# Generating container component using `connect` method from `react-redux` package
 All container components follow below pattern:
- Getting access to Redux's `store` from `context`
- `subscribe` to `store` to `forceUpdate` (render) its component tree whenever store is updated
- Map Redux's `state` to props of child/presentational components that they render
- Map Redux's `dispatch` to props of child/presentational component's callback methods

> A container components connects a presentational component to Redux's store by mapping `state` and `dispatch` to its `props`

## Generating `VisibleTodoList` by `connect`ing Redux's `store` and `dispatch` to `TodoList` presentational component
#### main.js
```js
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) =>
            dispatch({
                type: 'TOGGLE_TODO',
                id
            })
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
```

## Generating `AddTodo` component using `connect` method
- AddTodo component can't be classified as container or presentational component
- It doesn't take any props from Redux store
- It just needs Redux's `dispatch` method to dispatch `ADD_TODO` action

#### main.js
```js
let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }}/>
            <button onClick={() => {
                dispatch({
                    type: 'ADD_TODO',
                    id: todoId++,
                    text: input.value
                })
                input.value = ''
            }}>Add Tasks</button>
        </div>
    )
}
AddTodo = connect(
    state => {
        return {}
    },
    dispatch => {
        return { dispatch }
    }
)(AddTodo)
```

## 	`connect` with null arguments or no arguments gives `dispatch` as default `props`
#### main.js
```js
AddTodo = connect(
    null,
    null
)(AddTodo)

//or
AddTodo = connect()(AddTodo)
```

## Generating `FilterLink` using `connect` method
#### main.js
```js
const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}
const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter
            })
        }
    }
}
const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link)
```

## Extracting action creators
#### main.js
```js
const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: todoId++,
    text
})

const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }}/>
            <button onClick={() => {
                dispatch(addTodo(input.value))
                input.value = ''
            }}>Add Tasks</button>
        </div>
    )
}
AddTodo = connect()(AddTodo)


const mapStateToTodoListProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id) =>
            dispatch(toggleTodo(id))
    }
}
const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList)


const mapStateToLinkProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}
const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}
const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link)
```

## Simplifying arrow functions
#### main.js
```js
const mapStateToLinkProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToLinkProps = (dispatch, ownProps) => ({
    onClick() {
        dispatch(setVisibilityFilter(ownProps.filter))
     }
})

const mapStateToTodoListProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
const mapDispatchToTodoListProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id))
     }
})
```

## Supplying initial state to Redux `store`; Hydrating persisted state
#### main.js
```js
const persistedState = {
    todos: [
        {
            id: 0,
            text: 'Persisted task!',
            completed: false
        }
    ]
}

const store = createStore(todoApp, persistedState)

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
)
```

# Structuring the App with reducers, actions and components folders:

```
src
 |--actions
 |    |--index.js
 |--components
 |    |--AddTodo.js
 |    |--App.js
 |    |--FilterLink.js
 |    |--Footer.js
 |    |--Link.js
 |    |--Todo.js
 |    |--TodoList.js
 |    |--VisibleTodoList.js
 |--reducers
 |    |--index.js
 |    |--todos.js
 |    |--visibilityFilter.js
 |--index.js //Entry file
```

## Reducers first

## Components

## Actions


## Persisting state to localStorage and using `node-uuid` for `todo`'s `id`
#### ./index.js
```js
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persistedState = loadState()
const store = createStore(todoApp, persistedState)
store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    })
}, 2000))
```

#### ./localStorage.js
```js
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (err) {
        console.error(err)
    }
}
```

#### ./actions/index.js
```js
import { v4 } from 'node-uuid'

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text
})
```

## Refactoring entry point `index.js`
#### ./index.js
```js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore()

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('app')
)
```

#### ./configureStore.js
```js
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'
import { createStore } from 'redux'
import todoApp from './reducers'

const configureStore = () => {
    const persistedState = loadState()
    const store = createStore(todoApp, persistedState)
    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        })
    }, 2000))

    return store
}

export default configureStore
```

#### ./components/Root.js
```js
import React from 'react'
import { Provider } from 'react-redux'
import TodoApp from './App'

const Root = ({store}) => (
    <Provider store={store}>
        <TodoApp />
    </Provider>
)

export default Root
```

## Adding `react-router` in `Root` component:
#### ./components/Root.js
```js
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import TodoApp from './App'

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={TodoApp} />
        </Router>
    </Provider>
)

export default Root
```

## Navigating with `react-router`'s `Link`
#### Adding option filter `params` in ./components/Root.js
```js
const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/(:filter)' component={TodoApp} />
        </Router>
    </Provider>
)
```

#### Rewriting FilterLink component using Link from react-router
```js
import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({filter, children}) => {
    return (
        <Link to={filter === 'all' ? '' : filter}
            activeStyle={{
                textDecoration: 'none',
                color: 'black'
            }}>
            {children}
        </Link>
    )
}

export default FilterLink
```

#### Serve index.html independent of the url by adding below in webpack.config.js
```js
devServer: {
    inline: true,
    port: 3333,
    historyApiFallback: {
        index: 'index.html'
    }
}
```

#### Remove setVisibilityFilter action creator and Link component

## Filtering Redux's state using `react-router`'s `params`
#### Adding `params` as input to TodoApp component and passing `params.filter` to VisibleTodoList
```js
const TodoApp = ({params}) => (
    <div>
        <AddTodo />
        <VisibleTodoList filter={params.filter || 'all'}/>
        <Footer />
    </div>
)
```

#### Reflecting `filter` as input in VisibleTodoList component
```js
const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'all':
            return todos
        case 'active':
            return todos.filter(todo => !todo.completed)
        case 'completed':
            return todos.filter(todo => todo.completed)
    }
}

const mapStateToProps = (state, props) => ({
    todos: getVisibleTodos(state.todos, props.filter)
})
```

#### Reflecting `filter` values in Footer component
```js
const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter="all"
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter="active"
         >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter="completed"
         >
            Completed
        </FilterLink>
    </p>
)
```

#### Removing visibilityFilter reducer from ./reducers/index.js
```js
const todoApp = combineReducers({
    todos,
})
```

## Injecting `params` using `withRouter` from `react-router` instead of passing it from top

> Ensure we have `react-router` 3.x or above

#### Remove `params` from TodoApp
```js
const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)
```

#### Use `withRouter` to inject `params` into VisibleTodoList component
```js
import { withRouter } from 'react-router'

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, ownProps.params.filter || 'all')
})

//or

const mapStateToProps = (state, { params }) => ({
    todos: getVisibleTodos(state.todos, params.filter || 'all')
})

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList))
```

## Using `mapDispatchToProps` shorthand notation
#### VisibleTodoList.js
```js
const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList))
```

## Collocating selectors with reducers
#### Move getVisibleTodos from VisibleTodoList component to todos reducer
```js
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

export default todos

export const getVisibleTodos = (state, filter) => {
    switch(filter) {
        case 'all':
            return state
        case 'active':
            return state.filter(todo => !todo.completed)
        case 'completed':
            return state.filter(todo => todo.completed)
    }
}
```

#### Define `getVisibleTodos` selector in root reducer and call getVisibleTodos from `todos` reducer passing only `state.todos` to it
```js
import { combineReducers } from 'redux'
import todos, * as fromTodos from './todos'

const todoApp = combineReducers({
    todos,
})

export default todoApp

export const getVisibleTodos = (state, filter) =>
    fromTodos.getVisibleTodos(state.todos, filter)
```

#### Call selector from root reducer in VisibleTodoList passing entire `state` to it
```js
import { getVisibleTodos } from '../reducers'

const mapStateToProps = (state, {params}) => ({
    todos: getVisibleTodos(state, params.filter || 'all')
})
```

## Normalizing `todos` state shape from an array to an object to use it as a hashmap
#### todos reducer
```js
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_TODO':
        case 'TOGGLE_TODO':
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            }
        default:
            return state
    }
}

const allIds = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.id]
        default:
            return state
    }
}

const todos = combineReducers({
    byId,
    allIds,
})

export default todos

const getAllTodos = (state) =>
    state.allIds.map(id => state.byId[id])

export const getVisibleTodos = (state, filter) => {
    const allTodos = getAllTodos(state)

    switch(filter) {
        case 'all':
            return allTodos
        case 'active':
            return allTodos.filter(todo => !todo.completed)
        case 'completed':
            return allTodos.filter(todo => todo.completed)
    }
}
```

## Wrapping `dispatch` to log actions
#### configureStore.js
```js
...
const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch
    if(!console.group) {
        return rawDispatch
    }

    return (action) => {
        console.group(action.type)
        console.log('%c prev state', 'color: gray', store.getState())
        console.log('%c action', 'color: blue', action.type)
        const returnValue = rawDispatch(action)
        console.log('%c next state', 'color: green', store.getState())
        console.groupEnd(action.type)
        return returnValue
    }
}

const configureStore = () => {
    const persistedState = loadState()
    const store = createStore(todoApp)

    if(process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store)
    }
    ...
```

## Adding Fake Backend
#### ./api/index.js
```js
import { v4 } from 'node-uuid'

const fakeDatabase = {
    todos: [{
        id: v4(),
        text: 'Learn React',
        completed: true
    }, {
        id: v4(),
        text: 'Learn React Router',
        completed: true
    }, {
        id: v4(),
        text: 'Learn Redux',
        completed: false
    }]
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = (filter) =>
    delay(500).then(() => {
        switch(filter) {
            case 'all':
                return fakeDatabase.todos
            case 'active':
                return fakeDatabase.todos.filter(todo => !todo.completed)
            case 'completed':
                return fakeDatabase.todos.filter(todo => todo.completed)
            default:
            throw new Error(`Unknown filter: ${filter}`)
        }
    })
```

#### index.js
```js
...
import Root from './components/Root'
import { fetchTodos } from './api'

fetchTodos('all').then(todos => console.log(todos))
...
```

# Promise

## Fetching data on route change:
#### ./components/VisibleTodoList.js
```js
...
import { getVisibleTodos } from '../reducers'
import { fetchTodos } from '../api'

class VisibleTodoList extends Component {
    componentDidMount() {
        fetchTodos(this.props.filter).then(todos => console.log(todos))
    }

    componentDidUpdate(prevProps) {
        if(this.props.filter !== prevProps.filter) {
            fetchTodos(this.props.filter).then(todos => console.log(todos))
        }
    }

    render() {
        return (
            <TodoList {...this.props} />
        )
    }
}


const mapStateToProps = (state, {params}) => {
    const filter = params.filter || 'all'
    return {
        todos: getVisibleTodos(state, filter),
        filter
    }
}

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(VisibleTodoList))

export default VisibleTodoList
```

## Dispatching `action` on fetching data
#### ./actions/index.js
```js
...
export const receiveTodos = (filter, response) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response
})
```

#### ./components/VisibleTodoList.js
```js
...
import TodoList from './TodoList'
import * as actions from '../actions'
import { getVisibleTodos } from '../reducers'
import { fetchTodos } from '../api'

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if(this.props.filter !== prevProps.filter) {
            this.fetchData()
        }
    }

    fetchData() {
        const { filter, receiveTodos } = this.props
        fetchTodos(filter).then(todos => {
            receiveTodos(filter, todos)
        })
    }

    render() {
        const { toggleTodo, ...rest } = this.props
        return (
            <TodoList {...rest} onTodoClick={toggleTodo} />
        )
    }
}

const mapStateToProps = (state, {params}) => {
    const filter = params.filter || 'all'
    return {
        todos: getVisibleTodos(state, filter),
        filter
    }
}

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList))

export default VisibleTodoList
```

## Wrapping `dispatch` to handle `Promise` and support async action
#### ./components/VisibleTodoList.js
```js
...
fetchData() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
}
...
```

#### ./actions/index.js
```js
...
import * as api from '../api'

const receiveTodos = (filter, response) => ({
    type: 'RECEIVE_TODOS',
    filter,
    response
})

export const fetchTodos = (filter) =>
api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
)
...
```

#### configureStore.js
```js
...
const addPromiseSupportToDispatch = (store) => {
    const rawDispatch = store.dispatch
    return (action) => {
        if(typeof action.then === 'function') {
            return action.then(rawDispatch)
        } else {
            rawDispatch(action)
        }
    }
}

const configureStore = () => {
    const persistedState = loadState()
    const store = createStore(todoApp)

    if(process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store)
    }

    store.dispatch = addPromiseSupportToDispatch(store)
...
```

## Wrap `dispatch` with chain of middlewares
#### ./configureStore.js
```js
...
const logger = (store) => (next) => {
    if(!console.group) {
        return next
    }

    return (action) => {
        console.group(action.type)
        console.log('%c prev state', 'color: gray', store.getState())
        console.log('%c action', 'color: blue', action)
        const returnValue = next(action)
        console.log('%c next state', 'color: green', store.getState())
        console.groupEnd(action.type)
        return returnValue
    }
}

const promise = (store) => (next) => (action) => {
    if(typeof action.then === 'function') {
        return action.then(next)
    } else {
        next(action)
    }
}

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware => {
        store.dispatch = middleware(store)(store.dispatch)
    })
}

const configureStore = () => {
    const persistedState = loadState()
    const store = createStore(todoApp)
    const middlewares = [promise]

    if(process.env.NODE_ENV !== 'production') {
        middlewares.push(logger)
    }

    wrapDispatchWithMiddlewares(store, middlewares)
...
```

## Applying redux middlewares:

```
npm i --save redux-promise
npm i --save redux-logger
```

#### ./configureStore.js
```js
...
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import todoApp from './reducers'

const configureStore = () => {
    const persistedState = loadState()
    const middlewares = [promise]

    if(process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger())
    }

    const store = createStore(
        todoApp,
        applyMiddleware(...middlewares)
    )
...
```

## Updating `state` with fetched data
#### ./reducers/todos.js
```js
import { combineReducers } from 'redux'

const byId = (state = {}, action) => {
    switch(action.type) {
        case 'RECEIVE_TODOS':
            const nextState = { ...state }
            action.response.forEach(todo => {
                nextState[todo.id] = todo
            })
            return nextState
        default:
            return state
    }
}

const allIds = (state = [], action) => {
    if(action.filter !== 'all') {
        return state
    }
    switch(action.type) {
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id)
        default:
            return state
    }
}

const activeIds = (state = [], action) => {
    if(action.filter !== 'active') {
        return state
    }
    switch(action.type) {
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id)
        default:
            return state
    }
}

const completedIds = (state = [], action) => {
    if(action.filter !== 'completed') {
        return state
    }
    switch(action.type) {
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id)
        default:
            return state
    }
}

const allIdsByFilter = combineReducers({
    all: allIds,
    active: activeIds,
    completed: completedIds
})

const todos = combineReducers({
    byId,
    allIdsByFilter,
})

export default todos

export const getVisibleTodos = (state, filter) => {
    const ids = state.allIdsByFilter[filter]
    return ids.map(id => state.byId[id])
}
```

## Refactoring the reducers
- Delete ./reducers/index.js
- Rename ./reducers/todos.js to index.js

#### create ./reducers/byId.js
```js
const byId = (state = {}, action) => {
    switch(action.type) {
        case 'RECEIVE_TODOS':
            const nextState = { ...state }
            action.response.forEach(todo => {
                nextState[todo.id] = todo
            })
            return nextState
        default:
            return state
    }
}

export default byId

export const getTodo = (state, id) => state[id]
```

#### create ./reducers/createList.js
```js
const createList = (filter) => {
    return (state = [], action) => {
        if(action.filter !== filter) {
        return state
        }
        switch(action.type) {
            case 'RECEIVE_TODOS':
                return action.response.map(todo => todo.id)
            default:
                return state
        }
    }
}

export default createList;

export const getIds = (state) => state
```

#### ./reducers/index.js
```js
import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

const listByFilter = combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed')
})

const todos = combineReducers({
    byId,
    listByFilter,
})

export default todos

export const getVisibleTodos = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter])
    return ids.map(id => fromById.getTodo(state.byId, id))
}
```

## Adding `isFetching` to `createList`'s `state`
#### ./actions/index.js
```js
...
export const requestTodos = (filter) => ({
    type: 'REQUEST_TODOS',
    filter,
})
```

#### ./components/VisibleTodoList.js
```js
...
import { getVisibleTodos, getIsFetching } from '../reducers'
...

    fetchData() {
        const { filter, fetchTodos, requestTodos } = this.props
        requestTodos(filter)
        fetchTodos(filter)
    }

    render() {
        const { toggleTodo, todos, isFetching } = this.props
        if(isFetching && !todos.length) {
            return <span>Loading...</span>
        }

        return (
            <TodoList todos={todos} onTodoClick={toggleTodo} />
        )
    }
}

const mapStateToProps = (state, {params}) => {
    const filter = params.filter || 'all'
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        filter
    }
}
...
```

#### ./reducers/createList.js
```js
import { combineReducers } from 'redux'

const createList = (filter) => {
    const ids = (state = [], action) => {
        if(action.filter !== filter) {
        return state
        }
        switch(action.type) {
            case 'RECEIVE_TODOS':
                return action.response.map(todo => todo.id)
            default:
                return state
        }
    }

    const isFetching = (state = false, action) => {
        if(action.filter !== filter) {
            return state
        }
        switch(action.type) {
            case 'REQUEST_TODOS':
                return true
            case 'RECEIVE_TODOS':
                return false
            default:
                return state
        }
    }

    return combineReducers({
        ids,
        isFetching,
    })
}

export default createList;

export const getIds = (state) => state.ids

export const getIsFetching = (state) => state.isFetching
```

#### ./reducers/index.js
```js
...
export const getIsFetching = (state, filter) =>
    fromList.getIsFetching(state.listByFilter[filter])
```

# Dispatching multiple async actions with Thunks
- A promise can express only one async value.
- `fetchTodo` action creator returns a promise that resolves into `RECEIVE_TODO` action with response in it.
- To dispatch multiple async actions, `REQUEST_TODO` before fetching todos and then dispatch `RECEIVE_TODO` after fetching todos, fetchTodo needs `dispatch` method.
- Instead of returning a promise, we can return a function that takes `dispatch` as input.
- A function that takes other function as input is called **Thunk**
- Thunk can dispatch both plain action object or other thunk as the injected `dispatch` function is already wrapped with middlewares.
- Thunk middleware is a powerful composable way to express async action creators that need to emit several actions during an async operation.

#### ./components/VisibleTodoList.js
```js
...
fetchData() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
}
...
```

#### ./actions/index.js
```js
...
const requestTodos = (filter) => ({
    type: 'REQUEST_TODOS',
    filter,
})

...

export const fetchTodos = (filter) => (dispatch) => {
    dispatch(requestTodos(filter))
    api.fetchTodos(filter).then(response =>
        dispatch(receiveTodos(filter, response))
    )
}
...
```

#### ./configureStore.js
```js
...
const thunk = (store) => (next) => (action) =>
    typeof action === 'function' ?
        action(store.dispatch) :
        next(action)


const configureStore = () => {
    const persistedState = loadState()
    const middlewares = [thunk]
...
```

## Avoiding same action race conditions with thunk
#### Increase delay in fetching todos in ./api/index.js
```js
...
export const fetchTodos = (filter) =>
    delay(5000).then(() => {
...
```

#### ./actions/index.js
```js
...
import { getIsFetching } from '../reducers'

...

export const fetchTodos = (filter) => (dispatch, getState) => {
    if(getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch(requestTodos(filter))
    return api.fetchTodos(filter).then(response =>
        dispatch(receiveTodos(filter, response))
    )
}
...
```

#### ./configureStore.js
```js
...
const thunk = (store) => (next) => (action) =>
    typeof action === 'function' ?
        action(store.dispatch, store.getState) :
        next(action)
...
```

#### ./components/VisibleTodoList.js
```js
...
fetchData() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter).then(() => console.log(`${filter} todos fetched`))
}
...
```

## Using `thunk` from `redux-thunk` npm package
```
npm i --save redux-thunk
```

#### ./configureStore.js
```js
...
import thunk from 'redux-thunk'
...
```

## Displaying error message
#### Mimicking error in ./api/index.js
```js
...
export const fetchTodos = (filter) =>
    delay(3000).then(() => {
        if(Math.random() > 0.5) {
            throw new Error('Server not responding')
        }
...
```

#### Renaming actions and handling error in ./actions/index.js
```js
...
export const fetchTodos = (filter) => (dispatch, getState) => {
    if(getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter,
    })
    return api.fetchTodos(filter).then(
        response =>
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                filter,
                response
            })
        , error =>
            dispatch({
                type: 'FETCH_TODOS_ERROR',
                filter,
                message: error.message
            })
    )
}
...
```

#### Reflecting renamed action in ./reducers/byId.js reducer:
```js
const byId = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_TODOS_SUCCESS':
...
```

#### Reflecting renamed action and adding errorMessage reducer in ./reducers/createList.js
```js
...
const createList = (filter) => {
    const ids = (state = [], action) => {
        if(action.filter !== filter) {
        return state
        }
        switch(action.type) {
            case 'FETCH_TODOS_SUCCESS':
                return action.response.map(todo => todo.id)
            default:
                return state
        }
    }

    const isFetching = (state = false, action) => {
        if(action.filter !== filter) {
            return state
        }
        switch(action.type) {
            case 'FETCH_TODOS_REQUEST':
                return true
            case 'FETCH_TODOS_SUCCESS':
            case 'FETCH_TODOS_ERROR':
                return false
            default:
                return state
        }
    }

    const errorMessage = (state = null, action) => {
        if(action.filter !== filter) {
            return state
        }
        switch (action.type) {
            case 'FETCH_TODOS_ERROR':
                return action.message
            case 'FETCH_TODOS_SUCCESS':
            case 'FETCH_TODOS_REQUEST':
                return null
            default:
                return state
        }
    }

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    })
}

export default createList;
...
export const getErrorMessage = (state) => state.errorMessage
```

#### Adding getErrorMessage selector in ./reducers/index.js
```js
...
export const getErrorMessage = (state, filter) =>
    fromList.getErrorMessage(state.listByFilter[filter])
```

#### Adding a new `FetchError` component
```js
import React from 'react'

const FetchError = ({ message, onRetry }) => (
    <div>
        <p>Something went wrong. {message}</p>
        <button onClick={onRetry}>Retry</button>
    </div>
)

export default FetchError
```

#### Use `FetchError` in `VisibleTodoList` to display error
```js
...
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import FetchError from './FetchError'

class VisibleTodoList extends Component {
    ...

    render() {
        const { toggleTodo, todos, isFetching, errorMessage } = this.props
        if(isFetching && !todos.length) {
            return <span>Loading...</span>
        }
        if(errorMessage && !todos.length) {
            return (
                <FetchError
                        message={errorMessage}
                        onRetry={() => this.fetchData()}
                />
            )
        }

        return (
            <TodoList todos={todos} onTodoClick={toggleTodo} />
        )
    }
}

const mapStateToProps = (state, {params}) => {
    const filter = params.filter || 'all'
    return {
        todos: getVisibleTodos(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter
    }
}
```

## Creating data on `fakeDatabase`
#### ./api/index.js
```js
...
export const addTodo = (text) =>
    delay(500).then(() => {
        const todo = {
            id: v4(),
            text,
            completed: false
        }
        fakeDatabase.todos.push(todo)
        return todo
    })

export const toggleTodo = (id) =>
    delay(500).then(() => {
        const todo = fakeDatabase.todos.find(t => t.id === id)
        todo.completed = !todo.completed
        return todo
    })
```

#### ./actions/index.js
```js
...
export const addTodo = (text) => (dispatch) => {
    return api.addTodo(text).then(
        response =>
            dispatch({
                type: 'ADD_TODO_SUCCESS',
                response
            })
    )
}
...
```

#### ./reducers/byId.js
```js
const byId = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_TODOS_SUCCESS':
            const nextState = { ...state }
            action.response.forEach(todo => {
                nextState[todo.id] = todo
            })
            return nextState
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                [action.response.id]: action.response
            }
        default:
            return state
    }
}
...
```

#### ./reducers/createList.js
```js
...
const createList = (filter) => {
    const ids = (state = [], action) => {
        switch(action.type) {
            case 'FETCH_TODOS_SUCCESS':
                return filter === action.filter ?
                    action.response.map(todo => todo.id) :
                    state
            case 'ADD_TODO_SUCCESS':
                return filter !== 'completed' ?
                    [...state, action.response.id] :
                    state
            default:
                return state
        }
    }
...
```

## Normalizing api responses using normalizr npm package:
```
npm i --save normalizr
```

#### ./actions/schema.js
```js
import { schema, arrayOf } from 'normalizr'

export const todo = new schema.Entity('todos')
export const arrayOfTodos = new schema.Array(todo)
```

#### ./actions/index.js
```js
import { normalize } from 'normalizr'
import * as schema from './schema'
...

export const fetchTodos = (filter) => (dispatch, getState) => {
    if(getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter,
    })
    return api.fetchTodos(filter).then(
        response => {
            console.log(
                'normalize response',
                normalize(response, schema.arrayOfTodos)
            )
            dispatch({
                    type: 'FETCH_TODOS_SUCCESS',
                    filter,
                    response: normalize(response, schema.arrayOfTodos)
                })
            , error =>
                dispatch({
                    type: 'FETCH_TODOS_ERROR',
                    filter,
                    message: error.message
                })
        }
    )
}

export const addTodo = (text) => (dispatch) => {
    return api.addTodo(text).then(
        response => {
            console.log(
                'noramized response',
                normalize(response, schema.todo)
            )
            dispatch({
                type: 'ADD_TODO_SUCCESS',
                response: normalize(response, schema.todo)
            })
        }
    )
}
...
```

#### ./reducers/byId.js
```js
const byId = (state = {}, action) => {
    if(action.response) {
        return {
            ...state,
            ...action.response.entities.todos
        }
    }
    return state
}
...
```

#### ./reducers/createList.js
```js
...
const createList = (filter) => {
    const ids = (state = [], action) => {
        switch(action.type) {
            case 'FETCH_TODOS_SUCCESS':
                return filter === action.filter ?
                    action.response.result :
                    state
            case 'ADD_TODO_SUCCESS':
                return filter !== 'completed' ?
                    [...state, action.response.result] :
                    state
            default:
                return state
        }
    }
...
```

## Updating data on server
#### ./actions/index.js
```js
...
export const toggleTodo = (id) => (dispatch) =>
    api.toggleTodo(id).then(
        response => {
            dispatch(
                {
                    type: 'TOGGLE_TODO_SUCCESS',
                    response: normalize(response, schema.todo)
                }
            )
        }
    )
```

#### ./reducers/createList.js
```js
...
const createList = (filter) => {
    const handleToggle = (state, action) => {
        const { result: toggledId, entities } = action.response
        const { completed } = entities.todos[toggledId]
        const shouldRemove = (
            (completed && filter === 'active') ||
            (!completed && filter === 'completed')
        )
        return shouldRemove ?
            state.filter(id => id !== toggledId) :
            state
    }

    const ids = (state = [], action) => {
        switch(action.type) {
            case 'FETCH_TODOS_SUCCESS':
                return filter === action.filter ?
                    action.response.result :
                    state
            case 'ADD_TODO_SUCCESS':
                return filter !== 'completed' ?
                    [...state, action.response.result] :
                    state
            case 'TOGGLE_TODO_SUCCESS':
                return handleToggle(state, action)
            default:
                return state
        }
    }
...
```