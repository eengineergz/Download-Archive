
---
id: api-reference
title: API Reference
---

# API Reference

The Redux API surface is tiny. Redux defines a set of contracts for you to implement (such as [reducers](../understanding/thinking-in-redux/Glossary.md#reducer)) and provides a few helper functions to tie these contracts together.

This section documents the complete Redux API. Keep in mind that Redux is only concerned with managing the state. In a real app, you'll also want to use UI bindings like [react-redux](https://github.com/gaearon/react-redux).

### Top-Level Exports

- [createStore(reducer, [preloadedState], [enhancer])](createStore.md)
- [combineReducers(reducers)](combineReducers.md)
- [applyMiddleware(...middlewares)](applyMiddleware.md)
- [bindActionCreators(actionCreators, dispatch)](bindActionCreators.md)
- [compose(...functions)](compose.md)

### Store API

- [Store](Store.md)
  - [getState()](Store.md#getState)
  - [dispatch(action)](Store.md#dispatchaction)
  - [subscribe(listener)](Store.md#subscribelistener)
  - [replaceReducer(nextReducer)](Store.md#replacereducernextreducer)

### Importing

Every function described above is a top-level export. You can import any of them like this:

#### ES6

```js
import { createStore } from 'redux'
```

#### ES5 (CommonJS)

```js
var createStore = require('redux').createStore
```

#### ES5 (UMD build)

```js
var createStore = Redux.createStore
```

---
id: store
title: Store
description: 'API > Store: the core Redux store methods'
---

# Store

A store holds the whole [state tree](../understanding/thinking-in-redux/Glossary.md#state) of your application.
The only way to change the state inside it is to dispatch an [action](../understanding/thinking-in-redux/Glossary.md#action) on it.

A store is not a class. It's just an object with a few methods on it.
To create it, pass your root [reducing function](../understanding/thinking-in-redux/Glossary.md#reducer) to [`createStore`](createStore.md).

> ##### A Note for Flux Users
>
> If you're coming from Flux, there is a single important difference you need to understand. Redux doesn't have a Dispatcher or support many stores. **Instead, there is just a single store with a single root [reducing function](../understanding/thinking-in-redux/Glossary.md#reducer).** As your app grows, instead of adding stores, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. You can use a helper like [`combineReducers`](combineReducers.md) to combine them. This is similar to how there is just one root component in a React app, but it is composed out of many small components.

### Store Methods

- [`getState()`](#getstate)
- [`dispatch(action)`](#dispatchaction)
- [`subscribe(listener)`](#subscribelistener)
- [`replaceReducer(nextReducer)`](#replacereducernextreducer)

## Store Methods

### getState()

Returns the current state tree of your application.
It is equal to the last value returned by the store's reducer.

#### Returns

_(any)_: The current state tree of your application.

---

&nbsp;

### dispatch(action)

Dispatches an action. This is the only way to trigger a state change.

The store's reducing function will be called with the current [`getState()`](#getState) result and the given `action` synchronously. Its return value will be considered the next state. It will be returned from [`getState()`](#getState) from now on, and the change listeners will immediately be notified.

> ##### A Note for Flux Users
>
> If you attempt to call `dispatch` from inside the [reducer](../understanding/thinking-in-redux/Glossary.md#reducer), it will throw with an error saying “Reducers may not dispatch actions.” This is similar to “Cannot dispatch in a middle of dispatch” error in Flux, but doesn't cause the problems associated with it. In Flux, a dispatch is forbidden while Stores are handling the action and emitting updates. This is unfortunate because it makes it impossible to dispatch actions from component lifecycle hooks or other benign places.
>
> In Redux, subscriptions are called after the root reducer has returned the new state, so you _may_ dispatch in the subscription listeners. You are only disallowed to dispatch inside the reducers because they must have no side effects. If you want to cause a side effect in response to an action, the right place to do this is in the potentially async [action creator](../understanding/thinking-in-redux/Glossary.md#action-creator).

#### Arguments

1. `action` (_Object_<sup>†</sup>): A plain object describing the change that makes sense for your application. Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions. Actions must have a `type` field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for `type` than [Symbols](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol) because strings are serializable. Other than `type`, the structure of an action object is really up to you. If you're interested, check out [Flux Standard Action](https://github.com/acdlite/flux-standard-action) for recommendations on how actions could be constructed.

#### Returns

(Object<sup>†</sup>): The dispatched action (see notes).

#### Notes

<sup>†</sup> The “vanilla” store implementation you get by calling [`createStore`](createStore.md) only supports plain object actions and hands them immediately to the reducer.

However, if you wrap [`createStore`](createStore.md) with [`applyMiddleware`](applyMiddleware.md), the middleware can interpret actions differently, and provide support for dispatching [async actions](../understanding/thinking-in-redux/Glossary.md#async-action). Async actions are usually asynchronous primitives like Promises, Observables, or thunks.

Middleware is created by the community and does not ship with Redux by default. You need to explicitly install packages like [redux-thunk](https://github.com/gaearon/redux-thunk) or [redux-promise](https://github.com/acdlite/redux-promise) to use it. You may also create your own middleware.

To learn how to describe asynchronous API calls, read the current state inside action creators, perform side effects, or chain them to execute in a sequence, see the examples for [`applyMiddleware`](applyMiddleware.md).

#### Example

```js
import { createStore } from 'redux'
const store = createStore(todos, ['Use Redux'])

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))
```

---

&nbsp;

### subscribe(listener)

Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call [`getState()`](#getState) to read the current state tree inside the callback.

You may call [`dispatch()`](#dispatchaction) from a change listener, with the following caveats:

1. The listener should only call [`dispatch()`](#dispatchaction) either in response to user actions or under specific conditions (e. g. dispatching an action when the store has a specific field). Calling [`dispatch()`](#dispatchaction) without any conditions is technically possible, however it leads to an infinite loop as every [`dispatch()`](#dispatchaction) call usually triggers the listener again.

2. The subscriptions are snapshotted just before every [`dispatch()`](#dispatchaction) call. If you subscribe or unsubscribe while the listeners are being invoked, this will not have any effect on the [`dispatch()`](#dispatchaction) that is currently in progress. However, the next [`dispatch()`](#dispatchaction) call, whether nested or not, will use a more recent snapshot of the subscription list.

3. The listener should not expect to see all state changes, as the state might have been updated multiple times during a nested [`dispatch()`](#dispatchaction) before the listener is called. It is, however, guaranteed that all subscribers registered before the [`dispatch()`](#dispatchaction) started will be called with the latest state by the time it exits.

It is a low-level API. Most likely, instead of using it directly, you'll use React (or other) bindings. If you commonly use the callback as a hook to react to state changes, you might want to [write a custom `observeStore` utility](https://github.com/reduxjs/redux/issues/303#issuecomment-125184409). The `Store` is also an [`Observable`](https://github.com/zenparsing/es-observable), so you can `subscribe` to changes with libraries like [RxJS](https://github.com/ReactiveX/RxJS).

To unsubscribe the change listener, invoke the function returned by `subscribe`.

#### Arguments

1. `listener` (_Function_): The callback to be invoked any time an action has been dispatched, and the state tree might have changed. You may call [`getState()`](#getState) inside this callback to read the current state tree. It is reasonable to expect that the store's reducer is a pure function, so you may compare references to some deep path in the state tree to learn whether its value has changed.

##### Returns

(_Function_): A function that unsubscribes the change listener.

##### Example

```js
function select(state) {
  return state.some.deep.property
}

let currentValue
function handleChange() {
  let previousValue = currentValue
  currentValue = select(store.getState())

  if (previousValue !== currentValue) {
    console.log(
      'Some deep nested property changed from',
      previousValue,
      'to',
      currentValue
    )
  }
}

const unsubscribe = store.subscribe(handleChange)
unsubscribe()
```

---

&nbsp;

### replaceReducer(nextReducer)

Replaces the reducer currently used by the store to calculate the state.

It is an advanced API. You might need this if your app implements code splitting, and you want to load some of the reducers dynamically. You might also need this if you implement a hot reloading mechanism for Redux.

#### Arguments

1. `nextReducer` (_Function_) The next reducer for the store to use.

---
id: applymiddleware
title: applyMiddleware
hide_title: true
description: 'API > applyMiddleware: extending the Redux store'
---

&nbsp;

# `applyMiddleware(...middleware)`

Middleware is the suggested way to extend Redux with custom functionality. Middleware lets you wrap the store's [`dispatch`](Store.md#dispatchaction) method for fun and profit. The key feature of middleware is that it is composable. Multiple middleware can be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.

The most common use case for middleware is to support asynchronous actions without much boilerplate code or a dependency on a library like [Rx](https://github.com/Reactive-Extensions/RxJS). It does so by letting you dispatch [async actions](../understanding/thinking-in-redux/Glossary.md#async-action) in addition to normal actions.

For example, [redux-thunk](https://github.com/gaearon/redux-thunk) lets the action creators invert control by dispatching functions. They would receive [`dispatch`](Store.md#dispatchaction) as an argument and may call it asynchronously. Such functions are called _thunks_. Another example of middleware is [redux-promise](https://github.com/acdlite/redux-promise). It lets you dispatch a [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) async action, and dispatches a normal action when the Promise resolves.

Middleware is not baked into [`createStore`](createStore.md) and is not a fundamental part of the Redux architecture, but we consider it useful enough to be supported right in the core. This way, there is a single standard way to extend [`dispatch`](Store.md#dispatchaction) in the ecosystem, and different middleware may compete in expressiveness and utility.

#### Arguments

- `...middleware` (_arguments_): Functions that conform to the Redux _middleware API_. Each middleware receives [`Store`](Store.md)'s [`dispatch`](Store.md#dispatchaction) and [`getState`](Store.md#getState) functions as named arguments, and returns a function. That function will be given the `next` middleware's dispatch method, and is expected to return a function of `action` calling `next(action)` with a potentially different argument, or at a different time, or maybe not calling it at all. The last middleware in the chain will receive the real store's [`dispatch`](Store.md#dispatchaction) method as the `next` parameter, thus ending the chain. So, the middleware signature is `({ getState, dispatch }) => next => action`.

#### Returns

(_Function_) A store enhancer that applies the given middleware. The store enhancer signature is `createStore => createStore` but the easiest way to apply it is to pass it to [`createStore()`](./createStore.md) as the last `enhancer` argument.

#### Example: Custom Logger Middleware

```js
import { createStore, applyMiddleware } from 'redux'
import todos from './reducers'

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

const store = createStore(todos, ['Use Redux'], applyMiddleware(logger))

store.dispatch({
  type: 'ADD_TODO',
  text: 'Understand the middleware'
})
// (These lines will be logged by the middleware:)
// will dispatch: { type: 'ADD_TODO', text: 'Understand the middleware' }
// state after dispatch: [ 'Use Redux', 'Understand the middleware' ]
```

#### Example: Using Thunk Middleware for Async Actions

```js
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)
// applyMiddleware supercharges createStore with middleware:
const store = createStore(reducer, applyMiddleware(thunk))

function fetchSecretSauce() {
  return fetch('https://www.google.com/search?q=secret+sauce')
}

// These are the normal action creators you have seen so far.
// The actions they return can be dispatched without any middleware.
// However, they only express “facts” and not the “async flow”.
function makeASandwich(forPerson, secretSauce) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce
  }
}

function apologize(fromPerson, toPerson, error) {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error
  }
}

function withdrawMoney(amount) {
  return {
    type: 'WITHDRAW',
    amount
  }
}

// Even without middleware, you can dispatch an action:
store.dispatch(withdrawMoney(100))

// But what do you do when you need to start an asynchronous action,
// such as an API call, or a router transition?

// Meet thunks.
// A thunk is a function that returns a function.
// This is a thunk.
function makeASandwichWithSecretSauce(forPerson) {
  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.
  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    )
  }
}

// Thunk middleware lets me dispatch thunk async actions
// as if they were actions!
store.dispatch(makeASandwichWithSecretSauce('Me'))

// It even takes care to return the thunk's return value
// from the dispatch, so I can chain Promises as long as I return them.
store.dispatch(makeASandwichWithSecretSauce('My wife')).then(() => {
  console.log('Done!')
})

// In fact I can write action creators that dispatch
// actions and async actions from other action creators,
// and I can build my control flow with Promises.
function makeSandwichesForEverybody() {
  return function (dispatch, getState) {
    if (!getState().sandwiches.isShopOpen) {
      // You don't have to return Promises, but it's a handy convention
      // so the caller can always call .then() on async dispatch result.
      return Promise.resolve()
    }

    // We can dispatch both plain object actions and other thunks,
    // which lets us compose the asynchronous actions in a single flow.
    return dispatch(makeASandwichWithSecretSauce('My Grandma'))
      .then(() =>
        Promise.all([
          dispatch(makeASandwichWithSecretSauce('Me')),
          dispatch(makeASandwichWithSecretSauce('My wife'))
        ])
      )
      .then(() => dispatch(makeASandwichWithSecretSauce('Our kids')))
      .then(() =>
        dispatch(
          getState().myMoney > 42
            ? withdrawMoney(42)
            : apologize('Me', 'The Sandwich Shop')
        )
      )
  }
}

// This is very useful for server side rendering, because I can wait
// until data is available, then synchronously render the app.

import { renderToString } from 'react-dom/server'

store
  .dispatch(makeSandwichesForEverybody())
  .then(() => response.send(renderToString(<MyApp store={store} />)))

// I can also dispatch a thunk async action from a component
// any time its props change to load the missing data.

import { connect } from 'react-redux'
import { Component } from 'react'

class SandwichShop extends Component {
  componentDidMount() {
    this.props.dispatch(makeASandwichWithSecretSauce(this.props.forPerson))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.forPerson !== this.props.forPerson) {
      this.props.dispatch(makeASandwichWithSecretSauce(this.props.forPerson))
    }
  }

  render() {
    return <p>{this.props.sandwiches.join('mustard')}</p>
  }
}

export default connect(state => ({
  sandwiches: state.sandwiches
}))(SandwichShop)
```

#### Tips

- Middleware only wraps the store's [`dispatch`](Store.md#dispatchaction) function. Technically, anything a middleware can do, you can do manually by wrapping every `dispatch` call, but it's easier to manage this in a single place and define action transformations on the scale of the whole project.

- If you use other store enhancers in addition to `applyMiddleware`, make sure to put `applyMiddleware` before them in the composition chain because the middleware is potentially asynchronous. For example, it should go before [redux-devtools](https://github.com/reduxjs/redux-devtools) because otherwise the DevTools won't see the raw actions emitted by the Promise middleware and such.

- If you want to conditionally apply a middleware, make sure to only import it when it's needed:

  ```js
  let middleware = [a, b]
  if (process.env.NODE_ENV !== 'production') {
    const c = require('some-debug-middleware')
    const d = require('another-debug-middleware')
    middleware = [...middleware, c, d]
  }

  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middleware)
  )
  ```

  This makes it easier for bundling tools to cut out unneeded modules and reduces the size of your builds.

- Ever wondered what `applyMiddleware` itself is? It ought to be an extension mechanism more powerful than the middleware itself. Indeed, `applyMiddleware` is an example of the most powerful Redux extension mechanism called [store enhancers](../understanding/thinking-in-redux/Glossary.md#store-enhancer). It is highly unlikely you'll ever want to write a store enhancer yourself. Another example of a store enhancer is [redux-devtools](https://github.com/reduxjs/redux-devtools). Middleware is less powerful than a store enhancer, but it is easier to write.

- Middleware sounds much more complicated than it really is. The only way to really understand middleware is to see how the existing middleware works, and try to write your own. The function nesting can be intimidating, but most of the middleware you'll find are, in fact, 10-liners, and the nesting and composability is what makes the middleware system powerful.

- To apply multiple store enhancers, you may use [`compose()`](./compose.md).

---
id: bindactioncreators
title: bindActionCreators
hide_title: true
description: 'API > bindActionCreators: wrapping action creators for dispatching'
---

&nbsp;

# `bindActionCreators(actionCreators, dispatch)`

Turns an object whose values are [action creators](../understanding/thinking-in-redux/Glossary.md#action-creator), into an object with the same keys, but with every action creator wrapped into a [`dispatch`](Store.md#dispatchaction) call so they may be invoked directly.

Normally you should just call [`dispatch`](Store.md#dispatchaction) directly on your [`Store`](Store.md) instance. If you use Redux with React, [react-redux](https://github.com/gaearon/react-redux) will provide you with the [`dispatch`](Store.md#dispatchaction) function so you can call it directly, too.

The only use case for `bindActionCreators` is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass [`dispatch`](Store.md#dispatchaction) or the Redux store to it.

For convenience, you can also pass an action creator as the first argument, and get a dispatch wrapped function in return.

#### Parameters

1. `actionCreators` (_Function_ or _Object_): An [action creator](../understanding/thinking-in-redux/Glossary.md#action-creator), or an object whose values are action creators.

2. `dispatch` (_Function_): A [`dispatch`](Store.md#dispatchaction) function available on the [`Store`](Store.md) instance.

#### Returns

(_Function_ or _Object_): An object mimicking the original object, but with each function immediately dispatching the action returned by the corresponding action creator. If you passed a function as `actionCreators`, the return value will also be a single function.

#### Example

#### `TodoActionCreators.js`

```js
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id
  }
}
```

#### `SomeComponent.js`

```js
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TodoActionCreators from './TodoActionCreators'
console.log(TodoActionCreators)
// {
//   addTodo: Function,
//   removeTodo: Function
// }

class TodoListContainer extends Component {
  constructor(props) {
    super(props)

    const { dispatch } = props

    // Here's a good use case for bindActionCreators:
    // You want a child component to be completely unaware of Redux.
    // We create bound versions of these functions now so we can
    // pass them down to our child later.

    this.boundActionCreators = bindActionCreators(TodoActionCreators, dispatch)
    console.log(this.boundActionCreators)
    // {
    //   addTodo: Function,
    //   removeTodo: Function
    // }
  }

  componentDidMount() {
    // Injected by react-redux:
    let { dispatch } = this.props

    // Note: this won't work:
    // TodoActionCreators.addTodo('Use Redux')

    // You're just calling a function that creates an action.
    // You must dispatch the action, too!

    // This will work:
    let action = TodoActionCreators.addTodo('Use Redux')
    dispatch(action)
  }

  render() {
    // Injected by react-redux:
    let { todos } = this.props

    return <TodoList todos={todos} {...this.boundActionCreators} />

    // An alternative to bindActionCreators is to pass
    // just the dispatch function down, but then your child component
    // needs to import action creators and know about them.

    // return <TodoList todos={todos} dispatch={dispatch} />
  }
}

export default connect(state => ({ todos: state.todos }))(TodoListContainer)
```

#### Tips

- You might ask: why don't we bind the action creators to the store instance right away, like in classical Flux? The problem is that this won't work well with universal apps that need to render on the server. Most likely you want to have a separate store instance per request so you can prepare them with different data, but binding action creators during their definition means you're stuck with a single store instance for all requests.

- If you use ES5, instead of `import * as` syntax you can just pass `require('./TodoActionCreators')` to `bindActionCreators` as the first argument. The only thing it cares about is that the values of the `actionCreators` properties are functions. The module system doesn't matter.

---
id: combinereducers
title: combineReducers
hide_title: true
description: 'API > combineReducers: merging slice reducers to create combined state'
---

&nbsp;

# `combineReducers(reducers)`

As your app grows more complex, you'll want to split your [reducing function](../understanding/thinking-in-redux/Glossary.md#reducer) into separate functions, each managing independent parts of the [state](../understanding/thinking-in-redux/Glossary.md#state).

The `combineReducers` helper function turns an object whose values are different reducing functions into a single reducing function you can pass to [`createStore`](createStore.md).

The resulting reducer calls every child reducer, and gathers their results into a single state object.
**The state produced by `combineReducers()` namespaces the states of each reducer under their keys as passed to `combineReducers()`**

Example:

```js
rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// This would produce the following state object
{
  potato: {
    // ... potatoes, and other state managed by the potatoReducer ...
  },
  tomato: {
    // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
  }
}
```

You can control state key names by using different keys for the reducers in the passed object. For example, you may call `combineReducers({ todos: myTodosReducer, counter: myCounterReducer })` for the state shape to be `{ todos, counter }`.

A popular convention is to name reducers after the state slices they manage, so you can use ES6 property shorthand notation: `combineReducers({ counter, todos })`. This is equivalent to writing `combineReducers({ counter: counter, todos: todos })`.

> ##### A Note for Flux Users
>
> This function helps you organize your reducers to manage their own slices of state, similar to how you would have different Flux Stores to manage different state. With Redux, there is just one store, but `combineReducers` helps you keep the same logical division between reducers.

#### Arguments

1. `reducers` (_Object_): An object whose values correspond to different reducing functions that need to be combined into one. See the notes below for some rules every passed reducer must follow.

> Earlier documentation suggested the use of the ES6 `import * as reducers` syntax to obtain the reducers object. This was the source of a lot of confusion, which is why we now recommend exporting a single reducer obtained using `combineReducers()` from `reducers/index.js` instead. An example is included below.

#### Returns

(_Function_): A reducer that invokes every reducer inside the `reducers` object, and constructs a state object with the same shape.

#### Notes

This function is mildly opinionated and is skewed towards helping beginners avoid common pitfalls. This is why it attempts to enforce some rules that you don't have to follow if you write the root reducer manually.

Any reducer passed to `combineReducers` must satisfy these rules:

- For any action that is not recognized, it must return the `state` given to it as the first argument.

- It must never return `undefined`. It is too easy to do this by mistake via an early `return` statement, so `combineReducers` throws if you do that instead of letting the error manifest itself somewhere else.

- If the `state` given to it is `undefined`, it must return the initial state for this specific reducer. According to the previous rule, the initial state must not be `undefined` either. It is handy to specify it with ES6 optional arguments syntax, but you can also explicitly check the first argument for being `undefined`.

While `combineReducers` attempts to check that your reducers conform to some of these rules, you should remember them, and do your best to follow them. `combineReducers` will check your reducers by passing `undefined` to them; this is done even if you specify initial state to `Redux.createStore(combineReducers(...), initialState)`. Therefore, you **must** ensure your reducers work properly when receiving `undefined` as state, even if you never intend for them to actually receive `undefined` in your own code.

#### Example

#### `reducers/todos.js`

```js
export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
```

#### `reducers/counter.js`

```js
export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```

#### `reducers/index.js`

```js
import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'

export default combineReducers({
  todos,
  counter
})
```

#### `App.js`

```js
import { createStore } from 'redux'
import reducer from './reducers/index'

const store = createStore(reducer)
console.log(store.getState())
// {
//   counter: 0,
//   todos: []
// }

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})
console.log(store.getState())
// {
//   counter: 0,
//   todos: [ 'Use Redux' ]
// }
```

#### Tips

- This helper is just a convenience! You can write your own `combineReducers` that [works differently](https://github.com/acdlite/reduce-reducers), or even assemble the state object from the child reducers manually and write a root reducing function explicitly, like you would write any other function.

- You may call `combineReducers` at any level of the reducer hierarchy. It doesn't have to happen at the top. In fact you may use it again to split the child reducers that get too complicated into independent grandchildren, and so on.

---
id: compose
title: compose
hide_title: true
description: 'API > compose: composing multiple functions together'
---

&nbsp;

# `compose(...functions)`

Composes functions from right to left.

This is a functional programming utility, and is included in Redux as a convenience.
You might want to use it to apply several [store enhancers](../understanding/thinking-in-redux/Glossary.md#store-enhancer) in a row.

#### Arguments

1. (_arguments_): The functions to compose. Each function is expected to accept a single parameter. Its return value will be provided as an argument to the function standing to the left, and so on. The exception is the right-most argument which can accept multiple parameters, as it will provide the signature for the resulting composed function.

#### Returns

(_Function_): The final function obtained by composing the given functions from right to left.

#### Example

This example demonstrates how to use `compose` to enhance a [store](Store.md) with [`applyMiddleware`](applyMiddleware.md) and a few developer tools from the [redux-devtools](https://github.com/reduxjs/redux-devtools) package.

```js
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import DevTools from './containers/DevTools'
import reducer from '../reducers'

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), DevTools.instrument())
)
```

#### Tips

- All `compose` does is let you write deeply nested function transformations without the rightward drift of the code. Don't give it too much credit!

---
id: createstore
title: createStore
hide_title: true
description: 'API > createStore: creating a core Redux store'
---

&nbsp;

# `createStore(reducer, [preloadedState], [enhancer])`

Creates a Redux [store](Store.md) that holds the complete state tree of your app.
There should only be a single store in your app.

#### Arguments

1. `reducer` _(Function)_: A [reducing function](../understanding/thinking-in-redux/Glossary.md#reducer) that returns the next [state tree](../understanding/thinking-in-redux/Glossary.md#state), given the current state tree and an [action](../understanding/thinking-in-redux/Glossary.md#action) to handle.

2. [`preloadedState`] _(any)_: The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced `reducer` with [`combineReducers`](combineReducers.md), this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your `reducer` can understand.

3. [`enhancer`] _(Function)_: The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is [`applyMiddleware()`](./applyMiddleware.md).

#### Returns

([_`Store`_](Store.md)): An object that holds the complete state of your app. The only way to change its state is by [dispatching actions](Store.md#dispatchaction). You may also [subscribe](Store.md#subscribelistener) to the changes to its state to update the UI.

#### Example

```js
import { createStore } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(todos, ['Use Redux'])

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]
```

#### Tips

- Don't create more than one store in an application! Instead, use [`combineReducers`](combineReducers.md) to create a single root reducer out of many.

- Redux state is normally plain JS objects and arrays.

- If your state is a plain object, make sure you never mutate it! Immutable updates require making copies of each level of data, typically using the object spread operator ( `return { ...state, ...newData }` ).

- For universal apps that run on the server, create a store instance with every request so that they are isolated. Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.

- When a store is created, Redux dispatches a dummy action to your reducer to populate the store with the initial state. You are not meant to handle the dummy action directly. Just remember that your reducer should return some kind of initial state if the state given to it as the first argument is `undefined`, and you're all set.

- To apply multiple store enhancers, you may use [`compose()`](./compose.md).

