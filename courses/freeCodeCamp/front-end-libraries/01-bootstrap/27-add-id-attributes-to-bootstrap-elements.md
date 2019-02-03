# [Bootstrap: Add id Attributes to Bootstrap Elements](https://learn.freecodecamp.org/front-end-libraries/bootstrap/add-id-attributes-to-bootstrap-elements)

Recall that in addition to class attributes, you can give each of your elements an `id` attribute.

Each id must be unique to a specific element and used only once per page.

Let's give a unique id to each of our `div` elements of class `well`.

Remember that you can give an element an id like this:

```html
<div class="well" id="center-well">
```

Give the well on the left the id of `left-well`. Give the well on the right the id of `right-well`.

## Setup
```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
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
<div class="well" id="left-well">

</div>

<div class="well" id="right-well">

</div>
````