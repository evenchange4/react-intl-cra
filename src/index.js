// @flow
const fs = require('fs');
const R = require('ramda');
const glob = require('glob');
const babel = require('babel-core');

process.env.NODE_ENV = 'production'; // For babel.transform

function extract(pattern /* : string */, babelPlugins = []) /* : string */ {
  const srcPaths = glob.sync(pattern, { absolute: true });
  const relativeSrcPaths = glob.sync(pattern);
  const contents = srcPaths.map(p => fs.readFileSync(p, 'utf-8'));
  const reqBabelPlugins = babelPlugins.map(b =>
    require.resolve(`babel-plugin-${b}`)
  );
  const messages = contents
    .map(content =>
      babel.transform(content, {
        presets: [require.resolve('babel-preset-react-app')],
        plugins: [
          require.resolve('babel-plugin-react-intl'),
          ...reqBabelPlugins,
        ],
        babelrc: false,
      })
    )
    .map(R.path(['metadata', 'react-intl', 'messages']));

  const result = R.zipWith(
    (m, r) => m.map(R.assoc('filepath', r)),
    messages,
    relativeSrcPaths
  )
    .filter(R.complement(R.isEmpty))
    .reduce(R.concat, []);

  return result;
}

module.exports = extract;
