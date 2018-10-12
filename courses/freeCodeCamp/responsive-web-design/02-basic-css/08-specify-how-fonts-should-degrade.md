# [Specify How Fonts Should Degrade](https://learn.freecodecamp.org/responsive-web-design/basic-css/specify-how-fonts-should-degrade)

There are several default fonts that are available in all browsers. These generic font families include `monospace`, `serif` and `sans-serif`

When one font isn't available, you can tell the browser to "degrade" to another font.

For example, if you wanted an element to use the `Helvetica` font, but degrade to the `sans-serif` font when `Helvetica` wasn't available, you will specify it as follows:

```css
p {
  font-family: Helvetica, sans-serif;
}
```

Generic font family names are not case-sensitive. Also, they do not need quotes because they are CSS keywords.

---

To begin with, apply the `monospace` font to the `h2` element, so that it now has two fonts - `Lobster` and `monospace`.

In the last challenge, you imported the `Lobster` font using the `link` tag. Now comment out that import of the `Lobster` font(using the HTML comments you learned before) from Google Fonts so that it isn't available anymore. Notice how your `h2` element degrades to the `monospace` font.

**Note**
If you have the Lobster font installed on your computer, you won't see the degradation because your browser is able to find the font.

## Solution

```html
<!-- <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css"> -->
```

```css
h2 {
  font-family: Lobster, monospace;
}
```