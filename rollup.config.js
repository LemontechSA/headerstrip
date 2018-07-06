import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import postcss from 'rollup-plugin-postcss'
import includePaths from 'rollup-plugin-includepaths'
import json from 'rollup-plugin-json'
import svg from 'rollup-plugin-svg-to-jsx'
import visualizer from 'rollup-plugin-visualizer'
import namedDirectory from 'rollup-plugin-named-directory'

const NODE_ENV = process.env.NODE_ENV || 'development'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/headerstrip.js',
    format: 'umd',
    name: 'headerstrip',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  watch: {
    include: 'src/**',
  },
  external: ['react', 'react-dom'],
  plugins: [
    namedDirectory(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    includePaths({
      paths: ['src', '.'],
    }),
    postcss({
      modules: true,
      extract: true,
    }),
    json(),
    svg(),
    resolve({
      jsnext: true,
      main: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PureComponent',
          'Fragment',
          'createElement',
        ],
        'node_modules/react-dom/index.js': [
          'findDOMNode',
          'unstable_batchedUpdates',
        ],
      },
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers',
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread',
      ],
    }),
    visualizer(),
  ],
}
