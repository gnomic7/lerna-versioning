const { sayHello, greet } = require("./index");
describe("Commons", () => {
  test("when greeted - displays appropriate greeting", () => {
    expect(greet("John")).toBe("Hello, John");
  });
  test("When called sayHello, it displays appropriate message", () => {
    expect(sayHello("John")).toBe("Hello John, how are you doing?");
  });
});
