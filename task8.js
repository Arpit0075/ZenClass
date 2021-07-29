//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG = function (arr) {
    return arr.filter((m) => {
      return m.rating === "PG";
    });
  };
}

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie2 = new Movie("Avengers", "Disney", "PG15");
let movie3 = new Movie("Fight Club", "Dalmount", "PG18");
let movie4 = new Movie("Avengers End Game", "Disney");
let movie5 = new Movie("Lion King", "Disney");
const arr = [movie1, movie2, movie3, movie4, movie5];
let a = movie1.getPG(arr);
console.log(arr); //returns the array of movies
console.log(a); // return movies with PG rating

//Convert the UML diagram to Typescript class. - use number for double
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getCircumference() {
    let res = 2 * Math.PI * this.radius;
    return res;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

let circle1 = new Circle(2, "red");
let circle2 = new Circle(5, "yellow");
let circle3 = new Circle(10, "black");
console.log(circle3.getCircumference());
console.log(circle1.radius);
console.log(circle2.getArea());

//Write a “person” class to hold all the details.
class Person {
  constructor(name, age, city, highestQualification) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.highestQualification = highestQualification;
    this.hobby = [];
  }
  setHobby(hobby) {
    this.hobby.push(hobby);
  }
  getHobby() {
    return this.hobby;
  }
}

let person1 = new Person("Jane", 24, "Bilaspur", "MBA");
person1.setHobby("Swimming");
console.log(person1);
console.log(person1.getHobby());

//write a class to calculate uber price.
class UberPricing {
  constructor(distanceToTravel, initinalDistance = 0) {
    this.distanceToTravel = distanceToTravel;
    this.initinalDistance = initinalDistance;
  }
  getPrice() {
    return (this.distanceToTravel - this.initinalDistance) * 5.07;
  }
}

let uber1 = new UberPricing(5);
console.log(uber1.distanceToTravel);
console.log(uber1.getPrice());
