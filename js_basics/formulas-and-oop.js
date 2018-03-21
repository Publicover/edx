METHODS

Object.hasOwnProperty('propertyName') //boolean
  //cls.hasOwnProperty('author') //false


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
