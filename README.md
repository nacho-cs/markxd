# markxd

## Description:

Generate APA-styled paginated PDFs using Markdown and LaTeX.

## Variants:

- A CDN that allows you to write markdown, render a document, and save it as a PDF in the browser (In development)
- A CLI that allows you to convert a markdown file to a PDF in node.js

## Browser:

- To start, create a `.html` file

```html
<!DOCTYPE html>
```

- Add a script tag containing a copy of markxd
- Make sure to set the `type` to `module` as markxd is an ESM package by default

```html
<!DOCTYPE html>
<script type="module" src="https://cdn.jsdelivr.net/gh/nacho-cs/markxd@main/markxd.min.js"></script>
```

- After that simply create a `textarea` element containing the content you want to be rendered

```html
<!DOCTYPE html>
<script type="module" src="https://cdn.jsdelivr.net/gh/nacho-cs/markxd@main/markxd.min.js"></script>
<textarea>
  ## Heading

  Display math:
  $$ 5^2 = 25 $$

  Inline math: $ y=mx+b $
</textarea>
```


