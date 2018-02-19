import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'vue-nats',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [resolve(), commonjs(), uglify()]
  },
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      resolve({
        preferBuiltins: false,
        customResolveOptions: {
          moduleDirectory: 'src'
        }
      }),
      commonjs(),
      uglify()
    ]
  }
];
