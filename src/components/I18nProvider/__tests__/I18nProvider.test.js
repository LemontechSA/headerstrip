import React from 'react'
import PropTypes from 'prop-types'
import { mount, shallow } from 'enzyme'
import { translate } from '@5rabbits/react-polyglot'
import I18nProvider from '../I18nProvider'

describe(I18nProvider, () => {
  @translate()
  class TestComponent extends React.Component {
    static propTypes = {
      t: PropTypes.func.isRequired,
    }

    render() {
      return <span>{this.props.t('helloWorld')}</span>
    }
  }

  it('should pass the `t` function', () => {
    const component = mount(
      <I18nProvider
        locale="fr"
        translations={{
          fr: {
            helloWorld: 'Bonjour monde',
          },
        }}
      >
        <TestComponent />
      </I18nProvider>
    )

    expect(component.find('span')).toHaveText('Bonjour monde')
  })

  describe("if the locale doesn't have translations", () => {
    beforeEach(() => {
      jest.spyOn(console, 'warn').mockImplementation(() => {})
    })

    afterEach(() => {
      // eslint-disable-next-line no-console
      console.warn.mockRestore()
    })

    it('should warn', () => {
      shallow(
        <I18nProvider locale="fr">
          <TestComponent />
        </I18nProvider>
      )

      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        `@5rabbits/headerstrip: Translations not found for locale "fr".`
      )
    })

    it('should fallback to "en" locale', () => {
      const component = mount(
        <I18nProvider
          locale="fr"
          translations={{
            en: {
              helloWorld: 'Hello world',
            },
          }}
        >
          <TestComponent />
        </I18nProvider>
      )

      expect(component.find('span')).toHaveText('Hello world')
    })
  })

  describe('if receives new props', () => {
    describe('if the translations changed', () => {
      it('should apply the new translations', () => {
        const component = mount(
          <I18nProvider
            locale="en"
            translations={{
              en: {
                helloWorld: 'Hello world',
              },
            }}
          >
            <TestComponent />
          </I18nProvider>
        )

        component.setProps({
          translations: {
            en: {
              helloWorld: 'Hello new world',
            },
          },
        })

        expect(component.find('span')).toHaveText('Hello new world')
      })
    })

    describe("if the translations haven't changed", () => {
      it('should not try to merge the base translations', () => {
        const mergeTranslations = jest.fn()
        const component = mount(
          <I18nProvider
            locale="en"
            translations={{
              en: {
                helloWorld: 'Hello world',
              },
            }}
          >
            <TestComponent />
          </I18nProvider>
        )

        component.instance().mergeTranslations = mergeTranslations
        component.setProps({})

        expect(mergeTranslations).not.toHaveBeenCalled()
      })
    })
  })
})
