/**
 * @jest-environment node
 *
 * @flow
 */

const { execSync } = require('child_process');
const extract = require('../src/index');

it('should extract with source pattern', () => {
  const srcPattern = './tests/cra-project/src/**/*.js';
  // Fn
  expect(extract(srcPattern)).toMatchSnapshot();
  // CLI
  expect(
    execSync(`./bin/index.js '${srcPattern}'`).toString()
  ).toMatchSnapshot();
});

it('should extract with one file', () => {
  const srcPattern = './tests/cra-project/src/Header.js';
  // Fn
  expect(extract(srcPattern)).toMatchSnapshot();
  // CLI
  expect(
    execSync(`./bin/index.js '${srcPattern}'`).toString()
  ).toMatchSnapshot();
});

it('should print --help', () => {
  expect(execSync(`./bin/index.js --help`).toString()).toMatchSnapshot();
});

it('should log error', () => {
  try {
    execSync(`./bin/index.js`);
  } catch (error) {
    expect(error).toMatchSnapshot();
  }
});
