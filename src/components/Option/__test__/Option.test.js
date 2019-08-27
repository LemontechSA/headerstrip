import React from 'react'
import { shallow } from 'tests/test-helper'
import Option from '../Option'

describe(Option, () => {
  it('to be defined component with props', () => {
    const mockFunc = jest.fn()
    const props = {
      text: 'title',
      onClick: mockFunc,
    }
    const component = shallow(<Option {...props} />)
    expect(component).toBeDefined()
  })

  it('simulate onClick Option', () => {
    const mockFunc = jest.fn()
    const props = {
      text: 'title',
      onClick: mockFunc,
    }
    const component = shallow(<Option {...props} />)
    expect(component).toBeDefined()
    component.simulate('click')
    expect(mockFunc).toHaveBeenCalled()
  })

  it('simulate keypress Option', () => {
    const mockFunc = jest.fn()
    const props = {
      text: 'title',
      onClick: mockFunc,
    }
    const component = shallow(<Option {...props} />)
    expect(component).toBeDefined()
    component.simulate('keypress', { key: 'Enter' })
    expect(mockFunc).toHaveBeenCalled()
  })
})
