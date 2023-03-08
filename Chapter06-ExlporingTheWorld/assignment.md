# Exploring the World

1. What is a Microservice?
  - It is an architecture where multiple services are distributed and run in their own instance. They are called with the help of APIs. They are loosly coupled and helps include different technology stacks in their project.

2. What is a Monolith architecture?
  - It is an architecture where multiple services are tightly coupled into one place.
  It is a good starting point of an application, but as the app scales, they need to have loosely coupled services which can be called using a light weight protocol.

3. What is the difference between Monolith and Microservice?
  - Monolith is an architecture with a lot services that are tightly coupled with each other.
  - In monolith maintaining tightly coupled services are hard.
  - Microservices is an architecture, with lot of services that are loosely coupled with each other.
  - In microservices maintaining loosley coupled services are easy and there are small teams for each service.

4. Why do we need useEffect Hook?
  - Primarily to load data from API or perform compute intensive operations which can impact the initial page load time.
  - Putting in those compute intensive tasks in useEffect helps in performance boost for the application.
  - useEffect perform the operation after the first render.

5. What is optional chaining?
  - Optional chaining is a way to call a property or function of an object. If the parent property of an object is ```null``` or ```undefined```, before accessing the child property, it short-circuits and returns ```undefined```.

6. What is Shimmer UI?
  - Shimmer UI is a loading screen which replicates the dummy desired screen which loads after the page content is loaded.

7. What is the difference between JS expression and JS statement?
  - JS expression is just the shorthand javascript code.
  - JS statement is the regular JS code, which cannot be run in the parameters of if statement and for loops.

8. What is conditional rendering, explain with a code example.
  - Conditional rendering is a way to render components only when a certain condition satisfies.
  - For example, if there is no data returned from the API call, perform an early return and not render the actual UI.

