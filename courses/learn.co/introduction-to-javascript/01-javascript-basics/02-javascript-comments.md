# JavaScript Comments

1. Explain comments in programming languages
2. Use the two kinds of JavaScript comments

## What is a comment?
When programming, it's often useful to be able to document what we're thinking — maybe for someone else who might read the code, or just for ourselves later. We don't necessarily want this documentation to run or influence the code in any way, but we want to add some notes right next to the code for safe keeping. This is where comments come in.

## Why comment?
Not only do comments allow us to express the intent of our program in natural language (which is, naturally, easier for ourselves and others to reason about), allowing us to communicate the intent of our program to people who have never seen it before; comments also help us to identify subtle misunderstandings before they become bugs.

Think of it this way: often, we feel that we have understood a problem and implemented a good solution. Say we're making a cake, and we want it to be fluffier — we've heard of fluffy omelets, so we think that adding an extra egg or two to the cake might be the solution we're looking for.

But then when we say this aloud — outside of the realm of the recipe and the baking process — we realize that blindly adding eggs to a cake might not achieve the desired result. Our cake's lack of fluffiness is due to something else.

Comments work similarly. We might assume that a program works in a certain way, but when we describe how it works aloud (or in comments), we realize that we've misunderstood something fundamental — and now we can correct our misunderstanding before it turns into a bug.

Also, you'll see comments throughout the lessons on Learn — we want to make sure that you're familiar with them.

## Comments in JavaScript
JavaScript supports two ways of demarcating comments: `//` and `/**/`.

**Single Line Syntax**: `//`

`//` makes everything following it on the same line into a comment.

Enter the following in console (remember how to open it up? In Chrome: `cmd` + `option` + `j` on a Mac, or `ctrl` + `shift` + `i` for Windows):

```js
// I'm a comment!
```

Hmm... nothing happened.

**EXACTLY!**

Comments are how we document our code. They might seem boring, and you might wonder why we're not learning about "real" coding — but comments are real code. The most difficult thing about reading code is understanding it — comments give us ways of communicating the intent of our code to anyone who might read it (including ourselves after some time away from it), and so they serve a vital function for helping others understand our code.

What happens if we make a mistake when entering a comment? Say we forget the `//`:

```js
But I'm no longer a comment (and will cause an error)!
```

We get an error:

![Comment Error!](https://curriculum-content.s3.amazonaws.com/skills-based-js/comment_error.png)

**Top Tip**: Errors aren't something to be afraid of. They look scary with their boisterous red type and aggressive names, but they're here to help us. We'll learn more about errors and how to use them as we go through the course.

`//` is useful for short notes. It's good practice to give a comment its own line, even though the following is perfectly valid:

```js
1 + 2 // nothing before the `//` is a comment, so it will run; but this comment is just fine -- by the way, the answer is 3
```

**Comment Block Syntax**: `/**/`
You might notice a beautiful symmetry with this comment mark — and indeed, it splits nicely in two. The first half, `/*` tells us where the comment block starts; the second half `*/` tells us that it's ended.

Enter the following in console (you'll need to use `shift + enter` to enter a newline instead of evaluating the code):

```js
/*
 I'm a comment, because I'm inside `/*`.
 Still a comment.
 Let's end this comment at the end of this line */
 
 No longer a comment!
 ```

 As you can see, we can do whatever we want between `/*` and `*/.` This kind of multi-line comment is useful for longer notes, documentation, etc.

Note that you can still use `/**/` on just one line:

```js
/* I'm a comment */
 
I`m not a comment
```

In this case, it's up to you whether `/**/` or `//` makes more sense.