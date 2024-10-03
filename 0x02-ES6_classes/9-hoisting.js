#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */

// HolbertonClass definition
export class HolbertonClass {
    constructor(year, location) {
      this._year = year;
      this._location = location;
    }
  
    // Getter for year
    get year() {
      return this._year;
    }
  
    // Getter for location
    get location() {
      return this._location;
    }
  }
  
  // StudentHolberton definition
  export class StudentHolberton {
    // Constructor accepts firstName, lastName, and holbertonClass
    constructor(firstName, lastName, holbertonClass) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._holbertonClass = holbertonClass; // Assign holbertonClass correctly
    }
  
    // Getter for full name
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  
    // Getter for holbertonClass
    get holbertonClass() {
      return this._holbertonClass;
    }
  
    // Full student description
    get fullStudentDescription() {
      return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    }
  }
  
  // Instantiate HolbertonClass objects
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  
  // Instantiate StudentHolberton objects with class reference
  const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
  const student2 = new StudentHolberton('John', 'Doe', class2020);
  const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
  const student4 = new StudentHolberton('Donald', 'Bush', class2019);
  const student5 = new StudentHolberton('Jason', 'Sandler', class2019);
  
  // Export list of students
  export const listOfStudents = [student1, student2, student3, student4, student5];