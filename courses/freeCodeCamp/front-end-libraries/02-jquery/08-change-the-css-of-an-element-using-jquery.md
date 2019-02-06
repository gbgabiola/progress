# [jQuery: Change the CSS of an Element Using jQuery](https://learn.freecodecamp.org/front-end-libraries/jquery/change-the-css-of-an-element-using-jquery)

We can also change the CSS of an HTML element directly with jQuery.

jQuery has a function called `.css()` that allows you to change the CSS of an element.

Here's how we would change its color to blue:

```js
$("#target1").css("color", "blue");
```

This is slightly different from a normal CSS declaration, because the CSS property and its value are in quotes, and separated with a comma instead of a colon.

Delete your jQuery selectors, leaving an empty `document ready function`.

Select `target1` and change its color to red.

## Setup
```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default");

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
$(document).ready(function() {
  $('#target1').css('color', 'red');
});
```