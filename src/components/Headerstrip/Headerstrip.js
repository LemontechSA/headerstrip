import React from 'react'
import PropTypes from 'prop-types'
import { translate } from '@5rabbits/react-polyglot'
import classNames from 'classnames'
import css from './Headerstrip.css'

const Headerstrip = ({ className, t, theme, ...otherProps }) => (
  <button
    className={classNames(css['my-library'], css[`theme--${theme}`], className)}
    type="button"
    {...otherProps}
  >
    {t('clickHere')}
  </button>
)

Headerstrip.propTypes = {
  className: PropTypes.string,
  t: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'primary']),
}

Headerstrip.defaultProps = {
  theme: 'default',
}

export default translate()(Headerstrip)
