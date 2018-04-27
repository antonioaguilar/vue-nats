import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
//import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: 'dist/' + pkg.name + '.cjs.js', format: 'cjs' },
      { file: 'dist/' + pkg.name + '.esm.js', format: 'es' },
      { file: 'dist/' + pkg.name + '.umd.js', format: 'umd', name: 'VUE_NATS' }
    ],
    plugins: [
      //buble(),
      builtins(),
      resolve({
        //preferBuiltins: true,
        //customResolveOptions: {
        //  moduleDirectory: 'src'
        //}
      }),
      commonjs({})
      //uglify()
    ]
  }
];
