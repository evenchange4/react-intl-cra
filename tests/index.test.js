// @flow
const extract = require('../src/index');

it('should extract with source pattern', () => {
  const srcPattern = './tests/cra-project/src/**/*.js';
  const result = extract(srcPattern);
  expect(result).toMatchSnapshot();
});

it('should extract with one file ', () => {
  const srcPattern = './tests/cra-project/src/Header.js';
  const result = extract(srcPattern);
  expect(result).toMatchSnapshot();
});
