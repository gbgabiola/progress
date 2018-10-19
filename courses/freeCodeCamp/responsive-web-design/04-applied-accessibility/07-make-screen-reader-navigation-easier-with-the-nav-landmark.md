# [Make Screen Reader Navigation Easier with the nav Landmark](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/make-screen-reader-navigation-easier-with-the-nav-landmark)

The `nav` element is another HTML5 item with the embedded landmark feature for easy screen reader navigation. This tag is meant to wrap around the main navigation links in your page.

If there are repeated site links at the bottom of the page, it isn't necessary to markup those with a `nav` tag as well. Using a `footer` (covered in the next challenge) is sufficient.

---

Camper Cat included navigation links at the top of his training page, but wrapped them in a `div`. Change the `div` to a `nav` tag to improve the accessibility on his page.

## Solution

```html
<nav>
    <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
    </ul>
</nav>
```