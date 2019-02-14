# [React: Create a Component with Composition](https://learn.freecodecamp.org/front-end-libraries/react/create-a-component-with-composition)

Now we will look at how we can compose multiple React components together. Imagine you are building an App and have created three components, a `Navbar`, `Dashboard`, and `Footer`.

To compose these components together, you could create an `App` _parent_ component which renders each of these three components as _children_. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the `render` method you could write:

```jsx
return (
<App>
  <Navbar />
  <Dashboard />
  <Footer />
</App>
)
```

When React encounters a custom HTML tag that references another component (a component name wrapped in `< />` like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the `App` component and the `Navbar`, `Dashboard`, and `Footer`.

---

In the code editor, there is a simple functional component called `ChildComponent` and a React component called `ParentComponent`. Compose the two together by rendering the `ChildComponent` within the `ParentComponent`. Make sure to close the `ChildComponent` tag with a forward slash.

**Note:** `ChildComponent` is defined with an ES6 arrow function because this is a very common practice when using React. However, know that this is just a function. If you aren't familiar with the arrow function syntax, please refer to the JavaScript section.

## Setup
```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }

        { /* change code above this line */ }
      </div>
    );
  }
};
```

## Solution
```jsx
<ChildComponent />
```