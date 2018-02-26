import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
//import builtins from 'rollup-plugin-node-builtins';
//import globals from 'rollup-plugin-node-globals';
//import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  // {
  //   input: 'src/index.js',
  //   output: {
  //     name: 'vue-nats',
  //     file: pkg.browser,
  //     format: 'umd'
  //   },
  //   plugins: [
  //     //builtins({ crypto: true }),
  //     resolve({
  //       preferBuiltins: false,
  //       customResolveOptions: {
  //         moduleDirectory: 'src'
  //       }
  //     }),
  //     commonjs(),
  //     //uglify()
  //   ]
  // },
  {
    input: 'src/index.js',
    output: [
      // { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      //builtins({ crypto: true }),
      //builtins(),
      //globals(),
      resolve({
        preferBuiltins: false, // false
        customResolveOptions: {
          moduleDirectory: 'src'
        }
      }),
      commonjs(),
      //uglify()
    ]
  }
];
