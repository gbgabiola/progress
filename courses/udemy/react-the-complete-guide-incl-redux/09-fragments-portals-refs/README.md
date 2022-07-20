# Fragments, Portals & Refs


## JSX Limitations & Workarounds

- Limitation: Cannot return more than one root JSX element
  - Solution: Always wrap Adjacent Elements


## React Fragments

- New Problem: `<div>` Soup
  - Solution: Create a wrapper component
  - Or use the React Fragment (`<>`)
    - It's an empty wrapper, it doesn't render any HTML element to the DOM


## Refs

- **State** is not necessary if you just need to read the value and not planning to change anything
- Using State as a key logger is not great
- **Refs** are better if purpose is just to read the value
