import React from 'react'
import { shallow } from 'tests/test-helper'
import Headerstrip from '../Headerstrip'

describe(Headerstrip, () => {
  const props = {
    id: '1234',
    title: 'Title',
    showDismiss: true,
    showSnooze: true,
    onAccept: jest.fn(),
    texts: {
      accept: 'Refer someone',
      dismiss: 'Not interested',
      remind_me_later: 'Snooze please!',
    },
  }

  it('to be defined component', () => {
    const component = shallow(<Headerstrip {...props} />)
    expect(component).toBeDefined()
  })

  it('validate: actionKey function', () => {
    const component = shallow(<Headerstrip {...props} />)
    const instance = component.instance()
    const resActionKey = instance.actionKey()
    expect(resActionKey).toEqual('1234-action-at')
  })

  it('validate: setStorage function', () => {
    const component = shallow(<Headerstrip {...props} />)
    const instance = component.instance()
    instance.setStorage('dismissed')
    expect(component.state().status).toEqual('dismissed')
    instance.setStorage('snoozed')
    expect(component.state().status).toEqual('snoozed')
  })

  it('validate: onSnooze function', () => {
    const mockFunc = jest.fn()
    const propsFunctions = {
      ...props,
      onSnooze: mockFunc,
      onAccept: mockFunc,
      onDismiss: mockFunc,
    }
    const component = shallow(<Headerstrip {...propsFunctions} />)
    const instance = component.instance()
    const event = {
      preventDefault() {},
      target: { value: 'the-value' },
    }
    instance.onSnooze(event)
    expect(component.state().status).toEqual('snoozed')
  })

  it('validate: onDismiss function', () => {
    const mockFunc = jest.fn()
    const propsFunctions = {
      ...props,
      onSnooze: mockFunc,
      onAccept: mockFunc,
      onDismiss: mockFunc,
    }
    const component = shallow(<Headerstrip {...propsFunctions} />)
    const instance = component.instance()
    const event = {
      preventDefault() {},
      target: { value: 'the-value' },
    }
    instance.onDismiss(event)
    expect(component.state().status).toEqual('dismissed')
  })

  it('validate: onAccept function', () => {
    const mockFunc = jest.fn()
    const propsFunctions = {
      ...props,
      onSnooze: mockFunc,
      onAccept: mockFunc,
      onDismiss: mockFunc,
    }
    const component = shallow(<Headerstrip {...propsFunctions} />)
    const instance = component.instance()
    const event = {
      preventDefault() {},
      target: { value: 'the-value' },
    }
    instance.onAccept(event)
    expect(component.state().status).toEqual('accepted')
    instance.onAcceptNps(event, 1)
    expect(component.state().showNpsAccept).toEqual(true)
  })
})
