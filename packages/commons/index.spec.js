const { helloWorld, greet, fullName } = require("./index");
describe("Commons", () => {
  test("Any this is true", () => {
    expect(1 + 1).toBe(2);
  });
  test("Display full name when first and last name is porvided", () => {
    expect(fullName("John", "Doe")).toBe("John Doe");
  });
  test("when greeted - displays appropriate greeting", () => {
    expect(greet("John")).toBe("Hi, John");
  });
  test("Should display hello world message", () => {
    expect(helloWorld()).toBe("Hello World");
  });
});
