# Intro to Javascript

JavaScript is the de facto language of the internet. It's a tool that, once mastered, will allow you to interact with users via apps in fun and interesting ways.

In technobabble, JavaScript is a dynamic, untyped, and interpreted programming language; it is prototype-based and supports both object-oriented and functional approaches. What all this means will become more apparent in lessons and through exposure to the language. But here are the basics.

## Objectives
- Write your first JavaScript code!

## (The Browser) Console
The best, possibly most powerful thing about JavaScript is that all modern browsers know how to run it. In fact, we can write and execute JavaScript in our browsers ourselves!

(Windows/Linux users, whenever you see `cmd` below or in upcoming lessons, use `ctrl` if you need to.)

To open up your browser's console from Chrome, type `cmd` + `option` + `j` (on Windows this is `ctrl` + shift + `i`). From Firefox, type `cmd` + `option` + `k`. From Safari, you'll first need [to enable the Web Inspector](https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/GettingStarted/GettingStarted.html); then you can press `cmd` + `option` + c.

Alternatively, open up Chrome and on any tab (even a blank one) right click and select `Inspect` from the dropdown. From there, select the `console` tab:

![Chrome console](https://curriculum-content.s3.amazonaws.com/skills-based-js/console_chrome.png)

The white space below is your console, a sandbox where you can enter and execute any JavaScript code you want. (Wondering what we mean by "sandbox"? Remember how we could play in sandboxes as kids: building castles, moats, and shaping an entire world without worrying about the consequences outside of that world? In programming, sandboxes work the same way: they're environments that we have complete control over, but whose contents don't spill into the outside world.)

![Console example](https://curriculum-content.s3.amazonaws.com/skills-based-js/console_example.png)

With your console open, type

```js
alert("Hello, world!")
```

and press "enter".

What was that?

![Hello, world!](https://curriculum-content.s3.amazonaws.com/skills-based-js/hello_world.png)

You did it! You just wrote some JavaScript!

(Note: You might see `undefined` in the console after you click "OK" — this is normal, and nothing to worry about.)

## Experiment Time
A large part of programming is experimentation — we come up with a hypothesis (how we think something should work) and test it with code.

In console, enter `alert('Hello, world!')` (with single quotes instead of the double quotes above). What happened? It should have worked the same way as before.

Now try `alert("I'd love to learn JavaScript!")` — pretty straightforward, right?

But now how about `alert('I'd love to learn JavaScript!')`? You should see an error like

![Syntax Error](https://curriculum-content.s3.amazonaws.com/skills-based-js/intro_to_js_syntax_error.png)

We'll cover errors in detail later on, but in this case it's because JavaScript doesn't know the difference between a single quote and an apostrophe. We have to tell it the difference.

When we use double quotes, we're implicitly telling JavaScript that `"I'd"` has an apostrophe in it because we're wrapping the whole phrase ("I'd love to learn JavaScript!") in those double quotes. Sometimes, however, we need to be more explicit: we can do so with a backslash `\`.

Try entering `alert('I\'d love to learn JavaScript!')` — don't forget the backslash! You should now see an alert as normal.

## Your Turn
Practice `alert()`-ing with a few phrases of your own. Experiment! Try things that you aren't sure will work — it's okay if they don't!