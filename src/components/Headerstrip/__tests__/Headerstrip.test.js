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
    expect(component.props().texts).toEqual({
      accept: 'Accept',
      dismiss: 'Dismiss',
      remind_me_later: 'Snooze',
    })
  })

  it('validate functions', () => {
    const props = {
      id: '1234',
      texts: {
        accept: 'Refer someone',
        dismiss: 'Not interested',
        remind_me_later: 'Snooze please!',
      },
    }
    const component = shallow(<Headerstrip {...props} />)
    const instance = component.instance()
    // actionKey function
    const resActionKey = instance.actionKey()
    expect(resActionKey).toEqual('1234-action-at')
    // setStorage function
    instance.setStorage('dismissed')
    expect(component.state().status).toEqual('dismissed')
    instance.setStorage('snoozed')
    expect(component.state().status).toEqual('snoozed')
  })

  it('validate event functions', () => {
    const mockFunc = jest.fn()
    const props = {
      id: '1234',
      texts: {
        accept: 'Refer someone',
        dismiss: 'Not interested',
        remind_me_later: 'Snooze please!',
      },
      onSnooze: mockFunc,
      onAccept: mockFunc,
      onDismiss: mockFunc,
    }
    const component = shallow(<Headerstrip {...props} />)
    const instance = component.instance()
    const event = {
      preventDefault() {},
      target: { value: 'the-value' },
    }
    instance.onSnooze(event)
    expect(component.state().status).toEqual('snoozed')
    instance.onDismiss(event)
    expect(component.state().status).toEqual('dismissed')
    instance.onAccept(event)
    expect(component.state().status).toEqual('accepted')
    instance.onAcceptNps(event, 1)
    expect(component.state().showNpsAccept).toEqual(true)
  })
})
