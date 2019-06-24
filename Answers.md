1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter and concat although map and filter seem the most used?

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The "store" is the single truth because it holds App level state for the whole application. That way, state is not managed across various components, but in a central store. This is why it's referred to as a single source of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is when using something like Redux of the context hook.

1.  What is middleware?

Middleware is used to take care of logging in and authentication of our application.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It is for async calls so we can display something like a spinner while data is being fetched.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()
