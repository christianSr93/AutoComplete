# Instrucciones
- Clone the project to a local folder with the following command
```bash
git clone git@github.com:christianSr93/AutoComplete.git
```
- Download and install node and npm using the following link
```bash
https://nodejs.org/en/download/
```
- Check that the installation is correct with the following commands
```bash
node -v
npm -v
```
- Navigate to the /AutoComplete folder and install the project dependencies with the following command
```bash
npm install
```
-  Execute the following command to start the application with the following command
```bash
npm start
```

## Questions

1. What is the difference between Component and PureComponent? give an
example where it might break my app.
- The main difference is that a PureComponent uses the shouldComponentUpdate() function and a Component does not.
- When using pureComponent the component may not have the expected rendering performance.
2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?
- Because context is used to communicate states with all components, if shouldComponentUpdate is used, the re-rendering is cut off and the context may not be propagated to all components.
3. Describe 3 ways to pass information from a component to its PARENT.
- calling a parent function from the child component to pass data to the parent
- using redux
- using context
4. Give 2 ways to prevent components from re-rendering.
- using memorization (useMemo, useCallback)
- using PureComponents
5. What is a fragment and why do we need it? Give an example where it might
break my app.
- Is used to group a list of children without adding extra nodes to the DOM (unnecessary divs).
- React components need a parent node to be rendered, usually a div or a react fragment, if you don't have any of these our code will not compile.
6. Give 3 examples of the HOC pattern.
- 
7. what's the difference in handling exceptions in promises, callbacks and
async...await.
- Callbacks are functions that are passed to another function and when the first one is finished executing, it executes the second one.
- A promise is a function that we assure that it is going to be executed in the future, it can be resolved successfully or not, with the promises we can make a state of "pause" in the execution of the code until this promise is resolved.
- Async and await basically are similar to a promise, we can make an asynchronous function (async) that will return a value and pause the code with an await to have that value and continue the execution.
8. How many arguments does setState take and why is it async.
- 2
- Because it can result in an expensive operation, if it were synchronous, the browser or the compiler would have to wait until this operation is finished, which may result in the browser stopping responding.
9. List the steps needed to migrate a Class to Function Component.
- Inline CSS
- CSS in external file
- Styled Components
- Sass & SCSS
10. List a few ways styles can be used with components.
- 
11. How to render an HTML string coming from the server.
-
