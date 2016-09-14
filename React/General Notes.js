1. Imperative vs Declarative

* Imperative code: program how to do something

var numbers = [1, 2, 3];
var total = 0;

for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}


* Declarative code: what you want to do

var numbers = [1, 2, 3];

numbers.reduce(function(prev, current){
	return prev + current;
});

* Pros of Declarative code
	- Reduce Side Effects
	- Minimize Mutability
	- More readable code
	- Less bugs

* Most of React code is Declarative, but not setState API

2. About React

* React Router: Map components to certain URL
* Webpack: output code to a single file or multiple files
	- run npm install -g webpack global to use webpack in project
	- webpack -w: watch files
	- webpack -p: ship to production
* Babel: Code transformation - transfer JSX to Javascript
	-npm install --save-dev babel-core babel-loader babel-preset-react
* Axios: HTTP Requests

3. NPM

* Allows you to easily manage different modules and keep track of which version you installed

4. Pure Functions
- Evaluates the same result given the same args
- Does not depend on and modify the states of variables out of its scope
- No side effects (mutation, async reqs)
- eg. slice is pure fuction while splice is not

5. React's JSX uses the upper vs. lower case convention to distinguish between local component classes and HTML tags.

6. React's Life Cycle Methods categories.

1) When a component gets mounted to the DOM and unmounted.
2) When a component receives new data.

7. Mounting / Unmounting:

- Establish some default props in component
- Set some initial state in component
- Make an Ajax request to fetch some data needed for this component
- Set up any listeners (ie Websockets or Firebase listeners)
- Remove any listeners you initially set up (when unmounted)

8. You should usually use componentDidMount over componentWillMount.
- If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval,
	or send AJAX requests, perform those operations in componentDidMount method.
