import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import css from '../Headerstrip/Headerstrip.css'

export default class NpsRanking extends React.PureComponent {
  static propTypes = {
    callback: PropTypes.func,
    npsTexts: PropTypes.shape({
      left: PropTypes.string,
      right: PropTypes.string,
    }),
    ranking: PropTypes.number,
    title: PropTypes.string,
  }

  static defaultProps = {
    npsTexts: {
      left: 'Poco probable',
      right: 'Muy probable',
    },
    ranking: 10,
    callback: () => {},
    title: 'Default Title',
  }

  render() {
    const { npsTexts, callback, title, ranking } = this.props
    const data = Array.from(Array(ranking), (x, index) => index + 1)
    return (
      <div className={classNames(css['headerstrip-nps-content'])}>
        <div className={classNames(css['headerstrip-title-nps'])}>{title}</div>
        <div className={classNames(css['headerstrip-ranking'])}>
          <div
            style={{ marginRight: 4 }}
            className={classNames(css['headerstrip-title-nps-options'])}
          >
            {npsTexts.left}
          </div>
          {data.map(index => (
            <div
              key={index}
              role="button"
              tabIndex="0"
              className={classNames(css['headerstrip-ranking-cell'])}
              onClick={event => {
                callback(event, index)
              }}
              onKeyPress={event => {
                callback(event, index)
              }}
            >
              {index}
            </div>
          ))}
          <div
            style={{ marginLeft: 4 }}
            className={classNames(css['headerstrip-title-nps-options'])}
          >
            {npsTexts.right}
          </div>
        </div>
      </div>
    )
  }
}
