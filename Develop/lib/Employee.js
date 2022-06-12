class Employee {

    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;
        // this is the base class 
        // super is used to call the base classes constructor so we wouldnt use it here, instead we should use this.
        // super(id, name, email);
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
        return "Employee";
    }
  }
  module.exports = Employee;
  