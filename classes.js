// #
// Class Exercises
/* 
Question 1
a. Write a class called Person that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a Person. Print one of their first names.*/
/*
 b. Write a method in Person called fullName that will
 return a formatted string of an instance 's full name. Call this method on both the instances you created in part a.*/

class Person {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} full name is ${this.firstName} ${this.middleName} ${this.lastName}.`
    }
}
const personOne = new Person("Beyonce", "Giselle", "knowles-Carter")
const personTwo = new Person("Shawn", "Corey", "Carter")

console.log(personOne.fullName())
console.log(personTwo.fullName())

/*
Question 2
a.Create a class called Book that has properties title, author and rating.Create some instances of Book. */
/* 
b.b.Add a method to Book called isGood that returns true
if its rating is greater than or equal to 7. */

class Book {
    constructor(title, author, rating) {
        this.title = title;
        this.author = author;
        this.rating = rating;
    }
    isGood() {
        return this.rating <= 7
    }
}
let bookOne = new Book("Javascript for Kids", "Nick Morgan", 10);
console.log(bookOne.isGood())

/* 
Question 3
a.Create a Dog class with four properties: name(string), breed(string), mood(string), and hungry(boolean).

b.Add a method called playFetch. It should set the dog's hungry property to true, set its mood property to playful, and log "Ruff!"

c.Add a method called feed.If the dog is hungry, it should set hungry to false and print "Woof!"
If the dog is not hungry, it should log "The dog doesn't look hungry"

d.Add a method called toString that returns a description of the dog: */

class Dog {
    constructor(name, breed, mood, hungry) {
        this.name = name;
        this.breed = bred;
        this.mood = mood;
        this.hungry = hungry;
    }
    playFetch() {
        this.hungry = true;
        this.mood = playful;
        console.log(`${this.mood} + Ruff!`)
    }

    feed() {
        if (`${this.hungry} === true`) {
            this.hungry = false
            console.log("woof")
        } else {
            console.log("The dog doesn't look hungry")
        }
    }
    toString() {
        console.log(`The dog name ${this.name} is a ${this.breed} and looks ${this.mood} and its ${this.hungry} that he is hungry.`)
    }
}

/* 
Question 4
There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

    C = (F - 32) / 1.8 F = 1.8 * C + 32 K = C + 273

a.Make an object called freezingPoint that has three properties: celsius, fahrenheit, and kelvin.Give them all values equal to the freezing point of water.*/

/* b.Make a class called Celsius that has one property: celsius, and two methods getFahrenheitTemp, and getKelvinTemp.

let outsideTempt = new Celsius(10.0)
outsideTempt.celsius //returns 10.0
outsideTempt.getKelvinTemp() //returns 283.0
outsideTempt.getFahrenheitTemp() //returns 50.0

c.Give Celsius a method called isBelowFreezing that returns a Bool(true
    if the temperature is below freezing). */

let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.1
}

class Celsius {
    constructor(celsius) {
        this.celsius = celsius;
    }
    getFahrenheitTemp() {
        return 1.8 * this.celsius + 32

    }
    getKelvinTemp() {
        return this.celsius + 273
    }
    isBelowFreezing() {
        if (this.celsius < 0) {
            return true
        } else {
            return false
        }
    }
}
let outsideTempt = new Celsius(10)
console.log(outsideTempt.getKelvinTemp()) //returns 283.0
console.log(outsideTempt.getFahrenheitTemp()) //returns 50.0

/*Question 5
a.Create a class called Movie that has properties
for name, year, genre, cast, and description.Create an instance of your Movie

b.Create an method inside Movie called blurb that returns a formatted string describing the movie.

Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."*/
class Movie {
    constructor(name, year, genre, cast, description) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.cast = cast;
        this.description = description;
    }
    blurb() {
        return `${this.name} is a movie release ${this.year} about a struggling salesman played by ${this.cast}. ${this.description}.`
    }
}
let movieOne = new Movie("The Pursuit of Happyness", 2006, "drama", "Will Smith", "The Pursuit of Happyness is a movie release in 2006 about a struggling salesman played by Will Smith. He takes custody of his son as he's poised to begin a life-changing professional career.")
console.log(movieOne.blurb());

/*Question 6
Write a class Vector that represents a vector in two - dimensional space.It takes two number arguments: x and y parameters, which it should be saved to properties of the same name.

Give the Vector prototype two methods, plus and minus, that take another vector as an argument and returns a new vector that has the sum or difference of the two vectors’(the one in this and the parameter) x and y values.

Add a method getLength to the prototype that computes the length of the vector;
that is, the distance of the point(x, y) from the origin(0, 0).(a ^ 2 + b ^ 2 = c ^ 2)

Vectors at mathisfun.com

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// => 5*/
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function (x, y) {

}
Vector.prototype.minus = {}

/* Question 7
a.Write a class called Cylinder that has properties radius and height.Create an instance of a Cylinder.

b.Add an instance method getVolume that returns the volume

c.Add an instance method getSurfaceArea that returns the surface area. */

// class Cylinder {
//     constructor(radius, height) {
//         this.radius = radius;
//         this.height = height;
//     }
//     getVolume() {
//         return Math.PI;
//     }
//     getSurfaceArea() {

//     }
// }
// let cylinder = new Cylinder(5, 30);
// let getVolume =
//     let getSurfaceArea =


/*Question 8
Dates in JavaScript
a.Write a class called Post that has properties datePosted, user, and text.Create an array of Post objects.
b.Create an instance method that returns whether or not the post was made today.
c.Filter your array of Post objects to only include posts made today. */

/* Question 9
a.Make a class called Car with properties make and model.Create an instance of a Car
b.Make a class called Bike with properties gears and hasBell.Create an instance of Bike
c.Give each class a static method called numberOfWheels that returns the number of wheels(2 for bikes, 4 for cars).Why does it make sense for this to be a static method instead of an instance method ? */

/*Question 10
a.Make a class called Vehicle with properties color and name.Give it a method called makeSound which logs "WHHOOSSSH" to the console
b.Modify your Car and Bike classes from Question 7 to extend the Vehicle class.
c.Create a new Bike instance that has a color of "green"
and name "Bikey McBikeface"
d.Create a new Car instance that has a color of "red" and name "Carry McCarface." */

class Vehicles {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    makeSound() {
        console.log("WHHOOSSSH");
    }
}

class Bike extends Vehicles {
    constructor(color, name, ) {
        super(color, name);
    }
}
class Car extends Vehicles {
    constructor(color, name) {
        super(color, name);
    }
}

let bikeOne = new Bike("green", "Bikey McBikeface");
let carOne = new Car("red", "Carry McCarface");
console.log(bikeOne.makeSound())
console.log(carOne.makeSound())
console.log(bikeOne)
console.log(carOne)