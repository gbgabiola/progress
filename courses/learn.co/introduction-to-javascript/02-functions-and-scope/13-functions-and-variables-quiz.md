# Functions and Variables Quiz

1. What does the following function call log to console:

```js
function log() {
  console.log(greeting);
  var greeting = 'Hello!';
}
log();
```

- [ ] 'Hello!'
- [x] undefined
- [ ] 'undefined is not a function'

2. What does the following function call log to console:

```js
log();
function log() {
  console.log(greeting);
  var greeting = 'Hello!';
}
```

- [ ] 'Hello!'
- [x] undefined
- [ ] 'undefined is not a function'

3. What does the following function call log to console:

```js
log();
var log = function() {
  console.log(greeting);
  var greeting = 'Hello!';
}
```

- [ ] 'Hello!'
- [ ] undefined
- [x] 'log is not a function'

4. What does the following function log to console:

```js
function log(s) {
  var s = 'Mr. X';
  console.log(s);
}
log('Hello!');
```

- [ ] 'Hello!'
- [x] 'Mr. X'
- [ ] undefined
- [ ] 'undefined is not a function'