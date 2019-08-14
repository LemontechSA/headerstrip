import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import uid from 'uid'
import readme from '../readme.md'
import Headerstrip from '../dist/headerstrip'
import '../dist/headerstrip.css'

storiesOf('Headerstrip', module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add('with no props', () => <Headerstrip />)
  .add('with id', () => <Headerstrip id={uid()} />)
  .add('with customized texts', () => (
    <Headerstrip
      id={uid()}
      texts={{
        accept: 'Refer someone',
        dismiss: 'Not interested',
        remind_me_later: 'Snooze please!',
      }}
    />
  ))
  .add('with custom title', () => (
    <Headerstrip id={uid()} title="Refer someone and win a trip to the moon!" />
  ))
  .add('generate alert when snoozing', () => (
    <Headerstrip
      id={uid()}
      title="Click Snooze"
      onSnooze={() => {
        alert('Hey, you snoozed!')
      }}
    />
  ))
  .add('open a website when accepting', () => (
    <Headerstrip
      id={uid()}
      title="Click Accept"
      onAccept={() => {
        window.open('https://blog.5rabbits.com/', '_blank')
      }}
    />
  ))
  .add('format NPS', () => (
    <Headerstrip
      id={uid()}
      npsShow
      nps={{
        texts: {
          ranking: 10,
          left: 'Poco probable',
          right: 'Muy probable',
        },
        progressColor: 'rgba(230,123,47,1)',
      }}
      title="¿Qué tan probable es que recomiendes CaseTracking a un colega?"
      texts={{
        accept:
          '¡Gracias por tu opinión! Es muy importante para nosotros para seguir mejorando y ofrecerte un mejor producto.',
        dismiss: 'No volver a mostrarlo',
        remind_me_later: 'Recordarme más tarde',
      }}
      onAccept={index => {
        console.log(index)
      }}
    />
  ))
