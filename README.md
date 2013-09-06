# markdown2slides

Markdown is great for content, but it's not ideal for create slide decks. Markdown doesn't provide 
a way to wrap each slide in a parent element, making it very difficult to style your slides with CSS.

markdown2slides is a node module, intended to be used in a grunt workflow, that lets your write your 
slideshow content in markdown without compromising stylability.

## Installation

```
npm install markdown2slides
```

## Usage

Write your slideshow content in a markdown file, using horizontal
rules (---) to separate each slide:

```markdown
slide 1

---

slide 2

---

slide 3
```

Use markdown2slides to convert your markdown file into an ordered list:

```js
var slides = require('markdown2slides')('path/to/my-preso.md')
```

The value of `slides` is now an HTML string that looks like this:

```html
<ol class="slides">
  <li>slide 1</li>
  <li>slide 2</li>
  <li>slide 3</li>
</ol>
```

## Tests

```
npm test
```

## Caveat Emptor

markdown2slides is intended to be used for static HTML site generation. It is blocky/synchronous/non-streamy. In other words, don't use it at runtime in your node apps.