import React from 'react'
import { shallow } from 'tests/test-helper'
import NpsRanking from '../NpsRanking'

describe(NpsRanking, () => {
  it('to be defined component wihout props', () => {
    const component = shallow(<NpsRanking />)
    expect(component).toBeDefined()
  })

  it('component with props and simulate press', () => {
    const mockFunc = jest.fn()
    const props = {
      npsTexts: {
        ranking: 2,
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
    ranking.first().simulate('click')
    expect(mockFunc).toHaveBeenCalled()
    ranking.first().simulate('keypress', { key: 'Enter' })
    expect(mockFunc).toHaveBeenCalled()
  })
})
