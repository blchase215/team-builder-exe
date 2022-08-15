class Employee {
  constructor(name, id, email) {
    this.role = "Employee";
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;

// Testing
// const Brian = new Employee("Brian", 1, "a@b.com");
// console.log(Brian.getName());
// console.log(Brian.getId());
// console.log(Brian.getEmail());
// console.log(Brian.getRole());