
---
id: part-1-overview-concepts
title: 'Redux Essentials, Part 1: Redux Overview and Concepts'
sidebar_label: 'Redux Overview and Concepts'
description: 'The official Essentials tutorial for Redux: learn how to use Redux, the right way'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- What Redux is and why you might want to use it
- Key Redux terms and concepts
- How data flows through a Redux app

:::

## Introduction

Welcome to the Redux Essentials tutorial! **This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices**. By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you've learned here.

In Part 1 of this tutorial, we'll cover the key concepts and terms you need to know to use Redux, and in [Part 2: Redux App Structure](./part-2-app-structure.md) we'll examine a basic React + Redux app to see how the pieces fit together.

Starting in [Part 3: Basic Redux Data Flow](./part-3-data-flow.md), we'll use that knowledge to build a small social media feed app with some real-world features, see how those pieces actually work in practice, and talk about some important patterns and guidelines for using Redux.

### How to Read This Tutorial

This page will focus on showing you _how_ to use Redux the right way, and explain just enough of the concepts so that you can understand how to build Redux apps correctly.

We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already:

:::important Prerequisites

- Familiarity with [HTML & CSS](https://internetingishard.com/).
- Familiarity with [ES6 syntax and features](https://www.taniarascia.com/es6-syntax-and-feature-overview/)
- Knowledge of React terminology: [JSX](https://reactjs.org/docs/introducing-jsx.html), [State](https://reactjs.org/docs/state-and-lifecycle.html), [Function Components, Props](https://reactjs.org/docs/components-and-props.html), and [Hooks](https://reactjs.org/docs/hooks-intro.html)
- Knowledge of [asynchronous JavaScript](https://javascript.info/promise-basics) and [making AJAX requests](https://javascript.info/fetch)

:::

**If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux**. We'll be here when you're ready!

You should make sure that you have the React and Redux DevTools extensions installed in your browser:

- React DevTools Extension:
  - [React DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [React DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- Redux DevTools Extension:
  - [Redux DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
  - [Redux DevTools Extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

## What is Redux?

It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?

**Redux is a pattern and library for managing and updating application state, using events called "actions".** It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

### Why Should I Use Redux?

Redux helps you manage "global" state - state that is needed across many parts of your application.

**The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur**. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

### When Should I Use Redux?

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

Redux is more useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

**Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.**

:::info Want to Know More?

If you're not sure whether Redux is a good choice for your app, these resources give some more guidance:

- **[When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)**
- **[The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
- **[Redux FAQ: When should I use Redux?](../../faq/General.md#when-should-i-use-redux)**
- **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**

:::

### Redux Libraries and Tools

Redux is a small standalone JS library. However, it is commonly used with several other packages:

#### React-Redux

Redux can integrate with any UI framework, and is most frequently used with React. [**React-Redux**](https://react-redux.js.org/) is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

#### Redux Toolkit

[**Redux Toolkit**](https://redux-toolkit.js.org) is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

#### Redux DevTools Extension

The [**Redux DevTools Extension**](https://github.com/zalmoxisus/redux-devtools-extension) shows a history of the changes to the state in your Redux store over time. This allows you to debug your applications effectively, including using powerful techniques like "time-travel debugging".

## Redux Terms and Concepts

Before we dive into some actual code, let's talk about some of the terms and concepts you'll need to know to use Redux.

### State Management

Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:

```jsx
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}
```

It is a self-contained app with the following parts:

- The **state**, the source of truth that drives our app;
- The **view**, a declarative description of the UI based on the current state
- The **actions**, the events that occur in the app based on user input, and trigger updates in the state

This is a small example of **"one-way data flow"**:

- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

![One-way data flow](/img/tutorials/essentials/one-way-data-flow.png)

However, the simplicity can break down when we have **multiple components that need to share and use the same state**, especially if those components are located in different parts of the application. Sometimes this can be solved by ["lifting state up"](https://reactjs.org/docs/lifting-state-up.html) to parent components, but that doesn't always help.

One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!

By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.

This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

### Immutability

"Mutable" means "changeable". If something is "immutable", it can never be changed.

JavaScript objects and arrays are all mutable by default. If I create an object, I can change the contents of its fields. If I create an array, I can change the contents as well:

```js
const obj = { a: 1, b: 2 }
// still the same object outside, but the contents have changed
obj.b = 3

const arr = ['a', 'b']
// In the same way, we can change the contents of this array
arr.push('c')
arr[1] = 'd'
```

This is called _mutating_ the object or array. It's the same object or array reference in memory, but now the contents inside the object have changed.

**In order to update values immutably, your code must make _copies_ of existing objects/arrays, and then modify the copies**.

We can do this by hand using JavaScript's array / object spread operators, as well as array methods that return new copies of the array instead of mutating the original array:

```js
const obj = {
  a: {
    // To safely update obj.a.c, we have to copy each piece
    c: 3
  },
  b: 2
}

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42
  }
}

const arr = ['a', 'b']
// Create a new copy of arr, with "c" appended to the end
const arr2 = arr.concat('c')

// or, we can make a copy of the original array:
const arr3 = arr.slice()
// and mutate the copy:
arr3.push('c')
```

**Redux expects that all state updates are done immutably**. We'll look at where and how this is important a bit later, as well as some easier ways to write immutable update logic.

:::info Want to Know More?

For more info on how immutability works in JavaScript, see:

- [A Visual Guide to References in JavaScript](https://daveceddia.com/javascript-references/)
- [Immutability in React and Redux: The Complete Guide](https://daveceddia.com/react-redux-immutability-guide/)

:::

### Terminology

There are some important Redux terms that you'll need to be familiar with before we continue:

#### Actions

An **action** is a plain JavaScript object that has a `type` field. **You can think of an action as an event that describes something that happened in the application**.

The `type` field should be a string that gives this action a descriptive name, like `"todos/todoAdded"`. We usually write that type string like `"domain/eventName"`, where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

An action object can have other fields with additional information about what happened. By convention, we put that information in a field called `payload`.

A typical action object might look like this:

```js
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

#### Action Creators

An **action creator** is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

```js
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

#### Reducers

A **reducer** is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. **You can think of a reducer as an event listener which handles events based on the received action (event) type.**

:::info

"Reducer" functions get their name because they're similar to the kind of callback function you pass to the [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method.

:::

Reducers must _always_ follow some specific rules:

- They should only calculate the new state value based on the `state` and `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"

We'll talk more about the rules of reducers later, including why they're important and how to follow them correctly.

The logic inside reducer functions typically follows the same series of steps:

- Check to see if the reducer cares about this action
  - If so, make a copy of the state, update the copy with new values, and return it
- Otherwise, return the existing state unchanged

Here's a small example of a reducer, showing the steps that each reducer should follow:

```js
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

Reducers can use any kind of logic inside to decide what the new state should be: `if/else`, `switch`, loops, and so on.

<DetailedExplanation title="Detailed Explanation: Why Are They Called 'Reducers?'" >

The [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method lets you take an array of values, process each item in the array one at a time, and return a single final result. You can think of it as "reducing the array down to one value".

`Array.reduce()` takes a callback function as an argument, which will be called one time for each item in the array. It takes two arguments:

- `previousResult`, the value that your callback returned last time
- `currentItem`, the current item in the array

The first time that the callback runs, there isn't a `previousResult` available, so we need to also pass in an initial value that will be used as the first `previousResult`.

If we wanted to add together an array of numbers to find out what the total is, we could write a reduce callback that looks like this:

```js
const numbers = [2, 5, 8]

const addNumbers = (previousResult, currentItem) => {
  console.log({ previousResult, currentItem })
  return previousResult + currentItem
}

const initialValue = 0

const total = numbers.reduce(addNumbers, initialValue)
// {previousResult: 0, currentItem: 2}
// {previousResult: 2, currentItem: 5}
// {previousResult: 7, currentItem: 8}

console.log(total)
// 15
```

Notice that this `addNumbers` "reduce callback" function doesn't need to keep track of anything itself. It takes the `previousResult` and `currentItem` arguments, does something with them, and returns a new result value.

**A Redux reducer function is exactly the same idea as this "reduce callback" function!** It takes a "previous result" (the `state`), and the "current item" (the `action` object), decides a new state value based on those arguments, and returns that new state.

If we were to create an array of Redux actions, call `reduce()`, and pass in a reducer function, we'd get a final result the same way:

```js
const actions = [
  { type: 'counter/increment' },
  { type: 'counter/increment' },
  { type: 'counter/increment' }
]

const initialState = { value: 0 }

const finalResult = actions.reduce(counterReducer, initialState)
console.log(finalResult)
// {value: 3}
```

We can say that **Redux reducers reduce a set of actions (over time) into a single state**. The difference is that with `Array.reduce()` it happens all at once, and with Redux, it happens over the lifetime of your running app.

</DetailedExplanation>

#### Store

The current Redux application state lives in an object called the **store** .

The store is created by passing in a reducer, and has a method called `getState` that returns the current state value:

```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

#### Dispatch

The Redux store has a method called `dispatch`. **The only way to update the state is to call `store.dispatch()` and pass in an action object**. The store will run its reducer function and save the new state value inside, and we can call `getState()` to retrieve the updated value:

```js
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

**You can think of dispatching actions as "triggering an event"** in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

We typically call action creators to dispatch the right action:

```js
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
// {value: 2}
```

#### Selectors

**Selectors** are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

```js
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```

### Redux Application Data Flow

Earlier, we talked about "one-way data flow", which describes this sequence of steps to update the app:

- State describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens (such as a user clicking a button), the state is updated based on what occurred
- The UI re-renders based on the new state

For Redux specifically, we can break these steps into more detail:

- Initial setup:
  - A Redux store is created using a root reducer function
  - The store calls the root reducer once, and saves the return value as its initial `state`
  - When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
- Updates:
  - Something happens in the app, such as a user clicking a button
  - The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/increment'})`
  - The store runs the reducer function again with the previous `state` and the current `action`, and saves the return value as the new `state`
  - The store notifies all parts of the UI that are subscribed that the store has been updated
  - Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
  - Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

Here's what that data flow looks like visually:

![Redux data flow diagram](/img/tutorials/essentials/ReduxDataFlowDiagram.gif)

## What You've Learned

Redux does have a number of new terms and concepts to remember. As a reminder, here's what we just covered:

:::tip Summary

- **Redux is a library for managing global application state**
  - Redux is typically used with the React-Redux library for integrating Redux and React together
  - Redux Toolkit is the recommended way to write Redux logic
- **Redux uses a "one-way data flow" app structure**
  - State describes the condition of the app at a point in time, and UI renders based on that state
  - When something happens in the app:
    - The UI dispatches an action
    - The store runs the reducers, and the state is updated based on what occurred
    - The store notifies the UI that the state has changed
  - The UI re-renders based on the new state
- **Redux uses several types of code**
  - _Actions_ are plain objects with a `type` field, and describe "what happened" in the app
  - _Reducers_ are functions that calculate a new state value based on previous state + an action
  - A Redux _store_ runs the root reducer whenever an action is _dispatched_

:::

## What's Next?

We've seen each of the individual pieces of a Redux app. Next, continue on to [Part 2: Redux App Structure](./part-2-app-structure.md), where we'll look at a full working example to see how the pieces fit together.

---
id: part-2-app-structure
title: 'Redux Essentials, Part 2: Redux App Structure'
sidebar_label: 'Redux App Structure'
description: 'The official Redux Essentials tutorial: learn the structure of a typical React + Redux app'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- The structure of a typical React + Redux app
- How to view state changes in the Redux DevTools Extension

:::

## Introduction

In [Part 1: Redux Overview and Concepts](./part-1-overview-concepts.md), we looked at why Redux is useful, the terms and concepts used to describe different parts of Redux code, and how data flows through a Redux app.

Now, let's look at a real working example to see how these pieces fit together.

## The Counter Example App

The sample project we'll look at is a small counter application that lets us add or subtract from a number as we click buttons. It may not be very exciting, but it shows all the important pieces of a React+Redux application in action.

The project has been created using [the official Redux template for Create-React-App](https://github.com/reduxjs/cra-template-redux). Out of the box, it has already been configured with a standard Redux application structure, using [Redux Toolkit](https://redux-toolkit.js.org) to create the Redux store and logic, and [React-Redux](https://react-redux.js.org) to connect together the Redux store and the React components.

Here's the live version of the project. You can play around with it by clicking the buttons in the app preview on the right, and browse through the source files on the left.

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-counter-example/tree/master/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.js&theme=dark&runonclick=1"
  title="redux-essentials-example"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

If you'd like to try create this project on your own computer, you can [start a new Create-React-App project](https://create-react-app.dev/docs/getting-started#selecting-a-template) using our Redux template:

```
npx create-react-app redux-essentials-example --template redux
```

### Using the Counter App

The counter app has already been set up to let us watch what happens inside as we use it.

Open up your browser's DevTools. Then, choose the "Redux" tab in the DevTools, and click the "State" button in the upper-right toolbar. You should see something that looks like this:

![Redux DevTools: initial app state](/img/tutorials/essentials/devtools-initial.png)

On the right, we can see that our Redux store is starting off with an app state value that looks like this:

```js
{
  counter: {
    value: 0
  }
}
```

The DevTools will show us how the store state changes as we use the app.

Let's play with the app first to see what it does. Click the "+" button in the app, then look at the "Diff" tab in the Redux DevTools:

![Redux DevTools: first dispatched action](/img/tutorials/essentials/devtools-first-action.png)

We can see two important things here:

- When we clicked the "+" button, an action with a type of `"counter/increment"` was dispatched to the store
- When that action was dispatched, the `state.counter.value` field changed from `0` to `1`

Now try these steps:

- Click the "+" button again. The displayed value should now be 2.
- Click the "-" button once. The displayed value should now be 1.
- Click the "Add Amount" button. The displayed value should now be 3.
- Change the number "2" in the textbox to a "3"
- Click the "Add Async" button. You should see a progress bar fill the button, and after a couple seconds, the displayed value should change to 6.

Go back to the Redux DevTools. You should see a total of five actions dispatched, one for each time we clicked a button . Now select the last `"counter/incrementByAmount"` entry from the list on the left, and click the "Action" tab on the right side:

![Redux DevTools: done clicking buttons](/img/tutorials/essentials/devtools-done-clicking.png)

We can see that this action object looked like this:

```js
{
  type: 'counter/incrementByAmount',
  payload: 3
}
```

And if you click the "Diff" tab, you can see that the `state.counter.value` field changed from a `3` to a `6` in response to that action.

The ability to see what is happening inside of our app and how our state is changing over time is very powerful!

The DevTools have several more commands and options to help you debug your app. Try clicking the "Trace" tab in the upper right. You should see a JavaScript function stack trace in the panel, with several sections of source code showing the lines that were executing when the action reached the store. One line in particular should be highlighted: the line of code where we dispatched this action from the `<Counter>` component:

![Redux DevTools: action stack traces](/img/tutorials/essentials/devtools-action-stacktrace.png)

This makes it easier to trace what part of the code dispatched a specific action.

## Application Contents

Now that you know what the app does, let's look at how it works.

Here are the key files that make up this application:

- `/src`
  - `index.js`: the starting point for the app
  - `App.js`: the top-level React component
  - `/app`
    - `store.js`: creates the Redux store instance
  - `/features`
    - `/counter`
      - `Counter.js`: a React component that shows the UI for the counter feature
      - `counterSlice.js`: the Redux logic for the counter feature

Let's start by looking at how the Redux store is created.

### Creating the Redux Store

Open up `app/store.js`, which should look like this:

```js title="app/store.js"
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

The Redux store is created using the `configureStore` function from Redux Toolkit. `configureStore` requires that we pass in a `reducer` argument.

Our application might be made up of many different features, and each of those features might have its own reducer function. When we call `configureStore`, we can pass in all of the different reducers in an object. The key names in the object will define the keys in our final state value.

We have a file named `features/counter/counterSlice.js` that exports a reducer function for the counter logic. We can import that `counterReducer` function here, and include it when we create the store.

When we pass in an object like `{counter: counterReducer}`, that says that we want to have a `state.counter` section of our Redux state object, and that we want the `counterReducer` function to be in charge of deciding if and how to update the `state.counter` section whenever an action is dispatched.

Redux allows store setup to be customized with different kinds of plugins ("middleware" and "enhancers"). `configureStore` automatically adds several middleware to the store setup by default to provide a good developer experience, and also sets up the store so that the Redux DevTools Extension can inspect its contents.

#### Redux Slices

**A "slice" is a collection of Redux reducer logic and actions for a single feature in your app**, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

For example, in a blogging app, our store setup might look like:

```js
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import postsReducer from '../features/posts/postsSlice'
import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
  }
})
```

In that example, `state.users`, `state.posts`, and `state.comments` are each a separate "slice" of the Redux state. Since `usersReducer` is responsible for updating the `state.users` slice, we refer to it as a "slice reducer" function.

<DetailedExplanation title="Detailed Explanation: Reducers and State Structure">

A Redux store needs to have a single "root reducer" function passed in when it's created. So if we have many different slice reducer functions, how do we get a single root reducer instead, and how does this define the contents of the Redux store state?

If we tried calling all of the slice reducers by hand, it might look like this:

```js
function rootReducer(state = {}, action) {
  return {
    users: usersReducer(state.users, action),
    posts: postsReducer(state.posts, action),
    comments: commentsReducer(state.comments, action)
  }
}
```

That calls each slice reducer individually, passes in the specific slice of the Redux state, and includes each return value in the final new Redux state object.

Redux has a function called [`combineReducers`](../../api/combineReducers.md) that does this for us automatically. It accepts an object full of slice reducers as its argument, and returns a function that calls each slice reducer whenever an action is dispatched. The result from each slice reducer are all combined together into a single object as the final result. We can do the same thing as the previous example using `combineReducers`:

```js
const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
})
```

When we pass an object of slice reducers to `configureStore`, it passes those to `combineReducers` for us to generate the root reducer.

As we saw earlier, you can also pass a reducer function directly as the `reducer` argument:

```js
const store = configureStore({
  reducer: rootReducer
})
```

</DetailedExplanation>

### Creating Slice Reducers and Actions

Since we know that the `counterReducer` function is coming from `features/counter/counterSlice.js`, let's see what's in that file, piece by piece.

```js title="features/counter/counterSlice.js"
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

Earlier, we saw that clicking the different buttons in the UI dispatched three different Redux action types:

- `{type: "counter/increment"}`
- `{type: "counter/decrement"}`
- `{type: "counter/incrementByAmount"}`

We know that actions are plain objects with a `type` field, the `type` field is always a string, and we typically have "action creator" functions that create and return the action objects. So where are those action objects, type strings, and action creators defined?

We _could_ write those all by hand, every time. But, that would be tedious. Besides, what's _really_ important in Redux is the reducer functions, and the logic they have for calculating new state.

Redux Toolkit has a function called `createSlice`, which takes care of the work of generating action type strings, action creator functions, and action objects. All you have to do is define a name for this slice, write an object that has some reducer functions in it, and it generates the corresponding action code automatically. The string from the `name` option is used as the first part of each action type, and the key name of each reducer function is used as the second part. So, the `"counter"` name + the `"increment"` reducer function generated an action type of `{type: "counter/increment"}`. (After all, why write this by hand if the computer can do it for us!)

In addition to the `name` field, `createSlice` needs us to pass in the initial state value for the reducers, so that there is a `state` the first time it gets called. In this case, we're providing an object with a `value` field that starts off at 0.

We can see here that there are three reducer functions, and that corresponds to the three different action types that were dispatched by clicking the different buttons.

`createSlice` automatically generates action creators with the same names as the reducer functions we wrote. We can check that by calling one of them and seeing what it returns:

```js
console.log(counterSlice.actions.increment())
// {type: "counter/increment"}
```

It also generates the slice reducer function that knows how to respond to all these action types:

```js
const newState = counterSlice.reducer(
  { value: 10 },
  counterSlice.actions.increment()
)
console.log(newState)
// {value: 11}
```

### Rules of Reducers

We said earlier that reducers must **always** follow some special rules:

- They should only calculate the new state value based on the `state` and `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
- They must not do any asynchronous logic or other "side effects"

But why are these rules important? There's a few different reasons:

- One of the goals of Redux is to make your code predictable. When a function's output is only calculated from the input arguments, it's easier to understand how that code works, and to test it.
- On the other hand, if a function depends on variables outside itself, or behaves randomly, you never know what will happen when you run it.
- If a function modifies other values, including its arguments, that can change the way the application works unexpectedly. This can be a common source of bugs, such as "I updated my state, but now my UI isn't updating when it should!"
- Some of the Redux DevTools capabilities depend on having your reducers follow these rules correctly

The rule about "immutable updates" is particularly important, and worth talking about further.

### Reducers and Immutable Updates

Earlier, we talked about "mutation" (modifying existing object/array values) and "immutability" (treating values as something that cannot be changed).

In Redux, **our reducers are _never_ allowed to mutate the original / current state values!**

```js
// ❌ Illegal - by default, this will mutate the state!
state.value = 123
```

:::

There are several reasons why you must not mutate state in Redux:

- It causes bugs, such as the UI not updating properly to show the latest values
- It makes it harder to understand why and how the state has been updated
- It makes it harder to write tests
- It breaks the ability to use "time-travel debugging" correctly
- It goes against the intended spirit and usage patterns for Redux

So if we can't change the originals, how do we return an updated state?

:::tip

**Reducers can only make _copies_ of the original values, and then they can mutate the copies.**

```js
// ✅ This is safe, because we made a copy
return {
  ...state,
  value: 123
}
```

:::

We already saw that we can [write immutable updates by hand](./part-1-overview-concepts.md#immutability), by using JavaScript's array / object spread operators and other functions that return copies of the original values. However, if you're thinking that "writing immutable updates by hand this way looks hard to remember and do correctly"... yeah, you're right! :)

Writing immutable update logic by hand _is_ hard, and accidentally mutating state in reducers is the single most common mistake Redux users make.

**That's why Redux Toolkit's `createSlice` function lets you write immutable updates an easier way!**

`createSlice` uses a library called [Immer](https://immerjs.github.io/immer/) inside. Immer uses a special JS tool called a `Proxy` to wrap the data you provide, and lets you write code that "mutates" that wrapped data. But, **Immer tracks all the changes you've tried to make, and then uses that list of changes to return a safely immutably updated value**, as if you'd written all the immutable update logic by hand.

So, instead of this:

```js
function handwrittenReducer(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId],
          fourth: action.someValue
        }
      }
    }
  }
}
```

You can write code that looks like this:

```js
function reducerWithImmer(state, action) {
  state.first.second[action.someId].fourth = action.someValue
}
```

That's a lot easier to read!

But, here's something _very_ important to remember:

:::warning

**You can _only_ write "mutating" logic in Redux Toolkit's `createSlice` and `createReducer` because they use Immer inside! If you write mutating logic in reducers without Immer, it _will_ mutate the state and cause bugs!**

:::

With that in mind, let's go back and look at the actual reducers from the counter slice.

```js title="features/counter/counterSlice.js"
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // highlight-next-line
      state.value += action.payload
    }
  }
})
```

We can see that the `increment` reducer will always add 1 to `state.value`. Because Immer knows we've made changes to the draft `state` object, we don't have to actually return anything here. In the same way, the `decrement` reducer subtracts 1.

In both of those reducers, we don't actually need to have our code look at the `action` object. It will be passed in anyway, but since we don't need it, we can skip declaring `action` as a parameter for the reducers.

On the other hand, the `incrementByAmount` reducer _does_ need to know something: how much it should be adding to the counter value. So, we declare the reducer as having both `state` and `action` arguments. In this case, we know that the amount we typed into the textbox is being put into the `action.payload` field, so we can add that to `state.value`.

:::info Want to Know More?

For more information on immutability and writing immutable updates, see [the "Immutable Update Patterns" docs page](../../usage/structuring-reducers/ImmutableUpdatePatterns.md) and [The Complete Guide to Immutability in React and Redux](https://daveceddia.com/react-redux-immutability-guide/).

:::

### Writing Async Logic with Thunks

So far, all the logic in our application has been synchronous. Actions are dispatched, the store runs the reducers and calculates the new state, and the dispatch function finishes. But, the JavaScript language has many ways to write code that is asynchronous, and our apps normally have async logic for things like fetching data from an API. We need a place to put that async logic in our Redux apps.

A **thunk** is a specific kind of Redux function that can contain asynchronous logic. Thunks are written using two functions:

- An inside thunk function, which gets `dispatch` and `getState` as arguments
- The outside creator function, which creates and returns the thunk function

The next function that's exported from `counterSlice` is an example of a thunk action creator:

```js title="features/counter/counterSlice.js"
// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
```

We can use them the same way we use a typical Redux action creator:

```js
store.dispatch(incrementAsync(5))
```

However, using thunks requires that the `redux-thunk` _middleware_ (a type of plugin for Redux) be added to the Redux store when it's created. Fortunately, Redux Toolkit's `configureStore` function already sets that up for us automatically, so we can go ahead and use thunks here.

When you need to make AJAX calls to fetch data from the server, you can put that call in a thunk. Here's an example that's written a bit longer, so you can see how it's defined:

```js title="features/counter/counterSlice.js"
// the outside "thunk creator" function
const fetchUserById = userId => {
  // the inside "thunk function"
  return async (dispatch, getState) => {
    try {
      // make an async call in the thunk
      const user = await userAPI.fetchById(userId)
      // dispatch an action when we get the response back
      dispatch(userLoaded(user))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}
```

We'll see thunks being used in [Part 5: Async Logic and Data Fetching](./part-5-async-logic.md)

<DetailedExplanation title="Detailed Explanation: Thunks and Async Logic">

We know that we're not allowed to put any kind of async logic in reducers. But, that logic has to live somewhere.

If we have access to the Redux store, we could write some async code and call `store.dispatch()` when we're done:

```js
const store = configureStore({ reducer: counterReducer })

setTimeout(() => {
  store.dispatch(increment())
}, 250)
```

But, in a real Redux app, we're not allowed to import the store into other files, especially in our React components, because it makes that code harder to test and reuse.

In addition, we often need to write some async logic that we know will be used with _some_ store, eventually, but we don't know _which_ store.

The Redux store can be extended with "middleware", which are a kind of add-on or plugin that can add extra abilities. The most common reason to use middleware is to let you write code that can have async logic, but still talk to the store at the same time. They can also modify the store so that we can call `dispatch()` and pass in values that are _not_ plain action objects, like functions or Promises.

The Redux Thunk middleware modifies the store to let you pass functions into `dispatch`. In fact, it's short enough we can paste it here:

```js
const thunkMiddleware =
  ({ dispatch, getState }) =>
  next =>
  action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }
```

It looks to see if the "action" that was passed into `dispatch` is actually a function instead of a plain action object. If it's actually a function, it calls the function, and returns the result. Otherwise, since this must be an action object, it passes the action forward to the store.

This gives us a way to write whatever sync or async code we want, while still having access to `dispatch` and `getState`.

</DetailedExplanation>

There's one more function in this file, but we'll talk about that in a minute when we look at the `<Counter>` UI component.

:::info Want to Know More?

See [the Redux Thunk docs](https://github.com/reduxjs/redux-thunk), the post [What the heck is a thunk?](https://daveceddia.com/what-is-a-thunk/) and the [Redux FAQ entry on "why do we use middleware for async?"](../../faq/Actions.md#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior) for more information.

:::

### The React Counter Component

Earlier, we saw what a standalone React `<Counter>` component looks like. Our React+Redux app has a similar `<Counter>` component, but it does a few things differently.

We'll start by looking at the `Counter.js` component file:

```jsx title="features/counter/Counter.js"
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div className={styles.row}>
        // highlight-start
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        // highlight-end
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}
```

Like with the earlier plain React example, we have a function component called `Counter`, that stores some data in a `useState` hook.

However, in our component, it doesn't look like we're storing the actual current counter value as state. There _is_ a variable called `count`, but it's not coming from a `useState` hook.

While React includes several built-in hooks like `useState` and `useEffect`, other libraries can create their own [custom hooks](https://reactjs.org/docs/hooks-custom.html) that use React's hooks to build custom logic.

The [React-Redux library](https://react-redux.js.org/) has [a set of custom hooks that allow your React component to interact with a Redux store](https://react-redux.js.org/api/hooks).

#### Reading Data with `useSelector`

First, the `useSelector` hook lets our component extract whatever pieces of data it needs from the Redux store state.

Earlier, we saw that we can write "selector" functions, which take `state` as an argument and return some part of the state value.

Our `counterSlice.js` has this selector function at the bottom:

```js title="features/counter/counterSlice.js"
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value
```

If we had access to a Redux store, we could retrieve the current counter value as:

```js
const count = selectCount(store.getState())
console.log(count)
// 0
```

Our components can't talk to the Redux store directly, because we're not allowed to import it into component files. But, `useSelector` takes care of talking to the Redux store behind the scenes for us. If we pass in a selector function, it calls `someSelector(store.getState())` for us, and returns the result.

So, we can get the current store counter value by doing:

```js
const count = useSelector(selectCount)
```

We don't have to _only_ use selectors that have already been exported, either. For example, we could write a selector function as an inline argument to `useSelector`:

```js
const countPlusTwo = useSelector(state => state.counter.value + 2)
```

Any time an action has been dispatched and the Redux store has been updated, `useSelector` will re-run our selector function. If the selector returns a different value than last time, `useSelector` will make sure our component re-renders with the new value.

#### Dispatching Actions with `useDispatch`

Similarly, we know that if we had access to a Redux store, we could dispatch actions using action creators, like `store.dispatch(increment())`. Since we don't have access to the store itself, we need some way to have access to just the `dispatch` method.

The `useDispatch` hook does that for us, and gives us the actual `dispatch` method from the Redux store:

```js
const dispatch = useDispatch()
```

From there, we can dispatch actions when the user does something like clicking on a button:

```jsx title="features/counter/Counter.js"
<button
  className={styles.button}
  aria-label="Increment value"
  onClick={() => dispatch(increment())}
>
  +
</button>
```

### Component State and Forms

By now you might be wondering, "Do I always have to put all my app's state into the Redux store?"

The answer is **NO. Global state that is needed across the app should go in the Redux store. State that's only needed in one place should be kept in component state.**

In this example, we have an input textbox where the user can type in the next number to be added to the counter:

```jsx title="features/counter/Counter.js"
const [incrementAmount, setIncrementAmount] = useState('2')

// later
return (
  <div className={styles.row}>
    <input
      className={styles.textbox}
      aria-label="Set increment amount"
      value={incrementAmount}
      onChange={e => setIncrementAmount(e.target.value)}
    />
    <button
      className={styles.button}
      onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
    >
      Add Amount
    </button>
    <button
      className={styles.asyncButton}
      onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
    >
      Add Async
    </button>
  </div>
)
```

We _could_ keep the current number string in the Redux store, by dispatching an action in the input's `onChange` handler and keeping it in our reducer. But, that doesn't give us any benefit. The only place that text string is used is here, in the `<Counter>` component. (Sure, there's only one other component in this example: `<App>`. But even if we had a larger application with many components, only `<Counter>` cares about this input value.)

So, it makes sense to keep that value in a `useState` hook here in the `<Counter>` component.

Similarly, if we had a boolean flag called `isDropdownOpen`, no other components in the app would care about that - it should really stay local to this component.

**In a React + Redux app, your global state should go in the Redux store, and your local state should stay in React components.**

If you're not sure where to put something, here are some common rules of thumb for determining what kind of data should be put into Redux:

- Do other parts of the application care about this data?
- Do you need to be able to create further derived data based on this original data?
- Is the same data being used to drive multiple components?
- Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
- Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
- Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?

This is also a good example of how to think about forms in Redux in general. **Most form state probably shouldn't be kept in Redux.** Instead, keep the data in your form components as you're editing it, and then dispatch Redux actions to update the store when the user is done.

One other thing to note before we move on: remember that `incrementAsync` thunk from `counterSlice.js`? We're using it here in this component. Notice that we use it the same way we dispatch the other normal action creators. This component doesn't care whether we're dispatching a normal action or starting some async logic. It only knows that when you click that button, it dispatches something.

### Providing the Store

We've seen that our components can use the `useSelector` and `useDispatch` hooks to talk to the Redux store. But, since we didn't import the store, how do those hooks know what Redux store to talk to?

Now that we've seen all the different pieces of this application, it's time to circle back to the starting point of this application and see how the last pieces of the puzzle fit together.

```jsx title="index.js"
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
// highlight-next-line
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  // highlight-start
  <Provider store={store}>
    <App />
  </Provider>,
  // highlight-end
  document.getElementById('root')
)
```

We always have to call `ReactDOM.render(<App />)` to tell React to start rendering our root `<App>` component. In order for our hooks like `useSelector` to work right, we need to use a component called `<Provider>` to pass down the Redux store behind the scenes so they can access it.

We already created our store in `app/store.js`, so we can import it here. Then, we put our `<Provider>` component around the whole `<App>`, and pass in the store: `<Provider store={store}>`.

Now, any React components that call `useSelector` or `useDispatch` will be talking to the Redux store we gave to the `<Provider>`.

## What You've Learned

Even though the counter example app is pretty small, it showed all the key pieces of a React + Redux app working together. Here's what we covered:

:::tip Summary

- **We can create a Redux store using the Redux Toolkit `configureStore` API**
  - `configureStore` accepts a `reducer` function as a named argument
  - `configureStore` automatically sets up the store with good default settings
- **Redux logic is typically organized into files called "slices"**
  - A "slice" contains the reducer logic and actions related to a specific feature / section of the Redux state
  - Redux Toolkit's `createSlice` API generates action creators and action types for each individual reducer function you provide
- **Redux reducers must follow specific rules**
  - Should only calculate a new state value based on the `state` and `action` arguments
  - Must make _immutable updates_ by copying the existing state
  - Cannot contain any asynchronous logic or other "side effects"
  - Redux Toolkit's `createSlice` API uses Immer to allow "mutating" immutable updates
- **Async logic is typically written in special functions called "thunks"**
  - Thunks receive `dispatch` and `getState` as arguments
  - Redux Toolkit enables the `redux-thunk` middleware by default
- **React-Redux allows React components to interact with a Redux store**
  - Wrapping the app with `<Provider store={store}>` enables all components to use the store
  - Global state should go in the Redux store, local state should stay in React components

:::

## What's Next?

Now that you've seen all the pieces of a Redux app in action, it's time to write your own! For the rest of this tutorial, you'll be building a larger example app that uses Redux. Along the way, we'll cover all the key ideas you need to know to use Redux the right way.

Continue on to [Part 3: Basic Redux Data Flow](./part-3-data-flow.md) to get started building the example app.

---
id: part-3-data-flow
title: 'Redux Essentials, Part 3: Basic Redux Data Flow'
sidebar_label: 'Basic Redux Data Flow'
description: 'The official Redux Essentials tutorial: learn how data flows in a React + Redux app'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- How to add "slices" of reducer logic to the Redux store with `createSlice`
- Reading Redux data in components with the `useSelector` hook
- Dispatching actions in components with the `useDispatch` hook

:::

:::info Prerequisites

- Familiarity with key Redux terms and concepts like "actions", "reducers", "store", and "dispatching". (See [**Part 1: Redux Overview and Concepts**](./part-1-overview-concepts.md) for explanations of these terms.)

:::

## Introduction

In [Part 1: Redux Overview and Concepts](./part-1-overview-concepts.md), we looked at how Redux can help us build maintainable apps by giving us a single central place to put global app state. We also talked about core Redux concepts like dispatching action objects, using reducer functions that return new state values, and writing async logic using thunks. In [Part 2: Redux App Structure](./part-2-app-structure.md), we saw how APIs like `configureStore` and `createSlice` from Redux Toolkit and `Provider` and `useSelector` from React-Redux work together to let us write Redux logic and interact with that logic from our React components.

Now that you have some idea of what these pieces are, it's time to put that knowledge into practice. We're going to build a small social media feed app, which will include a number of features that demonstrate some real-world use cases. This will help you understand how to use Redux in your own applications.

:::caution

The example app is not meant as a complete production-ready project. The goal is to help you learn the Redux APIs and typical usage patterns, and point you in the right direction using some limited examples. Also, some of the early pieces we build will be updated later on to show better ways to do things. Please read through the whole tutorial to see all the concepts in use.

:::

### Project Setup

For this tutorial, we've created a pre-configured starter project that already has React and Redux set up, includes some default styling, and has a fake REST API that will allow us to write actual API requests in our app. You'll use this as the basis for writing the actual application code.

To get started, you can open and fork this CodeSandbox:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/master/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-quick-start-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

You can also [clone the same project from this Github repo](https://github.com/reduxjs/redux-essentials-example-app). After cloning the repo, you can install the tools for the project with `npm install`, and start it with `npm start`.

If you'd like to see the final version of what we're going to build, you can check out [the **`tutorial-steps` branch**](https://github.com/reduxjs/redux-essentials-example-app/tree/tutorial-steps), or [look at the final version in this CodeSandbox](https://codesandbox.io/s/github/reduxjs/redux-essentials-example-app/tree/tutorial-steps).

> We'd like to thank [Tania Rascia](https://www.taniarascia.com/), whose [Using Redux with React](https://www.taniarascia.com/redux-react-guide/) tutorial helped inspire the example in this page. It also uses her [Primitive UI CSS starter](https://taniarascia.github.io/primitive/) for styling.

#### Creating a New Redux + React Project

Once you've finished this tutorial, you'll probably want to try working on your own projects. **We recommend using the [Redux templates for Create-React-App](https://github.com/reduxjs/cra-template-redux) as the fastest way to create a new Redux + React project**. It comes with Redux Toolkit and React-Redux already configured, using [the same "counter" app example you saw in Part 1](./part-1-overview-concepts.md). This lets you jump right into writing your actual application code without having to add the Redux packages and set up the store.

If you want to know specific details on how to add Redux to a project, see this explanation:

<DetailedExplanation title="Detailed Explanation: Adding Redux to a React Project">

The Redux template for CRA comes with Redux Toolkit and React-Redux already configured. If you're setting up a new project from scratch without that template, follow these steps:

- Add the `@reduxjs/toolkit` and `react-redux` packages
- Create a Redux store using RTK's `configureStore` API, and pass in at least one reducer function
- Import the Redux store into your application's entry point file (such as `src/index.js`)
- Wrap your root React component with the `<Provider>` component from React-Redux, like:

```jsx
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

</DetailedExplanation>

#### Exploring the Initial Project

Let's take a quick look at what the initial project contains:

- `/public`: the HTML host page template and other static files like icons
- `/src`
  - `index.js`: the entry point file for the application. It renders the React-Redux `<Provider>` component and the main `<App>` component.
  - `App.js`: the main application component. Renders the top navbar and handles client-side routing for the other content.
  - `index.css`: styles for the complete application
  - `/api`
    - `client.js`: a small AJAX request client that allows us to make GET and POST requests
    - `server.js`: provides a fake REST API for our data. Our app will fetch data from these fake endpoints later.
  - `/app`
    - `Navbar.js`: renders the top header and nav content
    - `store.js`: creates the Redux store instance

If you load the app now, you should see the header and a welcome message. We can also open up the Redux DevTools Extension and see that our initial Redux state is entirely empty.

With that, let's get started!

## Main Posts Feed

The main feature for our social media feed app will be a list of posts. We'll add several more pieces to this feature as we go along, but to start off, our first goal is to only show the list of post entries on screen.

### Creating the Posts Slice

The first step is to create a new Redux "slice" that will contain the data for our posts. Once we have that data in the Redux store, we can create the React components to show that data on the page.

Inside of `src`, create a new `features` folder, put a `posts` folder inside of `features`, and add a new file named `postsSlice.js`.

We're going to use the Redux Toolkit `createSlice` function to make a reducer function that knows how to handle our posts data. Reducer functions need to have some initial data included so that the Redux store has those values loaded when the app starts up.

For now, we'll create an array with some fake post objects inside so that we can begin adding the UI.

We'll import `createSlice`, define our initial posts array, pass that to `createSlice`, and export the posts reducer function that `createSlice` generated for us:

```js title="features/posts/postsSlice.js"
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default postsSlice.reducer
```

Every time we create a new slice, we need to add its reducer function to our Redux store. We already have a Redux store being created, but right now it doesn't have any data inside. Open up `app/store.js`, import the `postsReducer` function, and update the call to `configureStore` so that the `postsReducer` is being passed as a reducer field named `posts`:

```js title="app/store.js"
import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})
```

This tells Redux that we want our top-level state object to have a field named `posts` inside, and all the data for `state.posts` will be updated by the `postsReducer` function when actions are dispatched.

We can confirm that this works by opening the Redux DevTools Extension and looking at the current state contents:

![Initial posts state](/img/tutorials/essentials/example-initial-posts.png)

### Showing the Posts List

Now that we have some posts data in our store, we can create a React component that shows the list of posts. All of the code related to our feed posts feature should go in the `posts` folder, so go ahead and create a new file named `PostsList.js` in there.

If we're going to render a list of posts, we need to get the data from somewhere. React components can read data from the Redux store using the `useSelector` hook from the React-Redux library. The "selector functions" that you write will be called with the entire Redux `state` object as a parameter, and should return the specific data that this component needs from the store.

Our initial `PostsList` component will read the `state.posts` value from the Redux store, then loop over the array of posts and show each of them on screen:

```jsx title="features/posts/PostsList.js"
import React from 'react'
import { useSelector } from 'react-redux'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
```

We then need to update the routing in `App.js` so that we show the `PostsList` component instead of the "welcome" message. Import the `PostsList` component into `App.js`, and replace the welcome text with `<PostsList />`. We'll also wrap it in a React Fragment, because we're going to add something else to the main page soon:

```jsx title="App.js"
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

// highlight-next-line
import { PostsList } from './features/posts/PostsList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              // highlight-start
              <React.Fragment>
                <PostsList />
              </React.Fragment>
              // highlight-end
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
```

Once that's added, the main page of our app should now look like this:

![Initial posts list](/img/tutorials/essentials/working_post_list.png)

Progress! We've added some data to the Redux store, and shown it on screen in a React component.

### Adding New Posts

It's nice to look at posts people have written, but we'd like to be able to write our own posts. Let's create an "Add New Post" form that lets us write posts and save them.

We'll create the empty form first and add it to the page. Then, we'll connect the form to our Redux store so that new posts are added when we click the "Save Post" button.

#### Adding the New Post Form

Create `AddPostForm.js` in our `posts` folder. We'll add a text input for the post title, and a text area for the body of the post:

```jsx title="features/posts/AddPostForm.js"
import React, { useState } from 'react'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button">Save Post</button>
      </form>
    </section>
  )
}
```

Import that component into `App.js`, and add it right above the `<PostsList />` component:

```jsx title="App.js"
<Route
  exact
  path="/"
  render={() => (
    <React.Fragment>
      // highlight-next-line
      <AddPostForm />
      <PostsList />
    </React.Fragment>
  )}
/>
```

You should see the form show up in the page right below the header.

#### Saving Post Entries

Now, let's update our posts slice to add new post entries to the Redux store.

Our posts slice is responsible for handling all updates to the posts data. Inside of the `createSlice` call, there's an object called `reducers`. Right now, it's empty. We need to add a reducer function inside of there to handle the case of a post being added.

Inside of `reducers`, add a function named `postAdded`, which will receive two arguments: the current `state` value, and the `action` object that was dispatched. Since the posts slice _only_ knows about the data it's responsible for, the `state` argument will be the array of posts by itself, and not the entire Redux state object.

The `action` object will have our new post entry as the `action.payload` field, and we'll put that new post object into the `state` array.

When we write the `postAdded` reducer function, `createSlice` will automatically generate an "action creator" function with the same name. We can export that action creator and use it in our UI components to dispatch the action when the user clicks "Save Post".

```js title="features/posts/postsSlice.js"
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // highlight-start
    postAdded(state, action) {
      state.push(action.payload)
    }
    // highlight-end
  }
})

// highlight-next-line
export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
```

:::warning

Remember: **reducer functions must _always_ create new state values immutably, by making copies!** It's safe to call mutating functions like `Array.push()` or modify object fields like `state.someField = someValue` inside of `createSlice()`, because it converts those mutations into safe immutable updates internally using the Immer library, but **don't try to mutate any data outside of `createSlice`!**

:::

#### Dispatching the "Post Added" Action

Our `AddPostForm` has text inputs and a "Save Post" button, but the button doesn't do anything yet. We need to add a click handler that will dispatch the `postAdded` action creator and pass in a new post object containing the title and content the user wrote.

Our post objects also need to have an `id` field. Right now, our initial test posts are using some fake numbers for their IDs. We could write some code that would figure out what the next incrementing ID number should be, but it would be better if we generated a random unique ID instead. Redux Toolkit has a `nanoid` function we can use for that.

:::info

We'll talk more about generating IDs and dispatching actions in [Part 4: Using Redux Data](./part-4-using-data.md).

:::

In order to dispatch actions from a component, we need access to the store's `dispatch` function. We get this by calling the `useDispatch` hook from React-Redux. We also need to import the `postAdded` action creator into this file.

Once we have the `dispatch` function available in our component, we can call `dispatch(postAdded())` in a click handler. We can take the title and content values from our React component `useState` hooks, generate a new ID, and put them together into a new post object that we pass to `postAdded()`.

```jsx title="features/posts/AddPostForm"
import React, { useState } from 'react'
// highlight-start
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postsSlice'
// highlight-end

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // highlight-next-line
  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  // highlight-start
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )

      setTitle('')
      setContent('')
    }
  }
  // highlight-end

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        {/* omit form inputs */}
        // highlight-next-line
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}
```

Now, try typing in a title and some text, and click "Save Post". You should see a new item for that post show up in the posts list.

**Congratulations! You've just built your first working React + Redux app!**

This shows the complete Redux data flow cycle:

- Our posts list read the initial set of posts from the store with `useSelector` and rendered the initial UI
- We dispatched the `postAdded` action containing the data for the new post entry
- The posts reducer saw the `postAdded` action, and updated the posts array with the new entry
- The Redux store told the UI that some data had changed
- The posts list read the updated posts array, and re-rendered itself to show the new post

All the new features we'll add after this will follow the same basic patterns you've seen here: adding slices of state, writing reducer functions, dispatching actions, and rendering the UI based on data from the Redux store.

We can check the Redux DevTools Extension to see the action we dispatched, and look at how the Redux state was updated in response to that action. If we click the `"posts/postAdded"` entry in the actions list, the "Action" tab should look like this:

![postAdded action contents](/img/tutorials/essentials/example-postAdded-action.png)

The "Diff" tab should also show us that `state.posts` had one new item added, which is at index 2.

Notice that our `AddPostForm` component has some React `useState` hooks inside, to keep track of the title and content values the user is typing in. Remember, **the Redux store should only contain data that's considered "global" for the application!** In this case, only the `AddPostForm` will need to know about the latest values for the input fields, so we want to keep that data in React component state instead of trying to keep the temporary data in the Redux store. When the user is done with the form, we dispatch a Redux action to update the store with the final values based on the user input.

## What You've Learned

Let's recap what you've learned in this section:

:::tip Summary

- **Redux state is updated by "reducer functions"**:
  - Reducers always calculate a new state _immutably_, by copying existing state values and modifying the copies with the new data
  - The Redux Toolkit `createSlice` function generates "slice reducer" functions for you, and lets you write "mutating" code that is turned into safe immutable updates
  - Those slice reducer functions are added to the `reducer` field in `configureStore`, and that defines the data and state field names inside the Redux store
- **React components read data from the store with the `useSelector` hook**
  - Selector functions receive the whole `state` object, and should return a value
  - Selectors will re-run whenever the Redux store is updated, and if the data they return has changed, the component will re-render
- **React components dispatch actions to update the store using the `useDispatch` hook**
  - `createSlice` will generate action creator functions for each reducer we add to a slice
  - Call `dispatch(someActionCreator())` in a component to dispatch an action
  - Reducers will run, check to see if this action is relevant, and return new state if appropriate
  - Temporary data like form input values should be kept as React component state. Dispatch a Redux action to update the store when the user is done with the form.

:::

Here's what the app looks like so far:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-1-postAdded/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-quick-start-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## What's Next?

Now that you know the basic Redux data flow, move on to [Part 4: Using Redux Data](./part-4-using-data.md), where we'll add some additional functionality to our app and see examples of how to work with the data that's already in the store.

---
id: part-4-using-data
title: 'Redux Essentials, Part 4: Using Redux Data'
sidebar_label: 'Using Redux Data'
description: 'The official Redux Essentials tutorial: learn how to work with complex Redux state in React components'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- Using Redux data in multiple React components
- Organizing logic that dispatches actions
- Writing more complex update logic in reducers

:::

:::info Prerequisites

- Understanding the [Redux data flow and React-Redux APIs from Part 3](./part-3-data-flow.md)
- Familiarity with [the React Router `<Link>` and `<Route>` components for page routing](https://reacttraining.com/react-router/web/api)

:::

## Introduction

In [Part 3: Basic Redux Data Flow](./part-3-data-flow.md), we saw how to start from an empty Redux+React project setup, add a new slice of state, and create React components that can read data from the Redux store and dispatch actions to update that data. We also looked at how data flows through the application, with components dispatching actions, reducers processing actions and returning new state, and components reading the new state and rerendering the UI.

Now that you know the core steps to write Redux logic, we're going to use those same steps to add some new features to our social media feed that will make it more useful: viewing a single post, editing existing posts, showing post author details, post timestamps, and reaction buttons.

:::info

As a reminder, the code examples focus on the key concepts and changes for each section. See the CodeSandbox projects and the [`tutorial-steps` branch in the project repo](https://github.com/reduxjs/redux-essentials-example-app/tree/tutorial-steps) for the complete changes in the application.

:::

## Showing Single Posts

Since we have the ability to add new posts to the Redux store, we can add some more features that use the post data in different ways.

Currently, our post entries are being shown in the main feed page, but if the text is too long, we only show an excerpt of the content. It would be helpful to have the ability to view a single post entry on its own page.

### Creating a Single Post Page

First, we need to add a new `SinglePostPage` component to our `posts` feature folder. We'll use React Router to show this component when the page URL looks like `/posts/123`, where the `123` part should be the ID of the post we want to show.

```jsx title="features/posts/SinglePostPage.js"
import React from 'react'
import { useSelector } from 'react-redux'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  )
}
```

React Router will pass in a `match` object as a prop that contains the URL information we're looking for. When we set up the route to render this component, we're going to tell it to parse the second part of the URL as a variable named `postId`, and we can read that value from `match.params`.

Once we have that `postId` value, we can use it inside a selector function to find the right post object from the Redux store. We know that `state.posts` should be an array of all post objects, so we can use the `Array.find()` function to loop through the array and return the post entry with the ID we're looking for.

It's important to note that **the component will re-render any time the value returned from `useSelector` changes to a new reference**. Components should always try to select the smallest possible amount of data they need from the store, which will help ensure that it only renders when it actually needs to.

It's possible that we might not have a matching post entry in the store - maybe the user tried to type in the URL directly, or we don't have the right data loaded. If that happens, the `find()` function will return `undefined` instead of an actual post object. Our component needs to check for that and handle it by showing a "Post not found!" message in the page.

Assuming we do have the right post object in the store, `useSelector` will return that, and we can use it to render the title and content of the post in the page.

You might notice that this looks fairly similar to the logic we have in the body of our `<PostsList>` component, where we loop over the whole `posts` array to show post excerpts on the main feed. We _could_ try to extract a `Post` component that could be used in both places, but there are already some differences in how we're showing a post excerpt and the whole post. It's usually better to keep writing things separately for a while even if there's some duplication, and then we can decide later if the different sections of code are similar enough that we can really extract a reusable component.

### Adding the Single Post Route

Now that we have a `<SinglePostPage>` component, we can define a route to show it, and add links to each post in the front page feed.

We'll import `SinglePostPage` in `App.js`, and add the route:

```jsx title="App.js"
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
// highlight-next-line
import { SinglePostPage } from './features/posts/SinglePostPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          // highlight-next-line
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
```

Then, in `<PostsList>`, we'll update the list rendering logic to include a `<Link>` that routes to that specific post:

```jsx title="features/posts/PostsList.js"
import React from 'react'
import { useSelector } from 'react-redux'
// highlight-next-line
import { Link } from 'react-router-dom'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      // highlight-start
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      // highlight-end
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
```

And since we can now click through to a different page, it would also be helpful to have a link back to the main posts page in the `<Navbar>` component as well:

```jsx title="app/Navbar.js"
import React from 'react'

// highlight-next-line
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          // highlight-start
          <div className="navLinks">
            <Link to="/">Posts</Link>
          </div>
          // highlight-end
        </div>
      </section>
    </nav>
  )
}
```

## Editing Posts

As a user, it's really annoying to finish writing a post, save it, and realize you made a mistake somewhere. Having the ability to edit a post after we created it would be useful.

Let's add a new `<EditPostForm>` component that has the ability to take an existing post ID, read that post from the store, lets the user edit the title and post content, and then save the changes to update the post in the store.

### Updating Post Entries

First, we need to update our `postsSlice` to create a new reducer function and an action so that the store knows how to actually update posts.

Inside of the `createSlice()` call, we should add a new function into the `reducers` object. Remember that the name of this reducer should be a good description of what's happening, because we're going to see the reducer name show up as part of the action type string in the Redux DevTools whenever this action is dispatched. Our first reducer was called `postAdded`, so let's call this one `postUpdated`.

In order to update a post object, we need to know:

- The ID of the post being updated, so that we can find the right post object in the state
- The new `title` and `content` fields that the user typed in

Redux action objects are required to have a `type` field, which is normally a descriptive string, and may also contain other fields with more information about what happened. By convention, we normally put the additional info in a field called `action.payload`, but it's up to us to decide what the `payload` field contains - it could be a string, a number, an object, an array, or something else. In this case, since we have three pieces of information we need, let's plan on having the `payload` field be an object with the three fields inside of it. That means the action object will look like `{type: 'posts/postUpdated', payload: {id, title, content}}`.

By default, the action creators generated by `createSlice` expect you to pass in one argument, and that value will be put into the action object as `action.payload`. So, we can pass an object containing those fields as the argument to the `postUpdated` action creator.

We also know that the reducer is responsible for determining how the state should actually be updated when an action is dispatched. Given that, we should have the reducer find the right post object based on the ID, and specifically update the `title` and `content` fields in that post.

Finally, we'll need to export the action creator function that `createSlice` generated for us, so that the UI can dispatch the new `postUpdated` action when the user saves the post.

Given all those requirements, here's how our `postsSlice` definition should look after we're done:

```js title="features/posts/postsSlice.js"
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    // highlight-start
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
    // highlight-end
  }
})

// highlight-next-line
export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
```

### Creating an Edit Post Form

Our new `<EditPostForm>` component will look similar to the `<AddPostForm>`, but the logic needs to be a bit different. We need to retrieve the right `post` object from the store, then use that to initialize the state fields in the component so the user can make changes. We'll save the changed title and content values back to the store after the user is done. We'll also use React Router's history API to switch over to the single post page and show that post.

```jsx title="features/posts/EditPostForm.js"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdated } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  )
}
```

Like with `SinglePostPage`, we'll need to import it into `App.js` and add a route that will render this component with the `postId` as a route parameter.

```jsx title="App.js"
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
// highlight-next-line
import { EditPostForm } from './features/posts/EditPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          // highlight-next-line
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
```

We should also add a new link to our `SinglePostPage` that will route to `EditPostForm`, like:

```jsx title="features/post/SinglePostPage.js"
// highlight-next-line
import { Link } from 'react-router-dom'

export const SinglePostPage = ({ match }) => {

        // omit other contents

        <p  className="post-content">{post.content}</p>
        // highlight-start
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        // highlight-end
```

### Preparing Action Payloads

We just saw that the action creators from `createSlice` normally expect one argument, which becomes `action.payload`. This simplifies the most common usage pattern, but sometimes we need to do more work to prepare the contents of an action object. In the case of our `postAdded` action, we need to generate a unique ID for the new post, and we also need to make sure that the payload is an object that looks like `{id, title, content}`.

Right now, we're generating the ID and creating the payload object in our React component, and passing the payload object into `postAdded`. But, what if we needed to dispatch the same action from different components, or the logic for preparing the payload is complicated? We'd have to duplicate that logic every time we wanted to dispatch the action, and we're forcing the component to know exactly what the payload for this action should look like.

:::caution

If an action needs to contain a unique ID or some other random value, always generate that first and put it in the action object. **Reducers should never calculate random values**, because that makes the results unpredictable.

:::

If we were writing the `postAdded` action creator by hand, we could have put the setup logic inside of it ourselves:

```js
// hand-written action creator
function postAdded(title, content) {
  const id = nanoid()
  return {
    type: 'posts/postAdded',
    payload: { id, title, content }
  }
}
```

But, Redux Toolkit's `createSlice` is generating these action creators for us. That makes the code shorter because we don't have to write them ourselves, but we still need a way to customize the contents of `action.payload`.

Fortunately, `createSlice` lets us define a "prepare callback" function when we write a reducer. The "prepare callback" function can take multiple arguments, generate random values like unique IDs, and run whatever other synchronous logic is needed to decide what values go into the action object. It should then return an object with the `payload` field inside. (The return object may also contain a `meta` field, which can be used to add extra descriptive values to the action, and an `error` field, which should be a boolean indicating whether this action represents some kind of an error.)

Inside of the `reducers` field in `createSlice`, we can define one of the fields as an object that looks like `{reducer, prepare}`:

```js title="features/posts/postsSlice.js"
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // highlight-start
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    }
    // highlight-end
    // other reducers here
  }
})
```

Now our component doesn't have to worry about what the payload object looks like - the action creator will take care of putting it together the right way. So, we can update the component so that it passes in `title` and `content` as arguments when it dispatches `postAdded`:

```jsx title="features/posts/AddPostForm.js"
const onSavePostClicked = () => {
  if (title && content) {
    // highlight-next-line
    dispatch(postAdded(title, content))
    setTitle('')
    setContent('')
  }
}
```

## Users and Posts

So far, we only have one slice of state. The logic is defined in `postsSlice.js`, the data is stored in `state.posts`, and all of our components have been related to the posts feature. Real applications will probably have many different slices of state, and several different "feature folders" for the Redux logic and React components.

You can't have a "social media" app if there aren't any other people involved. Let's add the ability to keep track of a list of users in our app, and update the post-related functionality to make use of that data.

### Adding a Users Slice

Since the concept of "users" is different than the concept of "posts", we want to keep the code and data for the users separated from the code and data for posts. We'll add a new `features/users` folder, and put a `usersSlice` file in there. Like with the posts slice, for now we'll add some initial entries so that we have data to work with.

```js title="features/users/usersSlice.js"
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer
```

For now, we don't need to actually update the data, so we'll leave the `reducers` field as an empty object. (We'll come back to this in a later section.)

As before, we'll import the `usersReducer` into our store file and add it to the store setup:

```js title="app/store.js"
import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
// highlight-next-line
import usersReducer from '../features/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    // highlight-next-line
    users: usersReducer
  }
})
```

### Adding Authors for Posts

Every post in our app was written by one of our users, and every time we add a new post, we should keep track of which user wrote that post. In a real app, we'd have some sort of a `state.currentUser` field that keeps track of the current logged-in user, and use that information whenever they add a post.

To keep things simpler for this example, we'll update our `<AddPostForm>` component so that we can select a user from a dropdown list, and we'll include that user's ID as part of the post. Once our post objects have a user ID in them, we can use that to look up the user's name and show it in each individual post in the UI.

First, we need to update our `postAdded` action creator to accept a user ID as an argument, and include that in the action. (We'll also update the existing post entries in `initialState` to have a `post.user` field with one of the example user IDs.)

```js title="features/posts/postsSlice.js"
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      // highlight-next-line
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            // highlight-next-line
            user: userId
          }
        }
      }
    }
    // other reducers
  }
})
```

Now, in our `<AddPostForm>`, we can read the list of users from the store with `useSelector` and show them as a dropdown. We'll then take the ID of the selected user and pass that to the `postAdded` action creator. While we're at it, we can add a bit of validation logic to our form so that the user can only click the "Save Post" button if the title and content inputs have some actual text in them:

```jsx title="features/posts/AddPostForm.js"
import React, { useState } from 'react'
// highlight-next-line
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  // highlight-next-line
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()

  // highlight-next-line
  const users = useSelector(state => state.users)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  // highlight-next-line
  const onAuthorChanged = e => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      // highlight-next-line
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }

  // highlight-start
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
  // highlight-end

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        // highlight-start
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        // highlight-end
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        // highlight-next-line
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}
```

Now, we need a way to show the name of the post's author inside of our post list items and `<SinglePostPage>`. Since we want to show this same kind of info in more than one place, we can make a `PostAuthor` component that takes a user ID as a prop, looks up the right user object, and formats the user's name:

```jsx title="features/posts/PostAuthor.js"
import React from 'react'
import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)
  )

  return <span>by {author ? author.name : 'Unknown author'}</span>
}
```

Notice that we're following the same pattern in each of our components as we go. Any component that needs to read data from the Redux store can use the `useSelector` hook, and extract the specific pieces of data that it needs. Also, many components can access the same data in the Redux store at the same time.

We can now import the `PostAuthor` component into both `PostsList.js` and `SinglePostPage.js`, and render it as `<PostAuthor userId={post.user} />`, and every time we add a post entry, the selected user's name should show up inside of the rendered post.

## More Post Features

At this point, we can create and edit posts. Let's add some additional logic to make our posts feed more useful.

### Storing Dates for Posts

Social media feeds are typically sorted by when the post was created, and show us the post creation time as a relative description like "5 hours ago". In order to do that, we need to start tracking a `date` field for our post entries.

Like with the `post.user` field, we'll update our `postAdded` prepare callback to make sure that `post.date` is always included when the action is dispatched. However, it's not another parameter that will be passed in. We want to always use the exact timestamp from when the action is dispatched, so we'll let the prepare callback handle that itself.

:::caution

**Redux actions and state should only contain plain JS values like objects, arrays, and primitives. Don't put class instances, functions, or other non-serializable values into Redux!**.

:::

Since we can't just put a `Date` class instance into the Redux store, we'll track the `post.date` value as a timestamp string:

```js title="features/posts/postsSlice.js"
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            // highlight-next-line
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        }
      },
    },
```

Like with post authors, we need to show the relative timestamp description in both our `<PostsList>` and `<SinglePostPage>` components. We'll add a `<TimeAgo>` component to handle formatting a timestamp string as a relative description. Libraries like `date-fns` have some useful utility functions for parsing and formatting dates, which we can use here:

```jsx title="features/posts/TimeAgo.js"
import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}
```

### Sorting the Posts List

Our `<PostsList>` is currently showing all the posts in the same order the posts are kept in the Redux store. Our example has the oldest post first, and any time we add a new post, it gets added to the end of the posts array. That means the newest post is always at the bottom of the page.

Typically, social media feeds show the newest posts first, and you scroll down to see older posts. Even though the data is being kept oldest-first in the store, we can reorder the data in our `<PostsList>` component so that the newest post is first. In theory, since we know that the `state.posts` array is already sorted, we _could_ just reverse the list. But, it's better to go ahead and sort it ourselves just to be sure.

Since `array.sort()` mutates the existing array, we need to make a copy of `state.posts` and sort that copy. We know that our `post.date` fields are being kept as date timestamp strings, and we can directly compare those to sort the posts in the right order:

```jsx title="features/posts/PostsList.js"
// Sort posts in reverse chronological order by datetime string
//highlight-start
const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

const renderedPosts = orderedPosts.map(post => {
  //highlight-end
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  )
})
```

We also need to add the `date` field to `initialState` in `postsSlice.js`. We'll use `date-fns` here again to subtract minutes from the current date/time so they differ from each other.

```jsx title="features/posts/postsSlice.js"
import { createSlice, nanoid } from '@reduxjs/toolkit'
// highlight-next-line
import { sub } from 'date-fns'

const initialState = [
  {
    // omitted fields
    content: 'Hello!',
    // highlight-next-line
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    // omitted fields
    content: 'More text',
    // highlight-next-line
    date: sub(new Date(), { minutes: 5 }).toISOString()
  }
]
```

### Post Reaction Buttons

We have one more new feature to add for this section. Right now, our posts are kind of boring. We need to make them more exciting, and what better way to do that than letting our friends add reaction emoji to our posts?

We'll add a row of emoji reaction buttons at the bottom of each post in `<PostsList>` and `<SinglePostPage>`. Every time a user clicks one of the reaction buttons, we'll need to update a matching counter field for that post in the Redux store. Since the reaction counter data is in the Redux store, switching between different parts of the app should consistently show the same values in any component that uses that data.

Like with post authors and timestamps, we want to use this everywhere we show posts, so we'll create a `<ReactionButtons>` component that takes a `post` as a prop. We'll start by just showing the buttons inside, with the current reaction counts for each button:

```jsx title="features/posts/ReactionButtons.js"
import React from 'react'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="muted-button reaction-button">
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}
```

We don't yet have a `post.reactions` field in our data, so we'll need to update the `initialState` post objects and our `postAdded` prepare callback function to make sure that every post has that data inside, like `reactions: {thumbsUp: 0, hooray: 0}`.

Now, we can define a new reducer that will handle updating the reaction count for a post when a user clicks the reaction button.

Like with editing posts, we need to know the ID of the post, and which reaction button the user clicked on. We'll have our `action.payload` be an object that looks like `{id, reaction}`. The reducer can then find the right post object, and update the correct reactions field.

```js
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // highlight-start
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }
    // highlight-end
    // other reducers
  }
})

// highlight-next-line
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions
```

As we've seen already, `createSlice` lets us write "mutating" logic in our reducers. If we weren't using `createSlice` and the Immer library, the line `existingPost.reactions[reaction]++` would indeed mutate the existing `post.reactions` object, and this would probably cause bugs elsewhere in our app because we didn't follow the rules of reducers. But, since we _are_ using `createSlice`, we can write this more complex update logic in a simpler way, and let Immer do the work of turning this code into a safe immutable update.

Notice that **our action object just contains the minimum amount of information needed to describe what happened**. We know which post we need to update, and which reaction name was clicked on. We _could_ have calculated the new reaction counter value and put that in the action, but **it's always better to keep the action objects as small as possible, and do the state update calculations in the reducer**. This also means that **reducers can contain as much logic as necessary to calculate the new state**.

:::info

When using Immer, you can either "mutate" an existing state object, or return a new state value yourself, but not both at the same time. See the Immer docs guides on [Pitfalls](https://immerjs.github.io/immer/pitfalls) and [Returning New Data](https://immerjs.github.io/immer/return) for more details.

:::

Our last step is to update the `<ReactionButtons>` component to dispatch the `reactionAdded` action when the user clicks a button:

```jsx title="features/posts/ReactionButtons.jsx"
import React from 'react'
// highlight-start
import { useDispatch } from 'react-redux'

import { reactionAdded } from './postsSlice'
// highlight-end

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  // highlight-next-line
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        // highlight-start
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
        // highlight-end
      >
        {emoji} {post.reactions[name]}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}
```

Now, every time we click a reaction button, the counter should increment. If we browse around to different parts of the app, we should see the correct counter values displayed any time we look at this post, even if we click a reaction button in the `<PostsList>` and then look at the post by itself on the `<SinglePostPage>`.

## What You've Learned

Here's what our app looks like after all these changes:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-2-reactionButtons/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-essentials-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

It's actually starting to look more useful and interesting!

We've covered a lot of information and concepts in this section. Let's recap the important things to remember:

:::tip Summary

- **Any React component can use data from the Redux store as needed**
  - Any component can read any data that is in the Redux store
  - Multiple components can read the same data, even at the same time
  - Components should extract the smallest amount of data they need to render themselves
  - Components can combine values from props, state, and the Redux store to determine what UI they need to render. They can read multiple pieces of data from the store, and reshape the data as needed for display.
  - Any component can dispatch actions to cause state updates
- **Redux action creators can prepare action objects with the right contents**
  - `createSlice` and `createAction` can accept a "prepare callback" that returns the action payload
  - Unique IDs and other random values should be put in the action, not calculated in the reducer
- **Reducers should contain the actual state update logic**
  - Reducers can contain whatever logic is needed to calculate the next state
  - Action objects should contain just enough info to describe what happened

:::

## What's Next?

By now you should be comfortable working with data in the Redux store and React components. So far we've just used data that was in the initial state or added by the user. In [Part 5: Async Logic and Data Fetching](./part-5-async-logic.md), we'll see how to work with data that comes from a server API.

---
id: part-5-async-logic
title: 'Redux Essentials, Part 5: Async Logic and Data Fetching'
sidebar_label: 'Async Logic and Data Fetching'
description: 'The official Redux Essentials tutorial: learn how async logic works in Redux apps'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- How to use the Redux "thunk" middleware for async logic
- Patterns for handling async request state
- How to use the Redux Toolkit `createAsyncThunk` API to simplify async calls

:::

:::info Prerequisites

- Familiarity with using AJAX requests to fetch and update data from a server

:::

## Introduction

In [Part 4: Using Redux Data](./part-4-using-data.md), we saw how to use multiple pieces of data from the Redux store inside of React components, customize the contents of action objects before they're dispatched, and handle more complex update logic in our reducers.

So far, all the data we've worked with has been directly inside of our React client application. However, most real applications need to work with data from a server, by making HTTP API calls to fetch and save items.

In this section, we'll convert our social media app to fetch the posts and users data from an API, and add new posts by saving them to the API.

### Example REST API and Client

To keep the example project isolated but realistic, the initial project setup already included a fake in-memory REST API for our data (configured using [the Mock Service Worker mock API tool](https://mswjs.io/)). The API uses `/fakeApi` as the base URL for the endpoints, and supports the typical `GET/POST/PUT/DELETE` HTTP methods for `/fakeApi/posts`, `/fakeApi/users`, and `fakeApi/notifications`. It's defined in `src/api/server.js`.

The project also includes a small HTTP API client object that exposes `client.get()` and `client.post()` methods, similar to popular HTTP libraries like `axios`. It's defined in `src/api/client.js`.

We'll use the `client` object to make HTTP calls to our in-memory fake REST API for this section.

Also, the mock server has been set up to reuse the same random seed each time the page is loaded, so that it will generate the same list of fake users and fake posts. If you want to reset that, delete the `'randomTimestampSeed'` value in your browser's Local Storage and reload the page, or you can turn that off by editing `src/api/server.js` and setting `useSeededRNG` to `false`.

:::info

As a reminder, the code examples focus on the key concepts and changes for each section. See the CodeSandbox projects and the [`tutorial-steps` branch in the project repo](https://github.com/reduxjs/redux-essentials-example-app/tree/tutorial-steps) for the complete changes in the application.

:::

## Thunks and Async Logic

### Using Middleware to Enable Async Logic

By itself, a Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.

But, what if you want to have async logic interact with the store by dispatching or checking the current store state? That's where [Redux middleware](../fundamentals/part-4-store.md#middleware) come in. They extend the store, and allow you to:

- Execute extra logic when any action is dispatched (such as logging the action and state)
- Pause, modify, delay, replace, or halt dispatched actions
- Write extra code that has access to `dispatch` and `getState`
- Teach `dispatch` how to accept other values besides plain action objects, such as functions and promises, by intercepting them and dispatching real action objects instead

[The most common reason to use middleware is to allow different kinds of async logic to interact with the store](../../faq/Actions.md#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior). This allows you to write code that can dispatch actions and check the store state, while keeping that logic separate from your UI.

There are many kinds of async middleware for Redux, and each lets you write your logic using different syntax. The most common async middleware is [`redux-thunk`](https://github.com/reduxjs/redux-thunk), which lets you write plain functions that may contain async logic directly. Redux Toolkit's `configureStore` function [automatically sets up the thunk middleware by default](https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware), and [we recommend using thunks as the standard approach for writing async logic with Redux](../../style-guide/style-guide.md#use-thunks-for-async-logic).

Earlier, we saw [what the synchronous data flow for Redux looks like](part-1-overview-concepts.md#redux-application-data-flow). When we introduce asynchronous logic, we add an extra step where middleware can run logic like AJAX requests, then dispatch actions. That makes the async data flow look like this:

![Redux async data flow diagram](/img/tutorials/essentials/ReduxAsyncDataFlowDiagram.gif)

### Thunk Functions

Once the thunk middleware has been added to the Redux store, it allows you to pass _thunk functions_ directly to `store.dispatch`. A thunk function will always be called with `(dispatch, getState)` as its arguments, and you can use them inside the thunk as needed.

Thunks typically dispatch plain actions using action creators, like `dispatch(increment())`:

```js
const store = configureStore({ reducer: counterReducer })

const exampleThunkFunction = (dispatch, getState) => {
  const stateBefore = getState()
  console.log(`Counter before: ${stateBefore.counter}`)
  dispatch(increment())
  const stateAfter = getState()
  console.log(`Counter after: ${stateAfter.counter}`)
}

store.dispatch(exampleThunkFunction)
```

For consistency with dispatching normal action objects, we typically write these as _thunk action creators_, which return the thunk function. These action creators can take arguments that can be used inside the thunk.

```js
const logAndAdd = amount => {
  return (dispatch, getState) => {
    const stateBefore = getState()
    console.log(`Counter before: ${stateBefore.counter}`)
    dispatch(incrementByAmount(amount))
    const stateAfter = getState()
    console.log(`Counter after: ${stateAfter.counter}`)
  }
}

store.dispatch(logAndAdd(5))
```

Thunks are typically written in "slice" files. `createSlice` itself does not have any special support for defining thunks, so you should write them as separate functions in the same slice file. That way, they have access to the plain action creators for that slice, and it's easy to find where the thunk lives.

:::info

The word "thunk" is a programming term that means ["a piece of code that does some delayed work"](https://en.wikipedia.org/wiki/Thunk). For more details on how to use thunks, see the thunk usage guide page:

- [Using Redux: Writing Logic with Thunks](../../usage/writing-logic-thunks.mdx)

as well as these posts:

- [What the heck is a thunk?](https://daveceddia.com/what-is-a-thunk/)
- [Thunks in Redux: the basics](https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60)

:::

### Writing Async Thunks

Thunks may have async logic inside of them, such as `setTimeout`, `Promise`s, and `async/await`. This makes them a good place to put AJAX calls to a server API.

Data fetching logic for Redux typically follows a predictable pattern:

- A "start" action is dispatched before the request, to indicate that the request is in progress. This may be used to track loading state to allow skipping duplicate requests or show loading indicators in the UI.
- The async request is made
- Depending on the request result, the async logic dispatches either a "success" action containing the result data, or a "failure" action containing error details. The reducer logic clears the loading state in both cases, and either processes the result data from the success case, or stores the error value for potential display.

These steps are not _required_, but are commonly used. (If all you care about is a successful result, you can just dispatch a single "success" action when the request finishes, and skip the "start" and "failure" actions.)

Redux Toolkit provides a `createAsyncThunk` API to implement the creation and dispatching of these actions, and we'll look at how to use it shortly.

<DetailedExplanation title="Detailed Explanation: Dispatching Request Status Actions in Thunks">

If we were to write out the code for a typical async thunk by hand, it might look like this:

```js
const getRepoDetailsStarted = () => ({
  type: 'repoDetails/fetchStarted'
})
const getRepoDetailsSuccess = repoDetails => ({
  type: 'repoDetails/fetchSucceeded',
  payload: repoDetails
})
const getRepoDetailsFailed = error => ({
  type: 'repoDetails/fetchFailed',
  error
})
const fetchIssuesCount = (org, repo) => async dispatch => {
  dispatch(getRepoDetailsStarted())
  try {
    const repoDetails = await getRepoDetails(org, repo)
    dispatch(getRepoDetailsSuccess(repoDetails))
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()))
  }
}
```

However, writing code using this approach is tedious. Each separate type of request needs repeated similar implementation:

- Unique action types need to be defined for the three different cases
- Each of those action types usually has a corresponding action creator function
- A thunk has to be written that dispatches the correct actions in the right sequence

`createAsyncThunk` abstracts this pattern by generating the action types and action creators, and generating a thunk that dispatches those actions automatically. You provide a callback function that makes the async call and returns a Promise with the result.

</DetailedExplanation>

<br />

:::tip

Redux Toolkit has a new [**RTK Query data fetching API**](https://redux-toolkit.js.org/rtk-query/overview). RTK Query is a purpose built data fetching and caching solution for Redux apps, and **can eliminate the need to write _any_ thunks or reducers to manage data fetching**. We encourage you to try it out and see if it can help simplify the data fetching code in your own apps!

We'll cover how to use RTK Query starting in [Part 7: RTK Query Basics](./part-7-rtk-query-basics.md).

:::

## Loading Posts

So far, our `postsSlice` has used some hardcoded sample data as its initial state. We're going to switch that to start with an empty array of posts instead, and then fetch a list of posts from the server.

In order to do that, we're going to have to change the structure of the state in our `postsSlice`, so that we can keep track of the current state of the API request.

### Extracting Posts Selectors

Right now, the `postsSlice` state is a single array of `posts`. We need to change that to be an object that has the `posts` array, plus the loading state fields.

Meanwhile, the UI components like `<PostsList>` are trying to read posts from `state.posts` in their `useSelector` hooks, assuming that that field is an array. We need to change those locations also to match the new data.

It would be nice if we didn't have to keep rewriting our components every time we made a change to the data format in our reducers. One way to avoid this is to define reusable selector functions in the slice files, and have the components use those selectors to extract the data they need instead of repeating the selector logic in each component. That way, if we do change our state structure again, we only need to update the code in the slice file.

The `<PostsList>` component needs to read a list of all the posts, and the `<SinglePostPage>` and `<EditPostForm>` components need to look up a single post by its ID. Let's export two small selector functions from `postsSlice.js` to cover those cases:

```js title="features/posts/postsSlice.js"
const postsSlice = createSlice(/* omit slice code*/)

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer

// highlight-start
export const selectAllPosts = state => state.posts

export const selectPostById = (state, postId) =>
  state.posts.find(post => post.id === postId)
//highlight-end
```

Note that the `state` parameter for these selector functions is the root Redux state object, as it was for the inlined anonymous selectors we wrote directly inside of `useSelector`.

We can then use them in the components:

```js title="features/posts/PostsList.js"
// omit imports
// highlight-next-line
import { selectAllPosts } from './postsSlice'

export const PostsList = () => {
  // highlight-next-line
  const posts = useSelector(selectAllPosts)
  // omit component contents
}
```

```js title="features/posts/SinglePostPage.js"
// omit imports
//highlight-next-line
import { selectPostById } from './postsSlice'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  // highlight-next-line
  const post = useSelector(state => selectPostById(state, postId))
  // omit component logic
}
```

```js title="features/posts/EditPostForm.js"
// omit imports
//highlight-next-line
import { postUpdated, selectPostById } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params

  // highlight-next-line
  const post = useSelector(state => selectPostById(state, postId))
  // omit component logic
}
```

It's often a good idea to encapsulate data lookups by writing reusable selectors. You can also create "memoized" selectors that can help improve performance, which we'll look at in a later part of this tutorial.

But, like any abstraction, it's not something you should do _all_ the time, everywhere. Writing selectors means more code to understand and maintain. **Don't feel like you need to write selectors for every single field of your state**. Try starting without any selectors, and add some later when you find yourself looking up the same values in many parts of your application code.

### Loading State for Requests

When we make an API call, we can view its progress as a small state machine that can be in one of four possible states:

- The request hasn't started yet
- The request is in progress
- The request succeeded, and we now have the data we need
- The request failed, and there's probably an error message

We _could_ track that information using some booleans, like `isLoading: true`, but it's better to track these states as a single enum value. A good pattern for this is to have a state section that looks like this (using TypeScript type notation):

```ts
{
  // Multiple possible status enum values
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}
```

These fields would exist alongside whatever actual data is being stored. These specific string state names aren't required - feel free to use other names if you want, like `'pending'` instead of `'loading'`, or `'complete'` instead of `'succeeded'`.

We can use this information to decide what to show in our UI as the request progresses, and also add logic in our reducers to prevent cases like loading data twice.

Let's update our `postsSlice` to use this pattern to track loading state for a "fetch posts" request. We'll switch our state from being an array of posts by itself, to look like `{posts, status, error}`. We'll also remove the old sample post entries from our initial state. As part of this change, we also need to change any uses of `state` as an array to be `state.posts` instead, because the array is now one level deeper:

```js title="features/posts/postsSlice.js"
import { createSlice, nanoid } from '@reduxjs/toolkit'

// highlight-start
const initialState = {
  posts: [],
  status: 'idle',
  error: null
}
//highlight-end

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        // highlight-next-line
        state.posts.push(action.payload)
      },
      prepare(title, content, userId) {
        // omit prepare logic
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      // highlight-next-line
      const existingPost = state.posts.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      // highlight-next-line
      const existingPost = state.posts.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer

// highlight-start
export const selectAllPosts = state => state.posts.posts

export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId)
// highlight-end
```

Yes, this _does_ mean that we now have a nested object path that looks like `state.posts.posts`, which is somewhat repetitive and silly :) We _could_ change the nested array name to be `items` or `data` or something if we wanted to avoid that, but we'll leave it as-is for now.

### Fetching Data with `createAsyncThunk`

Redux Toolkit's `createAsyncThunk` API generates thunks that automatically dispatch those "start/success/failure" actions for you.

Let's start by adding a thunk that will make an AJAX call to retrieve a list of posts. We'll import the `client` utility from the `src/api` folder, and use that to make a request to `'/fakeApi/posts'`.

```js title="features/posts/postsSlice"
// highlight-next-line
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
// highlight-next-line
import { client } from '../../api/client'

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

// highlight-start
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})
// highlight-end
```

`createAsyncThunk` accepts two arguments:

- A string that will be used as the prefix for the generated action types
- A "payload creator" callback function that should return a `Promise` containing some data, or a rejected `Promise` with an error

The payload creator will usually make an AJAX call of some kind, and can either return the `Promise` from the AJAX call directly, or extract some data from the API response and return that. We typically write this using the JS `async/await` syntax, which lets us write functions that use `Promise`s while using standard `try/catch` logic instead of `somePromise.then()` chains.

In this case, we pass in `'posts/fetchPosts'` as the action type prefix. Our payload creation callback waits for the API call to return a response. The response object looks like `{data: []}`, and we want our dispatched Redux action to have a payload that is _just_ the array of posts. So, we extract `response.data`, and return that from the callback.

If we try calling `dispatch(fetchPosts())`, the `fetchPosts` thunk will first dispatch an action type of `'posts/fetchPosts/pending'`:

![`createAsyncThunk`: posts pending action](/img/tutorials/essentials/devtools-posts-pending.png)

We can listen for this action in our reducer and mark the request status as `'loading'`.

Once the `Promise` resolves, the `fetchPosts` thunk takes the `response.data` array we returned from the callback, and dispatches a `'posts/fetchPosts/fulfilled'` action containing the posts array as `action.payload`:

![`createAsyncThunk`: posts pending action](/img/tutorials/essentials/devtools-posts-fulfilled.png)

#### Dispatching Thunks from Components

So, let's update our `<PostsList>` component to actually fetch this data automatically for us.

We'll import the `fetchPosts` thunk into the component. Like all of our other action creators, we have to dispatch it, so we'll also need to add the `useDispatch` hook. Since we want to fetch this data when `<PostsList>` mounts, we need to import the React `useEffect` hook:

```js title="features/posts/PostsList.js"
// highlight-start
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// omit other imports
// highlight-end
//highlight-next-line
import { selectAllPosts, fetchPosts } from './postsSlice'

export const PostsList = () => {
  // highlight-next-line
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  // highlight-start
  const postStatus = useSelector(state => state.posts.status)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])
  // highlight-end

  // omit rendering logic
}
```

It's important that we only try to fetch the list of posts once. If we do it every time the `<PostsList>` component renders, or is re-created because we've switched between views, we might end up fetching the posts several times. We can use the `posts.status` enum to help decide if we need to actually start fetching, by selecting that into the component and only starting the fetch if the status is `'idle'`.

### Reducers and Loading Actions

Next up, we need to handle both these actions in our reducers. This requires a bit deeper look at the `createSlice` API we've been using.

We've already seen that `createSlice` will generate an action creator for every reducer function we define in the `reducers` field, and that the generated action types include the name of the slice, like:

```js
console.log(
  postUpdated({ id: '123', title: 'First Post', content: 'Some text here' })
)
/*
{
  type: 'posts/postUpdated',
  payload: {
    id: '123',
    title: 'First Post',
    content: 'Some text here'
  }
}
*/
```

However, there are times when a slice reducer needs to respond to _other_ actions that weren't defined as part of this slice's `reducers` field. We can do that using the slice `extraReducers` field instead.

The `extraReducers` option should be a function that receives a parameter called `builder`. The `builder` object provides methods that let us define additional case reducers that will run in response to actions defined outside of the slice. We'll use `builder.addCase(actionCreator, reducer)` to handle each of the actions dispatched by our async thunks.

<DetailedExplanation title="Detailed Explanation: Adding Extra Reducers to Slices">

The `builder` object in `extraReducers` provides methods that let us define additional case reducers that will run in response to actions defined outside of the slice:

- `builder.addCase(actionCreator, reducer)`: defines a case reducer that handles a single known action type based on either an RTK action creator or a plain action type string
- `builder.addMatcher(matcher, reducer)`: defines a case reducer that can run in response to any action where the `matcher` function returns `true`
- `builder.addDefaultCase(reducer)`: defines a case reducer that will run if no other case reducers were executed for this action.

You can chain these together, like `builder.addCase().addCase().addMatcher().addDefault()`. If multiple matchers match the action, they will run in the order they were defined.

```js
import { increment } from '../features/counter/counterSlice'

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // slice-specific reducers here
  },
  // highlight-start
  extraReducers: builder => {
    builder
      .addCase('counter/decrement', (state, action) => {})
      .addCase(increment, (state, action) => {})
  }
  // highlight-end
})
```

If you're using TypeScript, you should use the builder callback form of `extraReducers`.

Alternately, `extraReducers` can also be an object. **This is a legacy syntax - it's still supported, but we recommend the "builder callback" syntax as it works better with TypeScript.**

The keys in the `extraReducers` object should be Redux action type strings, like `'counter/increment'`. We _could_ write those by hand ourselves, although we'd have to quote the keys if they contain any characters like '/':

```js
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // slice-specific reducers here
  },
  extraReducers: {
    'counter/increment': (state, action) => {
      // normal reducer logic to update the posts slice
    }
  }
})
```

However, action creators generated by Redux Toolkit automatically return their action type string if you call `actionCreator.toString()`. This means we can pass them as ES6 object literal computed properties, and the action types will become the keys of the object:

```js
import { increment } from '../features/counter/counterSlice'
const object = {
  [increment]: () => {}
}
console.log(object)
// { "counter/increment": Function}
```

This works for the `extraReducers` field when used as an object:

```js
import { increment } from '../features/counter/counterSlice'

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // slice-specific reducers here
  },
  extraReducers: {
    // highlight-next-line
    [increment]: (state, action) => {
      // normal reducer logic to update the posts slice
    }
  }
})
```

Unfortunately, TypeScript fails to recognize this will work correctly, so you have to use `increment.type` here to pass the type string. It also will not correctly infer the type of `action` inside the reducer.

</DetailedExplanation>

In this case, we need to listen for the "pending" and "fulfilled" action types dispatched by our `fetchPosts` thunk. Those action creators are attached to our actual `fetchPost` function, and we can pass those to `extraReducers` to listen for those actions:

```js
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // omit existing reducers here
  },
  // highlight-start
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
  // highlight-end
})
```

We'll handle all three action types that could be dispatched by the thunk, based on the `Promise` we returned:

- When the request starts, we'll set the `status` enum to `'loading'`
- If the request succeeds, we mark the `status` as `'succeeded'`, and add the fetched posts to `state.posts`
- If the request fails, we'll mark the `status` as `'failed'`, and save any error message into the state so we can display it

### Displaying Loading State

Our `<PostsList>` component is already checking for any updates to the posts that are stored in Redux, and rerendering itself any time that list changes. So, if we refresh the page, we should see a random set of posts from our fake API show up on screen:

The fake API we're using returns data immediately. However, a real API call will probably take some time to return a response. It's usually a good idea to show some kind of "loading..." indicator in the UI so the user knows we're waiting for data.

We can update our `<PostsList>` to show a different bit of UI based on the `state.posts.status` enum: a spinner if we're loading, an error message if it failed, or the actual posts list if we have the data. While we're at it, this is probably a good time to extract a `<PostExcerpt>` component to encapsulate the rendering for one item in the list as well.

The result might look like this:

```jsx title="features/posts/PostsList.js"
// highlight-next-line
import { Spinner } from '../../components/Spinner'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectAllPosts, fetchPosts } from './postsSlice'

// highlight-start
const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  )
}
// highlight-end

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector(state => state.posts.status)
  // highlight-next-line
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  // highlight-start
  let content

  if (postStatus === 'loading') {
    content = <Spinner text="Loading..." />
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))

    content = orderedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }
  // highlight-end

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
```

You might notice that the API calls are taking a while to complete, and that the loading spinner is staying on screen for a couple seconds. Our mock API server is configured to add a 2-second delay to all responses, specifically to help visualize times when there's a loading spinner visible. If you want to change this behavior, you can open up `api/server.js`, and alter this line:

```js title="api/server.js"
// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 2000
```

Feel free to turn that on and off as we go if you want the API calls to complete faster.

## Loading Users

We're now fetching and displaying our list of posts. But, if we look at the posts, there's a problem: they all now say "Unknown author" as the authors:

![Unknown post authors](/img/tutorials/essentials/posts-unknownAuthor.png)

This is because the post entries are being randomly generated by the fake API server, which also randomly generates a set of fake users every time we reload the page. We need to update our users slice to fetch those users when the application starts.

Like last time, we'll create another async thunk to get the users from the API and return them, then handle the `fulfilled` action in the `extraReducers` slice field. We'll skip worrying about loading state for now:

```js title="features/users/usersSlice.js"
// highlight-start
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'
// highlight-end

const initialState = []

// highlight-start
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})
// highlight-end

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  // highlight-start
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
  // highlight-end
})

export default usersSlice.reducer
```

We only need to fetch the list of users once, and we want to do it right when the application starts. We can do that in our `index.js` file, and directly dispatch the `fetchUsers` thunk because we have the `store` right there:

```js title="index.js"
// omit imports

// highlight-next-line
import { fetchUsers } from './features/users/usersSlice'

import { worker } from './api/server'

// Start our mock API server
worker.start({ onUnhandledRequest: 'bypass' })

// highlight-next-line
store.dispatch(fetchUsers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

Now, each of the posts should be showing a username again, and we should also have that same list of users shown in the "Author" dropdown in our `<AddPostForm>`.

## Adding New Posts

We have one more step for this section. When we add a new post from the `<AddPostForm>`, that post is only getting added to the Redux store inside our app. We need to actually make an API call that will create the new post entry in our fake API server instead, so that it's "saved". (Since this is a fake API, the new post won't persist if we reload the page, but if we had a real backend server it would be available next time we reload.)

### Sending Data with Thunks

We can use `createAsyncThunk` to help with sending data, not just fetching it. We'll create a thunk that accepts the values from our `<AddPostForm>` as an argument, and makes an HTTP POST call to the fake API to save the data.

In the process, we're going to change how we work with the new post object in our reducers. Currently, our `postsSlice` is creating a new post object in the `prepare` callback for `postAdded`, and generating a new unique ID for that post. In most apps that save data to a server, the server will take care of generating unique IDs and filling out any extra fields, and will usually return the completed data in its response. So, we can send a request body like `{ title, content, user: userId }` to the server, and then take the complete post object it sends back and add it to our `postsSlice` state.

```js title="features/posts/postsSlice.js"
// highlight-start
export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  // The payload creator receives the partial `{title, content, user}` object
  async initialPost => {
    // We send the initial data to the fake API server
    const response = await client.post('/fakeApi/posts', initialPost)
    // The response includes the complete post object, including unique ID
    return response.data
  }
)
// highlight-end

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // The existing `postAdded` reducer and prepare callback were deleted
    reactionAdded(state, action) {}, // omit logic
    postUpdated(state, action) {} // omit logic
  },
  extraReducers(builder) {
    // omit posts loading reducers
    // highlight-start
    builder.addCase(addNewPost.fulfilled, (state, action) => {
      // We can directly add the new post object to our posts array
      state.posts.push(action.payload)
    })
    // highlight-end
  }
})
```

### Checking Thunk Results in Components

Finally, we'll update `<AddPostForm>` to dispatch the `addNewPost` thunk instead of the old `postAdded` action. Since this is another API call to the server, it will take some time and _could_ fail. The `addNewPost()` thunk will automatically dispatch its `pending/fulfilled/rejected` actions to the Redux store, which we're already handling. We _could_ track the request status in `postsSlice` using a second loading enum if we wanted to, but for this example let's keep the loading state tracking limited to the component.

It would be good if we can at least disable the "Save Post" button while we're waiting for the request, so the user can't accidentally try to save a post twice. If the request fails, we might also want to show an error message here in the form, or perhaps just log it to the console.

We can have our component logic wait for the async thunk to finish, and check the result when it's done:

```js title="features/posts/AddPostForm.js"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// highlight-next-line
import { addNewPost } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  // highlight-next-line
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  // omit useSelectors and change handlers

  // highlight-start
  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(addNewPost({ title, content, user: userId })).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch (err) {
        console.error('Failed to save the post: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }
  // highlight-end

  // omit rendering logic
}
```

We can add a loading status enum field as a React `useState` hook, similar to how we're tracking loading state in `postsSlice` for fetching posts. In this case, we just want to know if the request is in progress or not.

When we call `dispatch(addNewPost())`, the async thunk returns a `Promise` from `dispatch`. We can `await` that promise here to know when the thunk has finished its request. But, we don't yet know if that request succeeded or failed.

`createAsyncThunk` handles any errors internally, so that we don't see any messages about "rejected Promises" in our logs. It then returns the final action it dispatched: either the `fulfilled` action if it succeeded, or the `rejected` action if it failed.

However, it's common to want to write logic that looks at the success or failure of the actual request that was made. Redux Toolkit adds a `.unwrap()` function to the returned `Promise`, which will return a new `Promise` that either has the actual `action.payload` value from a `fulfilled` action, or throws an error if it's the `rejected` action. This lets us handle success and failure in the component using normal `try/catch` logic. So, we'll clear out the input fields to reset the form if the post was successfully created, and log the error to the console if it failed.

If you want to see what happens when the `addNewPost` API call fails, try creating a new post where the "Content" field only has the word "error" (without quotes). The server will see that and send back a failed response, so you should see a message logged to the console.

## What You've Learned

Async logic and data fetching are always a complex topic. As you've seen, Redux Toolkit includes some tools to automate the typical Redux data fetching patterns.

Here's what our app looks like now that we're fetching data from that fake API:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-3-postRequests/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-essentials-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

As a reminder, here's what we covered in this section:

:::tip Summary

- **You can write reusable "selector" functions to encapsulate reading values from the Redux state**
  - Selectors are functions that get the Redux `state` as an argument, and return some data
- **Redux uses plugins called "middleware" to enable async logic**
  - The standard async middleware is called `redux-thunk`, which is included in Redux Toolkit
  - Thunk functions receive `dispatch` and `getState` as arguments, and can use those as part of async logic
- **You can dispatch additional actions to help track the loading status of an API call**
  - The typical pattern is dispatching a "pending" action before the call, then either a "success" containing the data or a "failure" action containing the error
  - Loading state should usually be stored as an enum, like `'idle' | 'loading' | 'succeeded' | 'failed'`
- **Redux Toolkit has a `createAsyncThunk` API that dispatches these actions for you**
  - `createAsyncThunk` accepts a "payload creator" callback that should return a `Promise`, and generates `pending/fulfilled/rejected` action types automatically
  - Generated action creators like `fetchPosts` dispatch those actions based on the `Promise` you return
  - You can listen for these action types in `createSlice` using the `extraReducers` field, and update the state in reducers based on those actions.
  - Action creators can be used to automatically fill in the keys of the `extraReducers` object so the slice knows what actions to listen for.
  - Thunks can return promises. For `createAsyncThunk` specifically, you can `await dispatch(someThunk()).unwrap()` to handle the request success or failure at the component level.

:::

## What's Next?

We've got one more set of topics to cover the core Redux Toolkit APIs and usage patterns. In [Part 6: Performance and Normalizing Data](./part-6-performance-normalization.md), we'll look at how Redux usage affects React performance, and some ways we can optimize our application for improved performance.

---
id: part-6-performance-normalization
title: 'Redux Essentials, Part 6: Performance and Normalizing Data'
sidebar_label: 'Performance and Normalizing Data'
description: 'The official Redux Essentials tutorial: learn how to improve app performance and structure data correctly'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- How to create memoized selector functions with `createSelector`
- Patterns for optimizing component rendering performance
- How to use `createEntityAdapter` to store and update normalized data

:::

:::info Prerequisites

- Completion of [Part 5](./part-5-async-logic.md) to understand data fetching flow

:::

## Introduction

In [Part 5: Async Logic and Data Fetching](./part-5-async-logic.md), we saw how to write async thunks to fetch data from a server API, patterns for handling async request loading state, and use of selector functions for encapsulating lookups of data from the Redux state.

In this section, we'll look at optimized patterns for ensuring good performance in our application, and techniques for automatically handling common updates of data in the store.

So far, most of our functionality has been centered around the `posts` feature. We're going to add a couple new sections of the app. After those are added, we'll look at some specific details of how we've built things, and talk about some weaknesses with what we've built so far and how we can improve the implementation.

## Adding User Pages

We're fetching a list of users from our fake API, and we can choose a user as the author when we add a new post. But, a social media app needs the ability to look at the page for a specific user and see all the posts they've made. Let's add a page to show the list of all users, and another to show all posts by a specific user.

We'll start by adding a new `<UsersList>` component. It follows the usual pattern of reading some data from the store with `useSelector`, and mapping over the array to show a list of users with links to their individual pages:

```jsx title="features/users/UsersList.js"
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from './usersSlice'

export const UsersList = () => {
  const users = useSelector(selectAllUsers)

  const renderedUsers = users.map(user => (
    <li key={user.id}>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ))

  return (
    <section>
      <h2>Users</h2>

      <ul>{renderedUsers}</ul>
    </section>
  )
}
```

We don't yet have a `selectAllUsers` selector, so we'll need to add that to `usersSlice.js` along with a `selectUserById` selector:

```js title="features/users/usersSlice.js"
export default usersSlice.reducer

// highlight-start
export const selectAllUsers = state => state.users

export const selectUserById = (state, userId) =>
  state.users.find(user => user.id === userId)
// highlight-end
```

And we'll add a `<UserPage>`, which is similar to our `<SinglePostPage>` in taking a `userId` parameter from the router:

```jsx title="features/users/UserPage.js"
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectUserById } from '../users/usersSlice'
import { selectAllPosts } from '../posts/postsSlice'

export const UserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector(state => selectUserById(state, userId))

  const postsForUser = useSelector(state => {
    const allPosts = selectAllPosts(state)
    return allPosts.filter(post => post.user === userId)
  })

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  )
}
```

As we've seen before, we can take data from one `useSelector` call, or from props, and use that to help decide what to read from the store in another `useSelector` call.

As usual, we will add routes for these components in `<App>`:

```jsx title="App.js"
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          // highlight-start
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          // highlight-end
          <Redirect to="/" />
```

We'll also add another tab in `<Navbar>` that links to `/users` so that we can click and go to `<UsersList>`:

```jsx title="app/Navbar.js"
export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            // highlight-next-line
            <Link to="/users">Users</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
```

## Adding Notifications

No social media app would be complete without some notifications popping up to tell us that someone has sent a message, left a comment, or reacted to one of our posts.

In a real application, our app client would be in constant communication with the backend server, and the server would push an update to the client every time something happens. Since this is a small example app, we're going to mimic that process by adding a button to actually fetch some notification entries from our fake API. We also don't have any other _real_ users sending messages or reacting to posts, so the fake API will just create some random notification entries every time we make a request. (Remember, the goal here is to see how to use Redux itself.)

### Notifications Slice

Since this is a new part of our app, the first step is to create a new slice for our notifications, and an async thunk to fetch some notification entries from the API. In order to create some realistic notifications, we'll include the timestamp of the latest notification we have in state. That will let our mock server generate notifications newer than that timestamp.

```js title="features/notifications/notificationsSlice.js"
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { client } from '../../api/client'

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState())
    const [latestNotification] = allNotifications
    const latestTimestamp = latestNotification ? latestNotification.date : ''
    const response = await client.get(
      `/fakeApi/notifications?since=${latestTimestamp}`
    )
    return response.data
  }
)

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchNotifications.fulfilled]: (state, action) => {
      state.push(...action.payload)
      // Sort with newest first
      state.sort((a, b) => b.date.localeCompare(a.date))
    }
  }
})

export default notificationsSlice.reducer

export const selectAllNotifications = state => state.notifications
```

As with the other slices, import `notificationsReducer` into `store.js` and add it to the `configureStore()` call.

We've written an async thunk called `fetchNotifications`, which will retrieve a list of new notifications from the server. As part of that, we want to use the creation timestamp of the most recent notification as part of our request, so that the server knows it should only send back notifications that are actually new.

We know that we will be getting back an array of notifications, so we can pass them as separate arguments to `state.push()`, and the array will add each item. We also want to make sure that they're sorted so that the most recent notification is last in the array, just in case the server were to send them out of order. (As a reminder, `array.sort()` always mutates the existing array - this is only safe because we're using `createSlice` and Immer inside.)

### Thunk Arguments

If you look at our `fetchNotifications` thunk, it has something new that we haven't seen before. Let's talk about thunk arguments for a minute.

We've already seen that we can pass an argument into a thunk action creator when we dispatch it, like `dispatch(addPost(newPost))`. For `createAsyncThunk` specifically, you can only pass in one argument, and whatever we pass in becomes the first argument of the payload creation callback.

The second argument to our payload creator is a `thunkAPI` object containing several useful functions and pieces of information:

- `dispatch` and `getState`: the actual `dispatch` and `getState` methods from our Redux store. You can use these inside the thunk to dispatch more actions, or get the latest Redux store state (such as reading an updated value after another action is dispatched).
- `extra`: the "extra argument" that can be passed into the thunk middleware when creating the store. This is typically some kind of API wrapper, such as a set of functions that know how to make API calls to your application's server and return data, so that your thunks don't have to have all the URLs and query logic directly inside.
- `requestId`: a unique random ID value for this thunk call. Useful for tracking status of an individual request.
- `signal`: An `AbortController.signal` function that can be used to cancel an in-progress request.
- `rejectWithValue`: a utility that helps customize the contents of a `rejected` action if the thunk receives an error.

(If you're writing a thunk by hand instead of using `createAsyncThunk`, the thunk function will get`(dispatch, getState)` as separate arguments, instead of putting them together in one object.)

:::info

For more details on these arguments and how to handle canceling thunks and requests, see [the `createAsyncThunk` API reference page](https://redux-toolkit.js.org/api/createAsyncThunk).

:::

In this case, we know that the list of notifications is in our Redux store state, and that the latest notification should be first in the array. We can destructure the `getState` function out of the `thunkAPI` object, call it to read the state value, and use the `selectAllNotifications` selector to give us just the array of notifications. Since the array of notifications is sorted newest first, we can grab the latest one using array destructuring.

### Adding the Notifications List

With that slice created, we can add a `<NotificationsList>` component:

```jsx title="features/notifications/NotificationsList.js"
import React from 'react'
import { useSelector } from 'react-redux'
import { formatDistanceToNow, parseISO } from 'date-fns'

import { selectAllUsers } from '../users/usersSlice'

import { selectAllNotifications } from './notificationsSlice'

export const NotificationsList = () => {
  const notifications = useSelector(selectAllNotifications)
  const users = useSelector(selectAllUsers)

  const renderedNotifications = notifications.map(notification => {
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)
    const user = users.find(user => user.id === notification.user) || {
      name: 'Unknown User'
    }

    return (
      <div key={notification.id} className="notification">
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date}>
          <i>{timeAgo} ago</i>
        </div>
      </div>
    )
  })

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  )
}
```

Once again, we're reading a list of items from the Redux state, mapping over them, and rendering content for each item.

We also need to update the `<Navbar>` to add a "Notifications" tab, and a new button to fetch some notifications:

```jsx title="app/Navbar.js"
import React from 'react'
// highlight-next-line
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// highlight-next-line
import { fetchNotifications } from '../features/notifications/notificationsSlice'

export const Navbar = () => {
  // highlight-start
  const dispatch = useDispatch()

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }
  // highlight-end

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            // highlight-next-line
            <Link to="/notifications">Notifications</Link>
          </div>
          // highlight-start
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
          // highlight-end
        </div>
      </section>
    </nav>
  )
}
```

Lastly, we need to update `App.js` with the "Notifications" route so we can navigate to it:

```js title="App.js"
// omit imports
// highlight-next-line
import { NotificationsList } from './features/notifications/NotificationsList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          // highlight-next-line
          <Route exact path="/notifications" component={NotificationsList} />
          // omit existing routes
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
```

Here's what the "Notifications" tab looks like so far:

![Initial Notifications tab](/img/tutorials/essentials/notifications-initial.png)

### Showing New Notifications

Each time we click "Refresh Notifications", a few more notification entries will be added to our list. In a real app, those could be coming from the server while we're looking at other parts of the UI. We can do something similar by clicking "Refresh Notifications" while we're looking at the `<PostsList>` or `<UserPage>`. But, right now we have no idea how many notifications just arrived, and if we keep clicking the button, there could be many notifications we haven't read yet. Let's add some logic to keep track of which notifications have been read and which of them are "new". That will let us show the count of "Unread" notifications as a badge on our "Notifications" tab in the navbar, and display new notifications in a different color.

Our fake API is already sending back the notification entries with `isNew` and `read` fields, so we can use those in our code.

First, we'll update `notificationsSlice` to have a reducer that marks all notifications as read, and some logic to handle marking existing notifications as "not new":

```js title="features/notifications/notificationsSlice.js"
const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    // highlight-start
    allNotificationsRead(state, action) {
      state.forEach(notification => {
        notification.read = true
      })
    }
    // highlight-end
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.push(...action.payload)
      // highlight-start
      state.forEach(notification => {
        // Any notifications we've read are no longer new
        notification.isNew = !notification.read
      })
      // highlight-end
      // Sort with newest first
      state.sort((a, b) => b.date.localeCompare(a.date))
    })
  }
})

// highlight-next-line
export const { allNotificationsRead } = notificationsSlice.actions

export default notificationsSlice.reducer
```

We want to mark these notifications as read whenever our `<NotificationsList>` component renders, either because we clicked on the tab to view the notifications, or because we already have it open and we just received some additional notifications. We can do this by dispatching `allNotificationsRead` any time this component re-renders. In order to avoid flashing of old data as this updates, we'll dispatch the action in a `useLayoutEffect` hook. We also want to add an additional classname to any notification list entries in the page, to highlight them:

```jsx title="features/notifications/NotificationsList.js"
import React, { useLayoutEffect } from 'react'
// highlight-next-line
import { useSelector, useDispatch } from 'react-redux'
import { formatDistanceToNow, parseISO } from 'date-fns'
// highlight-next-line
import classnames from 'classnames'

import { selectAllUsers } from '../users/usersSlice'

// highlight-start
import {
  selectAllNotifications,
  allNotificationsRead
} from './notificationsSlice'
// highlight-end

export const NotificationsList = () => {
  // highlight-next-line
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const users = useSelector(selectAllUsers)

  // highlight-start
  useLayoutEffect(() => {
    dispatch(allNotificationsRead())
  })
  // highlight-end

  const renderedNotifications = notifications.map(notification => {
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)
    const user = users.find(user => user.id === notification.user) || {
      name: 'Unknown User'
    }

    // highlight-start
    const notificationClassname = classnames('notification', {
      new: notification.isNew
    })

    return (
      <div key={notification.id} className={notificationClassname}>
        // highlight-end
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date}>
          <i>{timeAgo} ago</i>
        </div>
      </div>
    )
  })

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  )
}
```

This works, but actually has a slightly surprising bit of behavior. Any time there are new notifications (either because we've just switched to this tab, or we've fetched some new notifications from the API), you'll actually see _two_ `"notifications/allNotificationsRead"` actions dispatched. Why is that?

Let's say we have fetched some notifications while looking at the `<PostsList>`, and then click the "Notifications" tab. The `<NotificationsList>` component will mount, and the `useLayoutEffect` callback will run after that first render and dispatch `allNotificationsRead`. Our `notificationsSlice` will handle that by updating the notification entries in the store. This creates a new `state.notifications` array containing the immutably-updated entries, which forces our component to render again because it sees a new array returned from the `useSelector`, and the `useLayoutEffect` hook runs again and dispatches `allNotificationsRead` a second time. The reducer runs again, but this time no data changes, so the component doesn't re-render.

There's a couple ways we could potentially avoid that second dispatch, like splitting the logic to dispatch once when the component mounts, and only dispatch again if the size of the notifications array changes. But, this isn't actually hurting anything, so we can leave it alone.

This does actually show that **it's possible to dispatch an action and not have _any_ state changes happen at all**. Remember, **it's always up to your reducers to decide _if_ any state actually needs to be updated, and "nothing needs to happen" is a valid decision for a reducer to make**.

Here's how the notifications tab looks now that we've got the "new/read" behavior working:

![New notifications](/img/tutorials/essentials/notifications-new.png)

The last thing we need to do before we move on is to add the badge on our "Notifications" tab in the navbar. This will show us the count of "Unread" notifications when we are in other tabs:

```jsx title="app/Navbar.js"
// omit imports
// highlight-next-line
import { useDispatch, useSelector } from 'react-redux'

// highlight-start
import {
  fetchNotifications,
  selectAllNotifications
} from '../features/notifications/notificationsSlice'
// highlight-end

export const Navbar = () => {
  const dispatch = useDispatch()
  // highlight-start
  const notifications = useSelector(selectAllNotifications)
  const numUnreadNotifications = notifications.filter(n => !n.read).length
  // highlight-end
  // omit component contents
  // highlight-start
  let unreadNotificationsBadge

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    )
  }
  // highlight-end
  return (
    <nav>
      // omit component contents
      <div className="navLinks">
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
        // highlight-start
        <Link to="/notifications">
          Notifications {unreadNotificationsBadge}
        </Link>
        // highlight-end
      </div>
      // omit component contents
    </nav>
  )
}
```

## Improving Render Performance

Our application is looking useful, but we've actually got a couple flaws in when and how our components re-render. Let's look at those problems, and talk about some ways to improve the performance.

### Investigating Render Behavior

We can use the React DevTools Profiler to view some graphs of what components re-render when state is updated. Try clicking over to the `<UserPage>` for a single user. Open up your browser's DevTools, and in the React "Profiler" tab, click the circle "Record" button in the upper-left. Then, click the "Refresh Notifications" button in our app, and stop the recording in the React DevTools Profiler. You should see a chart that looks like this:

![React DevTools Profiler render capture - <UserPage>](/img/tutorials/essentials/userpage-rerender.png)

We can see that the `<Navbar>` re-rendered, which makes sense because it had to show the updated "unread notifications" badge in the tab. But, why did our `<UserPage>` re-render?

If we inspect the last couple dispatched actions in the Redux DevTools, we can see that only the notifications state updated. Since the `<UserPage>` doesn't read any notifications, it shouldn't have re-rendered. Something must be wrong with the component.

If we look at `<UserPage>` carefully, there's a specific problem:

```jsx title="features/UserPage.js
export const UserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector(state => selectUserById(state, userId))

  // highlight-start
  const postsForUser = useSelector(state => {
    const allPosts = selectAllPosts(state)
    return allPosts.filter(post => post.user === userId)
  })
  // highlight-end

  // omit rendering logic
}
```

We know that `useSelector` will re-run every time an action is dispatched, and that it forces the component to re-render if we return a new reference value.

We're calling `filter()` inside of our `useSelector` hook, so that we only return the list of posts that belong to this user. Unfortunately, **this means that `useSelector` _always_ returns a new array reference, and so our component will re-render after _every_ action even if the posts data hasn't changed!**.

### Memoizing Selector Functions

What we really need is a way to only calculate the new filtered array if either `state.posts` or `userId` have changed. If they _haven't_ changed, we want to return the same filtered array reference as the last time.

This idea is called "memoization". We want to save a previous set of inputs and the calculated result, and if the inputs are the same, return the previous result instead of recalculating it again.

So far, we've been writing selector functions by ourselves, and just so that we don't have to copy and paste the code for reading data from the store. It would be great if there was a way to make our selector functions memoized.

**[Reselect](https://github.com/reduxjs/reselect) is a library for creating memoized selector functions**, and was specifically designed to be used with Redux. It has a `createSelector` function that generates memoized selectors that will only recalculate results when the inputs change. Redux Toolkit [exports the `createSelector` function](https://redux-toolkit.js.org/api/createSelector), so we already have it available.

Let's make a new `selectPostsByUser` selector function, using Reselect, and use it here.

```js title="features/posts/postsSlice.js"
// highlight-next-line
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

// omit slice logic

export const selectAllPosts = state => state.posts.posts

export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId)

// highlight-start
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter(post => post.user === userId)
)
// highlight-end
```

`createSelector` takes one or more "input selector" functions as argument, plus an "output selector" function. When we call `selectPostsByUser(state, userId)`, `createSelector` will pass all of the arguments into each of our input selectors. Whatever those input selectors return becomes the arguments for the output selector.

In this case, we know that we need the array of all posts and the user ID as the two arguments for our output selector. We can reuse our existing `selectAllPosts` selector to extract the posts array. Since the user ID is the second argument we're passing into `selectPostsByUser`, we can write a small selector that just returns `userId`.

Our output selector then takes `posts` and `userId`, and returns the filtered array of posts for just that user.

If we try calling `selectPostsByUser` multiple times, it will only re-run the output selector if either `posts` or `userId` has changed:

```js
const state1 = getState()
// Output selector runs, because it's the first call
selectPostsByUser(state1, 'user1')
// Output selector does _not_ run, because the arguments haven't changed
selectPostsByUser(state1, 'user1')
// Output selector runs, because `userId` changed
selectPostsByUser(state1, 'user2')

dispatch(reactionAdded())
const state2 = getState()
// Output selector does not run, because `posts` and `userId` are the same
selectPostsByUser(state2, 'user2')

// Add some more posts
dispatch(addNewPost())
const state3 = getState()
// Output selector runs, because `posts` has changed
selectPostsByUser(state3, 'user2')
```

If we call this selector in `<UserPage>` and re-run the React profiler while fetching notifications, we should see that `<UserPage>` doesn't re-render this time:

```jsx
export const UserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector(state => selectUserById(state, userId))

  // highlight-start
  const postsForUser = useSelector(state => selectPostsByUser(state, userId))
  // highlight-end

  // omit rendering logic
}
```

Memoized selectors are a valuable tool for improving performance in a React+Redux application, because they can help us avoid unnecessary re-renders, and also avoid doing potentially complex or expensive calculations if the input data hasn't changed.

:::info

For more details on why we use selector functions and how to write memoized selectors with Reselect, see:

- [Using Redux: Deriving Data with Selectors](../../usage/deriving-data-selectors.md)

:::

### Investigating the Posts List

If we go back to our `<PostsList>` and try clicking a reaction button on one of the posts while capturing a React profiler trace, we'll see that not only did the `<PostsList>` and the updated `<PostExcerpt>` instance render, _all_ of the `<PostExcerpt>` components rendered:

![React DevTools Profiler render capture - <PostsList>](/img/tutorials/essentials/postslist-rerender.png)

Why is that? None of the other posts changed, so why would they need to re-render?

[**React's default behavior is that when a parent component renders, React will recursively render all child components inside of it!**](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/). The immutable update of one post object also created a new `posts` array. Our `<PostsList>` had to re-render because the `posts` array was a new reference, so after it rendered, React continued downwards and re-rendered all of the `<PostExcerpt>` components too.

This isn't a serious problem for our small example app, but in a larger real-world app, we might have some very long lists or very large component trees, and having all those extra components re-render might slow things down.

There's a few different ways we could optimize this behavior in `<PostsList>`.

First, we could wrap the `<PostExcerpt>` component in [`React.memo()`](https://reactjs.org/docs/react-api.html#reactmemo), which will ensure that the component inside of it only re-renders if the props have actually changed. This will actually work quite well - try it out and see what happens:

```jsx title="features/posts/PostsList.js
// highlight-next-line
let PostExcerpt = ({ post }) => {
  // omit logic
}

// highlight-next-line
PostExcerpt = React.memo(PostExcerpt)
```

Another option is to rewrite `<PostsList>` so that it only selects a list of post IDs from the store instead of the entire `posts` array, and rewrite `<PostExcerpt>` so that it receives a `postId` prop and calls `useSelector` to read the post object it needs. If `<PostsList>` gets the same list of IDs as before, it won't need to re-render, and so only our one changed `<PostExcerpt>` component should have to render.

Unfortunately, this gets tricky because we also need to have all our posts sorted by date and rendered in the right order. We could update our `postsSlice` to keep the array sorted at all times, so we don't have to sort it in the component, and use a memoized selector to extract just the list of post IDs. We could also [customize the comparison function that `useSelector` runs to check the results](https://react-redux.js.org/api/hooks#equality-comparisons-and-updates), like `useSelector(selectPostIds, shallowEqual)`, so that will skip re-rendering if the _contents_ of the IDs array haven't changed.

The last option is to find some way to have our reducer keep a separate array of IDs for all the posts, and only modify that array when posts are added or removed, and do the same rewrite of `<PostsList>` and `<PostExcerpt>`. This way, `<PostsList>` only needs to re-render when that IDs array changes.

Conveniently, Redux Toolkit has a `createEntityAdapter` function that will help us do just that.

## Normalizing Data

You've seen that a lot of our logic has been looking up items by their ID field. Since we've been storing our data in arrays, that means we have to loop over all the items in the array using `array.find()` until we find the item with the ID we're looking for.

Realistically, this doesn't take very long, but if we had arrays with hundreds or thousands of items inside, looking through the entire array to find one item becomes wasted effort. What we need is a way to look up a single item based on its ID, directly, without having to check all the other items. This process is known as "normalization".

### Normalized State Structure

"Normalized state" means that:

- We only have one copy of each particular piece of data in our state, so there's no duplication
- Data that has been normalized is kept in a lookup table, where the item IDs are the keys, and the items themselves are the values.
- There may also be an array of all of the IDs for a particular item type

JavaScript objects can be used as lookup tables, similar to "maps" or "dictionaries" in other languages. Here's what the normalized state for a group of `user` objects might look like:

```js
{
  users: {
    ids: ["user1", "user2", "user3"],
    entities: {
      "user1": {id: "user1", firstName, lastName},
      "user2": {id: "user2", firstName, lastName},
      "user3": {id: "user3", firstName, lastName},
    }
  }
}
```

This makes it easy to find a particular `user` object by its ID, without having to loop through all the other user objects in an array:

```js
const userId = 'user2'
const userObject = state.users.entities[userId]
```

:::info

For more details on why normalizing state is useful, see [Normalizing State Shape](../../usage/structuring-reducers/NormalizingStateShape.md) and the Redux Toolkit Usage Guide section on [Managing Normalized Data](https://redux-toolkit.js.org/usage/usage-guide#managing-normalized-data).

:::

### Managing Normalized State with `createEntityAdapter`

Redux Toolkit's `createEntityAdapter` API provides a standardized way to store your data in a slice by taking a collection of items and putting them into the shape of `{ ids: [], entities: {} }`. Along with this predefined state shape, it generates a set of reducer functions and selectors that know how to work with that data.

This has several benefits:

- We don't have to write the code to manage the normalization ourselves
- `createEntityAdapter`'s pre-built reducer functions handle common cases like "add all these items", "update one item", or "remove multiple items"
- `createEntityAdapter` can keep the ID array in a sorted order based on the contents of the items, and will only update that array if items are added / removed or the sorting order changes.

`createEntityAdapter` accepts an options object that may include a `sortComparer` function, which will be used to keep the item IDs array in sorted order by comparing two items (and works the same way as `Array.sort()`).

It returns an object that contains [a set of generated reducer functions for adding, updating, and removing items from an entity state object](https://redux-toolkit.js.org/api/createEntityAdapter#crud-functions). These reducer functions can either be used as a case reducer for a specific action type, or as a "mutating" utility function within another reducer in `createSlice`.

The adapter object also has a `getSelectors` function. You can pass in a selector that returns this particular slice of state from the Redux root state, and it will generate selectors like `selectAll` and `selectById`.

Finally, the adapter object has a `getInitialState` function that generates an empty `{ids: [], entities: {}}` object. You can pass in more fields to `getInitialState`, and those will be merged in.

### Updating the Posts Slice

With that in mind, let's update our `postsSlice` to use `createEntityAdapter`:

```js title="features/posts/postsSlice.js"
import {
  // highlight-next-line
  createEntityAdapter
  // omit other imports
} from '@reduxjs/toolkit'

// highlight-start
const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null
})
// highlight-end

// omit thunks

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      // highlight-next-line
      const existingPost = state.entities[postId]
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      // highlight-next-line
      const existingPost = state.entities[id]
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  },
  extraReducers(builder) {
    // omit other reducers

    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        // highlight-start
        // Use the `upsertMany` reducer as a mutating update utility
        postsAdapter.upsertMany(state, action.payload)
        // highlight-end
      })
      // highlight-start
      // Use the `addOne` reducer for the fulfilled case
      .addCase(addNewPost.fulfilled, postsAdapter.addOne)
    // highlight-end
  }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer

// highlight-start
// Export the customized selectors for this adapter using `getSelectors`
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => state.posts)
// highlight-end

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter(post => post.user === userId)
)
```

There's a lot going on there! Let's break it down.

First, we import `createEntityAdapter`, and call it to create our `postsAdapter` object. We know that we want to keep an array of all post IDs sorted with the newest post first, so we pass in a `sortComparer` function that will sort newer items to the front based on the `post.date` field.

`getInitialState()` returns an empty `{ids: [], entities: {}}` normalized state object. Our `postsSlice` needs to keep the `status` and `error` fields for loading state too, so we pass those in to `getInitialState()`.

Now that our posts are being kept as a lookup table in `state.entities`, we can change our `reactionAdded` and `postUpdated` reducers to directly look up the right posts by their IDs, instead of having to loop over the old `posts` array.

When we receive the `fetchPosts.fulfilled` action, we can use the `postsAdapter.upsertMany` function to add all of the incoming posts to the state, by passing in the draft `state` and the array of posts in `action.payload`. If there's any items in `action.payload` that already existing in our state, the `upsertMany` function will merge them together based on matching IDs.

When we receive the `addNewPost.fulfilled` action, we know we need to add that one new post object to our state. We can use the adapter functions as reducers directly, so we'll pass `postsAdapter.addOne` as the reducer function to use to handle that action.

Finally, we can replace the old hand-written `selectAllPosts` and `selectPostById` selector functions with the ones generated by `postsAdapter.getSelectors`. Since the selectors are called with the root Redux state object, they need to know where to find our posts data in the Redux state, so we pass in a small selector that returns `state.posts`. The generated selector functions are always called `selectAll` and `selectById`, so we can use ES6 destructuring syntax to rename them as we export them and match the old selector names. We'll also export `selectPostIds` the same way, since we want to read the list of sorted post IDs in our `<PostsList>` component.

### Optimizing the Posts List

Now that our posts slice is using `createEntityAdapter`, we can update `<PostsList>` to optimize its rendering behavior.

We'll update `<PostsList>` to read just the sorted array of post IDs, and pass `postId` to each `<PostExcerpt>`:

```jsx title="features/posts/PostsList.js"
// omit other imports

// highlight-start
import {
  selectAllPosts,
  fetchPosts,
  selectPostIds,
  selectPostById
} from './postsSlice'

let PostExcerpt = ({ postId }) => {
  const post = useSelector(state => selectPostById(state, postId))
  // highlight-end
  // omit rendering logic
}

export const PostsList = () => {
  const dispatch = useDispatch()
  // highlight-next-line
  const orderedPostIds = useSelector(selectPostIds)

  // omit other selections and effects

  if (postStatus === 'loading') {
    content = <Spinner text="Loading..." />
  } else if (postStatus === 'succeeded') {
    // highlight-start
    content = orderedPostIds.map(postId => (
      <PostExcerpt key={postId} postId={postId} />
    ))
    // highlight-end
  } else if (postStatus === 'error') {
    content = <div>{error}</div>
  }

  // omit other rendering
}
```

Now, if we try clicking a reaction button on one of the posts while capturing a React component performance profile, we should see that _only_ that one component re-rendered:

![React DevTools Profiler render capture - optimized <PostsList>](/img/tutorials/essentials/postslist-optimized.png)

## Converting Other Slices

We're almost done. As a final cleanup step, we'll update our other two slices to use `createEntityAdapter` as well.

### Converting the Users Slice

The `usersSlice` is fairly small, so we've only got a few things to change:

```js title="features/users/usersSlice.js"
import {
  createSlice,
  createAsyncThunk,
  // highlight-next-line
  createEntityAdapter
} from '@reduxjs/toolkit'
import { client } from '../../api/client'

// highlight-start
const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()
// highlight-end

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.users
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // highlight-next-line
    builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
  }
})

export default usersSlice.reducer

// highlight-start
export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors(state => state.users)
// highlight-end
```

The only action we're handling here always replaces the entire list of users with the array we fetched from the server. We can use `usersAdapter.setAll` to implement that instead.

Our `<AddPostForm>` is still trying to read `state.users` as an array, as is `<PostAuthor>`. Update them to use `selectAllUsers` and `selectUserById`, respectively.

### Converting the Notifications Slice

Last but not least, we'll update `notificationsSlice` as well:

```js title="features/notifications/notificationsSlice.js"
import {
  createSlice,
  createAsyncThunk,
  // highlight-next-line
  createEntityAdapter
} from '@reduxjs/toolkit'

import { client } from '../../api/client'

// highlight-start
const notificationsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date)
})
// highlight-end

// omit fetchNotifications thunk

const notificationsSlice = createSlice({
  name: 'notifications',
  // highlight-next-line
  initialState: notificationsAdapter.getInitialState(),
  reducers: {
    allNotificationsRead(state, action) {
      // highlight-start
      Object.values(state.entities).forEach(notification => {
        notification.read = true
      })
      // highlight-end
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      // highlight-start
      Object.values(state.entities).forEach(notification => {
        // Any notifications we've read are no longer new
        notification.isNew = !notification.read
      })
      notificationsAdapter.upsertMany(state, action.payload)
      // highlight-end
    })
  }
})

export const { allNotificationsRead } = notificationsSlice.actions

export default notificationsSlice.reducer

// highlight-start
export const { selectAll: selectAllNotifications } =
  notificationsAdapter.getSelectors(state => state.notifications)
// highlight-end
```

We again import `createEntityAdapter`, call it, and call `notificationsAdapter.getInitialState()` to help set up the slice.

Ironically, we do have a couple places in here where we need to loop over all notification objects and update them. Since those are no longer being kept in an array, we have to use `Object.values(state.entities)` to get an array of those notifications and loop over that. On the other hand, we can replace the previous fetch update logic with `notificationsAdapter.upsertMany`.

And with that... we're done learning the core concepts and functionality of Redux Toolkit!

## What You've Learned

We've built a lot of new behavior in this section. Let's see what how the app looks with all those changes:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-4-entitySlices/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-essentials-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

Here's what we covered in this section:

:::tip Summary

- **Memoized selector functions can be used to optimize performance**
  - Redux Toolkit re-exports the `createSelector` function from Reselect, which generates memoized selectors
  - Memoized selectors will only recalculate the results if the input selectors return new values
  - Memoization can skip expensive calculations, and ensure the same result references are returned
- **There are multiple patterns you can use to optimize React component rendering with Redux**
  - Avoid creating new object/array references inside of `useSelector` - those will cause unnecessary re-renders
  - Memoized selector functions can be passed to `useSelector` to optimize rendering
  - `useSelector` can accept an alternate comparison function like `shallowEqual` instead of reference equality
  - Components can be wrapped in `React.memo()` to only re-render if their props change
  - List rendering can be optimized by having list parent components read just an array of item IDs, passing the IDs to list item children, and retrieving items by ID in the children
- **Normalized state structure is a recommended approach for storing items**
  - "Normalization" means no duplication of data, and keeping items stored in a lookup table by item ID
  - Normalized state shape usually looks like `{ids: [], entities: {}}`
- **Redux Toolkit's `createEntityAdapter` API helps manage normalized data in a slice**
  - Item IDs can be kept in sorted order by passing in a `sortComparer` option
  - The adapter object includes:
    - `adapter.getInitialState`, which can accept additional state fields like loading state
    - Prebuilt reducers for common cases, like `setAll`, `addMany`, `upsertOne`, and `removeMany`
    - `adapter.getSelectors`, which generates selectors like `selectAll` and `selectById`

:::

## What's Next?

There's a couple more sections in the Redux Essentials tutorial, but this is a good spot to pause and put what you've learned into practice.

The concepts we've covered in this tutorial so far should be enough to get you started building your own applications using React and Redux. Now's a great time to try working on a project yourself to solidify these concepts and see how they work in practice. If you're not sure what kind of a project to build, see [this list of app project ideas](https://github.com/florinpop17/app-ideas) for some inspiration.

**Redux Toolkit also includes a powerful data fetching and caching API called "RTK Query"**. RTK Query is an optional addon that can completely eliminate the need to write any data fetching logic yourself. In [Part 7: RTK Query Basics](./part-7-rtk-query-basics.md), you'll learn what RTK Query is, what problems it solves, and how to use it to fetch and use cached data in your application.

The Redux Essentials tutorial focused on "how to use Redux correctly", rather than "how it works" or "why it works this way". In particular, Redux Toolkit is a higher-level set of abstractions and utilities, and it's helpful to understand what the abstractions in RTK are actually doing for you. Reading through the ["Redux Fundamentals" tutorial](../fundamentals/part-1-overview.md) will help you understand how to write Redux code "by hand", and why we recommend Redux Toolkit as the default way to write Redux logic.

The [Using Redux](../../usage/index.md) section has information on a number of important concepts, like [how to structure your reducers](../../usage/structuring-reducers/StructuringReducers.md), and [our Style Guide page](../../style-guide/style-guide) has important information on our recommended patterns and best practices.

If you'd like to know more about _why_ Redux exists, what problems it tries to solve, and how it's meant to be used, see Redux maintainer Mark Erikson's posts on [The Tao of Redux, Part 1: Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/) and [The Tao of Redux, Part 2: Practice and Philosophy](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/).

If you're looking for help with Redux questions, come join [the `#redux` channel in the Reactiflux server on Discord](https://www.reactiflux.com).

**Thanks for reading through this tutorial, and we hope you enjoy building applications with Redux!**

---
id: part-7-rtk-query-basics
title: 'Redux Essentials, Part 7: RTK Query Basics'
sidebar_label: 'RTK Query Basics'
description: 'The official Redux Essentials tutorial: learn how to use RTK Query for data fetching'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- How RTK Query simplifies data fetching for Redux apps
- How to set up RTK Query
- How to use RTK Query for basic data fetching and update requests

:::

:::info Prerequisites

- Completion of the previous sections of this tutorial to understand Redux Toolkit usage patterns

:::

## Introduction

in [Part 5: Async Logic and Data Fetching](./part-5-async-logic.md) and [Part 6: Performance and Normalization](./part-6-performance-normalization.md), we saw the standard patterns used for data fetching and caching with Redux. Those patterns include using async thunks to fetch data, dispatching actions with the results, managing request loading state in the store, and normalizing the cached data to enable easier lookups and updates of individual items by ID.

In this section, we'll look at how to use RTK Query, a data fetching and caching solution designed for Redux applications, and see how it simplifies the process of fetching data and using it in our components.

## RTK Query Overview

**RTK Query** is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, **eliminating the need to hand-write data fetching & caching logic yourself**.

RTK Query is **an optional addon included in the Redux Toolkit package**, and its functionality is built on top of the other APIs in Redux Toolkit.

### Motivation

Web applications normally need to fetch data from a server in order to display it. They also usually need to make updates to that data, send those updates to the server, and keep the cached data on the client in sync with the data on the server. This is made more complicated by the need to implement other behaviors used in today's applications:

- Tracking loading state in order to show UI spinners
- Avoiding duplicate requests for the same data
- Optimistic updates to make the UI feel faster
- Managing cache lifetimes as the user interacts with the UI

We've already seen how we can implement these behaviors using Redux Toolkit.

However, historically Redux has never included anything built in to help _completely_ solve these use cases. Even when we use `createAsyncThunk` together with `createSlice`, there's still a fair amount of manual work involved in making requests and managing loading state. We have to create the async thunk, make the actual request, pull relevant fields out of the response, add loading state fields, add handlers in `extraReducers` to handle the `pending/fulfilled/rejected` cases, and actually write the proper state updates.

Over the last couple years, the React community has come to realize that **"data fetching and caching" is really a different set of concerns than "state management"**. While you can use a state management library like Redux to cache data, the use cases are different enough that it's worth using tools that are purpose-built for the data fetching use case.

RTK Query takes inspiration from other tools that have pioneered solutions for data fetching, like Apollo Client, React Query, Urql, and SWR, but adds a unique approach to its API design:

- The data fetching and caching logic is built on top of Redux Toolkit's `createSlice` and `createAsyncThunk` APIs
- Because Redux Toolkit is UI-agnostic, RTK Query's functionality can be used with any UI layer
- API endpoints are defined ahead of time, including how to generate query parameters from arguments and transform responses for caching
- RTK Query can also generate React hooks that encapsulate the entire data fetching process, provide `data` and `isFetching` fields to components, and manage the lifetime of cached data as components mount and unmount
- RTK Query provides "cache entry lifecycle" options that enable use cases like streaming cache updates via websocket messages after fetching the initial data
- We have early working examples of code generation of API slices from OpenAPI and GraphQL schemas
- Finally, RTK Query is completely written in TypeScript, and is designed to provide an excellent TS usage experience

### What's included

#### APIs

RTK Query is included within the installation of the core Redux Toolkit package. It is available via either of the two entry points below:

```ts no-transpile
import { createApi } from '@reduxjs/toolkit/query'

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from '@reduxjs/toolkit/query/react'
```

RTK Query primarily consists of two APIs:

- [`createApi()`](https://redux-toolkit.js.org/rtk-query/api/createApi): The core of RTK Query's functionality. It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints, including configuration of how to fetch and transform that data. In most cases, you should use this once per app, with "one API slice per base URL" as a rule of thumb.
- [`fetchBaseQuery()`](https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery): A small wrapper around [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that aims to simplify requests. Intended as the recommended `baseQuery` to be used in `createApi` for the majority of users.

#### Bundle Size

RTK Query adds a fixed one-time amount to your app's bundle size. Since RTK Query builds on top of Redux Toolkit and React-Redux, the added size varies depending on whether you are already using those in your app. The estimated min+gzip bundle sizes are:

- If you are using RTK already: ~9kb for RTK Query and ~2kb for the hooks.
- If you are not using RTK already:
  - Without React: 17 kB for RTK+dependencies+RTK Query
  - With React: 19kB + React-Redux, which is a peer dependency

Adding additional endpoint definitions should only increase size based on the actual code inside the `endpoints` definitions, which will typically be just a few bytes.

The functionality included in RTK Query quickly pays for the added bundle size, and the elimination of hand-written data fetching logic should be a net improvement in size for most meaningful applications.

### Thinking in RTK Query Caching

Redux has always had an emphasis on predictability and explicit behavior. There's no "magic" involved in Redux - you should be able to understand what's happening in the application because **all Redux logic follows the same basic patterns of dispatching actions and updating state via reducers**. This does mean that sometimes you have to write more code to make things happen, but the tradeoff is that should be very clear what the data flow and behavior is.

**The Redux Toolkit core APIs do not change any of the basic data flow in a Redux app** You're still dispatching actions and writing reducers, just with less code than writing all of that logic by hand. **RTK Query is the same way**. It's an additional level of abstraction, but **internally it's still doing the exact same steps we've already seen for managing async requests and their results**.

However, when you use RTK Query, there _is_ a mindset shift that happens. We're no longer thinking about "managing state" per se. Instead, **we now think about "managing _cached data_"**. Rather than trying to write reducers ourselves, we're now going to focus on defining **"where is this data coming from?", "how should this update be sent?", "when should this cached data be re-fetched?", and "how should the cached data be updated?"**. How that data gets fetched, stored, and retrieved becomes implementation details we no longer have to worry about.

We'll see how this mindset shift applies as we continue.

## Setting Up RTK Query

Our example application already works, but now it's time to migrate all of the async logic over to use RTK Query. As we go through, we'll see how to use all the major features of RTK Query, as well as how to migrate existing uses of `createAsyncThunk` and `createSlice` over to use the RTK Query APIs.

### Defining an API Slice

Previously, we've defined separate "slices" for each of our different data types like Posts, Users, and Notifications. Each slice had its own reducer, defined its own actions and thunks, and cached the entries for that data type separately.

With RTK Query, **the logic for managing cached data is centralized into a single "API slice" per application**. In much the same way that you have a single Redux store per app, we now have a single slice for _all_ our cached data.

We'll start by defining a new `apiSlice.js` file. Since this isn't specific to any of the other "features" we've already written, we'll add a new `features/api/` folder and put `apiSlice.js` in there. Let's fill out the API slice file, and then break down the code inside to see what it's doing:

```js title="features/api/apiSlice.js"
// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPosts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => '/posts'
    })
  })
})

// Export the auto-generated hook for the `getPost` query endpoint
export const { useGetPostsQuery } = apiSlice
```

RTK Query's functionality is based on a single method, called `createApi`. All of the Redux Toolkit APIs we've seen so far are UI-agnostic, and could be used with _any_ UI layer. The RTK Query core logic is the same way. However, RTK Query also includes a React-specific version of `createApi`, and since we're using RTK and React together, we need to use that to take advantage of RTK's React integration. So, we import from `'@reduxjs/toolkit/query/react'` specifically.

#### API Slice Parameters

When we call `createApi`, there are two fields that are required:

- `baseQuery`: a function that knows how to fetch data from the server. RTK Query includes `fetchBaseQuery`, a small wrapper around the standard `fetch()` function that handles typical processing of requests and responses. When we create a `fetchBaseQuery` instance, we can pass in the base URL of all future requests, as well as override behavior such as modifying request headers.
- `endpoints`: a set of operations that we've defined for interacting with this server. Endpoints can be **_queries_**, which return data for caching, or **_mutations_**, which send an update to the server. The endpoints are defined using a callback function that accepts a `builder` parameter and returns an object containing endpoint definitions created with `builder.query()` and `builder.mutation()`.

`createApi` also accepts a `reducerPath` field, which defines the expected top-level state slice field for the generated reducer. For our other slices like `postsSlice`, there's no guarantee that it will be used to update `state.posts` - we _could_ have attached the reducer anywhere in the root state, like `someOtherField: postsReducer`. Here, `createApi` expects us to tell it where the cache state will exist when we add the cache reducer to the store. If you don't provide a `reducerPath` option, it defaults to `'api'`, so all your RTKQ cache data will be stored under `state.api`.

If you forget to add the reducer to the store, or attach it at a different key than what is specified in `reducerPath`, RTKQ will log an error to let you know this needs to be fixed.

#### Defining Endpoints

The first part of the URL for all requests is defined as `'/fakeApi'` in the `fetchBaseQuery` definition.

For our first step, we want to add an endpoint that will return the entire list of posts from the fake API server. We'll include an endpoint called `getPosts`, and define it as a **query endpoint** using `builder.query()`. This method accepts many options for configuring how to make the request and process the response. For now, all we need to do is supply the remaining piece of the URL path by defining a `query` option, with a callback that returns the URL string: `() => '/posts'`.

By default, query endpoints will use a `GET` HTTP request, but you can override that by returning an object like `{url: '/posts', method: 'POST', body: newPost}` instead of just the URL string itself. You can also define several other options for the request this way, such as setting headers.

#### Exporting API Slices and Hooks

In our earlier slice files, we just exported the action creators and the slice reducers, because those are all that's needed in other files. With RTK Query, we typically export the entire "API slice" object itself, because it has several fields that may be useful.

Finally, look carefully at the last line of this file. Where's this `useGetPostsQuery` value coming from?

**RTK Query's React integration will automatically generate React hooks for _every_ endpoint we define!** Those hooks encapsulate the process of triggering a request when a component mounts, and re-rendering the component as the request is processed and data is available. We can export those hooks out of this API slice file for use in our React components.

The hooks are automatically named based on a standard convention:

- `use`, the normal prefix for any React hook
- The name of the endpoint, capitalized
- The type of the endpoint, `Query` or `Mutation`

In this case, our endpoint is `getPosts` and it's a query endpoint, so the generated hook is `useGetPostsQuery`.

### Configuring the Store

We now need to hook up the API slice to our Redux store. We can modify the existing `store.js` file to add the API slice's cache reducer to the state. Also, the API slice generates a custom middleware that needs to be added to the store. This middleware _must_ be added as well - it manages cache lifetimes and expiration.

```js title="app/store.js"
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'
// highlight-next-line
import { apiSlice } from '../features/api/apiSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    // highlight-next-line
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  // highlight-start
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
  // highlight-end
})
```

We can reuse the `apiSlice.reducerPath` field as a computed key in the `reducer` parameter, to ensure that the caching reducer is added in the right place.

We need to keep all of the existing standard middleware like `redux-thunk` in the store setup, and the API slice's middleware typically goes after those. We can do that by supplying the `middleware` argument to `configureStore`, calling the provided `getDefaultMiddleware()` method, and adding `apiSlice.middleware` at the end of the returned middleware array.

## Displaying Posts with Queries

### Using Query Hooks in Components

Now that we have the API slice defined and added to the store, we can import the generated `useGetPostsQuery` hook into our `<PostsList>` component and use it there.

Currently, `<PostsList>` is specifically importing `useSelector`, `useDispatch`, and `useEffect`, reading posts data and loading state from the store, and dispatching the `fetchPosts()` thunk on mount to trigger the data fetch. **The `useGetPostsQueryHook` replaces all of that!**

Let's see how `<PostsList>` looks when we use this hook:

```jsx title="features/posts/PostsList.js"
import React from 'react'
import { Link } from 'react-router-dom'

import { Spinner } from '../../components/Spinner'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

// highlight-next-line
import { useGetPostsQuery } from '../api/apiSlice'

// highlight-next-line
let PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  )
}

export const PostsList = () => {
  // highlight-start
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery()
  // highlight-end

  let content

  // highlight-next-line
  if (isLoading) {
    content = <Spinner text="Loading..." />
    // highlight-next-line
  } else if (isSuccess) {
    content = posts.map(post => <PostExcerpt key={post.id} post={post} />)
    // highlight-next-line
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
```

Conceptually, `<PostsList>` is still doing all the same work it was before, but we were able to replace the multiple `useSelector` calls and the `useEffect` dispatch with a single call to `useGetPostsQuery()`.

Each generated query hook returns a "result" object containing several fields, including:

- `data`: the actual response contents from the server. **This field will be `undefined` until the response is received**.
- `isLoading`: a boolean indicating if this hook is currently making the _first_ request to the server. (Note that if the parameters change to request different data, `isLoading` will remain false.)
- `isFetching`: a boolean indicating if the hook is currently making _any_ request to the server
- `isSuccess`: a boolean indicating if the hook has made a successful request and has cached data available (ie, `data` should be defined now)
- `isError`: a boolean indicating if the last request had an error
- `error`: a serialized error object

It's common to destructure fields from the result object, and possibly rename `data` to a more specific variable like `posts` to describe what it contains. We can then use the status booleans and the `data/error` fields to render the UI that we want. However, if you're using TypeScript, you may need to keep the original object as-is and refer to flags as `result.isSuccess` in your conditional checks, so that TS can correctly infer that `data` is valid.

Previously, we were selecting a list of post IDs from the store, passing a post ID to each `<PostExcerpt>` component, and selecting each individual `Post` object from the store separately. Since the `posts` array already has all of the post objects, we've switched back to passing the post objects themselves down as props.

### Sorting Posts

Unfortunately, the posts are now being displayed out of order. Previously, we were sorting them by date at the reducer level with `createEntityAdapter`'s sorting option. Since the API slice is just caching the exact array returned from the server, there's no specific sorting happening - whatever order the server sent back is what we've got.

There's a few different options for how to handle this. For now, we'll do the sorting inside of `<PostsList>` itself, and we'll talk about the other options and their tradeoffs later.

We can't just call `posts.sort()` directly, because `Array.sort()` mutates the existing array, so we'll need to make a copy of it first. To avoid re-sorting on every rerender, we can do the sorting in a `useMemo()` hook. We'll also want to give `posts` a default empty array in case it's `undefined`, so that we always have an array to sort on.

```jsx title="features/posts/PostsList.js"
// omit setup

export const PostsList = () => {
  const {
    // highlight-next-line
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery()

  // highlight-start
  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice()
    // Sort posts in descending chronological order
    sortedPosts.sort((a, b) => b.date.localeCompare(a.date))
    return sortedPosts
  }, [posts])
  // highlight-end

  let content

  if (isLoading) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    // highlight-next-line
    content = sortedPosts.map(post => <PostExcerpt key={post.id} post={post} />)
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
```

## Displaying Individual Posts

We've updated `<PostsList>` to fetch a list of _all_ posts, and we're showing pieces of each `Post` inside the list. But, if we click on "View Post" for any of them, our `<SinglePostPage>` component will fail to find a post in the old `state.posts` slice and show us a "Post not found!" error. We need to update `<SinglePostPage>` to use RTK Query as well.

There's a couple ways we could do this. One would be to have `<SinglePostPage>` call the same `useGetPostsQuery()` hook, get the _entire_ array of posts, and find just the one `Post` object it needs to display. Query hooks also have a `selectFromResult` option that would allow us to do that same lookup earlier, inside the hook itself - we'll see this in action later.

Instead, we're going to try adding another endpoint definition that will let us request a single post from the server based on its ID. This is somewhat redundant, but it will allow us to see how RTK Query can be used to customize query requests based on arguments.

### Adding the Single Post Query Endpoint

In `apiSlice.js`, we're going to add another query endpoint definition, called `getPost` (no 's' this time):

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts'
    }),
    // highlight-start
    getPost: builder.query({
      query: postId => `/posts/${postId}`
    })
    // highlight-end
  })
})

// highlight-next-line
export const { useGetPostsQuery, useGetPostQuery } = apiSlice
```

The `getPost` endpoint looks much like the existing `getPosts` endpoint, but the `query` parameter is different. Here, `query` takes an argument called `postId`, and we're using that `postId` to construct the server URL. That way we can make a server request for just one specific `Post` object.

This also generates a new `useGetPostQuery` hook, so we export that as well.

### Query Arguments and Cache Keys

Our `<SinglePostPage>` is currently reading one `Post` entry from `state.posts` based on ID. We need to update it to call the new `useGetPostQuery` hook, and use similar loading state as the main list.

```jsx title="features/posts/SinglePostPage.js"
import React from 'react'
import { Link } from 'react-router-dom'

// highlight-start
import { Spinner } from '../../components/Spinner'
import { useGetPostQuery } from '../api/apiSlice'
// highlight-end

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  // highlight-next-line
  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)

  let content
  // highlight-start
  if (isFetching) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    // highlight-end
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    )
  }

  return <section>{content}</section>
}
```

Notice that we're taking the `postId` we've read from the router match, and passing it as an argument to `useGetPostQuery`. The query hook will then use that to construct the request URL, and fetch this specific `Post` object.

So how is all this data being cached, anyway? Let's click "View Post" for one of our post entries, then take a look at what's inside the Redux store at this point.

![RTK Query data cached in the store state](/img/tutorials/essentials/devtools-rtkq-cache.png)

We can see that we have a top-level `state.api` slice, as expected from the store setup. Inside of there is a section called `queries`, and it currently has two items. The key `getPosts(undefined)` represents the metadata and response contents for the request we made with the `getPosts` endpoint. Similarly, the key `getPost('abcd1234')` is for the specific request we just made for this one post.

RTK Query creates a "cache key" for each unique endpoint + argument combination, and stores the results for each cache key separately. That means that **you can use the same query hook multiple times, pass it different query parameters, and each result will be cached separately in the Redux store**.

It's also important to note that **the query parameter must be a _single_ value!** If you need to pass through multiple parameters, you must pass an object containing multiple fields (exactly the same as with `createAsyncThunk`). RTK Query will do a "shallow stable" comparison of the fields, and re-fetch the data if any of them have changed.

Notice that the names of the actions in the left-hand list are much more generic and less descriptive: `api/executeQuery/fulfilled`, instead of `posts/fetchPosts/fulfilled`. This is a tradeoff of using an additional abstraction layer. The individual actions do contain the specific endpoint name under `action.meta.arg.endpointName`, but it's not as easily viewable in the action history list.

:::tip

The Redux team is working on a new RTK Query view for the Redux DevTools that will specifically show RTK Query data in a more usable format. This includes info on each endpoint and cache result, stats on query timing, and much more. This will be added to the DevTools Extension in the near future. For a preview, see:

- [Redux DevTools #750: Add RTK Query-Inspector monitor](https://github.com/reduxjs/redux-devtools/pull/750)
- [RTK Query Monitor preview demo](https://rtk-query-monitor-demo.netlify.app/)

:::

## Creating Posts with Mutations

We've seen how we can fetch data from the server by defining "query" endpoints, but what about sending updates to the server?

RTK Query lets us define **mutation endpoints** that update data on the server. Let's add a mutation that will let us add a new post.

### Adding the New Post Mutation Endpoint

Adding a mutation endpoint is very similar to adding a query endpoint. The biggest difference is that we define the endpoint using `builder.mutation()` instead of `builder.query()`. Also, we now need to change the HTTP method to be a `'POST'` request, and we have to provide the body of the request as well.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts'
    }),
    getPost: builder.query({
      query: postId => `/posts/${postId}`
    }),
    // highlight-start
    addNewPost: builder.mutation({
      query: initialPost => ({
        url: '/posts',
        method: 'POST',
        // Include the entire post object as the body of the request
        body: initialPost
      })
    })
    // highlight-end
  })
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  // highlight-next-line
  useAddNewPostMutation
} = apiSlice
```

Here our `query` option returns an object containing `{url, method, body}`. Since we're using `fetchBaseQuery` to make the requests, the `body` field will automatically be JSON-serialized for us.

Like with query endpoints, the API slice automatically generates a React hook for the mutation endpoint - in this case, `useAddNewPostMutation`.

### Using Mutation Hooks in Components

Our `<AddNewPostForm>` is already dispatching an async thunk to add a post whenever we click the "Save Post" button. To do that, it has to import `useDispatch` and the `addNewPost` thunk. The mutation hooks replace both of those, and the usage pattern is very similar.

```js title="features/posts/AddNewPostForm"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Spinner } from '../../components/Spinner'
import { useAddNewPostMutation } from '../api/apiSlice'
import { selectAllUsers } from '../users/usersSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  // highlight-next-line
  const [addNewPost, { isLoading }] = useAddNewPostMutation()
  const users = useSelector(selectAllUsers)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  // highlight-next-line
  const canSave = [title, content, userId].every(Boolean) && !isLoading

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        // highlight-next-line
        await addNewPost({ title, content, user: userId }).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch (err) {
        console.error('Failed to save the post: ', err)
      }
    }
  }

  // omit rendering logic
}
```

Mutation hooks return an array with two values:

- The first value is a "trigger function". When called, it makes the request to the server, with whatever argument you provide. This is effectively like a thunk that has already been wrapped to immediately dispatch itself.
- The second value is an object with metadata about the current in-progress request, if any. This includes an `isLoading` flag to indicate if a request is in-progress.

We can replace the existing thunk dispatch and component loading state with the trigger function and `isLoading` flag from the `useAddNewPostMutation` hook, and the rest of the component stays the same.

As with the thunk dispatch, we call `addNewPost` with the initial post object. This returns a special `Promise` with a `.unwrap()` method, and we can `await addNewPost().unwrap()` to handle any potential errors with a standard `try/catch` block.

## Refreshing Cached Data

When we click "Save Post", we can view the Network tab in the browser DevTools and confirm that the HTTP `POST` request succeeded. But, the new post isn't showing up in our `<PostsList>` if we go back there. We still have the same cached data in memory.

We need to tell RTK Query to refresh its cached list of posts so that we can see the new post we just added.

### Refetching Posts Manually

The first option is to manually force RTK Query to refetch data for a given endpoint. Query hook result objects include a `refetch` function that we can call to force a refetch. We can temporarily add a "Refetch Posts" button to `<PostsList>` and click that after adding a new post.

Also, earlier we saw that query hooks have both an `isLoading` flag, which is `true` if this is the _first_ request for data, and an `isFetching` flag, which is `true` while _any_ request for data is in progress. We could look at the `isFetching` flag, and replace the entire list of posts with a loading spinner again while the refetch is in progress. But, that could be a bit annoying, and besides - we already have all these posts, why should we completely hide them?

Instead, we could make the existing list of posts partially transparent to indicate the data is stale, but keep them visible while the refetch is happening. As soon as the request completes, we can return to showing the posts list as normal.

```jsx title="features/posts/PostsList.js"
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
// highlight-next-line
import classnames from 'classnames'

// omit other imports and PostExcerpt

export const PostsList = () => {
  const {
    data: posts = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    // highlight-next-line
    refetch
  } = useGetPostsQuery()

  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice()
    sortedPosts.sort((a, b) => b.date.localeCompare(a.date))
    return sortedPosts
  }, [posts])

  let content

  if (isLoading) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    // highlight-start
    const renderedPosts = sortedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ))

    const containerClassname = classnames('posts-container', {
      disabled: isFetching
    })

    content = <div className={containerClassname}>{renderedPosts}</div>
    // highlight-end
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      // highlight-next-line
      <button onClick={refetch}>Refetch Posts</button>
      {content}
    </section>
  )
}
```

If we add a new post and then click "Refetch Posts", we should now see the posts list go semi-transparent for a couple seconds, then re-render with the new post added at the top.

### Automatic Refreshing with Cache Invalidation

Having users manually click to refetch data is occasionally necessary, but definitely not a good solution for normal usage.

We know that our "server" has a complete list of all posts, including the one we just added. Ideally, we want to have our app automatically refetch the updated list of posts as soon as the mutation request has completed. That way we know our client-side cached data is in sync with what the server has.

**RTK Query lets us define relationships between queries and mutations to enable automatic data refetching, using "tags"**. A "tag" is a string or small object that lets you name certain types of data, and _invalidate_ portions of the cache. When a cache tag is invalidated, RTK Query will automatically refetch the endpoints that were marked with that tag.

Basic tag usage requires adding three pieces of information to our API slice:

- A root `tagTypes` field in the API slice object, declaring an array of string tag names for data types such as `'Post'`
- A `providesTags` array in query endpoints, listing a set of tags describing the data in that query
- An `invalidatesTags` array in mutation endpoints, listing a set of tags that are invalidated every time that mutation runs

We can add a single tag called `'Post'` to our API slice that will let us automatically refetch our `getPosts` endpoint any time we add a new post:

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  // highlight-next-line
  tagTypes: ['Post'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
      // highlight-next-line
      providesTags: ['Post']
    }),
    getPost: builder.query({
      query: postId => `/posts/${postId}`
    }),
    addNewPost: builder.mutation({
      query: initialPost => ({
        url: '/posts',
        method: 'POST',
        body: initialPost
      }),
      // highlight-next-line
      invalidatesTags: ['Post']
    })
  })
})
```

That's all we need! Now, if we click "Save Post", you should see the `<PostsList>` component automatically gray out after a couple seconds, and then rerender with the newly added post at the top.

Note that there's nothing special about the literal string `'Post'` here. We could have called it `'Fred'`, `'qwerty'`, or anything else. It just needs to be the same string in each field, so that RTK Query knows "when this mutation happens, invalidate all endpoints that have that same tag string listed".

## What You've Learned

With RTK Query, the actual details of how to manage data fetching, caching, and loading state are abstracted away. This simplifies application code considerably, and lets us focus on higher-level concerns about intended app behavior instead. Since RTK Query is implemented using the same Redux Toolkit APIs we've already seen, we can still use the Redux DevTools to view the changes in our state over time.

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-5-createApi/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-essentials-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

:::tip Summary

- **RTK Query is a data fetching and caching solution included in Redux Toolkit**
  - RTK Query abstracts the process of managing cached server data for you, and eliminates the need to write logic for loading state, storing results, and making requests
  - RTK Query builds on top of the same patterns used in Redux, like async thunks
- **RTK Query uses a single "API slice" per application, defined using `createApi`**
  - RTK Query provides UI-agnostic and React-specific versions of `createApi`
  - API slices define multiple "endpoints" for different server operations
  - The API slice includes auto-generated React hooks if using the React integration
- **Query endpoints allow fetching and caching data from the server**
  - Query hooks return a `data` value, plus loading status flags
  - The query can be re-fetched manually, or automatically using "tags" for cache invalidation
- **Mutation endpoints allow updating data on the server**
  - Mutation hooks return a "trigger" function that sends an update request, plus loading status
  - The trigger function returns a Promise that can be "unwrapped" and awaited

:::

## What's Next?

RTK Query provides solid default behavior, but also includes many options for customizing how requests are managed and working with cached data. In [Part 8: RTK Query Advanced Patterns](./part-8-rtk-query-advanced.md), we'll see how to use these options to implement useful features like optimistic updates.

---
id: part-8-rtk-query-advanced
title: 'Redux Essentials, Part 8: RTK Query Advanced Patterns'
sidebar_label: 'RTK Query Advanced Patterns'
description: 'The official Redux Essentials tutorial: learn advanced patterns for fetching data with RTK Query'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

:::tip What You'll Learn

- How to use tags with IDs to manage cache invalidation and refetching
- How to work with the RTK Query cache outside of React
- Techniques for manipulating response data
- Implementing optimistic updates and streaming updates

:::

:::info Prerequisites

- Completion of [Part 7](./part-7-rtk-query-basics.md) to understand RTK Query setup and basic usage

:::

## Introduction

In [Part 7: RTK Query Basics](./part-7-rtk-query-basics.md), we saw how to set up and use the RTK Query API to handle data fetching and caching in our application. We added an "API slice" to our Redux store, defined "query" endpoints to fetch posts data, and a "mutation" endpoint to add a new post.

In this section, we'll continue migrating our example app to use RTK Query for the other data types, and see how to use some of its advanced features to simplify the codebase and improve user experience.

:::info

Some of the changes in this section aren't strictly necessary - they're included to demonstrate RTK Query's features and show some of the things you _can_ do, so you can see how to use these features if you need them.

:::

## Editing Posts

We've already added a mutation endpoint to save new Post entries to the server, and used that in our `<AddNewPostForm>`. Next, we need to handle updating the `<EditPostForm>` to let us edit an existing post.

### Updating the Edit Post Form

As with adding posts, the first step is to define a new mutation endpoint in our API slice. This will look much like the mutation for adding a post, but the endpoint needs to include the post ID in the URL and use an HTTP `PATCH` request to indicate that it's updating some of the fields.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Post']
    }),
    getPost: builder.query({
      query: postId => `/posts/${postId}`
    }),
    addNewPost: builder.mutation({
      query: initialPost => ({
        url: '/posts',
        method: 'POST',
        body: initialPost
      }),
      invalidatesTags: ['Post']
    }),
    // highlight-start
    editPost: builder.mutation({
      query: post => ({
        url: `/posts/${post.id}`,
        method: 'PATCH',
        body: post
      })
    })
    // highlight-end
  })
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  // highlight-next-line
  useEditPostMutation
} = apiSlice
```

Once that's added, we can update the `<EditPostForm>`. It needs to read the original `Post` entry from the store, use that to initialize the component state to edit the fields, and then send the updated changes to the server. Currently, we're reading the `Post` entry with `selectPostById`, and manually dispatching a `postUpdated` thunk for the request.

We can use the same `useGetPostQuery` hook that we used in `<SinglePostPage>` to read the `Post` entry from the cache in the store, and we'll use the new `useEditPostMutation` hook to handle saving the changes.

```jsx title="features/posts/EditPostForm.js"
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Spinner } from '../../components/Spinner'
// highlight-next-line
import { useGetPostQuery, useEditPostMutation } from '../api/apiSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params

  // highlight-next-line
  const { data: post } = useGetPostQuery(postId)
  // highlight-next-line
  const [updatePost, { isLoading }] = useEditPostMutation()

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const history = useHistory()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = async () => {
    if (title && content) {
      // highlight-next-line
      await updatePost({ id: postId, title, content })
      history.push(`/posts/${postId}`)
    }
  }

  // omit rendering logic
}
```

### Cache Data Subscription Lifetimes

Let's try this out and see what happens. Open up your browser's DevTools, go to the Network tab, and refresh the main page. You should see a `GET` request to `/posts` as we fetch the initial data. When you click on a "View Post" button, you should see a second request to `/posts/:postId` that returns that single post entry.

Now click "Edit Post" inside the single post page. The UI switches over to show `<EditPostForm>`, but this time there's no network request for the individual post. Why not?

![RTK Query network requests](/img/tutorials/essentials/devtools-cached-requests.png)

**RTK Query allows multiple components to subscribe to the same data, and will ensure that each unique set of data is only fetched once.** Internally, RTK Query keeps a reference counter of active "subscriptions" to each endpoint + cache key combination. If Component A calls `useGetPostQuery(42)`, that data will be fetched. If Component B then mounts and also calls `useGetPostQuery(42)`, it's the exact same data being requested. The two hook usages will return the exact same results, including fetched `data` and loading status flags.

When the number of active subscriptions goes down to 0, RTK Query starts an internal timer. **If the timer expires before any new subscriptions for the data are added, RTK Query will remove that data from the cache automatically**, because the app no longer needs the data. However, if a new subscription _is_ added before the timer expires, the timer is canceled, and the already-cached data is used without needing to refetch it.

In this case, our `<SinglePostPage>` mounted and requested that individual `Post` by ID. When we clicked on "Edit Post", the `<SinglePostPage>` component was unmounted by the router, and the active subscription was removed due to unmounting. RTK Query immediately started a "remove this post data" timer. But, the `<EditPostPage>` component mounted right away and subscribed to the same `Post` data with the same cache key. So, RTK Query canceled the timer and kept using the same cached data instead of fetching it from the server.

By default, **unused data is removed from the cache after 60 seconds**, but this can be configured in either the root API slice definition or overridden in the individual endpoint definitions using the `keepUnusedDataFor` flag, which specifies a cache lifetime in seconds.

### Invalidating Specific Items

Our `<EditPostForm>` component can now save the edited post to the server, but we have a problem. If we click "Save Post" while editing, it returns us to the `<SinglePostPage>`, but it's still showing the old data without the edits. The `<SinglePostPage>` is still using the cached `Post` entry that was fetched earlier. For that matter, if we return to the main page and look at the `<PostsList>`, it's also showing the old data. **We need a way to force a refetch of _both_ the individual `Post` entry, and the entire list of posts**.

Earlier, we saw how we can use "tags" to invalidate parts of our cached data. We declared that the `getPosts` query endpoint _provides_ a `'Post'` tag, and that the `addNewPost` mutation endpoint _invalidates_ that same `'Post'` tag. That way, every time we add a new post, we force RTK Query to refetch the entire list of posts from the `getQuery` endpoint.

We could add a `'Post'` tag to both the `getPost` query and the `editPost` mutation, but that would force all the other individual posts to be refetched as well. Fortunately, **RTK Query lets us define specific tags, which let us be more selective in invalidating data**. These specific tags look like `{type: 'Post', id: 123}`.

Our `getPosts` query defines a `providesTags` field that is an array of strings. The `providesTags` field can also accept a callback function that receives the `result` and `arg`, and returns an array. This allows us to create tag entries based on IDs of data that is being fetched. Similarly, `invalidatesTags` can be a callback as well.

In order to get the right behavior, we need to set up each endpoint with the right tags:

- `getPosts`: provides a general `'Post'` tag for the whole list, as well as a specific `{type: 'Post', id}` tag for each received post object
- `getPost`: provides a specific `{type: 'Post', id}` object for the individual post object
- `addNewPost`: invalidates the general `'Post'` tag, to refetch the whole list
- `editPost`: invalidates the specific `{type: 'Post', id}` tag. This will force a refetch of both the _individual_ post from `getPost`, as well as the _entire_ list of posts from `getPosts`, because they both provide a tag that matches that `{type, id}` value.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
      // highlight-start
      providesTags: (result = [], error, arg) => [
        'Post',
        ...result.map(({ id }) => ({ type: 'Post', id }))
      ]
      // highlight-end
    }),
    getPost: builder.query({
      query: postId => `/posts/${postId}`,
      // highlight-start
      providesTags: (result, error, arg) => [{ type: 'Post', id: arg }]
      // highlight-end
    }),
    addNewPost: builder.mutation({
      query: initialPost => ({
        url: '/posts',
        method: 'POST',
        body: initialPost
      }),
      // highlight-next-line
      invalidatesTags: ['Post']
    }),
    editPost: builder.mutation({
      query: post => ({
        url: `posts/${post.id}`,
        method: 'PATCH',
        body: post
      }),
      // highlight-next-line
      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }]
    })
  })
})
```

It's possible for the `result` argument in these callbacks to be undefined if the response has no data or there's an error, so we have to handle that safely. For `getPosts` we can do that by using a default argument array value to map over, and for `getPost` we're already returning a single-item array based on the argument ID. For `editPost`, we know the ID of the post from the partial post object that was passed into the trigger function, so we can read it from there.

With those changes in place, let's go back and try editing a post again, with the Network tab open in the browser DevTools.

![RTK Query invalidation and refetching](/img/tutorials/essentials/devtools-cached-invalidation-refetching.png)

When we save the edited post this time, we should see two requests happen back-to-back:

- The `PATCH /posts/:postId` from the `editPost` mutation
- A `GET /posts/:postId` as the `getPost` query is refetched

Then, if we click back to the main "Posts" tab, we should also see:

- A `GET /posts` as the `getPosts` query is refetched

Because we provided the relationships between the endpoints using tags, **RTK Query knew that it needed to refetch the individual post and the list of posts when we made that edit and the specific tag with that ID was invalidated** - no further changes needed! Meanwhile, as we were editing the post, the cache removal timer for the `getPosts` data expired, so it was removed from the cache. When we opened the `<PostsList>` component again, RTK Query saw that it did not have the data in cache and refetched it.

There is one caveat here. By specifying a plain `'Post'` tag in `getPosts` and invalidating it in `addNewPost`, we actually end up forcing a refetch of all _individual_ posts as well. If we really want to just refetch the list of posts for the `getPost` endpoint, you can include an additional tag with an arbitrary ID, like `{type: 'Post', id: 'LIST'}`, and invalidate that tag instead. The RTK Query docs have [a table that describes what will happen if certain general/specific tag combinations are invalidated](https://redux-toolkit.js.org/rtk-query/usage/automated-refetching#tag-invalidation-behavior).

:::info

RTK Query has many other options for controlling when and how to refetch data, including "conditional fetching", "lazy queries", and "prefetching", and query definitions can be customized in a variety of ways. See the RTK Query usage guide docs for more details on using these features:

- [RTK Query: Automated Re-Fetching](https://redux-toolkit.js.org/rtk-query/usage/automated-refetching)
- [RTK Query: Conditional Fetching](https://redux-toolkit.js.org/rtk-query/usage/conditional-fetching)
- [RTK Query: Prefetching](https://redux-toolkit.js.org/rtk-query/usage/prefetching)
- [RTK Query: Customizing Queries](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries)
- [RTK Query: `useLazyQuery`](https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#uselazyquery)

:::

## Managing Users Data

We've finished converting our posts data management over to use RTK Query. Next up, we'll convert the list of users.

Since we've already seen how to use the RTK Query hooks for fetching and reading data, for this section we're going to try a different approach. RTK Query's core API is UI-agnostic and can be used with any UI layer, not just React. Normally you should stick with using the hooks, but here we're going to work with the user data using _just_ the RTK Query core API so you can see how to use it.

### Fetching Users Manually

We're currently defining a `fetchUsers` async thunk in `usersSlice.js`, and dispatching that thunk manually in `index.js` so that the list of users is available as soon as possible. We can do that same process using RTK Query.

We'll start by defining a `getUsers` query endpoint in `apiSlice.js`, similar to our existing endpoints. We'll export the `useGetUsersQuery` hook just for consistency, but for now we're not going to use it.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    // omit other endpoints

    // highlight-start
    getUsers: builder.query({
      query: () => '/users'
    })
    // highlight-end
  })
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  // highlight-next-line
  useGetUsersQuery,
  useAddNewPostMutation,
  useEditPostMutation
} = apiSlice
```

If we inspect the API slice object, it includes an `endpoints` field, with one endpoint object inside for each endpoint we've defined.

![API slice endpoint contents](/img/tutorials/essentials/api-slice-contents.png)

Each endpoint object contains:

- The same primary query/mutation hook that we exported from the root API slice object, but named as `useQuery` or `useMutation`
- For query endpoints, an additional set of query hooks for scenarios like "lazy queries" or partial subscriptions
- A set of ["matcher" utilities](https://redux-toolkit.js.org/api/matching-utilities) to check for the `pending/fulfilled/rejected` actions dispatched by requests for this endpoint
- An `initiate` thunk that triggers a request for this endpoint
- A `select` function that creates [memoized selectors](../../usage/deriving-data-selectors.md) that can retrieve the cached result data + status entries for this endpoint

If we want to fetch the list of users outside of React, we can dispatch the `getUsers.initiate()` thunk in our index file:

```jsx title="index.js"
// omit other imports
// highlight-next-line
import { apiSlice } from './features/api/apiSlice'

// Start our mock API server
worker.start({ onUnhandledRequest: 'bypass' })

// highlight-next-line
store.dispatch(apiSlice.endpoints.getUsers.initiate())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

This dispatch happens automatically inside the query hooks, but we can start it manually if needed.

:::caution

Manually dispatching an RTKQ request thunk will create a subscription entry, but it's then up to you to [unsubscribe from that data later](https://redux-toolkit.js.org/rtk-query/usage/usage-without-react-hooks#removing-a-subscription) - otherwise the data stays in the cache permanently. In this case, we always need user data, so we can skip unsubscribing.

:::

### Selecting Users Data

We currently have selectors like `selectAllUsers` and `selectUserById` that are generated by our `createEntityAdapter` users adapter, and are reading from `state.users`. If we reload the page, all of our user-related display is broken because the `state.users` slice has no data. Now that we're fetching data for RTK Query's cache, we should replace those selectors with equivalents that read from the cache instead.

The `endpoint.select()` function in the API slice endpoints will create a new memoized selector function _every_ time we call it. `select()` takes a cache key as its argument, and this must be the _same_ cache key that you pass as an argument to either the query hooks or the `initiate()` thunk. The generated selector uses that cache key to know exactly which cached result it should return from the cache state in the store.

In this case, our `getUsers` endpoint doesn't need any parameters - we always fetch the entire list of users. So, we can create a cache selector with no argument, and the cache key becomes `undefined`.

```js title="features/users/usersSlice.js"
import {
  createSlice,
  createEntityAdapter,
  createSelector
} from '@reduxjs/toolkit'

// highlight-next-line
import { apiSlice } from '../api/apiSlice'

/* Temporarily ignore adapter - we'll use this again shortly
const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()
*/

// highlight-start
// Calling `someEndpoint.select(someArg)` generates a new selector that will return
// the query result object for a query with those parameters.
// To generate a selector for a specific query argument, call `select(theQueryArg)`.
// In this case, the users query has no params, so we don't pass anything to select()
export const selectUsersResult = apiSlice.endpoints.getUsers.select()

const emptyUsers = []

export const selectAllUsers = createSelector(
  selectUsersResult,
  usersResult => usersResult?.data ?? emptyUsers
)

export const selectUserById = createSelector(
  selectAllUsers,
  (state, userId) => userId,
  (users, userId) => users.find(user => user.id === userId)
)
// highlight-end

/* Temporarily ignore selectors - we'll come back to this later
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
} = usersAdapter.getSelectors((state) => state.users)
*/
```

Once we have that initial `selectUsersResult` selector, we can replace the existing `selectAllUsers` selector with one that returns the array of users from the cache result, and then replace `selectUserById` with one that finds the right user from that array.

For now we're going to comment out those selectors from the `usersAdapter` - we're going to make another change later that switches back to using those.

Our components are already importing `selectAllUsers` and `selectUserById`, so this change should just work! Try refreshing the page and clicking through the posts list and single post view. The correct user names should appear in each displayed post, and in the dropdown in the `<AddPostForm>`.

Since the `usersSlice` is no longer even being used at all, we can go ahead and delete the `createSlice` call from this file, and remove `users: usersReducer` from our store setup. We've still got a couple bits of code that reference `postsSlice`, so we can't quite remove that yet - we'll get to that shortly.

### Injecting Endpoints

It's common for larger applications to "code-split" features into separate bundles, and then "lazy load" them on demand as the feature is used for the first time. We said that RTK Query normally has a single "API slice" per application, and so far we've defined all of our endpoints directly in `apiSlice.js`. What happens if we want to code-split some of our endpoint definitions, or move them into another file to keep the API slice file from getting too big?

**RTK Query supports splitting out endpoint definitions with `apiSlice.injectEndpoints()`**. That way, we can still have a single API slice with a single middleware and cache reducer, but we can move the definition of some endpoints to other files. This enables code-splitting scenarios, as well as co-locating some endpoints alongside feature folders if desired.

To illustrate this process, let's switch the `getUsers` endpoint to be injected in `usersSlice.js`, instead of defined in `apiSlice.js`.

We're already importing `apiSlice` into `usersSlice.js` so that we can access the `getUsers` endpoint, so we can switch to calling `apiSlice.injectEndpoints()` here instead.

```js title="features/users/usersSlice.js"
import { apiSlice } from '../api/apiSlice'

// highlight-start
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users'
    })
  })
})

export const { useGetUsersQuery } = extendedApiSlice

export const selectUsersResult = extendedApiSlice.endpoints.getUsers.select()
// highlight-end
```

`injectEndpoints()` **mutates the original API slice object to add the additional endpoint definitions, and then returns it**. The actual caching reducer and middleware that we originally added to the store still work okay as-is. At this point, `apiSlice` and `extendedApiSlice` are the same object, but it can be helpful to refer to the `extendedApiSlice` object instead of `apiSlice` here as a reminder to ourselves. (This is more important if you're using TypeScript, because only the `extendedApiSlice` value has the added types for the new endpoints.)

At the moment, the only file that references the `getUsers` endpoint is our index file, which is dispatching the `initiate` thunk. We need to update that to import the extended API slice instead:

```js title="index.js"
// highlight-next-line
import { extendedApiSlice } from './features/users/usersSlice'

// Start our mock API server
worker.start({ onUnhandledRequest: 'bypass' })

// highlight-next-line
store.dispatch(extendedApiSlice.endpoints.getUsers.initiate())
```

Alternately, you could just export the specific endpoints themselves from the slice file.

## Manipulating Response Data

So far, all of our query endpoints have simply stored the response data from the server exactly as it was received in the body. `getPosts` and `getUsers` both expect the server to return an array, and `getPost` expects the individual `Post` object as the body.

It's common for clients to need to extract pieces of data from the server response, or to transform the data in some way before caching it. For example, what if the `/getPost` request returns a body like `{post: {id}}`, with the data nested?

There's a couple ways that we _could_ handle this conceptually. One option would be to extract the `responseData.post` field and store that in the cache, instead of the entire body. Another would be to store the entire response data in the cache, but have our components specify just a specific piece of that cached data that they need.

### Transforming Responses

**Endpoints can define a `transformResponse` handler that can extract or modify the data received from the server before it's cached**. For the `getPost` example, we could have `transformResponse: (responseData) => responseData.post`, and it would cache just the actual `Post` object instead of the entire body of the response.

In [Part 6: Performance and Normalization](./part-6-performance-normalization.md), we discussed reasons why it's useful to store data in a normalized structure. In particular, it lets us look up and update items based on an ID, rather than having to loop over an array to find the right item.

Our `selectUserById` selector currently has to loop over the cached array of users to find the right `User` object. If we were to transform the response data to be stored using a normalized approach, we could simplify that to directly find the user by ID.

We were previously using `createEntityAdapter` in `usersSlice` to manage normalized users data. We can integrate `createEntityAdapter` into our `extendedApiSlice`, and actually use `createEntityAdapter` to transform the data before it's cached. We'll uncomment the `usersAdapter` lines we originally had, and use its update functions and selectors again.

```js title="features/users/usersSlice.js"
import { apiSlice } from '../api/apiSlice'

// highlight-start
const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()
// highlight-end

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users',
      // highlight-start
      transformResponse: responseData => {
        return usersAdapter.setAll(initialState, responseData)
      }
      // highlight-end
    })
  })
})

export const { useGetUsersQuery } = extendedApiSlice

// Calling `someEndpoint.select(someArg)` generates a new selector that will return
// the query result object for a query with those parameters.
// To generate a selector for a specific query argument, call `select(theQueryArg)`.
// In this case, the users query has no params, so we don't pass anything to select()
export const selectUsersResult = extendedApiSlice.endpoints.getUsers.select()

const selectUsersData = createSelector(
  selectUsersResult,
  usersResult => usersResult.data
)

// highlight-start
export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)
// highlight-end
```

We've added a `transformResponse` option to the `getUsers` endpoint. It receives the entire response data body as its argument, and should return the actual data to be cached. By calling `usersAdapter.setAll(initialState, responseData)`, it will return the standard `{ids: [], entities: {}}` normalized data structure containing all of the received items.

The `adapter.getSelectors()` function needs to be given an "input selector" so it knows where to find that normalized data. In this case, the data is nested down inside the RTK Query cache reducer, so we select the right field out of the cache state.

### Normalized vs Document Caches

It's worth stepping back for a minute to discuss what we just did further.

You may have heard the term "normalized cache" in relation to other data fetching libraries like Apollo. It's important to understand that **RTK Query uses a "document cache" approach, not a "normalized cache"**.

A fully normalized cache tries to deduplicate similar items across _all_ queries, based on item type and ID. As an example, say that we have an API slice with `getTodos` and `getTodo` endpoints, and our components make the following queries:

- `getTodos()`
- `getTodos({filter: 'odd'})`
- `getTodo({id: 1})`

Each of these query results would include a Todo object that looks like `{id: 1}`.

In a fully normalized de-duplicating cache, only a single copy of this Todo object would be stored. However, **RTK Query saves each query result independently in the cache**. So, this would result in three separate copies of this Todo being cached in the Redux store. However, if all the endpoints are consistently providing the same tags (such as `{type: 'Todo', id: 1}`), then invalidating that tag will force all the matching endpoints to refetch their data for consistency.

RTK Query deliberately **does _not_ implement a cache that would deduplicate identical items across multiple requests**. There are several reasons for this:

- A fully normalized shared-across-queries cache is a _hard_ problem to solve
- We don't have the time, resources, or interest in trying to solve that right now
- In many cases, simply re-fetching data when it's invalidated works well and is easier to understand
- At a minimum, RTKQ can help solve the general use case of "fetch some data", which is a big pain point for a lot of people

In comparison, we just normalized the response data for the `getUsers` endpoint, in that it's being stored as an `{[id]: value}` lookup table. However, **this is _not_ the same thing as a "normalized cache" - we only transformed _how this one response is stored_** rather than deduplicating results across endpoints or requests.

### Selecting Values from Results

The last component that is reading from the old `postsSlice` is `<UserPage>`, which filters the list of posts based on the current user. We've already seen that we can get the entire list of posts with `useGetPostsQuery()` and then transform it in the component, such as sorting inside of a `useMemo`. The query hooks also give us the ability to select pieces of the cached state by providing a `selectFromResult` option, and only re-render when the selected pieces change.

We can use `selectFromResult` to have `<UserPage>` read just a filtered list of posts from the cache. However, in order for `selectFromResult` to avoid unnecessary re-renders, we need to ensure that whatever data we extract is memoized correctly. To do this, we should create a new selector instance that the `<UsersPage>` component can reuse every time it renders, so that the selector memoizes the result based on its inputs.

```jsx title="features/users/UsersPage.js"
// highlight-next-line
import { createSelector } from '@reduxjs/toolkit'

import { selectUserById } from '../users/usersSlice'
// highlight-next-line
import { useGetPostsQuery } from '../api/apiSlice'

export const UserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector(state => selectUserById(state, userId))

  // highlight-start
  const selectPostsForUser = useMemo(() => {
    // Return a unique selector instance for this page so that
    // the filtered results are correctly memoized
    return createSelector(
      res => res.data,
      (res, userId) => userId,
      (data, userId) => data.filter(post => post.user === userId)
    )
  }, [])
  // highlight-end

  // Use the same posts query, but extract only part of its data
  const { postsForUser } = useGetPostsQuery(undefined, {
    // highlight-start
    selectFromResult: result => ({
      // We can optionally include the other metadata fields from the result here
      ...result,
      // Include a field called `postsForUser` in the hook result object,
      // which will be a filtered list of posts
      postsForUser: selectPostsForUser(result, userId)
    })
    // highlight-end
  })

  // omit rendering logic
}
```

There's a key difference with the memoized selector function we've created here. Normally, [selectors expect the entire Redux `state` as their first argument](../../usage/deriving-data-selectors.md), and extract or derive a value from `state`. However, in this case we're only dealing with the "result" value that is kept in the cache. The result object has a `data` field inside with the actual values we need, as well as some of the request metadata fields.

Our `selectFromResult` callback receives the `result` object containing the original request metadata and the `data` from the server, and should return some extracted or derived values. Because query hooks add an additional `refetch` method to whatever is returned here, it's preferably to always return an object from `selectFromResult` with the fields inside that you need.

Since `result` is being kept in the Redux store, we can't mutate it - we need to return a new object. The query hook will do a "shallow" comparison on this returned object, and only re-render the component if one of the fields has changed. We can optimize re-renders by only returning the specific fields needed by this component - if we don't need the rest of the metadata flags, we could omit them entirely. If you do need them, you can spread the original `result` value to include them in the output.

In this case, we'll call the field `postsForUser`, and we can destructure that new field from the hook result. By calling `selectPostsForUser(result, userId)` every time, it will memoize the filtered array and only recalculate it if the fetched data or the user ID changes.

### Comparing Transformation Approaches

We've now seen three different ways that we can manage transforming responses:

- Keep original response in cache, read full result in component and derive values
- Keep original response in cache, read derived result with `selectFromResponse`
- Transform response before storing in cache

Each of these approaches can be useful in different situations. Here's some suggestions for when you should consider using them:

- `transformResponse`: all consumers of the endpoint want a specific format, such as normalizing the response to enable faster lookups by ID
- `selectFromResult`: some consumers of the endpoint only need partial data, such as a filtered list
- per-component / `useMemo`: when only some specific components need to transform the cached data

## Advanced Cache Updates

We've completed updating our posts and users data, so all that's left is working with reactions and notifications. Switching these to use RTK Query will give us a chance to try out some of the advanced techniques available for working with RTK Query's cached data, and allow us to provide a better experience for our users.

### Persisting Reactions

Originally, we only tracked reactions on the client side and did not persist them to the server. Let's add a new `addReaction` mutation and use that to update the corresponding `Post` on the server every time the user clicks a reaction button.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    // omit other endpoints
    // highlight-start
    addReaction: builder.mutation({
      query: ({ postId, reaction }) => ({
        url: `posts/${postId}/reactions`,
        method: 'POST',
        // In a real app, we'd probably need to base this on user ID somehow
        // so that a user can't do the same reaction more than once
        body: { reaction }
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Post', id: arg.postId }
      ]
    })
    // highlight-end
  })
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useEditPostMutation,
  // highlight-next-line
  useAddReactionMutation
} = apiSlice
```

Similar to our other mutations, we take some parameters and make a request to the server, with some data in the body of the request. Since this example app is small, we'll just give the name of the reaction, and let the server increment the counter for that reaction type on this post.

We already know that we need to refetch this post in order to see any of the data change on the client, so we can invalidate this specific `Post` entry based on its ID.

With that in place, let's update `<ReactionButtons>` to use this mutation.

```jsx title="features/posts/ReactionButtons.js"
import React from 'react'

// highlight-next-line
import { useAddReactionMutation } from '../api/apiSlice'

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  // highlight-next-line
  const [addReaction] = useAddReactionMutation()

  const reactionButtons = Object.entries(reactionEmoji).map(
    ([reactionName, emoji]) => {
      return (
        <button
          key={reactionName}
          type="button"
          className="muted-button reaction-button"
          onClick={() => {
            // highlight-next-line
            addReaction({ postId: post.id, reaction: reactionName })
          }}
        >
          {emoji} {post.reactions[reactionName]}
        </button>
      )
    }
  )

  return <div>{reactionButtons}</div>
}
```

Let's see this in action! Go to the main `<PostsList>`, and click one of the reactions to see what happens.

![PostsList disabled while fetching](/img/tutorials/essentials/disabled-posts-fetching.png)

Uh-oh. The entire `<PostsList>` component was grayed out, because we just refetched the _entire_ list of posts in response to that one post being updated. This is deliberately more visible because our mock API server is set to have a 2-second delay before responding, but even if the response is faster, this still isn't a good user experience.

### Implementing Optimistic Updates

For a small update like adding a reaction, we probably don't need to re-fetch the entire list of posts. Instead, we could try just updating the already-cached data on the client to match what we expect to have happen on the server. Also, if we update the cache immediately, the user gets instant feedback when the click the button instead of having to wait for the response to come back. **This approach of updating client state right away is called an "optimistic update"**, and it's a common pattern in web apps.

**RTK Query lets you implement optimistic updates by modifying the client-side cache based on "request lifecycle" handlers**. Endpoints can define an `onQueryStarted` function that will be called when a request starts, and we can run additional logic in that handler.

```js title="features/api/apiSlice.js"
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    // omit other endpoints

    addReaction: builder.mutation({
      query: ({ postId, reaction }) => ({
        url: `posts/${postId}/reactions`,
        method: 'POST',
        // In a real app, we'd probably need to base this on user ID somehow
        // so that a user can't do the same reaction more than once
        body: { reaction }
      }),
      // highlight-start
      async onQueryStarted({ postId, reaction }, { dispatch, queryFulfilled }) {
        // `updateQueryData` requires the endpoint name and cache key arguments,
        // so it knows which piece of cache state to update
        const patchResult = dispatch(
          apiSlice.util.updateQueryData('getPosts', undefined, draft => {
            // The `draft` is Immer-wrapped and can be "mutated" like in createSlice
            const post = draft.find(post => post.id === postId)
            if (post) {
              post.reactions[reaction]++
            }
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      }
      // highlight-end
    })
  })
})
```

The `onQueryStarted` handler receives two parameters. The first is the cache key `arg` that was passed when the request started. The second is an object that contains some of the same fields as the `thunkApi` in `createAsyncThunk` ( `{dispatch, getState, extra, requestId}`), but also a `Promise` called `queryFulfilled`. This `Promise` will resolve when the request returns, and either fulfill or reject based on the request.

The API slice object includes a `updateQueryData` util function that lets us update cached values. It takes three arguments: the name of the endpoint to update, the same cache key value used to identify the specific cached data, and a callback that updates the cached data. **`updateQueryData` uses Immer, so you can "mutate" the drafted cache data the same way you would in `createSlice`**.

We can implement the optimistic update by finding the specific `Post` entry in the `getPosts` cache, and "mutating" it to increment the reaction counter.

`updateQueryData` generates an action object with a patch diff of the changes we made. When we dispatch that action, the return value is a `patchResult` object. If we call `patchResult.undo()`, it automatically dispatches an action that reverses the patch diff changes.

By default, we expect that the request will succeed. In case the request fails, we can `await queryFulfilled`, catch a failure, and undo the patch changes to revert the optimistic update.

For this case, we've also removed the `invalidatesTags` line we'd just added, since we _don't_ want to refetch the posts when we click a reaction button.

Now, if we click several times on a reaction button quickly, we should see the number increment in the UI each time. If we look at the Network tab, we'll also see each individual request go out to the server as well.

### Streaming Cache Updates

Our final feature is the notifications tab. When we originally built this feature in [Part 6](./part-6-performance-normalization.md#adding-notifications), we said that "in a real app, the server would push updates to our client every time something happens". We initially faked that feature by adding a "Refresh Notifications" button, and having it make an HTTP `GET` request for more notifications entries.

It's common for apps to make an _initial_ request to fetch data from the server, and then open up a Websocket connection to receive additional updates over time. **RTK Query provides an `onCacheEntryAdded` endpoint lifecycle handler that lets us implement "streaming updates" to cached data**. We'll use that capability to implement a more realistic approach to managing notifications.

Our `src/api/server.js` file has a mock Websocket server already configured, similar to the mock HTTP server. We'll write a new `getNotifications` endpoint that fetches the initial list of notifications, and then establishes the Websocket connection to listen for future updates. We still need to manually tell the mock server _when_ to send new notifications, so we'll continue faking that by having a button we click to force the update.

We'll inject the `getNotifications` endpoint in `notificationsSlice` like we did with `getUsers`, just to show it's possible.

```js title="features/notifications/notificationsSlice.js"
import { forceGenerateNotifications } from '../../api/server'
import { apiSlice } from '../api/apiSlice'

export const extendedApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNotifications: builder.query({
      query: () => '/notifications',
      transformResponse: res => res.notifications,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // create a websocket connection when the cache subscription starts
        const ws = new WebSocket('ws://localhost')
        try {
          // wait for the initial query to resolve before proceeding
          await cacheDataLoaded

          // when data is received from the socket connection to the server,
          // update our query result with the received message
          const listener = event => {
            const message = JSON.parse(event.data)
            switch (message.type) {
              case 'notifications': {
                updateCachedData(draft => {
                  // Insert all received notifications from the websocket
                  // into the existing RTKQ cache array
                  draft.push(...message.payload)
                  draft.sort((a, b) => b.date.localeCompare(a.date))
                })
                break
              }
              default:
                break
            }
          }

          ws.addEventListener('message', listener)
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }
        // cacheEntryRemoved will resolve when the cache subscription is no longer active
        await cacheEntryRemoved
        // perform cleanup steps once the `cacheEntryRemoved` promise resolves
        ws.close()
      }
    })
  })
})

export const { useGetNotificationsQuery } = extendedApi

const emptyNotifications = []

export const selectNotificationsResult =
  extendedApi.endpoints.getNotifications.select()

const selectNotificationsData = createSelector(
  selectNotificationsResult,
  notificationsResult => notificationsResult.data ?? emptyNotifications
)

export const fetchNotificationsWebsocket = () => (dispatch, getState) => {
  const allNotifications = selectNotificationsData(getState())
  const [latestNotification] = allNotifications
  const latestTimestamp = latestNotification?.date ?? ''
  // Hardcode a call to the mock server to simulate a server push scenario over websockets
  forceGenerateNotifications(latestTimestamp)
}

// omit existing slice code
```

Like with `onQueryStarted`, the `onCacheEntryAdded` lifecycle handler receives the `arg` cache key as its first parameter, and an options object with the `thunkApi` values as the second parameter. The options object also contains an `updateCachedData` util function, and two lifecycle `Promise`s - `cacheDataLoaded` and `cacheEntryRemoved`. `cacheDataLoaded` resolves when the _initial_ data for this subscription is added to the store. This happens when the first subscription for this endpoint + cache key is added. As long as 1+ subscribers for the data are still active, the cache entry is kept alive. When the number of subscribers goes to 0 and the cache lifetime timer expires, the cache entry will be removed, and `cacheEntryRemoved` will resolve. Typically, the usage pattern is:

- `await cacheDataLoaded` right away
- Create a server-side data subscription like a Websocket
- When an update is received, use `updateCachedData` to "mutate" the cached values based on the update
- `await cacheEntryRemoved` at the end
- Clean up subscriptions afterwwards

Our mock Websocket server file exposes a `forceGenerateNotifications` method to mimic pushing data out to the client. That depends on knowing the most recent notification timestamp, so we add a thunk we can dispatch that reads the latest timestamp from the cache state and tells the mock server to generate newer notifications.

Inside of `onCacheEntryAdded`, we create a real `Websocket` connection to `localhost`. In a real app, this could be any kind of external subscription or polling connection you need to receive ongoing updates. Whenever the mock server sends us an update, we push all of the received notifications into the cache and re-sort it.

When the cache entry is removed, we clean up the Websocket subscription. In this app, the notifications cache entry will never be removed because we never unsubscribe from the data, but it's important to see how the cleanup would work for a real app.

### Tracking Client-Side State

We need to make one final set of updates. Our `<Navbar>` component has to initiate the fetching of notifications, and `<NotificationsList>` needs to show the notification entries with the correct read/unread status. However, we were previously adding the read/unread fields on the client side in our `notificationsSlice` reducer when we received the entries, and now the notification entries are being kept in the RTK Query cache.

We can rewrite `notificationsSlice` so that it listens for any received notifications, and tracks some additional state on the client side for each notification entry.

There's two cases when new notification entries are received: when we fetch the initial list over HTTP, and when we receive an update pushed over the Websocket connection. Ideally, we want to use the same logic in response to both cases. We can use RTK's ["matching utilities"](https://redux-toolkit.js.org/api/matching-utilities) to write one case reducer that runs in response to multiple action types.

Let' see what `notificationsSlice` looks like after we add this logic.

```js title="features/notifications/notificationsSlice.js"
import {
  // highlight-next-line
  createAction,
  createSlice,
  createEntityAdapter,
  createSelector,
  // highlight-next-line
  isAnyOf
} from '@reduxjs/toolkit'

import { forceGenerateNotifications } from '../../api/server'
import { apiSlice } from '../api/apiSlice'

// highlight-start
const notificationsReceived = createAction(
  'notifications/notificationsReceived'
)
// highlight-end

export const extendedApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNotifications: builder.query({
      query: () => '/notifications',
      async onCacheEntryAdded(
        arg,
        // highlight-next-line
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved, dispatch }
      ) {
        // create a websocket connection when the cache subscription starts
        const ws = new WebSocket('ws://localhost')
        try {
          // wait for the initial query to resolve before proceeding
          await cacheDataLoaded

          // when data is received from the socket connection to the server,
          // update our query result with the received message
          const listener = event => {
            const message = JSON.parse(event.data)
            switch (message.type) {
              case 'notifications': {
                updateCachedData(draft => {
                  // Insert all received notifications from the websocket
                  // into the existing RTKQ cache array
                  draft.push(...message.payload)
                  draft.sort((a, b) => b.date.localeCompare(a.date))
                })
                // highlight-start
                // Dispatch an additional action so we can track "read" state
                dispatch(notificationsReceived(message.payload))
                // highlight-end
                break
              }
              default:
                break
            }
          }

          ws.addEventListener('message', listener)
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }
        // cacheEntryRemoved will resolve when the cache subscription is no longer active
        await cacheEntryRemoved
        // perform cleanup steps once the `cacheEntryRemoved` promise resolves
        ws.close()
      }
    })
  })
})

export const { useGetNotificationsQuery } = extendedApi

// omit selectors and websocket thunk

// highlight-start
const notificationsAdapter = createEntityAdapter()

const matchNotificationsReceived = isAnyOf(
  notificationsReceived,
  extendedApi.endpoints.getNotifications.matchFulfilled
)
// highlight-end

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: notificationsAdapter.getInitialState(),
  reducers: {
    allNotificationsRead(state, action) {
      Object.values(state.entities).forEach(notification => {
        notification.read = true
      })
    }
  },
  extraReducers(builder) {
    // highlight-start
    builder.addMatcher(matchNotificationsReceived, (state, action) => {
      // Add client-side metadata for tracking new notifications
      const notificationsMetadata = action.payload.map(notification => ({
        id: notification.id,
        read: false,
        isNew: true
      }))

      Object.values(state.entities).forEach(notification => {
        // Any notifications we've read are no longer new
        notification.isNew = !notification.read
      })

      notificationsAdapter.upsertMany(state, notificationsMetadata)
    })
    // highlight-end
  }
})

// omit slice exports
```

There's a lot going on, but let's break down the changes one at a time.

There isn't currently a good way for the `notificationsSlice` reducer to know when we've received an updated list of new notifications via the Websocket. So, we'll import `createAction`, define a new action type specifically for the "received some notifications" case, and dispatch that action after updating the cache state.

We want to run the same "add read/new metadata" logic for _both_ the "fulfilled `getNotifications`" action _and_ the "received from Websocket" action. We can create a new "matcher" function by calling `isAnyOf()` and passing in each of those action creators. The `matchNotificationsReceived` matcher function will return true if the current action matches either of those types.

Finally, we can use the `builder.addMatcher()` API inside of `extraReducers` to add a case reducer that runs whenever we match one of those two action types. Inside of there, we add a new "read/isNew" metadata entry that corresponds to each notification by ID, and store that inside of `notificationsSlice`.

With those changes in place, we can update our UI components to fetch and display notifications.

```jsx title="app/Navbar.js"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  // highlight-start
  fetchNotificationsWebsocket,
  selectNotificationsMetadata,
  useGetNotificationsQuery
  // highlight-end
} from '../features/notifications/notificationsSlice'

export const Navbar = () => {
  const dispatch = useDispatch()

  // highlight-start
  // Trigger initial fetch of notifications and keep the websocket open to receive updates
  useGetNotificationsQuery()

  const notificationsMetadata = useSelector(selectNotificationsMetadata)
  const numUnreadNotifications = notificationsMetadata.filter(
    n => !n.read
  ).length

  const fetchNewNotifications = () => {
    dispatch(fetchNotificationsWebsocket())
  }
  // highlight-end

  let unreadNotificationsBadge

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    )
  }

  // omit rendering logic
}
```

In `<NavBar>`, we trigger the initial notifications fetch with `useGetNotificationsQuery()`, and switch to reading the metadata objects from `state.notificationsSlice`. Clicking the "Refresh" button now triggers the mock Websocket server to push out another set of notifications.

Our `<NotificationsList>` similarly switches over to reading the cached data and metadata.

```jsx title="features/notifications/NotificationsList.js"
import {
  // highlight-start
  useGetNotificationsQuery,
  allNotificationsRead,
  selectMetadataEntities,
  // highlight-end
} from './notificationsSlice'

export const NotificationsList = () => {
  const dispatch = useDispatch()
  // highlight-start
  const { data: notifications = [] } = useGetNotificationsQuery()
  const notificationsMetadata = useSelector(selectMetadataEntities)
  // highlight-end
  const users = useSelector(selectAllUsers)

  useLayoutEffect(() => {
    dispatch(allNotificationsRead())
  })

  const renderedNotifications = notifications.map((notification) => {
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)
    const user = users.find((user) => user.id === notification.user) || {
      name: 'Unknown User',
    }

    // highlight-next-line
    const metadata = notificationsMetadata[notification.id]

    const notificationClassname = classnames('notification', {
      // highlight-next-line
      new: metadata.isNew,
    })

  // omit rendering logic
}
```

We read the list of notifications from cache and the new metadata entries from the notificationsSlice, and continue displaying them the same way as before.

As a final step, we can do some additional cleanup here - the `postsSlice` is no longer being used, so that can be removed entirely.

With that, we've finished converting our application over to use RTK Query! All of the data fetching has been switched over to use RTKQ, and we've improved the user experience by adding optimistic updates and streaming updates.

## What You've Learned

As we've seen, RTK Query includes some powerful options for controlling how we manage cached data. While you may not need all of these options right away, they provide flexibility and key capabilities to help implement specific application behaviors.

Let's take one last look at the whole application in action:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-essentials-example-app/tree/checkpoint-6-rtkqConversion/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-essentials-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

:::tip Summary

- **Specific cache tags can be used for finer-grained cache invalidation**
  - Cache tags can be either `'Post'` or `{type: 'Post', id}`
  - Endpoints can provide or invalidate cache tags based on results and arg cache keys
- **RTK Query's APIs are UI-agnostic and can be used outside of React**
  - Endpoint objects include functions for initating requests, generating result selectors, and matching request action objects
- **Responses can be transformed in different ways as needed**
  - Endpoints can define a `transformResponse` callback to modify the data before caching
  - Hooks can be given a `selectFromResponse` option to extract/transform data
  - Components can read an entire value and transform with `useMemo`
- **RTK Query has advanced options for manipulating cached data for better user experience**
  - The `onQueryStarted` lifecycle can be used for optimistic updates by updating cache immediately before a request returns
  - The `onCacheEntryAdded` lifecycle can be used for streaming updates by updating cache over time based on server push connections

:::

## What's Next?

Congratulations, **you've completed the Redux Essentials tutorial!** You should now have a solid understanding of what Redux Toolkit and React-Redux are, how to write and organize Redux logic, Redux data flow and usage with React, and how to use APIs like `configureStore` and `createSlice`. You should also see how RTK Query can simplify the process of fetching and using cached data.

The ["What's Next?" section in Part 6](./part-6-performance-normalization.md) has links to additional resources for app ideas, tutorials, and documentation.

For more details on using RTK Query, see [the RTK Query usage guide docs](https://redux-toolkit.js.org/rtk-query/usage/queries) and [API reference](https://redux-toolkit.js.org/rtk-query/api/createApi).

If you're looking for help with Redux questions, come join [the `#redux` channel in the Reactiflux server on Discord](https://www.reactiflux.com).

**Thanks for reading through this tutorial, and we hope you enjoy building applications with Redux!**

