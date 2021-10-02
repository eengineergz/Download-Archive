
---
id: core-concepts
title: Core Concepts
description: "Introduction > Core Concepts: A quick overview of Redux's key idea, reducer functions"
---

# Core Concepts

Imagine your app’s state is described as a plain object. For example, the state of a todo app might look like this:

```js
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

This object is like a “model” except that there are no setters. This is so that different parts of the code can’t change the state arbitrarily, causing hard-to-reproduce bugs.

To change something in the state, you need to dispatch an action. An action is a plain JavaScript object (notice how we don’t introduce any magic?) that describes what happened. Here are a few example actions:

```js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

Enforcing that every change is described as an action lets us have a clear understanding of what’s going on in the app. If something changed, we know why it changed. Actions are like breadcrumbs of what has happened.
Finally, to tie state and actions together, we write a function called a reducer. Again, nothing magical about it—it’s just a function that takes state and action as arguments, and returns the next state of the app.
It would be hard to write such a function for a big app, so we write smaller functions managing parts of the state:

```js
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }])
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}
```

And we write another reducer that manages the complete state of our app by calling those two reducers for the corresponding state keys:

```js
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
```

This is basically the whole idea of Redux. Note that we haven’t used any Redux APIs. It comes with a few utilities to facilitate this pattern, but the main idea is that you describe how your state is updated over time in response to action objects, and 90% of the code you write is just plain JavaScript, with no use of Redux itself, its APIs, or any magic.

---
id: ecosystem
title: Ecosystem
description: 'Introduction > Ecosystem: Links to popular, recommended, and interesting Redux-related libraries'
---

# Ecosystem

Redux is a tiny library, but its contracts and APIs are carefully chosen to spawn an ecosystem of tools and extensions, and the community has created a wide variety of helpful addons, libraries, and tools. You don't need to use any of these addons to use Redux, but they can help make it easier to implement features and solve problems in your application.

For an extensive catalog of libraries, addons, and tools related to Redux, check out the [Redux Ecosystem Links](https://github.com/markerikson/redux-ecosystem-links) list. Also, the [React/Redux Links](https://github.com/markerikson/react-redux-links) list contains tutorials and other useful resources for anyone learning React or Redux.

This page lists some of the Redux-related addons that the Redux maintainers have vetted personally, or that have shown widespread adoption in the community. Don't let this discourage you from trying the rest of them! The ecosystem is growing too fast, and we have a limited time to look at everything. Consider these the “staff picks”, and don't hesitate to submit a PR if you've built something wonderful with Redux.

## Table of Contents

- [Ecosystem](#ecosystem)
  - [Table of Contents](#table-of-contents)
  - [Library Integration and Bindings](#library-integration-and-bindings)
  - [Reducers](#reducers)
    - [Reducer Combination](#reducer-combination)
    - [Reducer Composition](#reducer-composition)
    - [Higher-Order Reducers](#higher-order-reducers)
  - [Actions](#actions)
  - [Utilities](#utilities)
  - [Store](#store)
    - [Change Subscriptions](#change-subscriptions)
    - [Batching](#batching)
    - [Persistence](#persistence)
  - [Immutable Data](#immutable-data)
    - [Data Structures](#data-structures)
    - [Immutable Update Utilities](#immutable-update-utilities)
    - [Immutable/Redux Interop](#immutableredux-interop)
  - [Side Effects](#side-effects)
    - [Widely Used](#widely-used)
    - [Promises](#promises)
  - [Middleware](#middleware)
    - [Networks and Sockets](#networks-and-sockets)
    - [Async Behavior](#async-behavior)
    - [Analytics](#analytics)
  - [Entities and Collections](#entities-and-collections)
  - [Component State and Encapsulation](#component-state-and-encapsulation)
  - [Dev Tools](#dev-tools)
    - [Debuggers and Viewers](#debuggers-and-viewers)
    - [DevTools Monitors](#devtools-monitors)
    - [Logging](#logging)
    - [Mutation Detection](#mutation-detection)
  - [Testing](#testing)
  - [Routing](#routing)
  - [Forms](#forms)
  - [Higher-Level Abstractions](#higher-level-abstractions)
  - [Community Conventions](#community-conventions)

## Library Integration and Bindings

**[reduxjs/react-redux](https://github.com/reduxjs/react-redux)** <br />
The official React bindings for Redux, maintained by the Redux team

**[angular-redux/ng-redux](https://github.com/angular-redux/ng-redux)** <br />
Angular 1 bindings for Redux

**[ember-redux/ember-redux](https://github.com/ember-redux/ember-redux)** <br />
Ember bindings for Redux

**[glimmer-redux/glimmer-redux](https://github.com/glimmer-redux/glimmer-redux)** <br />
Redux bindings for Ember's Glimmer component engine

**[tur-nr/polymer-redux](https://github.com/tur-nr/polymer-redux)** <br />
Redux bindings for Polymer

**[lastmjs/redux-store-element](https://github.com/lastmjs/redux-store-element)**
Redux bindings for custom elements

## Reducers

#### Reducer Combination

**[ryo33/combineSectionReducers](https://gitlab.com/ryo33/combine-section-reducers)** <br />
An expanded version of `combineReducers`, which allows passing `state` as a third argument to all slice reducers.

**[KodersLab/topologically-combine-reducers](https://github.com/KodersLab/topologically-combine-reducers)** <br />
A `combineReducers` variation that allows defining cross-slice dependencies for ordering and data passing

```js
var masterReducer = topologicallyCombineReducers(
  { auth, users, todos },
  // define the dependency tree
  { auth: ['users'], todos: ['auth'] }
)
```

#### Reducer Composition

**[acdlite/reduce-reducers](https://github.com/acdlite/reduce-reducers)** <br />
Provides sequential composition of reducers at the same level

```js
const combinedReducer = combineReducers({ users, posts, comments })
const rootReducer = reduceReducers(combinedReducer, otherTopLevelFeatureReducer)
```

**[mhelmer/redux-xforms](https://github.com/mhelmer/redux-xforms)** <br />
A collection of composable reducer transformers

```js
const createByFilter = (predicate, mapActionToKey) =>
  compose(
    withInitialState({}), // inject initial state as {}
    withFilter(predicate), // let through if action has filterName
    updateSlice(mapActionToKey), // update a single key in the state
    isolateSlice(mapActionToKey) // run the reducer on a single state slice
  )
```

**[adrienjt/redux-data-structures](https://github.com/adrienjt/redux-data-structures)** <br />
Reducer factory functions for common data structures: counters, maps, lists (queues, stacks), sets

```js
const myCounter = counter({
  incrementActionTypes: ['INCREMENT'],
  decrementActionTypes: ['DECREMENT']
})
```

#### Higher-Order Reducers

**[omnidan/redux-undo](https://github.com/omnidan/redux-undo)** <br />
Effortless undo/redo and action history for your reducers

**[omnidan/redux-ignore](https://github.com/omnidan/redux-ignore)** <br />
Ignore redux actions by array or filter function

**[omnidan/redux-recycle](https://github.com/omnidan/redux-recycle)** <br />
Reset the redux state on certain actions

**[ForbesLindesay/redux-optimist](https://github.com/ForbesLindesay/redux-optimist)** <br />
A reducer enhancer to enable type-agnostic optimistic updates

## Actions

**[reduxactions/redux-actions](https://github.com/reduxactions/redux-actions)** <br />
Flux Standard Action utilities for Redux

```js
const increment = createAction('INCREMENT')
const reducer = handleActions({ [increment]: (state, action) => state + 1 }, 0)
const store = createStore(reducer)
store.dispatch(increment())
```

**[BerkeleyTrue/redux-create-types](https://github.com/BerkeleyTrue/redux-create-types)** <br />
Creates standard and async action types based on namespaces

```js
export const types = createTypes(
  ['openModal', createAsyncTypes('fetch')],
  'app'
)
// { openModal : "app.openModal", fetch : { start : "app.fetch.start", complete: 'app.fetch.complete' } }
```

**[maxhallinan/kreighter](https://github.com/maxhallinan/kreighter)** <br />
Generates action creators based on types and expected fields

```js
const formatTitle = (id, title) => ({
  id,
  title: toTitleCase(title)
})
const updateBazTitle = fromType('UPDATE_BAZ_TITLE', formatTitle)
updateBazTitle(1, 'foo bar baz')
// -> { type: 'UPDATE_BAZ_TITLE', id: 1, title: 'Foo Bar Baz', }
```

## Utilities

**[reduxjs/reselect](https://github.com/reduxjs/reselect)** <br />
Creates composable memoized selector functions for efficiently deriving data from the store state

```js
const taxSelector = createSelector(
  [subtotalSelector, taxPercentSelector],
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)
```

**[paularmstrong/normalizr](https://github.com/paularmstrong/normalizr)** <br />
Normalizes nested JSON according to a schema

```js
const user = new schema.Entity('users')
const comment = new schema.Entity('comments', { commenter: user })
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
})
const normalizedData = normalize(originalData, article)
```

**[planttheidea/selectorator](https://github.com/planttheidea/selectorator)** <br />
Abstractions over Reselect for common selector use cases

```js
const getBarBaz = createSelector(
  ['foo.bar', 'baz'],
  (bar, baz) => `${bar} ${baz}`
)
getBarBaz({ foo: { bar: 'a' }, baz: 'b' }) // "a b"
```

## Store

#### Change Subscriptions

**[jprichardson/redux-watch](https://github.com/jprichardson/redux-watch)** <br />
Watch for state changes based on key paths or selectors

```js
let w = watch(() => mySelector(store.getState()))
store.subscribe(
  w((newVal, oldVal) => {
    console.log(newval, oldVal)
  })
)
```

**[ashaffer/redux-subscribe](https://github.com/ashaffer/redux-subscribe)** <br />
Centralized subscriptions to state changes based on paths

```js
store.dispatch( subscribe("users.byId.abcd", "subscription1", () => {} );
```

#### Batching

**[tappleby/redux-batched-subscribe](https://github.com/tappleby/redux-batched-subscribe)** <br />
Store enhancer that can debounce subscription notifications

```js
const debounceNotify = _.debounce(notify => notify())
const store = createStore(
  reducer,
  initialState,
  batchedSubscribe(debounceNotify)
)
```

**[manaflair/redux-batch](https://github.com/manaflair/redux-batch)** <br />
Store enhancer that allows dispatching arrays of actions

```js
const store = createStore(reducer, reduxBatch)
store.dispatch([{ type: 'INCREMENT' }, { type: 'INCREMENT' }])
```

**[laysent/redux-batch-actions-enhancer](https://github.com/laysent/redux-batch-actions-enhancer)** <br />
Store enhancer that accepts batched actions

```js
const store = createStore(reducer, initialState, batch().enhancer)
store.dispatch(createAction({ type: 'INCREMENT' }, { type: 'INCREMENT' }))
```

**[tshelburne/redux-batched-actions](https://github.com/tshelburne/redux-batched-actions)** <br />
Higher-order reducer that handles batched actions

```js
const store = createStore(enableBatching(reducer), initialState)
store.dispatch(batchActions([{ type: 'INCREMENT' }, { type: 'INCREMENT' }]))
```

#### Persistence

**[rt2zz/redux-persist](https://github.com/rt2zz/redux-persist)** <br />
Persist and rehydrate a Redux store, with many extensible options

```js
const store = createStore(reducer, autoRehydrate())
persistStore(store)
```

**[react-stack/redux-storage](https://github.com/react-stack/redux-storage)** <br />
Persistence layer for Redux with flexible backends

```js
const reducer = storage.reducer(combineReducers(reducers))
const engine = createEngineLocalStorage('my-save-key')
const storageMiddleware = storage.createMiddleware(engine)
const store = createStore(reducer, applyMiddleware(storageMiddleware))
```

**[redux-offline/redux-offline](https://github.com/redux-offline/redux-offline)** <br />
Persistent store for Offline-First apps, with support for optimistic UIs

```js
const store = createStore(reducer, offline(offlineConfig))
store.dispatch({
  type: 'FOLLOW_USER_REQUEST',
  meta: { offline: { effect: {}, commit: {}, rollback: {} } }
})
```

## Immutable Data

**[ImmerJS/immer](https://github.com/immerjs/immer)** <br />
Immutable updates with normal mutative code, using Proxies

```js
const nextState = produce(baseState, draftState => {
  draftState.push({ todo: 'Tweet about it' })
  draftState[1].done = true
})
```

## Side Effects

#### Widely Used

**[gaearon/redux-thunk](https://github.com/gaearon/redux-thunk)** <br />
Dispatch functions, which are called and given `dispatch` and `getState` as parameters. This acts as a loophole for AJAX calls and other async behavior.

**Best for**: getting started, simple async and complex synchronous logic.

```js
function fetchData(someValue) {
    return (dispatch, getState) => {
        dispatch({type : "REQUEST_STARTED"});

        myAjaxLib.post("/someEndpoint", {data : someValue})
            .then(response => dispatch({type : "REQUEST_SUCCEEDED", payload : response})
            .catch(error => dispatch({type : "REQUEST_FAILED", error : error});
    };
}

function addTodosIfAllowed(todoText) {
    return (dispatch, getState) => {
        const state = getState();

        if(state.todos.length < MAX_TODOS) {
            dispatch({type : "ADD_TODO", text : todoText});
        }
    }
}
```

**[redux-saga/redux-saga](https://github.com/redux-saga/redux-saga)** <br />
Handle async logic using synchronous-looking generator functions. Sagas return descriptions of effects, which are executed by the saga middleware, and act like "background threads" for JS applications.

**Best for**: complex async logic, decoupled workflows

```js
function* fetchData(action) {
  const { someValue } = action
  try {
    const response = yield call(myAjaxLib.post, '/someEndpoint', {
      data: someValue
    })
    yield put({ type: 'REQUEST_SUCCEEDED', payload: response })
  } catch (error) {
    yield put({ type: 'REQUEST_FAILED', error: error })
  }
}

function* addTodosIfAllowed(action) {
  const { todoText } = action
  const todos = yield select(state => state.todos)

  if (todos.length < MAX_TODOS) {
    yield put({ type: 'ADD_TODO', text: todoText })
  }
}
```

**[redux-observable/redux-observable](https://github.com/redux-observable/redux-observable)**

Handle async logic using RxJS observable chains called "epics".
Compose and cancel async actions to create side effects and more.

**Best for**: complex async logic, decoupled workflows

```js
const loginRequestEpic = action$ =>
  action$
    .ofType(LOGIN_REQUEST)
    .mergeMap(({ payload: { username, password } }) =>
      Observable.from(postLogin(username, password))
        .map(loginSuccess)
        .catch(loginFailure)
    )

const loginSuccessfulEpic = action$ =>
  action$
    .ofType(LOGIN_SUCCESS)
    .delay(2000)
    .mergeMap(({ payload: { msg } }) => showMessage(msg))

const rootEpic = combineEpics(loginRequestEpic, loginSuccessfulEpic)
```

**[redux-loop/redux-loop](https://github.com/redux-loop/redux-loop)**

A port of the Elm Architecture to Redux that allows you to sequence your effects naturally and purely by returning them from your reducers. Reducers now return both a state value and a side effect description.

**Best for**: trying to be as much like Elm as possible in Redux+JS

```js
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      const { username, password } = action.payload
      return loop(
        { pending: true },
        Effect.promise(loginPromise, username, password)
      )
    case ActionType.LOGIN_SUCCESS:
      const { user, msg } = action.payload
      return loop(
        { pending: false, user },
        Effect.promise(delayMessagePromise, msg, 2000)
      )
    case ActionType.LOGIN_FAILURE:
      return { pending: false, err: action.payload }
    default:
      return state
  }
}
```

**[jeffbski/redux-logic](https://github.com/jeffbski/redux-logic)**

Side effects lib built with observables, but allows use of callbacks, promises, async/await, or observables. Provides declarative processing of actions.

**Best for**: very decoupled async logic

```js
const loginLogic = createLogic({
  type: Actions.LOGIN_REQUEST,

  process({ getState, action }, dispatch, done) {
    const { username, password } = action.payload

    postLogin(username, password)
      .then(
        ({ user, msg }) => {
          dispatch(loginSucceeded(user))

          setTimeout(() => dispatch(showMessage(msg)), 2000)
        },
        err => dispatch(loginFailure(err))
      )
      .then(done)
  }
})
```

#### Promises

**[acdlite/redux-promise](https://github.com/acdlite/redux-promise)** <br />
Dispatch promises as action payloads, and have FSA-compliant actions dispatched as the promise resolves or rejects.

```js
dispatch({ type: 'FETCH_DATA', payload: myAjaxLib.get('/data') })
// will dispatch either {type : "FETCH_DATA", payload : response} if resolved,
// or dispatch {type : "FETCH_DATA", payload : error, error : true} if rejected
```

**[lelandrichardson/redux-pack](https://github.com/lelandrichardson/redux-pack)** <br />
Sensible, declarative, convention-based promise handling that guides users in a good direction without exposing the full power of dispatch.

```js
dispatch({type : "FETCH_DATA", payload : myAjaxLib.get("/data") });

// in a reducer:
        case "FETCH_DATA": =
            return handle(state, action, {
                start: prevState => ({
                  ...prevState,
                  isLoading: true,
                  fooError: null
                }),
                finish: prevState => ({ ...prevState, isLoading: false }),
                failure: prevState => ({ ...prevState, fooError: payload }),
                success: prevState => ({ ...prevState, foo: payload }),
            });
```

## Middleware

#### Networks and Sockets

**[svrcekmichal/redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware)** <br />
Fetches data with Axios and dispatches start/success/fail actions

```js
export const loadCategories() => ({ type: 'LOAD', payload: { request : { url: '/categories'} } });
```

**[agraboso/redux-api-middleware](https://github.com/agraboso/redux-api-middleware)** <br />
Reads API call actions, fetches, and dispatches FSAs

```js
const fetchUsers = () => ({
  [CALL_API]: {
    endpoint: 'http://www.example.com/api/users',
    method: 'GET',
    types: ['REQUEST', 'SUCCESS', 'FAILURE']
  }
})
```

**[itaylor/redux-socket.io](https://github.com/itaylor/redux-socket.io)** <br />
An opinionated connector between socket.io and redux.

```js
const store = createStore(reducer, applyMiddleware(socketIoMiddleware))
store.dispatch({ type: 'server/hello', data: 'Hello!' })
```

**[tiberiuc/redux-react-firebase](https://github.com/tiberiuc/redux-react-firebase)** <br />
Integration between Firebase, React, and Redux

#### Async Behavior

**[rt2zz/redux-action-buffer](https://github.com/rt2zz/redux-action-buffer)** <br />
Buffers all actions into a queue until a breaker condition is met, at which point the queue is released

**[wyze/redux-debounce](https://github.com/wyze/redux-debounce)** <br />
FSA-compliant middleware for Redux to debounce actions.

**[mathieudutour/redux-queue-offline](https://github.com/mathieudutour/redux-queue-offline)** <br />
Queue actions when offline and dispatch them when getting back online.

#### Analytics

**[rangle/redux-beacon](https://github.com/rangle/redux-beacon)** <br />
Integrates with any analytics services, can track while offline, and decouples analytics logic from app logic

**[markdalgleish/redux-analytics](https://github.com/markdalgleish/redux-analytics)** <br />
Watches for Flux Standard Actions with meta analytics values and processes them

## Entities and Collections

**[tommikaikkonen/redux-orm](https://github.com/tommikaikkonen/redux-orm)** <br />
A simple immutable ORM to manage relational data in your Redux store.

**[Versent/redux-crud](https://github.com/Versent/redux-crud)** <br />
Convention-based actions and reducers for CRUD logic

**[kwelch/entities-reducer](https://github.com/kwelch/entities-reducer)** <br />
A higher-order reducer that handles data from Normalizr

**[amplitude/redux-query](https://github.com/amplitude/redux-query)** <br />
Declare colocated data dependencies with your components, run queries when components mount, perform optimistic updates, and trigger server changes with Redux actions.

**[cantierecreativo/redux-bees](https://github.com/cantierecreativo/redux-bees)** <br />
Declarative JSON-API interaction that normalizes data, with a React HOC that can run queries

**[GetAmbassador/redux-clerk](https://github.com/GetAmbassador/redux-clerk)** <br />
Async CRUD handling with normalization, optimistic updates, sync/async action creators, selectors, and an extendable reducer.

**[shoutem/redux-io](https://github.com/shoutem/redux-io)** <br />
JSON-API abstraction with async CRUD, normalization, optimistic updates, caching, data status, and error handling.

**[jmeas/redux-resource](https://github.com/jmeas/redux-resource)** <br />
A tiny but powerful system for managing 'resources': data that is persisted to remote servers.

## Component State and Encapsulation

**[threepointone/redux-react-local](https://github.com/threepointone/redux-react-local)** <br />
Local component state in Redux, with handling for component actions

```js
@local({
  ident: 'counter', initial: 0, reducer : (state, action) => action.me ? state + 1 : state }
})
class Counter extends React.Component {
```

**[epeli/lean-redux](https://github.com/epeli/lean-redux)** <br />
Makes component state in Redux as easy as setState

```js
const DynamicCounters = connectLean(
    scope: "dynamicCounters",
    getInitialState() => ({counterCount : 1}),
    addCounter, removeCounter
)(CounterList);
```

**[DataDog/redux-doghouse](https://github.com/DataDog/redux-doghouse)** <br />
Aims to make reusable components easier to build with Redux by scoping actions and reducers to a particular instance of a component.

```js
const scopeableActions = new ScopedActionFactory(actionCreators)
const actionCreatorsScopedToA = scopeableActions.scope('a')
actionCreatorsScopedToA.foo('bar') //{ type: SET_FOO, value: 'bar', scopeID: 'a' }

const boundScopeableActions = bindScopedActionFactories(
  scopeableActions,
  store.dispatch
)
const scopedReducers = scopeReducers(reducers)
```

## Dev Tools

#### Debuggers and Viewers

**[reduxjs/redux-devtools](https://github.com/reduxjs/redux-devtools)**

Dan Abramov's original Redux DevTools implementation, built for in-app display of state and time-travel debugging

**[zalmoxisus/redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)**

Mihail Diordiev's browser extension, which bundles multiple state monitor views and adds integration with the browser's own dev tools

**[infinitered/reactotron](https://github.com/infinitered/reactotron)**

A cross-platform Electron app for inspecting React and React Native apps, including app state, API requests, perf, errors, sagas, and action dispatching.

#### DevTools Monitors

**[Log Monitor](https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools-log-monitor)** <br />
The default monitor for Redux DevTools with a tree view

**[Dock Monitor](https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools-dock-monitor)** <br />
A resizable and movable dock for Redux DevTools monitors

**[Slider Monitor](https://github.com/calesce/redux-slider-monitor)** <br />
A custom monitor for Redux DevTools to replay recorded Redux actions

**[Diff Monitor](https://github.com/whetstone/redux-devtools-diff-monitor)** <br />
A monitor for Redux DevTools that diffs the Redux store mutations between actions

**[Filterable Log Monitor](https://github.com/bvaughn/redux-devtools-filterable-log-monitor/)** <br />
Filterable tree view monitor for Redux DevTools

**[Filter Actions](https://github.com/zalmoxisus/redux-devtools-filter-actions)** <br />
Redux DevTools composable monitor with the ability to filter actions

#### Logging

**[evgenyrodionov/redux-logger](https://github.com/evgenyrodionov/redux-logger)** <br />
Logging middleware that shows actions, states, and diffs

**[inakianduaga/redux-state-history](https://github.com/inakianduaga/redux-state-history)** <br />
Enhancer that provides time-travel and efficient action recording capabilities, including import/export of action logs and action playback.

**[joshwcomeau/redux-vcr](https://github.com/joshwcomeau/redux-vcr)** <br />
Record and replay user sessions in real-time

**[socialtables/redux-unhandled-action](https://github.com/socialtables/redux-unhandled-action)** <br />
Warns about actions that produced no state changes in development

#### Mutation Detection

**[leoasis/redux-immutable-state-invariant](https://github.com/leoasis/redux-immutable-state-invariant)** <br />
Middleware that throws an error when you try to mutate your state either inside a dispatch or between dispatches.

**[flexport/mutation-sentinel](https://github.com/flexport/mutation-sentinel)** <br />
Helps you deeply detect mutations at runtime and enforce immutability in your codebase.

**[mmahalwy/redux-pure-connect](https://github.com/mmahalwy/redux-pure-connect)** <br />
Check and log whether react-redux's connect method is passed `mapState` functions that create impure props.

## Testing

**[arnaudbenard/redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)** <br />
A mock store that saves dispatched actions in an array for assertions

**[Workable/redux-test-belt](https://github.com/Workable/redux-test-belt)** <br />
Extends the store API to make it easier assert, isolate, and manipulate the store

**[conorhastings/redux-test-recorder](https://github.com/conorhastings/redux-test-recorder)** <br />
Middleware to automatically generate reducers tests based on actions in the app

**[wix/redux-testkit](https://github.com/wix/redux-testkit)** <br />
Complete and opinionated testkit for testing Redux projects (reducers, selectors, actions, thunks)

**[jfairbank/redux-saga-test-plan](https://github.com/jfairbank/redux-saga-test-plan)** <br />
Makes integration and unit testing of sagas a breeze

## Routing

**[supasate/connected-react-router](https://github.com/supasate/connected-react-router)**
Synchronize React Router 4 state with your Redux store.

**[faceyspacey/redux-first-router](https://github.com/faceyspacey/redux-first-router)** <br />
Seamless Redux-first routing. Think of your app in states, not routes, not components, while keeping the address bar in sync. Everything is state. Connect your components and just dispatch flux standard actions.

## Forms

**[erikras/redux-form](https://github.com/erikras/redux-form)** <br />
A full-featured library to enable a React HTML form to store its state in Redux.

**[davidkpiano/react-redux-form](https://github.com/davidkpiano/react-redux-form)** <br />
React Redux Form is a collection of reducer creators and action creators that make implementing even the most complex and custom forms with React and Redux simple and performant.

## Higher-Level Abstractions

**[keajs/kea](https://github.com/keajs/kea)** <br />
An abstraction over Redux, Redux-Saga and Reselect. Provides a framework for your app’s actions, reducers, selectors and sagas. It empowers Redux, making it as simple to use as setState. It reduces boilerplate and redundancy, while retaining composability.

**[TheComfyChair/redux-scc](https://github.com/TheComfyChair/redux-scc)** <br />
Takes a defined structure and uses 'behaviors' to create a set of actions, reducer responses and selectors.

**[Bloomca/redux-tiles](https://github.com/Bloomca/redux-tiles)** <br />
Provides minimal abstraction on top of Redux, to allow easy composability, easy async requests, and sane testability.

## Community Conventions

**[Flux Standard Action](https://github.com/acdlite/flux-standard-action)** <br />
A human-friendly standard for Flux action objects

**[Canonical Reducer Composition](https://github.com/gajus/canonical-reducer-composition)** <br />
An opinionated standard for nested reducer composition

**[Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)** <br />
A proposal for bundling reducers, action types and actions

---
id: examples
title: Examples
description: 'Introduction > Examples: Redux interactive example apps'
---

# Examples

Redux is distributed with a few examples in its [source code](https://github.com/reduxjs/redux/tree/master/examples). Most of these examples are also on [CodeSandbox](https://codesandbox.io), an online editor that lets you play with the examples online.

## Counter Vanilla

Run the [Counter Vanilla](https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/counter-vanilla
open index.html
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter-vanilla/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

It does not require a build system or a view framework and exists to show the raw Redux API used with ES5.

## Counter

Run the [Counter](https://github.com/reduxjs/redux/tree/master/examples/counter) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/counter
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant [React Redux](https://github.com/reduxjs/react-redux) bindings instead.

This example includes tests.

## Todos

Run the [Todos](https://github.com/reduxjs/redux/tree/master/examples/todos) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todos
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todos/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the best example to get a deeper understanding of how the state updates work together with components in Redux. It shows how reducers can delegate handling actions to other reducers, and how you can use [React Redux](https://github.com/reduxjs/react-redux) to generate container components from your presentational components.

This example includes tests.

## Todos with Undo

Run the [Todos with Undo](https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todos-with-undo
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos-with-undo):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todos-with-undo/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is a variation on the previous example. It is almost identical, but additionally shows how wrapping your reducer with [Redux Undo](https://github.com/omnidan/redux-undo) lets you add a Undo/Redo functionality to your app with a few lines of code.

## TodoMVC

Run the [TodoMVC](https://github.com/reduxjs/redux/tree/master/examples/todomvc) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/todomvc
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todomvc/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the classical [TodoMVC](http://todomvc.com/) example. It's here for the sake of comparison, but it covers the same points as the Todos example.

This example includes tests.

## Shopping Cart

Run the [Shopping Cart](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/shopping-cart
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/shopping-cart/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This example shows important idiomatic Redux patterns that become important as your app grows. In particular, it shows how to store entities in a normalized way by their IDs, how to compose reducers on several levels, and how to define selectors alongside the reducers so the knowledge about the state shape is encapsulated. It also demonstrates logging with [Redux Logger](https://github.com/fcomb/redux-logger) and conditional dispatching of actions with [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware.

## Tree View

Run the [Tree View](https://github.com/reduxjs/redux/tree/master/examples/tree-view) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/tree-view
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/tree-view):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/tree-view/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This example demonstrates rendering a deeply nested tree view and representing its state in a normalized form so it is easy to update from reducers. Good rendering performance is achieved by the container components granularly subscribing only to the tree nodes that they render.

This example includes tests.

## Async

Run the [Async](https://github.com/reduxjs/redux/tree/master/examples/async) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/async
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/async):

<iframe class="codesandbox"src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/async/?runonclick=1"sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This example includes reading from an asynchronous API, fetching data in response to user input, showing loading indicators, caching the response, and invalidating the cache. It uses [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware to encapsulate asynchronous side effects.

## Universal

Run the [Universal](https://github.com/reduxjs/redux/tree/master/examples/universal) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/universal
npm install
npm start
```

This is a basic demonstration of [server rendering](../usage/ServerRendering.md) with Redux and React. It shows how to prepare the initial store state on the server, and pass it down to the client so the client store can boot up from an existing state.

## Real World

Run the [Real World](https://github.com/reduxjs/redux/tree/master/examples/real-world) example:

```sh
git clone https://github.com/reduxjs/redux.git

cd redux/examples/real-world
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/real-world):

<iframe class="codesandbox" src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/real-world/?runonclick=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This is the most advanced example. It is dense by design. It covers keeping fetched entities in a normalized cache, implementing a custom middleware for API calls, rendering partially loaded data, pagination, caching responses, displaying error messages, and routing. Additionally, it includes Redux DevTools.

## More Examples

You can find more examples in the [Redux Apps and Examples](https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md)
page of the [Redux Addons Catalog](https://github.com/markerikson/redux-ecosystem-links).

---
id: getting-started
title: Getting Started with Redux
description: 'Introduction > Getting Started: Resources to get started learning and using Redux'
---

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as [live code editing combined with a time traveling debugger](https://github.com/reduxjs/redux-devtools).

You can use Redux together with [React](https://reactjs.org), or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.

## Installation

### Redux Toolkit

[**Redux Toolkit**](https://redux-toolkit.js.org) is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

RTK includes utilities that help simplify many common use cases, including [store setup](https://redux-toolkit.js.org/api/configureStore),
[creating reducers and writing immutable update logic](https://redux-toolkit.js.org/api/createreducer),
and even [creating entire "slices" of state at once](https://redux-toolkit.js.org/api/createslice).

Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to
simplify an existing application, **[Redux Toolkit](https://redux-toolkit.js.org/)** can help you
make your Redux code better.

Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:

```bash
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

### Create a React Redux App

The recommended way to start new apps with React and Redux is by using the [official Redux+JS template](https://github.com/reduxjs/cra-template-redux) or [Redux+TS template](https://github.com/reduxjs/cra-template-redux-typescript) for [Create React App](https://github.com/facebook/create-react-app), which takes advantage of **[Redux Toolkit](https://redux-toolkit.js.org/)** and React Redux's integration with React components.

```bash
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

### Redux Core

The Redux core library is available as a package on NPM for use with a module bundler or in a Node application:

```bash
# NPM
npm install redux

# Yarn
yarn add redux
```

It is also available as a precompiled UMD package that defines a `window.Redux` global variable. The UMD package can be used as a [`<script>` tag](https://unpkg.com/redux/dist/redux.js) directly.

For more details, see the [Installation](Installation.md) page.

## Basic Example

The whole global state of your app is stored in an object tree inside a single _store_.
The only way to change the state tree is to create an _action_, an object describing what happened, and _dispatch_ it to the store.
To specify how state gets updated in response to an action, you write pure _reducer_ functions that calculate a new state based on the old state and the action.

```js
import { createStore } from 'redux'

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
```

Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called _actions_. Then you write a special function called a _reducer_ to decide how every action transforms the entire application's state.

In a typical Redux app, there is just a single store with a single root reducing function. As your app grows, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components.

This architecture might seem like a lot for a counter app, but the beauty of this pattern is how well it scales to large and complex apps. It also enables very powerful developer tools, because it is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action.

### Redux Toolkit Example

Redux Toolkit simplifies the process of writing Redux logic and setting up the store. With Redux Toolkit, that same logic looks like:

```js
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
```

Redux Toolkit allows us to write shorter logic that's easier to read, while still following the same Redux behavior and data flow.

## Learn Redux

We have a variety of resources available to help you learn Redux.

### Redux Essentials Tutorial

The [**Redux Essentials tutorial**](../tutorials/essentials/part-1-overview-concepts.md) is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices. We recommend starting there.

### Redux Fundamentals Tutorial

The [**Redux Fundamentals tutorial**](../tutorials/fundamentals/part-1-overview.md) is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.

### Learn Modern Redux Livestream

Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs.

See [the "Learn Modern Redux" show notes page](https://www.learnwithjason.dev/let-s-learn-modern-redux) for a transcript and links to the example app source.

<LiteYouTubeEmbed
    id="9zySeP5vH9c"
    title="Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query"
/>

### Additional Tutorials

- The Redux repository contains several example projects demonstrating various aspects of how to use Redux. Almost all examples have a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online. See the complete list of examples in the **[Examples page](./Examples.md)**.
- Redux creator Dan Abramov's **free ["Getting Started with Redux" video series](https://app.egghead.io/playlists/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)** and **[Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)** video courses on Egghead.io
- Redux maintainer Mark Erikson's **["Redux Fundamentals" conference talk](https://blog.isquaredsoftware.com/2018/03/presentation-reactathon-redux-fundamentals/)** and [**"Redux Fundamentals" workshop slides**](https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/)
- Dave Ceddia's post [**A Complete React Redux Tutorial for Beginners**](https://daveceddia.com/redux-tutorial/)

### Other Resources

- The **[Redux FAQ](../FAQ.md)** answers many common questions about how to use Redux, and the **["Using Redux" docs section](../usage/index.md)** has information on handling derived data, testing, structuring reducer logic, and reducing boilerplate.
- Redux maintainer Mark Erikson's **["Practical Redux" tutorial series](https://blog.isquaredsoftware.com/series/practical-redux/)** demonstrates real-world intermediate and advanced techniques for working with React and Redux (also available as **[an interactive course on Educative.io](https://www.educative.io/collection/5687753853370368/5707702298738688)**).
- The **[React/Redux links list](https://github.com/markerikson/react-redux-links)** has categorized articles on working with [reducers and selectors](https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md), [managing side effects](https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md), [Redux architecture and best practices](https://github.com/markerikson/react-redux-links/blob/master/redux-architecture.md), and more.
- Our community has created thousands of Redux-related libraries, addons, and tools. The **["Ecosystem" docs page](./Ecosystem.md)** lists our recommendations, and there's a complete listing available in the **[Redux addons catalog](https://github.com/markerikson/redux-ecosystem-links)**.

## Help and Discussion

The **[#redux channel](https://discord.gg/0ZcbPKXt5bZ6au5t)** of the **[Reactiflux Discord community](https://www.reactiflux.com)** is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!

You can also ask questions on [Stack Overflow](https://stackoverflow.com) using the **[#redux tag](https://stackoverflow.com/questions/tagged/redux)**.

If you have a bug report or need to leave other feedback, [please file an issue on the Github repo](https://github.com/reduxjs/redux)

## Should You Use Redux?

Redux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation. **Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it**.

Here are some suggestions on when it makes sense to use Redux:

- You have reasonable amounts of data changing over time
- You need a single source of truth for your state
- You find that keeping all your state in a top-level component is no longer sufficient

> **For more thoughts on how Redux is meant to be used, see:**
>
> - **[Redux FAQ: When should I use Redux?](../faq/General.md#when-should-i-use-redux)**
> - **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**
>
> - **[The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
>
> - **[The Tao of Redux, Part 2 - Practice and Philosophy](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/)**
> - **[Redux FAQ](../FAQ.md)**

---
id: installation
title: Installation
description: 'Introduction > Installation: Installation instructions for Redux and related packages'
---

# Installation

## Redux Toolkit

Redux Toolkit includes the Redux core, as well as other key packages we feel are essential for building Redux applications (such as Redux Thunk and Reselect).

It's available as a package on NPM for use with a module bundler or in a Node application:

```bash
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

It's also available as a UMD build, which can be loaded from [the `dist` folder on unpkg](https://unpkg.com/@reduxjs/toolkit/dist/). The UMD builds make Redux Toolkit available as a `window.RTK` global variable.

## Redux Core

To install the stable version:

```bash
# NPM
npm install redux

# Yarn
yarn add redux
```

If you're not, you can [access these files on unpkg](https://unpkg.com/redux/), download them, or point your package manager to them.

Most commonly, people consume Redux as a collection of [CommonJS](http://www.commonjs.org/) modules. These modules are what you get when you import `redux` in a [Webpack](https://webpack.js.org/), [Browserify](http://browserify.org/), or a Node environment. If you like to live on the edge and use [Rollup](https://rollupjs.org), we support that as well.

If you don't use a module bundler, it's also fine. The `redux` npm package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/redux/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a [`<script>` tag](https://unpkg.com/redux/dist/redux.js) on the page, or [tell Bower to install it](https://github.com/reduxjs/redux/pull/1181#issuecomment-167361975). The UMD builds make Redux available as a `window.Redux` global variable.

The Redux source code is written in ES2015 but we precompile both CommonJS and UMD builds to ES5 so they work in [any modern browser](https://caniuse.com/#feat=es5). You don't need to use Babel or a module bundler to [get started with Redux](https://redux.js.org/introduction/examples#counter-vanilla).

## Complementary Packages

Most likely, you'll also need [the React bindings](https://github.com/reduxjs/react-redux) and [the developer tools](https://github.com/reduxjs/redux-devtools).

```bash
npm install react-redux
npm install --save-dev redux-devtools
```

Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like [Webpack](https://webpack.js.org/) and [Browserify](http://browserify.org/) for the most comfortable development experience.

## Create a React Redux App

The recommended way to start new apps with React and Redux is by using the [official Redux+JS template](https://github.com/reduxjs/cra-template-redux) or [Redux+TS template](https://github.com/reduxjs/cra-template-redux-typescript) for [Create React App](https://github.com/facebook/create-react-app), which takes advantage of **[Redux Toolkit](https://redux-toolkit.js.org/)** and React Redux's integration with React components.

```bash
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

---
id: learning-resources
title: Learning Resources
description: 'Introduction > Learning Resources: Additional articles and resources for learning Redux'
---

# Learning Resources

The Redux docs are intended to teach the basic concepts of Redux, as well as explain key concepts for use in real-world applications. However, the docs can't cover everything. Happily, there are many other great resources available for learning Redux. We encourage you to check them out. Many of them cover topics that are beyond the scope of the docs, or describe the same topics in other ways that may work better for your learning style.

This page includes our recommendations for some of the best external resources available to learn Redux. For an additional extensive list of tutorials, articles, and other resources on React, Redux, Javascript, and related topics, see the [React/Redux Links list](https://github.com/markerikson/react-redux-links).

## Basic Introductions

_Tutorials that teach the basic concepts of Redux and how to use it_

- **Intro to React, Redux, and Typescript** <br />
  https://blog.isquaredsoftware.com/2020/12/presentations-react-redux-ts-intro/ <br />
  Redux maintainer Mark Erikson's slideset that covers the basics of React, Redux, and TypeScript. Redux topics include stores, reducers, middleware, React-Redux, and Redux Toolkit.

- **Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query** <br />
  https://www.learnwithjason.dev/let-s-learn-modern-redux <br />
  An episode of the "Learn with Jason" show, with Redux maintainer Mark Erikson as guest. The episode features a live-coded app, and shows how to create a new React+TS project, add the Redux packages, and set up Redux Toolkit and React-Redux from scratch (including our recommended TS hooks configuration). It also shows how to use the upcoming RTK Query data fetching API and display that data in a UI.

- **Redux Tutorial: An Overview and Walkthrough** <br />
  https://www.taniarascia.com/redux-react-guide/ <br />
  A well-written tutorial from Tania Rascia that quickly explains key Redux concepts, and shows how to put together a basic Redux + React app using vanilla Redux and Redux Toolkit.

- **Redux for Beginners - The Brain-Friendly Guide to Learning Redux** <br />
  https://www.freecodecamp.org/news/redux-for-beginners-the-brain-friendly-guide-to-redux/ <br />
  An easy-to-follow tutorial that builds a small todo app with Redux Toolkit and React-Redux, including data fetching.

- **Redux made easy with Redux Toolkit and Typescript** <br />
  https://www.mattbutton.com/redux-made-easy-with-redux-toolkit-and-typescript/ <br />
  A helpful tutorial that shows how to use Redux Toolkit and TypeScript together to write Redux applications, and how RTK simplifies typical Redux usage.

- **Redux: From Twitter Hype to Production** <br/>
  https://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/ <br/>
  A well-produced slideshow that visually steps through core Redux concepts, usage with React, project organization, and side effects with thunks and sagas. Has some good animated diagrams demonstrating how data flows through a React+Redux architecture.

## Using Redux With React

_Explanations of the React-Redux bindings library_

- **Modernizing a Legacy Redux Application with React-Redux Hooks** <br />
  https://app.egghead.io/playlists/modernizing-a-legacy-redux-application-with-react-hooks-c528 <br />
  A video series that shows the differences between the earlier `connect` API and the newer React-Redux hooks API, and how to use those hooks in your components.

- **Why Redux is Useful in React Apps** <br/>
  https://www.fullstackreact.com/articles/redux-with-mark-erikson/ <br/>
  An explanation of some of the benefits of using Redux with React, including sharing data between components and hot module reloading.

## Project-Based Tutorials

_Tutorials that teach Redux concepts by building projects, including larger "real-world"-type applications_

- **Practical Redux** <br/>
  https://blog.isquaredsoftware.com/2016/10/practical-redux-part-0-introduction/ <br/>
  https://blog.isquaredsoftware.com/series/practical-redux/ <br/>
  An ongoing series of posts intended to demonstrate a number of specific Redux techniques by building a sample application, based on the MekHQ application for managing Battletech campaigns. Written by Redux co-maintainer Mark Erikson. Covers topics like managing relational data, connecting multiple components and lists, complex reducer logic for features, handling forms, showing modal dialogs, and much more. (Note: this is an older series, and today we recommend newer patterns for writing Redux code. However, many of the principles in this series are still valuable.)

## Redux Implementation

_Explanations of how Redux works internally, by writing miniature reimplementations_

- **Getting Started with Redux - Video Series** <br/>
  https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867 <br/>
  https://github.com/tayiorbeii/egghead.io_redux_course_notes <br/>
  Dan Abramov, the creator of Redux, demonstrates various concepts in 30 short (2-5 minute) videos. The linked Github repo contains notes and transcriptions of the videos.

- **Building React Applications with Idiomatic Redux - Video Series** <br/>
  https://egghead.io/courses/building-react-applications-with-idiomatic-redux <br/>
  https://github.com/tayiorbeii/egghead.io_idiomatic_redux_course_notes <br/>
  Dan Abramov's second video tutorial series, continuing directly after the first. Includes lessons on store initial state, using Redux with React Router, using "selector" functions, normalizing state, use of Redux middleware, async action creators, and more. The linked Github repo contains notes and transcriptions of the videos.

- **Live React: Hot Reloading and Time Travel** <br/>
  https://youtube.com/watch?v=xsSnOQynTHs <br/>
  Dan Abramov's original conference talk that introduced Redux. See how constraints enforced by Redux make hot reloading with time travel easy

- **Build Yourself a Redux** <br/>
  https://zapier.com/engineering/how-to-build-redux/ <br/>
  An excellent in-depth "build a mini-Redux" article, which covers not only Redux's core, but also `connect` and middleware as well.

- **Connect.js explained** <br/>
  https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e <br/>
  A very simplified version of React Redux's `connect()` function that illustrates the basic implementation

- **Let's Write Redux!** <br/>
  https://www.jamasoftware.com/blog/lets-write-redux/ <br/>
  Walks through writing a miniature version of Redux step-by-step, to help explain the concepts and implementation.

## Reducers

_Articles discussing ways to write reducer functions_

- **Taking Advantage of `combineReducers`** <br/>
  https://randycoulman.com/blog/2016/11/22/taking-advantage-of-combinereducers/ <br/>
  Examples of using `combineReducers` multiple times to produce a state tree, and some thoughts on tradeoffs in various approaches to reducer logic.

- **The Power of Higher-Order Reducers** <br/>
  https://slides.com/omnidan/hor#/ <br/>
  A slideshow from the author of redux-undo and other libraries, explaining the concept of higher-order reducers and how they can be used

- **Reducer composition with Higher Order Reducers** <br/>
  https://medium.com/@mange_vibration/reducer-composition-with-higher-order-reducers-35c3977ed08f <br/>
  Some great examples of writing small functions that can be composed together to perform larger specific reducer tasks, such as providing initial state, filtering, updating specific keys, and more.

- **Higher Order Reducers - It just sounds scary** <br/>
  https://medium.com/@danielkagan/high-order-reducers-it-just-sounds-scary-2b9e5dbfc705 <br/>
  Explains how reducers can be composed like Lego bricks to create reusable and testable reducer logic.

## Selectors

_Explanations of how and why to use selector functions to read values from state_

- **Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance** <br/>
  https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/ <br/>
  A complete guide to why you should use selector functions with Redux, how to use the Reselect library to write optimized selectors, and advanced tips for improving performance.

- **ReactCasts #8: Selectors in Redux** <br/>
  https://www.youtube.com/watch?v=frT3to2ACCw <br/>
  A great overview of why and how to use selector functions to retrieve data from the store, and derive additional data from store values

- **Optimizing React Redux Application Development with Reselect** <br/>
  https://codebrahma.com/reselect-tutorial-optimizing-react-redux-application-development-with-reselect/ <br/>
  A good tutorial on Reselect. Covers the concept of "selector functions", how to use Reselect's API, and how to use memoized selectors to improve performance.

- **Usage of Reselect in a React-Redux Application** <br/>
  https://dashbouquet.com/blog/frontend-development/usage-of-reselect-in-a-react-redux-application <br/>
  Discusses the importance of memoized selectors for performance, and good practices for using Reselect.

- **React, Reselect, and Redux** <br/>
  https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c <br/>
  An explanation of how Reselect's memoized selector functions are useful in Redux apps, and how to create unique selector instances for each component instance.

## Normalization

_How to structure the Redux store like a database for best performance_

- **Querying a Redux Store** <br/>
  https://medium.com/@adamrackis/querying-a-redux-store-37db8c7f3b0f <br/>
  A look at best practices for organizing and storing data in Redux, including normalizing data and use of selector functions.

- **Normalizing Redux Stores for Maximum Code Reuse** <br/>
  https://medium.com/@adamrackis/normalizing-redux-stores-for-maximum-code-reuse-ae6e3844ae95 <br/>
  Thoughts on how normalized Redux stores enable some useful data handling approaches, with examples of using selector functions to denormalize hierarchical data.

- **Advanced Redux Entity Normalization** <br/>
  https://medium.com/@dcousineau/advanced-redux-entity-normalization-f5f1fe2aefc5 <br/>
  Describes a "keyWindow" concept for tracking subsets of entities in state, similar to an SQL "view". A useful extension to the idea of normalized data.

## Middleware

_Explanations and examples of how middleware work and how to write them_

- **Exploring Redux Middlewares** <br/>
  https://blog.krawaller.se/posts/exploring-redux-middleware/ <br/>
  Understanding middlewares through a series of small experiments

- **Redux Middleware Tutorial** <br/>
  https://www.pshrmn.com/tutorials/react/redux-middleware/ <br/>
  An overview of what middleware is, how `applyMiddleware` works, and how to write middleware.

- **ReactCasts #6: Redux Middleware** <br/>
  https://www.youtube.com/watch?v=T-qtHI1qHIg <br/>
  A screencast that describes how middleware fit into Redux, their uses, and how to implement a custom middleware

- **A Beginner's Guide to Redux Middleware** <br/>
  https://www.codementor.io/reactjs/tutorial/beginner-s-guide-to-redux-middleware <br/>
  A useful explanation of middleware use cases, with numerous examples

- **Functional Composition in Javascript** <br/>
  https://joecortopassi.com/articles/functional-composition-in-javascript/ <br/>
  Breaking down how the `compose` function works

## Side Effects - Basics

_Introductions to handling async behavior in Redux_

- **Stack Overflow: Dispatching Redux Actions with a Timeout** <br/>
  https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559 <br/>
  Dan Abramov explains the basics of managing async behavior in Redux, walking through a progressive series of approaches (inline async calls, async action creators, thunk middleware).

- **Stack Overflow: Why do we need middleware for async flow in Redux?** <br/>
  https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34599594#34599594 <br/>
  Dan Abramov gives reasons for using thunks and async middleware, and some useful patterns for using thunks.

- **What the heck is a "thunk"?** <br/>
  https://daveceddia.com/what-is-a-thunk/ <br/>
  A quick explanation for what the word "thunk" means in general, and for Redux specifically.

- **Thunks in Redux: The Basics** <br/>
  https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60 <br/>
  A detailed look at what thunks are, what they solve, and how to use them.

## Side Effects - Advanced

_Advanced tools and techniques for managing async behavior_

- **What is the right way to do asynchronous operations in Redux?** <br/>
  https://decembersoft.com/posts/what-is-the-right-way-to-do-asynchronous-operations-in-redux/ <br/>
  An excellent look at the most popular libraries for Redux side effects, with comparisons of how each one works.

- **Redux 4 Ways** <br/>
  https://medium.com/react-native-training/redux-4-ways-95a130da0cdc <br/>
  Side-by-side comparisons of implementing some basic data fetching using thunks, sagas, observables, and a promise middleware

- **Idiomatic Redux: Thoughts on Thunks, Sagas, Abstractions, and Reusability** <br/>
  https://blog.isquaredsoftware.com/2017/01/idiomatic-redux-thoughts-on-thunks-sagas-abstraction-and-reusability/ <br/>
  A response to several "thunks are bad" concerns, arguing that thunks (and sagas) are still a valid approach for managing complex sync logic and async side effects.

- **Javascript Power Tools: Redux-Saga** <br/>
  https://formidable.com/blog/2017/javascript-power-tools-redux-saga/ <br/>
  https://formidable.com/blog/2017/composition-patterns-in-redux-saga/ <br/>
  https://formidable.com/blog/2017/real-world-redux-saga-patterns/ <br/>
  A fantastic series that teaches the concepts, implementation, and benefits behind Redux-Saga, including how ES6 generators are used to control function flow, how sagas can be composed together to accomplish concurrency, and practical use cases for sagas.

- **Exploring Redux Sagas** <br/>
  https://medium.com/onfido-tech/exploring-redux-sagas-cc1fca2015ee <br/>
  An excellent article that explores how to use sagas to provide a glue layer to implement decoupled business logic in a Redux application.

- **Taming Redux with Sagas** <br/>
  https://objectpartners.com/2017/11/20/taming-redux-with-sagas/ <br/>
  A good overview of Redux-Saga, including info on generator functions, use cases for sagas, using sagas to deal with promises, and testing sagas.

- **Reactive Redux State with RxJS** <br/>
  https://ivanjov.com/reactive-redux-state-with-rxjs/ <br/>
  Describes the concept of "Reactive Programming" and the RxJS library, and shows how to use redux-observable to fetch data, along with examples of testing.

- **Using redux-observable to handle asynchronous logic in Redux** <br/>
  https://medium.com/dailyjs/using-redux-observable-to-handle-asynchronous-logic-in-redux-d49194742522 <br/>
  An extended post that compares a thunk-based implementation of handling a line-drawing example vs an observable-based implementation.

## Thinking in Redux

_Deeper looks at how Redux is meant to be used, and why it works the way it does_

- **When (and when not) to reach for Redux** <br />
  https://changelog.com/posts/when-and-when-not-to-reach-for-redux <br />
  Redux maintainer Mark Erikson describes the problems Redux was created to solve, and how it compares to other commonly used tools.

* **You Might Not Need Redux** <br/>
  https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367 <br/>
  Dan Abramov discusses the tradeoffs involved in using Redux.

* **Idiomatic Redux: The Tao of Redux, Part 1 - Implementation and Intent** <br/>
  https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/ <br/>
  A deep dive into how Redux actually works, the constraints it asks you to follow, and the intent behind its design and usage.

* **Idiomatic Redux: The Tao of Redux, Part 2 - Practice and Philosophy** <br/>
  https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/ <br/>
  A follow-up look at why common Redux usage patterns exist, other ways that Redux can be used, and thoughts on the pros and cons of those different patterns and approaches.

* **What's So Great About Redux?** <br/>
  https://medium.freecodecamp.org/whats-so-great-about-redux-ac16f1cc0f8b <br/>
  Deep and fascinating analysis of how Redux compares to OOP and message-passing, how typical Redux usage can devolve towards Java-like "setter" functions with more boilerplate, and something of a plea for a higher-level "blessed" abstraction on top of Redux to make it easier to work with and learn for newbies. Very worth reading.

## Redux Architecture

_Patterns and practices for structuring larger Redux applications_

- **Avoiding Accidental Complexity When Structuring Your App State** <br/>
  https://hackernoon.com/avoiding-accidental-complexity-when-structuring-your-app-state-6e6d22ad5e2a <br/>
  An excellent set of guidelines for organizing your Redux store structure.

- **Redux Step by Step: A Simple and Robust Workflow for Real Life Apps** <br/>
  https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092 <br/>
  A follow-up to the "Accidental Complexity" article, discussing principle

- **Things I Wish I Knew About Redux** <br/>
  https://medium.com/horrible-hacks/things-i-wish-i-knew-about-redux-9924abf2f9e0 <br/>
  https://www.reddit.com/r/javascript/comments/4taau2/things_i_wish_i_knew_about_redux/ <br/>
  A number of excellent tips and lessons learned after building an app with Redux. Includes info on connecting components, selecting data, and app/project structure. Additional discussion on Reddit.

- **React+Redux: Tips and Best Practices for Clean, Reliable, & Maintainable Code** <br/>
  https://speakerdeck.com/goopscoop/react-plus-redux-tips-and-best-practices-for-clean-reliable-and-scalable-code <br/>
  An excellent slideshow with a wide variety of tips and suggestions, including keeping action creators simple and data manipulation in reducers, abstracting away API calls, avoiding spreading props, and more.

- **Redux for state management in large web apps** <br/>
  https://blog.mapbox.com/redux-for-state-management-in-large-web-apps-c7f3fab3ce9b <br/>
  Excellent discussion and examples of idiomatic Redux architecture, and how Mapbox applies those approaches to their Mapbox Studio application.

## Apps and Examples

- **React-Redux RealWorld Example: TodoMVC for the Real World** <br/>
  https://github.com/GoThinkster/redux-review <br/>
  An example full-stack "real world" application built with Redux. Demos a Medium-like social blogging site that includes JWT authentication, CRUD, favoriting articles, following users, routing, and more. The RealWorld project also includes many other implementations of the front and back ends of the site, specifically intended to show how different server and client implementations of the same project and API spec compare with each other.

- **Project Mini-Mek** <br/>
  https://github.com/markerikson/project-minimek <br/>
  A sample app to demonstrate various useful Redux techniques, accompanying the "Practical Redux" blog series at https://blog.isquaredsoftware.com/series/practical-redux

- **react-redux-yelp-clone** <br/>
  https://github.com/mohamed-ismat/react-redux-yelp-clone <br/>
  An adaptation of the "Yelp Clone" app by FullStackReact. It extends the original by using Redux and Redux Saga instead of local state, as well as React Router v4, styled-components, and other modern standards. Based on the React-Boilerplate starter kit.

- **WordPress-Calypso** <br/>
  https://github.com/Automattic/wp-calypso <br/>
  The new JavaScript- and API-powered WordPress.com

- **Sound-Redux** <br/>
  https://github.com/andrewngu/sound-redux <br/>
  A Soundcloud client built with React / Redux

- **Webamp** <br/>
  https://webamp.org <br/>
  https://github.com/captbaritone/webamp <br/>
  An in-browser recreation of Winamp2, built with React and Redux. Actually plays MP3s, and lets you load in local MP3 files.

- **Tello** <br/>
  https://github.com/joshwcomeau/Tello <br/>
  A simple and delightful way to track and manage TV shows

- **io-808** <br/>
  https://github.com/vincentriemer/io-808 <br/>
  An attempt at a fully recreated web-based TR-808 drum machine

## Redux Docs Translations

- [中文文档](http://camsong.github.io/redux-in-chinese/) — Chinese
- [繁體中文文件](https://github.com/chentsulin/redux) — Traditional Chinese
- [Redux in Russian](https://github.com/rajdee/redux-in-russian) — Russian
- [Redux en Español](https://es.redux.js.org/) - Spanish
- [Redux in Korean](https://ko.redux.js.org/) - Korean

## Books

- **Redux in Action** <br/>
  https://www.manning.com/books/redux-in-action <br/>
  A comprehensive book that covers many key aspects of using Redux, including the basics of reducers and actions and use with React, complex middlewares and side effects, application structure, performance, testing, and much more. Does a great job of explaining the pros, cons, and tradeoffs of many approaches to using Redux. Personally recommended by Redux co-maintainer Mark Erikson.

- **The Complete Redux Book** <br/>
  https://leanpub.com/redux-book <br/>
  How do I manage a large state in production? Why do I need store enhancers? What is the best way to handle form validations? Get the answers to all these questions and many more using simple terms and sample code. Learn everything you need to use Redux to build complex and production-ready web applications. (Note: now permanently free!)

- **Taming the State in React** <br/>
  https://www.robinwieruch.de/learn-react-redux-mobx-state-management/ <br/>
  If you have learned React with the previous book of the author called The Road to learn React, Taming the State in React will be the perfect blend to learn about basic and advanced state management in React. You will start out with learning only Redux without React. Afterward, the book shows you how to connect Redux to your React application. The advanced chapters will teach you about normalization, naming, selectors and asynchronous actions. In the end, you will set up and build a real world application with React and Redux.

## Courses

- **Modern React with Redux, by Stephen Grider (paid)** <br/>
  https://www.udemy.com/react-redux/ <br/>
  Master the fundamentals of React and Redux with this tutorial as you develop apps with React Router, Webpack, and ES6. This course will get you up and running quickly, and teach you the core knowledge you need to deeply understand and build React components and structure applications with Redux.

- **Redux, by Tyler McGinnis (paid)** <br/>
  https://tylermcginnis.com/courses/redux/ <br/>
  When learning Redux, you need to learn it in the context of an app big enough to see the benefits. That's why this course is huge. A better name might be _"Real World Redux"_. If you're sick of "todo list" Redux tutorials, you've come to the right place. In this course we'll talk all about what makes Redux special for managing state in your application. We'll build an actual "real world" application so you can see how Redux handles edge cases like optimistic updates and error handling. We'll also cover many other technologies that work well with Redux, Firebase, and CSS Modules.

- **Learn Redux, by Wes Bos (free)** <br/>
  https://learnredux.com/ <br/>
  A video course that walks through building 'Reduxstagram' — a simple photo app that will simplify the core ideas behind Redux, React Router and React.js

## More Resources

- [React-Redux Links](https://github.com/markerikson/react-redux-links) is a curated list of high-quality articles, tutorials, and related content for React, Redux, ES6, and more.
- [Redux Ecosystem Links](https://github.com/markerikson/redux-ecosystem-links) is a categorized collection of Redux-related libraries, addons, and utilities.
- [Awesome Redux](https://github.com/xgrommx/awesome-redux) is an extensive list of Redux-related repositories.
- [DEV Community](https://dev.to/t/redux) is a place to share Redux projects, articles and tutorials as well as start discussions and ask for feedback on Redux-related topics. Developers of all skill-levels are welcome to take part.

# Introduction

- [Core Concepts](CoreConcepts.md)
- [Learning Resources](LearningResources.md)
- [Ecosystem](Ecosystem.md)
- [Examples](Examples.md)

