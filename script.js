// Ejercicio 1
console.log(hello);
var hello = "world";

/* AFTER HOSTING BY THE INTERPRETER
var hello;
console.log(hello); //logs undefined
hello = "world";
*/

// Ejercicio 2
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}

/* AFTER HOSTING BY THE INTERPRETER
var needle;
function test(){
    var needle;
    needle = "magnet";
    console.log(needle);
}
needle = "haystack";
test();
*/

// Ejercicio 3
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);

/* AFTER HOSTING BY THE INTERPRETER
var brendan;
function print(){
    brendan = "only okay";
    console.log(brendan);    
}
brendan = "super cool";
console.log(brendan);
*/

//Ejercicio 4
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}

/* AFTER HOSTING BY THE INTERPRETER
var food;
function eat() {
    var food;
    food = "half-chicken";
    console.log(food);
    food = "gone";
}
food = "chicken";
console.log(food);
eat();
*/

//Ejercicio 5
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);

/* AFTER HOSTING BY THE INTERPRETER
var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
};
console.log(food);
*/

//Ejercicio 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

/* AFTER HOSTING BY THE INTERPRETER
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
*/

//Ejercicio 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

/* AFTER HOSTING BY THE INTERPRETER
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
var dojo;
dojo = "san jose";
console.log(dojo);
learn()
console.log(dojo);
*/

//Ejercicio 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

/* AFTER HOSTING BY THE INTERPRETER
function makeDojo(name, students) {
    const dojo;
    dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
*/