# [Create a Graphic Using CSS](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/create-a-graphic-using-css)

By manipulating different selectors and properties, you can make interesting shapes. One of the easier ones to try is a crescent moon shape. For this challenge you need to work with the `box-shadow` property that sets the shadow of an element, along with the `border-radius` property that controls the roundness of the element's corners.

You will create a round, transparent object with a crisp shadow that is slightly offset to the side - the shadow is actually going to be the moon shape you see.

In order to create a round object, the `border-radius` property should be set to a value of 50%.

You may recall from an earlier challenge that the `box-shadow` property takes values for `offset-x`, `offset-y`, `blur-radius`, `spread-radius` and a color value in that order. The `blur-radius` and `spread-radius` values are optional.

---

Manipulate the square element in the editor to create the moon shape. First, change the `background-color` to transparent, then set the `border-radius` property to 50% to make the circular shape. Finally, change the `box-shadow` property to set the `offset-x` to 25px, the `offset-y` to 10px, `blur-radius` to 0, `spread-radius` to 0, and color to blue.

## Solution

```css
.center {
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 25px 10px 0 0 blue;
}
```