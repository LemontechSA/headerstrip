import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import css from './Headerstrip.css'

const moment = require('moment');

class Headerstrip extends Component {
  constructor(props) {
    super(props)
    console.log('Headerstrip Props', props)
    this.state = {
      status: localStorage.getItem(this.statusKey())
    }
  }

  statusKey() {
    return `${this.props.key}-status`
  }

  actionKey() {
    return `${this.props.key}-action-at`
  }

  onAccept = (event) => {
    event.preventDefault()
    if (typeof this.props.onAccept === 'function') {
      this.props.onAccept()
    }
    this.setStorage('accepted')
  }

  onDismiss = (event) => {
    event.preventDefault()
    if (typeof this.props.onDismiss === 'function') {
      this.props.onDismiss()
    }
    this.setStorage('dismissed')
  }

  onSnooze = (event) => {
    event.preventDefault()
    if (typeof this.props.onSnooze === 'function') {
      this.props.onSnooze()
    }
    this.setStorage('snoozed')
  }

  setStorage = (status) => {
    localStorage.setItem(this.statusKey(), status)
    localStorage.setItem(this.actionKey(), moment().format('YYYY-MM-DD'))
    this.setState({ status })
  }

  shouldDisplay() {
    const { key } = this.props
    const { status } = this.state
    const actionAt = moment(localStorage.getItem(`${key}-action-at`)).add(1, 'days')
    const snoozed = status === 'snoozed'
    const dismissed = status === 'dismissed'
    const accepted = status === 'accepted'
    const daysBetweenSnooze = moment().diff(actionAt, 'days');

    if (dismissed || accepted) {
      return false
    }

    if (snoozed &&  daysBetweenSnooze < 1) {
      return false;
    }

    return true
  }

  render() {
    const { className, title, texts, key } = this.props
    if (!key || !this.shouldDisplay()) {
      return null
    }

    return (
      <div className={classNames(css.headerstrip, className)}>
        <div className={classNames(css['headerstrip-title'])}>
          {title}
        </div>
        <div className={classNames(css['headerstrip-options'])}>
          <div
            className={classNames(css['headerstrip-option'])}
            role='button'
            tabIndex={0}
            onClick={this.onDismiss}
            onKeyPress={this.onDismiss}
          >
            {texts.dismiss}
          </div>
          <div
            className={classNames(css['headerstrip-option'])}
            role='button'
            tabIndex={0}
            onClick={this.onSnooze}
            onKeyPress={this.onSnooze}
          >
            {texts.remind_me_later}
          </div>
          <div
            className={
              classNames(
                css['headerstrip-option'],
                css['headerstrip-rounded-option']
              )
            }
            role='button'
            tabIndex={0}
            onClick={this.onAccept}
            onKeyPress={this.onAccept}
          >
            {texts.accept}
          </div>
        </div>
      </div>
    )
  }
}

Headerstrip.propTypes = {
  className: PropTypes.string,
  key: PropTypes.string,
  onAccept: PropTypes.func,
  onDismiss: PropTypes.func,
  onSnooze: PropTypes.func,
  texts: PropTypes.objectOf(
    PropTypes.string
  ),
  title: PropTypes.string
}

Headerstrip.defaultProps = {
  title: 'Refiere a un colega y te regalamos un Apple Watch S3',
  texts: {
    accept: 'Referir a alguien',
    dismiss: 'No me interesa',
    remind_me_later: 'Recuerdame luego'
  },
  key: 'some-published'
}

export default Headerstrip;
