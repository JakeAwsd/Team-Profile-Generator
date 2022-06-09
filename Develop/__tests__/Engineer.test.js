const Engineer = require("../lib/Intern");

test("Intern is an object", () => {

    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});
