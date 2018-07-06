import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { I18n } from '@5rabbits/react-polyglot'
import baseTranslations from 'locale'
import deepmerge from 'deepmerge'

export default class I18nProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    locale: PropTypes.string.isRequired,
    translations: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.mergeTranslations(props.translations)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.translations !== nextProps.translations) {
      this.mergeTranslations(nextProps.translations)
    }
  }

  mergeTranslations = translations => {
    this.translations = deepmerge(baseTranslations, translations || {})

    Object.keys(this.translations).forEach(key => {
      if (key !== 'en') {
        this.translations[key] = deepmerge(
          this.translations.en,
          this.translations[key]
        )
      }
    })
  }

  render() {
    const { children, locale } = this.props
    let validLocale = locale

    if (!this.translations[locale]) {
      // eslint-disable-next-line no-console
      console.warn(
        `@5rabbits/headerstrip: Translations not found for locale "${locale}".`
      )
      validLocale = 'en'
    }

    return (
      <I18n locale={validLocale} messages={this.translations[validLocale]}>
        {children}
      </I18n>
    )
  }
}
