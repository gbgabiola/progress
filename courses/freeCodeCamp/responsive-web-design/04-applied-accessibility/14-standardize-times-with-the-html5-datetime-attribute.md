# [Standardize Times with the HTML5 datetime Attribute](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/standardize-times-with-the-html5-datetime-attribute)

Continuing with the date theme, HTML5 also introduced the `time` element along with a `datetime` attribute to standardize times. This is an inline element that can wrap a date or time on a page. A valid format of that date is held by the `datetime` attribute. This is the value accessed by assistive devices. It helps avoid confusion by stating a standardized version of a time, even if it's written in an informal or colloquial manner in the text.

Here's an example:

```html
<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
```

---

Camper Cat's Mortal Kombat survey results are in! Wrap a `time` tag around the text "Thursday, September 15<sup>th</sup>" and add a `datetime` attribute to it set to "2016-09-15".

## Solution

```html
<p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is <time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time>. May the best ninja win!</p>
```