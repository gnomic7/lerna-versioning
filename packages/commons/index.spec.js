const { helloWorld, greet, fullName } = require("./index");
describe("Commons", () => {
  test("when greeted - displays appropriate greeting", () => {
    expect(greet("John")).toBe("Hi, John");
  });
});
