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


// Define the Teacher interface
interface Teacher {
    workTeacherTasks(): void;
  }
  
  // Define the Director interface that extends Teacher
  interface Director extends Teacher {
    workDirectorTasks(): void;
  }
  
  // Type predicate to check if the employee is a Director
  function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Function to execute work based on the type of employee
  function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
      employee.workDirectorTasks();
    } else {
      employee.workTeacherTasks();
    }
  }
  
  // Example usage
  
  // Teacher object implementing the workTeacherTasks method
  const teacher: Teacher = {
    workTeacherTasks() {
      console.log("Working on teacher tasks");
    }
  };
  
  // Director object implementing both workDirectorTasks and workTeacherTasks methods
  const director: Director = {
    workTeacherTasks() {
      console.log("Working on teacher tasks");
    },
    workDirectorTasks() {
      console.log("Working on director tasks");
    }
  };
  
  // Test the functions
  executeWork(teacher);   // Output: Working on teacher tasks
  executeWork(director);  // Output: Working on director tasks


// String literal type for Subjects
type Subjects = "Math" | "History";

// Function to teach the class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Example usage
console.log(teachClass("Math"));    // Output: Teaching Math
console.log(teachClass("History")); // Output: Teaching History
