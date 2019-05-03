import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Headerstrip from '../Headerstrip/Headerstrip'

const moment = require('moment')

export default class FirestoreHeaderstrip extends PureComponent {
  static propTypes = {
    countryCode: PropTypes.string,
    db: PropTypes.object,
    onAccept: PropTypes.func,
    product: PropTypes.string,
    tenant: PropTypes.string,
    user: PropTypes.object,
  }

  state = {
    loading: true,
    campaign: null,
  }

  componentDidMount() {
    this.fetchCampaign()
  }

  buildId(campaign, user) {
    const isExcluded =
      campaign.exclude && campaign.exclude.includes(this.props.tenant)
    const builtKey = `${campaign.id}-${user.id}`
    return campaign.id && !isExcluded ? builtKey : null
  }

  fetchCampaign() {
    const { db, countryCode, product } = this.props

    return db
      .collection('campaigns')
      .where('country', '==', countryCode)
      .where('product', '==', product)
      .where('valid_until', '>=', moment().toDate())
      .where('active', '==', true)
      .get()
      .then(querySnapshot => {
        const doc = querySnapshot.docs[0]

        if (!doc) {
          return {}
        }

        return { ...doc.data(), id: doc.id }
      })
      .then(doc => {
        this.setState({
          loading: false,
          campaign: doc,
        })
      })
  }

  buildCallbacks() {
    const { db, tenant, user } = this.props
    const { campaign } = this.state

    const interactionsRef = db.collection('interactions')
    const docRef = interactionsRef.doc(`${campaign.id}-${tenant}-${user.id}`)

    const notifyAction = actionStr => {
      docRef.set({
        name: user.name,
        email: user.email,
        id: user.id,
        campaign_key: campaign.id,
        action: actionStr,
        action_at: moment().toDate(),
      })
    }

    const onDismiss = () => {
      notifyAction('dismiss')
    }

    const onAccept = () => {
      notifyAction('accept')
      if (typeof this.props.onAccept === 'function') {
        this.props.onAccept(campaign)
      }
    }

    const onSnooze = () => {
      notifyAction('snooze')
    }

    return { onDismiss, onAccept, onSnooze }
  }

  render() {
    const { loading, campaign } = this.state
    const { user } = this.props

    if (loading) {
      return null
    }

    const { onDismiss, onAccept, onSnooze } = this.buildCallbacks()
    const id = this.buildId(campaign, user)
    const texts = {
      accept: campaign.accept ? campaign.accept : undefined,
      dismiss: campaign.dismiss ? campaign.dismiss : undefined,
      remind_me_later: campaign.remind_me_later
        ? campaign.remind_me_later
        : undefined,
    }

    return (
      <Headerstrip
        id={id}
        title={campaign.title}
        texts={texts}
        onDismiss={onDismiss}
        onAccept={onAccept}
        onSnooze={onSnooze}
        showDismiss={campaign.showDismiss ? campaign.showDismiss : null}
        showSnooze={campaign.showSnooze ? campaign.showSnooze : null}
      />
    )
  }
}
