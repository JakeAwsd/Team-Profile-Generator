const Employee = require('./Employee');

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Intern"
  }
}

module.exports = Manager