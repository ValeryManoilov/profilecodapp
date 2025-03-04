import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [
    postcss({
      extract: true,
      minimize: true,
    }),
  ],
};