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
