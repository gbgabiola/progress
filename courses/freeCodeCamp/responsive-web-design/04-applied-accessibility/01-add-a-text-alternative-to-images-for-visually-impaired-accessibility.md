# [Add a Text Alternative to Images for Visually Impaired Accessibility](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/add-a-text-alternative-to-images-for-visually-impaired-accessibility/)

It's likely you've seen an `alt` attribute on an `img` tag in other challenges. `Alt` text describes the content of the image and provides a text-alternative. This helps in case the image fails to load or can't be seen by a user. It's also used by search engines to understand what an image contains to include it in search results. Here's an example:

```html
<img src="importantLogo.jpeg" alt="Company logo">
```

People with visual impairments rely on screen readers to convert web content to an audio interface. They won't get information if it's only presented visually. For images, screen readers can access the `alt` attribute and read its contents to deliver key information.

Good `alt` text is short but descriptive, and meant to briefly convey the meaning of the image. You should always include an `alt` attribute on your image. Per HTML5 specification, this is now considered mandatory.

---

Camper Cat happens to be both a coding ninja and an actual ninja, and is building a website to share his knowledge. The profile picture he wants to use shows his skills, and should be appreciated by all site visitors. Add an `alt` attribute in the `img` tag, that explains Camper Cat is doing karate. (The image `src` doesn't link to an actual file, so you should see the `alt` text in the display.)

## Solution

```html
<img src="doingKarateWow.jpeg" alt="Camper Cat is doing karate.">
```