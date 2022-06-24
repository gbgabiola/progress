# React State  & Working with Event Handlers

- Handling Events
- Updating the UI & Working with "State"
- A Closer Look At Components & State

- Adding listener
  - Imperative way, e.g., `document.getElementById('root').addEventListener()
  - React way
    - Create a function before the `return`, which passed as a value to the prop events
    - Avoid Inline functions for the value of prop events
- React exposes all default events as props which usually starts with _on_, e.g., `onClick`
- **Note**: name the function which ends with _Handler_ if triggered upon an event, e.g., `clickHandler`
- **State** is a key concept in React
  - `useState` hook is a function which changes to the values should reflect on the component function being called again
  - Return an array
    - 1st element: Current state value
    - 2nd element: Updating function
  - Array destructuring can be used, e.g., `const [title, setTitle] = useState(props.title)`
  - State is separate on a per component instance basis
  - State can be update with:
    - **User events**, e..g, _click_
    - Http response
    - Timer, e.g., `setTimeout()`
- React hooks must only be called inside a component functions
- `event` object is automatically passed as parameter to the event Handler
  - `value` property holds the current value from the input
