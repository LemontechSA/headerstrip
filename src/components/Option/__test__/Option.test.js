import React from 'react'
import { shallow } from 'tests/test-helper'
import Option from '../Option'

describe(Option, () => {
  it('to be defined component wihout props', () => {
    const component = shallow(<Option />)
    expect(component).toBeDefined()
  })

  it('to be defined component with props', () => {
    const mockFunc = jest.fn()
    const props = {
      text: 'title',
      onClick: mockFunc,
    }
    const component = shallow(<Option {...props} />)
    expect(component).toBeDefined()
    component.simulate('click')
    expect(mockFunc).toHaveBeenCalled()
    component.simulate('keypress', { key: 'Enter' })
    expect(mockFunc).toHaveBeenCalled()
  })
})
