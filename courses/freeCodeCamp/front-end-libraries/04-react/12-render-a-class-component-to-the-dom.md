# [React: Render a Class Component to the DOM](https://learn.freecodecamp.org/front-end-libraries/react/render-a-class-component-to-the-dom)

You may remember using the ReactDOM API in an earlier challenge to render JSX elements to the DOM. The process for rendering React components will look very similar. The past few challenges focused on components and composition, so the rendering was done for you behind the scenes. However, none of the React code you write will render to the DOM without making a call to the ReactDOM API.

Here's a refresher on the syntax: `ReactDOM.render(componentToRender, targetNode)`. The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.

React components are passed into `ReactDOM.render()` a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example `ReactDOM.render(<ComponentToRender />, targetNode)`. You use this syntax for both ES6 class components and functional components.

---

Both the `Fruits` and `Vegetables` components are defined for you behind the scenes. Render both components as children of the `TypesOfFood` component, then render `TypesOfFood` to the DOM. There is a `div` with `id='challenge-node'` available for you to use.

## Setup
```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}

        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
```

## Solution
```jsx
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
```