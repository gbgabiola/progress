# [Sass: Apply a Style Until a Condition is Met with @while](https://learn.freecodecamp.org/front-end-libraries/sass/apply-a-style-until-a-condition-is-met-with-while)

The `@while` directive is an option with similar functionality to the JavaScript `while` loop. It creates CSS rules until a condition is met.

The `@for` challenge gave an example to create a simple grid system. This can also work with `@while`.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

First, define a variable `$x` and set it to 1. Next, use the `@while` directive to create the grid system while `$x` is less than 13.

After setting the CSS rule for `width`, `$x` is incremented by 1 to avoid an infinite loop.

---

Use `@while` to create a series of classes with different `font-sizes`.

There should be 10 different classes from `text-1` to `text-10`. Then set `font-size` to 5px multiplied by the current index number. Make sure to avoid an infinite loop!

## Setup
```html
<style type='text/sass'>
  
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
<p class="text-6">Hello</p>
<p class="text-7">Hello</p>
<p class="text-8">Hello</p>
<p class="text-9">Hello</p>
<p class="text-10">Hello</p>
```

## Solution
```scss
$text: 1;
@while $text < 11 {
  .text-#{$text} { font-size: 5px * $text; }
  $text: $text + 1;
}
```