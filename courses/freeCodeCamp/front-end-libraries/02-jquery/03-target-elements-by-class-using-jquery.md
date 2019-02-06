# [jQuery: Target Elements by Class Using jQuery](https://learn.freecodecamp.org/front-end-libraries/jquery/target-elements-by-class-using-jquery)

You see how we made all of your `button` elements bounce? We selected them with `$("button")`, then we added some CSS classes to them with `.addClass("animated bounce");`.

You just used jQuery's `.addClass()` function, which allows you to add classes to elements.

First, let's target your `div` elements with the class `well` by using the `$(".well")` selector.

Note that, just like with CSS declarations, you type a `.` before the class's name.

Then use jQuery's `.addClass()` function to add the classes `animated` and `shake`.

For example, you could make all the elements with the class `text-primary` shake by adding the following to your `document ready function`:

```js
$(".text-primary").addClass("animated shake");
```

## Setup
```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
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
$('.well').addClass('animated shake');
```