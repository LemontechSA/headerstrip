import React from 'react'
import { shallow } from 'tests/test-helper'
import Headerstrip from '../Headerstrip'

describe(Headerstrip, () => {
  it('to be defined component wihout props', () => {
    const component = shallow(<Headerstrip />)
    expect(component).toBeDefined()
  })

  it('component with prop id - validate default props', () => {
    const component = shallow(<Headerstrip id="1234" />)
    expect(component.props().title).toEqual('Placeholder title')
    expect(component.props().title).toEqual('Placeholder title')
    expect(component.props().texts).toEqual({
      accept: 'Accept',
      dismiss: 'Dismiss',
      remind_me_later: 'Snooze',
    })
  })

  it('component with customized texts', () => {
    const props = {
      id: '1234',
      texts: {
        accept: 'Refer someone',
        dismiss: 'Not interested',
        remind_me_later: 'Snooze please!',
      },
    }
    const component = shallow(<Headerstrip {...props} />)

    console.log(component.childAt(0))
  })
})
