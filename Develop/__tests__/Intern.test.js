const Intern = require("../lib/Intern");

test("Intern is an object", () => {

    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});


test("Can Employee have a name?", () => {
    const name = "Jacob";
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
});
