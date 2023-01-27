- What is the difference between __Named__ Export, __Default__ Export and __*__ export?
  - __Named__ export is a way to export the variables or functions directory at the time of definition or if the functions or variables are exported inside __{}__ at EOF.
  - __Default__ export is way to export the function or variable using the `default` keyword. __Default__ export can be available to one function or variable in each module.
  - __*__ export, there is nothing as such to export the module variables or function, but it can be used to import all of the exported variables or functions from a specific module.

- What is the importance of `config.js` file?
  - In the `config.js` file, the constant variables can be stored, and later on they can be accessed imported into the required modules.
  - `config.js` is also called as `contants.js` and it can store constant variables like image cdn URLs and API URLs and hardcoded data.

- What are React Hooks?
  - React hooks are nothing but JavaScript functions.
  - There are many hooks inreact, but one of the most commonly used hook is useState hook.

- Why do we need a useState Hook?
  - useState hooks are needed to create state variables, which react can track and it helps us perform two-way binding.
  - the useState hook returns an array with 2 element.
    1. the state variable
    2. the setter function to update the state variable.
  