
---
id: part-1-overview
title: 'Redux Fundamentals, Part 1: Redux Overview'
sidebar_label: 'Redux Overview'
description: 'The official Fundamentals tutorial for Redux: learn the fundamentals of using Redux'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 1: Redux Overview

:::tip What You'll Learn

- What Redux is and why you might want to use it
- The basic pieces that make up a Redux app

:::

## Introduction

Welcome to the Redux Fundamentals tutorial! **This tutorial will introduce you to the core concepts, principles, and patterns for using Redux**. By the time you finish, you should understand the different pieces that make up a Redux app, how data flows when using Redux, and our standard recommended patterns for building Redux apps.

In Part 1 of this tutorial, we'll briefly look at a minimal example of a working Redux app to see what the pieces are, and in [Part 2: Redux Concepts and Data Flow](./part-2-concepts-data-flow.md) we'll look at those pieces in more detail and how data flows in a Redux application.

Starting in [Part 3: State, Actions, and Reducers](./part-3-state-actions-reducers.md), we'll use that knowledge to build a small example app that demonstrates how these pieces fit together and talk about how Redux works in practice. After we finish building the working example app "by hand" so that you can see exactly what's happening, we'll talk about some of the standard patterns and abstractions typically used with Redux. Finally, we'll see how these lower-level examples translate into the higher-level patterns that we recommend for actual usage in real applications.

### How to Read This Tutorial

**This tutorial will teach you "how Redux works"**, as well as _why_ these patterns exist. Fair warning though - learning the concepts is different from putting them into practice in actual apps.

**The initial code will be less concise than the way we suggest writing real app code**, but writing it out long-hand is the best way to learn. Once you understand how everything fits together, we'll look at using Redux Toolkit to simplify things. **Redux Toolkit is the recommended way to build production apps with Redux**, and is built on all of the concepts that we will look at throughout this tutorial. Once you understand the core concepts covered here, you'll understand how to use Redux Toolkit more efficiently.

:::info

If you're looking to learn more about how Redux is used to write real-world applications, please see:

- [**The "Modern Redux" page in this tutorial**](./part-8-modern-redux.md), which shows how to convert the low-level examples from earlier sections into the modern patterns we do recommend for real-world usage
- [**The "Redux Essentials" tutorial**](../essentials/part-1-overview-concepts.md), which teaches "how to use Redux, the right way" for real-world apps, using our latest recommended patterns and practices.

:::

We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already so that we can focus on explaining Redux itself. **This tutorial assumes that you know**:

:::important Prerequisites

- Familiarity with [HTML & CSS](https://internetingishard.com/).
- Familiarity with [ES6 syntax and features](https://www.taniarascia.com/es6-syntax-and-feature-overview/)
- Understanding of [the array and object spread operators](https://javascript.info/rest-parameters-spread#spread-syntax)
- Knowledge of React terminology: [JSX](https://reactjs.org/docs/introducing-jsx.html), [State](https://reactjs.org/docs/state-and-lifecycle.html), [Function Components, Props](https://reactjs.org/docs/components-and-props.html), and [Hooks](https://reactjs.org/docs/hooks-intro.html)
- Knowledge of [asynchronous JavaScript](https://javascript.info/promise-basics) and [making AJAX requests](https://javascript.info/fetch)

:::

**If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux**. We'll be here when you're ready!

Finally, you should make sure that you have the React and Redux DevTools extensions installed in your browser:

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

## Redux Basics

Now that you know what Redux is, let's briefly look at the pieces that make up a Redux app and how it works.

:::info

The rest of the description on this page focuses solely on the Redux core library (the `redux` package). We'll talk about the other Redux-related packages as we go through the rest of the tutorial.

:::

### The Redux Store

The center of every Redux application is the **store**. A "store" is a container that holds your application's global **state**.

A store is a JavaScript object with a few special functions and abilities that make it different than a plain global object:

- You must never directly modify or change the state that is kept inside the Redux store
- Instead, the only way to cause an update to the state is to create a plain **action** object that describes "something that happened in the application", and then **dispatch** the action to the store to tell it what happened.
- When an action is dispatched, the store runs the root **reducer** function, and lets it calculate the new state based on the old state and the action
- Finally, the store notifies **subscribers** that the state has been updated so the UI can be updated with the new data.

### Redux Core Example App

Let's look at a minimal working example of a Redux app - a small counter application:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/dank-architecture-lr7k1?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-core-example"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

Because Redux is a standalone JS library with no dependencies, this example is written by only loading a single script tag for the Redux library, and uses basic JS and HTML for the UI. In practice, Redux is normally used by [installing the Redux packages from NPM](../../introduction/Installation.md), and the UI is created using a library like [React](https://reactjs.org).

:::info

[Part 5: UI and React](./part-5-ui-and-react.md) shows how to use Redux and React together.

:::

Let's break this example down into its separate parts to see what's happening.

#### State, Actions, and Reducers

We start by defining an initial **state** value to describe the application:

```js
// Define an initial state value for the app
const initialState = {
  value: 0
}
```

For this app, we're going to track a single number with the current value of our counter.

Redux apps normally have a JS object as the root piece of the state, with other values inside that object.

Then, we define a **reducer** function. The reducer receives two arguments, the current `state` and an
`action` object describing what happened. When the Redux app starts up, we don't have any state yet,
so we provide the `initialState` as the default value for this reducer:

```js
// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function counterReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case 'counter/incremented':
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      return { ...state, value: state.value - 1 }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}
```

Action objects always have a `type` field, which is a string you provide that
acts as a unique name for the action. The `type` should be a readable name so that
anyone who looks at this code understands what it means. In this case, we use the
word 'counter' as the first half of our action type, and the second half is a
description of "what happened". In this case, our 'counter' was 'incremented', so
we write the action type as `'counter/incremented'`.

Based on the type of the action, we either need to return a brand-new object to
be the new `state` result, or return the existing `state` object if nothing should change.
Note that we update the state _immutably_ by copying the existing state and updating the
copy, instead of modifying the original object directly.

#### Store

Now that we have a reducer function, we can create a **store** instance by
calling the Redux library `createStore` API.

```js
// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic
const store = Redux.createStore(counterReducer)
```

We pass the reducer function to `createStore`, which uses the reducer function
to generate the initial state, and to calculate any future updates.

#### UI

In any application, the user interface will show existing state on screen. When a user
does something, the app will update its data and then redraw the UI with those values.

```js
// Our "user interface" is some text in a single HTML element
const valueEl = document.getElementById('value')

// Whenever the store state changes, update the UI by
// reading the latest store state and showing new data
function render() {
  const state = store.getState()
  valueEl.innerHTML = state.value.toString()
}

// Update the UI with the initial data
render()
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render)
```

In this small example, we're only using some basic HTML elements as our UI,
with a single `<div>` showing the current value.

So, we write a function that knows how to get the latest state from the Redux
store using the `store.getState()` method, then takes that value and updates the UI to show it.

The Redux store lets us call `store.subscribe()` and pass a subscriber callback function that will be called
every time the store is updated. So, we can pass our `render` function as the subscriber, and know that
each time the store updates, we can update the UI with the latest value.

Redux itself is a standalone library that can be used anywhere. This also means that it can be used with any UI layer.

#### Dispatching Actions

Finally, we need to respond to user input by creating **action** objects that
describe what happened, and **dispatching** them to the store. When we call `store.dispatch(action)`,
the store runs the reducer, calculates the updated state, and runs the subscribers
to update the UI.

```js
// Handle user inputs by "dispatching" action objects,
// which should describe "what happened" in the app
document.getElementById('increment').addEventListener('click', function () {
  store.dispatch({ type: 'counter/incremented' })
})

document.getElementById('decrement').addEventListener('click', function () {
  store.dispatch({ type: 'counter/decremented' })
})

document
  .getElementById('incrementIfOdd')
  .addEventListener('click', function () {
    // We can write logic to decide what to do based on the state
    if (store.getState().value % 2 !== 0) {
      store.dispatch({ type: 'counter/incremented' })
    }
  })

document
  .getElementById('incrementAsync')
  .addEventListener('click', function () {
    // We can also write async logic that interacts with the store
    setTimeout(function () {
      store.dispatch({ type: 'counter/incremented' })
    }, 1000)
  })
```

Here, we'll dispatch the actions that will make the reducer add 1 or
subtract 1 from the current counter value.

We can also write code that only dispatches an action if a certain
condition is true, or write some async code that dispatches an action
after a delay.

### Data Flow

We can summarize the flow of data through a Redux app with this diagram. It represents how:

- actions are dispatched in response to a user interaction like a click
- the store runs the reducer function to calculate a new state
- the UI reads the new state to display the new values

(Don't worry if these pieces aren't quite clear yet! Keep this picture in your mind as you go through the rest of this tutorial, and you'll see how the pieces fit together.)

![Redux data flow diagram](/img/tutorials/essentials/ReduxDataFlowDiagram.gif)

## What You've Learned

That counter example was small, but it does show all the working pieces of a real Redux app.
**Everything we'll talk about in the following sections expands on those basic pieces.**

With that in mind, let's review what we've learned so far:

:::tip Summary

- **Redux is a library for managing global application state**
  - Redux is typically used with the React-Redux library for integrating Redux and React together
  - Redux Toolkit is the recommended way to write Redux logic
- **Redux uses several types of code**
  - _Actions_ are plain objects with a `type` field, and describe "what happened" in the app
  - _Reducers_ are functions that calculate a new state value based on previous state + an action
  - A Redux _store_ runs the root reducer whenever an action is _dispatched_

:::

## What's Next?

Now that you know what the basic pieces of a Redux app are, step ahead to [Part 2: Redux Concepts and Data Flow](./part-2-concepts-data-flow.md),
where we'll look at how data flows through a Redux app in more detail.

---
id: part-2-concepts-data-flow
title: 'Redux Fundamentals, Part 2: Concepts and Data Flow'
sidebar_label: 'Redux Concepts and Data Flow'
description: 'The official Redux Fundamentals tutorial: learn key Redux terms and how data flows in a Redux app'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 2: Concepts and Data Flow

:::tip What You'll Learn

- Key terms and concepts for using Redux
- How data flows through a Redux app

:::

## Introduction

In [Part 1: Redux Overview](./part-1-overview.md), we talked about what Redux is, why you might want to use it, and listed the other Redux libraries that are typically used with the Redux core. We also saw a small example of what a working Redux app looks like and the pieces that make up the app. Finally, we briefly mentioned some of the terms and concepts used with Redux.

In this section, we'll look at those terms and concepts in more detail, and talk more about how data flows
through a Redux application.

## Background Concepts

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

## Redux Terminology

There's some important Redux terms that you'll need to be familiar with before we continue:

### Actions

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

### Reducers

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
  if (action.type === 'counter/incremented') {
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
  { type: 'counter/incremented' },
  { type: 'counter/incremented' },
  { type: 'counter/incremented' }
]

const initialState = { value: 0 }

const finalResult = actions.reduce(counterReducer, initialState)
console.log(finalResult)
// {value: 3}
```

We can say that **Redux reducers reduce a set of actions (over time) into a single state**. The difference is that with `Array.reduce()` it happens all at once, and with Redux, it happens over the lifetime of your running app.

</DetailedExplanation>

### Store

The current Redux application state lives in an object called the **store** .

The store is created by passing in a reducer, and has a method called `getState` that returns the current state value:

```js
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

### Dispatch

The Redux store has a method called `dispatch`. **The only way to update the state is to call `store.dispatch()` and pass in an action object**. The store will run its reducer function and save the new state value inside, and we can call `getState()` to retrieve the updated value:

```js
store.dispatch({ type: 'counter/incremented' })

console.log(store.getState())
// {value: 1}
```

**You can think of dispatching actions as "triggering an event"** in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

### Selectors

**Selectors** are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

```js
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```

## Core Concepts and Principles

Overall, we can summarize the intent behind Redux's design in three core concepts:

### Single Source of Truth

The **global state** of your application is stored as an object inside a single **store**. Any given piece of data should only exist in one location, rather than being duplicated in many places.

This makes it easier to debug and inspect your app's state as things change, as well as centralizing logic that needs to interact with the entire application.

:::tip

This does _not_ mean that _every_ piece of state in your app must go into the Redux store! You should decide whether a piece of state belongs in Redux or your UI components, based on where it's needed.

:::

### State is Read-Only

The only way to change the state is to dispatch an **action**, an object that describes what happened.

This way, the UI won't accidentally overwrite data, and it's easier to trace why a state update happened. Since actions are plain JS objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

### Changes are Made with Pure Reducer Functions

To specify how the state tree is updated based on actions, you write **reducer** functions. Reducers are pure functions that take the previous state and an action, and return the next state. Like any other functions, you can split reducers into smaller functions to help do the work, or write reusable reducers for common tasks.

## Redux Application Data Flow

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
  - The app code dispatches an action to the Redux store, like `dispatch({type: 'counter/incremented'})`
  - The store runs the reducer function again with the previous `state` and the current `action`, and saves the return value as the new `state`
  - The store notifies all parts of the UI that are subscribed that the store has been updated
  - Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
  - Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

Here's what that data flow looks like visually:

![Redux data flow diagram](/img/tutorials/essentials/ReduxDataFlowDiagram.gif)

## What You've Learned

:::tip Summary

- **Redux's intent can be summarized in three principles**
  - Global app state is kept in a single store
  - The store state is read-only to the rest of the app
  - Reducer functions are used to update the state in response to actions
- **Redux uses a "one-way data flow" app structure**
  - State describes the condition of the app at a point in time, and UI renders based on that state
  - When something happens in the app:
    - The UI dispatches an action
    - The store runs the reducers, and the state is updated based on what occurred
    - The store notifies the UI that the state has changed
  - The UI re-renders based on the new state

:::

## What's Next?

You should now be familiar with the key concepts and terms that describe the different parts of a Redux app.

Now, let's see how those pieces work together as we start building a new Redux application in [Part 3: State, Actions, and Reducers](./part-3-state-actions-reducers).

---
id: part-3-state-actions-reducers
title: 'Redux Fundamentals, Part 3: State, Actions, and Reducers'
sidebar_label: 'State, Actions, and Reducers'
description: 'The official Redux Fundamentals tutorial: learn how reducers update state in response to actions'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 3: State, Actions, and Reducers

:::tip What You'll Learn

- How to define state values that contain your app's data
- How to define action objects that describe what happens in your app
- How to write reducer functions that calculate updated state based on existing state and actions

:::

:::info Prerequisites

- Familiarity with key Redux terms and concepts like "actions", "reducers", "store", and "dispatching". (See **[Part 2: Redux Concepts and Data Flow](./part-2-concepts-data-flow.md)** for explanations of these terms.)

:::

## Introduction

In [Part 2: Redux Concepts and Data Flow](./part-2-concepts-data-flow.md), we looked at how Redux can help us build maintainable apps by giving us a single central place to put global app state. We also talked about core Redux concepts like dispatching action objects and using reducer functions that return new state values.

Now that you have some idea of what these pieces are, it's time to put that knowledge into practice. We're going to build a small example app to see how these pieces actually work together.

:::caution

**The example app is not meant as a complete production-ready project**. The goal is to help you learn core Redux APIs and usage patterns, and point you in the right direction using some limited examples. Also, some of the early pieces we build will be updated later on to show better ways to do things. **Please read through the whole tutorial to see all the concepts in use**.

:::

### Project Setup

For this tutorial, we've created a pre-configured starter project that already has React set up, includes some default styling, and has a fake REST API that will allow us to write actual API requests in our app. You'll use this as the basis for writing the actual application code.

To get started, you can open and fork this CodeSandbox:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/master/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

You can also [clone the same project from this Github repo](https://github.com/reduxjs/redux-fundamentals-example-app). After cloning the repo, you can install the tools for the project with `npm install`, and start it with `npm start`.

If you'd like to see the final version of what we're going to build, you can check out [the **`tutorial-steps` branch**](https://github.com/reduxjs/redux-fundamentals-example-app/tree/tutorial-steps), or [look at the final version in this CodeSandbox](https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/tutorial-steps).

#### Creating a New Redux + React Project

Once you've finished this tutorial, you'll probably want to try working on your own projects. **We recommend using the [Redux templates for Create-React-App](https://github.com/reduxjs/cra-template-redux) as the fastest way to create a new Redux + React project**. It comes with Redux Toolkit and React-Redux already configured, using [a modernized version of the "counter" app example you saw in Part 1](./part-1-overview.md). This lets you jump right into writing your actual application code without having to add the Redux packages and set up the store.

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

This initial project is based on [the standard Create-React-App](https://create-react-app.dev/docs/getting-started) project template, with some modifications.

Let's take a quick look at what the initial project contains:

- `/src`
  - `index.js`: the entry point file for the application. It renders the main `<App>` component.
  - `App.js`: the main application component.
  - `index.css`: styles for the complete application
  - `/api`
    - `client.js`: a small AJAX request client that allows us to make GET and POST requests
    - `server.js`: provides a fake REST API for our data. Our app will fetch data from these fake endpoints later.
  - `/exampleAddons`: contains some additional Redux addons that we'll use later in the tutorial to show how things work

If you load the app now, you should see a welcome message, but the rest of the app is otherwise empty.

With that, let's get started!

## Starting the Todo Example App

Our example application will be a small "todo" application. You've probably seen todo app examples before - they make
good examples because they let us show how to do things like tracking a list of items, handling user input, and updating
the UI when that data changes, which are all things that happen in a normal application.

### Defining Requirements

Let's start by figuring out the initial business requirements for this application:

- The UI should consist of three main sections:
  - An input box to let the user type in the text of a new todo item
  - A list of all the existing todo items
  - A footer section that shows the number of non-completed todos, and shows filtering options
- Todo list items should have a checkbox that toggles their "completed" status. We should also be able to add a color-coded
  category tag for a predefined list of colors, and delete todo items.
- The counter should pluralize the number of active todos: "0 items", "1 item", "3 items", etc
- There should be buttons to mark all todos as completed, and to clear all completed todos by removing them
- There should be two ways to filter the displayed todos in the list:
  - Filtering based on showing "All", "Active", and "Completed" todos
  - Filtering based on selecting one or more colors, and showing any todos whose tag that match those colors

We'll add some more requirements later on, but this is enough to get us started.

The end goal is an app that should look like this:

![Example todo app screenshot](/img/tutorials/fundamentals/todos-app-screenshot.png)

### Designing the State Values

One of the core principles of React and Redux is that **your UI should be based on your state**. So, one approach to designing an application is to first think of all the state needed to describe how the application works. It's also a good idea
to try to describe your UI with as few values in the state as possible, so there's less data you need to keep track of
and update.

Conceptually, there are two main aspects of this application:

- The actual list of current todo items
- The current filtering options

We'll also need to keep track of the data the user is typing into the "Add Todo" input box, but that's less important
and we'll handle that later.

For each todo item, we need to store a few pieces of information:

- The text the user entered
- The boolean flag saying if it's completed or not
- A unique ID value
- A color category, if selected

Our filtering behavior can probably be described with some enumerated values:

- Completed status: "All", "Active", and "Completed"
- Colors: "Red", "Yellow", "Green", "Blue", "Orange", "Purple"

Looking at these values, we can also say that the todos are "app state" (the core data that the application works with),
while the filtering values are "UI state" (state that describes what the app is doing right now). It can be helpful to
think about these different kinds of categories to help understand how the different pieces of state are being used.

### Designing the State Structure

With Redux, **our application state is always kept in plain JavaScript objects and arrays**. That means you may not put
other things into the Redux state - no class instances, built-in JS types like `Map` / `Set` `Promise` / `Date`, functions, or anything else that is not plain JS data.

**The root Redux state value is almost always a plain JS object**, with other data nested inside of it.

Based on this information, we should now be able to describe the kinds of values we need to have inside our Redux state:

- First, we need an array of todo item objects. Each item should have these fields:
  - `id`: a unique number
  - `text`: the text the user typed in
  - `completed`: a boolean flag
  - `color`: An optional color category
- Then, we need to describe our filtering options. We need to have:
  - The current "completed" filter value
  - An array of the currently selected color categories

So, here's what an example of our app's state might look like:

```js
const todoAppState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
  ],
  filters: {
    status: 'Active',
    colors: ['red', 'blue']
  }
}
```

It's important to note that **it's okay to have other state values outside of Redux!**. This example is small enough so far that we actually do have all our state in the Redux store, but as we'll see later, some data really doesn't need to be kept in Redux (like "is this dropdown open?" or "current value of a form input").

### Designing Actions

**Actions** are plain JavaScript objects that have a `type` field. As mentioned earlier, **you can think of an action as an event that describes something that happened in the application**.

In the same way that we designed the state structure based on the app's requirements, we should also be able to
come up with a list of some of the actions that describe what's happening:

- Add a new todo entry based on the text the user entered
- Toggle the completed status of a todo
- Select a color category for a todo
- Delete a todo
- Mark all todos as completed
- Clear all completed todos
- Choose a different "completed" filter value
- Add a new color filter
- Remove a color filter

We normally put any extra data needed to describe what's happening into the `action.payload` field. This could be a
number, a string, or an object with multiple fields inside.

The Redux store doesn't care what the actual text of the `action.type` field is. However, your own code will look
at `action.type` to see if an update is needed. Also, you will frequently look at action type strings in the Redux
DevTools Extension while debugging to see what's going on in your app. So, try to choose action types that are
readable and clearly describe what's happening - it'll be much easier to understand things when you look at them later!

Based on that list of things that can happen, we can create a list of actions that our application will use:

- `{type: 'todos/todoAdded', payload: todoText}`
- `{type: 'todos/todoToggled', payload: todoId}`
- `{type: 'todos/colorSelected, payload: {todoId, color}}`
- `{type: 'todos/todoDeleted', payload: todoId}`
- `{type: 'todos/allCompleted'}`
- `{type: 'todos/completedCleared'}`
- `{type: 'filters/statusFilterChanged', payload: filterValue}`
- `{type: 'filters/colorFilterChanged', payload: {color, changeType}}`

In this case, the actions primarily have a single extra piece of data apiece, so we can put that directly in the `action.payload` field. We could have split the color filter behavior into two actions, one for "added" and one for "removed", but in this case
we'll do it as one action with an extra field inside specifically to show that we can have objects as an action payload.

Like the state data, **actions should contain the smallest amount of information needed to describe what happened**.

## Writing Reducers

Now that we know what our state structure and our actions look like, it's time to write our first reducer.

**Reducers** are functions that take the current `state` and an `action` as arguments, and return a new `state` result. In other words, **`(state, action) => newState`**.

### Creating the Root Reducer

**A Redux app really only has one reducer function: the "root reducer" function** that you will pass to `createStore` later on. That one root reducer function is responsible for handling _all_ of the actions that are dispatched, and calculating what the _entire_ new state result should be every time.

Let's start by creating a `reducer.js` file in the `src` folder, alongside `index.js` and `App.js`.

Every reducer needs some initial state, so we'll add some fake todo entries to get us started. Then, we can write an outline for the logic inside the reducer function:

```js title="src/reducer.js"
const initialState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
  ],
  filters: {
    status: 'All',
    colors: []
  }
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}
```

A reducer may be called with `undefined` as the state value when the application is being initialized. If that happens, we need to provide an initial state value so the rest of the reducer code has something to work with. **Reducers normally use ES6 default argument syntax to provide initial state: `(state = initialState, action)`**.

Next, let's add the logic to handle the `'todos/todoAdded'` action.

We know we need to check to see the current action's type matches that specific string.
Then, we need to return a new object containing _all_ of the state, even for the fields
that didn't change.

```js title="src/reducer.js"
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    // highlight-start
    case 'todos/todoAdded': {
      // We need to return a new state object
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `todos` field
        todos: [
          // with all of the old todos
          ...state.todos,
          // and the new todo object
          {
            // Use an auto-incrementing numeric ID for this example
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false
          }
        ]
      }
    }
    // highlight-end
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}
```

That's... an awful lot of work to add one todo item to the state. Why is all this extra work necessary?

### Rules of Reducers

We said earlier that **reducers must _always_ follow some special rules**:

- They should only calculate the new state value based on the `state` and `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make _immutable updates_, by copying the existing `state` and making changes to the copied values.
- They must not do any asynchronous logic or other "side effects"

:::tip

**A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function**. Some common kinds of side effects are things like:

- Logging a value to the console
- Saving a file
- Setting an async timer
- Making an AJAX HTTP request
- Modifying some state that exists outside of a function, or mutating arguments to a function
- Generating random numbers or unique random IDs (such as `Math.random()` or `Date.now()`)

:::

Any function that follows these rules is also known as a **"pure" function**, even if it's not specifically written as a reducer function.

But why are these rules important? There's a few different reasons:

- One of the goals of Redux is to make your code predictable. When a function's output is only calculated from the input arguments, it's easier to understand how that code works, and to test it.
- On the other hand, if a function depends on variables outside itself, or behaves randomly, you never know what will happen when you run it.
- If a function modifies other values, including its arguments, that can change the way the application works unexpectedly. This can be a common source of bugs, such as "I updated my state, but now my UI isn't updating when it should!"
- Some of the Redux DevTools capabilities depend on having your reducers follow these rules correctly

The rule about "immutable updates" is particularly important, and worth talking about further.

### Reducers and Immutable Updates

Earlier, we talked about "mutation" (modifying existing object/array values) and "immutability" (treating values as something that cannot be changed).

:::warning

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

We already saw that we can [write immutable updates by hand](./part-2-concepts-data-flow.md#immutability), by using JavaScript's array / object spread operators and other functions that return copies of the original values.

This becomes harder when the data is nested. **A critical rule of immutable updates is that you must make a copy of _every_ level of nesting that needs to be updated.**

However, if you're thinking that "writing immutable updates by hand this way looks hard to remember and do correctly"... yeah, you're right! :)

Writing immutable update logic by hand _is_ hard, and **accidentally mutating state in reducers is the single most common mistake Redux users make**.

:::tip

**In real-world applications, you won't have to write these complex nested immutable updates by hand**. In [Part 8: Modern Redux with Redux Toolkit](./part-8-modern-redux.md), you'll
learn how to use Redux Toolkit to simplify writing immutable update logic in reducers.

:::

### Handling Additional Actions

With that in mind, let's add the reducer logic for a couple more cases. First, toggling a todo's `completed` field based on its ID:

```js title="src/reducer.js"
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false
          }
        ]
      }
    }
    // highlight-start
    case 'todos/todoToggled': {
      return {
        // Again copy the entire state object
        ...state,
        // This time, we need to make a copy of the old todos array
        todos: state.todos.map(todo => {
          // If this isn't the todo item we're looking for, leave it alone
          if (todo.id !== action.payload) {
            return todo
          }

          // We've found the todo that has to change. Return a copy:
          return {
            ...todo,
            // Flip the completed flag
            completed: !todo.completed
          }
        })
      }
    }
    // highlight-end
    default:
      return state
  }
}
```

And since we've been focusing on the todos state, let's add a case to handle the "visibility selection changed" action as well:

```js title="src/reducer.js"
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false
          }
        ]
      }
    }
    case 'todos/todoToggled': {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          }

          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
    }
    // highlight-start
    case 'filters/statusFilterChanged': {
      return {
        // Copy the whole state
        ...state,
        // Overwrite the filters value
        filters: {
          // copy the other filter fields
          ...state.filters,
          // And replace the status field with the new value
          status: action.payload
        }
      }
    }
    // highlight-end
    default:
      return state
  }
}
```

We've only handled 3 actions, but this is already getting a bit long. If we try to handle every action in this one reducer
function, it's going to be hard to read it all.

That's why **reducers are typically split into multiple smaller reducer functions** - to make it easier to understand and
maintain the reducer logic.

## Splitting Reducers

As part of this, **Redux reducers are typically split apart based on the section of the Redux state that they update**. Our todo app state currently has two top-level sections: `state.todos` and `state.filters`. So, we can split the large root reducer function into two smaller reducers - a `todosReducer` and a `filtersReducer`.

So, where should these split-up reducer functions live?

**We recommend organizing your Redux app folders and files based on "features"** - code that relates to a specific concept
or area of your application. **The Redux code for a particular feature is usually written as a single file, known as a
"slice" file**, which contains all the reducer logic and all of the action-related code for that part of your app state.

Because of that, **the reducer for a specific section of the Redux app state is called a "slice reducer"**. Typically, some of the action objects will be closely related to a specific slice reducer, and so the action type strings should start with the name of that feature (like `'todos'`) and describe the event that happened (like `'todoAdded'`), joined together into one string (`'todos/todoAdded'`).

In our project, create a new `features` folder, and then a `todos` folder inside that. Create a new file named `todosSlice.js`, and let's cut and paste the todo-related initial state over into this file:

```js title="src/features/todos/todosSlice.js"
const initialState = [
  { id: 0, text: 'Learn React', completed: true },
  { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
  { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
]

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
```

Now we can copy over the logic for updating the todos. However, there's an important difference here. **This file only has to update the todos-related state - it's not nested any more!** This is another reason why we split up reducers. Since the todos state is an array by itself, we don't have to copy the outer root state object in here. That makes this reducer easier to read.

This is called **reducer composition**, and it's the fundamental pattern of building Redux apps.

Here's what the updated reducer looks like after we handle those actions:

```js title="src/features/todos/todosSlice.js"
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // highlight-start
    case 'todos/todoAdded': {
      // Can return just the new todos array - no extra object around it
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false
        }
      ]
    }
    case 'todos/todoToggled': {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    }
    //highlight-end
    default:
      return state
  }
}
```

That's a bit shorter and easier to read.

Now we can do the same thing for the visibility logic. Create `src/features/filters/filtersSlice.js`, and let's move all the filter-related code over there:

```js title="src/features/filters/filtersSlice.js"
const initialState = {
  status: 'All',
  colors: []
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    // highlight-start
    case 'filters/statusFilterChanged': {
      return {
        // Again, one less level of nesting to copy
        ...state,
        status: action.payload
      }
    }
    // highlight-end
    default:
      return state
  }
}
```

We still have to copy the object containing the filters state, but since there's less nesting, it's easier to read what's happening.

:::info

To keep this page shorter, we'll skip showing how to write the reducer update logic for the other actions.

**Try writing the updates for those yourself**, based on [the requirements described above](#defining-requirements).

If you get stuck, see [the CodeSandbox at the end of this page](#what-youve-learned) for the complete implementation of these reducers.

:::

## Combining Reducers

We now have two separate slice files, each with its own slice reducer function. But, we said earlier that the Redux store needs _one_ root reducer function when we create it. So, how can we go back to having a root reducer without putting all the code in one big function?

Since reducers are normal JS functions, we can import the slice reducers back into `reducer.js`, and write a new root reducer whose only job is to call the other two functions.

```js title="src/reducer.js"
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

export default function rootReducer(state = {}, action) {
  // always return a new object for the root state
  return {
    // the value of `state.todos` is whatever the todos reducer returns
    todos: todosReducer(state.todos, action),
    // For both reducers, we only pass in their slice of the state
    filters: filtersReducer(state.filters, action)
  }
}
```

**Note that each of these reducers is managing its own part of the global state. The state parameter is different for every reducer, and corresponds to the part of the state it manages.**

This allows us to split up our logic based on features and slices of state, to keep things maintainable.

### `combineReducers`

We can see that the new root reducer is doing the same thing for each slice: calling the slice reducer, passing in the slice of the state owned by that reducer, and assigning the result back to the root state object. If we were to add more slices, the pattern
would repeat.

The Redux core library includes a utility called [`combineReducers`](../../api/combineReducers.md), which does this same boilerplate step for us. We can replace our hand-written `rootReducer` with a shorter one generated by `combineReducers`.

**Now that we need `combineReducers`, it's time to actually install the Redux core library**:

```js
npm install redux
```

Once that's done, we can import `combineReducers` and use it:

```js title="src/reducer.js"
// highlight-next-line
import { combineReducers } from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer
```

`combineReducers` accepts an object where the key names will become the keys in your root state object, and the
values are the slice reducer functions that know how to update those slices of the Redux state.

**Remember, the key names you give to `combineReducers` decides what the key names of your state object will be!**

## What You've Learned

**State, Actions, and Reducers are the building blocks of Redux**. Every Redux app has state values, creates actions to describe what happened, and uses reducer functions to calculate new state values based on the previous state and an action.

Here's the contents of our app so far:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-1-combinedReducers/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Freducer.js&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

:::tip Summary

- **Redux apps use plain JS objects, arrays, and primitives as the state values**
  - The root state value should be a plain JS object
  - The state should contain the smallest amount of data needed to make the app work
  - Classes, Promises, functions, and other non-plain values should _not_ go in the Redux state
  - Reducers must not create random values like `Math.random()` or `Date.now()`
  - It's okay to have other state values that are not in the Redux store (like local component state) side-by side with Redux
- **Actions are plain objects with a `type` field that describe what happened**
  - The `type` field should be a readable string, and is usually written as `'feature/eventName'`
  - Actions may contain other values, which are typically stored in the `action.payload` field
  - Actions should have the smallest amount of data needed to describe what happened
- **Reducers are functions that look like `(state, action) => newState`**
  - Reducers must always follow special rules:
    - Only calculate the new state based on the `state` and `action` arguments
    - Never mutate the existing `state` - always return a copy
    - No "side effects" like AJAX calls or async logic
- **Reducers should be split up to make them easier to read**
  - Reducers are usually split based on top-level state keys or "slices" of state
  - Reducers are usually written in "slice" files, organized into "feature" folders
  - Reducers can be combined together with the Redux `combineReducers` function
  - The key names given to `combineReducers` define the top-level state object keys

:::

## What's Next?

We now have some reducer logic that will update our state, but those reducers won't do anything by themselves. They need
to be put inside a Redux store, which can call the reducer code with actions when something has happened.

In [Part 4: Store](./part-4-store.md), we'll see how to create a Redux store and run our reducer logic.

---
id: part-4-store
title: 'Redux Fundamentals, Part 4: Store'
sidebar_label: 'Store'
description: 'The official Redux Fundamentals tutorial: learn how to create and use a Redux store'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 4: Store

:::tip What You'll Learn

- How to create a Redux store
- How to use the store to update state and listen for updates
- How to configure the store to extend its capabilities
- How to set up the Redux DevTools Extension to debug your app

:::

## Introduction

In [Part 3: State, Actions, and Reducers](./part-3-state-actions-reducers.md), we started writing our example todo app. We
listed business requirements, defined the **state** structure we need to make the app work, and created a series of action types
to describe "what happened" and match the kinds of events that can happen as a user interacts with our app. We also wrote **reducer** functions that can handle updating our `state.todos` and `state.filters` sections, and saw how we can use the Redux `combineReducers` function
to create a "root reducer" based on the different "slice reducers" for each feature in our app.

Now, it's time to pull those pieces together, with the central piece of a Redux app: the **store**.

## Redux Store

The Redux **store** brings together the state, actions, and reducers that make up your app. The store has several responsibilities:

- Holds the current application state inside
- Allows access to the current state via [`store.getState()`](../../api/Store.md#getState);
- Allows state to be updated via [`store.dispatch(action)`](../../api/Store.md#dispatch);
- Registers listener callbacks via [`store.subscribe(listener)`](../../api/Store.md#subscribe);
- Handles unregistering of listeners via the `unsubscribe` function returned by [`store.subscribe(listener)`](../../api/Store.md#subscribe).

It's important to note that **you'll only have a single store in a Redux application**. When you want to split your data handling logic, you'll use [reducer composition](./part-3-state-actions-reducers.md#splitting-reducers) and create multiple reducers that
can be combined together, instead of creating separate stores.

### Creating a Store

**Every Redux store has a single root reducer function**. In the previous section, we [created a root reducer function using `combineReducers`](./part-3-state-actions-reducers.md#combinereducers). That root reducer is currently defined in `src/reducer.js` in our example app. Let's import that root reducer and create our first store.

The Redux core library has [**a `createStore` API**](../../api/createStore.md) that will create the store. Add a new file
called `store.js`, and import `createStore` and the root reducer. Then, call `createStore` and pass in the root reducer:

```js title="src/store.js"
import { createStore } from 'redux'
import rootReducer from './reducer'

// highlight-next-line
const store = createStore(rootReducer)

export default store
```

### Loading Initial State

`createStore` can also accept a `preloadedState` value as its second argument. You could use this to add
initial data when the store is created, such as values that were included in an HTML page sent from the server, or persisted in
`localStorage` and read back when the user visits the page again, like this:

```js title="storeStatePersistenceExample.js"
import { createStore } from 'redux'
import rootReducer from './reducer'

// highlight-start
let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

const store = createStore(rootReducer, preloadedState)
// highlight-end
```

## Dispatching Actions

Now that we have created a store, let's verify our program works! Even without any UI, we can already test the update logic.

:::tip

Before you run this code, try going back to `src/features/todos/todosSlice.js`, and remove all the example todo objects from the `initialState` so that it's an empty array. That will make the output from this example a bit easier to read.

:::

```js title="src/index.js"
// Omit existing React imports

import store from './store'

// Log the initial state
// highlight-next-line
console.log('Initial state: ', store.getState())
// {todos: [....], filters: {status, colors}}

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// highlight-start
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)
// highlight-end

// Now, dispatch some actions

// highlight-next-line
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

store.dispatch({ type: 'todos/todoToggled', payload: 0 })
store.dispatch({ type: 'todos/todoToggled', payload: 1 })

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: { color: 'red', changeType: 'added' }
})

// Stop listening to state updates
// highlight-next-line
unsubscribe()

// Dispatch one more action to see what happens

store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })

// Omit existing React rendering logic
```

Remember, every time we call `store.dispatch(action)`:

- The store calls `rootReducer(state, action)`
  - That root reducer may call other slice reducers inside of itself, like `todosReducer(state.todos, action)`
- The store saves the _new_ state value inside
- The store calls all the listener subscription callbacks
- If a listener has access to the `store`, it can now call `store.getState()` to read the latest state value

If we look at the console log output from that example, you can see how the
Redux state changes as each action was dispatched:

![Logged Redux state after dispatching actions](/img/tutorials/fundamentals/initial-state-updates.png)

Notice that our app did _not_ log anything from the last action. That's because we removed the listener callback when we called `unsubscribe()`, so nothing else ran after the action was dispatched.

We specified the behavior of our app before we even started writing the UI. That
helps give us confidence that the app will work as intended.

:::info

If you want, you can now try writing tests for your reducers. Because they're [pure functions](../../understanding/thinking-in-redux/ThreePrinciples.md#changes-are-made-with-pure-functions), it should be straightforward to test them. Call them with an example `state` and `action`,
take the result, and check to see if it matches what you expect:

```js title="todosSlice.spec.js"
import todosReducer from './todosSlice'

test('Toggles a todo based on id', () => {
  const initialState = [{ id: 0, text: 'Test text', completed: false }]

  const action = { type: 'todos/todoToggled', payload: 0 }
  const result = todosReducer(initialState, action)
  expect(result[0].completed).toBe(true)
})
```

:::

## Inside a Redux Store

It might be helpful to take a peek inside a Redux store to see how it works. Here's a miniature example of a working Redux store, in about 25 lines of code:

```js title="miniReduxStoreExample.js"
function createStore(reducer, preloadedState) {
  let state = preloadedState
  const listeners = []

  function getState() {
    return state
  }

  function subscribe(listener) {
    listeners.push(listener)
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  dispatch({ type: '@@redux/INIT' })

  return { dispatch, subscribe, getState }
}
```

This small version of a Redux store works well enough that you could use it to replace the actual Redux `createStore` function you've been using in your app so far. (Try it and see for yourself!) [The actual Redux store implementation is longer and a bit more complicated](https://github.com/reduxjs/redux/blob/v4.0.5/src/createStore.js), but most of that is comments, warning messages, and handling some edge cases.

As you can see, the actual logic here is fairly short:

- The store has the current `state` value and `reducer` function inside of itself
- `getState` returns the current state value
- `subscribe` keeps an array of listener callbacks and returns a function to remove the new callback
- `dispatch` calls the reducer, saves the state, and runs the listeners
- The store dispatches one action on startup to initialize the reducers with their state
- The store API is an object with `{dispatch, subscribe, getState}` inside

To emphasize one of those in particular: notice that `getState` just returns whatever the current `state` value is. That means that **by default, nothing prevents you from accidentally mutating the current state value!** This code will run without any errors, but it's incorrect:

```js
const state = store.getState()
// ❌ Don't do this - it mutates the current state!
state.filters.status = 'Active'
```

In other words:

- The Redux store doesn't make an extra copy of the `state` value when you call `getState()`. It's exactly the same reference that was returned from the root reducer function
- The Redux store doesn't do anything else to prevent accidental mutations. It _is_ possible to mutate the state, either inside a reducer or outside the store, and you must always be careful to avoid mutations.

One common cause of accidental mutations is sorting arrays. [**Calling `array.sort()` actually mutates the existing array**](https://doesitmutate.xyz/sort/). If we called `const sortedTodos = state.todos.sort()`, we'd end up mutating the real store state unintentionally.

:::tip

In [Part 8: Modern Redux](./part-8-modern-redux.md), we'll see how Redux Toolkit helps avoid mutations in reducers, and detects and warns about accidental mutations outside of reducers.

:::

## Configuring the Store

We've already seen that we can pass `rootReducer` and `preloadedState` arguments to `createStore`. However, `createStore` can also take one more argument, which is used to customize the store's abilities and give it new powers.

Redux stores are customized using something called a **store enhancer**. A store enhancer is like a special version of `createStore` that adds another layer wrapping around the original Redux store. An enhanced store can then change how the store behaves, by supplying its own versions of the store's `dispatch`, `getState`, and `subscribe` functions instead of the originals.

For this tutorial, we won't go into details about how store enhancers actually work - we'll focus on how to use them.

### Creating a Store with Enhancers

Our project has two small example store enhancers available, in the `src/exampleAddons/enhancers.js` file:

- `sayHiOnDispatch`: an enhancer that always logs `'Hi'!` to the console every time an action is dispatched
- `includeMeaningOfLife`: an enhancer that always adds the field `meaningOfLife: 42` to the value returned from `getState()`

Let's start by using `sayHiOnDispatch`. First, we'll import it, and pass it to `createStore`:

```js title="src/store.js"
import { createStore } from 'redux'
import rootReducer from './reducer'
import { sayHiOnDispatch } from './exampleAddons/enhancers'

const store = createStore(rootReducer, undefined, sayHiOnDispatch)

export default store
```

We don't have a `preloadedState` value here, so we'll pass `undefined` as the second argument instead.

Next, let's try dispatching an action:

```js title="src/index.js"
import store from './store'

// highlight-start
console.log('Dispatching action')
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
console.log('Dispatch complete')
// highlight-end
```

Now look at the console. You should see `'Hi!'` logged there, in between the other two log statements:

![sayHi store enhancer logging](/img/tutorials/fundamentals/sayhi-enhancer-logging.png)

The `sayHiOnDispatch` enhancer wrapped the original `store.dispatch` function with its own specialized version of `dispatch`. When we called `store.dispatch()`, we were actually calling the wrapper function from `sayHiOnDispatch`, which called the original and then printed 'Hi'.

Now, let's try adding a second enhancer. We can import `includeMeaningOfLife` from that same file... but we have a problem. **`createStore` only accepts one enhancer as its third argument!** How can we pass _two_ enhancers at the same time?

What we really need is some way to merge both the `sayHiOnDispatch` enhancer and the `includeMeaningOfLife` enhancer into a single combined enhancer, and then pass that instead.

Fortunately, **the Redux core includes [a `compose` function](../../api/compose.md) that can be used to merge multiple enhancers together**. Let's use that here:

```js title="src/store.js"
// highlight-next-line
import { createStore, compose } from 'redux'
import rootReducer from './reducer'
import {
  sayHiOnDispatch,
  includeMeaningOfLife
} from './exampleAddons/enhancers'

// highlight-next-line
const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)

// highlight-next-line
const store = createStore(rootReducer, undefined, composedEnhancer)

export default store
```

Now we can see what happens if we use the store:

```js title="src/index.js"
import store from './store'

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// log: 'Hi!'

console.log('State after dispatch: ', store.getState())
// log: {todos: [...], filters: {status, colors}, meaningOfLife: 42}
```

And the logged output looks like this:

![meaningOfLife store enhancer logging](/img/tutorials/fundamentals/meaningOfLife-enhancer-logging.png)

So, we can see that both enhancers are modifying the behavior of the store at the same time. `sayHiOnDispatch` has changed how `dispatch` works, and `includeMeaningOfLife` has changed how `getState` works.

Store enhancers are a very powerful way to modify the store, and almost all Redux apps will include at least one enhancer when setting up the store.

:::tip

If you don't have any `preloadedState` to pass in, you can pass the `enhancer` as the second argument instead:

```js
const store = createStore(rootReducer, storeEnhancer)
```

:::

## Middleware

Enhancers are powerful because they can override or replace any of the store's methods: `dispatch`, `getState`, and `subscribe`.

But, much of the time, we only need to customize how `dispatch` behaves. It would be nice if there was a way to add some customized behavior when `dispatch` runs.

Redux uses a special kind of addon called **middleware** to let us customize the `dispatch` function.

If you've ever used a library like Express or Koa, you might already be familiar with the idea of adding middleware to customize behavior. In these frameworks, middleware is some code you can put between the framework receiving a request, and the framework generating a response. For example, Express or Koa middleware may add CORS headers, logging, compression, and more. The best feature of middleware is that it's composable in a chain. You can use multiple independent third-party middleware in a single project.

Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. **Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.** People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

First, we'll look at how to add middleware to the store, then we'll show how you can write your own.

### Using Middleware

We already saw that you can customize a Redux store using store enhancers. Redux middleware are actually implemented on top of a very special store enhancer that comes built in with Redux, called **`applyMiddleware`**.

Since we already know how to add enhancers to our store, we should be able to do that now. We'll start with `applyMiddleware` by itself, and we'll add three example middleware that have been included in this project.

```js title="src/store.js"
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, middlewareEnhancer)

export default store
```

As their names say, each of these middleware will print a number when an action is dispatched.

What happens if we dispatch now?

```js title="src/index.js"
import store from './store'

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// log: '1'
// log: '2'
// log: '3'
```

And we can see the output in the console:

![print middleware logging](/img/tutorials/fundamentals/print-middleware-logging.png)

So how does that work?

**Middleware form a pipeline around the store's `dispatch` method**. When we call `store.dispatch(action)`, we're _actually_ calling the first middleware in the pipeline. That middleware can then do anything it wants when it sees the action. Typically, a middleware will check to see if the action is a specific type that it cares about, much like a reducer would. If it's the right type, the middleware might run some custom logic. Otherwise, it passes the action to the next middleware in the pipeline.

_Unlike_ a reducer, **middleware can have side effects inside**, including timeouts and other async logic.

In this case, the action is passed through:

1. The `print1` middleware (which we see as `store.dispatch`)
2. The `print2` middleware
3. The `print3` middleware
4. The original `store.dispatch`
5. The root reducer inside `store`

And since these are all function calls, they all _return_ from that call stack. So, the `print1` middleware is the first to run, and the last to finish.

### Writing Custom Middleware

We can also write our own middleware. You might not need to do this all the time, but custom middleware are a great way to add specific behaviors to a Redux application.

**Redux middleware are written as a series of three nested functions**. Let's see what that pattern looks like. We'll start by trying to write this middleware using the `function` keyword, so that it's more clear what's happening:

```js
// Middleware written as ES5 functions

// Outer function:
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here

      return next(action)
    }
  }
}
```

Let's break down what these three functions do and what their arguments are.

- `exampleMiddleware`: The outer function is actually the "middleware" itself. It will be called by `applyMiddleware`, and receives a `storeAPI` object containing the store's `{dispatch, getState}` functions. These are the same `dispatch` and `getState` functions that are actually part of the store. If you call this `dispatch` function, it will send the action to the _start_ of the middleware pipeline. This is only called once.
- `wrapDispatch`: The middle function receives a function called `next` as its argument. This function is actually the _next middleware_ in the pipeline. If this middleware is the last one in the sequence, then `next` is actually the original `store.dispatch` function instead. Calling `next(action)` passes the middleware to the _next_ middleware in the pipeline. This is also only called once
- `handleAction`: Finally, the inner function receives the current `action` as its argument, and will be called _every_ time an action is dispatched.

:::tip

You can give these middleware functions any names you want, but it can help to use these names to remember what each one does:

- Outer: `someCustomMiddleware` (or whatever your middleware is called)
- Middle: `wrapDispatch`
- Inner: `handleAction`

:::

Because these are normal functions, we can also write them using ES6 arrow functions. This lets us write them shorter because arrow functions don't have to have a `return` statement, but it can also be a bit harder to read if you're not yet familiar with arrow functions and implicit returns.

Here's the same example as above, using arrow functions:

```js
const anotherExampleMiddleware = storeAPI => next => action => {
  // Do something in here, when each action is dispatched

  return next(action)
}
```

We're still nesting those three functions together, and returning each function, but the implicit returns make this shorter.

### Your First Custom Middleware

Let's say we want to add some logging to our application. We'd like to see the contents of each action in the console when it's dispatched, and we'd like to see what the state is after the action has been handled by the reducers.

:::info

These example middleware aren't specifically part of the actual todo app, but you can try adding them to your project to see what happens when you use them.

:::

We can write a small middleware that will log that information to the console for us:

```js
const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}
```

Whenever an action is dispatched:

- The first part of the `handleAction` function runs, and we print `'dispatching'`
- We pass the action to the `next` section, which may be another middleware or the real `store.dispatch`
- Eventually the reducers run and the state is updated, and the `next` function returns
- We can now call `storeAPI.getState()` and see what the new state is
- We finish by returning whatever `result` value came from the `next` middleware

Any middleware can return any value, and the return value from the first middleware in the pipeline is actually returned when you call `store.dispatch()`. For example:

```js
const alwaysReturnHelloMiddleware = storeAPI => next => action {
  const originalResult = next(action);
  // Ignore the original result, return something else
  return 'Hello!'
}

const middlewareEnhancer = applyMiddleware(alwaysReturnHelloMiddleware)
const store = createStore(rootReducer, middlewareEnhancer)

const dispatchResult = store.dispatch({type: 'some/action'})
console.log(dispatchResult)
// log: 'Hello!'
```

Let's try one more example. Middleware often look for a specific action, and then do something when that action is dispatched. Middleware also have the ability to run async logic inside. We can write a middleware that prints something on a delay when it sees a certain action:

```js
const delayedMessageMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload)
    }, 1000)
  }

  return next(action)
}
```

This middleware will look for "todo added" actions. Every time it sees one, it sets a 1-second timer, and then prints the action's payload to the console.

### Middleware Use Cases

So, what can we do with middleware? Lots of things!

A middleware can do anything it wants when it sees a dispatched action:

- Log something to the console
- Set timeouts
- Make asynchronous API calls
- Modify the action
- Pause the action or even stop it entirely

and anything else you can think of.

In particular, **middleware are _intended_ to contain logic with side effects**. In addition, **middleware can modify `dispatch` to accept things that are _not_ plain action objects**. We'll talk more about both of these [in Part 6: Async Logic](./part-6-async-logic.md).

## Redux DevTools

Finally, there's one more very important thing to cover with configuring the store.

**Redux was specifically designed to make it easier to understand when, where, why, and how your state has changed over time**. As part of that, Redux was built to enable the use of the **Redux DevTools** - an addon that shows you a history of what actions were dispatched, what those actions contained, and how the state changed after each dispatched action.

The Redux DevTools UI is available as a browser extension for [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/). If you haven't already added that to your browser, go ahead and do that now.

Once that's installed, open up the browser's DevTools window. You should now see a new "Redux" tab there. It doesn't do anything, yet - we've got to set it up to talk to a Redux store first.

### Adding the DevTools to the Store

Once the extension is installed, we need to configure the store so that the DevTools can see what's happening inside. The DevTools require a specific store enhancer to be added to make that possible.

The [Redux DevTools Extension docs](https://github.com/zalmoxisus/redux-devtools-extension) have some instructions on how to set up the store, but the steps listed are a bit complicated. However, there's an NPM package called `redux-devtools-extension` that takes care of the complicated part. That package exports a specialized `composeWithDevTools` function that we can use instead of the original Redux `compose` function.

Here's how that looks:

```js title="src/store.js"
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(print1, print2, print3)
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)
export default store
```

Make sure that `index.js` is still dispatching an action after importing the store. Now, open up the Redux DevTools tab in the browser's DevTools window. You should see something that looks like this:

![Redux DevTools Extension: action tab](/img/tutorials/fundamentals/devtools-action-tab.png)

There's a list of dispatched actions on the left. If we click one of them, the right pane shows several tabs:

- The contents of that action object
- The entire Redux state as it looked after the reducer ran
- The diff between the previous state and this state
- If enabled, the function stack trace leading back to the line of code that called `store.dispatch()` in the first place

Here's what the "State" and "Diff" tabs look like after we dispatched that "add todo" action:

![Redux DevTools Extension: state tab](/img/tutorials/fundamentals/devtools-state-tab.png)

![Redux DevTools Extension: diff tab](/img/tutorials/fundamentals/devtools-diff-tab.png)

These are very powerful tools that can help us debug our apps and understand exactly what's happening inside.

## What You've Learned

As you've seen, the store is the central piece of every Redux application. Stores contain state and handle actions by running reducers, and can be customized to add additional behaviors.

Let's see how our example app looks now:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-2-storeSetup/?fontsize=14&hidenavigation=1&theme=dark&module=%2Fsrc%2Fstore.js&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

And as a reminder, here's what we covered in this section:

:::tip Summary

- **Redux apps always have a single store**
  - Stores are created with the Redux `createStore` API
  - Every store has a single root reducer function
- **Stores have three main methods**
  - `getState` returns the current state
  - `dispatch` sends an action to the reducer to update the state
  - `subscribe` takes a listener callback that runs each time an action is dispatched
- **Store enhancers let us customize the store when it's created**
  - Enhancers wrap the store and can override its methods
  - `createStore` accepts one enhancer as an argument
  - Multiple enhancers can be merged together using the `compose` API
- **Middleware are the main way to customize the store**
  - Middleware are added using the `applyMiddleware` enhancer
  - Middleware are written as three nested functions inside each other
  - Middleware run each time an action is dispatched
  - Middleware can have side effects inside
- **The Redux DevTools let you see what's changed in your app over time**
  - The DevTools Extension can be installed in your browser
  - The store needs the DevTools enhancer added, using `composeWithDevTools`
  - The DevTools show dispatched actions and changes in state over time

:::

## What's Next?

We now have a working Redux store that can run our reducers and update the state when we dispatch actions.

However, every app needs a user interface to display the data and let the user do something useful. In [Part 5: UI and React](./part-5-ui-and-react.md), we'll see how the Redux store works with a UI, and specifically see how Redux can work together with React.

---
id: part-5-ui-react
title: 'Redux Fundamentals, Part 5: UI and React'
sidebar_label: 'UI and React'
description: 'The official Redux Fundamentals tutorial: learn how to use Redux with React'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 5: UI and React

:::tip What You'll Learn

- How a Redux store works with a UI
- How to use Redux with React

:::

## Introduction

In [Part 4: Store](./part-4-store.md), we saw how to create a Redux store, dispatch actions, and read the current state. We also looked at how a store works inside, how enhancers and middleware let us customize the store with additional abilities, and how to add the Redux DevTools to let us see what's happening inside our app as actions are dispatched.

In this section, we'll add a User Interface for our todo app. We'll see how Redux works with a UI layer overall, and we'll specifically cover how Redux works together with React.

## Integrating Redux with a UI

Redux is a standalone JS library. As we've already seen, you can create and use a Redux store even if you don't have a user interface set up. This also means that **you can use Redux with any UI framework** (or even without _any_ UI framework), and use it on both client and server. You can write Redux apps with React, Vue, Angular, Ember, jQuery, or vanilla JavaScript.

That said, **Redux was specifically designed to work well with [React](https://reactjs.org)**. React lets you describe your UI as a function of your state, and Redux contains state and updates it in response to actions.

Because of that, we'll use React for this tutorial as we build our todo app, and cover the basics of how to use React with Redux.

Before we get to that part, let's take a quick look at how Redux interacts with a UI layer in general.

### Basic Redux and UI Integration

Using Redux with any UI layer requires a few consistent steps:

1. Create a Redux store
2. Subscribe to updates
3. Inside the subscription callback:
   1. Get the current store state
   2. Extract the data needed by this piece of UI
   3. Update the UI with the data
4. If necessary, render the UI with initial state
5. Respond to UI inputs by dispatching Redux actions

Let's go back to the [the counter app example we saw in Part 1](./part-1-overview.md) and see how it follows those steps:

```js
// 1) Create a new Redux store with the `createStore` function
const store = Redux.createStore(counterReducer)

// 2) Subscribe to redraw whenever the data changes in the future
store.subscribe(render)

// Our "user interface" is some text in a single HTML element
const valueEl = document.getElementById('value')

// 3) When the subscription callback runs:
function render() {
  // 3.1) Get the current store state
  const state = store.getState()
  // 3.2) Extract the data you want
  const newValue = state.value.toString()

  // 3.3) Update the UI with the new value
  valueEl.innerHTML = newValue
}

// 4) Display the UI with the initial store state
render()

// 5) Dispatch actions based on UI inputs
document.getElementById('increment').addEventListener('click', function () {
  store.dispatch({ type: 'counter/incremented' })
})
```

No matter what UI layer you're using, **Redux works this same way with every UI**. The actual implementations are typically a bit more complicated to help optimize performance, but it's the same steps each time.

Since Redux is a separate library, there are different "binding" libraries to help you use Redux with a given UI framework. Those UI binding libraries handle the details of subscribing to the store and efficiently updating the UI as state changes, so that you don't have to write that code yourself.

## Using Redux with React

The official [**React-Redux UI bindings library**](https://react-redux.js.org) is a separate package from the Redux core. You'll need to install that in addition as well:

```sh
npm install react-redux
```

(If you don't use npm, you may grab the latest UMD build from unpkg (either a [development](https://unpkg.com/react-redux@latest/dist/react-redux.js) or a [production](https://unpkg.com/react-redux@latest/dist/react-redux.min.js) build). The UMD build exports a global called `window.ReactRedux` if you add it to your page via a `<script>` tag.)

For this tutorial, we'll cover the most important patterns and examples you need to use React and Redux together, and see how they work in practice as part of our todo app.

:::info

See **the official React-Redux docs at https://react-redux.js.org** for a complete guide on how to use Redux and React together, and reference documentation on the React-Redux APIs.

:::

### Designing the Component Tree

Much like we [designed the state structure](./part-3-state-actions-reducers.md#designing-the-state-structure) based on requirements, we can also design the overall set of UI components and how they relate to each other in the application.

Based on [the list of business requirements for the app](./part-3-state-actions-reducers.md#defining-requirements), at a minimum we're going to need this set of components:

- **`<App>`**: the root component that renders everything else.
  - **`<Header>`**: contains the "new todo" text input and the "complete all todos" checkbox
  - **`<TodoList>`**: a list of all currently visible todo items, based on the filtered results
    - **`<TodoListItem>`**: a single todo list item, with a checkbox that can be clicked to toggle the todo's completed status, and a color category selector
  - **`<Footer>`**: Shows the number of active todos and controls for filtering the list based on completed status and color category

Beyond this basic component structure, we could potentially divide the components up in several different ways. For example, the `<Footer>` component _could_ be one larger component, or it could have multiple smaller components inside like `<CompletedTodos>`, `<StatusFilter>`, and `<ColorFilters>`. There's no single right way to divide these, and you'll find that it may be better to write larger components or split things into many smaller components depending on your situation.

For now, we'll start with this small list of components to keep things easier to follow. On that note, since we assume that [you already know React](https://reactjs.org), **we're going to skip past the details of how to write the layout code for these components and focus on how to actually use the React-Redux library in your React components**.

Here's the initial React UI of this app looks like before we start adding any Redux-related logic:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-3-initialUI/?fontsize=14&hidenavigation=1&theme=dark&view=preview&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

### Reading State from the Store with `useSelector`

We know that we need to be able to show a list of todo items. Let's start by creating a `<TodoList>` component that can read the list of todos from the store, loop over them, and show one `<TodoListItem>` component for each todo entry.

You should be familiar with [React hooks like `useState`](https://reactjs.org/docs/hooks-state.html), which can be called in React function components to give them access to React state values. React also lets us write [custom hooks](https://reactjs.org/docs/hooks-custom.html), which let us extract reusable hooks to add our own behavior on top of React's built-in hooks.

Like many other libraries, React-Redux includes [its own custom hooks](https://react-redux.js.org/api/hooks), which you can use in your own components. The React-Redux hooks give your React component the ability to talk to the Redux store by reading state and dispatching actions.

The first React-Redux hook that we'll look at is the [**`useSelector` hook**](https://react-redux.js.org/api/hooks#useselector), which **lets your React components read data from the Redux store**.

`useSelector` accepts a single function, which we call a **selector** function. **A selector is a function that takes the entire Redux store state as its argument, reads some value from the state, and returns that result**.

For example, we know that our todo app's Redux state keeps the array of todo items as `state.todos`. We can write a small selector function that returns that todos array:

```js
const selectTodos = state => state.todos
```

Or, maybe we want to find out how many todos are currently marked as "completed":

```js
const selectTotalCompletedTodos = state => {
  const completedTodos = state.todos.filter(todo => todo.completed)
  return completedTodos.length
}
```

So, **selectors can return values from the Redux store state, and also return _derived_ values based on that state as well**.

Let's read the array of todos into our `<TodoList>` component. First, we'll import the `useSelector` hook from the `react-redux` library, then call it with a selector function as its argument:

```jsx title="src/features/todos/TodoList.js"
import React from 'react'
// highlight-next-line
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

// highlight-next-line
const selectTodos = state => state.todos

const TodoList = () => {
  // highlight-next-line
  const todos = useSelector(selectTodos)

  // since `todos` is an array, we can loop over it
  const renderedListItems = todos.map(todo => {
    return <TodoListItem key={todo.id} todo={todo} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
```

The first time the `<TodoList>` component renders, the `useSelector` hook will call `selectTodos` and pass in the _entire_ Redux state object. Whatever the selector returns will be returned by the hook to your component. So, the `const todos` in our component will end up holding the same `state.todos` array inside our Redux store state.

But, what happens if we dispatch an action like `{type: 'todos/todoAdded'}`? The Redux state will be updated by the reducer, but our component needs to know that something has changed so that it can re-render with the new list of todos.

We know that we can call `store.subscribe()` to listen for changes to the store, so we _could_ try writing the code to subscribe to the store in every component. But, that would quickly get very repetitive and hard to handle.

Fortunately, **`useSelector` automatically subscribes to the Redux store for us!** That way, any time an action is dispatched, it will call its selector function again right away. **If the value returned by the selector changes from the last time it ran, `useSelector` will force our component to re-render with the new data**. All we have to do is call `useSelector()` once in our component, and it does the rest of the work for us.

However, there's a very important thing to remember here:

:::caution

**`useSelector` compares its results using strict `===` reference comparisons, so the component will re-render any time the selector result is a new reference!** This means that if you create a new reference in your selector and return it, your component could re-render _every_ time an action has been dispatched, even if the data really isn't different.

:::

For example, passing this selector to `useSelector` will cause the component to _always_ re-render, because `array.map()` always returns a new array reference:

```js
// Bad: always returning a new reference
const selectTodoDescriptions = state => {
  // This creates a new array reference!
  return state.todos.map(todo => todo.text)
}
```

:::tip

We'll talk about one way to fix this issue later in this section. We'll also talk about how you can improve performance and avoid unnecessary re-renders using "memoized" selector function in [Part 7: Standard Redux Patterns](./part-7-standard-patterns.md).

:::

It's also worth noting that we don't have to write a selector function as a separate variable. You can write a selector function directly inside the call to `useSelector`, like this:

```js
const todos = useSelector(state => state.todos)
```

### Dispatching Actions with `useDispatch`

We now know how to read data from the Redux store into our components. But, how can we dispatch actions to the store from a component? We know that outside of React, we can call `store.dispatch(action)`. Since we don't have access to the store in a component file, we need some way to get access to the `dispatch` function by itself inside our components.

The React-Redux [**`useDispatch` hook**](https://react-redux.js.org/api/hooks#usedispatch) gives us the store's `dispatch` method as its result. (In fact, the implementation of the hook really is `return store.dispatch`.)

So, we can call `const dispatch = useDispatch()` in any component that needs to dispatch actions, and then call `dispatch(someAction)` as needed.

Let's try that in our `<Header>` component. We know that we need to let the user type in some text for a new todo item, and then dispatch a `{type: 'todos/todoAdded'}` action containing that text.

We'll write a typical React form component that uses ["controlled inputs"](https://reactjs.org/docs/forms.html#controlled-components) to let the user type in the form text. Then, when the user presses the Enter key specifically, we'll dispatch that action.

```jsx title="src/features/header/Header.js"
import React, { useState } from 'react'
// highlight-next-line
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')
  // highlight-next-line
  const dispatch = useDispatch()

  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    // If the user pressed the Enter key:
    if (e.key === 'Enter' && trimmedText) {
      // highlight-start
      // Dispatch the "todo added" action with this text
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      // highlight-end
      // And clear out the text input
      setText('')
    }
  }

  return (
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

export default Header
```

### Passing the Store with `Provider`

Our components can now read state from the store, and dispatch actions to the store. However, we're still missing something. Where and how are the React-Redux hooks finding the right Redux store? A hook is a JS function, so it can't automatically import a store from `store.js` by itself.

Instead, we have to specifically tell React-Redux what store we want to use in our components. We do this by **rendering a `<Provider>` component around our entire `<App>`, and passing the Redux store as a prop to `<Provider>`**. After we do this once, every component in the application will be able to access the Redux store if needs to.

Let's add that to our main `index.js` file:

```jsx title="src/index.js"
import React from 'react'
import ReactDOM from 'react-dom'
// highlight-next-line
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

ReactDOM.render(
  // highlight-start
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  // highlight-end
  document.getElementById('root')
)
```

That covers the key parts of using React-Redux with React:

- Call the `useSelector` hook to read data in React components
- Call the `useDispatch` hook to dispatch actions in React components
- Put `<Provider store={store}>` around your entire `<App>` component so that other components can talk to the store

We should now be able to actually interact with the app! Here's the working UI so far:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-4-initialHooks/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

Now, let's look at a couple more ways we can use these together in our todo app.

## React-Redux Patterns

### Global State, Component State, and Forms

By now you might be wondering, "Do I always have to put all my app's state into the Redux store?"

The answer is **NO. Global state that is needed across the app should go in the Redux store. State that's only needed in one place should be kept in component state.**

A good example of this is the `<Header>` component we wrote earlier. We _could_ keep the current text input string in the Redux store, by dispatching an action in the input's `onChange` handler and keeping it in our reducer. But, that doesn't give us any benefit. The only place that text string is used is here, in the `<Header>` component.

So, it makes sense to keep that value in a `useState` hook here in the `<Header>` component.

Similarly, if we had a boolean flag called `isDropdownOpen`, no other components in the app would care about that - it should really stay local to this component.

:::tip

**In a React + Redux app, your global state should go in the Redux store, and your local state should stay in React components.**

If you're not sure where to put something, here are some common rules of thumb for determining what kind of data should be put into Redux:

- Do other parts of the application care about this data?
- Do you need to be able to create further derived data based on this original data?
- Is the same data being used to drive multiple components?
- Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
- Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
- Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?

:::

This is also a good example of how to think about forms in Redux in general. **Most form state probably shouldn't be kept in Redux.** Instead, keep the data in your form components as you're editing it, and then dispatch Redux actions to update the store when the user is done.

### Using Multiple Selectors in a Component

Right now only our `<TodoList>` component is reading data from the store. Let's see what it might look like for the `<Footer>` component to start reading some data as well.

The `<Footer>` needs to know three different pieces of information:

- How many completed todos there are
- The current "status" filter value
- The current list of selected "color" category filters

How can we read these values into the component?

**We can call `useSelector` multiple times within one component**. In fact, this is actually a good idea - **each call to `useSelector` should always return the smallest amount of state possible**.

We already saw how to write a selector that counts completed todos earlier. For the filters values, both the status filter value and the color filters values live in the `state.filters` slice. Since this component needs both of them, we can select the entire `state.filters` object.

As we mentioned earlier, we could put all the input handling directly into `<Footer>`, or we could split it out into separate components like `<StatusFilter>`. To keep this explanation shorter, we'll skip the exact details of writing the input handling and assume we've got smaller separate components that are given some data and change handler callbacks as props.

Given that assumption, the React-Redux parts of the component might look like this:

```jsx title="src/features/footer/Footer.js"
import React from 'react'
// highlight-next-line
import { useSelector } from 'react-redux'

import { availableColors, capitalize } from '../filters/colors'
import { StatusFilters } from '../filters/filtersSlice'

// Omit other footer components

const Footer = () => {
  // highlight-start
  const todosRemaining = useSelector(state => {
    const uncompletedTodos = state.todos.filter(todo => !todo.completed)
    return uncompletedTodos.length
  })

  const { status, colors } = useSelector(state => state.filters)
  // highlight-end

  // omit placeholder change handlers

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button">Mark All Completed</button>
        <button className="button">Clear Completed</button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  )
}

export default Footer
```

### Selecting Data in List Items by ID

Currently, our `<TodoList>` is reading the entire `state.todos` array and passing the actual todo objects as a prop to each `<TodoListItem>` component.

This works, but there's a potential performance problem.

- Changing one todo object means creating copies of both the todo and the `state.todos` array, and each copy is a new reference in memory
- When `useSelector` sees a new reference as its result, it forces its component to re-render
- So, any time _one_ todo object is updated (like clicking it to toggle its completed status), the whole `<TodoList>` parent component will re-render
- Then, [because React re-renders all child components recursively by default](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#standard-render-behavior), it also means that _all_ of the `<TodoListItem>` components will re-render, even though most of them didn't actually change at all!

Re-rendering components isn't bad - that's how React knows if it needs to update the DOM. But, re-rendering lots of components when nothing has actually changed can potentially get too slow if the list is too big.

There's a couple ways we could try to fix this. One option is to [wrap all the `<TodoListItem>` components in `React.memo()`](https://reactjs.org/docs/react-api.html#reactmemo), so that they only re-render when their props actually change. This is often a good choice for improving performance, but it does require that the child component always receives the same props until something really changes. Since each `<TodoListItem>` component is receiving a todo item as a prop, only one of them should actually get a changed prop and have to re-render.

Another option is to have the `<TodoList>` component only read an array of todo IDs from the store, and pass those IDs as props to the child `<TodoListItem>` components. Then, each `<TodoListItem>` can use that ID to find the right todo object it needs.

Let's give that a shot.

```jsx title="src/features/todos/TodoList.js"
import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

// highlight-next-line
const selectTodoIds = state => state.todos.map(todo => todo.id)

const TodoList = () => {
  // highlight-next-line
  const todoIds = useSelector(selectTodoIds)

  const renderedListItems = todoIds.map(todoId => {
    // highlight-next-line
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}
```

This time, we only select an array of todo IDs from the store in `<TodoList>`, and we pass each `todoId` as an `id` prop to the child `<TodoListItem>`s.

Then, in `<TodoListItem>`, we can use that ID value to read our todo item. We can also update `<TodoListItem>` to dispatch the "toggled" action based on the todo's ID.

```jsx title="src/features/todos/TodoListItem.js"
import React from 'react'
// highlight-next-line
import { useSelector, useDispatch } from 'react-redux'

import { availableColors, capitalize } from '../filters/colors'

// highlight-start
const selectTodoById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId)
}
// highlight-end

// Destructure `props.id`, since we only need the ID value
const TodoListItem = ({ id }) => {
  // Call our `selectTodoById` with the state _and_ the ID value
  // highlight-next-line
  const todo = useSelector(state => selectTodoById(state, id))
  const { text, completed, color } = todo

  // highlight-next-line
  const dispatch = useDispatch()

  // highlight-start
  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id })
  }
  // highlight-end

  // omit other change handlers
  // omit other list item rendering logic and contents

  return (
    <li>
      <div className="view">{/* omit other rendering output */}</div>
    </li>
  )
}

export default TodoListItem
```

There's a problem with this, though. We said earlier that **returning new array references in selectors causes components to re-render every time**, and right now we're returning a new IDs array in `<TodoList>`. In this case, the _contents_ of the IDs array should be the same if we're toggling a todo, because we're still showing the same todo items - we haven't added or deleted any. But, the array _containing_ those IDs is a new reference, so `<TodoList>` will re-render when it really doesn't need to.

One possible solution to this is to change how `useSelector` compares its values to see if they've changed. `useSelector` can take a comparison function as its second argument. A comparison function is called with the old and new values, and returns `true` if they're considered the same. If they're the same, `useSelector` won't make the component re-render.

React-Redux has a `shallowEqual` comparison function we can use to check if the items _inside_ the array are still the same. Let's try that:

```jsx title="src/features/todos/TodoList.js"
import React from 'react'
// highlight-next-line
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

// highlight-next-line
const selectTodoIds = state => state.todos.map(todo => todo.id)

const TodoList = () => {
  // highlight-next-line
  const todoIds = useSelector(selectTodoIds, shallowEqual)

  const renderedListItems = todoIds.map(todoId => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}
```

Now, if we toggle a todo item, the list of IDs will be considered the same, and `<TodoList>` won't have to re-render. The one `<TodoListItem>` will get an updated todo object and re-render, but all the rest of them will still have the existing todo object and not have to re-render at all.

As mentioned earlier, you can also use a specialized kind of selector function called [a "memoized selector"](part-7-standard-patterns.md) to help improve component rendering, and we'll look at how to use those in another section.

## What You've Learned

We now have a working todo app! Our app creates a store, passes the store to the React UI layer using `<Provider>`, and then calls `useSelector` and `useDispatch` to talk to the store in our React components.

:::info

Try implementing the rest of the missing UI features on your own! Here's a list of the things you'll need to add:

- In `<TodoListItem>` component, use the `useDispatch` hook to dispatch actions to for changing the color category and deleting the todo
- In `<Footer>`, use the `useDispatch` hook to dispatch actions for marking all todos as completed, clearing completed todos, and changing the filter values.

We'll cover implementing the filters in [Part 7: Standard Redux Patterns](./part-7-standard-patterns.md).

:::

Let's see how the app looks now, including the components and sections we skipped to keep this shorter:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-5-uiAllActions/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

:::tip Summary

- **Redux stores can be used with any UI layer**
  - UI code always subscribes to the store, gets the latest state, and redraws itself
- **React-Redux is the official Redux UI bindings library for React**
  - React-Redux is installed as a separate `react-redux` package
- **The `useSelector` hook lets React components read data from the store**
  - Selector functions take the entire store `state` as an argument, and return a value based on that state
  - `useSelector` calls its selector function and returns the result from the selector
  - `useSelector` subscribes to the store, and re-runs the selector each time an action is dispatched.
  - Whenever the selector result changes, `useSelector` forces the component to re-render with the new data
- **The `useDispatch` hook lets React components dispatch actions to the store**
  - `useDispatch` returns the actual `store.dispatch` function
  - You can call `dispatch(action)` as needed inside your components
- **The `<Provider>` component makes the store available to other React components**
  - Render `<Provider store={store}>` around your entire `<App>`

:::

## What's Next?

Now that our UI is working, it's time to see how to make our Redux app talk to a server. In [Part 6: Async Logic](./part-6-async-logic.md), we'll talk about how asynchronous logic like timeouts and AJAX calls fit into the Redux data flow.

---
id: part-6-async-logic
title: 'Redux Fundamentals, Part 6: Async Logic and Data Fetching'
sidebar_label: 'Async Logic and Data Fetching'
description: 'The official Redux Fundamentals tutorial: learn how to use async logic with Redux'
---

# Redux Fundamentals, Part 6: Async Logic and Data Fetching

:::tip What You'll Learn

- How the Redux data flow works with async data
- How to use Redux middleware for async logic
- Patterns for handling async request state

:::

:::info Prerequisites

- Familiarity with using AJAX requests to fetch and update data from a server
- Understanding asynchronous logic in JS, including Promises

:::

## Introduction

In [Part 5: UI and React](./part-5-ui-and-react.md), we saw how to use the React-Redux library to let our React components interact with a Redux store, including calling `useSelector` to read Redux state, calling `useDispatch` to give us access to the `dispatch` function, and wrapping our app in a `<Provider>` component to give those hooks access to the store.

So far, all the data we've worked with has been directly inside of our React+Redux client application. However, most real applications need to work with data from a server, by making HTTP API calls to fetch and save items.

In this section, we'll update our todo app to fetch the todos from an API, and add new todos by saving them to the API.

### Example REST API and Client

To keep the example project isolated but realistic, the initial project setup already included a fake in-memory REST API for our data (configured using [the Mirage.js mock API tool](https://miragejs.com/)). The API uses `/fakeApi` as the base URL for the endpoints, and supports the typical `GET/POST/PUT/DELETE` HTTP methods for `/fakeApi/todos`. It's defined in `src/api/server.js`.

The project also includes a small HTTP API client object that exposes `client.get()` and `client.post()` methods, similar to popular HTTP libraries like `axios`. It's defined in `src/api/client.js`.

We'll use the `client` object to make HTTP calls to our in-memory fake REST API for this section.

## Redux Middleware and Side Effects

By itself, a Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.

Earlier, we said that Redux reducers must never contain "side effects". **A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function**. Some common kinds of side effects are things like:

- Logging a value to the console
- Saving a file
- Setting an async timer
- Making an AJAX HTTP request
- Modifying some state that exists outside of a function, or mutating arguments to a function
- Generating random numbers or unique random IDs (such as `Math.random()` or `Date.now()`)

However, any real app will need to do these kinds of things _somewhere_. So, if we can't put side effects in reducers, where _can_ we put them?

**Redux middleware were designed to enable writing logic that has side effects**.

As we said [in Part 4](./part-4-store.md#middleware-use-cases), a Redux middleware can do _anything_ when it sees a dispatched action: log something, modify the action, delay the action, make an async call, and more. Also, since middleware form a pipeline around the real `store.dispatch` function, this also means that we could actually pass something that _isn't_ a plain action object to `dispatch`, as long as a middleware intercepts that value and doesn't let it reach the reducers.

Middleware also have access to `dispatch` and `getState`. That means you could write some async logic in a middleware, and still have the ability to interact with the Redux store by dispatching actions.

### Using Middleware to Enable Async Logic

Let's look at a couple examples of how middleware can enable us to write some kind of async logic that interacts with the Redux store.

One possibility is writing a middleware that looks for specific action types, and runs async logic when it sees those actions, like these examples:

```js
import { client } from '../api/client'

const delayedActionMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      // Delay this action by one second
      next(action)
    }, 1000)
    return
  }

  return next(action)
}

const fetchTodosMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/fetchTodos') {
    // Make an API call to fetch todos from the server
    client.get('todos').then(todos => {
      // Dispatch an action with the todos we received
      storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos })
    })
  }

  return next(action)
}
```

:::info

For more details on why and how Redux uses middleware for async logic, see these StackOverflow answers by Redux creator Dan Abramov:

- ["How to dispatch a Redux action with a timeout?"](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
- ["Why do we need middleware for async flow?"](https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34599594#34599594)

:::

### Writing an Async Function Middleware

Both of the middleware in that last section were very specific and only do one thing. It would be nice if we had a way to write _any_ async logic ahead of time, separate from the middleware itself, and still have access to `dispatch` and `getState` so that we can interact with the store.

**What if we wrote a middleware that let us pass a _function_ to `dispatch`, instead of an action object**? We could have our middleware check to see if the "action" is actually a function instead, and if it's a function, call the function right away. That would let us write async logic in separate functions, outside of the middleware definition.

Here's what that middleware might look like:

```js title="Example async function middleware"
const asyncFunctionMiddleware = storeAPI => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action)
}
```

And then we could use that middleware like this:

```js
const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware)
const store = createStore(rootReducer, middlewareEnhancer)

// Write a function that has `dispatch` and `getState` as arguments
const fetchSomeData = (dispatch, getState) => {
  // Make an async HTTP request
  client.get('todos').then(todos => {
    // Dispatch an action with the todos we received
    dispatch({ type: 'todos/todosLoaded', payload: todos })
    // Check the updated store state after dispatching
    const allTodos = getState().todos
    console.log('Number of todos after loading: ', allTodos.length)
  })
}

// Pass the _function_ we wrote to `dispatch`
store.dispatch(fetchSomeData)
// logs: 'Number of todos after loading: ###'
```

Again, notice that **this "async function middleware" let us pass a _function_ to `dispatch`!** Inside that function, we were able to write some async logic (an HTTP request), then dispatch a normal action object when the request completed.

## Redux Async Data Flow

So how do middleware and async logic affect the overall data flow of a Redux app?

Just like with a normal action, we first need to handle a user event in the application, such as a click on a button. Then, we call `dispatch()`, and pass in _something_, whether it be a plain action object, a function, or some other value that a middleware can look for.

Once that dispatched value reaches a middleware, it can make an async call, and then dispatch a real action object when the async call completes.

Earlier, we saw [a diagram that represents the normal synchronous Redux data flow](./part-2-concepts-data-flow.md#redux-application-data-flow). When we add async logic to a Redux app, we add an extra step where middleware can run logic like AJAX requests, then dispatch actions. That makes the async data flow look like this:

![Redux async data flow diagram](/img/tutorials/essentials/ReduxAsyncDataFlowDiagram.gif)

## Using the Redux Thunk Middleware

As it turns out, Redux already has an official version of that "async function middleware", called the [**Redux "Thunk" middleware**](https://github.com/reduxjs/redux-thunk). The thunk middleware allows us to write functions that get `dispatch` and `getState` as arguments. The thunk functions can have any async logic we want inside, and that logic can dispatch actions and read the store state as needed.

**Writing async logic as thunk functions allows us to reuse that logic without knowing what Redux store we're using ahead of time**.

:::info

The word "thunk" is a programming term that means ["a piece of code that does some delayed work"](https://en.wikipedia.org/wiki/Thunk). For more details on how to use thunks, see the thunk usage guide page:

- [Using Redux: Writing Logic with Thunks](../../usage/writing-logic-thunks.mdx)

as well as these posts:

- [What the heck is a thunk?](https://daveceddia.com/what-is-a-thunk/)
- [Thunks in Redux: the basics](https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60)

:::

### Configuring the Store

The Redux thunk middleware is available on NPM as a package called `redux-thunk`. We need to install that package to use it in our app:

```bash
npm install redux-thunk
```

Once it's installed, we can update the Redux store in our todo app to use that middleware:

```js title="src/store.js"
import { createStore, applyMiddleware } from 'redux'
// highlight-next-line
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

// highlight-next-line
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, composedEnhancer)
export default store
```

### Fetching Todos from a Server

Right now our todo entries can only exist in the client's browser. We need a way to load a list of todos from the server when the app starts up.

We'll start by writing a thunk function that makes an AJAX call to our `/fakeApi/todos` endpoint to request an array of todo objects, and then dispatch an action containing that array as the payload. Since this is related to the todos feature in general, we'll write the thunk function in the `todosSlice.js` file:

```js title="src/features/todos/todosSlice.js"
import { client } from '../../api/client'

const initialState = []

export default function todosReducer(state = initialState, action) {
  // omit reducer logic
}

// Thunk function
// highlight-start
export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos')
  dispatch({ type: 'todos/todosLoaded', payload: response.todos })
}
// highlight-end
```

We only want to make this API call once, when the application loads for the first time. There's a few places we _could_ put this:

- In the `<App>` component, in a `useEffect` hook
- In the `<TodoList>` component, in a `useEffect` hook
- In the `index.js` file directly, right after we import the store

For now, let's try putting this directly in `index.js`:

```js title="src/index.js"
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

import './api/server'

// highlight-start
import store from './store'
import { fetchTodos } from './features/todos/todosSlice'

store.dispatch(fetchTodos)
// highlight-end

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

If we reload the page, there's no visible change in the UI. However, if we open up the Redux DevTools extension, we should now see that a `'todos/todosLoaded'` action was dispatched, and it should contain some todo objects that were generated by our fake server API:

![Devtools - todosLoaded action contents](/img/tutorials/fundamentals/devtools-todosLoaded-action.png)

Notice that even though we've dispatched an action, nothing's happening to change the state. **We need to handle this action in our todos reducer to have the state updated.**

Let's add a case to the reducer to load this data into the store. Since we're fetching the data from the server, we want to completely replace any existing todos, so we can return the `action.payload` array to make it be the new todos `state` value:

```js title="src/features/todos/todosSlice.js"
import { client } from '../../api/client'

const initialState = []

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // omit other reducer cases
    // highlight-start
    case 'todos/todosLoaded': {
      // Replace the existing state entirely by returning the new value
      return action.payload
    }
    // highlight-end
    default:
      return state
  }
}

export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos')
  dispatch({ type: 'todos/todosLoaded', payload: response.todos })
}
```

Since dispatching an action immediately updates the store, we can also call `getState` in the thunk to read the updated state value after we dispatch. For example, we could log the number of total todos to the console before and after dispatching the `'todos/todosLoaded'` action:

```js
export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos')

  // highlight-next-line
  const stateBefore = getState()
  console.log('Todos before dispatch: ', stateBefore.todos.length)

  dispatch({ type: 'todos/todosLoaded', payload: response.todos })

  // highlight-next-line
  const stateAfter = getState()
  console.log('Todos after dispatch: ', stateAfter.todos.length)
}
```

### Saving Todo Items

We also need to update the server whenever we try to create a new todo item. Instead of dispatching the `'todos/todoAdded'` action right away, we should make an API call to the server with the initial data, wait for the server to send back a copy of the newly saved todo item, and _then_ dispatch an action with that todo item.

However, if we start trying to write this logic as a thunk function, we're going to run into a problem: since we're writing the thunk as a separate function in the `todosSlice.js` file, the code that makes the API call doesn't know what the new todo text is supposed to be:

```js title="src/features/todos/todosSlice.js"
async function saveNewTodo(dispatch, getState) {
  // ❌ We need to have the text of the new todo, but where is it coming from?
  // highlight-next-line
  const initialTodo = { text }
  const response = await client.post('/fakeApi/todos', { todo: initialTodo })
  dispatch({ type: 'todos/todoAdded', payload: response.todo })
}
```

We need a way to write one function that accepts `text` as its parameter, but then creates the actual thunk function so that it can use the `text` value to make the API call. Our outer function should then return the thunk function so that we can pass to `dispatch` in our component.

```js title="src/features/todos/todosSlice.js"
// Write a synchronous outer function that receives the `text` parameter:
export function saveNewTodo(text) {
  // And then creates and returns the async thunk function:
  return async function saveNewTodoThunk(dispatch, getState) {
    // ✅ Now we can use the text value and send it to the server
    const initialTodo = { text }
    const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    dispatch({ type: 'todos/todoAdded', payload: response.todo })
  }
}
```

Now we can use this in our `<Header>` component:

```js title="src/features/header/Header.js"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// highlight-next-line
import { saveNewTodo } from '../todos/todosSlice'

const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    // If the user pressed the Enter key:
    const trimmedText = text.trim()
    if (e.which === 13 && trimmedText) {
      // highlight-start
      // Create the thunk function with the text the user wrote
      const saveNewTodoThunk = saveNewTodo(trimmedText)
      // Then dispatch the thunk function itself
      dispatch(saveNewTodoThunk)
      // highlight-end
      setText('')
    }
  }

  // omit rendering output
}
```

Since we know we're going to immediately pass the thunk function to `dispatch` in the
component, we can skip creating the temporary variable. Instead, we can call `saveNewTodo(text)`, and pass the resulting thunk function straight to `dispatch`:

```js title="src/features/header/Header.js"
const handleKeyDown = e => {
  // If the user pressed the Enter key:
  const trimmedText = text.trim()
  if (e.which === 13 && trimmedText) {
    // highlight-start
    // Create the thunk function and immediately dispatch it
    dispatch(saveNewTodo(trimmedText))
    // highlight-end
    setText('')
  }
}
```

Now the component doesn't actually know that it's even dispatching a thunk function - the `saveNewTodo` function is encapsulating what's actually happening. The `<Header>` component only knows that it needs to dispatch _some value_ when the user presses enter.

This pattern of writing a function to prepare something that will get passed to `dispatch` is called **the "action creator" pattern**, and we'll talk about that more in [the next section](./part-7-standard-patterns.md).

We can now see the updated `'todos/todoAdded'` action being dispatched:

![Devtools - async todoAdded action contents](/img/tutorials/fundamentals/devtools-async-todoAdded-action.png)

The last thing we need to change here is updating our todos reducer. When we make a POST request to `/fakeApi/todos`, the server will return a completely new todo object (including a new ID value). That means our reducer doesn't have to calculate a new ID, or fill out the other fields - it only needs to create a new `state` array that includes the new todo item:

```js title="src/features/todos/todosSlice.js"
const initialState = []

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // highlight-start
    case 'todos/todoAdded': {
      // Return a new todos state array with the new todo item at the end
      return [...state, action.payload]
    }
    // highlight-end
    // omit other cases
    default:
      return state
  }
}
```

And now adding a new todo will work correctly:

![Devtools - async todoAdded state diff](/img/tutorials/fundamentals/devtools-async-todoAdded-diff.png)

:::tip

Thunk functions can be used for both asynchronous _and_ synchronous logic. Thunks provide a way to write any reusable logic that needs access to `dispatch` and `getState`.

:::

## What You've Learned

We've now succesfully updated our todo app so that we can fetch a list of todo items and save new todo items, using "thunk" functions to make the AJAX calls to our fake server API.

In the process, we saw how Redux middleware are used to let us make async calls and interact with the store by dispatching actions with after the async calls have completed.

Here's what the current app looks like:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-6-asyncThunks/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

:::tip Summary

- **Redux middleware were designed to enable writing logic that has side effects**
  - "Side effects" are code that changes state/behavior outside a function, like AJAX calls, modifying function arguments, or generating random values
- **Middleware add an extra step to the standard Redux data flow**
  - Middleware can intercept other values passed to `dispatch`
  - Middleware have access to `dispatch` and `getState`, so they can dispatch more actions as part of async logic
- **The Redux "Thunk" middleware lets us pass functions to `dispatch`**
  - "Thunk" functions let us write async logic ahead of time, without knowing what Redux store is being used
  - A Redux thunk function receives `dispatch` and `getState` as arguments, and can dispatch actions like "this data was received from an API response"

:::

## What's Next?

We've now covered all the core pieces of how to use Redux! You've seen how to:

- Write reducers that update state based on dispatched actions,
- Create and configure a Redux store with a reducer, enhancers, and middleware
- Use middleware to write async logic that dispatches actions

In [Part 7: Standard Redux Patterns](./part-7-standard-patterns.md), we'll look at several code patterns that are typically used by real-world Redux apps to make our code more consistent and scale better as the application grows.

---
id: part-7-standard-patterns
title: 'Redux Fundamentals, Part 7: Standard Redux Patterns'
sidebar_label: 'Standard Redux Patterns'
description: 'The official Fundamentals tutorial for Redux: learn the standard patterns used in real-world Redux apps'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 7: Standard Redux Patterns

:::tip What You'll Learn

- Standard patterns used in real-world Redux apps, and why those patterns exist:
  - Action creators for encapsulating action objects
  - Memoized selectors for improving performance
  - Tracking request status via loading enums
  - Normalizing state for managing collections of items
  - Working with promises and thunks

:::

:::info Prerequisites

- Understanding the topics in all previous sections

:::

In [Part 6: Async Logic and Data Fetching](./part-6-async-logic.md), we saw how to use Redux middleware to write async logic that can talk to the store. In particular, we used the Redux "thunk" middleware to write functions that can contain reusable async logic, without knowing what Redux store they'll be talking to ahead of time.

So far, we've covered the basics of how Redux actually works. However, real world Redux applications use some additional patterns on top of those basics.

It's important to note that **none of these patterns are _required_ to use Redux!** But, there are very good reasons why each of these patterns exists, and you'll see some or all of them in almost every Redux codebase.

In this section, we'll rework our existing todo app code to use some of these patterns, and talk about why they're commonly used in Redux apps. Then, in [**Part 8**](./part-8-modern-redux.md), we'll talk about "modern Redux", including **how to use our official [Redux Toolkit](https://redux-toolkit.js.org) package to simplify all the Redux logic we've written "by hand"** in our app, and why **we recommend using Redux Toolkit as the standard approach for writing Redux apps**.

## Action Creators

In our app, we've been writing action objects directly in the code, where they're being dispatched:

```js
dispatch({ type: 'todos/todoAdded', payload: trimmedText })
```

However, in practice, well-written Redux apps don't actually write those action objects inline when we dispatch them. Instead, we use "action creator" functions.

An **action creator** is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

```js
const todoAdded = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

We then use them by **calling the action creator**, and then **passing the resulting action object directly to `dispatch`**:

```js
store.dispatch(todoAdded('Buy milk'))

console.log(store.getState().todos)
// [ {id: 0, text: 'Buy milk', completed: false}]
```

<DetailedExplanation title="Detailed Explanation: Why use Action Creators?">

In our small example todo app, writing action objects by hand every time isn't too difficult. In fact, by switching to using action creators, we've added _more_ work - now we have to write a function _and_ the action object.

But, what if we needed to dispatch the same action from many parts of the application? Or what if there's some additional logic that we have to do every time we dispatch an action, like creating a unique ID? We'd end up having to copy-paste the additional setup logic every time we need to dispatch that action.

Action creators have two primary purposes:

- They prepare and format the contents of action objects
- They encapsulate any additional work needed whenever we create those actions

That way, we have a consistent approach for creating actions, whether or not there's any extra work that needs to be done. The same goes for thunks as well.

</DetailedExplanation>

### Using Action Creators

Let's update our todos slice file to use action creators for a couple of our action types.

We'll start with the two main actions we've been using so far: loading the list of todos from the server, and adding a new todo after saving it to the server.

Right now, `todosSlice.js` is dispatching an action object directly, like this:

```js
dispatch({ type: 'todos/todosLoaded', payload: response.todos })
```

We'll create a function that creates and returns that same kind of action object, but accepts the array of todos as its argument and puts it into the action as `action.payload`. Then, we can dispatch the action using that new action creator inside of our `fetchTodos` thunk:

```js title="src/features/todos/todosSlice.js"
// highlight-start
export const todosLoaded = todos => {
  return {
    type: 'todos/todosLoaded',
    payload: todos
  }
}
// highlight-end

export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos')
  // highlight-next-line
  dispatch(todosLoaded(response.todos))
}
```

We can also do the same thing for the "todo added" action:

```js title="src/features/todos/todosSlice.js"
// highlight-start
export const todoAdded = todo => {
  return {
    type: 'todos/todoAdded',
    payload: todo
  }
}
// highlight-end

export function saveNewTodo(text) {
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text }
    const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    // highlight-next-line
    dispatch(todoAdded(response.todo))
  }
}
```

While we're at it, let's do the same thing for the "color filter changed" action:

```js title="src/features/filters/filtersSlice.js"
// highlight-start
export const colorFilterChanged = (color, changeType) => {
  return {
    type: 'filters/colorFilterChanged',
    payload: { color, changeType }
  }
}
// highlight-end
```

And since this action was being dispatched from the `<Footer>` component, we'll need to import the `colorFilterChanged` action creator over there and use it:

```js title="src/features/footer/Footer.js"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { availableColors, capitalize } from '../filters/colors'
// highlight-next-line
import { StatusFilters, colorFilterChanged } from '../filters/filtersSlice'

// omit child components

const Footer = () => {
  const dispatch = useDispatch()

  const todosRemaining = useSelector(state => {
    const uncompletedTodos = state.todos.filter(todo => !todo.completed)
    return uncompletedTodos.length
  })

  const { status, colors } = useSelector(state => state.filters)

  const onMarkCompletedClicked = () => dispatch({ type: 'todos/allCompleted' })
  const onClearCompletedClicked = () =>
    dispatch({ type: 'todos/completedCleared' })

  // highlight-start
  const onColorChange = (color, changeType) =>
    dispatch(colorFilterChanged(color, changeType))
  // highlight-end

  const onStatusChange = status =>
    dispatch({ type: 'filters/statusFilterChanged', payload: status })

  // omit rendering output
}

export default Footer
```

Notice that the `colorFilterChanged` action creator actually accepts two different arguments, and then combines them together to form the right `action.payload` field.

This doesn't change anything about how the application works, or how the Redux data flow behaves - we're still creating action objects, and dispatching them. But, instead of writing action objects directly in our code all the time, we're now using action creators to prepare those action objects before they're dispatched.

We can also use action creators with thunk functions, and in fact [we wrapped a thunk in an action creator in the previous section](./part-6-async-logic.md#saving-todo-items) . We specifically wrapped `saveNewTodo` in a "thunk action creator" function so that we could pass in a `text` parameter. While `fetchTodos` doesn't take any parameters, we could still wrap it in an action creator as well:

```js title="src/features/todos/todosSlice.js"
// highlight-next-line
export function fetchTodos() {
  return async function fetchTodosThunk(dispatch, getState) {
    const response = await client.get('/fakeApi/todos')
    dispatch(todosLoaded(response.todos))
  }
}
```

And that means we have to change the place it's dispatched in `index.js` to call the outer thunk action creator function, and pass the returned inner thunk function to `dispatch`:

```js title="src/index.js"
import store from './store'
import { fetchTodos } from './features/todos/todosSlice'

// highlight-next-line
store.dispatch(fetchTodos())
```

We've written thunks using the `function` keyword so far to make it clear what they're doing. However, we can also write them using arrow function syntax instead. Using implicit returns can shorten the code, although it may make it a bit harder to read as well if you're not familiar with arrow functions:

```js title="src/features/todos/todosSlice.js"
// Same thing as the above example!
// highlight-next-line
export const fetchTodos = () => async dispatch => {
  const response = await client.get('/fakeApi/todos')
  dispatch(todosLoaded(response.todos))
}
```

Similarly, we _could_ shorten the plain action creators if we wanted to:

```js title="src/features/todos/todosSlice.js"
// highlight-next-line
export const todoAdded = todo => ({ type: 'todos/todoAdded', payload: todo })
```

It's up to you to decide whether using arrow functions this way is better or not.

:::info

For more details on why action creators are useful, see:

- [Idiomatic Redux: Why Use Action Creators?](https://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/)

:::

## Memoized Selectors

We've already seen that we can write "selector" functions, which accept the Redux `state` object as an argument, and return a value:

```js
const selectTodos = state => state.todos
```

What if we need to _derive_ some data? For example, maybe we want to have an array of only the todo IDs:

```js
const selectTodoIds = state => state.todos.map(todo => todo.id)
```

However, `array.map()` always returns a new array reference. We know that the React-Redux `useSelector` hook will re-run its selector function after _every_ dispatched action, and if the selector result changes, it will force the component to re-render.

In this example, **calling `useSelector(selectTodoIds)` will _always_ cause the component to re-render after _every_ action, because it's returning a new array reference!**

In Part 5, we saw that [we can pass `shallowEqual` as an argument to `useSelector`](./part-5-ui-and-react.md#selecting-data-in-list-items-by-id). There's another option here, though: we could use "memoized" selectors.

**Memoization** is a kind of caching - specifically, saving the results of an expensive calculation, and reusing those results if we see the same inputs later.

**Memoized selector functions** are selectors that save the most recent result value, and if you call them multiple times with the same inputs, will return the same result value. If you call them with _different_ inputs than last time, they will recalculate a new result value, cache it, and return the new result.

### Memoizing Selectors with `createSelector`

The **[Reselect library](https://github.com/reduxjs/reselect) provides a `createSelector` API that will generate memoized selector functions**. `createSelector` accepts one or more "input selector" functions as arguments, plus an "output selector", and returns the new selector function. Every time you call the selector:

- All "input selectors" are called with all of the arguments
- If any of the input selector return values have changed, the "output selector" will re-run
- All of the input selector results become arguments to the output selector
- The final result of the output selector is cached for next time

Let's create a memoized version of `selectTodoIds` and use that with our `<TodoList>`.

First, we need to install Reselect:

```bash
npm install reselect
```

Then, we can import and call `createSelector`. Our original `selectTodoIds` function was defined over in `TodoList.js`, but it's more common for selector functions to be written in the relevant slice file. So, let's add this to the todos slice:

```js title="src/features/todos/todosSlice.js"
// highlight-next-line
import { createSelector } from 'reselect'

// omit reducer

// omit action creators

// highlight-start
export const selectTodoIds = createSelector(
  // First, pass one or more "input selector" functions:
  state => state.todos,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  todos => todos.map(todo => todo.id)
)
// highlight-end
```

Then, let's use it in `<TodoList>`:

```js title="src/features/todos/TodoList.js"
import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

// highlight-next-line
import { selectTodoIds } from './todosSlice'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  // highlight-next-line
  const todoIds = useSelector(selectTodoIds)

  const renderedListItems = todoIds.map(todoId => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}
```

This actually behaves a bit differently than the `shallowEqual` comparison function does. Any time the `state.todos` array changes, we're going to create a new todo IDs array as a result. That includes any immutable updates to todo items like toggling their `completed` field, since we have to create a new array for the immutable update.

:::tip

Memoized selectors are only helpful when you actually derive additional values from the original data. If you are only looking up and returning an existing value, you can keep the selector as a plain function.

:::

### Selectors with Multiple Arguments

Our todo app is supposed to have the ability to filter the visible todos based on their completed status. Let's write a memoized selector that returns that filtered list of todos.

We know we need the entire `todos` array as one argument to our output selector. We also need to pass in the current completion status filter value as well. We'll add a separate "input selector" to extract each value, and pass the results to the "output selector".

```js title="src/features/todos/todosSlice.js"
import { createSelector } from 'reselect'
import { StatusFilters } from '../filters/filtersSlice'

// omit other code

// highlight-start
export const selectFilteredTodos = createSelector(
  // First input selector: all todos
  state => state.todos,
  // Second input selector: current status filter
  state => state.filters.status,
  // Output selector: receives both values
  (todos, status) => {
    if (status === StatusFilters.All) {
      return todos
    }

    const completedStatus = status === StatusFilters.Completed
    // Return either active or completed todos based on filter
    return todos.filter(todo => todo.completed === completedStatus)
  }
)
// highlight-end
```

:::caution

Note that we've now added an import dependency between two slices - the `todosSlice` is importing a value from the `filtersSlice`. This is legal, but be careful. **If two slices _both_ try to import something from each other, you can end up with a "cyclic import dependency" problem that can cause your code to crash**. If that happens, try moving some common code to its own file and import from that file instead.

:::

Now we can use this new "filtered todos" selector as an input to another selector that returns the IDs of those todos:

```js title="src/features/todos/todosSlice.js"
export const selectFilteredTodoIds = createSelector(
  // Pass our other memoized selector as an input
  selectFilteredTodos,
  // And derive data in the output selector
  filteredTodos => filteredTodos.map(todo => todo.id)
)
```

If we switch `<TodoList>` to use `selectFilteredTodoIds`, we should then be able to mark a couple todo items as completed:

![Todo app - todos marked completed](/img/tutorials/fundamentals/todos-app-markedCompleted.png)

and then filter the list to _only_ show completed todos:

![Todo app - todos marked completed](/img/tutorials/fundamentals/todos-app-showCompleted.png)

We can then expand our `selectFilteredTodos` to also include color filtering in the selection as well:

```js title="src/features/todos/todosSlice.js"
export const selectFilteredTodos = createSelector(
  // First input selector: all todos
  selectTodos,
  // Second input selector: all filter values
  // highlight-next-line
  state => state.filters,
  // Output selector: receives both values
  (todos, filters) => {
    // highlight-start
    const { status, colors } = filters
    const showAllCompletions = status === StatusFilters.All
    if (showAllCompletions && colors.length === 0) {
      // highlight-end
      return todos
    }

    // highlight-next-line
    const completedStatus = status === StatusFilters.Completed
    // Return either active or completed todos based on filter
    return todos.filter(todo => {
      // highlight-start
      const statusMatches =
        showAllCompletions || todo.completed === completedStatus
      const colorMatches = colors.length === 0 || colors.includes(todo.color)
      return statusMatches && colorMatches
      // highlight-end
    })
  }
)
```

Notice that by encapsulating the logic in this selector, our component never needed to change, even as we changed the filtering behavior. Now we can filter by both status and color at once:

![Todo app - status and color filters](/img/tutorials/fundamentals/todos-app-selectorFilters.png)

Finally, we've got several places where our code is looking up `state.todos`. We're going to be making some changes to how that state is designed as we go through the rest of this section, so we'll extract a single `selectTodos` selector and use that everywhere. We can also move `selectTodoById` over into the `todosSlice`:

```js title="src/features/todos/todosSlice.js"
export const selectTodos = state => state.todos

export const selectTodoById = (state, todoId) => {
  return selectTodos(state).find(todo => todo.id === todoId)
}
```

:::info

For more details on why we use selector functions and how to write memoized selectors with Reselect, see:

- [Using Redux: Deriving Data with Selectors](../../usage/deriving-data-selectors.md)

:::

## Async Request Status

We're using an async thunk to fetch the initial list of todos from the server. Since we're using a fake server API, that response comes back immediately. In a real app, the API call might take a while to resolve. In that case, it's common to show some kind of a loading spinner while we wait for the response to complete.

This is usually handled in Redux apps by:

- Having some kind of "loading state" value to indicate the current status of a request
- Dispatching a "request started" action _before_ making the API call, which is handled by changing the loading state value
- Updating the loading state value again when the request completes to indicate that the call is done

The UI layer then shows a loading spinner while the request is in progress, and switches to showing the actual data when the request is complete.

We're going to update our todos slice to track a loading state value, and dispatch an additional `'todos/todosLoading'` action as part of the `fetchTodos` thunk.

Right now, the `state` of our todos reducer is only the array of todos itself. If we want to track the loading state inside the todos slice, we'll need to reorganize the todos state to be an object that has the todos array _and_ the loading state value. That also means rewriting the reducer logic to handle the additional nesting:

```js title="src/features/todos/todosSlice.js"
// highlight-start
const initialState = {
  status: 'idle',
  entities: []
}
// highlight-end

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      // highlight-start
      return {
        ...state,
        entities: [...state.entities, action.payload]
      }
      // highlight-end
    }
    case 'todos/todoToggled': {
      // highlight-start
      return {
        ...state,
        entities: state.entities.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          }

          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
      // highlight-end
    }
    // omit other cases
    default:
      return state
  }
}

// omit action creators

// highlight-next-line
export const selectTodos = state => state.todos.entities
```

There's a few important things to note here:

- The todos array is now nested as `state.entities` in the `todosReducer` state object. The word "entities" is a term that means "unique items with an ID", which does describe our todo objects.
- That also means the array is nested in the _entire_ Redux state object as `state.todos.entities`
- We now have to do extra steps in the reducer to copy the additional level of nesting for correct immutable updates, such as `state` object -> `entities` array -> `todo` object
- Because the rest of our code is _only_ accessing the todos state via selectors, **we only need to update the `selectTodos` selector** - the rest of the UI will continue to work as expected even though we reshaped our state considerably.

### Loading State Enum Values

You'll also notice that we've defined the loading state field as a string enum:

```js
{
  status: 'idle' // or: 'loading', 'succeeded', 'failed'
}
```

instead of an `isLoading` boolean.

A boolean limits us to two possibilities: "loading" or "not loading". In reality, **it's possible for a request to actually be in _many_ different states**, such as:

- Hasn't started at all
- In progress
- Succeeded
- Failed
- Succeeded, but now back in a situation where we might want to refetch

It's also possible that the app logic should only transition between specific states based on certain actions, and this is harder to implement using booleans.

Because of this, we recommend **storing loading state as a string enum value instead of boolean flags**.

:::info

For a detailed explanation of why loading states should be enums, see:

- [Redux Style Guide: treat reducers as state machines](../../style-guide/style-guide.md#treat-reducers-as-state-machines)

:::

Based on that, we'll add a new "loading" action that will set our status to `'loading'`, and update the "loaded" action to reset the state flag to `'idle'`:

```js title="src/features/todos/todosSlice.js"
const initialState = {
  status: 'idle',
  entities: []
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // omit other cases
    // highlight-start
    case 'todos/todosLoading': {
      return {
        ...state,
        status: 'loading'
      }
    }
    // highlight-end
    case 'todos/todosLoaded': {
      return {
        ...state,
        // highlight-next-line
        status: 'idle',
        entities: action.payload
      }
    }
    default:
      return state
  }
}

// omit action creators

// Thunk function
export const fetchTodos = () => async dispatch => {
  // highlight-next-line
  dispatch(todosLoading())
  const response = await client.get('/fakeApi/todos')
  dispatch(todosLoaded(response.todos))
}
```

However, before we try to show this in the UI, we need to modify the fake server API to add an artificial delay to our API calls. Open up `src/api/server.js`, and look for this commented-out line around line 63:

```js title="src/api/server.js"
new Server({
  routes() {
    this.namespace = 'fakeApi'
    // highlight-next-line
    // this.timing = 2000

    // omit other code
  }
})
```

If you uncomment that line, the fake server will add a 2-second delay to every API call our app makes, which gives us enough time to actually see a loading spinner being displayed.

Now, we can read the loading state value in our `<TodoList>` component, and show a loading spinner instead based on that value.

```js title="src/features/todos/TodoList.js"
// omit imports

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds)
  // highlight-start
  const loadingStatus = useSelector(state => state.todos.status)

  if (loadingStatus === 'loading') {
    return (
      <div className="todo-list">
        <div className="loader" />
      </div>
    )
  }
  // highlight-end

  const renderedListItems = todoIds.map(todoId => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}
```

In a real app, we'd also want to handle API failure errors and other potential cases.

Here's what the app looks like with that loading status enabled (to see the spinner again, reload the app preview or open it in a new tab):

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-7-asyncLoading/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## Flux Standard Actions

The Redux store itself does not actually care what fields you put into your action object. It only cares that `action.type` exists and has a value, and normal Redux actions always use a string for `action.type`. That means that you _could_ put any other fields into the action that you want. Maybe we could have `action.todo` for a "todo added" action, or `action.color`, and so on.

However, if every action uses different field names for its data fields, it can be hard to know ahead of time what fields you need to handle in each reducer.

That's why the Redux community came up with [the "Flux Standard Actions" convention](https://github.com/redux-utilities/flux-standard-action#motivation), or "FSA". This is a suggested approach for how to organize fields inside of action objects, so that developers always know what fields contain what kind of data. The FSA pattern is widely used in the Redux community, and in fact you've already been using it throughout this whole tutorial.

The FSA convention says that:

- If your action object has any actual data, that "data" value of your action should always go in `action.payload`
- An action may also have an `action.meta` field with extra descriptive data
- An action may have an `action.error` field with error information

So, _all_ Redux actions MUST:

- be a plain JavaScript object
- have a `type` field

And if you write your actions using the FSA pattern, an action MAY

- have a `payload` field
- have an `error` field
- have a `meta` field

<DetailedExplanation title="Detailed Explanation: FSAs and Errors">

The FSA specification says that:

> The optional `error` property MAY be set to `true` if the action represents an error.
> An action whose `error` is true is analogous to a rejected Promise. By convention, the `payload` SHOULD be an error object.
> If `error` has any other value besides `true`, including `undefined` and `null`, the action MUST NOT be interpreted as an error.

The FSA specs also argue against having specific action types for things like "loading succeeded" and "loading failed".

However, in practice, the Redux community has ignored the idea of using `action.error` as a boolean flag, and instead settled on separate action types, like `'todos/todosLoadingSucceeded'` and `'todos/todosLoadingFailed'`. This is because it's much easier to check for those action types than it is to first handle `'todos/todosLoaded'` and _then_ check `if (action.error)`.

You can do whichever approach works better for you, but most apps use separate action types for success and failure.

</DetailedExplanation>

## Normalized State

So far, we've kept our todos in an array. This is reasonable, because we received the data from the server as an array, and we also need to loop over the todos to show them as a list in the UI.

However, in larger Redux apps, it is common to store data in a **normalized state structure**. "Normalization" means:

- Making sure there is only one copy of each piece of data
- Storing items in a way that allows directly finding items by ID
- Referring to other items based on IDs, instead of copying the entire item

For example, in a blogging application, you might have `Post` objects that point to `User` and `Comment` objects. There might be many posts by the same person, so if every `Post` object includes an entire `User`, we would have many copies of the same `User` object. Instead, a `Post` object would have a user ID value as `post.user`, and then we could look up `User` objects by ID as `state.users[post.user]`.

This means we typically organize our data as objects instead of arrays, where the item IDs are the keys and the items themselves are the values, like this:

```js
const rootState = {
  todos: {
    status: 'idle',
    // highlight-start
    entities: {
      2: { id: 2, text: 'Buy milk', completed: false },
      7: { id: 7, text: 'Clean room', completed: true }
    }
    // highlight-end
  }
}
```

Let's convert our todos slice to store the todos in a normalized form. This will require some significant changes to our reducer logic, as well as updating the selectors:

```js title="src/features/todos/todosSlice"
const initialState = {
  status: 'idle',
  // highlight-next-line
  entities: {}
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      const todo = action.payload
      // highlight-start
      return {
        ...state,
        entities: {
          ...state.entities,
          [todo.id]: todo
        }
      }
      // highlight-end
    }
    case 'todos/todoToggled': {
      // highlight-start
      const todoId = action.payload
      const todo = state.entities[todoId]
      return {
        ...state,
        entities: {
          ...state.entities,
          [todoId]: {
            ...todo,
            completed: !todo.completed
          }
        }
      }
      // highlight-end
    }
    case 'todos/colorSelected': {
      // highlight-start
      const { color, todoId } = action.payload
      const todo = state.entities[todoId]
      return {
        ...state,
        entities: {
          ...state.entities,
          [todoId]: {
            ...todo,
            color
          }
        }
      }
      // highlight-end
    }
    case 'todos/todoDeleted': {
      // highlight-start
      const newEntities = { ...state.entities }
      delete newEntities[action.payload]
      return {
        ...state,
        entities: newEntities
      }
      // highlight-end
    }
    case 'todos/allCompleted': {
      // highlight-start
      const newEntities = { ...state.entities }
      Object.values(newEntities).forEach(todo => {
        newEntities[todo.id] = {
          ...todo,
          completed: true
        }
      })
      return {
        ...state,
        entities: newEntities
      }
      // highlight-end
    }
    case 'todos/completedCleared': {
      // highlight-start
      const newEntities = { ...state.entities }
      Object.values(newEntities).forEach(todo => {
        if (todo.completed) {
          delete newEntities[todo.id]
        }
      })
      return {
        ...state,
        entities: newEntities
      }
      // highlight-end
    }
    case 'todos/todosLoading': {
      return {
        ...state,
        status: 'loading'
      }
    }
    case 'todos/todosLoaded': {
      // highlight-start
      const newEntities = {}
      action.payload.forEach(todo => {
        newEntities[todo.id] = todo
      })
      return {
        ...state,
        status: 'idle',
        entities: newEntities
      }
      // highlight-end
    }
    default:
      return state
  }
}

// omit action creators

// highlight-start
const selectTodoEntities = state => state.todos.entities

export const selectTodos = createSelector(selectTodoEntities, entities =>
  Object.values(entities)
)

export const selectTodoById = (state, todoId) => {
  return selectTodoEntities(state)[todoId]
}
// highlight-end
```

Because our `state.entities` field is now an object instead of an array, we have to use nested object spread operators to update the data instead of array operations. Also, we can't loop over objects the way we loop over arrays, so there's several places where we have to use `Object.values(entities)` to get an array of the todo items so that we can loop over them.

The good news is that because we're using selectors to encapsulate the state lookups, our UI still doesn't have to change. The bad news is that the reducer code is actually longer and more complicated.

Part of the issue here is that **this todo app example is not a large real-world application**. So, normalizing state is not as useful in this particular app, and it's harder to see the potential benefits.

Fortunately, in [Part 8: Modern Redux with Redux Toolkit](part-8-modern-redux.md) we'll see some ways to drastically shorten the reducer logic for managing our normalized state.

For now, the important things to understand are:

- Normalization _is_ commonly used in Redux apps
- The primary benefits are being able to look up individual items by ID and ensure that only one copy of an item exists in the state

:::info

For more details on why normalization is useful with Redux, see:

- [Structuring Reducers: Normalizing State Shape](../../usage/structuring-reducers/NormalizingStateShape.md)

:::

## Thunks and Promises

We have one last pattern to look at for this section. We've already seen how to handle loading state in the Redux store based on dispatched actions. What if we need to look at the results of a thunk in our components?

Whenever you call `store.dispatch(action)`, `dispatch` will actually return the `action` as its result. Middleware can then modify that behavior and return some other value instead.

We've already seen that the Redux Thunk middleware lets us pass a function to `dispatch`, calls the function, and then returns the result:

```js title="reduxThunkMiddleware.js"
const reduxThunkMiddleware = storeAPI => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    // Also, return whatever the thunk function returns
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action)
}
```

This means that **we can write thunk functions that return a promise, and wait on that promise in our components**.

We already have our `<Header>` component dispatching a thunk to save new todo entries to the server. Let's add some loading state inside the `<Header>` component, then disable the text input and show another loading spinner while we're waiting for the server:

```js title="src/features/header/Header.js"
const Header = () => {
  const [text, setText] = useState('')
  // highlight-next-line
  const [status, setStatus] = useState('idle')
  const dispatch = useDispatch()

  const handleChange = e => setText(e.target.value)

  // highlight-start
  const handleKeyDown = async e => {
    // If the user pressed the Enter key:
    const trimmedText = text.trim()
    if (e.which === 13 && trimmedText) {
      // Create and dispatch the thunk function itself
      setStatus('loading')
      // Wait for the promise returned by saveNewTodo
      await dispatch(saveNewTodo(trimmedText))
      // And clear out the text input
      setText('')
      setStatus('idle')
    }
  }

  let isLoading = status === 'loading'
  let placeholder = isLoading ? '' : 'What needs to be done?'
  let loader = isLoading ? <div className="loader" /> : null
  // highlight-end

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder={placeholder}
        autoFocus={true}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        // highlight-next-line
        disabled={isLoading}
      />
      // highlight-next-line
      {loader}
    </header>
  )
}

export default Header
```

Now, if we add a todo, we'll see a spinner in the header:

![Todo app - component loading spinner](/img/tutorials/fundamentals/todos-app-headerLoading.png)

## What You've Learned

As you've seen, there's several additional patterns that are widely used in Redux apps. These patterns are not required, and may involve writing more code initially, but they provide benefits like making logic reusable, encapsulating implementation details, improving app performance, and making it easier to look up data.

:::info

For more details on why these patterns exist and how Redux is meant to be used, see:

- [Idiomatic Redux: The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)
- [Idiomatic Redux: The Tao of Redux, Part 2 - Practice and Philosophy](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/)

:::

Here's how our app looks after it's been fully converted to use these patterns:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-8-normalizedState/?fontsize=14&hidenavigation=1&theme=dark&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

:::tip Summary

- **Action creator functions encapsulate preparing action objects and thunks**
  - Action creators can accept arguments and contain setup logic, and return the final action object or thunk function
- **Memoized selectors help improve Redux app performance**
  - Reselect has a `createSelector` API that generates memoized selectors
  - Memoized selectors return the same result reference if given the same inputs
- **Request status should be stored as an enum, not booleans**
  - Using enums like `'idle'` and `'loading'` helps track status consistently
- **"Flux Standard Actions" are the common convention for organizing action objects**
  - Actions use `payload` for data, `meta` for extra descriptions, and `error` for errors
- **Normalized state makes it easier to find items by ID**
  - Normalized data is stored in objects instead of arrays, with item IDs as keys
- **Thunks can return promises from `dispatch`**
  - Components can wait for async thunks to complete, then do more work

:::

## What's Next?

Writing all this code "by hand" can be time-consuming and difficult. **That's why we recommend that you use our official [Redux Toolkit](https://redux-toolkit.js.org) package to write your Redux logic instead**.

Redux Toolkit includes APIs that **help you write all the typical Redux usage patterns, but with less code**. It also helps **prevent common mistakes** like accidentally mutating state.

In [Part 8: Modern Redux](./part-8-modern-redux.md), we'll cover how to use Redux Toolkit to simplify all the code we've written so far.

---
id: part-8-modern-redux
title: 'Redux Fundamentals, Part 8: Modern Redux with Redux Toolkit'
sidebar_label: 'Modern Redux with Redux Toolkit'
description: 'The official Fundamentals tutorial for Redux: learn the modern way to write Redux logic'
---

import { DetailedExplanation } from '../../components/DetailedExplanation'

# Redux Fundamentals, Part 8: Modern Redux with Redux Toolkit

:::tip What You'll Learn

- How to simplify your Redux logic using Redux Toolkit
- Next steps for learning and using Redux

:::

Congratulations, you've made it to the last section of this tutorial! We've got one more topic to cover before we're done.

If you'd like a reminder of what we've covered so far, take a look at this summary:

:::info

<DetailedExplanation title="Recap: What You've Learned">

- [Part 1: Overview](./part-1-overview.md):
  - what Redux is, when/why to use it, and the basic pieces of a Redux app
- [Part 2: Concepts and Data Flow](./part-2-concepts-data-flow.md):
  - How Redux uses a "one-way data flow" pattern
- [Part 3: State, Actions, and Reducers](./part-3-state-actions-reducers.md):
  - Redux state is made of plain JS data
  - Actions are objects that describe "what happened" events in an app
  - Reducers take current state and an action, and calculate a new state
  - Reducers must follow rules like "immutable updates" and "no side effects"
- [Part 4: Store](./part-4-store.md):
  - The `createStore` API creates a Redux store with a root reducer function
  - Stores can be customized using "enhancers" and "middleware"
  - The Redux DevTools extension lets you see how your state changes over time
- [Part 5: UI and React](./part-5-ui-and-react.md):
  - Redux is separate from any UI, but frequently used with React
  - React-Redux provides APIs to let React components talk to Redux stores
  - `useSelector` reads values from Redux state and subscribes to updates
  - `useDispatch` lets components dispatch actions
  - `<Provider>` wraps your app and lets components access the store
- [Part 6: Async Logic and Data Fetching](./part-6-async-logic.md):
  - Redux middleware allow writing logic that has side effects
  - Middleware add an extra step to the Redux data flow, enabling async logic
  - Redux "thunk" functions are the standard way to write basic async logic
- [Part 7: Standard Redux Patterns](./part-7-standard-patterns.md):
  - Action creators encapsulate preparing action objects and thunks
  - Memoized selectors optimize calculating transformed data
  - Request status should be tracked with loading state enum values
  - Normalized state makes it easier to look up items by IDs

</DetailedExplanation>

:::

As you've seen, many aspects of Redux involve writing some code that can be verbose, such as immutable updates, action types and action creators, and normalizing state. There's good reasons why these patterns exist, but writing that code "by hand" can be difficult. In addition, the process for setting up a Redux store takes several steps, and we've had to come up with our own logic for things like dispatching "loading" actions in thunks or processing normalized data. Finally, many times users aren't sure what "the right way" is to write Redux logic.

That's why the Redux team created [**Redux Toolkit**: our official, opinionated, "batteries included" toolset for efficient Redux development](https://redux-toolkit.js.org).

Redux Toolkit contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

Because of this, **Redux Toolkit is the standard way to write Redux application logic**. The "hand-written" Redux logic you've written so far in this tutorial is actual working code, but **you shouldn't write Redux logic by hand** - we've covered those approaches in this tutorial so that you understand _how_ Redux works. However, **for real applications, you should use Redux Toolkit to write your Redux logic.**

When you use Redux Toolkit, all the concepts that we've covered so far (actions, reducers, store setup, action creators, thunks, etc) still exist, but **Redux Toolkit provides easier ways to write that code**.

:::tip

Redux Toolkit _only_ covers the Redux logic - we still use React-Redux to let our React components talk to the Redux store, including `useSelector` and `useDispatch`.

:::

So, let's see how we can use Redux Toolkit to simplify the code we've already written in our example todo application. We'll primarily be rewriting our "slice" files, but we should be able to keep all the UI code the same.

Before we continue, **add the Redux Toolkit package to your app**:

```bash
npm install @reduxjs/toolkit
```

## Store Setup

We've gone through a few iterations of setup logic for our Redux store. Currently, it looks like this:

```js title="src/rootReducer.js"
import { combineReducers } from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer
})

export default rootReducer
```

```js title="src/store.js"
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer)
export default store
```

Notice that the setup process takes several steps. We have to:

- Combine the slice reducers together to form the root reducer
- Import the root reducer into the store file
- Import the thunk middleware, `applyMiddleware`, and `composeWithDevTools` APIs
- Create a store enhancer with the middleware and devtools
- Create the store with the root reducer

It would be nice if we could cut down the number of steps here.

### Using `configureStore`

**Redux Toolkit has a `configureStore` API that simplifies the store setup process**. `configureStore` wraps around the Redux core `createStore` API, and handles most of the store setup for us automatically. In fact, we can cut it down to effectively one step:

```js title="src/store.js"
// highlight-next-line
import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

// highlight-start
const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer
  }
})
// highlight-end

export default store
```

That one call to `configureStore` did all the work for us:

- It combined `todosReducer` and `filtersReducer` into the root reducer function, which will handle a root state that looks like `{todos, filters}`
- It created a Redux store using that root reducer
- It automatically added the `thunk` middleware
- It automatically added more middleware to check for common mistakes like accidentally mutating the state
- It automatically set up the Redux DevTools Extension connection

We can confirm this works by opening up our example todo application and using it. All of our existing feature code works fine! Since we're dispatching actions, dispatching thunks, reading state in the UI, and looking at the action history in the DevTools, all those pieces must be working correctly. All we've done is switched out the store setup code.

Let's see what happens now if we accidentally mutate some of the state. What if we change the "todos loading" reducer so that it directly changes the state field, instead of immutably making a copy?

```js title="src/features/todos/todosSlice"
export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // omit other cases
    case 'todos/todosLoading': {
      // ❌ WARNING: example only - don't do this in a normal reducer!
      state.status = 'loading'
      return state
    }
    default:
      return state
  }
}
```

Uh-oh. Our whole app just crashed! What happened?

![Immutability check middleware error](/img/tutorials/fundamentals/immutable-error.png)

**This error message is a _good_ thing - we caught a bug in our app!** `configureStore` specifically added an extra middleware that automatically throws an error whenever it sees an accidental mutation of our state (in development mode only). That helps catch mistakes we might make while writing our code.

### Package Cleanup

Redux Toolkit already includes several of the packages we're using, like `redux`, `redux-thunk`, and `reselect`, and re-exports those APIs. So, we can clean up our project a bit.

First, we can switch our `createSelector` import to be from `'@reduxjs/toolkit'` instead of `'reselect'`. Then, we can remove the separate packages we have listed in our `package.json`:

```js
npm uninstall redux redux-thunk reselect
```

To be clear, **we're still using these packages and need to have them installed**. However, because Redux Toolkit depends on them, they'll be installed automatically when we install `@reduxjs/toolkit`, so we don't need to have the other packages specifically listed in our `package.json` file.

## Writing Slices

As we've added new features to our app, the slice files have gotten bigger and more complicated. In particular, the `todosReducer` has gotten harder to read because of all the nested object spreads for immutable updates, and we've written multiple action creator functions.

**Redux Toolkit has a `createSlice` API that will help us simplify our Redux reducer logic and actions**. `createSlice` does several important things for us:

- We can write the case reducers as functions inside of an object, instead of having to write a `switch/case` statement
- The reducers will be able to write shorter immutable update logic
- All the action creators will be generated automatically based on the reducer functions we've provided

### Using `createSlice`

`createSlice` takes an object with three main options fields:

- `name`: a string that will be used as the prefix for generated action types
- `initialState`: the initial state of the reducer
- `reducers`: an object where the keys are strings, and the values are "case reducer" functions that will handle specific actions

Let's look at a small standalone example first.

```js title="createSlice  example"
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.push(action.payload)
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    todosLoading(state, action) {
      return {
        ...state,
        status: 'loading'
      }
    }
  }
})

export const { todoAdded, todoToggled, todosLoading } = todosSlice.actions

export default todosSlice.reducer
```

There's several things to see in this example:

- We write case reducer functions inside the `reducers` object, and give them readable names
- **`createSlice` will automatically generate action creators** that correspond to each case reducer function we provide
- createSlice automatically returns the existing state in the default case
- **`createSlice` allows us to safely "mutate" our state!**
- But, we can also make immutable copies like before if we want to

The generated action creators will be available as `slice.actions.todoAdded`, and we typically destructure and export those individually like we did with the action creators we wrote earlier. The complete reducer function is available as `slice.reducer`, and we typically `export default slice.reducer`, again the same as before.

So what do these auto-generated action objects look like? Let's try calling one of them and logging the action to see:

```js
console.log(todoToggled(42))
// {type: 'todos/todoToggled', payload: 42}
```

`createSlice` generated the action type string for us, by combining the slice's `name` field with the `todoToggled` name of the reducer function we wrote. By default, the action creator accepts one argument, which it puts into the action object as `action.payload`.

Inside of the generated reducer function, `createSlice` will check to see if a dispatched action's `action.type` matches one of the names it generated. If so, it will run that case reducer function. This is exactly the same pattern that we wrote ourselves using a `switch/case` statement, but `createSlice` does it for us automatically.

It's also worth talking about the "mutation" aspect in more detail.

### Immutable Updates with Immer

Earlier, we talked about "mutation" (modifying existing object/array values) and "immutability" (treating values as something that cannot be changed).

:::warning

In Redux, **our reducers are _never_ allowed to mutate the original / current state values!**

```js
// ❌ Illegal - by default, this will mutate the state!
state.value = 123
```

:::

So if we can't change the originals, how do we return an updated state?

:::tip

**Reducers can only make _copies_ of the original values, and then they can mutate the copies.**

```js
// This is safe, because we made a copy
return {
  ...state,
  value: 123
}
```

:::

As you've seen throughout this tutorial, we can write immutable updates by hand by using JavaScript's array / object spread operators and other functions that return copies of the original values. However, writing immutable update logic by hand _is_ hard, and accidentally mutating state in reducers is the single most common mistake Redux users make.

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

Immer still lets us write immutable updates by hand and return the new value ourselves if we want to. You can even mix and match. For example, removing an item from an array is often easier to do with `array.filter()`, so you could call that and then assign the result to `state` to "mutate" it:

```js
// can mix "mutating" and "immutable" code inside of Immer:
state.todos = state.todos.filter(todo => todo.id !== action.payload)
```

### Converting the Todos Reducer

Let's start converting our todos slice file to use `createSlice` instead. We'll pick a couple specific cases from our switch statement first to show how the process works.

```js title="src/features/todos/todosSlice.js"
// highlight-next-line
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  entities: {}
}

// highlight-start
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      const todo = action.payload
      state.entities[todo.id] = todo
    },
    todoToggled(state, action) {
      const todoId = action.payload
      const todo = state.entities[todoId]
      todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions

export default todosSlice.reducer
// highlight-end
```

The todos reducer in our example app is still using normalized state that is nested in a parent object, so the code here is a bit different than the miniature `createSlice` example we just looked at. Remember how we had to [write a lot of nested spread operators to toggle that todo earlier](./part-7-standard-patterns.md#normalized-state)? Now that same code is a _lot_ shorter and easier to read.

Let's add a couple more cases to this reducer.

```js title="src/features/todos/todosSlice.js"
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      const todo = action.payload
      state.entities[todo.id] = todo
    },
    todoToggled(state, action) {
      const todoId = action.payload
      const todo = state.entities[todoId]
      todo.completed = !todo.completed
    },
    // highlight-start
    todoColorSelected: {
      reducer(state, action) {
        const { color, todoId } = action.payload
        state.entities[todoId].color = color
      },
      prepare(todoId, color) {
        return {
          payload: { todoId, color }
        }
      }
    },
    todoDeleted(state, action) {
      delete state.entities[action.payload]
    }
    // highlight-end
  }
})

export const { todoAdded, todoToggled, todoColorSelected, todoDeleted } =
  todosSlice.actions

export default todosSlice.reducer
```

The action creators for `todoAdded` and `todoToggled` only need to take a single parameter, like an entire todo object or a todo ID. But, what if we need to pass in multiple parameters, or do some of that "preparation" logic we talked about like generating a unique ID?

`createSlice` lets us handle those situations by adding a "prepare callback" to the reducer. We can pass an object that has functions named `reducer` and `prepare`. When we call the generated action creator, the `prepare` function will be called with whatever parameters were passed in. It should then create and return an object that has a `payload` field (or, optionally, `meta` and `error` fields), matching the [Flux Standard Action convention](./part-7-standard-patterns.md#flux-standard-actions).

Here, we've used a prepare callback to let our `todoColorSelected` action creator accept separate `todoId` and `color` arguments, and put them together as an object in `action.payload`.

Meanwhile, in the `todoDeleted` reducer, we can use the JS `delete` operator to remove items from our normalized state.

We can use these same patterns to go rewrite the rest of our reducers in `todosSlice.js` and `filtersSlice.js`.

Here's how our code looks with all the slices converted:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-9-createSlice/?fontsize=14&hidenavigation=1&theme=dark&module=%2Fsrc%2Ffeatures%2Ftodos%2FtodosSlice.js&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## Writing Thunks

We've seen how we can [write thunks that dispatch "loading", "request succeeded", and "request failed" actions](./part-7-standard-patterns.md#loading-state-enum-values). We had to write action creators, action types, _and_ reducers to handle those cases.

Because this pattern is so common, **Redux Toolkit has a `createAsyncThunk` API that will generate these thunks for us**. It also generates the action types and action creators for those different request status actions, and dispatches those actions automatically based on the resulting `Promise`.

:::tip

Redux Toolkit has a new [**RTK Query data fetching API**](https://redux-toolkit.js.org/rtk-query/overview). RTK Query is a purpose built data fetching and caching solution for Redux apps, and **can eliminate the need to write _any_ thunks or reducers to manage data fetching**. We encourage you to try it out and see if it can help simplify the data fetching code in your own apps!

We'll be updating the Redux tutorials soon to include sections on using RTK Query. Until then, see [the RTK Query section in the Redux Toolkit docs](https://redux-toolkit.js.org/rtk-query/overview).

:::

### Using `createAsyncThunk`

Let's replace our `fetchTodos` thunk by generating a thunk with `createAsyncThunk`.

`createAsyncThunk` accepts two arguments:

- A string that will be used as the prefix for the generated action types
- A "payload creator" callback function that should return a `Promise`. This is often written using the `async/await` syntax, since `async` functions automatically return a promise.

```js title="src/features/todos/todosSlice.js"
// highlight-next-line
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// omit imports and state

// highlight-start
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await client.get('/fakeApi/todos')
  return response.todos
})
// highlight-end

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const newEntities = {}
        action.payload.forEach(todo => {
          newEntities[todo.id] = todo
        })
        state.entities = newEntities
        state.status = 'idle'
      })
  }
})

// omit exports
```

We pass `'todos/fetchTodos'` as the string prefix, and a "payload creator" function that calls our API and returns a promise containing the fetched data. Inside, `createAsyncThunk` will generate three action creators and action types, plus a thunk function that automatically dispatches those actions when called. In this case, the action creators and their types are:

- `fetchTodos.pending`: `todos/fetchTodos/pending`
- `fetchTodos.fulfilled`: `todos/fetchTodos/fulfilled`
- `fetchTodos.rejected`: `todos/fetchTodos/rejected`

However, these action creators and types are being defined _outside_ of the `createSlice` call. We can't handle those inside of the `createSlice.reducers` field, because those generate new action types too. We need a way for our `createSlice` call to listen for _other_ action types that were defined elsewhere.

**`createSlice` also accepts an `extraReducers` option, where we can have the same slice reducer listen for other action types**. This field should be a callback function with a `builder` parameter, and we can call `builder.addCase(actionCreator, caseReducer)` to listen for other actions.

So, here we've called `builder.addCase(fetchTodos.pending, caseReducer)`. When that action is dispatched, we'll run the reducer that sets `state.status = 'loading'`, same as it did earlier when we wrote that logic in a switch statement. We can do the same thing for `fetchTodos.fulfilled`, and handle the data we received from the API.

As one more example, let's convert `saveNewTodo`. This thunk takes the `text` of the new todo object as its parameter, and saves it to the server. How do we handle that?

```js title="src/features/todos/todosSlice.js"
// omit imports

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await client.get('/fakeApi/todos')
  return response.todos
})

// highlight-start
export const saveNewTodo = createAsyncThunk('todos/saveNewTodo', async text => {
  const initialTodo = { text }
  const response = await client.post('/fakeApi/todos', { todo: initialTodo })
  return response.todo
})
// highlight-end

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // omit case reducers
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        const newEntities = {}
        action.payload.forEach(todo => {
          newEntities[todo.id] = todo
        })
        state.entities = newEntities
        state.status = 'idle'
      })
      // highlight-start
      .addCase(saveNewTodo.fulfilled, (state, action) => {
        const todo = action.payload
        state.entities[todo.id] = todo
      })
    // highlight-end
  }
})

// omit exports and selectors
```

The process for `saveNewTodo` is the same as we saw for `fetchTodos`. We call `createAsyncThunk`, and pass in the action prefix and a payload creator. Inside the payload creator, we make an async API call, and return a result value.

In this case, when we call `dispatch(saveNewTodo(text))`, the `text` value will be passed in to the payload creator as its first argument.

While we won't cover `createAsyncThunk` in more detail here, a few other quick notes for reference:

- You can only pass one argument to the thunk when you dispatch it. If you need to pass multiple values, pass them in a single object
- The payload creator will receive an object as its second argument, which contains `{getState, dispatch}`, and some other useful values
- The thunk dispatches the `pending` action before running your payload creator, then dispatches either `fulfilled` or `rejected` based on whether the `Promise` you return succeeds or fails

## Normalizing State

We previously saw how to "normalize" state, by keeping items in an object keyed by item IDs. This gives us the ability to look up any item by its ID without having to loop through an entire array. However, writing the logic to update normalized state by hand was long and tedious. Writing "mutating" update code with Immer makes that simpler, but there's still likely to be a lot of repetition - we might be loading many different types of items in our app, and we'd have to repeat the same reducer logic each time.

**Redux Toolkit includes a `createEntityAdapter` API that has prebuilt reducers for typical data update operations with normalized state**. This includes adding, updating, and removing items from a slice. **`createEntityAdapter` also generates some memoized selectors for reading values from the store**.

### Using `createEntityAdapter`

Let's replace our normalized entity reducer logic with `createEntityAdapter`.

Calling `createEntityAdapter` gives us an "adapter" object that contains several premade reducer functions, including:

- `addOne` / `addMany`: add new items to the state
- `upsertOne` / `upsertMany`: add new items or update existing ones
- `updateOne` / `updateMany`: update existing items by supplying partial values
- `removeOne` / `removeMany`: remove items based on IDs
- `setAll`: replace all existing items

We can use these functions as case reducers, or as "mutating helpers" inside of `createSlice`.

The adapter also contains:

- `getInitialState`: returns an object that looks like `{ ids: [], entities: {} }`, for storing a normalized state of items along with an array of all item IDs
- `getSelectors`: generates a standard set of selector functions

Let's see how we can use these in our todos slice:

```js title="src/features/todos/todosSlice.js"
// highlight-start
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'
// omit some imports

// highlight-start
const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState({
  status: 'idle'
})
// highlight-end

// omit thunks

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // omit some reducers
    // highlight-start
    // Use an adapter reducer function to remove a todo by ID
    todoDeleted: todosAdapter.removeOne,
    // highlight-end
    completedTodosCleared(state, action) {
      const completedIds = Object.values(state.entities)
        .filter(todo => todo.completed)
        .map(todo => todo.id)
      // highlight-start
      // Use an adapter function as a "mutating" update helper
      todosAdapter.removeMany(state, completedIds)
      // highlight-end
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        todosAdapter.setAll(state, action.payload)
        state.status = 'idle'
      })
      // highlight-start
      // Use another adapter function as a reducer to add a todo
      .addCase(saveNewTodo.fulfilled, todosAdapter.addOne)
    // highlight-end
  }
})

// omit selectors
```

The different adapter reducer functions take different values depending on the function, all in `action.payload`. The "add" and "upsert" functions take a single item or an array of items, the "remove" functions take a single ID or array of IDs, and so on.

`getInitialState` allows us to pass in additional state fields that will be included. In this case, we've passed in a `status` field, giving us a final todos slice state of `{ids, entities, status}`, much like we had before.

We can also replace some of our todos selector functions as well. The `getSelectors` adapter function will generate selectors like `selectAll`, which returns an array of all items, and `selectById`, which returns one item. However, since `getSelectors` doesn't know where our data is in the entire Redux state tree, we need to pass in a small selector that returns this slice out of the whole state tree. Let's switch to using these instead. Since this is the last major change to our code, we'll include the whole todos slice file this time to see what the final version of the code looks like using Redux Toolkit:

```js title="src/features/todos/todosSlice.js"
import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit'
import { client } from '../../api/client'
import { StatusFilters } from '../filters/filtersSlice'

const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState({
  status: 'idle'
})

// Thunk functions
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await client.get('/fakeApi/todos')
  return response.todos
})

export const saveNewTodo = createAsyncThunk('todos/saveNewTodo', async text => {
  const initialTodo = { text }
  const response = await client.post('/fakeApi/todos', { todo: initialTodo })
  return response.todo
})

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoToggled(state, action) {
      const todoId = action.payload
      const todo = state.entities[todoId]
      todo.completed = !todo.completed
    },
    todoColorSelected: {
      reducer(state, action) {
        const { color, todoId } = action.payload
        state.entities[todoId].color = color
      },
      prepare(todoId, color) {
        return {
          payload: { todoId, color }
        }
      }
    },
    todoDeleted: todosAdapter.removeOne,
    allTodosCompleted(state, action) {
      Object.values(state.entities).forEach(todo => {
        todo.completed = true
      })
    },
    completedTodosCleared(state, action) {
      const completedIds = Object.values(state.entities)
        .filter(todo => todo.completed)
        .map(todo => todo.id)
      todosAdapter.removeMany(state, completedIds)
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        todosAdapter.setAll(state, action.payload)
        state.status = 'idle'
      })
      .addCase(saveNewTodo.fulfilled, todosAdapter.addOne)
  }
})

export const {
  allTodosCompleted,
  completedTodosCleared,
  todoAdded,
  todoColorSelected,
  todoDeleted,
  todoToggled
} = todosSlice.actions

export default todosSlice.reducer

// highlight-start
export const { selectAll: selectTodos, selectById: selectTodoById } =
  todosAdapter.getSelectors(state => state.todos)
// highlight-end

export const selectTodoIds = createSelector(
  // First, pass one or more "input selector" functions:
  selectTodos,
  // Then, an "output selector" that receives all the input results as arguments
  // and returns a final result value
  todos => todos.map(todo => todo.id)
)

export const selectFilteredTodos = createSelector(
  // First input selector: all todos
  selectTodos,
  // Second input selector: all filter values
  state => state.filters,
  // Output selector: receives both values
  (todos, filters) => {
    const { status, colors } = filters
    const showAllCompletions = status === StatusFilters.All
    if (showAllCompletions && colors.length === 0) {
      return todos
    }

    const completedStatus = status === StatusFilters.Completed
    // Return either active or completed todos based on filter
    return todos.filter(todo => {
      const statusMatches =
        showAllCompletions || todo.completed === completedStatus
      const colorMatches = colors.length === 0 || colors.includes(todo.color)
      return statusMatches && colorMatches
    })
  }
)

export const selectFilteredTodoIds = createSelector(
  // Pass our other memoized selector as an input
  selectFilteredTodos,
  // And derive data in the output selector
  filteredTodos => filteredTodos.map(todo => todo.id)
)
```

We call `todosAdapter.getSelectors`, and pass in a `state => state.todos` selector that returns this slice of state. From there, the adapter generates a `selectAll` selector that takes the _entire_ Redux state tree, as usual, and loops over `state.todos.entities` and `state.todos.ids` to give us the complete array of todo objects. Since `selectAll` doesn't tell us _what_ we're selecting, we can use ES6 destructuring syntax to rename the function to `selectTodos`. Similarly, we can rename `selectById` to `selectTodoById`.

Notice that our other selectors still use `selectTodos` as an input. That's because it's still returning an array of todo objects this whole time, no matter whether we were keeping the array as the entire `state.todos`, keeping it as a nested array, or storing it as a normalized object and converting to an array. Even as we've made all these changes to how we stored our data, the use of selectors allowed us to keep the rest of our code the same, and the use of memoized selectors has helped the UI perform better by avoiding unnecessary rerenders.

## What You've Learned

**Congratulations! You've completed the "Redux Fundamentals" tutorial!**

You should now have a solid understanding of what Redux is, how it works, and how to use it correctly:

- Managing global app state
- Keeping the state of our app as plain JS data
- Writing action objects that describe "what happened" in the app
- Using reducer functions that look at the current state and an action, and create a new state immutably in response
- Reading the Redux state in our React components with `useSelector`
- Dispatching actions from React components with `useDispatch`

In addition, you've seen how **Redux Toolkit simplifies writing Redux logic**, and why **Redux Toolkit is the standard approach for writing real Redux applications**. By seeing how to write Redux code "by hand" first, it should be clear what the Redux Toolkit APIs like `createSlice` are doing for you, so that you don't have to write that code yourself.

:::info

For more info on Redux Toolkit, including usage guides and API references, see:

- The Redux Toolkit docs at **https://redux-toolkit.js.org**

:::

Let's take one final look at the completed todo application, including all the code that's been converted to use Redux Toolkit:

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-10-finalCode/?fontsize=14&hidenavigation=1&theme=dark&module=%2Fsrc%2Ffeatures%2Ftodos%2FtodosSlice.js&runonclick=1"
  title="redux-fundamentals-example-app"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

And we'll do a final recap of the key points you learned in this section:

:::tip Summary

- **Redux Toolkit (RTK) is the standard way to write Redux logic**
  - RTK includes APIs that simplify most Redux code
  - RTK wraps around the Redux core, and includes other useful packages
- **`configureStore` sets up a Redux store with good defaults**
  - Automatically combines slice reducers to create the root reducer
  - Automatically sets up the Redux DevTools Extension and debugging middleware
- **`createSlice` simplifies writing Redux actions and reducers**
  - Automatically generates action creators based on slice/reducer names
  - Reducers can "mutate" state inside `createSlice` using Immer
- **`createAsyncThunk` generates thunks for async calls**
  - Automatically generates a thunk + `pending/fulfilled/rejected` action creators
  - Dispatching the thunk runs your payload creator and dispatches the actions
  - Thunk actions can be handled in `createSlice.extraReducers`
- **`createEntityAdapter` provides reducers + selectors for normalized state**
  - Includes reducer functions for common tasks like adding/updating/removing items
  - Generates memoized selectors for `selectAll` and `selectById`

:::

## Next Steps for Learning and Using Redux

Now that you've completed this tutorial, we have several suggestions for what you should try next to learn more about Redux.

This "Fundamentals" tutorial focused on the low-level aspects of Redux: writing action types and immutable updates by hand, how a Redux store and middleware work, and why we use patterns like action creators and normalized state. In addition, our todo example app is fairly small, and not meant as a realistic example of building a full app.

However, our [**"Redux Essentials" tutorial**](../essentials/part-1-overview-concepts.md) specifically teaches you **how to build a "real-world" type application**. It focuses on "how to use Redux the right way" using Redux Toolkit, and talks about more realistic patterns that you'll see in larger apps. It covers many of the same topics as this "Fundamentals" tutorial, such as why reducers need to use immutable updates, but with a focus on building a real working application. **We strongly recommend reading through the "Redux Essentials" tutorial as your next step.**

At the same time, the concepts we've covered in this tutorial should be enough to get you started building your own applications using React and Redux. Now's a great time to try working on a project yourself to solidify these concepts and see how they work in practice. If you're not sure what kind of a project to build, see [this list of app project ideas](https://github.com/florinpop17/app-ideas) for some inspiration.

The [Using Redux](../../usage/index.md) section has information on a number of important concepts, like [how to structure your reducers](../../usage/structuring-reducers/StructuringReducers.md), and [**our Style Guide page**](../../style-guide/style-guide) has important information on our recommended patterns and best practices.

If you'd like to know more about _why_ Redux exists, what problems it tries to solve, and how it's meant to be used, see Redux maintainer Mark Erikson's posts on [The Tao of Redux, Part 1: Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/) and [The Tao of Redux, Part 2: Practice and Philosophy](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/).

If you're looking for help with Redux questions, come join [the `#redux` channel in the Reactiflux server on Discord](https://www.reactiflux.com).

**Thanks for reading through this tutorial, and we hope you enjoy building applications with Redux!**

