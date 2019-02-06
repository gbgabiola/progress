# [jQuery: Target Elements by id Using jQuery](https://learn.freecodecamp.org/front-end-libraries/jquery/target-elements-by-id-using-jquery)

You can also target elements by their id attributes.

First target your `button` element with the id `target3` by using the `$("#target3")` selector.

Note that, just like with CSS declarations, you type a `#` before the id's name.

Then use jQuery's `.addClass()` function to add the classes `animated` and `fadeOut`.

Here's how you'd make the `button` element with the id `target6` fade out:

```js
$("#target6").addClass("animated fadeOut").
```

## Setup
```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");

  });
</script>

<!-- Only change code above this line. -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

## Solution
```js
$('#target3').addClass('animated fadeOut');
```