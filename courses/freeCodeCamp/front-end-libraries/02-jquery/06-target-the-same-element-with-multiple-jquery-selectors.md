# [jQuery: Target the Same Element with Multiple jQuery Selectors](https://learn.freecodecamp.org/front-end-libraries/jquery/target-the-same-element-with-multiple-jquery-selectors)

Now you know three ways of targeting elements: by type: `$("button")`, by class: `$(".btn")`, and by id `$("#target1")`.

Although it is possible to add multiple classes in a single `.addClass()` call, let's add them to the same element in _three separate ways_.

Using `.addClass()`, add only one class at a time to the same element, three different ways:

Add the `animated` class to all elements with type `button`.

Add the `shake` class to all the buttons with class `.btn`.

Add the `btn-primary` class to the button with id `#target1`.

**Note**  
You should only be targeting one element and adding only one class at a time. Altogether, your three individual selectors will end up adding the three classes `shake`, `animated`, and `btn-primary` to `#target1`.

## Setup
```html
<script>
  $(document).ready(function() {

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
$('button').addClass('animated');
$('.btn').addClass('shake');
$('#target1').addClass('btn-primary');
```