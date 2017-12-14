#!/usr/bin/env node
// @flow

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const extract = require('../src/index');

const srcPattern = process.argv[2];
const desPath = process.argv[3];

if (!srcPattern || !desPath) {
  console.log('[React-intl-cra] error - srcPattern and desPath isRequired');
  process.exit(1);
}

const result = extract(srcPattern);

// Output
spawnSync('mkdir', ['-p', path.dirname(desPath)]);
fs.writeFileSync(desPath, JSON.stringify(result, null, 2));
console.log(
  `${path.relative(process.cwd(), srcPattern)} -> ${path.relative(
    process.cwd(),
    desPath,
  )}`,
);
