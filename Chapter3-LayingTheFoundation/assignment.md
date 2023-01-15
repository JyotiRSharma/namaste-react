- What is JSX?
  - `JSX` stands for JavaScript Syntax Extension and occasionaly referred to as JavaScript XML
  - JSX looks like HTML but it is not HTML.

- Superpowers of JSX
  - JSX gives us the power to write HTML in JavaScript
  - JSX is translated to normal JavaScript in the end. Hence it prevents `XSS` (cross-site-scripting) attacks as it ultimately converts the input data to strings.
  - Put any JavaScript expressions insidecurly braces and JSX will run it.

- Role of `type` attribute in script tag? What options can I use?
  - `type` attribute represents the type of the script. 
  - JavaScript MIME types can be used to specify what type of file is represented.
  If file type is JS then `type` attribute can be ommitted.
  - `type` attribute `module` is used to treat a JS file as `ESModule`. This allows us to use import and export inside JS modules.
  - `type` import `importmap`can be used to indicate that the body contains import map. It guides browser to resolve module specifiers when importing `JavaScript modules`.
