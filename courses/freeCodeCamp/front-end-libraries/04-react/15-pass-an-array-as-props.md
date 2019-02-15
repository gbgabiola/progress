# [React: Pass an Array as Props](https://learn.freecodecamp.org/front-end-libraries/react/pass-an-array-as-props)

The last challenge demonstrated how to pass information from a parent component to a child component as `props` or properties. This challenge looks at how arrays can be passed as `props`. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

```jsx
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```

The child component then has access to the array property `colors`. Array methods such as `join()` can be used when accessing the property.

```jsx
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
```

This will join all `colors` array items into a comma separated string and produce:

```jsx
<p>green, blue, red</p>
```

Later, we will learn about other common methods to render arrays of data in React.

---

There are `List` and `ToDo` components in the code editor. When rendering each `List` from the `ToDo` component, pass in a `tasks` property assigned to an array of to-do tasks, for example `["walk dog", "workout"]`. Then access this `tasks` array in the `List` component, showing its value within the `p` element. Use `join(", ")` to display the `props.tasksarray` in the `p` element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.

## Setup
```jsx
const List= (props) => {
  { /* change code below this line */ }
  return <p>{}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List/>
        <h2>Tomorrow</h2>
        <List/>
        { /* change code above this line */ }
      </div>
    );
  }
};
```

## Solution
```jsx
const List= (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["overview for full stack", "start learning programming"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Schedule the lists of important concepts", "Learn each concept", "Apply the concept into a application"]} />
      </div>
    );
  }
};
```