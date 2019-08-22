import React from 'react'
import PropTypes from 'prop-types'
import css from '../Headerstrip/Headerstrip.css'

const Option = props => {
  const { text, onClick, className } = props
  return (
    <div
      className={className}
      role="button"
      tabIndex={0}
      onClick={() => {
        onClick()
      }}
      onKeyPress={() => {
        onClick()
      }}
    >
      {text}
    </div>
  )
}

Option.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
}

Option.defaultProps = {
  className: css['headerstrip-option'],
  onClick: () => {},
  text: 'text option',
}

export default Option
