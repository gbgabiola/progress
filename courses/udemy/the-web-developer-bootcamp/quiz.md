# Quizzes

## Table of Contents <!-- omit in toc -->

- [Quiz 1: Color Quiz](#quiz-1-color-quiz)
- [Quiz 2: Specificity Quiz](#quiz-2-specificity-quiz)
- [Quiz 3: Variables Quiz](#quiz-3-variables-quiz)
- [Quiz 4: Quick Variable Quiz](#quiz-4-quick-variable-quiz)
- [Quiz 5: Strings Basics Quiz](#quiz-5-strings-basics-quiz)


## Quiz 1: Color Quiz

Question 1: Which of the following rgb colors results in the following shade of green:

![RGB color](https://img-a.udemycdn.com/redactor/raw/2020-09-19_19-11-23-b20703576a31744b636469184f2d6407.png?05X4IerTqvMKCp9g8eBPh08RgUXzVVGIX5dZyVy_byPWZcSL1lMQKYbg9R5hmCtxD1Hg0RhDjj2W3XRAEEI0wjKd-qcc_nN1NyjyeQKTNYC-zw8mFco3p0kQGlGXmuII5tVr852iDwfobNR_3xQmrMRzJDO28rvDfYgbHUinwQOY7ilF)

- [ ] `rgb(255, 0, 255);`
- [ ] `rgb(0, 0, 255);`
- [ ] `rgb(0, 400, 0);`
- [x] `rgb(0, 200, 0);`

Question 2: Which of the following hex color codes is equivalent to `rgb(255,255,255)`?

- [ ] `#facedf`
- [ ] `#000000`
- [x] `#ffffff`


## Quiz 2: Specificity Quiz

Question 1: Given the following HTML markup:

```html
<ul>
  <li class="nav-link">Home</li>
</ul>
```

And these CSS styles:

```css
li {
  color:orange;
}
.nav-link {
  color: magenta;
}
ul li {
  color: blue;
}
```

What color will the `<li>` element be?

- [ ] orange
- [x] magenta
- [ ] blue

Question 2: Given this html markup:

```html
<p>
  <button id="submit" class="btn">Submit</button>
</p>
```

And these CSS styles:

```css
#submit {
  color: blue;
}
 
.btn {
  color: pink;
}
 
p button.btn {
  color: purple;
}
```

What color will the button end up?

- [x] blue
- [ ] pink
- [ ] purple

Question 3: Given the following HTML:

```html
<section class="about">
  <h2 class="heading">Welcome To My Page</h2>
</section>
```

And these styles:

```css
.about .heading {
  color: orange;
}
 
.about h2.heading {
  color: pink;
}
 
section.about .heading {
  color: yellow;
}
```

What color will the h2 end up?

- [ ] orange
- [ ] pink
- [x] yellow


## Quiz 3: Variables Quiz

Question 1: What is the value of `score` after the following code runs?

```js
let score = 5;
score + 4;
```

- [ ] 9
- [ ] 4
- [x] 5

Question 2: What is the value of `bankBalance` after the following code runs:

```js
let bankBalance = 100;
bankBalance /= 2;
bankBalance += 10;
```

- [ ] 100
- [ ] 50
- [ ] 110
- [x] 60

Question 3: What is the value of age after the following code runs?

```js
const age = 64;
age++;
```

- [ ] 65
- [x] 64
- [ ] 63


## Quiz 4: Quick Variable Quiz

Question 1: Which one of the following variables contains a valid boolean:

- [ ] `let isHappy = 'true';`
- [ ] `let isHappy = True;`
- [x] `let isHappy = true;`

Question 2: Which one of the following variable declarations follows JavaScript variable naming conventions?

- [ ] `let high_score = 107;`
- [ ] `let high-score = 107;`
- [x] `let highScore = 107;`


## Quiz 5: Strings Basics Quiz

Question 1: Given the following string:

```js
const animal = "hippopotamus"
```

Which character am I accessing?

```js
animal[7]
```

- [ ] "o"
- [x] "t"
- [ ] "p"

Question 2: What is stored in the `combo` variable?

```js
const city = 'Kyoto';
const country = 'Japan';
const combo = city + country;
```

- [ ] "Kyoto Japan"
- [x] "KyotoJapan"
- [ ] "Kyoto"

Question 3: What does the following return?

```js
let year = "1998";
year + 1;
```

- [ ] "1998"
- [ ] 1999
- [ ] NaN
- [x] "19981"
