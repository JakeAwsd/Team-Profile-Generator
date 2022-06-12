const Manager = require("../lib/Manager");

test("Manager is an object", () => {

    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});

test("Does getRole return Manager?", () => {
    const roleType = "Manager";
    const manager = new Manager("jacob", 1, "jm@jm.com", "DU");
    expect(manager.getRole()).toBe(roleType);
});

test("Does getofficeNumber return Manager?", () => {
    const officeNumber = "24";
    const manager = new Manager("jacob","1", "jm@jm.com", "24");
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});