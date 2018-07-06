import React from 'react'
import PropTypes from 'prop-types'
import I18nProvider from 'components/I18nProvider'
import Headerstrip from 'components/Headerstrip'

const HeaderstripWrapper = ({ locale, translations, ...otherProps }) => (
  <I18nProvider locale={locale} translations={translations}>
    <Headerstrip {...otherProps} />
  </I18nProvider>
)

HeaderstripWrapper.propTypes = {
  locale: PropTypes.string,
  translations: PropTypes.object,
}

HeaderstripWrapper.defaultProps = {
  locale: 'en',
}

export default HeaderstripWrapper
