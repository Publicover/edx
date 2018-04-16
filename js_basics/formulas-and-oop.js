METHODS

Object.hasOwnProperty('propertyName') //boolean
  //cls.hasOwnProperty('author') //false
Object.create(thing) //allows creation of objects without constructors
Object.getPrototypeOf(thing) //checks if object has functions of prototype


KEYWORDS

arguments[arg]--lets you target arguments in a function
  looks like an array but is not an array
  function func(str1, str2) {
    console.log(arguments[3]);
    console.log(arguments.length);
  };
  func('zero', 'one', 'two', 'three'); //'three', 4
someFunction.apply //lets you pass the object as an argument; other arguments
  //become arguments of the function
  let cls = {
    name: 'Power of node',
    year: 2016,
  };
  const print = function(times) {
    for (let i = 0; i < times; i++) {
      console.log(this.name);
    }
  };
  print.call(cls, 3); //'Power of node' //'Power of node' //'Power of node'
  print.apply(cls,[3]); //'Power of node' //'Power of node' //'Power of node'
  call takes arguments as arguments while apply makes arguments into array
    that turns into arguments


FUNCTIONS

call function with keyword
  function myFunction(param1, param2, etc) {
    statements end with semicolon;
  };

function expression lets you declare function without name
  const varName = function(params, moreParams) {
    statements;
  };

  keyword is needed if you name function in function expression
    const myFactorial = function factorial(n) {
      if(n > 1) {
        return n * factorial(n-1);
      } else {
        return 1;
      };
    }; //factorial(3) returns UncaughtReferenceError
       //myFactorial(3) returns 6
function declarations are hoisted, function expressions are not
function delcarations cannot be used in loops, conditionals, control statements
functions always return vale: 'undefined', by default
functions take parameters and can set default values; if the number of arguments
  is larger than the number of parameters, excessive arguments are not used
  but they still exist
  function func(str1, str2) {
    console.log(arguments[3]);
  };
  func("zero","one", "two", "three"); //"three"
  arguments (keyword) object contains all the arguments passed into a function

OBJECTS

can be created blank with attributes added one by one
  let cls = new Object();
  cls.name = 'Power of Node',
  cls.year = 2016
  cls; //Object {name: 'Power of Node', year: 2016}
object literal is also possible
  let cls = {
    name: 'Power of Node',
    year: 2016
  };
  cls; //Object {name: 'Power of Node', year: 2016}
any valid string can be used without quotes in creating literals;
  to use invalid string, put quotes and access with bracket notation
FUNCTIONS that are properties of object are called METHODS
  var cls = {
    name: 'Power of Node',
    year: 2016,
    print: function() {
      console.log(this.name + ',' + this.year);
    }
  };
  cls.print() //Power of Node, 2016
keyword this allows manipulation of object properties from within method
properties can be added, deleted and updated easily
  cls.theme = 'Game of Thrones'
delete removes property entirely
  delete cls.theme;
objects are only equal to themselves, even if they have same names with same values
  lecture = cls;
  lecture === cls; //true
  {name: 'value'}==={name: 'value'} //false
objects have access to methods that is absent from objects because they inherit
  through prototyping (prototypical inheritance); method only needs to belong
  to prototype, like the overarching hasOwnProperty in Object
adding property to prototype gives all objects inheriting immediate access to it
  Object.prototype.easterEgg = 'Hello, world';
  cls.easterEgg(); //"Hello, world"
adding propety to object with prototypical inheritance does overwrites it
  cls.easterEgg = function() {
    console.log('Is my prototype OK?');
  };
  cls.easterEgg(); //'Is my prototype OK?'
  Object.prototype.easterEgg; //'Hello, world'
  let newObject = {};
  newObject.easterEgg; //'Hello, world'

CONSTRUCTOR FUNCTION
allows groups of objects to be constructed
  function Swordsman(name, hp, dmg) {
    this.name = name;
    this.hp = hp;
    this.damage = dmg;
    this.attacks = 2;
  };
  let swordsman = new Swordsman('Jaime', 100, 40);
  swordsman; //Swordsman(name: 'Jamie', hp: 100, dmg: 40, attacks: 2)
all objects in this group inherit from the new object
  Swordsman.prototype.getTotalDamage = function() {
    return this.attacks * this.damage;
  };
  swordsman.getTotalDamage; //80
"Adding data properties to a prototype is an anti-pattern. Only add methods
  to a prototype."

rest parameters: three dots handle an infinite number of arguments--it catches everything
  entered into the function
  this is an actual array shown by using indexOf
  function func(str1, str2, ...otherArgs) {
    return otherArgs.indexOf('three');
  };
  func('zero', 'one', 'two', 'three'); //1
automatic semicolon insertion needs the return value of function to be on the
  same line as the return keyword; otherwise, it will be inserted automatically
  and return undefined
functions create an inner and outer scope and allows all variables declared in
  outer scope to be available to inner scope
  let name = 'Game of Thrones';
  function rebranding() {
    name = 'A Song of Fire and Ice';
  };
  rebranding();
  name; // 'A song of Fire and Ice'
DECLARING a variable with the same name as a variable in the outer scrope blocks
  access to the the outer variable in an inner scrop
  let name = 'Game of Thrones';
  function rebranding() {
    let name = 'A Song of Fire and Ice';
  };
  rebranding();
  name; // 'Game of Thrones'
higher order functions are those that return or take as arguments other functions
  function add(x) {
    return function innerAddy(y) {
      return x + y;
    };
  };
  add(4)(5) //9
this is because a function encloses its environment. you can call inner
  functions becasue of closures--a closure is function plus its context
immediately invoked functions are often used in JS
  IIFE + CLOSURE
    const counter = (function() {
      let counterValue = 0;
      return function() {
        return ++counterValue;
      }
    }());
    counter(); //1
    counter(); //2

ACCESS CONTROL
all properties of constructor objects are public
closures allow properties to be accessed directly only by the enclosing function
  function Swordsman(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = dmg;
    let attacks = 2;
    this.getTotalDamage = function() {
      return attacks * damage;
    };
  };
  let swordsman = new Swordsman('Jaime', 100, 40);
  swordsman.getTotalDamage(); //80
  swordsman.dmg; //undefined
  swordsman.damage; //undefined
prototypes do not have access to closures and vice versa
a prototype chain uses an instance as a constructor
  function Lannister() {};
  Lannister.prototype.battleCry = function() { return 'Hear me roar!' };
  function Swordsman(){};
  Swordsman.prototype = new Lannister;
  let swordsman = new Swordsman();
  swordsman.battleCry(); //'Hear me roar!'
Object.create is easier way
  let lannister = { battleCry: function() { return 'Hear me roar!' } };
  let swordsman = Object.create(lannister);
  Object.getPrototypeOf(swordsman) === lannister; //true
  swordsman.battleCry(); //'Hear me roar!'
constructors can be dangerous because they are regular functions, and it is easy
  to mix constructor functions and regular functions; calling constructor function
  without new means this.whatever will not be bound to new object; calling
  a regular function that explicitly returns an object with new will return
  only that object.

functions are objects, with name and length values (empty string is name of
  anonymous function)
each function is tied to a prototype: Function; functions inherit apply and
  call methods from Function.prototype
apply and call methods allow calling a function as though it were the method
  of the object that is called as the first argument
    const returnThis = function(){
      return this;
    };
    returnThis.apply(cls) === cls //true

attributes in other languages are public and private, but this does not exist
  in JS--closures do this
prototype chains and closures are mutually exclusive
Object.create method allows creation of object prototypes without defining
  constructors
    let lannister = { battleCry: function() { return 'Hear me roar!'}};
    let swordsman = Object.create(lannister);
    Object.getPrototypeOf(swordsman) === lannister; //true
    swordsman.battleCry(); //'Hear me roar!'

apply and call methods allow calling a function as if it were a method of the
  object that is passed as the first argument
    const returnThis = function() {
      return this;
    };
    returnThis.apply(cls) === cls; //true
call takes argument; apply takes an array and turns it into an array of arguments
  let cls = {
    name: 'Power of node',
    year: 2016,
  };
  const print = function(times) {
    for(let i = 0; i < times; i++) {
      console.log(this.name)
    }
  };
  print.call(cls, 3)//Power of node //Power of node //Power of node
  print.apply(cls, [3])//Power of node //Power of node //Power of node
when you are stuck with an array, apply can bail you out
  Math.max(3, 5, 9);//9
  Math.max([3, 5, 9])//NaN
  Math.max.apply(null, [3, 5, 9])//9
the spread operator ... will take any array as function arguments
  Math.max(...[3, 5, 9])//9
late binding: allows us to call one object method on another object
  let cls = {
    name: 'Power of node',
    year: 2016,
    print: function() {
      console.log(this.name + ',' + this.year);
    }
  };
  let anotherCls = {
    name: 'Autonomous Navigation',
    year: 2016,
  };
  anotherCls.print = cls.print;
  anotherCls.print(); //Autonomous Navigation, 2016
.bind, though, makes it impossible to access this
  let cls = {
    ...
  }.bind(cls);
value of the returned keyword this is decided at invocation time
