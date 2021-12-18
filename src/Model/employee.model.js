class Employee {
  constructor(firstName, lastName, department, phoneNumber) {
    this.id = Date.now();
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.phoneNumber = phoneNumber;
  }
}

export default Employee;
