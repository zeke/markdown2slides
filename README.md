# Preso

Write your slideshow content in a markdown file without compromising stylability.

## Why

- Preso is intended to be used for static HTML site generation.
- Preso splits markdown files by `hr` elements into an `ol`, making it easier to style each `li` "slide" with CSS.
- Preso is blocky, synchrnous, and non-streamy. In other words, don't use it at runtime.

## Sample

This markdown:

```md
---

slide 1

---

slide 2
```

becomes this HTML:

```html
<ol>
  <li>slide 1</li>
  <li>slide 2</li>
</ol>
```

## Installation

```
npm install preso
```

## Usage

```js
var preso = require('preso')
var slides = preso('articles/foo.md')
```

## Tests

```
npm test
```