#!/usr/bin/env node
// @flow

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const chalk = require('chalk');
const pkg = require('../package.json');
const extract = require('../src/index');

// CLI Arguments
const { _: [pattern], outFile } = require('yargs')
  .usage(
    `Usage: ${chalk.green('$0')} <pattern> [options]\n
<pattern>\t Glob pattern to specify files.
\t Needs to be surrounded with quotes to prevent shell globbing.
\t Guide to globs: https://github.com/isaacs/node-glob`
  )
  .demandCommand(1, 1, 'Missing <pattern>')
  .strict()
  .option('o', {
    alias: 'out-file',
    describe: 'Output into a single file',
    nargs: 1,
    type: 'string',
  })
  .alias('h', 'help')
  .version(pkg.version)
  .alias('v', 'version')
  .locale('en')
  .example(`$0 'src/App.js'`, 'One file.')
  .example(`$0 'src/**/*.js'`, 'Pattern to specify files')
  .example(`$0 'src/**/*.js' -o message.json`, 'Output into a single file.')
  .epilogue(
    'For more information go to https://github.com/evenchange4/react-intl-cra'
  )
  .fail((msg, err) => {
    if (err) throw err; // preserve stack
    console.error(chalk.red(msg)); // eslint-disable-line
    process.exit(1);
  }).argv;

const result = JSON.stringify(extract(pattern), null, 2);

// Output
if (outFile) {
  spawnSync('mkdir', ['-p', path.dirname(outFile)]);
  fs.writeFileSync(outFile, result);
  console.log( // eslint-disable-line
    `${path.relative(process.cwd(), pattern)} -> ${path.relative(
      process.cwd(),
      outFile
    )}`
  );
} else {
  console.log(result); // eslint-disable-line
}
