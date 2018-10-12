# [Understand Absolute versus Relative Units](https://learn.freecodecamp.org/responsive-web-design/basic-css/understand-absolute-versus-relative-units)

The last several challenges all set an element's margin or padding with pixels (`px`). Pixels are a type of length unit, which is what tells the browser how to size or space an item. In addition to `px`, CSS has a number of different length unit options that you can use.

The two main types of length units are absolute and relative. Absolute units tie to physical units of length. For example, `in` and `mm` refer to inches and millimeters, respectively. Absolute length units approximate the actual measurement on a screen, but there are some differences depending on a screen's resolution.

Relative units, such as `em` or `rem`, are relative to another length value. For example, `em` is based on the size of an element's font. If you use it to set the `font-size` property itself, it's relative to the parent's `font-size`.

**Note**  
There are several relative unit options that are tied to the size of the viewport. They are covered in the Responsive Web Design Principles section.

---

Add a `padding` property to the element with class `red-box` and set it to `1.5em`.

## Solution

```cs
.red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }
```