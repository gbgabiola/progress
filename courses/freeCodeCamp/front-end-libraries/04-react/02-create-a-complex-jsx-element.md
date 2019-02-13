# [React: Create a Complex JSX Element](https://learn.freecodecamp.org/front-end-libraries/react/create-a-complex-jsx-element)

The last challenge was a simple example of JSX, but JSX can represent more complex HTML as well.

One important thing to know about nested JSX is that it must return a single element.

This one parent element would wrap all of the other levels of nested elements.

For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

Here's an example:

**Valid JSX:**
```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

**Invalid JSX:**
```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

---

Define a new constant `JSX` that renders a `div` which contains the following elements in order:

An `h1`, `a` `p`, and an unordered list that contains three `li` items. You can include any text you want within each element.

**Note:** When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. Also notice this challenge uses a `div` tag to wrap all the child elements within a single parent element. If you remove the `div`, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in React components.

## Setup
```jsx
// write your code here
```

## Solution
```jsx
const JSX = (
  <div>
    <h1>I am a Full Stack Developer</h1>
    <p>I make:</p>
    <ul>
      <li>Websites</li>
      <li>Web Applications</li>
      <li>Software</li>
    </ul>
  </div>
);
```