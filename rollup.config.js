import svg from 'rollup-plugin-svg';
import terser from '@rollup/plugin-terser';
// import node_resolve from '@rollup/plugin-node-resolve';

// https://github.com/antony/rollup-plugin-svg

export default [
  {
    plugins: [
      svg(),
      // sourcemaps(),
      // node_resolve(),
      terser({
        compress: { passes: 2 }
      })
    ],
    input: './src/modal-alert.js',
    output: [
      {
        file: './dist/modal-alert.esm.min.js',
        format: 'esm',
        sourcemap: true
      }
    ]
  }
];
