import { marked } from "https://esm.run/marked@5.0.2";
import renderMathInElement from "https://esm.run/katex@0.16.7/dist/contrib/auto-render.min.js";
import { Previewer } from "https://esm.run/pagedjs@0.4.1/dist/paged.js";
import hljs from "https://esm.run/highlight.js@11.8";

document.addEventListener("DOMContentLoaded", async () => {
  const style = document.createElement("style");
  style.innerHTML = `@import url("https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.css");
  @import url("https://cdn.jsdelivr.net/npm/highlight.js@11.8/styles/github-dark.min.css");
  
  body {
    background-color: #121212;
  }
  
  textarea,
  .markxd-parse {
    display: none;
  }
  
  @page {
    size: letter;
    font-family: "Times New Roman", serif;
    margin: 1in;
    @bottom-right {
      content: counter(page);
    }
  }
  
  .markxd {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .pagedjs_page {
    margin-bottom: 8px;
    background-color: #fff;
  }
  
  .markxd p {
    font-size: 12pt;
    line-height: 1.5;
    text-align: justify;
  }
  
  .markxd h1 {
    text-align: center;
    font-size: 24pt;
    margin-bottom: 12pt;
  }
  
  .markxd h2 {
    text-align: center;
    font-size: 18pt;
    margin-bottom: 12pt;
  }
  
  .markxd h3 {
    font-size: 14pt;
    margin-top: 18pt;
    margin-bottom: 6pt;
  }
  
  .markxd blockquote {
    font-size: 12pt;
    margin: 12pt 1in;
  }
  
  .markxd pre code {
    border-radius: 4pt;
  }`;
  document.head.appendChild(style);

  const input = document.querySelector("textarea");
  const parsing = document.createElement("div");
  const output = document.createElement("div");

  parsing.classList.add("markxd-parse");
  document.body.appendChild(parsing);
  output.classList.add("markxd");
  document.body.appendChild(output);

  parsing.innerHTML = marked.parse(input.value, { gfm: true });

  hljs.highlightAll();

  renderMathInElement(parsing, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
    ],
  });

  const paged = new Previewer();
  await paged.preview(parsing.innerHTML, null, output);
});
