import React from 'react'
import { shallow } from 'tests/test-helper'
import NpsRanking from '../NpsRanking'

describe(NpsRanking, () => {
  it('to be defined component wihout props', () => {
    const component = shallow(<NpsRanking />)
    expect(component).toBeDefined()
  })

  it('validate ranking length', () => {
    const mockFunc = jest.fn()
    const props = {
      ranking: 2,
      npsTexts: {
        left: 'text',
        right: 'text',
      },
      callback: mockFunc,
      title: 'title',
    }
    const component = shallow(<NpsRanking {...props} />)
    expect(component).toBeDefined()
    const ranking = component.find('.headerstrip-ranking-cell')
    expect(ranking.length).toBe(2)
  })

  it('simulate onClick ranking', () => {
    const mockFunc = jest.fn()
    const props = {
      ranking: 2,
      npsTexts: {
        left: 'text',
        right: 'text',
      },
      callback: mockFunc,
      title: 'title',
    }
    const component = shallow(<NpsRanking {...props} />)
    expect(component).toBeDefined()
    const ranking = component.find('.headerstrip-ranking-cell')
    ranking.first().simulate('click')
    expect(mockFunc).toHaveBeenCalled()
  })

  it('simulate keypress ranking', () => {
    const mockFunc = jest.fn()
    const props = {
      ranking: 2,
      npsTexts: {
        left: 'text',
        right: 'text',
      },
      callback: mockFunc,
      title: 'title',
    }
    const component = shallow(<NpsRanking {...props} />)
    expect(component).toBeDefined()
    const ranking = component.find('.headerstrip-ranking-cell')
    ranking.first().simulate('keypress', { key: 'Enter' })
    expect(mockFunc).toHaveBeenCalled()
  })
})
