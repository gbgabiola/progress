# [React: Review Using Props with Stateless Functional Components](https://learn.freecodecamp.org/front-end-libraries/react/review-using-props-with-stateless-functional-components)

Except for the last challenge, you've been passing props to stateless functional components. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props. You may be wondering what state is, and the next challenge will cover it in more detail. Before that, here's a review of the terminology for components.

A _stateless functional component_ is any function you write which accepts props and returns JSX. A _stateless component_, on the other hand, is a class that extends `React.Component`, but does not use internal state (covered in the next challenge). Finally, a _stateful component_ is any component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.

A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

---

The code editor has a `CampSite` component that renders a `Camper` component as a child. Define the `Camper` component and assign it default props of `{ name: 'CamperBot' }`. Inside the `Camper` component, render any code that you want, but make sure to have one `p` element that includes only the `name` value that is passed in as a `prop`. Finally, define `propTypes` on the `Camper` component to require `name` to be provided as a prop and verify that it is of type `string`.

## Setup
```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line
```

## Solution
```jsx
const Camper = props => (<p>{props.name}</p>);

Camper.defaultProps = {
  name: 'CamperBot'
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};
```