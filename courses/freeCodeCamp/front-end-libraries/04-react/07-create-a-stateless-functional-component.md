# [React: Create a Stateless Functional Component](https://learn.freecodecamp.org/front-end-libraries/react/create-a-stateless-functional-component)

Components are the core of React. Everything in React is a component and here you will learn how to create one.

There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a _stateless functional component_. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We'll cover the second way to create a React component in the next challenge.)

To create a component with a function, you simply write a JavaScript function that returns either JSX or `null`. One important thing to note is that React requires your function name to begin with a capital letter. Here's an example of a stateless functional component that assigns an HTML class in JSX:

```jsx
// After being transpiled, the <div> will have a CSS class of 'customClass'
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.

---

The code editor has a function called `MyComponent`. Complete this function so it returns a single `div` element which contains some string of text.

**Note:** The text is considered a child of the `div` element, so you will not be able to use a self-closing tag.

## Setup
```jsx
const MyComponent = function() {
  // change code below this line

  // change code above this line
}
```

## Solution
```jsx
return (
  <div>This is a text</div>
);
```