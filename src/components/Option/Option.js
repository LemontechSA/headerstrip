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
      onClick={e => {
        onClick(e)
      }}
      onKeyPress={e => {
        onClick(e)
      }}
    >
      {text}
    </div>
  )
}

Option.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

Option.defaultProps = {
  className: css['headerstrip-option'],
}

export default Option
