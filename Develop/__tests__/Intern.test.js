const Intern = require("../lib/Intern");

test("Intern is an object", () => {

    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

test("Can intern have a name?", () => {
    const name = "Jacob";
    const intern = new Intern(name);
    expect(intern.name).toBe(name);
});

test("Can an intern have a school?", () => {
    const school = "DU";
    const intern = new Intern("jacob", 1, "jm@jm.com", school);
    expect(intern.school).toBe(school);
});

test("Does getSchool return INTERN?", () => {
    const school = "DU";
    const intern = new Intern("jacob", 1, "jm@jm.com", "DU");
    expect(intern.getSchool()).toBe(school);
});

test("Does getRole return INTERN?", () => {
    const roleType = "Intern";
    const intern = new Intern("jacob", 1, "jm@jm.com", "DU");
    expect(intern.getRole()).toBe(roleType);
});