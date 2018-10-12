# [Add Borders Around Your Elements](https://learn.freecodecamp.org/responsive-web-design/basic-css/add-borders-around-your-elements)

CSS borders have properties like `style`, `color` and `width`

For example, if we wanted to create a red, 5 pixel border around an HTML element, we could use this class:

```html
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
</style>
```

---

Create a class called `thick-green-border`. This class should add a 10px, solid, green border around an HTML element. Apply the class to your cat photo.

Remember that you can apply multiple classes to an element using its `class` attribute, by separating each class name with a space. For example:

`<img class="class1 class2">`

## Solution

```css
.thick-green-border {
  border-width: 10px;
  border-color: green;
  border-style: solid;
}
```

```html
<main>
  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
</main>
```
