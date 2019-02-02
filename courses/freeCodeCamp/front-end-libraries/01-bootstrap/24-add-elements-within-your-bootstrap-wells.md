# [Bootstrap: Add Elements within Your Bootstrap Wells](https://learn.freecodecamp.org/front-end-libraries/bootstrap/add-elements-within-your-bootstrap-wells)

Now we're several `div` elements deep on each column of our row. This is as deep as we'll need to go. Now we can add our `button` elements.

Nest three `button` elements within each of your `well div` elements.

## Setup
```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">

      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">

      </div>
    </div>
  </div>
</div>
```

## Solution
```html
<div class="well">
  <button></button>
  <button></button>
  <button></button>
</div>

<div class="well">
  <button></button>
  <button></button>
  <button></button>
</div>
```