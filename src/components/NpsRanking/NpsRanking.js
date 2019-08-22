import React from 'react'
import PropTypes from 'prop-types'
import css from '../Headerstrip/Headerstrip.css'

export default class NpsRanking extends React.PureComponent {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    npsTexts: PropTypes.shape({
      left: PropTypes.string,
      right: PropTypes.string,
    }).isRequired,
    ranking: PropTypes.number,
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    ranking: 10,
  }

  render() {
    const { npsTexts, callback, title, ranking } = this.props
    const data = Array.from(Array(ranking), (x, index) => index + 1)
    return (
      <div className={css['headerstrip-nps-content']}>
        <div className={css['headerstrip-title-nps']}>{title}</div>
        <div className={css['headerstrip-ranking']}>
          <div
            style={{ marginRight: 4 }}
            className={css['headerstrip-title-nps-options']}
          >
            {npsTexts.left}
          </div>
          {data.map(index => (
            <div
              key={index}
              role="button"
              tabIndex="0"
              className={css['headerstrip-ranking-cell']}
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
            className={css['headerstrip-title-nps-options']}
          >
            {npsTexts.right}
          </div>
        </div>
      </div>
    )
  }
}
