COMMANDS

console.log("Write a string here");
Math.pow(2, 10); //1024
Math.abs(-6); //6
Math.ceil(5.67); //6
Math.sqrt(36); //6
"GoT".length; //3
"GoT".charAt(0); //G
Object.keys(objName); //gives key of key-value pair
objName.firstKey; //gives value of first key
  var exArr = ["jim", "pubs", 2, false]
  exArr.length //4

LANGUAGE

JS ignores tabs and whitespaces
VARIABLES should be declared before they are implemented
  three ways to do it
    var x = "jim"; (declares both local and global variables)
    x = "jim"; (always declares global variable)
    let x = "jim"; (declares block scope local variable)
CONSTANTS are read-only and cannot be redeclared; must be initialized
  upon declaration
  const PI = 3.14
accessing undeclared variables throws ReferenceError exception
accessing declared but uninitialized variables returns undefined
a fixed variable literally provided to a variable is called a literal

JS is untyped language--you do not need to declare data type in variables
data types are either
  PRIMITIVE: have a fixed size and memory
  REFERENCE: objects (mapping between keys and values) and arrays
    (indexed list-like objects) do not have
numbers are float or integer
undefined is variable that has been declared but not initialized (given a value)
null indicates absence of value
  with booleans, evaluates to false
  with numbers, evaluates to 0
object: like Ruby hash; keys are always string // var king = { "first": 1 }
array: works like in Ruby, including indexed calling of elements (objName[0])

Hoisting refers to moving var declaration to top of function so it is used
  before it is declared; always returns undefined
  console.log(x); var x = 3 //undefined
  console.log(y); let y = 4 // ReferenceError: y is not defined
Hoisting functions brings them to the top of the block; only declaration is
  hoisted, not expression
  function foo() {}; //function declaration
  var x = function () {}; //function expression

loops need initializer, termination condition and updater
  for (i = 0; i < 10; i++) {
    console.log(i);
  };
'for/in' use object properties (hash)
  var king = { firstName: "Ned", lastName: "Stark", age: 40 }
  for (let i in king) {
    console.log(i);
  }; //returns 'firstName', 'lastName', 'age'
'for/of' use array elements
  var king = ["Ned", "Stark", 40, "Lord of Winterfell"]
  for (let i of king) {
    console.log(i);
  }; //returns "Ned", "Stark", "40", "Lord of Winterfell"
  // using (let i in king) returns indexes: 0, 1, 2, 3
'while' iterates until condition is met
  var i = 0
  while (i < 5) {
    console.log(i);
    i++;
  };
"do while" evaluates after running the code, so it is executed at least once
  var i = 0
  do {
    console.log(i);
    i++;
  } while (i < 5);

'if, else, else if' like ruby
  if (condition) {
    execute code if true;
  };
  if (x > 0) {
    text = "x is positive";
  } else if (x < 0) {
    text = "x is negative";
  } else {
    text = "x is 0";
  };
  switch (expression) {
    case n:
      code block;
      break;
    case m:
      code block;
      break;
    default:
      default block;
  };

  switch (king) {
    case "Ned":
      console.log("firstName");
      break;
    case "Stark":
      console.log("lastName");
      break;
    case "40":
      console.log("age");
      break;
    default:
      console.log("this is someone else");
  }
