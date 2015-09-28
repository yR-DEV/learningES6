let evens = [1, 2, 3, 4];
let squared = evens.map(v => v * v);
// console.log(squared); //-> [ 1, 4, 9, 16 ]

//this is arrow function notation
//the es5 syntax is below
var sq = a => a * a;

var square = function square(a) {
  return a * a;
};

var add = (a, b) => a + b;

var addES5 = function addES5(a, b) {
  return a+ b;
};

//ES6 Object syntax below
class Zombie {
  //constructor function that sets attributes of Zombie object
	constructor () {
		this.type = 'zombie';
		this.hitPoints = 100;
	}
  //getting a method name, from what I shortly googles
  //this is calling on functions? its like a prototype function, the set is like a prototype function as well
	get health () {
		return this.hitPoints;
	}
  //setting method name for the zombie object
	set health (hitPoints) {
		this.hitPoints = hitPoints;
	}
  //I believe this is a static prototype function
  //it is just calling on the functions listed in it.
  //I dont know if setting static in front of bite will do anything
	bite (human) {
		human.kill();
		convertToZombie(human);
	}
}


//ES5 of an object Animal that has a prototype function of speak.
//in es5 in order to make a prototype "Cat" that shares animal properties
//you need to make the cat prototype a new animal. In es6 this is much simpler with 'extends'
function Animal () {
}
Animal.prototype.speak = function () {
  console.log('I am an animal!');
}

function Cat () {
}
Cat.prototype = new Animal();
Cat.prototype.speak = function () {
  Animal.prototype.speak.call(this);
  console.log("I am a cat too!");
}


//this is the es6 of what is above, not quite sure what super does before speak function
class Animal {
	speak() {
		console.log("I am an animal!");
	}
}
class Cat extends Animal {
	speak() {
		super.speak();
		console.log("I am a cat too!");
	}
}

//reading about template strings, not going to copy paste any of themhere
//but it is denotated with the ``
//so like a multiline hello world is below
// `Hello
// World!`
//copy and pasted the two below because it is important
//ES6:
var w = 'world';
`Hello ${w}!`

//in es5 is:

//ES5:
var w = 'world';
'Hello ' + w + '!'


//this is important and need to remember it when requiring npm and bower packages in my apply
const $ = require('jquery');
const ADD_ACTION = 1;
