# Introduction to Advanced jQuery

## Objectives
- Define jQuery and Library
- Understand Why and Why not use jQuery
- Select elements and style elements using jQuery
- Use popular methods and events

## Introduction to jQuery
#### What is jQuery?
- jQuery is a DOM manipulation library
- It comes with a bunch of useful methods to things like:
  - Select Elements
  - Manipulate Elements
  - Create Elements
  - Add Event Listeners
  - Animate Elements
  - Add Effects
  - Make HTTP Requests (AJAX)

#### What is a library?
- A single file that someone else wrote with a bunch of methods and properties
  
#### Why would you use jQuery?
- Fixes "broken" DOM API
- Brevity and Clarity
- Ease of use
- Cross-Browser Support
- AJAX
- Lot's of people use jQuery
  
#### Why would you not use jQuery?
- The DOM API is no longer "broken"
- It doesn't do anything you can't do on your own
- It's an unnecessary dependency
- Performance
- Lot's of people are moving away from jQuery!

It's worth knowing how to do things without jQuery and also to them with other library, like jQuery.

#### Adding jQuery
- Download jQuery and link to it locally
- Like to a CDN  (a hosted copy from Content Distributed Network)

#### Selecting with jQuery
- Selecting with jQuery is very similar to `querySelectorAll`, in that we provide a CSS style selector and jQuery will return all matching elements

```js
$('selectorGoesHere');
```

#### Manipulating Style / .css method
```js
.css(propery, value);
```

We **select** and then manipulate

```js
// Select element with id "special" and give it a border
$('#special').css('border', '2px solid red');

// We can also pass in an object with styles
var styles = {
  backgroundColor: 'pink',
  fontWeight: 'bold'
};

$('#special').css(styles);
```

We can style multiple elements at once
```js
// Select all li's and make them yellow
$('li').css('color', 'yello');

// Select all elements with class "big"
// and give them an orange border
$('.big').css('border', '1px dashed orange');
```

We can also define in-place:
```js
$('li').css({
  fontSize: '10px',
  border: '3px dashed purple',
  backgroundColor: 'green'
});
```

#### JQUERY vs JAVASCRIPT
Turn all li's to green

- jQuery
	```js
	$('li').css('color', 'green')
	```

- Javascript
	```js
	var lis = document.querySelectorAll('li');
	for(var i = 0; i < lis.length; i++) {
	  lis[i]style.color = 'green';
	}
	```

#### Text and HTML / Methods
- `text()`  
Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.
	```js
	$('h1').text(); // "jQuery Methods Demo"

	$('h1').text('New Text!!!'); // "New Text!!!"
	```
- `html()`  
Get the HTML contents of the first element in the set of matched elements, or set the HTML contents of every matched element.
	```js
	$('ul').html(); // " <li>Skittles</li> <li>Starburst</li> <li>Twix</li> "
	
	$('ul').html('<li>I Hacked your UL!</li><li>Bruno is still adorable</li>'); // " <li>I Hacked your UL!</li><li>Bruno is still adorable</li> "
	```

#### Attr and Val / Methods
- `attr()`  
Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
	```html
	<img id="greatphoto" src="brush-seller.jpg" alt="brush seller">
	```

	```js
	$('#greatphoto').attr('alt', 'Beijing Brush Seller');
	
	// Setting several attributes at once
	$('#greatphoto').attr({
	  alt: 'Beijing Brush Seller',
	  title: 'photo by Kelly Clark';
	});
	```
- `val()`  
Get the current value of the first element in the set of matched elements or set the value of every matched element.
	```js
	// Get the value from a dropdown select
	$('select.foo option:selected').val();

	// Get the value from a set of radio buttons
	$('select.foo').val();

	// Get the value from a dropdown select even easier
	$('input:radio[name=bar]:checked').val();
	```

#### Classes Method
- `addClass()`  
Adds the specified class(es) to each element in the set of matched elements.
	```js
	$('p').addClass('myClass yourClass');
	```
- `removeClass()`  
Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
	```js
	$('p').removeClass('myClass yourClass')

	$('p').removeClass('myClass noClass').addClass('yourClass');
	```
- `toggleClass()`  
Add or remove one or more classes from each element in the set of matched elements, depending on either the class’s presence or the value of the state argument.
	```js
	$('#foo').toggleClass(className, addOrRemove);
	```

## Advanced jQuery
#### jQuery Events
- `click()`  
Bind an event handler to an event for the elements.  
jQuery's `click()` method is quick and easy way to add a click listener to element(s)
	```js
	// prints when item with id 'submit' is clicked
	$('#submit').click(function() {
	  console.log('Another click');
	});

	// alerts when ANY button is clicked
	$('button').click(function() {
	  alert('Someone clicked a button');
	});
	```

- `keypress()`  
Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.  
jQuery'y `keypress()` is quick and easy way to add a keypress listener to element(s)
	```js
	// listen for any keypress in any text input
	$('#target').keypress(function() {
	  console.log('Handler for .keypress() called.');
	});
	```

- `keydown()`  
Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.

- `keyup()`  
Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.

- `on()`  
Attach an event handler function for one or more events to the selected elements.  
jQuery's `on()` works similarly to `addEventListener()`. It lets you specify the type of event to listen for.
	```js
	// prints when item with id 'submit' is clicked
	$('#dataTable tbody tr').on('click', function() {
	  console.log($(this).text());
	});
	```

#### Why Use `on()`?
In most cases, `click()` and `on('click')` will both get the job done. HOWEVER, there is one key difference:
- `click()` only adds listeners for existing elements
- `on()` will add listeners for all potential future elements

#### jQuery Effects
- `fadeOut()`  
Hide the matched elements by fading them to transparent.
	```js
	$('#clickme').click(function() {
	  $('#book').fadeOut('slow', function() {
			// Animation complete.
		});
	});
	```

- `fadeIn()`  
Display the matched elements by fading them to opaque.

- `fadeToggle()`  
Display or hide the matched elements by animating their opacity.

- `slideDown()`  
Display the matched elements with a sliding motion.

- `slideUp()`  
Hide the matched elements with a sliding motion.

- `slideToggle()`  
Display or hide the matched elements with a sliding motion.

## Learned
- What is, When, Where, Why and How to use jQuery
- To do things with javaScript and jQuery
- Select elements with `$()`
- Use `.css()` to style elements
- Use different types of methods
  - `text()`, `html()`, `attr()`, `val()`, `first()`, and `last()`
- Manipulating Classes
  - `addClass()`, `removeClass()`, and `toggleClass()`
- using `this` in jQuery which is `$(this)`
- jQuery events
  - `click()`, `keypress()`, and `on()`
- jQuery effects
  - `fadeOut()`, `fadeIn()`, `fadeToggle()`, `slideDown()`, `slideUp()`, and `slideToggle()`