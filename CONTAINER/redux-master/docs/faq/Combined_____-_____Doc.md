---
id: actions
title: Actions
sidebar_label: Actions
---

# Redux FAQ: Actions

## Table of Contents

- [Redux FAQ: Actions](#redux-faq-actions)
  - [Table of Contents](#table-of-contents)
  - [Actions](#actions)
    - [Why should `type` be a string, or at least serializable? Why should my action types be constants?](#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)
      - [Further information](#further-information)
    - [Is there always a one-to-one mapping between reducers and actions?](#is-there-always-a-one-to-one-mapping-between-reducers-and-actions)
      - [Further information](#further-information-1)
    - [How can I represent “side effects” such as AJAX calls? Why do we need things like “action creators”, “thunks”, and “middleware” to do async behavior?](#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior)
      - [Further information](#further-information-2)
    - [What async middleware should I use? How do you decide between thunks, sagas, observables, or something else?](#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else)
    - [Should I dispatch multiple actions in a row from one action creator?](#should-i-dispatch-multiple-actions-in-a-row-from-one-action-creator)
      - [Further information](#further-information-3)

## Actions

### Why should `type` be a string, or at least serializable? Why should my action types be constants?

As with state, serializable actions enable several of Redux's defining features, such as time travel debugging, and recording and replaying actions. Using something like a `Symbol` for the `type` value or using `instanceof` checks for actions themselves would break that. Strings are serializable and easily self-descriptive, and so are a better choice. Note that it _is_ okay to use Symbols, Promises, or other non-serializable values in an action if the action is intended for use by middleware. Actions only need to be serializable by the time they actually reach the store and are passed to the reducers.

We can't reliably enforce serializable actions for performance reasons, so Redux only checks that every action is a plain object, and that the `type` is defined. The rest is up to you, but you might find that keeping everything serializable helps debug and reproduce issues.

Encapsulating and centralizing commonly used pieces of code is a key concept in programming. While it is certainly possible to manually create action objects everywhere, and write each `type` value by hand, defining reusable constants makes maintaining code easier. If you put constants in a separate file, you can [check your `import` statements against typos](https://www.npmjs.com/package/eslint-plugin-import) so you can't accidentally use the wrong string.

#### Further information

**Documentation**

- [Using Redux: Reducing Boilerplate](../usage/ReducingBoilerplate.md#actions)

**Discussion**

- [#384: Recommend that Action constants be named in the past tense](https://github.com/reactjs/redux/issues/384)
- [#628: Solution for simple action creation with less boilerplate](https://github.com/reactjs/redux/issues/628)
- [#1024: Proposal: Declarative reducers](https://github.com/reactjs/redux/issues/1024)
- [#1167: Reducer without switch](https://github.com/reactjs/redux/issues/1167)
- [Stack Overflow: Why do you need 'Actions' as data in Redux?](https://stackoverflow.com/q/34759047/62937)
- [Stack Overflow: What is the point of the constants in Redux?](https://stackoverflow.com/q/34965856/62937)

### Is there always a one-to-one mapping between reducers and actions?

No. We suggest you write independent small reducer functions that are each responsible for updates to a specific slice of state. We call this pattern “reducer composition”. A given action could be handled by all, some, or none of them. This keeps components decoupled from the actual data changes, as one action may affect different parts of the state tree, and there is no need for the component to be aware of this. Some users do choose to bind them more tightly together, such as the “ducks” file structure, but there is definitely no one-to-one mapping by default, and you should break out of such a paradigm any time you feel you want to handle an action in many reducers.

#### Further information

**Documentation**

- [Fundamentals: State, Actions, Reducers](../tutorials/fundamentals/part-3-state-actions-reducers.md)
- [Using Redux: Structuring Reducers](../usage/structuring-reducers/StructuringReducers.md)

**Discussions**

- [Twitter: most common Redux misconception](https://twitter.com/dan_abramov/status/682923564006248448)
- [#1167: Reducer without switch](https://github.com/reactjs/redux/issues/1167)
- [Reduxible #8: Reducers and action creators aren't a one-to-one mapping](https://github.com/reduxible/reduxible/issues/8)
- [Stack Overflow: Can I dispatch multiple actions without Redux Thunk middleware?](https://stackoverflow.com/questions/35493352/can-i-dispatch-multiple-actions-without-redux-thunk-middleware/35642783)

### How can I represent “side effects” such as AJAX calls? Why do we need things like “action creators”, “thunks”, and “middleware” to do async behavior?

This is a long and complex topic, with a wide variety of opinions on how code should be organized and what approaches should be used.

Any meaningful web app needs to execute complex logic, usually including asynchronous work such as making AJAX requests. That code is no longer purely a function of its inputs, and the interactions with the outside world are known as [“side effects”](https://en.wikipedia.org/wiki/Side_effect_%28computer_science%29)

Redux is inspired by functional programming, and out of the box, has no place for side effects to be executed. In particular, reducer functions _must_ always be pure functions of `(state, action) => newState`. However, Redux's middleware makes it possible to intercept dispatched actions and add additional complex behavior around them, including side effects.

In general, Redux suggests that code with side effects should be part of the action creation process. While that logic _can_ be performed inside of a UI component, it generally makes sense to extract that logic into a reusable function so that the same logic can be called from multiple places—in other words, an action creator function.

The simplest and most common way to do this is to add the [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware that lets you write action creators with more complex and asynchronous logic. Another widely-used method is [Redux Saga](https://github.com/yelouafi/redux-saga) which lets you write more synchronous-looking code using generators, and can act like “background threads” or “daemons” in a Redux app. Yet another approach is [Redux Loop](https://github.com/raisemarketplace/redux-loop), which inverts the process by allowing your reducers to declare side effects in response to state changes and have them executed separately. Beyond that, there are _many_ other community-developed libraries and ideas, each with their own take on how side effects should be managed.

#### Further information

**Documentation**

- [Redux Fundamentals: Async Logic and Data Flow](../tutorials/fundamentals/part-6-async-logic.md)
- [Redux Fundamentals: Store - Middleware](../tutorials/fundamentals/part-4-store.md#middleware)

**Articles**

- [Redux Side-Effects and You](https://medium.com/@fward/redux-side-effects-and-you-66f2e0842fc3)
- [Pure functionality and side effects in Redux](http://blog.hivejs.org/building-the-ui-2/)
- [From Flux to Redux: Async Actions the easy way](http://danmaz74.me/2015/08/19/from-flux-to-redux-async-actions-the-easy-way/)
- [React/Redux Links: "Redux Side Effects" category](https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md)
- [Gist: Redux-Thunk examples](https://gist.github.com/markerikson/ea4d0a6ce56ee479fe8b356e099f857e)

**Discussions**

- [#291: Trying to put API calls in the right place](https://github.com/reactjs/redux/issues/291)
- [#455: Modeling side effects](https://github.com/reactjs/redux/issues/455)
- [#533: Simpler introduction to async action creators](https://github.com/reactjs/redux/issues/533)
- [#569: Proposal: API for explicit side effects](https://github.com/reactjs/redux/pull/569)
- [#1139: An alternative side effect model based on generators and sagas](https://github.com/reactjs/redux/issues/1139)
- [Stack Overflow: Why do we need middleware for async flow in Redux?](https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux)
- [Stack Overflow: How to dispatch a Redux action with a timeout?](https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559)
- [Stack Overflow: Where should I put synchronous side effects linked to actions in redux?](https://stackoverflow.com/questions/32982237/where-should-i-put-synchronous-side-effects-linked-to-actions-in-redux/33036344)
- [Stack Overflow: How to handle complex side-effects in Redux?](https://stackoverflow.com/questions/32925837/how-to-handle-complex-side-effects-in-redux/33036594)
- [Stack Overflow: How to unit test async Redux actions to mock ajax response](https://stackoverflow.com/questions/33011729/how-to-unit-test-async-redux-actions-to-mock-ajax-response/33053465)
- [Stack Overflow: How to fire AJAX calls in response to the state changes with Redux?](https://stackoverflow.com/questions/35262692/how-to-fire-ajax-calls-in-response-to-the-state-changes-with-redux/35675447)
- [Reddit: Help performing Async API calls with Redux-Promise Middleware.](https://www.reddit.com/r/reactjs/comments/469iyc/help_performing_async_api_calls_with_reduxpromise/)
- [Twitter: possible comparison between sagas, loops, and other approaches](https://twitter.com/dan_abramov/status/689639582120415232)

### What async middleware should I use? How do you decide between thunks, sagas, observables, or something else?

There are [many async/side effect middlewares available](https://github.com/markerikson/redux-ecosystem-links/blob/master/side-effects.md), but the most commonly used ones are [`redux-thunk`](https://github.com/reduxjs/redux-thunk), [`redux-saga`](https://github.com/redux-saga/redux-saga), and [`redux-observable`](https://github.com/redux-observable/redux-observable). These are different tools, with different strengths, weaknesses, and use cases.

As a general rule of thumb:

- Thunks are best for complex synchronous logic (especially code that needs access to the entire Redux store state), and simple async logic (like basic AJAX calls). With the use of `async/await`, it can be reasonable to use thunks for some more complex promise-based logic as well.
- Sagas are best for complex async logic and decoupled "background thread"-type behavior, especially if you need to listen to dispatched actions (which is something that can't be done with thunks). They require familiarity with ES6 generator functions and `redux-saga`'s "effects" operators.
- Observables solve the same problems as sagas, but rely on RxJS to implement async behavior. They require familiarity with the RxJS API.

We recommend that most Redux users should start with thunks, and then add an additional side effect library like sagas or observables later if their app really requires handling for more complex async logic.

Since sagas and observables have the same use case, an application would normally use one or the other, but not both. However, note that **it's absolutely fine to use both thunks and either sagas or observables together**, because they solve different problems.

**Articles**

- [Decembersoft: What is the right way to do asynchronous operations in Redux?](https://decembersoft.com/posts/what-is-the-right-way-to-do-asynchronous-operations-in-redux/)
- [Decembersoft: Redux-Thunk vs Redux-Saga](https://decembersoft.com/posts/redux-thunk-vs-redux-saga/)
- [Redux-Thunk vs Redux-Saga: an overview](https://medium.com/@shoshanarosenfield/redux-thunk-vs-redux-saga-93fe82878b2d)
- [Redux-Saga V.S. Redux-Observable](https://hackmd.io/s/H1xLHUQ8e#side-by-side-comparison)

**Discussions**

- [Reddit: discussion of using thunks and sagas together, and pros and cons of sagas](https://www.reddit.com/r/reactjs/comments/8vglo0/react_developer_map_by_adamgolab/e1nr597/)
- [Stack Overflow: Pros/cons of using redux-saga with ES6 generators vs redux-thunk with ES2017 async/await](https://stackoverflow.com/questions/34930735/pros-cons-of-using-redux-saga-with-es6-generators-vs-redux-thunk-with-es2017-asy)
- [Stack Overflow: Why use Redux-Observable over Redux-Saga?](https://stackoverflow.com/questions/40021344/why-use-redux-observable-over-redux-saga/40027778#40027778)

### Should I dispatch multiple actions in a row from one action creator?

There's no specific rule for how you should structure your actions. Using an async middleware like Redux Thunk certainly enables scenarios such as dispatching multiple distinct but related actions in a row, dispatching actions to represent progression of an AJAX request, dispatching actions conditionally based on state, or even dispatching an action and checking the updated state immediately afterwards.

In general, ask if these actions are related but independent, or should actually be represented as one action. Do what makes sense for your own situation but try to balance the readability of reducers with readability of the action log. For example, an action that includes the whole new state tree would make your reducer a one-liner, but the downside is now you have no history of _why_ the changes are happening, so debugging gets really difficult. On the other hand, if you emit actions in a loop to keep them granular, it's a sign that you might want to introduce a new action type that is handled in a different way.

Try to avoid dispatching several times synchronously in a row in the places where you're concerned about performance. There are a number of addons and approaches that can batch up dispatches as well.

#### Further information

**Documentation**

- [FAQ: Performance - Reducing Update Events](./Performance.md#performance-update-events)

**Articles**

- [Idiomatic Redux: Thoughts on Thunks, Sagas, Abstraction, and Reusability](https://blog.isquaredsoftware.com/2017/01/idiomatic-redux-thoughts-on-thunks-sagas-abstraction-and-reusability/#multiple-dispatching)

**Discussions**

- [#597: Valid to dispatch multiple actions from an event handler?](https://github.com/reactjs/redux/issues/597)
- [#959: Multiple actions one dispatch?](https://github.com/reactjs/redux/issues/959)
- [Stack Overflow: Should I use one or several action types to represent this async action?](https://stackoverflow.com/questions/33637740/should-i-use-one-or-several-action-types-to-represent-this-async-action/33816695)
- [Stack Overflow: Do events and actions have a 1:1 relationship in Redux?](https://stackoverflow.com/questions/35406707/do-events-and-actions-have-a-11-relationship-in-redux/35410524)
- [Stack Overflow: Should actions be handled by reducers to related actions or generated by action creators themselves?](https://stackoverflow.com/questions/33220776/should-actions-like-showing-hiding-loading-screens-be-handled-by-reducers-to-rel/33226443#33226443)
- [Twitter: "Good thread on the problems with Redux Thunk..."](https://twitter.com/dan_abramov/status/800310164792414208)

---
id: code-structure
title: Code Structure
sidebar_label: Code Structure
---

import { DetailedExplanation } from '../components/DetailedExplanation'

# Redux FAQ: Code Structure

## Table of Contents

- [What should my file structure look like? How should I group my action creators and reducers in my project? Where should my selectors go?](#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go)
- [How should I split my logic between reducers and action creators? Where should my “business logic” go?](#how-should-i-split-my-logic-between-reducers-and-action-creators-where-should-my-business-logic-go)
- [Why should I use action creators?](#why-should-i-use-action-creators)
- [Where should websockets and other persistent connections live?](#where-should-websockets-and-other-persistent-connections-live)
- [How can I use the Redux store in non-component files?](#how-can-i-use-the-redux-store-in-non-component-files)

## What should my file structure look like? How should I group my action creators and reducers in my project? Where should my selectors go?

Since Redux is just a data store library, it has no direct opinion on how your project should be structured. However, there are a few common patterns that most Redux developers tend to use:

- Rails-style: separate folders for “actions”, “constants”, “reducers”, “containers”, and “components”
- "Feature folders" / "Domain"-style : separate folders per feature or domain, possibly with sub-folders per file type
- “Ducks/Slices”: similar to domain style, but explicitly tying together actions and reducers, often by defining them in the same file

It's generally suggested that selectors are defined alongside reducers and exported, and then reused elsewhere (such as in `mapStateToProps` functions, in async action creators, or sagas) to colocate all the code that knows about the actual shape of the state tree in the reducer files.

:::tip

**We specifically recommend organizing your logic into "feature folders", with all the Redux logic for a given feature in a single "slice/ducks" file"**.

See this section for an example:

<DetailedExplanation title="Detailed Explanation: Example Folder Structure">
An example folder structure might look something like:

- `/src`
  - `index.tsx`: Entry point file that renders the React component tree
  - `/app`
    - `store.ts`: store setup
    - `rootReducer.ts`: root reducer (optional)
    - `App.tsx`: root React component
  - `/common`: hooks, generic components, utils, etc
  - `/features`: contains all "feature folders"
    - `/todos`: a single feature folder
      - `todosSlice.ts`: Redux reducer logic and associated actions
      - `Todos.tsx`: a React component

`/app` contains app-wide setup and layout that depends on all the other folders.

`/common` contains truly generic and reusable utilities and components.

`/features` has folders that contain all functionality related to a specific feature. In this example, `todosSlice.ts` is a "duck"-style file that contains a call to RTK's `createSlice()` function, and exports the slice reducer and action creators.

</DetailedExplanation>

:::

While it ultimately doesn't matter how you lay out your code on disk, it's important to remember that actions and reducers should not be considered in isolation. It's entirely possible (and encouraged) for a reducer defined in one folder to respond to an action defined in another folder.

#### Further information

**Documentation**

- [Style Guide: Structure Files as Feature Folders with Single-File Logic](../style-guide/style-guide.md##structure-files-as-feature-folders-with-single-file-logic)
- [Redux Essentials tutorial: App Structure](../tutorials/essentials/part-2-app-structure.md)
- [FAQ: Actions - "1:1 mapping between reducers and actions?"](./Actions.md#actions-reducer-mappings)

**Articles**

- [How to Scale React Applications](https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/) (accompanying talk: [Scaling React Applications](https://vimeo.com/168648012))
- [Redux Best Practices](https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e)
- [Rules For Structuring (Redux) Applications ](http://jaysoo.ca/2016/02/28/organizing-redux-application/)
- [A Better File Structure for React/Redux Applications](https://marmelab.com/blog/2015/12/17/react-directory-structure.html)
- [Organizing Large React Applications](http://engineering.kapost.com/2016/01/organizing-large-react-applications/)
- [Four Strategies for Organizing Code](https://medium.com/@msandin/strategies-for-organizing-code-2c9d690b6f33)
- [Encapsulating the Redux State Tree](https://randycoulman.com/blog/2016/09/13/encapsulating-the-redux-state-tree/)
- [Redux Reducer/Selector Asymmetry](https://randycoulman.com/blog/2016/09/20/redux-reducer-selector-asymmetry/)
- [Modular Reducers and Selectors](https://randycoulman.com/blog/2016/09/27/modular-reducers-and-selectors/)
- [My journey towards a maintainable project structure for React/Redux](https://medium.com/@mmazzarolo/my-journey-toward-a-maintainable-project-structure-for-react-redux-b05dfd999b5)
- [React/Redux Links: Architecture - Project File Structure](https://github.com/markerikson/react-redux-links/blob/master/react-redux-architecture.md#project-file-structure)

**Discussions**

- [#839: Emphasize defining selectors alongside reducers](https://github.com/reduxjs/redux/issues/839)
- [#943: Reducer querying](https://github.com/reduxjs/redux/issues/943)
- [React Boilerplate #27: Application Structure](https://github.com/mxstbr/react-boilerplate/issues/27)
- [Stack Overflow: How to structure Redux components/containers](https://stackoverflow.com/questions/32634320/how-to-structure-redux-components-containers/32921576)
- [Twitter: There is no ultimate file structure for Redux](https://twitter.com/dan_abramov/status/783428282666614784)

## How should I split my logic between reducers and action creators? Where should my “business logic” go?

There's no single clear answer to exactly what pieces of logic should go in a reducer or an action creator. Some developers prefer to have “fat” action creators, with “thin” reducers that simply take the data in an action and blindly merge it into the corresponding state. Others try to emphasize keeping actions as small as possible, and minimize the usage of `getState()` in an action creator. (For purposes of this question, other async approaches such as sagas and observables fall in the "action creator" category.)

There are several potential benefits from putting more logic into your reducers. It's likely that the action types would be more semantic and more meaningful (such as `"USER_UPDATED"` instead of `"SET_STATE"`). In addition, having more logic in reducers means that more functionality will be affected by time travel debugging.

This comment sums up the dichotomy nicely:

> Now, the problem is what to put in the action creator and what in the reducer, the choice between fat and thin action objects. If you put all the logic in the action creator, you end up with fat action objects that basically declare the updates to the state. Reducers become pure, dumb, add-this, remove that, update these functions. They will be easy to compose. But not much of your business logic will be there.
> If you put more logic in the reducer, you end up with nice, thin action objects, most of your data logic in one place, but your reducers are harder to compose since you might need info from other branches. You end up with large reducers or reducers that take additional arguments from higher up in the state.

:::tip

**We recommend putting as much logic as possible into reducers**. There are times when you may need some logic to help prepare what goes into the action, but reducers should do most of the work.

:::

#### Further information

**Documentation**

- [Style Guide: Put as Much Logic as Possible in Reducers](../style-guide/style-guide.md#put-as-much-logic-as-possible-in-reducers)
- [Style Guide: Model Actions as "Events", not "Setters"](../style-guide/style-guide.md#model-actions-as-events-not-setters)

**Articles**

- [Where do I put my business logic in a React/Redux application?](https://medium.com/@jeffbski/where-do-i-put-my-business-logic-in-a-react-redux-application-9253ef91ce1)
- [How to Scale React Applications](https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/)
- [The Tao of Redux, Part 2 - Practice and Philosophy. Thick and thin reducers.](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/#thick-and-thin-reducers)

**Discussions**

- [How putting too much logic in action creators could affect debugging](https://github.com/reduxjs/redux/issues/384#issuecomment-127393209)
- [#384: The more that's in a reducer, the more you can replay via time travel](https://github.com/reduxjs/redux/issues/384#issuecomment-127393209)
- [#1165: Where to put business logic / validation?](https://github.com/reduxjs/redux/issues/1165)
- [#1171: Recommendations for best practices regarding action-creators, reducers, and selectors](https://github.com/reduxjs/redux/issues/1171)
- [Stack Overflow: Accessing Redux state in an action creator?](https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator/35674575)
- [#2796: Gaining clarity on "business logic"](https://github.com/reduxjs/redux/issues/2796#issue-289298280)
- [Twitter: Moving away from unclear terminology...](https://twitter.com/FwardPhoenix/status/952971237004926977)

## Why should I use action creators?

Redux does not require action creators. You are free to create actions in any way that is best for you, including simply passing an object literal to `dispatch`. Action creators emerged from the [Flux architecture](https://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#actions-and-actioncreators) and have been adopted by the Redux community because they offer several benefits.

Action creators are more maintainable. Updates to an action can be made in one place and applied everywhere. All instances of an action are guaranteed to have the same shape and the same default values.

Action creators are testable. The correctness of an inline action must be verified manually. Like any function, tests for an action creator can be written once and run automatically.

Action creators are easier to document. The action creator's parameters enumerate the action's dependencies. And centralization of the action definition provides a convenient place for documentation comments. When actions are written inline, this information is harder to capture and communicate.

Action creators are a more powerful abstraction. Creating an action often involves transforming data or making AJAX requests. Action creators provide a uniform interface to this varied logic. This abstraction frees a component to dispatch an action without being complicated by the details of that action's creation.

#### Further information

**Articles**

- [Idiomatic Redux: Why use action creators?](https://blog.isquaredsoftware.com/2016/10/idiomatic-redux-why-use-action-creators/)

**Discussions**

- [Reddit: Redbox - Redux action creation made simple](https://www.reddit.com/r/reactjs/comments/54k8js/redbox_redux_action_creation_made_simple/d8493z1/?context=4)

## Where should websockets and other persistent connections live?

Middleware are the right place for persistent connections like websockets in a Redux app, for several reasons:

- Middleware exist for the lifetime of the application
- Like with the store itself, you probably only need a single instance of a given connection that the whole app can use
- Middleware can see all dispatched actions and dispatch actions themselves. This means a middleware can take dispatched actions and turn those into messages sent over the websocket, and dispatch new actions when a message is received over the websocket.
- A websocket connection instance isn't serializable, so [it doesn't belong in the store state itself](/faq/organizing-state#organizing-state-non-serializable)

See [this example that shows how a socket middleware might dispatch and respond to Redux actions](https://gist.github.com/markerikson/3df1cf5abbac57820a20059287b4be58).

There's many existing middleware for websockets and other similar connections - see the link below.

**Libraries**

- [Middleware: Socket and Adapters](https://github.com/markerikson/redux-ecosystem-links/blob/master/middleware-sockets-adapters.md)

## How can I use the Redux store in non-component files?

There should only be a single Redux store per application. This makes it effectively a singleton in terms of the app architecture. When used with React, the store is injected into the components at runtime by rendering a `<Provider store={store}>` around the root `<App>` component, so only the application setup logic needs to import the store directly.

However, there may be times when other parts of the codebase need to interact with the store as well.

**You should avoid importing the store directly into other codebase files**. While it may work in some cases, that often ends up causing circular import dependency errors.

Some possible solutions are:

- Write your store-dependent logic as a thunk, and then dispatch that thunk from a component
- Pass along references to `dispatch` from components as arguments the relevant functions
- Write the logic as middleware and add them to the store at setup time
- Inject the store instance into the relevant files as the app is being created.

One common use case is reading API authorization information such as a token from the Redux state, inside of an Axios interceptor. The interceptor file needs to reference `store.getState()`, but also needs to be imported into API layer files, and this leads to circular imports.

You can expose an `injectStore` function from the interceptor file instead:

```js title="common/api.js"
let store

export const injectStore = _store => {
  store = _store
}

axiosInstance.interceptors.request.use(config => {
  config.headers.authorization = store.getState().auth.token
  return config
})
```

Then, in your entry point file, inject the store into the API setup file:

```js title="index.js"
import store from "./app/store".
import {injectStore} from "./common/api";
injectStore(store);
```

This way, the application setup is the only code that has to import the store, and the file dependency graph avoids circular dependencies.


---
id: design-decisions
title: Design Decisions
sidebar_label: Design Decisions
---

# Redux FAQ: Design Decisions

## Table of Contents

- [Why doesn't Redux pass the state and action to subscribers?](#why-doesnt-redux-pass-the-state-and-action-to-subscribers)
- [Why doesn't Redux support using classes for actions and reducers?](#why-doesnt-redux-support-using-classes-for-actions-and-reducers)
- [Why does the middleware signature use currying?](#why-does-the-middleware-signature-use-currying)
- [Why does applyMiddleware use a closure for dispatch?](#why-does-applymiddleware-use-a-closure-for-dispatch)
- [Why doesn't `combineReducers` include a third argument with the entire state when it calls each reducer?](#why-doesnt-combinereducers-include-a-third-argument-with-the-entire-state-when-it-calls-each-reducer)
- [Why doesn't mapDispatchToProps allow use of return values from `getState()` or `mapStateToProps()`?](#why-doesnt-mapdispatchtoprops-allow-use-of-return-values-from-getstate-or-mapstatetoprops)

## Design Decisions

### Why doesn't Redux pass the state and action to subscribers?

Subscribers are intended to respond to the state value itself, not the action. Updates to the state are processed synchronously, but notifications to subscribers can be batched or debounced, meaning that subscribers are not always notified with every action. This is a common [performance optimization](./Performance.md#performance-update-events) to avoid repeated re-rendering.

Batching or debouncing is possible by using enhancers to override `store.dispatch` to change the way that subscribers are notified. Also, there are libraries that change Redux to process actions in batches to optimize performance and avoid repeated re-rendering:

- [redux-batch](https://github.com/manaflair/redux-batch) allows passing an array of actions to `store.dispatch()` with only one notification,
- [redux-batched-subscribe](https://github.com/tappleby/redux-batched-subscribe) allows batching of subscribe notifications that occur as a result of dispatches.

The intended guarantee is that Redux eventually calls all subscribers with the most recent state available, but not that it always calls each subscriber for each action. The store state is available in the subscriber simply by calling `store.getState()`. The action cannot be made available in the subscribers without breaking the way that actions might be batched.

A potential use-case for using the action inside a subscriber -- which is an unsupported feature -- is to ensure that a component only re-renders after certain kinds of actions. Instead, re-rendering should be controlled through:

1. the [shouldComponentUpdate](https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate) lifecycle method
2. the [virtual DOM equality check (vDOMEq)](https://facebook.github.io/react/docs/optimizing-performance.html#avoid-reconciliation)
3. [React.PureComponent](https://facebook.github.io/react/docs/optimizing-performance.html#examples)
4. Using React-Redux: use [mapStateToProps](https://react-redux.js.org/api#connect) to subscribe components to only the parts of the store that they need.

#### Further Information

**Articles**

- [How can I reduce the number of store update events?](./Performance.md#performance-update-events)

**Discussions**

- [#580: Why doesn't Redux pass the state to subscribers?](https://github.com/reactjs/redux/issues/580)
- [#2214: Alternate Proof of Concept: Enhancer Overhaul -- more on debouncing](https://github.com/reactjs/redux/pull/2214)

### Why doesn't Redux support using classes for actions and reducers?

The pattern of using functions, called action creators, to return action objects may seem counterintuitive to programmers with a lot of Object Oriented Programming experience, who would see this is a strong use-case for Classes and instances. Class instances for action objects and reducers are not supported because class instances make serialization and deserialization tricky. Deserialization methods like `JSON.parse(string)` will return a plain old Javascript object rather than class instances.

As described in the [Store FAQ](./OrganizingState.md#organizing-state-non-serializable), if you are okay with things like persistence and time-travel debugging not working as intended, you are welcome to put non-serializable items into your Redux store.

Serialization enables the browser to store all actions that have been dispatched, as well as the previous store states, with much less memory. Rewinding and 'hot reloading' the store is central to the Redux developer experience and the function of Redux DevTools. This also enables deserialized actions to be stored on the server and re-serialized in the browser in the case of server-side rendering with Redux.

#### Further Information

**Articles**

- [Can I put functions, promises, or other non-serializable items in my store state?](./OrganizingState.md#organizing-state-non-serializable)

**Discussions**

- [#1171: Why doesn't Redux use classes for actions and reducers?](https://github.com/reactjs/redux/issues/1171#issuecomment-196819727)

### Why does the middleware signature use currying?

Redux middleware are written using a triply-nested function structure that looks like `const middleware = storeAPI => next => action => {}`, rather than a single function that looks like `const middleware = (storeAPI, next, action) => {}`. There's a few reasons for this.

One is that "currying" functions is a standard functional programming technique, and Redux was explicitly intended to use functional programming principles in its design. Another is that currying functions creates closures where you can declare variables that exist for the lifetime of the middleware (which could be considered a functional equivalent to instance variables that exist for the lifetime of a class instance). Finally, it's simply the approach that was chosen when Redux was initially designed.

The [curried function signature](https://github.com/reactjs/redux/issues/1744) of declaring middleware is [deemed unnecessary](https://github.com/reactjs/redux/pull/784) by some, because both store and next are available when the applyMiddleware function is executed. This issue has been determined to not be [worth introducing breaking changes](https://github.com/reactjs/redux/issues/1744), as there are now hundreds of middleware in the Redux ecosystem that rely on the existing middleware definition.

#### Further Information

**Discussions**

- Why does the middleware signature use currying?
  - Prior discussions: [#55](https://github.com/reactjs/redux/pull/55), [#534](https://github.com/reactjs/redux/issues/534), [#784](https://github.com/reactjs/redux/pull/784), [#922](https://github.com/reactjs/redux/issues/922), [#1744](https://github.com/reactjs/redux/issues/1744)
  - [React Boston 2017: You Might Need Redux (And Its Ecosystem)](https://blog.isquaredsoftware.com/2017/09/presentation-might-need-redux-ecosystem/)

### Why does `applyMiddleware` use a closure for `dispatch`?

`applyMiddleware` takes the existing dispatch from the store and closes over it to create the initial chain of middlewares that have been invoked with an object that exposes the getState and dispatch functions, which enables middlewares that [rely on dispatch during initialization](https://github.com/reactjs/redux/pull/1592) to run.

#### Further Information

**Discussions**

- Why does applyMiddleware use a closure for dispatch?
  - See - [#1592](https://github.com/reactjs/redux/pull/1592) and [#2097](https://github.com/reactjs/redux/issues/2097)

### Why doesn't `combineReducers` include a third argument with the entire state when it calls each reducer?

`combineReducers` is opinionated to encourage splitting reducer logic by domain. As stated in [Beyond `combineReducers`](../usage/structuring-reducers/BeyondCombineReducers.md),`combineReducers` is deliberately limited to handle a single common use case: updating a state tree that is a plain Javascript object by delegating the work of updating each slice of state to a specific slice reducer.

It's not immediately obvious what a potential third argument to each reducer should be: the entire state tree, some callback function, some other part of the state tree, etc. If `combineReducers` doesn't fit your use case, consider using libraries like [combineSectionReducers](https://github.com/ryo33/combine-section-reducers) or [reduceReducers](https://github.com/acdlite/reduce-reducers) for other options with deeply nested reducers and reducers that require access to the global state.

If none of the published utilities solve your use case, you can always write a function yourself that does just exactly what you need.

#### Further information

**Articles**

- [Beyond `combineReducers`](../usage/structuring-reducers/BeyondCombineReducers.md)

**Discussions**

- [#1768 Allow reducers to consult global state](https://github.com/reactjs/redux/pull/1768)

### Why doesn't `mapDispatchToProps` allow use of return values from `getState()` or `mapStateToProps()`?

There have been requests to use either the entire `state` or the return value of `mapState` inside of `mapDispatch`, so that when functions are declared inside of `mapDispatch`, they can close over the latest returned values from the store.

This approach is not supported in `mapDispatch` because it would mean also calling `mapDispatch` every time the store is updated. This would cause the re-creation of functions with every state update, thus adding a lot of performance overhead.

The preferred way to handle this use-case--needing to alter props based on the current state and mapDispatchToProps functions--is to work from mergeProps, the third argument to the connect function. If specified, it is passed the result of `mapStateToProps()`, `mapDispatchToProps()`, and the container component's props. The plain object returned from `mergeProps` will be passed as props to the wrapped component.

#### Further information

**Discussions**

- [#237 Why doesn't mapDispatchToProps allow use of return values from getState() or mapStateToProps()?](https://github.com/reactjs/react-redux/issues/237)

---
id: general
title: General
sidebar_label: General
---

# Redux FAQ: General

## When should I learn Redux?

What to learn can be an overwhelming question for a JavaScript developer. It helps to narrow the range of options by learning one thing at a time and focusing on problems you find in your work. Redux is a pattern for managing application state. If you do not have problems with state management, you might find the benefits of Redux harder to understand. Some UI libraries (like React) have their own state management system. If you are using one of these libraries, especially if you are just learning to use them, we encourage you to learn the capabilities of that built-in system first. It might be all you need to build your application. If your application becomes so complex that you are confused about where state is stored or how state changes, then it is a good time to learn Redux.

:::tip

**We recommend that most new learners should focus on learning React first, and wait to learn Redux until after you're already comfortable with React**. That way, there's fewer new concepts to learn at once, and it's more clear what concepts are part of React and what concepts are part of Redux. You'll also have a better understanding of how using Redux fits into a React app, and why Redux can be useful.

:::

#### Further information

**Articles**

- [Deciding What Not To Learn](https://gedd.ski/post/what-not-to-learn/)
- [How to learn web frameworks](https://ux.shopify.com/how-to-learn-web-frameworks-9d447cb71e68)
- [Redux vs MobX vs Flux vs... Do you even need that?](https://goshakkk.name/redux-vs-mobx-vs-flux-etoomanychoices/)

**Discussions**

- [Ask HN: Overwhelmed with learning front-end, how do I proceed?](https://news.ycombinator.com/item?id=12882816)
- [Twitter: If you want to teach someone to use an abstraction...](https://twitter.com/acemarke/status/901329101088215044)
- [Twitter: it was never intended to be learned before...](https://twitter.com/dan_abramov/status/739961787295117312)
- [Twitter: Learning Redux before React?](https://twitter.com/dan_abramov/status/739962098030137344)
- [Twitter: The first time I used React, people told me I needed Redux...](https://twitter.com/raquelxmoss/status/901576285020856320)
- [Twitter: This was my experience with Redux...](https://twitter.com/garetmckinley/status/901500556568645634)
- [Dev.to: When is it time to use Redux?](https://dev.to/dan_abramov/comment/1n2k)

## When should I use Redux?

**Not all apps need Redux. It's important to understand the kind of application you're building, the kinds of problems that you need to solve, and what tools can best solve the problems you're facing.**

Redux helps you deal with shared state management, but like any tool, it has tradeoffs. It's not designed to be the shortest or fastest way to write code. It's intended to help answer the question "When did a certain slice of state change, and where did the data come from?", with predictable behavior. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

As Pete Hunt, one of the early contributors to React, says:

> You'll know when you need Flux. If you aren't sure if you need it, you don't need it.

Similarly, Dan Abramov, one of the creators of Redux, says:

> I would like to amend this: don't use Redux until you have problems with vanilla React.

**Redux is most useful when in cases when**:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people
- You need to see how that state is being updated over time

There are also many other tools available that can help solve some of the same problems Redux does: state management, caching fetched server data, and passing data through the UI.

:::info

If you're not sure whether Redux is a good choice for your app, these resources give some more guidance:

- **[When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)**
- **[The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
- **[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)**

:::

In the end, Redux is just a tool. It's a great tool, and there are some great reasons to use it, but there are also reasons you might not want to use it. Make informed decisions about your tools, and understand the tradeoffs involved in each decision.

#### Further information

**Documentation**

- [Thinking in Redux: Motivation](../understanding/thinking-in-redux/Motivation.md)

**Articles**

- **[When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)**
- **[The Tao of Redux, Part 1 - Implementation and Intent](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/)**
- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
- [The Case for Flux](https://medium.com/swlh/the-case-for-flux-379b7d1982c6)

**Discussions**

- [Twitter: Don't use Redux until...](https://twitter.com/dan_abramov/status/699241546248536064)
- [Twitter: Redux is designed to be predictable, not concise](https://twitter.com/dan_abramov/status/733742952657342464)
- [Twitter: Redux is useful to eliminate deep prop passing](https://twitter.com/dan_abramov/status/732912085840089088)
- [Twitter: Don't use Redux unless you're unhappy with local component state](https://twitter.com/dan_abramov/status/725089243836588032)
- [Twitter: You don't need Redux if your data never changes](https://twitter.com/dan_abramov/status/737036433215610880)
- [Twitter: If your reducer looks boring, don't use redux](https://twitter.com/dan_abramov/status/802564042648944642)
- [Reddit: You don't need Redux if your app just fetches something on a single page](https://www.reddit.com/r/reactjs/comments/5exfea/feedback_on_my_first_redux_app/dagglqp/)
- [Stack Overflow: Why use Redux over Facebook Flux?](https://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux)
- [Stack Overflow: Why should I use Redux in this example?](https://stackoverflow.com/questions/35675339/why-should-i-use-redux-in-this-example)
- [Stack Overflow: What could be the downsides of using Redux instead of Flux?](https://stackoverflow.com/questions/32021763/what-could-be-the-downsides-of-using-redux-instead-of-flux)
- [Stack Overflow: When should I add Redux to a React app?](https://stackoverflow.com/questions/36631761/when-should-i-add-redux-to-a-react-app)
- [Stack Overflow: Redux vs plain React?](https://stackoverflow.com/questions/39260769/redux-vs-plain-react/39261546#39261546)
- [Twitter: Redux is a platform for developers to build customized state management with reusable things](https://twitter.com/acemarke/status/793862722253447168)

## Can Redux only be used with React?

Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code. That said, it is most useful when combined with a declarative view implementation that can infer the UI updates from the state changes, such as React or one of the similar libraries available.

## Do I need to have a particular build tool to use Redux?

Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all. The [counter-vanilla](https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla) example demonstrates basic ES5 usage with Redux included as a `<script>` tag. As the relevant pull request says:

> The new Counter Vanilla example is aimed to dispel the myth that Redux requires Webpack, React, hot reloading, sagas, action creators, constants, Babel, npm, CSS modules, decorators, fluent Latin, an Egghead subscription, a PhD, or an Exceeds Expectations O.W.L. level.
>
> Nope, it's just HTML, some artisanal `<script>` tags, and plain old DOM manipulation. Enjoy!

---
id: immutable-data
title: Immutable Data
sidebar_label: Immutable Data
---

# Redux FAQ: Immutable Data

## Table of Contents

- [What are the benefits of immutability?](#what-are-the-benefits-of-immutability)
- [Why is immutability required by Redux?](#why-is-immutability-required-by-redux)
- [Why does Redux’s use of shallow equality checking require immutability?](#why-does-reduxs-use-of-shallow-equality-checking-require-immutability)
  - [How do Shallow and Deep Equality Checking differ?](#how-do-shallow-and-deep-equality-checking-differ)
  - [How does Redux use shallow equality checking?](#how-does-redux-use-shallow-equality-checking)
  - [How does `combineReducers` use shallow equality checking?](#how-does-combinereducers-use-shallow-equality-checking)
  - [How does React-Redux use shallow equality checking?](#how-does-react-redux-use-shallow-equality-checking)
  - [How does React-Redux use shallow equality checking to determine whether a component needs re-rendering?](#how-does-react-redux-use-shallow-equality-checking-to-determine-whether-a-component-needs-re-rendering)
  - [Why will shallow equality checking not work with mutable objects?](#why-will-shallow-equality-checking-not-work-with-mutable-objects)
  - [Does shallow equality checking with a mutable object cause problems with Redux?](#does-shallow-equality-checking-with-a-mutable-object-cause-problems-with-redux)
  - [Why does a reducer mutating the state prevent React-Redux from re-rendering a wrapped component?](#why-does-a-reducer-mutating-the-state-prevent-react-redux-from-re-rendering-a-wrapped-component)
  - [Why does a selector mutating and returning a persistent object to `mapStateToProps` prevent React-Redux from re-rendering a wrapped component?](#why-does-a-selector-mutating-and-returning-a-persistent-object-to-mapstatetoprops-prevent-react-redux-from-re-rendering-a-wrapped-component)
  - [How does immutability enable a shallow check to detect object mutations?](#how-does-immutability-enable-a-shallow-check-to-detect-object-mutations)
  - [How can immutability in your reducers cause components to render unnecessarily?](#how-can-immutability-in-your-reducers-cause-components-to-render-unnecessarily)
  - [How can immutability in mapStateToProps cause components to render unnecessarily?](#how-can-immutability-in-mapstatetoprops-cause-components-to-render-unnecessarily)
- [What approaches are there for handling data immutability? Do I have to use Immer?](#what-approaches-are-there-for-handling-data-immutability-do-i-have-to-use-immer)
- [What are the issues with using JavaScript for immutable operations?](#what-are-the-issues-with-using-plain-javascript-for-immutable-operations)

## What are the benefits of immutability?

Immutability can bring increased performance to your app, and leads to simpler programming and debugging, as data that never changes is easier to reason about than data that is free to be changed arbitrarily throughout your app.

In particular, immutability in the context of a Web app enables sophisticated change detection techniques to be implemented simply and cheaply, ensuring the computationally expensive process of updating the DOM occurs only when it absolutely has to (a cornerstone of React’s performance improvements over other libraries).

#### Further information

**Articles**

- [Introduction to Immer](https://immerjs.github.io/immer/)
- [JavaScript Immutability presentation (PDF - see slide 12 for benefits)](https://www.jfokus.se/jfokus16/preso/JavaScript-Immutability--Dont-Go-Changing.pdf)
- [React: Optimizing Performance](https://facebook.github.io/react/docs/optimizing-performance.html)
- [JavaScript Application Architecture On The Road To 2015](https://medium.com/google-developers/javascript-application-architecture-on-the-road-to-2015-d8125811101b#.djje0rfys)

## Why is immutability required by Redux?

- Both Redux and React-Redux employ [shallow equality checking](#how-do-shallow-and-deep-equality-checking-differ). In particular: - Redux's `combineReducers` utility [shallowly checks for reference changes](#how-does-redux-use-shallow-equality-checking) caused by the reducers that it calls. - React-Redux's `connect` method generates components that [shallowly check reference changes to the root state](#how-does-react-redux-use-shallow-equality-checking), and the return values from the `mapStateToProps` function to see if the wrapped components actually need to re-render.
  Such [shallow checking requires immutability](#why-will-shallow-equality-checking-not-work-with-mutable-objects) to function correctly.
- Immutable data management ultimately makes data handling safer.
- Time-travel debugging requires that reducers be pure functions with no side effects, so that you can correctly jump between different states.

#### Further Information

**Documentation**

- [Using Redux: Prerequisite Reducer Concepts](../usage/structuring-reducers/PrerequisiteConcepts.md)

**Discussions**

- [Reddit: Why Redux Needs Reducers To Be Pure Functions](https://www.reddit.com/r/reactjs/comments/5ecqqv/why_redux_need_reducers_to_be_pure_functions/dacmmjh/?context=3)

## Why does Redux’s use of shallow equality checking require immutability?

Redux's use of shallow equality checking requires immutability if any connected components are to be updated correctly. To see why, we need to understand the difference between shallow and deep equality checking in JavaScript.

### How do shallow and deep equality checking differ?

Shallow equality checking (or _reference equality_) simply checks that two different _variables_ reference the same object; in contrast, deep equality checking (or _value equality_) must check every _value_ of two objects' properties.

A shallow equality check is therefore as simple (and as fast) as `a === b`, whereas a deep equality check involves a recursive traversal through the properties of two objects, comparing the value of each property at each step.

It's for this improvement in performance that Redux uses shallow equality checking.

#### Further Information

**Articles**

- [Pros and Cons of using immutability with React.js](https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)

### How does Redux use shallow equality checking?

Redux uses shallow equality checking in its `combineReducers` function to return either a new mutated copy of the root state object, or, if no mutations have been made, the current root state object.

#### Further Information

**Documentation**

- [API: combineReducers](../api/combineReducers.md)

#### How does `combineReducers` use shallow equality checking?

The [suggested structure](./Reducers.md#reducers-share-state) for a Redux store is to split the state object into multiple "slices" or "domains" by key, and provide a separate reducer function to manage each individual data slice.

`combineReducers` makes working with this style of structure easier by taking a `reducers` argument that’s defined as a hash table comprising a set of key/value pairs, where each key is the name of a state slice, and the corresponding value is the reducer function that will act on it.

So, for example, if your state shape is `{ todos, counter }`, the call to `combineReducers` would be:

```js
combineReducers({ todos: myTodosReducer, counter: myCounterReducer })
```

where:

- the keys `todos` and `counter` each refer to a separate state slice;
- the values `myTodosReducer` and `myCounterReducer` are reducer functions, with each acting on the state slice identified by the respective key.

`combineReducers` iterates through each of these key/value pairs. For each iteration, it:

- creates a reference to the current state slice referred to by each key;
- calls the appropriate reducer and passes it the slice;
- creates a reference to the possibly-mutated state slice that's returned by the reducer.

As it continues through the iterations, `combineReducers` will construct a new state object with the state slices returned from each reducer. This new state object may or may not be different from the current state object. It is here that `combineReducers` uses shallow equality checking to determine whether the state has changed.

Specifically, at each stage of the iteration, `combineReducers` performs a shallow equality check on the current state slice and the state slice returned from the reducer. If the reducer returns a new object, the shallow equality check will fail, and `combineReducers` will set a `hasChanged` flag to true.

After the iterations have completed, `combineReducers` will check the state of the `hasChanged` flag. If it’s true, the newly-constructed state object will be returned. If it’s false, the _current_ state object is returned.

This is worth emphasizing: _If the reducers all return the same `state` object passed to them, then `combineReducers` will return the *current* root state object, not the newly updated one._

#### Further Information

**Documentation**

- [API: combineReducers](../api/combineReducers.md)
- [Redux FAQ - How do I share state between two reducers? do I have to use `combineReducers`?](./Reducers.md#reducers-share-state)

**Video**

- [Egghead.io: Redux: Implementing combineReducers() from Scratch](https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch)

### How does React-Redux use shallow equality checking?

React-Redux uses shallow equality checking to determine whether the component it’s wrapping needs to be re-rendered.

To do this, it assumes that the wrapped component is pure; that is, that the component will produce the [same results given the same props and state](https://react-redux.js.org/troubleshooting#my-views-aren-t-updating-when-something-changes-outside-of-redux).

By assuming the wrapped component is pure, it need only check whether the root state object or the values returned from `mapStateToProps` have changed. If they haven’t, the wrapped component does not need re-rendering.

It detects a change by keeping a reference to the root state object, and a reference to _each value_ in the props object that's returned from the `mapStateToProps` function.

It then runs a shallow equality check on its reference to the root state object and the state object passed to it, and a separate series of shallow checks on each reference to the props object’s values and those that are returned from running the `mapStateToProps` function again.

#### Further Information

**Documentation**

- [React-Redux Bindings](https://react-redux.js.org)

**Articles**

- [API: React-Redux’s connect function and `mapStateToProps`](https://react-redux.js.org/using-react-redux/connect-mapstate)
- [Redux FAQ: Why isn't my component re-rendering, or my `mapStateToProps` running?](./ReactRedux.md#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running)

### Why does React-Redux shallowly check each value within the props object returned from `mapStateToProp`?

React-Redux performs a shallow equality check on each _value_ within the props object, not on the props object itself.

It does so because the props object is actually a hash of prop names and their values (or selector functions that are used to retrieve or generate the values), such as in this example:

```js
function mapStateToProps(state) {
  return {
    todos: state.todos, // prop value
    visibleTodos: getVisibleTodos(state) // selector
  }
}

export default connect(mapStateToProps)(TodoApp)
```

As such, a shallow equality check of the props object returned from repeated calls to `mapStateToProps` would always fail, as a new object would be returned each time.

React-Redux therefore maintains separate references to each _value_ in the returned props object.

#### Further Information

**Articles**

- [React.js pure render performance anti-pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.gh07cm24f)

### How does React-Redux use shallow equality checking to determine whether a component needs re-rendering?

Each time React-Redux’s `connect` function is called, it will perform a shallow equality check on its stored reference to the root state object, and the current root state object passed to it from the store. If the check passes, the root state object has not been updated, and so there is no need to re-render the component, or even call `mapStateToProps`.

If the check fails, however, the root state object _has_ been updated, and so `connect` will call `mapStateToProps`to see if the props for the wrapped component have been updated.

It does this by performing a shallow equality check on each value within the object individually, and will only trigger a re-render if one of those checks fails.

In the example below, if `state.todos` and the value returned from `getVisibleTodos()` do not change on successive calls to `connect`, then the component will not re-render .

```js
function mapStateToProps(state) {
  return {
    todos: state.todos, // prop value
    visibleTodos: getVisibleTodos(state) // selector
  }
}

export default connect(mapStateToProps)(TodoApp)
```

Conversely, in this next example (below), the component will _always_ re-render, as the value of `todos` is always a new object, regardless of whether or not its values change:

```js
// AVOID - will always cause a re-render
function mapStateToProps(state) {
  return {
    // todos always references a newly-created object
    todos: {
      all: state.todos,
      visibleTodos: getVisibleTodos(state)
    }
  }
}

export default connect(mapStateToProps)(TodoApp)
```

If the shallow equality check fails between the new values returned from `mapStateToProps` and the previous values that React-Redux kept a reference to, then a re-rendering of the component will be triggered.

#### Further Information

**Articles**

- [Practical Redux, Part 6: Connected Lists, Forms, and Performance](https://blog.isquaredsoftware.com/2017/01/practical-redux-part-6-connected-lists-forms-and-performance/)
- [React.js Pure Render Performance Anti-Pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.sb708slq6)
- [High Performance Redux Apps](https://somebody32.github.io/high-performance-redux/)

**Discussions**

- [#1816: Component connected to state with `mapStateToProps`](https://github.com/reduxjs/redux/issues/1816)
- [#300: Potential connect() optimization](https://github.com/reduxjs/react-redux/issues/300)

### Why will shallow equality checking not work with mutable objects?

Shallow equality checking cannot be used to detect if a function mutates an object passed into it if that object is mutable.

This is because two variables that reference the same object will _always_ be equal, regardless of whether the object’s values changes or not, as they're both referencing the same object. Thus, the following will always return true:

```js
function mutateObj(obj) {
  obj.key = 'newValue'
  return obj
}

const param = { key: 'originalValue' }
const returnVal = mutateObj(param)

param === returnVal
//> true
```

The shallow check of `param` and `returnValue` simply checks whether both variables reference the same object, which they do.`mutateObj()` may return a mutated version of `obj`, but it's still the same object as that passed in. The fact that its values have been changed within `mutateObj` matters not at all to a shallow check.

#### Further Information

**Articles**

- [Pros and Cons of using immutability with React.js](https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)

### Does shallow equality checking with a mutable object cause problems with Redux?

Shallow equality checking with a mutable object will not cause problems with Redux, but [it will cause problems with libraries that depend on the store, such as React-Redux](#shallow-checking-problems-with-react-redux).

Specifically, if the state slice passed to a reducer by `combineReducers` is a mutable object, the reducer can modify it directly and return it.

If it does, the shallow equality check that `combineReducers` performs will always pass, as the values of the state slice returned by the reducer may have been mutated, but the object itself has not - it’s still the same object that was passed to the reducer.

Accordingly, `combineReducers` will not set its `hasChanged` flag, even though the state has changed. If none of the other reducers return a new, updated state slice, the `hasChanged` flag will remain set to false, causing `combineReducers` to return the _existing_ root state object.

The store will still be updated with the new values for the root state, but because the root state object itself is still the same object, libraries that bind to Redux, such as React-Redux, will not be aware of the state’s mutation, and so will not trigger a wrapped component’s re-rendering.

#### Further Information

**Documentation**

- [Using Redux: Immutable Update Patterns](../usage/structuring-reducers/ImmutableUpdatePatterns.md)
- [Troubleshooting: Never mutate reducer arguments](../usage/Troubleshooting.md#never-mutate-reducer-arguments)

### Why does a reducer mutating the state prevent React-Redux from re-rendering a wrapped component?

If a Redux reducer directly mutates, and returns, the state object passed into it, the values of the root state object will change, but the object itself will not.

Because React-Redux performs a shallow check on the root state object to determine if its wrapped components need re-rendering or not, it will not be able to detect the state mutation, and so will not trigger a re-rendering.

#### Further Information

**Documentation**

- [Troubleshooting: My views aren’t updating when something changes outside of Redux](https://react-redux.js.org/troubleshooting#my-views-aren-t-updating-when-something-changes-outside-of-redux)

### Why does a selector mutating and returning a persistent object to `mapStateToProps` prevent React-Redux from re-rendering a wrapped component?

If one of the values of the props object returned from `mapStateToProps` is an object that persists across calls to `connect` (such as, potentially, the root state object), yet is directly mutated and returned by a selector function, React-Redux will not be able to detect the mutation, and so will not trigger a re-render of the wrapped component.

As we’ve seen, the values in the mutable object returned by the selector function may have changed, but the object itself has not, and shallow equality checking only compares the objects themselves, not their values.

For example, the following `mapStateToProps` function will never trigger a re-render:

```js
// State object held in the Redux store
const state = {
  user: {
    accessCount: 0,
    name: 'keith'
  }
}

// Selector function
const getUser = state => {
  ++state.user.accessCount // mutate the state object
  return state
}

// mapStateToProps
const mapStateToProps = state => ({
  // The object returned from getUser() is always
  // the same object, so this wrapped
  // component will never re-render, even though it's been
  // mutated
  userRecord: getUser(state)
})

const a = mapStateToProps(state)
const b = mapStateToProps(state)

a.userRecord === b.userRecord
//> true
```

Note that, conversely, if an _immutable_ object is used, the [component may re-render when it should not](#immutability-issues-with-react-redux).

#### Further Information

**Articles**

- [Practical Redux, Part 6: Connected Lists, Forms, and Performance](https://blog.isquaredsoftware.com/2017/01/practical-redux-part-6-connected-lists-forms-and-performance/)

**Discussions**

- [#1948: Is getMappedItems an anti-pattern in mapStateToProps?](https://github.com/reduxjs/redux/issues/1948)

### How does immutability enable a shallow check to detect object mutations?

If an object is immutable, any changes that need to be made to it within a function must be made to a _copy_ of the object.

This mutated copy is a _separate_ object from that passed into the function, and so when it is returned, a shallow check will identify it as being a different object from that passed in, and so will fail.

#### Further Information

**Articles**

- [Pros and Cons of using immutability with React.js](https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)

### How can immutability in your reducers cause components to render unnecessarily?

You cannot mutate an immutable object; instead, you must mutate a copy of it, leaving the original intact.

That’s perfectly OK when you mutate the copy, but in the context of a reducer, if you return a copy that _hasn’t_ been mutated, Redux’s `combineReducers` function will still think that the state needs to be updated, as you're returning an entirely different object from the state slice object that was passed in.

`combineReducers` will then return this new root state object to the store. The new object will have the same values as the current root state object, but because it's a different object, it will cause the store to be updated, which will ultimately cause all connected components to be re-rendered unnecessarily.

To prevent this from happening, you must _always return the state slice object that’s passed into a reducer if the reducer does not mutate the state._

#### Further Information

**Articles**

- [React.js pure render performance anti-pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.5hmnwygsy)
- [Building Efficient UI with React and Redux](https://www.toptal.com/react/react-redux-and-immutablejs)

### How can immutability in `mapStateToProps` cause components to render unnecessarily?

Certain immutable operations, such as an Array filter, will always return a new object, even if the values themselves have not changed.

If such an operation is used as a selector function in `mapStateToProps`, the shallow equality check that React-Redux performs on each value
in the props object that’s returned will always fail, as the selector is returning a new object each time.

As such, even though the values of that new object have not changed, the wrapped component will always be re-rendered,

For example, the following will always trigger a re-render:

```js
// A JavaScript array's 'filter' method treats the array as immutable,
// and returns a filtered copy of the array.
const getVisibleTodos = todos => todos.filter(t => !t.completed)

const state = {
  todos: [
    {
      text: 'do todo 1',
      completed: false
    },
    {
      text: 'do todo 2',
      completed: true
    }
  ]
}

const mapStateToProps = state => ({
  // getVisibleTodos() always returns a new array, and so the
  // 'visibleToDos' prop will always reference a different array,
  // causing the wrapped component to re-render, even if the array's
  // values haven't changed
  visibleToDos: getVisibleTodos(state.todos)
})

const a = mapStateToProps(state)
//  Call mapStateToProps(state) again with exactly the same arguments
const b = mapStateToProps(state)

a.visibleToDos
//> { "completed": false, "text": "do todo 1" }

b.visibleToDos
//> { "completed": false, "text": "do todo 1" }

a.visibleToDos === b.visibleToDos
//> false
```

Note that, conversely, if the values in your props object refer to mutable objects, [your component may not render when it should](#shallow-checking-stops-component-re-rendering).

#### Further Information

**Articles**

- [React.js pure render performance anti-pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.b8bpx1ncj)
- [Building Efficient UI with React and Redux](https://www.toptal.com/react/react-redux-and-immutablejs)
- [ImmutableJS: worth the price?](https://medium.com/@AlexFaunt/immutablejs-worth-the-price-66391b8742d4#.a3alci2g8)

## What approaches are there for handling data immutability? Do I have to use Immer?

You do not need to use Immer with Redux. Plain JavaScript, if written correctly, is perfectly capable of providing immutability without having to use an immutable-focused library.

However, guaranteeing immutability with JavaScript is difficult, and it can be easy to mutate an object accidentally, causing bugs in your app that are extremely difficult to locate. For this reason, using an immutable update utility library such as Immer can significantly improve the reliability of your app, and make your app’s development much easier.

#### Further Information

**Discussions**

- [#1185: Question: Should I use immutable data structures?](https://github.com/reduxjs/redux/issues/1422)
- [Introduction to Immer](https://immerjs.github.io/immer/)

## What are the issues with using plain JavaScript for immutable operations?

JavaScript was never designed to provide guaranteed immutable operations. Accordingly, there are several issues you need to be aware of if you choose to use it for your immutable operations in your Redux app.

### Accidental Object Mutation

With JavaScript, you can accidentally mutate an object (such as the Redux state tree) quite easily without realizing it. For example, updating deeply nested properties, creating a new _reference_ to an object instead of a new object, or performing a shallow copy rather than a deep copy, can all lead to inadvertent object mutations, and can trip up even the most experienced JavaScript coder.

To avoid these issues, ensure you follow the recommended [immutable update patterns for ES6](../usage/structuring-reducers/ImmutableUpdatePatterns.md).

### Verbose Code

Updating complex nested state trees can lead to verbose code that is tedious to write and difficult to debug.

### Poor Performance

Operating on JavaScript objects and arrays in an immutable way can be slow, particularly as your state tree grows larger.

Remember, to change an immutable object, you must mutate a _copy_ of it, and copying large objects can be slow as every property must be copied.

In contrast, immutable libraries such as Immer can employ structural sharing, which effectively returns a new object that reuses much of the existing object being copied from.

#### Further Information

**Documentation**

- [Immutable Update Patterns for ES6](../usage/structuring-reducers/ImmutableUpdatePatterns.md)

**Articles**

- [A deep dive into Clojure’s data structures](https://www.slideshare.net/mohitthatte/a-deep-dive-into-clojures-data-structures-euroclojure-2015)
- [JavaScript and Immutability](https://t4d.io/javascript-and-immutability/)
- [Immutable Javascript using ES6 and beyond](https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/)
- [Pros and Cons of using immutability with React.js - React Kung Fu](https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)

---
id: miscellaneous
title: Miscellaneous
sidebar_label: Miscellaneous
---

# Redux FAQ: Miscellaneous

## Table of Contents

- [Are there any larger, “real” Redux projects?](#are-there-any-larger-real-redux-projects)
- [How can I implement authentication in Redux?](#how-can-i-implement-authentication-in-redux)

## Miscellaneous

### Are there any larger, “real” Redux projects?

Yes, lots of them! To name just a few:

- [Twitter's mobile site](https://mobile.twitter.com/)
- [Wordpress's new admin page](https://github.com/Automattic/wp-calypso)
- [Firefox's new debugger](https://github.com/devtools-html/debugger.html)
- [The HyperTerm terminal application](https://github.com/zeit/hyperterm)

And many, many more! The Redux Addons Catalog has **[a list of Redux-based applications and examples](https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md)** that points to a variety of actual applications, large and small.

#### Further information

**Documentation**

- [Introduction: Examples](../introduction/Examples.md)

**Discussions**

- [Reddit: Large open source react/redux projects?](https://www.reddit.com/r/reactjs/comments/496db2/large_open_source_reactredux_projects/)
- [HN: Is there any huge web application built using Redux?](https://news.ycombinator.com/item?id=10710240)

### How can I implement authentication in Redux?

Authentication is essential to any real application. When going about authentication you must keep in mind that nothing changes with how you should organize your application and you should implement authentication in the same way you would any other feature. It is relatively straightforward:

1. Create action constants for `LOGIN_SUCCESS`, `LOGIN_FAILURE`, etc.

2. Create action creators that take in credentials, a flag that signifies whether authentication succeeded, a token, or an error message as the payload.

3. Create an async action creator with Redux Thunk middleware or any middleware you see fit to fire a network request to an API that returns a token if the credentials are valid. Then save the token in the local storage or show a response to the user if it failed. You can perform these side effects from the action creators you wrote in the previous step.

4. Create a reducer that returns the next state for each possible authentication case (`LOGIN_SUCCESS`, `LOGIN_FAILURE`, etc).

#### Further information

**Articles**

- [Authentication with JWT by Auth0](https://auth0.com/blog/2016/01/04/secure-your-react-and-redux-app-with-jwt-authentication/)
- [Tips to Handle Authentication in Redux](https://medium.com/@MattiaManzati/tips-to-handle-authentication-in-redux-2-introducing-redux-saga-130d6872fbe7)

**Examples**

- [react-redux-jwt-auth-example](https://github.com/joshgeller/react-redux-jwt-auth-example)

**Libraries**

- [Redux Addons Catalog: Use Cases - Authentication](https://github.com/markerikson/redux-ecosystem-links/blob/master/use-cases.md#authentication)

---
id: organizing-state
title: Organizing State
sidebar_label: Organizing State
---

# Redux FAQ: Organizing State

## Table of Contents

- [Redux FAQ: Organizing State](#redux-faq-organizing-state)
  - [Table of Contents](#table-of-contents)
  - [Organizing State](#organizing-state)
    - [Do I have to put all my state into Redux? Should I ever use React's `setState()`?](#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate)
      - [Further information](#further-information)
    - [Can I put functions, promises, or other non-serializable items in my store state?](#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)
      - [Further information](#further-information-1)
    - [How do I organize nested or duplicate data in my state?](#how-do-i-organize-nested-or-duplicate-data-in-my-state)
      - [Further information](#further-information-2)
    - [Should I put form state or other UI state in my store?](#should-i-put-form-state-or-other-ui-state-in-my-store)
      - [Further Information](#further-information-3)

## Organizing State

### Do I have to put all my state into Redux? Should I ever use React's `setState()`?

There is no “right” answer for this. Some users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as “is this dropdown currently open”, inside a component's internal state.

**_Using local component state is fine_**. As a developer, it is _your_ job to determine what kinds of state make up your application, and where each piece of state should live. Find a balance that works for you, and go with it.

Some common rules of thumb for determining what kind of data should be put into Redux:

- Do other parts of the application care about this data?
- Do you need to be able to create further derived data based on this original data?
- Is the same data being used to drive multiple components?
- Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
- Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
- Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?

There are a number of community packages that implement various approaches for storing per-component state in a Redux store instead, such as [redux-component](https://github.com/tomchentw/redux-component), [redux-react-local](https://github.com/threepointone/redux-react-local), and more. It's also possible to apply Redux's principles and concept of reducers to the task of updating local component state as well, along the lines of `this.setState( (previousState) => reducer(previousState, someAction))`.

#### Further information

**Articles**

- [When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)
- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
- [Finding `state`'s place with React and Redux](https://medium.com/@adamrackis/finding-state-s-place-with-react-and-redux-e9a586630172)
- [A Case for setState](https://medium.com/@zackargyle/a-case-for-setstate-1f1c47cd3f73)
- [How to handle state in React: the missing FAQ](https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c)
- [Where to Hold React Component Data: state, store, static, and this](https://medium.freecodecamp.com/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00)
- [The 5 Types of React Application State](http://jamesknelson.com/5-types-react-application-state/)
- [Shape Your Redux Store Like Your Database](https://hackernoon.com/shape-your-redux-store-like-your-database-98faa4754fd5)

**Discussions**

- [#159: Investigate using Redux for pseudo-local component state](https://github.com/reduxjs/redux/issues/159)
- [#1098: Using Redux in reusable React component](https://github.com/reduxjs/redux/issues/1098)
- [#1287: How to choose between Redux's store and React's state?](https://github.com/reduxjs/redux/issues/1287)
- [#1385: What are the disadvantages of storing all your state in a single immutable atom?](https://github.com/reduxjs/redux/issues/1385)
- [Twitter: Should I keep something in React component state?](https://twitter.com/dan_abramov/status/749710501916139520)
- [Twitter: Using a reducer to update a component](https://twitter.com/dan_abramov/status/736310245945933824)
- [React Forums: Redux and global state vs local state](https://discuss.reactjs.org/t/redux-and-global-state-vs-local-state/4187)
- [Reddit: "When should I put something into my Redux store?"](https://www.reddit.com/r/reactjs/comments/4w04to/when_using_redux_should_all_asynchronous_actions/d63u4o8)
- [Stack Overflow: Why is state all in one place, even state that isn't global?](https://stackoverflow.com/questions/35664594/redux-why-is-state-all-in-one-place-even-state-that-isnt-global)
- [Stack Overflow: Should all component state be kept in Redux store?](https://stackoverflow.com/questions/35328056/react-redux-should-all-component-states-be-kept-in-redux-store)

**Libraries**

- [Redux Addons Catalog: Component State](https://github.com/markerikson/redux-ecosystem-links/blob/master/component-state.md)

### Can I put functions, promises, or other non-serializable items in my store state?

It is highly recommended that you only put plain serializable objects, arrays, and primitives into your store. It's _technically_ possible to insert non-serializable items into the store, but doing so can break the ability to persist and rehydrate the contents of a store, as well as interfere with time-travel debugging.

If you are okay with things like persistence and time-travel debugging potentially not working as intended, then you are totally welcome to put non-serializable items into your Redux store. Ultimately, it's _your_ application, and how you implement it is up to you. As with many other things about Redux, just be sure you understand what tradeoffs are involved.

#### Further information

**Discussions**

- [#1248: Is it ok and possible to store a react component in a reducer?](https://github.com/reduxjs/redux/issues/1248)
- [#1279: Have any suggestions for where to put a Map Component in Flux?](https://github.com/reduxjs/redux/issues/1279)
- [#1390: Component Loading](https://github.com/reduxjs/redux/issues/1390)
- [#1407: Just sharing a great base class](https://github.com/reduxjs/redux/issues/1407)
- [#1793: React Elements in Redux State](https://github.com/reduxjs/redux/issues/1793)

### How do I organize nested or duplicate data in my state?

Data with IDs, nesting, or relationships should generally be stored in a “normalized” fashion: each object should be stored once, keyed by ID, and other objects that reference it should only store the ID rather than a copy of the entire object. It may help to think of parts of your store as a database, with individual “tables” per item type. Libraries such as [normalizr](https://github.com/paularmstrong/normalizr) and [redux-orm](https://github.com/tommikaikkonen/redux-orm) can provide help and abstractions in managing normalized data.

#### Further information

**Documentation**

- [Redux Fundamentals: Async Logic and Data Flow](../tutorials/fundamentals/part-6-async-logic.md)
- [Redux Fundamentals: Standard Redux Patterns](../tutorials/fundamentals/part-7-standard-patterns.md)
- [Examples: Real World example](../introduction/Examples.md#real-world)
- [Using Redux: Structuring Reducers - Prerequisite Concepts](../usage/structuring-reducers/PrerequisiteConcepts.md#normalizing-data)
- [Using Redux: Structuring Reducers - Normalizing State Shape](../usage/structuring-reducers/NormalizingStateShape.md)
- [Examples: Tree View](https://github.com/reduxjs/redux/tree/master/examples/tree-view)

**Articles**

- [High-Performance Redux](https://somebody32.github.io/high-performance-redux/)
- [Querying a Redux Store](https://medium.com/@adamrackis/querying-a-redux-store-37db8c7f3b0f)

**Discussions**

- [#316: How to create nested reducers?](https://github.com/reduxjs/redux/issues/316)
- [#815: Working with Data Structures](https://github.com/reduxjs/redux/issues/815)
- [#946: Best way to update related state fields with split reducers?](https://github.com/reduxjs/redux/issues/946)
- [#994: How to cut the boilerplate when updating nested entities?](https://github.com/reduxjs/redux/issues/994)
- [#1255: Normalizr usage with nested objects in React/Redux](https://github.com/reduxjs/redux/issues/1255)
- [#1269: Add tree view example](https://github.com/reduxjs/redux/pull/1269)
- [#1824: Normalising state and garbage collection](https://github.com/reduxjs/redux/issues/1824#issuecomment-228585904)
- [Twitter: state shape should be normalized](https://twitter.com/dan_abramov/status/715507260244496384)
- [Stack Overflow: How to handle tree-shaped entities in Redux reducers?](https://stackoverflow.com/questions/32798193/how-to-handle-tree-shaped-entities-in-redux-reducers)
- [Stack Overflow: How to optimize small updates to props of nested components in React + Redux?](https://stackoverflow.com/questions/37264415/how-to-optimize-small-updates-to-props-of-nested-component-in-react-redux)

### Should I put form state or other UI state in my store?

The [same rules of thumb for deciding what should go in the Redux store](#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate) apply for this question as well.

**Based on those rules of thumb, most form state doesn't need to go into Redux**, as it's probably not being shared between components. However, that decision is always going to be specific to you and your application. You might choose to keep some form state in Redux because you are editing data that came from the store originally, or because you do need to see the work-in-progress values reflected in other components elsewhere in the application. On the other hand, it may be a lot simpler to keep the form state local to the component, and only dispatch an action to put the data in the store once the user is done with the form.

Based on this, in most cases you probably don't need a Redux-based form management library either. We suggest trying these approaches, in this order:

- Even if the data is coming from the Redux store, start by writing your form logic by hand. It's likely this is all you'll need. (See [**Gosha Arinich's posts on working with forms in React**](https://goshakkk.name/on-forms-react/) for some excellent guidance on this.)
- If you decide that writing forms "manually" is too difficult, try a React-based form library like [Formik](https://github.com/jaredpalmer/formik) or [React-Final-Form](https://github.com/final-form/react-final-form).
- If you are absolutely sure you _must_ use a Redux-based form library because the other approaches aren't sufficient, then you may finally want to look at [Redux-Form](https://github.com/erikras/redux-form) and [React-Redux-Form](https://github.com/davidkpiano/react-redux-form).

If you are keeping form state in Redux, you should take some time to consider performance characteristics. Dispatching an action on every keystroke of a text input probably isn't worthwhile, and you may want to look into [ways to buffer keystrokes to keep changes local before dispatching](https://blog.isquaredsoftware.com/2017/01/practical-redux-part-7-forms-editing-reducers/). As always, take some time to analyze the overall performance needs of your own application.

Other kinds of UI state follow these rules of thumb as well. The classic example is tracking an `isDropdownOpen` flag. In most situations, the rest of the app doesn't care about this, so in most cases it should stay in component state. However, depending on your application, it may make sense to use Redux to [manage dialogs and other popups](https://blog.isquaredsoftware.com/2017/07/practical-redux-part-10-managing-modals/), tabs, expanding panels, and so on.

#### Further Information

**Articles**

- [Gosha Arinich: Writings on Forms in React](https://goshakkk.name/on-forms-react/)
- [Practical Redux, Part 6: Connected Lists and Forms](https://blog.isquaredsoftware.com/2017/01/practical-redux-part-6-connected-lists-forms-and-performance/)
- [Practical Redux, Part 7: Form Change Handling](https://blog.isquaredsoftware.com/2017/01/practical-redux-part-7-forms-editing-reducers/)
- [Practical Redux, Part 10: Managing Modals and Context Menus](https://blog.isquaredsoftware.com/2017/07/practical-redux-part-10-managing-modals/)
- [React/Redux Links: Redux UI Management](https://github.com/markerikson/react-redux-links/blob/master/redux-ui-management.md)

---
id: performance
title: Performance
sidebar_label: Performance
---

# Redux FAQ: Performance

## Table of Contents

- [Redux FAQ: Performance](#redux-faq-performance)
  - [Table of Contents](#table-of-contents)
  - [Performance](#performance)
    - [How well does Redux “scale” in terms of performance and architecture?](#how-well-does-redux-scale-in-terms-of-performance-and-architecture)
      - [Further information](#further-information)
    - [Won't calling “all my reducers” for each action be slow?](#wont-calling-all-my-reducers-for-each-action-be-slow)
      - [Further information](#further-information-1)
    - [Do I have to deep-clone my state in a reducer? Isn't copying my state going to be slow?](#do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow)
      - [Further information](#further-information-2)
    - [How can I reduce the number of store update events?](#how-can-i-reduce-the-number-of-store-update-events)
      - [Further information](#further-information-3)
    - [Will having “one state tree” cause memory problems? Will dispatching many actions take up memory?](#will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory)
      - [Further information](#further-information-4)
    - [Will caching remote data cause memory problems?](#will-caching-remote-data-cause-memory-problems)
      - [Further information](#further-information-5)

## Performance

### How well does Redux “scale” in terms of performance and architecture?

While there's no single definitive answer to this, most of the time this should not be a concern in either case.

The work done by Redux generally falls into a few areas: processing actions in middleware and reducers (including object duplication for immutable updates), notifying subscribers after actions are dispatched, and updating UI components based on the state changes. While it's certainly _possible_ for each of these to become a performance concern in sufficiently complex situations, there's nothing inherently slow or inefficient about how Redux is implemented. In fact, React Redux in particular is heavily optimized to cut down on unnecessary re-renders, and React-Redux v5 shows noticeable improvements over earlier versions.

Redux may not be as efficient out of the box when compared to other libraries. For maximum rendering performance in a React application, state should be stored in a normalized shape, many individual components should be connected to the store instead of just a few, and connected list components should pass item IDs to their connected child list items (allowing the list items to look up their own data by ID). This minimizes the overall amount of rendering to be done. Use of memoized selector functions is also an important performance consideration.

As for architecture, anecdotal evidence is that Redux works well for varying project and team sizes. Redux is currently used by hundreds of companies and thousands of developers, with several hundred thousand monthly installations from NPM. One developer reported:

> for scale, we have ~500 action types, ~400 reducer cases, ~150 components, 5 middlewares, ~200 actions, ~2300 tests

#### Further information

**Documentation**

- [Using Redux: Structuring Reducers - Normalizing State Shape](../usage/structuring-reducers/NormalizingStateShape.md)

**Articles**

- [How to Scale React Applications](https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/) (accompanying talk: [Scaling React Applications](https://vimeo.com/168648012))
- [High-Performance Redux](https://somebody32.github.io/high-performance-redux/)
- [Improving React and Redux Perf with Reselect](https://blog.rangle.io/react-and-redux-performance-with-reselect/)
- [Encapsulating the Redux State Tree](https://randycoulman.com/blog/2016/09/13/encapsulating-the-redux-state-tree/)
- [React/Redux Links: Performance - Redux](https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#redux-performance)

**Discussions**

- [#310: Who uses Redux?](https://github.com/reduxjs/redux/issues/310)
- [#1751: Performance issues with large collections](https://github.com/reduxjs/redux/issues/1751)
- [React Redux #269: Connect could be used with a custom subscribe method](https://github.com/reduxjs/react-redux/issues/269)
- [React Redux #407: Rewrite connect to offer an advanced API](https://github.com/reduxjs/react-redux/issues/407)
- [React Redux #416: Rewrite connect for better performance and extensibility](https://github.com/reduxjs/react-redux/pull/416)
- [Redux vs MobX TodoMVC Benchmark: #1](https://github.com/mweststrate/redux-todomvc/pull/1)
- [Reddit: What's the best place to keep the initial state?](https://www.reddit.com/r/reactjs/comments/47m9h5/whats_the_best_place_to_keep_the_initial_state/)
- [Reddit: Help designing Redux state for a single page app](https://www.reddit.com/r/reactjs/comments/48k852/help_designing_redux_state_for_a_single_page/)
- [Reddit: Redux performance issues with a large state object?](https://www.reddit.com/r/reactjs/comments/41wdqn/redux_performance_issues_with_a_large_state_object/)
- [Reddit: React/Redux for Ultra Large Scale apps](https://www.reddit.com/r/javascript/comments/49box8/reactredux_for_ultra_large_scale_apps/)
- [Twitter: Redux scaling](https://twitter.com/NickPresta/status/684058236828266496)
- [Twitter: Redux vs MobX benchmark graph - Redux state shape matters](https://twitter.com/dan_abramov/status/720219615041859584)
- [Stack Overflow: How to optimize small updates to props of nested components?](https://stackoverflow.com/questions/37264415/how-to-optimize-small-updates-to-props-of-nested-component-in-react-redux)
- [Chat log: React/Redux perf - updating a 10K-item Todo list](https://gist.github.com/markerikson/53735e4eb151bc228d6685eab00f5f85)
- [Chat log: React/Redux perf - single connection vs many connections](https://gist.github.com/markerikson/6056565dd65d1232784bf42b65f8b2ad)

### Won't calling “all my reducers” for each action be slow?

It's important to note that a Redux store really only has a single reducer function. The store passes the current state and dispatched action to that one reducer function, and lets the reducer handle things appropriately.

Obviously, trying to handle every possible action in a single function does not scale well, simply in terms of function size and readability, so it makes sense to split the actual work into separate functions that can be called by the top-level reducer. In particular, the common suggested pattern is to have a separate sub-reducer function that is responsible for managing updates to a particular slice of state at a specific key. The `combineReducers()` that comes with Redux is one of the many possible ways to achieve this. It's also highly suggested to keep your store state as flat and as normalized as possible. Ultimately, though, you are in charge of organizing your reducer logic any way you want.

However, even if you happen to have many different reducer functions composed together, and even with deeply nested state, reducer speed is unlikely to be a problem. JavaScript engines are capable of running a very large number of function calls per second, and most of your reducers are probably just using a `switch` statement and returning the existing state by default in response to most actions.

If you actually are concerned about reducer performance, you can use a utility such as [redux-ignore](https://github.com/omnidan/redux-ignore) or [reduxr-scoped-reducer](https://github.com/chrisdavies/reduxr-scoped-reducer) to ensure that only certain reducers listen to specific actions. You can also use [redux-log-slow-reducers](https://github.com/michaelcontento/redux-log-slow-reducers) to do some performance benchmarking.

#### Further information

**Discussions**

- [#912: Proposal: action filter utility](https://github.com/reduxjs/redux/issues/912)
- [#1303: Redux Performance with Large Store and frequent updates](https://github.com/reduxjs/redux/issues/1303)
- [Stack Overflow: State in Redux app has the name of the reducer](https://stackoverflow.com/questions/35667775/state-in-redux-react-app-has-a-property-with-the-name-of-the-reducer/35674297)
- [Stack Overflow: How does Redux deal with deeply nested models?](https://stackoverflow.com/questions/34494866/how-does-redux-deals-with-deeply-nested-models/34495397)

### Do I have to deep-clone my state in a reducer? Isn't copying my state going to be slow?

Immutably updating state generally means making shallow copies, not deep copies. Shallow copies are much faster than deep copies, because fewer objects and fields have to be copied, and it effectively comes down to moving some pointers around.

In addition, deep cloning state creates new references for every field. Since the React-Redux `connect` function relies on reference comparisons to determine if data has changed, this means that UI components will be forced to re-render unnecessarily even though the other data hasn't meaningfully changed.

However, you _do_ need to create a copied and updated object for each level of nesting that is affected. Although that shouldn't be particularly expensive, it's another good reason why you should keep your state normalized and shallow if possible.

> Common Redux misconception: you need to deeply clone the state. Reality: if something inside doesn't change, keep its reference the same!

#### Further information

**Documentation**

- [Using Redux: Structuring Reducers - Prerequisite Concepts](../usage/structuring-reducers/PrerequisiteConcepts.md)
- [Using Redux: Structuring Reducers - Immutable Update Patterns](../usage/structuring-reducers/ImmutableUpdatePatterns.md)

**Discussions**

- [#454: Handling big states in reducer](https://github.com/reduxjs/redux/issues/454)
- [#758: Why can't state be mutated?](https://github.com/reduxjs/redux/issues/758)
- [#994: How to cut the boilerplate when updating nested entities?](https://github.com/reduxjs/redux/issues/994)
- [Twitter: common misconception - deep cloning](https://twitter.com/dan_abramov/status/688087202312491008)
- [Cloning Objects in JavaScript](https://www.zsoltnagy.eu/cloning-objects-in-javascript/)

### How can I reduce the number of store update events?

Redux notifies subscribers after each successfully dispatched action (i.e. an action reached the store and was handled by reducers). In some cases, it may be useful to cut down on the number of times subscribers are called, particularly if an action creator dispatches multiple distinct actions in a row.

There are several addons that add batching capabilities in various ways, like: [redux-batched-actions](https://github.com/tshelburne/redux-batched-actions) (a higher-order reducer that lets you dispatch several actions as if it was one and “unpack” them in the reducer), [redux-batched-subscribe](https://github.com/tappleby/redux-batched-subscribe) (a store enhancer that lets you debounce subscriber calls for multiple dispatches), or [redux-batch](https://github.com/manaflair/redux-batch) (a store enhancer that handles dispatching an array of actions with a single subscriber notification).

For React-Redux specifically, starting in [React-Redux v7](https://github.com/reduxjs/react-redux/releases/tag/v7.0.1) a new `batch` public API is available to help minimize the number of React re-renders when dispatching actions outside of React event handlers. It wraps React's `unstable_batchedUpdate()` API, allows any React updates in an event loop tick to be batched together into a single render pass. React already uses this internally for its own event handler callbacks. This API is actually part of the renderer packages like ReactDOM and React Native, not the React core itself.

Since React-Redux needs to work in both ReactDOM and React Native environments, we've taken care of importing this API from the correct renderer at build time for our own use. We also now re-export this function publicly ourselves, renamed to `batch()`. You can use it to ensure that multiple actions dispatched outside of React only result in a single render update, like this:

```js
import { batch } from 'react-redux'

function myThunk() {
  return (dispatch, getState) => {
    // should only result in one combined re-render, not two
    batch(() => {
      dispatch(increment())
      dispatch(increment())
    })
  }
}
```

#### Further information

**Discussions**

- [#125: Strategy for avoiding cascading renders](https://github.com/reduxjs/redux/issues/125)
- [#542: Idea: batching actions](https://github.com/reduxjs/redux/issues/542)
- [#911: Batching actions](https://github.com/reduxjs/redux/issues/911)
- [#1813: Use a loop to support dispatching arrays](https://github.com/reduxjs/redux/pull/1813)
- [React Redux #263: Huge performance issue when dispatching hundreds of actions](https://github.com/reduxjs/react-redux/issues/263)
- [React-Redux #1177: Roadmap: v6, Context, Subscriptions, and Hooks](https://github.com/reduxjs/react-redux/issues/1177)

**Libraries**

- [Redux Addons Catalog: Store - Change Subscriptions](https://github.com/markerikson/redux-ecosystem-links/blob/master/store.md#store-change-subscriptions)

### Will having “one state tree” cause memory problems? Will dispatching many actions take up memory?

First, in terms of raw memory usage, Redux is no different than any other JavaScript library. The only difference is that all the various object references are nested together into one tree, instead of maybe saved in various independent model instances such as in Backbone. Second, a typical Redux app would probably have somewhat _less_ memory usage than an equivalent Backbone app because Redux encourages use of plain JavaScript objects and arrays rather than creating instances of Models and Collections. Finally, Redux only holds onto a single state tree reference at a time. Objects that are no longer referenced in that tree will be garbage collected, as usual.

Redux does not store a history of actions itself. However, the Redux DevTools do store actions so they can be replayed, but those are generally only enabled during development, and not used in production.

#### Further information

**Documentation**

- [Redux Fundamentals: Async Logic and Data Flow](../tutorials/fundamentals/part-6-async-logic.md)

**Discussions**

- [Stack Overflow: Is there any way to "commit" the state in Redux to free memory?](https://stackoverflow.com/questions/35627553/is-there-any-way-to-commit-the-state-in-redux-to-free-memory/35634004)
- [Stack Overflow: Can a Redux store lead to a memory leak?](https://stackoverflow.com/questions/39943762/can-a-redux-store-lead-to-a-memory-leak/40549594#40549594)
- [Stack Overflow: Redux and ALL the application state](https://stackoverflow.com/questions/42489557/redux-and-all-the-application-state/42491766#42491766)
- [Stack Overflow: Memory Usage Concern with Controlled Components](https://stackoverflow.com/questions/44956071/memory-usage-concern-with-controlled-components?noredirect=1&lq=1)
- [Reddit: What's the best place to keep initial state?](https://www.reddit.com/r/reactjs/comments/47m9h5/whats_the_best_place_to_keep_the_initial_state/)

### Will caching remote data cause memory problems?

The amount of memory available to JavaScript applications running in a browser is finite. Caching data will cause performance problems when the size of the cache approaches the amount of available memory. This tends to be a problem when the cached data is exceptionally large or the session is exceptionally long-running. And while it is good to be aware of the potential for these problems, this awareness should not discourage you from efficiently caching reasonable amounts of data.

Here are a few approaches to caching remote data efficiently:

First, only cache as much data as the user needs. If your application displays a paginated list of records, you don't necessarily need to cache the entire collection. Instead, cache what is visible to the user and add to that cache when the user has (or will soon have) an immediate need for more data.

Second, cache an abbreviated form of a record when possible. Sometimes a record includes data that is not relevant to the user. If the application does not depend on this data, it can be omitted from the cache.

Third, only cache a single copy of a record. This is especially important when records contain copies of other records. Cache a unique copy for each record and replace each nested copy with a reference. This is called normalization. Normalization is the preferred approach to storing relational data for [several reasons](../usage/structuring-reducers/NormalizingStateShape.md#designing-a-normalized-state), including efficient memory consumption.

#### Further information

**Discussions**

- [Stack Overflow: How to choose the Redux state shape for an app with list/detail views and pagination?](https://stackoverflow.com/questions/33940015/how-to-choose-the-redux-state-shape-for-an-app-with-list-detail-views-and-pagina)
- [Twitter: ...concerns over having "too much data in the state tree"...](https://twitter.com/acemarke/status/804071531844423683)
- [Advanced Redux entity normalization](https://medium.com/@dcousineau/advanced-redux-entity-normalization-f5f1fe2aefc5)

---
id: react-redux
title: React Redux
sidebar_label: React Redux
---

# Redux FAQ: React Redux

## Table of Contents

- [Redux FAQ: React Redux](#redux-faq-react-redux)
  - [Table of Contents](#table-of-contents)
  - [React Redux](#react-redux)
    - [Why should I use React-Redux?](#why-should-i-use-react-redux)
      - [Further Information](#further-information)
    - [Why isn't my component re-rendering, or my mapStateToProps running?](#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running)
      - [Further information](#further-information-1)
    - [Why is my component re-rendering too often?](#why-is-my-component-re-rendering-too-often)
      - [Further information](#further-information-2)
    - [How can I speed up my `mapStateToProps`?](#how-can-i-speed-up-my-mapstatetoprops)
      - [Further information](#further-information-3)
    - [Why don't I have `this.props.dispatch` available in my connected component?](#why-dont-i-have-thispropsdispatch-available-in-my-connected-component)
      - [Further information](#further-information-4)
    - [Should I only connect my top component, or can I connect multiple components in my tree?](#should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree)
      - [Further information](#further-information-5)
    - [How does Redux compare to the React Context API?](#how-does-redux-compare-to-the-react-context-api)
      - [Further information](#further-information-6)

## React Redux

### Why should I use React-Redux?

Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other.

If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code.

**React-Redux is the official Redux UI binding library for React**. If you are using Redux and React together, you should also use React-Redux to bind these two libraries.

While it is possible to write Redux store subscription logic by hand, doing so would become very repetitive. In addition, optimizing UI performance would require complicated logic.

The process of subscribing to the store, checking for updated data, and triggering a re-render can be made more generic and reusable. **A UI binding library like React-Redux handles the store interaction logic, so you don't have to write that code yourself.**

Overall, React-Redux encourages good React architecture, and implements complex performance optimizations for you. It is also kept up-to-date with the latest API changes from Redux and React.

#### Further Information

**Documentation**

- **[React-Redux docs: Why Use React-Redux?](https://react-redux.js.org/introduction/why-use-react-redux)**

### Why isn't my component re-rendering, or my mapStateToProps running?

Accidentally mutating or modifying your state directly is by far the most common reason why components do not re-render after an action has been dispatched. Redux expects that your reducers will update their state “immutably”, which effectively means always making copies of your data, and applying your changes to the copies. If you return the same object from a reducer, Redux assumes that nothing has been changed, even if you made changes to its contents. Similarly, React Redux tries to improve performance by doing shallow equality reference checks on incoming props in `shouldComponentUpdate`, and if all references are the same, `shouldComponentUpdate` returns `false` to skip actually updating your original component.

It's important to remember that whenever you update a nested value, you must also return new copies of anything above it in your state tree. If you have `state.a.b.c.d`, and you want to make an update to `d`, you would also need to return new copies of `c`, `b`, `a`, and `state`. This [state tree mutation diagram](http://arqex.com/wp-content/uploads/2015/02/trees.png) demonstrates how a change deep in a tree requires changes all the way up.

Note that “updating data immutably” does _not_ mean that you must use [Immer](https://github.com/immerjs/immer), although that is certainly an option. You can do immutable updates to plain JS objects and arrays using several different approaches:

- Copying objects using functions like `Object.assign()` or `_.extend()`, and array functions such as `slice()` and `concat()`
- The array spread operator in ES6, and the similar object spread operator that is proposed for a future version of JavaScript
- Utility libraries that wrap immutable update logic into simpler functions

#### Further information

**Documentation**

- [Troubleshooting](../usage/Troubleshooting.md)
- [React Redux: Troubleshooting](https://react-redux.js.org/troubleshooting)
- [Using Redux: Structuring Reducers - Prerequisite Concepts](../usage/structuring-reducers/PrerequisiteConcepts.md)
- [Using Redux: Structuring Reducers - Immutable Update Patterns](../usage/structuring-reducers/ImmutableUpdatePatterns.md)

**Articles**

- [Pros and Cons of Using Immutability with React](https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/)
- [React/Redux Links: Immutable Data](https://github.com/markerikson/react-redux-links/blob/master/immutable-data.md)

**Discussions**

- [#1262: Immutable data + bad performance](https://github.com/reduxjs/redux/issues/1262)
- [React Redux #235: Predicate function for updating component](https://github.com/reduxjs/react-redux/issues/235)
- [React Redux #291: Should mapStateToProps be called every time an action is dispatched?](https://github.com/reduxjs/react-redux/issues/291)
- [Stack Overflow: Cleaner/shorter way to update nested state in Redux?](https://stackoverflow.com/questions/35592078/cleaner-shorter-way-to-update-nested-state-in-redux)
- [Gist: state mutations](https://gist.github.com/amcdnl/7d93c0c67a9a44fe5761#gistcomment-1706579)

### Why is my component re-rendering too often?

React Redux implements several optimizations to ensure your actual component only re-renders when actually necessary. One of those is a shallow equality check on the combined props object generated by the `mapStateToProps` and `mapDispatchToProps` arguments passed to `connect`. Unfortunately, shallow equality does not help in cases where new array or object instances are created each time `mapStateToProps` is called. A typical example might be mapping over an array of IDs and returning the matching object references, such as:

```js
const mapStateToProps = state => {
  return {
    objects: state.objectIds.map(id => state.objects[id])
  }
}
```

Even though the array might contain the exact same object references each time, the array itself is a different reference, so the shallow equality check fails and React Redux would re-render the wrapped component.

The extra re-renders could be resolved by saving the array of objects into the state using a reducer, caching the mapped array using [Reselect](https://github.com/reduxjs/reselect), or implementing `shouldComponentUpdate` in the component by hand and doing a more in-depth props comparison using a function such as `_.isEqual`. Be careful to not make your custom `shouldComponentUpdate()` more expensive than the rendering itself! Always use a profiler to check your assumptions about performance.

For non-connected components, you may want to check what props are being passed in. A common issue is having a parent component re-bind a callback inside its render function, like `<Child onClick={this.handleClick.bind(this)} />`. That creates a new function reference every time the parent re-renders. It's generally good practice to only bind callbacks once in the parent component's constructor.

#### Further information

**Documentation**

- [FAQ: Performance - Scaling](./Performance.md#performance-scaling)

**Articles**

- [A Deep Dive into React Perf Debugging](https://benchling.engineering/deep-dive-react-perf-debugging/)
- [React.js pure render performance anti-pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f)
- [Improving React and Redux Performance with Reselect](https://blog.rangle.io/react-and-redux-performance-with-reselect/)
- [Encapsulating the Redux State Tree](https://randycoulman.com/blog/2016/09/13/encapsulating-the-redux-state-tree/)
- [React/Redux Links: React/Redux Performance](https://github.com/markerikson/react-redux-links/blob/master/react-performance.md)

**Discussions**

- [Stack Overflow: Can a React Redux app scale as well as Backbone?](https://stackoverflow.com/questions/34782249/can-a-react-redux-app-really-scale-as-well-as-say-backbone-even-with-reselect)

**Libraries**

- [Redux Addons Catalog: DevTools - Component Update Monitoring](https://github.com/markerikson/redux-ecosystem-links/blob/master/devtools.md#component-update-monitoring)

### How can I speed up my `mapStateToProps`?

While React Redux does work to minimize the number of times that your `mapStateToProps` function is called, it's still a good idea to ensure that your `mapStateToProps` runs quickly and also minimizes the amount of work it does. The common recommended approach is to create memoized “selector” functions using [Reselect](https://github.com/reduxjs/reselect). These selectors can be combined and composed together, and selectors later in a pipeline will only run if their inputs have changed. This means you can create selectors that do things like filtering or sorting, and ensure that the real work only happens if needed.

#### Further information

**Documentation**

- [Using Redux: Deriving Data with Selectors](../usage/deriving-data-selectors.md)

**Articles**

- [Improving React and Redux Performance with Reselect](https://blog.rangle.io/react-and-redux-performance-with-reselect/)

**Discussions**

- [#815: Working with Data Structures](https://github.com/reduxjs/redux/issues/815)
- [Reselect #47: Memoizing Hierarchical Selectors](https://github.com/reduxjs/reselect/issues/47)

### Why don't I have `this.props.dispatch` available in my connected component?

The `connect()` function takes two primary arguments, both optional. The first, `mapStateToProps`, is a function you provide to pull data from the store when it changes, and pass those values as props to your component. The second, `mapDispatchToProps`, is a function you provide to make use of the store's `dispatch` function, usually by creating pre-bound versions of action creators that will automatically dispatch their actions as soon as they are called.

If you do not provide your own `mapDispatchToProps` function when calling `connect()`, React Redux will provide a default version, which simply returns the `dispatch` function as a prop. That means that if you _do_ provide your own function, `dispatch` is _not_ automatically provided. If you still want it available as a prop, you need to explicitly return it yourself in your `mapDispatchToProps` implementation.

#### Further information

**Documentation**

- [React Redux API: connect()](https://react-redux.js.org/api/connect)

**Discussions**

- [React Redux #89: can i wrap multi actionCreators into one props with name?](https://github.com/reduxjs/react-redux/issues/89)
- [React Redux #145: consider always passing down dispatch regardless of what mapDispatchToProps does](https://github.com/reduxjs/react-redux/issues/145)
- [React Redux #255: this.props.dispatch is undefined if using mapDispatchToProps](https://github.com/reduxjs/react-redux/issues/255)
- [Stack Overflow: How to get simple dispatch from this.props using connect w/ Redux?](https://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux/34458710])

### Should I only connect my top component, or can I connect multiple components in my tree?

Early Redux documentation advised that you should only have a few connected components near the top of your component tree. However, time and experience has shown that such a component architecture generally requires a few components to know too much about the data requirements of all their descendants, and forces them to pass down a confusing number of props.

The current suggested best practice is to categorize your components as “presentational” or “container” components, and extract a connected container component wherever it makes sense:

> Emphasizing “one container component at the top” in Redux examples was a mistake. Don't take this as a maxim. Try to keep your presentation components separate. Create container components by connecting them when it's convenient. Whenever you feel like you're duplicating code in parent components to provide data for same kinds of children, time to extract a container. Generally as soon as you feel a parent knows too much about “personal” data or actions of its children, time to extract a container.

In fact, benchmarks have shown that more connected components generally leads to better performance than fewer connected components.

In general, try to find a balance between understandable data flow and areas of responsibility with your components.

#### Further information

**Documentation**

- [Fundamentals: UI and React](../tutorials/fundamentals/part-5-ui-and-react.md)
- [FAQ: Performance - Scaling](../faq/Performance.md#performance-scaling)

**Articles**

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [High-Performance Redux](https://somebody32.github.io/high-performance-redux/)
- [React/Redux Links: Architecture - Redux Architecture](https://github.com/markerikson/react-redux-links/blob/master/react-redux-architecture.md#redux-architecture)
- [React/Redux Links: Performance - Redux Performance](https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#redux-performance)

**Discussions**

- [Twitter: emphasizing “one container” was a mistake](https://twitter.com/dan_abramov/status/668585589609005056)
- [#419: Recommended usage of connect](https://github.com/reduxjs/redux/issues/419)
- [#756: container vs component?](https://github.com/reduxjs/redux/issues/756)
- [#1176: Redux+React with only stateless components](https://github.com/reduxjs/redux/issues/1176)
- [Stack Overflow: can a dumb component use a Redux container?](https://stackoverflow.com/questions/34992247/can-a-dumb-component-use-render-redux-container-component)

### How does Redux compare to the React Context API?

**Similarities**

Both Redux and React's Context API deal with "prop drilling". That said, they both allow you to pass data without having to pass the props through multiple layers of components. Internally, Redux _uses_ the React context API that allows it to pass the store along your component tree.

**Differences**

With Redux, you get the the power of [Redux Dev Tools Extension](https://github.com/zalmoxisus/redux-devtools-extension). It automatically logs every action your app performs, and it allows time traveling – you can click on any past action and jump to that point in time. Redux also supports the concept of middleware, where you may bind customized function calls on every action dispatch. Such examples include an automatic event logger, interception of certain actions, etc.

With React's Context API, you deal with a pair of components speaking only to each other. This gives you nice isolation between irrelevant data. You also have the flexibility of how you may use the data with your components, i.e., you can provide the state of a parent component, and you may pass context data as props to wrapped components.

There is a key difference in how Redux and React's Context treat data. Redux maintains the data of your whole app in a giant, stateful object. It deduces the changes of your data by running the reducer function you provide, and returns the next state that corresponds to every action dispatched. React Redux then optimizes component rendering and makes sure that each component re-renders only when the data it needs change. Context, on the other hand, does not hold any state. It is only a conduit for the data. To express changes in data you need to rely on the state of a parent component.

#### Further information

- [When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)
- [Redux vs. The React Context API](https://daveceddia.com/context-api-vs-redux/)
- [You Might Not Need Redux (But You Can’t Replace It With Hooks)](https://www.simplethread.com/cant-replace-redux-with-hooks/)

---
id: reducers
title: Reducers
sidebar_label: Reducers
---

# Redux FAQ: Reducers

## Table of Contents

- [Redux FAQ: Reducers](#redux-faq-reducers)
  - [Table of Contents](#table-of-contents)
  - [Reducers](#reducers)
    - [How do I share state between two reducers? Do I have to use `combineReducers`?](#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers)
      - [Further information](#further-information)
    - [Do I have to use the `switch` statement to handle actions?](#do-i-have-to-use-the-switch-statement-to-handle-actions)
      - [Further information](#further-information-1)

## Reducers

### How do I share state between two reducers? Do I have to use `combineReducers`?

The suggested structure for a Redux store is to split the state object into multiple “slices” or “domains” by key, and provide a separate reducer function to manage each individual data slice. This is similar to how the standard Flux pattern has multiple independent stores, and Redux provides the [`combineReducers`](../api/combineReducers.md) utility function to make this pattern easier. However, it's important to note that `combineReducers` is _not_ required—it is simply a utility function for the common use case of having a single reducer function per state slice, with plain JavaScript objects for the data.

Many users later want to try to share data between two reducers, but find that `combineReducers` does not allow them to do so. There are several approaches that can be used:

- If a reducer needs to know data from another slice of state, the state tree shape may need to be reorganized so that a single reducer is handling more of the data.
- You may need to write some custom functions for handling some of these actions. This may require replacing `combineReducers` with your own top-level reducer function. You can also use a utility such as [reduce-reducers](https://github.com/acdlite/reduce-reducers) to run `combineReducers` to handle most actions, but also run a more specialized reducer for specific actions that cross state slices.
- [Middleware with async logic](../tutorials/fundamentals/part-4-store.md#middleware) such as [redux-thunk](https://github.com/reduxjs/redux-thunk) have access to the entire state through `getState()`. An action creator can retrieve additional data from the state and put it in an action, so that each reducer has enough information to update its own state slice.

In general, remember that reducers are just functions—you can organize them and subdivide them any way you want, and you are encouraged to break them down into smaller, reusable functions (“reducer composition”). While you do so, you may pass a custom third argument from a parent reducer if a child reducer needs additional data to calculate its next state. You just need to make sure that together they follow the basic rules of reducers: `(state, action) => newState`, and update state immutably rather than mutating it directly.

#### Further information

**Documentation**

- [API: combineReducers](../api/combineReducers.md)
- [Using Redux: Structuring Reducers](../usage/structuring-reducers/StructuringReducers.md)

**Discussions**

- [#601: A concern on combineReducers, when an action is related to multiple reducers](https://github.com/reduxjs/redux/issues/601)
- [#1400: Is passing top-level state object to branch reducer an anti-pattern?](https://github.com/reduxjs/redux/issues/1400)
- [Stack Overflow: Accessing other parts of the state when using combined reducers?](https://stackoverflow.com/questions/34333979/accessing-other-parts-of-the-state-when-using-combined-reducers)
- [Stack Overflow: Reducing an entire subtree with redux combineReducers](https://stackoverflow.com/questions/34427851/reducing-an-entire-subtree-with-redux-combinereducers)
- [Sharing State Between Redux Reducers](https://invalidpatent.wordpress.com/2016/02/18/sharing-state-between-redux-reducers/)

### Do I have to use the `switch` statement to handle actions?

No. You are welcome to use any approach you'd like to respond to an action in a reducer. The `switch` statement is the most common approach, but it's fine to use `if` statements, a lookup table of functions, or to create a function that abstracts this away. In fact, while Redux does require that action objects contain a `type` field, your reducer logic doesn't even have to rely on that to handle the action. That said, the standard approach is definitely using a switch statement or a lookup table based on `type`.

#### Further information

**Documentation**

- [Using Redux: Reducing Boilerplate](../usage/ReducingBoilerplate.md)
- [Using Redux: Structuring Reducers - Splitting Reducer Logic](../usage/structuring-reducers/SplittingReducerLogic.md)

**Discussions**

- [#883: take away the huge switch block](https://github.com/reduxjs/redux/issues/883)
- [#1167: Reducer without switch](https://github.com/reduxjs/redux/issues/1167)

---
id: store-setup
title: Store Setup
sidebar_label: Store Setup
---

# Redux FAQ: Store Setup

## Table of Contents

- [Redux FAQ: Store Setup](#redux-faq-store-setup)
  - [Table of Contents](#table-of-contents)
  - [Store Setup](#store-setup)
    - [Can or should I create multiple stores? Can I import my store directly, and use it in components myself?](#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself)
      - [Further information](#further-information)
    - [Is it OK to have more than one middleware chain in my store enhancer? What is the difference between `next` and `dispatch` in a middleware function?](#is-it-ok-to-have-more-than-one-middleware-chain-in-my-store-enhancer-what-is-the-difference-between-next-and-dispatch-in-a-middleware-function)
      - [Further information](#further-information-1)
    - [How do I subscribe to only a portion of the state? Can I get the dispatched action as part of the subscription?](#how-do-i-subscribe-to-only-a-portion-of-the-state-can-i-get-the-dispatched-action-as-part-of-the-subscription)
      - [Further information](#further-information-2)

## Store Setup

### Can or should I create multiple stores? Can I import my store directly, and use it in components myself?

The original Flux pattern describes having multiple “stores” in an app, each one holding a different area of domain data. This can introduce issues such as needing to have one store “`waitFor`” another store to update. This is not necessary in Redux because the separation between data domains is already achieved by splitting a single reducer into smaller reducers.

As with several other questions, it is _possible_ to create multiple distinct Redux stores in a page, but the intended pattern is to have only a single store. Having a single store enables using the Redux DevTools, makes persisting and rehydrating data simpler, and simplifies the subscription logic.

Some valid reasons for using multiple stores in Redux might include:

- Solving a performance issue caused by too frequent updates of some part of the state, when confirmed by profiling the app.
- Isolating a Redux app as a component in a bigger application, in which case you might want to create a store per root component instance.

However, creating new stores shouldn't be your first instinct, especially if you come from a Flux background. Try reducer composition first, and only use multiple stores if it doesn't solve your problem.

Similarly, while you _can_ reference your store instance by importing it directly, this is not a recommended pattern in Redux. If you create a store instance and export it from a module, it will become a singleton. This means it will be harder to isolate a Redux app as a component of a larger app, if this is ever necessary, or to enable server rendering, because on the server you want to create separate store instances for every request.

With [React Redux](https://github.com/reduxjs/react-redux), the wrapper classes generated by the `connect()` function do actually look for `props.store` if it exists, but it's best if you wrap your root component in `<Provider store={store}>` and let React Redux worry about passing the store down. This way components don't need to worry about importing a store module, and isolating a Redux app or enabling server rendering is much easier to do later.

#### Further information

**Documentation**

- [API: Store](../api/Store.md)

**Discussions**

- [#1346: Is it bad practice to just have a 'stores' directory?](https://github.com/reduxjs/redux/issues/1436)
- [Stack Overflow: Redux multiple stores, why not?](https://stackoverflow.com/questions/33619775/redux-multiple-stores-why-not)
- [Stack Overflow: Accessing Redux state in an action creator](https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator)
- [Gist: Breaking out of Redux paradigm to isolate apps](https://gist.github.com/gaearon/eeee2f619620ab7b55673a4ee2bf8400)

### Is it OK to have more than one middleware chain in my store enhancer? What is the difference between `next` and `dispatch` in a middleware function?

Redux middleware act like a linked list. Each middleware function can either call `next(action)` to pass an action along to the next middleware in line, call `dispatch(action)` to restart the processing at the beginning of the list, or do nothing at all to stop the action from being processed further.

This chain of middleware is defined by the arguments passed to the `applyMiddleware` function used when creating a store. Defining multiple chains will not work correctly, as they would have distinctly different `dispatch` references and the different chains would effectively be disconnected.

#### Further information

**Documentation**

- [Redux Fundamentals: Store - Middleware](../tutorials/fundamentals/part-4-store.md#middleware)
- [API: applyMiddleware](../api/applyMiddleware.md)

**Discussions**

- [#1051: Shortcomings of the current applyMiddleware and composing createStore](https://github.com/reduxjs/redux/issues/1051)
- [Understanding Redux Middleware](https://medium.com/@meagle/understanding-87566abcfb7a)
- [Exploring Redux Middleware](https://blog.krawaller.se/posts/exploring-redux-middleware/)

### How do I subscribe to only a portion of the state? Can I get the dispatched action as part of the subscription?

Redux provides a single `store.subscribe` method for notifying listeners that the store has updated. Listener callbacks do not receive the current state as an argument—it is simply an indication that _something_ has changed. The subscriber logic can then call `getState()` to get the current state value.

This API is intended as a low-level primitive with no dependencies or complications, and can be used to build higher-level subscription logic. UI bindings such as React Redux can create a subscription for each connected component. It is also possible to write functions that can intelligently compare the old state vs the new state, and execute additional logic if certain pieces have changed. Examples include [redux-watch](https://github.com/jprichardson/redux-watch), [redux-subscribe](https://github.com/ashaffer/redux-subscribe) and [redux-subscriber](https://github.com/ivantsov/redux-subscriber) which offer different approaches to specifying subscriptions and handling changes.

The new state is not passed to the listeners in order to simplify implementing store enhancers such as the Redux DevTools. In addition, subscribers are intended to react to the state value itself, not the action. Middleware can be used if the action is important and needs to be handled specifically.

#### Further information

**Documentation**

- [Fundamentals: Store](../tutorials/fundamentals/part-4-store.md)
- [API: Store](../api/Store.md)

**Discussions**

- [#303: subscribe API with state as an argument](https://github.com/reduxjs/redux/issues/303)
- [#580: Is it possible to get action and state in store.subscribe?](https://github.com/reduxjs/redux/issues/580)
- [#922: Proposal: add subscribe to middleware API](https://github.com/reduxjs/redux/issues/922)
- [#1057: subscribe listener can get action param?](https://github.com/reduxjs/redux/issues/1057)
- [#1300: Redux is great but major feature is missing](https://github.com/reduxjs/redux/issues/1300)

**Libraries**

- [Redux Addons Catalog: Store Change Subscriptions](https://github.com/markerikson/redux-ecosystem-links/blob/master/store.md#store-change-subscriptions)

