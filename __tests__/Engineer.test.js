const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Can set Github username via constructor argument", () => {
    const testValue = "Username1";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.githubUsername).toBe(testValue);
});

test("getRole() should return 'Engineer'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "Username1");
    expect(e.getRole()).toBe(testValue);
});

test("Can get Githube username via getGithub()", () => {
    const testValue = "Username1";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});