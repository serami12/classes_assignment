// #
// Class Exercises
/* 
Question 1
a. Write a class called Person that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a Person. Print one of their first names.*/
/*
 b. Write a method in Person called fullName that will
 return a formatted string of an instance 's full name. Call this method on both the instances you created in part a.*/

// class Person {
//     constructor(firstName, middleName, lastName) {
//         this.firstName = firstName;
//         this.middleName = middleName;
//         this.lastName = lastName;
//     }
//     fullName() {
//         return `${this.firstName} full name is ${this.firstName} ${this.middleName} ${this.lastName}.`
//     }
// }
// const personOne = new Person("Beyonce", "Giselle", "knowles-Carter")
// const personTwo = new Person("Shawn", "Corey", "Carter")

// console.log(personOne.fullName())
// console.log(personTwo.fullName())

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
}
let bookOne = new Book("Javascript for Kids", "Nick Morgan", 10);