const Engineer = require("../lib/Engineer");

test("Intern is an object", () => {

    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});

test("Does getRole return Engineer?", () => {
    const roleType = "Engineer";
    const engineer = new Engineer("jacob", 1, "jm@jm.com", "DU");
    expect(engineer.getRole()).toBe(roleType);
});

test("Does getGithub return Engineer?", () => {
    const getGithub = "https://github.com/JakeAwsd";
    const engineer = new Engineer("jacob", 1, "jm@jm.com", getGithub);
    expect(engineer.getGithub()).toBe(getGithub);
});
