### __Chapter 02 - Assignment - Igniting our App__

Please Note: Write the answers and code on your own while finishing your assignments. Try to
put down your thoughts into words by yourself in your own words. (This will help you develop
muscle memory and you will remember all the concepts properly) ✌

### Theory Assignment:
- What is `NPM`?
  - `NPM` doesn't have any fixed abbreviation yet. Developers can call it anything like `No Pants Mom` or `Namaste Package Manager`, generally I have heard people call it `Node Package Manager`.
- What is `Parcel/Webpack`? Why do we need it?
  - `Parcel/Webpack` is a bundler. We need it to bundle our webapp and turn it into normal `HTML` `CSS` and `Javascript` so that the browsers can understand it. Also known as `Minification`
  - `Parcel/Webpack` helps in building our web-app after developing it.
- What is `.parcel-cache`
  - `.parcel-cache` is a space where `parcel` stores the code, which later helps us in building the apps faster.
  - Initial build of `parcel` is going to take around 400 milliseconds, later when `parcel` creates a `parcel-cache` the build finishes in 4 milliseconds.
- What is `npx` ?
  - `npx` stands for `npm execute`.
  - When time comes to build the app, we execute it by writing `npx parcel index.html` (here `index.html` is the entrypoint for the app)
- What is difference between `dependencies` vs `devDependencies`?
  - `dependencies` are the set of packages that are needed for the app to run in `production`
  - While `devDependencies` are the set of packages that are needed for developing the app. Example we might need dependencies to remove `console.log` and `errors` when building the app.
- What is Tree Shaking?
  - It means checking if there is any difference in the current code and refreshing the code.
- What is Hot Module Replacement?
  - Hot Module Replacement implements a diffing algorithm, and checks if there is any change in the code, it also has a live server when there is a code change and the dev saves the changed code, the HMR renders the updated code without any extra attention from the dev.
- List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.
  - My 5 favourite super powers of `parcel` are as follow:
    1. Minification
    2. File watcher
    3. Hot Module Replacement
    4. Zero config
    5. Lazy Mode
  - __Lazy Mode__: It makes developer experience better. When writing a feature designed to work on a specific page, _lazy mode_ helps in loading the requested page and not the entire web application.
  This leads to better developer productivity.
  - __Zero Config__: Features like having a development server, file watcher algorithm and minification are already prebuilt in _Parcel_. Hence, the name _zero config_.
  - __Hot Module Replacement__: HMR tries to update a particular moudle part of the DOM element which has been changed. It uses a diff algorithm to find module changes and updates the DOM. All without reloading the page.
  It is much similar to React's (Fast Refresh), where the component changes are reflected without page reloads.
- What is `.gitignore`? What should we add and not add into it?
  - Git uses `.gitignore` to ignore the files to stop watching changes to it.
  - We should not add the website files like `index.html`, `app.js`, `index.css` and package manager files like `package.json`, `package-lock.json`. 
  Anything which can be automatically generated, should be added to `.gitignore` eg., `node_modules`, `.parcel-cache`
- What is the difference between `package.json` and `package-lock.json`?
  - `package.json` gets loaded after initializing npm.
  - `package-lock.json` keeps a record of the dependency versions. So other developers who clone the project can get an exact replica of the code.
- Why should I not modify `package-lock.json`?
  - I should not modify the `package-lock.json` because it keeps track of the dependencies that worked well on my system and it will be easier to replicate the project on other systems using the same dependency versions.
- What is `node_modules` ? Is it a good idea to push that on git?
  - `node_modules` is the space when npm downloads and extracts all the dependency packages to make the entire web app run.
  Since `node_modules` can be regenerated (and folder size is very big) with a simple `npm i` command, we should not push it to git.
- What is the `dist` folder?
  - `Parcel` creates a `dist` folder to store the production app, which includes the `html`, `css` and `javascript` which is finally read by the browser.
- What is `browserlists`?
  - `browserlists` is a tool to define the web-app's browser compatability.

---
### __Read about dif bundlers: vite, webpack, parcel__

---
### __Read about: ^ - caret and ~ - tilda__
packages are released in the following version numbers:

`X.Y.Z`
  - X = Major release that might not be backward compatible
  - Y = Minor release that includes new features and is backward compatible
  - Z = Patch release that includes bug fixes and is backward compatible

__~__ (_tilda_) is used only to accept the `patch` releases of dependencies.

__^__ (_caret_) is used to accept the `minor` releases of dependencies.

---
__Read about Script types in html (MDN Docs)__

---

### Project Assignments
- In your existing project
  - intialize `npm` into your repo
  - install `react` and `react-dom`
  - remove CDN links of react
  - install parcel
  - ignite your app with parcel
  - add scripts for “start” and “build” with parcel commands
  - add `.gitignore` file
  - add `browserlists`
  - build a production version of your code using `parcel build`