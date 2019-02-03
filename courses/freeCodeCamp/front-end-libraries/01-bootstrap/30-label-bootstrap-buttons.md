# [Bootstrap: Label Bootstrap Buttons](https://learn.freecodecamp.org/front-end-libraries/bootstrap/label-bootstrap-buttons)

Just like we labeled our wells, we want to label our buttons.

Give each of your `button` elements text that corresponds to its `id`'s selector.

## Setup
```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
      </div>
    </div>
  </div>
</div>
```

## Solution
```html
<button class="btn btn-default target" id="target1">#target1</button>
<button class="btn btn-default target" id="target2">#target2</button>
<button class="btn btn-default target" id="target3">#target3</button>

<button class="btn btn-default target" id="target4">#target4</button>
<button class="btn btn-default target" id="target5">#target5</button>
<button class="btn btn-default target" id="target6">#target6</button>
```