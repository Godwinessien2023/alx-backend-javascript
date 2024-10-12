// Define the Teacher interface
interface Teacher {
    readonly firstName: string;  // Readonly, modifiable only on initialization
    readonly lastName: string;   // Readonly, modifiable only on initialization
    fullTimeEmployee: boolean;   // Required
    yearsOfExperience?: number;  // Optional
    location: string;            // Required
  
    // Allow additional properties (like 'contract' or any other)
    [key: string]: any;
  }
  
  // Initialize two Teacher objects
  const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: false,  // Additional property not predefined in the interface
  };
  
  const teacher2: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: false,
    yearsOfExperience: 10,  // Optional property
    location: "Los Angeles",
    contract: true,  // Additional property
  };
  
  // Example usage: Display the teachers
  console.log(teacher1);
  console.log(teacher2);
  

  // Directors interface that extends Teacher
  interface Directors extends Teacher {
    numberOfReports: number;  // New attribute required for Directors
  }
  
  // Example usage: Initialize a Director object
  const director1: Directors = {
    firstName: "Michael",
    lastName: "Scott",
    fullTimeEmployee: true,
    location: "Scranton",
    numberOfReports: 10,  // Required attribute for Directors
    contract: true        // Additional property inherited from Teacher
  };
  
  // Example usage: Display the director
  console.log(director1);


// Define the interface for the function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the function
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Example usage
  console.log(printTeacher("John", "Doe"));  // Output: J. Doe
  console.log(printTeacher("Jane", "Smith"));  // Output: J. Smith  


// Define the interface for the constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Define the interface for the class itself
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the class StudentClass
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    // Constructor
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Method: workOnHomework
    workOnHomework(): string {
      return "Currently working";
    }
  
    // Method: displayName
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage
  const student = new StudentClass({ firstName: "John", lastName: "Doe" });
  console.log(student.displayName());      // Output: John
  console.log(student.workOnHomework());  // Output: Currently working

  
  