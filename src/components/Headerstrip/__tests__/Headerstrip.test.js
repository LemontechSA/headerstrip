import React from 'react'
import { shallow } from 'tests/test-helper'
import Headerstrip from '../Headerstrip'

describe(Headerstrip, () => {
  it('should display "Click here" text', () => {
    const component = shallow(<Headerstrip />)

    expect(component).toHaveText('Click here')
  })

  describe('props.className', () => {
    it('should assign the specified className', () => {
      const component = shallow(<Headerstrip className="some-classname" />)

      expect(component.find('button')).toHaveClassName('some-classname')
    })
  })

  describe('props.theme', () => {
    it('should assign a className for the specified theme', () => {
      const component = shallow(<Headerstrip theme="primary" />)

      expect(component.find('button')).toHaveClassName('theme--primary')
    })
  })
})
