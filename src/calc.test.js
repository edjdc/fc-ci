const calc = require("./calc");

test("should sum", () => {
  const result = calc.sum(1, 2);
  expect(result).toEqual(3);
});

test("should sub", () => {
  const result = calc.sub(1, 2);
  expect(result).toEqual(-1);
});
