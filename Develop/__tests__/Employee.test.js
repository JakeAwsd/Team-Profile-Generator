const Employee = require("../lib/Employee");

test("Employee is an object", () => {

    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});


test("Can Employee have a name?", () => {
    const name = "Jacob";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can Employee have an Id?", () => {
    const id = "1";
    const employee = new Employee("jacob", id, "jm@jm.com");
    expect(employee.id).toBe(id);
});

test("Can Employee have an email?", () => {
    const email = "jm@jm.com";
    const employee = new Employee("jacob", "1", email);
    expect(employee.email).toBe(email);
});

test("Does getName return Name?", () => {
    const name = "jacob";
    const employee = new Employee("jacob", "1", "jm@jm.com", "DU");
    expect(employee.getName()).toBe(name);
});

test("Does getEmail return Email?", () => {
    const Email = "jm@jm.com";
    const employee = new Employee("jacob", "1", Email, "DU");
    expect(employee.getEmail()).toBe(Email);
});

test("Does getId return Id?", () => {
    const id = "1";
    const employee = new Employee("jacob", id, "jm@jm.com", "DU");
    expect(employee.getId()).toBe(id);
});

test("Does getRole return Employee?", () => {
    const roleType = "Employee";
    const employee = new Employee("jacob", "1", "jm@jm.com", "DU");
    expect(employee.getRole()).toBe(roleType);
});

