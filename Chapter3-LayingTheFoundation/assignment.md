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

- `{TitleComponent}` VS `{<TitleComponent />}` VS `{<TitleComponent> </TitleComponent>}` in JSX

  - EOD JSX components are JavaScript variables or functions.
  - `{TitleComponent}` TitleComponent is passed within the curly braces, if its a functional component then output will be a function body.
  - `{<TitleComponent />}` another way of calling TitleComponent inside angular braces, this will execute the JavaScript function.
  - `{<TitleComponent> </TitleComponent>}` same as the above way of calling the component, but child components can be wrapped in these tags.
