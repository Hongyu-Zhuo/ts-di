import typescript from 'rollup-plugin-typescript2';
import {terser} from "rollup-plugin-terser";
import pkg from './package.json';

export default {
 input: 'src/index.ts', // our source file
 output: [
  {
   file: './dist/commonjs/index.js',
   format: 'cjs'
  },
  {
   file: './dist/esm/index.js',
   format: 'esm' // the preferred format
  },
  {
   file: './dist/iife/index.js',
   format: 'iife',
   name: 'ts_di' // the global which can be used in a browser
  }
 ],
 external: [
  ...Object.keys(pkg.dependencies || {})
 ],
 plugins: [
  typescript({
   typescript: require('typescript'),
  }),
  terser() // minifies generated bundles
 ]
};