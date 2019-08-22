import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-spring'
import TopBarProgress from 'react-topbar-progress-indicator'
import NpsRanking from '../NpsRanking/NpsRanking'
import Option from '../Option/Option'
import css from './Headerstrip.css'

const moment = require('moment')

class Headerstrip extends Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    nps: PropTypes.object,
    npsShow: PropTypes.bool,
    onAccept: PropTypes.func.isRequired,
    onDismiss: PropTypes.func,
    onSnooze: PropTypes.func,
    showDismiss: PropTypes.bool.isRequired,
    showSnooze: PropTypes.bool.isRequired,
    texts: PropTypes.objectOf(PropTypes.string),
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    texts: {
      accept: 'Accept',
      dismiss: 'Dismiss',
      remind_me_later: 'Snooze',
    },
    npsShow: false,
    nps: {
      ranking: 10,
      texts: {
        left: 'Poco probable',
        right: 'Muy probable',
      },
      progressColor: 'rgba(230,123,47,1)',
    },
  }

  constructor(props) {
    super(props)
    this.state = {
      status: localStorage.getItem(this.statusKey()),
      showNpsAccept: false,
    }
    TopBarProgress.config({
      barColors: {
        '0': props.nps.progressColor,
        '1.0': props.nps.progressColor,
      },
      shadowBlur: 2,
    })
  }

  statusKey() {
    const { id } = this.props
    return `${id}-status`
  }

  actionKey() {
    const { id } = this.props
    return `${id}-action-at`
  }

  onAccept = event => {
    const { onAccept } = this.props
    if (typeof onAccept === 'function') {
      event.preventDefault()
      onAccept()
    }
    this.setStorage('accepted')
  }

  onAcceptNps = (event, index) => {
    const { onAccept } = this.props
    if (typeof onAccept === 'function') {
      event.preventDefault()
      onAccept(index)
    }
    this.setState({ showNpsAccept: true }, () => {
      localStorage.setItem(this.statusKey(), index)
      localStorage.setItem(this.actionKey(), moment().format('YYYY-MM-DD'))
      setTimeout(() => {
        this.setState({ status: 'accepted' })
      }, 4000)
    })
  }

  onDismiss = event => {
    const { onDismiss } = this.props
    if (typeof onDismiss === 'function') {
      event.preventDefault()
      onDismiss()
    }
    this.setStorage('dismissed')
  }

  onSnooze = event => {
    const { onSnooze } = this.props
    if (typeof onSnooze === 'function') {
      event.preventDefault()
      onSnooze()
    }
    this.setStorage('snoozed')
  }

  setStorage = status => {
    localStorage.setItem(this.statusKey(), status)
    localStorage.setItem(this.actionKey(), moment().format('YYYY-MM-DD'))
    this.setState({ status })
  }

  shouldDisplay() {
    const { id } = this.props
    const { status } = this.state
    const actionAt = moment(localStorage.getItem(`${id}-action-at`)).add(
      1,
      'days'
    )
    const snoozed = status === 'snoozed'
    const dismissed = status === 'dismissed'
    const accepted = status === 'accepted'
    const daysBetweenSnooze = moment().diff(actionAt, 'days')

    if (dismissed || accepted) {
      return false
    }

    if (snoozed && daysBetweenSnooze < 1) {
      return false
    }

    return true
  }

  render() {
    const {
      className,
      title,
      texts,
      id,
      showDismiss,
      npsShow,
      showSnooze,
      nps,
    } = this.props
    const { showNpsAccept } = this.state
    const shouldHide = !id || !this.shouldDisplay()
    const HeaderstripBar = (
      <div className={classNames(css.headerstrip, className)}>
        {showNpsAccept ? (
          <Fragment>
            <TopBarProgress />
            <div className={css['headerstrip-title-nps']}>
              {texts.accept || 'Accept'}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {npsShow && (
              <NpsRanking
                ranking={nps.ranking}
                npsTexts={nps.texts}
                callback={this.onAcceptNps}
                title={title}
              />
            )}
            {!npsShow && (
              <div className={css['headerstrip-title']}>{title}</div>
            )}
            <div className={css['headerstrip-options']}>
              {showDismiss && (
                <Option
                  className={classNames(
                    css['headerstrip-option'],
                    css[`${npsShow && 'headerstrip-title-nps-options'}`]
                  )}
                  text={texts.dismiss || 'Dismiss'}
                  onClick={this.onDismiss}
                />
              )}
              {showSnooze && (
                <Option
                  className={classNames(
                    css['headerstrip-option'],
                    css[`${npsShow && 'headerstrip-title-nps-options'}`]
                  )}
                  text={texts.remind_me_later || 'Remind me later'}
                  onClick={this.onSnooze}
                />
              )}
              {!npsShow && (
                <Option
                  className={classNames(
                    css['headerstrip-option'],
                    css['headerstrip-rounded-option']
                  )}
                  text={texts.accept || 'Accept'}
                  onClick={this.onAccept}
                />
              )}
            </div>
          </Fragment>
        )}
      </div>
    )

    return (
      <Transition
        from={{ opacity: 0, height: 0 }}
        enter={{ opacity: 1, height: 'auto' }}
        leave={{ opacity: 0, height: 0 }}
      >
        {!shouldHide && (styles => <div style={styles}>{HeaderstripBar}</div>)}
      </Transition>
    )
  }
}

export default Headerstrip
