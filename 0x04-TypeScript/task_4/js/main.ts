
/// <reference path="../../task_4/js/subjects/Cpp.ts" />
/// <reference path="../../task_4/js/subjects/Java.ts" />
/// <reference path="../../task_4/js/subjects/React.ts" />

namespace Subjects {
    // Create and export constants for each subject
    export const cpp = new Cpp();
    export const java = new Java();
    export const react = new React();
  
    // Create and export a Teacher object with experienceTeachingC
    export const cTeacher: Teacher = {
      firstName: 'Jane',
      lastName: 'Smith',
      experienceTeachingC: 10,
    };
  
    // Cpp subject
    console.log('C++');
    cpp.setTeacher(cTeacher);
    console.log(cpp.getRequirements()); // Output: Here is the list of requirements for Cpp
    console.log(cpp.getAvailableTeacher()); // Output: Available Teacher: Jane
  
    // Java subject
    console.log('Java');
    java.setTeacher(cTeacher);
    console.log(java.getRequirements()); // Output: Here is the list of requirements for Java
    console.log(java.getAvailableTeacher()); // Output: Available Teacher: Jane
  
    // React subject
    console.log('React');
    react.setTeacher(cTeacher);
    console.log(react.getRequirements()); // Output: Here is the list of requirements for React
    console.log(react.getAvailableTeacher()); // Output: Available Teacher: Jane
  }
  