# [Bootstrap: Label Bootstrap Wells](https://learn.freecodecamp.org/front-end-libraries/bootstrap/label-bootstrap-wells)

For the sake of clarity, let's label both of our wells with their ids.

Above your left-well, inside its `col-xs-6` div element, add a `h4` element with the text `#left-well`.

Above your right-well, inside its `col-xs-6` div element, add a `h4` element with the text `#right-well`.

## Setup
```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">

      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

## Solution
```html
<div class="col-xs-6">
  <h4>#left-well</h4>
</div>

<div class="col-xs-6">
  <h4>#right-well</h4>
</div>
```