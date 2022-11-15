# Advanced: Handling Side Effects, Using Reducers & Using the Context API

- React library main job
  - Evaluate & Render JSX
  - Manage State & Props
  - React to (User) Events & Input
  - Re-evaluate Component upon State & Prop Changes
  - This all is "baked into" React via the "tools" and its features, i.e., `useState()` Hook, Props, etc.
- Side Effects: Anything Else
  - Store Data in Browser Storage
  - Sent Http Requests to Backend Servers
  - Set & Manage Timers
  - These Tasks **must happen outside of the normal component evaluation** and render cycle, especially since they might block/delay rendering, e.g., Http requests


## Handling Side Effects with the `useEffect()` Hook

```js
useEffect(() => { ... }, [dependencies]);
```

- A function that should be executed every component evaluation IF the specified dependencies changed
- Dependencies of this effect, the function only runs if the dependencies changed


## useReducer Hook

- More complex state: multiple states, multiple ways of changing it or dependencies to other states
  - `useState()` becomes hard or error prone to use
  - `useReducer()` can be used as replacement for `useState()` for **more powerful state management**

## React Context API

### Component Trees & Component Dependencies

- `<App />`
  - `<Auth />`
    - `<LoginForm />` (**Login**)
  - `<Shop />` (**Login**)
    - `<Products />`
      - `<Product />` (**Add to Cart**)
  - `<Cart />` (**Login**, **Add to Cart**)
- Component-wide, "behind-the-scenes" State Storage
