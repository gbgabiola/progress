# [Improve Form Field Accessibility with the label Element](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/improve-form-field-accessibility-with-the-label-element)

Improving accessibility with semantic HTML markup applies to using both appropriate tag names as well as attributes. The next several challenges cover some important scenarios using attributes in forms.

The `label` tag wraps the text for a specific form control item, usually the name or label for a choice. This ties meaning to the item and makes the form more readable. The `for` attribute on a `label` tag explicitly associates that `label` with the form control and is used by screen readers.

You learned about radio buttons and their labels in a lesson in the Basic HTML section. In that lesson, we wrapped the radio button input element inside a `label` element along with the label text in order to make the text clickable. Another way to achieve this is by using the `for` attribute as explained in this lesson.

The value of the `for` attribute must be the same as the value of the `id` attribute of the form control. Here's an example:

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

---

Camper Cat expects a lot of interest in his thoughtful blog posts, and wants to include an email sign up form. Add a `for` attribute on the email `label` that matches the `id` on its `input` field.

## Solution

```html
<label for="email">Email:</label>
<input type="text" id="email" name="email">
```