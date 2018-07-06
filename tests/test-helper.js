import Polyglot from 'node-polyglot'
import PropTypes from 'prop-types'
import { mount as enzymeMount, shallow as enzymeShallow } from 'enzyme'
import en from 'locale/en'

const polyglot = new Polyglot({
  locale: 'en',
  phrases: en,
})

const renderWithContext = (renderer, node, options = {}) =>
  enzymeMount(node, {
    ...options,
    context: {
      t: polyglot.t.bind(polyglot),
      ...options.context,
    },
    childContextTypes: {
      t: PropTypes.func,
      ...options.childContextTypes,
    },
  })

export const mount = (node, options) =>
  renderWithContext(enzymeMount, node, options)

export const shallow = (node, options) =>
  renderWithContext(enzymeShallow, node, options)
