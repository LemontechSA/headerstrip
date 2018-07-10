# @5rabbits/headerstrip [![npm](https://img.shields.io/npm/v/@5rabbits/headerstrip.svg?style=flat-square)](https://www.npmjs.com/package/@5rabbits/headerstrip) [![Travis](https://img.shields.io/travis/5rabbits/headerstrip.svg?style=flat-square)](https://travis-ci.org/5rabbits/headerstrip) [![Codecov](https://img.shields.io/codecov/c/repository/5rabbits/headerstrip.svg?style=flat-square)](https://codecov.io/gh/5rabbits/headerstrip)

A component to display advertising campaings as a header banner in your apps. Stores behavior locally on localStorage.

## Usage

- Install with `yarn add @5rabbits/headerstrip`.
- Install peer dependencies (if you haven't already) `yarn add react@^16.0.0 react-dom@^16.0.0`.
- Use the component:

```es6
import Headerstrip from '@5rabbits/headerstrip'
import '@5rabbits/headerstrip/dist/headerstrip.css'

<Headerstrip />
```

[Demo](https://5rabbits.github.io/headerstrip)

## Props

| prop         | type                     | default     | required | description                                                                                                                                                                                       |
| :----------- | :----------------------- | :---------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id | string |  |   true       | Advertising unique id, if not supplied the headerstrip will not render.|
| title | string | `'Placeholder title'` |          | Headerstrip title, the main message should be here.|
| texts | object | `{accept: 'Accept', dismiss: 'Dismiss', remind_me_later: 'Snooze'}`      |          | Texts used in the component action buttons.|
| onAccept | function |             |          | Callback when accept button is clicked. |
| onDismiss | function |             |          | Callback when dismiss button is clicked. |
| onSnooze | function |             |          | Callback when snooze button is clicked. |

## Development

- Run `yarn start` to start building the library in watch mode.
- Write [stories](https://storybook.js.org) in the `stories/index.js` file.
- This project [lints](https://eslint.org/) and [prettifies](https://prettier.io) source files automatically before commiting. You can run `yarn lint` and `yarn prettify` to do this operations manually before commiting (although you shouldn't need to).

## Testing

- Pending

