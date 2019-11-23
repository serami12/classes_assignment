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