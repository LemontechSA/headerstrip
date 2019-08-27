# @lemontech/headerstrip [![npm](https://img.shields.io/npm/v/@lemontech/headerstrip.svg?style=flat-square)](https://www.npmjs.com/package/@lemontech/headerstrip) [![Travis](https://img.shields.io/travis/lemontech/headerstrip.svg?style=flat-square)](https://travis-ci.org/lemontech/headerstrip) [![Codecov](https://img.shields.io/codecov/c/repository/lemontech/headerstrip.svg?style=flat-square)](https://codecov.io/gh/lemontech/headerstrip)

A component to display advertising campaings as a header banner in your apps. Stores behavior locally on localStorage.

## Usage

- Install with `yarn add @lemontech/headerstrip`.
- Install peer dependencies (if you haven't already) `yarn add react@^16.0.0 react-dom@^16.0.0`.
- Use the component:

```es6
import Headerstrip from '@lemontech/headerstrip'
import '@lemontech/headerstrip/dist/headerstrip.css'

<Headerstrip />
```

[Demo](https://lemontechSA.github.io/headerstrip)

## Props

| prop        | type     | default                                                                                              | required | description                                                             |
| :---------- | :------- | :--------------------------------------------------------------------------------------------------- | :------- | :---------------------------------------------------------------------- |
| id          | string   |                                                                                                      | true     | Advertising unique id, if not supplied the headerstrip will not render. |
| title       | string   |                                                                                                      | true     | Headerstrip title, the main message should be here.                     |
| texts       | object   | `{accept: 'Accept', dismiss: 'Dismiss', remind_me_later: 'Snooze'}`                                  |          | Texts used in the component action buttons.                             |
| onAccept    | function |                                                                                                      | true     | Callback when accept button is clicked.                                 |
| showDismiss | boolean  |                                                                                                      | true     | Show Dismiss button.                                                    |
| onDismiss   | function |                                                                                                      |          | Callback when dismiss button is clicked.                                |
| showSnooze  | boolean  |                                                                                                      | true     | Show Snooze button.                                                     |
| onSnooze    | function |                                                                                                      |          | Callback when snooze button is clicked.                                 |
| npsShow     | boolean  | false                                                                                                |          | Show NPS format.                                                        |
| nps         | object   | `{ranking: 10,texts: {left: 'Unlikely',right: 'Very likely',},progressColor: 'rgba(230,123,47,1)',}` |          | Texts and props used in the component nps.                              |

## Development

- Run `yarn start` to start building the library in watch mode.
- Write [stories](https://storybook.js.org) in the `stories/index.js` file.
- This project [lints](https://eslint.org/) and [prettifies](https://prettier.io) source files automatically before commiting. You can run `yarn lint` and `yarn prettify` to do this operations manually before commiting (although you shouldn't need to).

## Testing

- Pending
