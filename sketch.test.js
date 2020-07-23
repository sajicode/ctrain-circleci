const sum = require('./sketch');

test('adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
})