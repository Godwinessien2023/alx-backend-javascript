// 1. Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // 2. Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  // 3. Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // 4. Render a table in Vanilla JavaScript
  function renderTable(students: Student[]): void {
    const table = document.createElement("table");
    const tableHeader = `
      <thead>
        <tr>
          <th>First Name</th>
          <th>Location</th>
        </tr>
      </thead>
    `;
    table.innerHTML = tableHeader;
  
    const tableBody = document.createElement("tbody");
  
    students.forEach((student) => {
      const row = document.createElement("tr");
  
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
  
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
  // Call the function to render the table
  renderTable(studentsList);
  