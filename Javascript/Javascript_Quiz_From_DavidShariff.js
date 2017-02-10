/*
 * The line brake after return makes JS treat this as a simple 'return;'
   and actually return 'undefined'
 */
function aaa() {
    return
    {
        test: 1
    };
}

alert(typeof aaa());

/*
* function declarations are hoisted to the top of the function in which they are declared. This simply means
* that you can call a function that was declared at a later time,
* provided this function was declared in the same block scope.
* */

function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
alert(typeof bar());


//it will look like this

function bar() {
    function foo() {}
    return foo;
    foo = 10;
    var foo = '11';
}
alert(typeof bar()); //Answer: function

/*
* '+' and '-' operator
* The '+' operator, the '-' operator has the power to convert values to numbers.
* '+true' results in 1, '+false' results in 0.
* If "+" is used on arrays or strings, the "+" operator will try to convert the other value to a string as well.
* */

"1" - - "1"; //1 - -1 = 1 - (- 1) = 2
[] + [] + 'foo'.split('') =  "" + "" + "f,o,o" = "f,o,o"

/*
* Setting the length of an array resizes the array, and removes elements past the new length.
* Therefore myArr.length = 0 empties the array, and thus when 'bin' is pushed myArr == ['bin'].
* */

var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr); //result is ['bin']

/*
* The instanceof operator tests whether an object has in its prototype chain the prototype property of a constructor.
* "This is a string" is a primitive of type string, which is not an instance of
* anything since it's not an object. Therefore "This is a string" instanceof String is false.
* */

"This is a string" instanceof String; //return false

//more examples

var simpleStr = "This is a simple string";
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};

simpleStr instanceof String; // returns false, checks the prototype chain, finds undefined
myString  instanceof String; // returns true
newStr    instanceof String; // returns true
myString  instanceof Object; // returns true

myObj instanceof Object;    // returns true, despite an undefined prototype
({})  instanceof Object;    // returns true, same case as above

myString instanceof Date;   // returns false

myDate instanceof Date;     // returns true
myDate instanceof Object;   // returns true
myDate instanceof String;   // returns false

/*
* 'in' operator
* The in operator returns true if the specified property is in the specified object
* A string or symbol representing a property name or array index (non-symbols will be coerced to strings).
* */

var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log('2' in myArr); //return true

//more examples

// Arrays
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees        // returns true
3 in trees        // returns true
6 in trees        // returns false
"bay" in trees    // returns false (you must specify the
                  // index number, not the value at that index)
"length" in trees // returns true (length is an Array property)
Symbol.iterator in trees // returns true (arrays are iterable, works only in ES6+)

// Predefined objects
"PI" in Math          // returns true

// Custom objects
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // returns true
"model" in mycar // returns true

var color1 = new String("green");
"length" in color1 // returns true

var color2 = "coral";
// generates an error (color2 is not a String object)
"length" in color2;

/*
* The > operator has a higher precedence than === and is left-to-right associative.
* If we add the implicit parentheses we get this:
* */

((10 > 9) > 8) === true;

((10 > 9) > 8) === true;
(true > 8) === true;
(1 > 8) === true;
false === true;
false;

