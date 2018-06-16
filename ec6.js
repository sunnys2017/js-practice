/*
Point
https://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Point
Write a class called Point, which represents a point in two-dimensional space. 
A point has x and y properties, given as arguments to its constructor.
It also has a single method plus, which takes another point and returns 
the sum of the two points, that is, a new point whose x is the sum of the x 
properties of the two original points, and whose y is the sum of their y 
properties.
*/
// Your code here
class Point {
 constructor(x,y){
   this.x=x;
   this.y=y;
 }
 plus(Point){
   this.x=this.x+Point.x;
   this.y=this.y+Point.y;
   return this;
 }
}
console.log(new Point(1, 2).plus(new Point(2, 1)))
// → Point{x: 3, y: 3}

/*
Speaker upgrade
Rewrite these two object types to use the class keyword, instead of direct 
prototype manipulation. Speaker is a simple type that exposes a speak method 
which, when called, logs the given text along with the speaker's name. 
Shouter is a subtype of Speaker which shouts its text and makes it uppercase.
*/
/*
function Speaker(name, verb) {
  this.name = name
  this.verb = verb || "says"
}
Speaker.prototype.speak = function(text) {
  console.log(this.name + " " + this.verb + " '" + text + "'")
}

function Shouter(name) {
  Speaker.call(this, name, "shouts")
}
Shouter.prototype = Object.create(Speaker.prototype)
Shouter.prototype.speak = function(text) {
  Speaker.prototype.speak.call(this, text.toUpperCase())
}

new Shouter("Dr. Loudmouth").speak("hello there")
*/

/*
class Speaker{
  constructor(name,verb){
    this.name=name;
    this.verb=verb || "says";
  }
  speak(text){
  	console.log(this.name + " " + this.verb + " '" + text + "'");
  }
}

class Shorter extends Speaker{
  constructor(name){
    super(name,"shouts");
  }
  speak(text){
    //console.log(this.name + " " + this.verb + (" '" + this.text + "'").toUpperCase());
    super.speak(text.toUpperCase());
  }
}

let s = new Shorter("Dr. Loudmouth");
s.speak("lalal");
*/

/*
Getters
This is the way the solution to the previous exercise might look.
The way the verb property is set per instance rather than per class is kind 
of awkward. Refactor the code to use a getter (get verb() { ... }) instead 
of an instance property.
*/

class Speaker {
  constructor(name,verb) {
    this.name = name
    this.verb = verb || this.getVerb()
  }
  getVerb() {
    return "says";
  }
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'")
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name)
  }
  getVerb(){
    return "shorts"
  }
  speak(text) {
    super.speak(text.toUpperCase())
  }
}
new Speaker("Dr. Loudmouth").speak("hello there")
new Shouter("Dr. Loudmouth").speak("hello there")
//Dr. Loudmouth says 'hello there'
//Dr. Loudmouth shorts 'HELLO THERE'

/*Object literals.1:
Fake point
Use a single object literal to create an object that is indistinguishable 
from a Point instance, without calling the Point constructor.
*/


/*Object literals.2:
Configurable property
Fill in the startNode function using a single object literal. The function 
should return an object with type and value properties containing the value of 
the arguments by those names, and a third property, named by the sourceProperty 
option, set to the value of the sourceValue option.
*/
function startNode(type, value, options) {
  return {//your code here
    type,
    value,
    src: options.sourceValue
  }
}

console.log(startNode("Identifier", "foo", {
  sourceProperty: "src",
  sourceValue: "bar.js"
}))
// → {type: "Identifier",
//    value: "foo",
//    src: "bar.js"}

/*Object literals.3:
Singleton
Add a get method to the ids object, which returns the next id and increments 
its next counter. Use the short method syntax.
*/
var ids = {
  next: 0, //your code here
  get(){
    return this.next++
  }
}

console.log(ids.get())
// → 0
console.log(ids.get())
// → 1

/*Block scope.1:
Closing over scope
This is a typical mistake to make in JavaScript. We create a number of functions in 
 loop, and refer to an outside variable from these functions. All of them will end
  up referring to the same variable, which ends up being incremented to 10. Thus, 
  callbacks[2] does not log 2. It logs 10, as do all functions in the array.
Do you know the solution for such situations in ES5? Does ES6 provide a cleaner 
solution?
var callbacks = []
for (var i = 0; i < 10; i++) {
  callbacks.push(function() { console.log(i) })
}
callbacks[2]()
*/
var callbacks = []
for (let i = 0; i < 10; i++) {
  callbacks.push(function() { console.log(i) })
}
callbacks[2]()

/*
Block scope.2:
Constant non-constance
Does the fact that account is constant mean that we can't update password? 
Why, or why not? And if not, how could we make it so that we can't?
const account = {
  username: "marijn",
  password: "xyzzy"
}
account.password = "s3cret" // (*much* more secure)
console.log(account.password)
this only makes the variable itself immutable, not its assigned content 
(for instance, in case the content is an object, this means the object 
itself can still be altered).
Use Object.freeze() to make object immutable
*/
const account = {
  username: "marijn",
  password: "xyzzy"
}
Object.freeze(account) //my code here
account.password = "s3cret" // (*much* more secure)

console.log(account.password)

/*Block scope.3:
Hoist the class
This code produces an error. So apparently, unlike functions, classes are 
not hoisted to the top of their scope. (They are block-scoped.)
What could be the reason for this?
let s = new Something()
class Something {}
*/

/*
The difference between var/function/function* declarations and let/const/class 
declara­tions is the initialisation.
The former are initialised with undefined or the (generator) function right 
when the binding is created at the top of the scope. The lexically declared 
variables however stay uninitialised. This means that a ReferenceError exception
 is thrown when you try to access it. It will only get initialised when the 
 let/const/class statement is evaluated, everything before (above) that is called
  the temporal dead zone.
*/

/*
Arrow functions.1:
Accounting
Write an expression using higher-order array methods (say, filter and reduce) to 
compute the total value of the machines in the inventory array.
*/


