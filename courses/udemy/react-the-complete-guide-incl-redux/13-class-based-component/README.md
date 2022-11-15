# An Alternative Way of Building Components - Class Based Components

- state
  - must always be an object
  - has to be named "**`state`**"


## Class-based Component Lifecycle

- Side-effects in Functional Components: `useEffect()`
- Class-based Components can't use React Hooks!
- `componentDidMount()` called once component mounted (was evaluated & rendered)
  - equivalent to `useEffect(..., [])`
- `componentDidUpdate()` called once component updated (was evaluated & rendered)
  - equivalent to `useEffect(..., [someValue])`
- `componentWillUnmount()` called right before component is unmounted (removed from DOM)
  - equivalent to `useEffect(() => { return () => {...}}, [])`
