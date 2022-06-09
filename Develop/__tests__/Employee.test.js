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
