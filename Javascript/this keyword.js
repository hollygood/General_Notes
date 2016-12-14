/*
* Implicit Binding
* Explicit Binding
* new Binding
* window Binding
* */

/*
* Implicit Binding
* Left of the Dot at Call Time
* */

var Person = function(name, age) {
    return {
        name: name,
        age: age,
        sayName: function() {
            console.log(this.name);
        },

        mother: {
            name: 'Stacey',
            sayName: function() {
                console.log(this.name);
            }
        }
    }
}

var jim = Person('Jim', 42);
jim.sayName(); //Jim
jim.mother.sayName(); //Stacey

/*
* Explicit Binding
* call, apply, bind
* call and apply will immediate to call the function
* bind is returning a brand new function
* */

var sayName = function (lang1, lang2, lang3) {
    console.log('My name is ' + this.name +
    ' and I know ' + lang1 + ', ' + lang2 + ' and ' + lang3);
};

var stacey = {
    name: 'Stacey',
    age: 34
};

var langueges = ['JS', 'Ruby', 'Python'];

sayName.call(stacey, langueges[0], langueges[1], langueges[2]);

//or, apply is like call, but dont need to pass the arguments one by one
sayName.apply(stacey, langueges);

//bind is returning a new function, instead of invoking the original function
var newFn = sayName.bind(stacey, langueges[0], langueges[1], langueges[2]);
newFn();

/*
* new Binding
* */

var Animal = function(color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type;
};

//create a brand new object this = {}
var zebra = new Animal('black and white', 'Zorro', 'Zebra');

/*
* window Binding
* */

var sayAge = function() {
    console.log(this.age);
};

var me = {
    age： 25
};

sayAge(); //undefined, call window object
window.age = 35;
sayAge(); //35


/*
* ECMAScript 5
* */

//variant 1
var self = this;
this.nums.forEach(function(v){
   if ( v % 5 === 0)
       self.fives.push(v);
});

//variant 2
this.nums.forEach(function(v){
    if ( v % 5 === 0)
        this.fives.push(v);
}, this);

//variant 3
this.nums.forEach(function(v){
    if ( v % 5 === 0)
        this.fives.push(v);
}.bind(this));

/*
 * ECMAScript 6
 * */

this.nums.forEach((v) => {
    if ( v % 5 === 0)
        this.fives.push(v);
});