// @flow
const fs = require('fs');
const R = require('ramda');
const glob = require('glob');
const babel = require('babel-core');

process.env.NODE_ENV = 'production'; // For babel.transform

function extract(srcPattern /* : string */) /* : string */ {
  const srcPaths = glob.sync(srcPattern, { absolute: true });
  const relativeSrcPaths = glob.sync(srcPattern);
  const contents = srcPaths.map(p => fs.readFileSync(p, 'utf-8'));
  const messages = contents
    .map(content =>
      babel.transform(content, {
        presets: [require.resolve('babel-preset-react-app')],
        plugins: [require.resolve('babel-plugin-react-intl')],
        babelrc: false,
      }),
    )
    .map(R.path(['metadata', 'react-intl', 'messages']));

  const result = R.zipWith(
    (m, r) => m.map(R.assoc('filepath', r)),
    messages,
    relativeSrcPaths,
  )
    .filter(m => m.length !== 0)
    .reduce((acc, m) => acc.concat(m), []);

  return result;
}

module.exports = extract;
