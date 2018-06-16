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

/*
Fake point
Use a single object literal to create an object that is indistinguishable 
from a Point instance, without calling the Point constructor.
*/
