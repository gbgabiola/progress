# [jQuery: Change Text Inside an Element Using jQuery](https://learn.freecodecamp.org/front-end-libraries/jquery/change-text-inside-an-element-using-jquery)

Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.

jQuery has a function called `.html()` that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.

Here's how you would rewrite and emphasize the text of our heading:

```js
$("h3").html("<em>jQuery Playground</em>");
```

jQuery also has a similar function called `.text()` that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.

Change the button with id `target4` by emphasizing its text.

Check this [link](https://developer.mozilla.org/en/docs/Web/HTML/Element/em) to know more on the difference between `<i>` and `<em>` and their uses.

Note that while the `<i>` tag has traditionally been used to emphasize text, it has since been coopted for use as a tag for icons. The `<em>` tag is now widely accepted as the tag for emphasis. Either will work for this challenge.

## Setup
```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    
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
$('#target4').html('<em>#target4</em>');
```