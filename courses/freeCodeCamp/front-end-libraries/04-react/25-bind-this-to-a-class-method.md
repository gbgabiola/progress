# [React: Bind 'this' to a Class Method](https://learn.freecodecamp.org/front-end-libraries/react/bind-this-to-a-class-method)

In addition to setting and updating `state`, you can also define methods for your component class. A class method typically needs to use the `this` keyword so it can access properties on the class (such as `state` and props) inside the scope of the method. There are a few ways to allow your class methods to access `this`.

One common way is to explicitly bind `this` in the constructor so `this` becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used `this.handleClick = this.handleClick.bind(this)` for its `handleClick` method in the constructor. Then, when you call a function like `this.setState()` within your class method, `this` refers to the class and will not be `undefined`.

**Note:** The `this` keyword is one of the most confusing aspects of JavaScript but it plays an important role in React. Although its behavior here is totally normal, these lessons aren't the place for an in-depth review of `this` so please refer to other lessons if the above is confusing!


The code editor has a component with a `state` that keeps track of an item count. It also has a method which allows you to increment this item count. However, the method doesn't work because it's using the `this` keyword that is undefined. Fix it by explicitly binding `this` to the `addItem()` method in the component's constructor.

Next, add a click handler to the `button` element in the render method. It should trigger the `addItem()` method when the button receives a click event. Remember that the method you pass to the `onClick` handler needs curly braces because it should be interpreted directly as JavaScript.

Once you complete the above steps you should be able to click the button and see the item count increment in the HTML.

## Setup
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // change code below this line

    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};
```

## Solution
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addItem}>Click Me</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
};
```