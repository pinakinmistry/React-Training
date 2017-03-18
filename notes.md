# Patterns
0. A React Component:
```js
ReactComponent = function(props) {
    const state = {}
    return <View/>
}
```

1. Define reducer with initial state and actions that it has to handle:
```js
const reducer = (currentState = {}, action) => nextState
```

2. Split the reducers based on state/sub state that they manage for seperation of concerns:
```js
const subReducer1 = (subState1 = {}, action) => subState1
const subReducer2 = (subState2 = {}, action) => subState2
...
```

3. Combine reducers into one reducer:
```js
const combinedReducer = combineReducers({
    subState1: subReducer1,
    subState2: subReducer2,
    ...
})
```

4. Create store with combinedReducer as input:
```js
const store = createStore(combinedReducer)
```

5. Create Root component that takes store as input:
```js
const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/(:filter)' component={AppComponent} />
        </Router>
    </Provider>
)
```

6. AppComponent:
```js
const TodoApp = () => (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
)
```







getSelector(subState, field, ...fields) => subState[field]

store.dispatch(action) -> reducers()






