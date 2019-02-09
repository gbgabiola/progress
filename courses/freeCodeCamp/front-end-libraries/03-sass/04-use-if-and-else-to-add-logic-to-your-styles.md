# [Sass: Use @if and @else to Add Logic To Your Styles](https://learn.freecodecamp.org/front-end-libraries/sass/use-if-and-else-to-add-logic-to-your-styles)

The `@if` directive in Sass is useful to test for a specific case - it works just like the `if` statement in JavaScript.

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

And just like in JavaScript, `@else if` and `@else` test for more conditions:

```scss
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

---

Create a `mixin` called `border-stroke` that takes a parameter `$val`. The `mixin` should check for the following conditions using `@if`, `@else if`, and `@else`:

```
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
none - no border
```

## Setup
```html
<style type='text/sass'>
  
  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }  
</style>

<div id="box"></div>
```

## Solution
```scss
@mixin border-stroke($val) {
  @if $val == light {
    border: 1px solid black;
  }
  @else if $val == medium {
    border: 3px solid black;
  }
  @else if $val == heavy {
    border: 6px solid black;
  }
  @else {
    border: none;
  }
}
```