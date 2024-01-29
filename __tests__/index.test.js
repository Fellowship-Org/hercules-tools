// __tests__/index.test.js

const add = require("../index");

// this will always pass
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

// this might fail randomly
test("might fail randomly", () => {
  expect(add(1, 2)).toBe(Math.random() > 0.5 ? 3 : 4);
});
