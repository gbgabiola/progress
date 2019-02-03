# [Bootstrap: Create a Class to Target with jQuery Selectors](https://learn.freecodecamp.org/front-end-libraries/bootstrap/create-a-class-to-target-with-jquery-selectors)

Not every class needs to have corresponding CSS. Sometimes we create classes just for the purpose of selecting these elements more easily using jQuery.

Give each of your `button` elements the class `target`.

## Setup
```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
```

## Solution
```html
<button class="btn btn-default target"></button>
<button class="btn btn-default target"></button>
<button class="btn btn-default target"></button>

<button class="btn btn-default target"></button>
<button class="btn btn-default target"></button>
<button class="btn btn-default target"></button>
```