# [React: Use Default Props](https://learn.freecodecamp.org/front-end-libraries/react/use-default-props)

React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare `MyComponent.defaultProps = { location: 'San Francisco' }`, you have defined a location prop that's set to the string `San Francisco`, unless you specify otherwise. React assigns default props if props are undefined, but if you pass `null` as the value for a prop, it will remain `null`.

---

The code editor shows a `ShoppingCart` component. Define default props on this component which specify a prop `items` with a value of `0`.

## Setup
```jsx
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// change code below this line
```

## Solution
```jsx
ShoppingCart.defaultProps = { items: 0 }
```