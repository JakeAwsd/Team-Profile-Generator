const Manager = require("../lib/Intern");

test("Intern is an object", () => {

    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});
