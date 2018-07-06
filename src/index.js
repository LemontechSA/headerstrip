import React from 'react'
import PropTypes from 'prop-types'
import Headerstrip from 'components/Headerstrip'

const HeaderstripWrapper = (props) => (
  <Headerstrip {...props} />
)

HeaderstripWrapper.propTypes = {
  locale: PropTypes.string,
  translations: PropTypes.object,
}

HeaderstripWrapper.defaultProps = {
  locale: 'en',
}

export default HeaderstripWrapper
