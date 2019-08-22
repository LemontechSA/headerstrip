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
  .add('with customized texts', () => (
    <Headerstrip
      id={uid()}
      showDismiss
      showSnooze
      title="Title"
      texts={{
        accept: 'Refer someone',
        dismiss: 'Not interested',
        remind_me_later: 'Snooze please!',
      }}
      onAccept={() => {
        console.log('test')
      }}
    />
  ))
  .add('generate alert when snoozing', () => (
    <Headerstrip
      id={uid()}
      title="Click Snooze"
      showDismiss
      showSnooze
      onSnooze={() => {
        alert('Hey, you snoozed!')
      }}
      onAccept={() => {
        console.log('accept')
      }}
    />
  ))
  .add('open a website when accepting', () => (
    <Headerstrip
      id={uid()}
      showDismiss
      showSnooze
      title="Click Accept"
      onAccept={() => {
        console.log('accept')
      }}
    />
  ))
  .add('format NPS', () => (
    <Headerstrip
      id={uid()}
      npsShow
      showDismiss
      showSnooze
      nps={{
        ranking: 10,
        texts: {
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
        console.log(index, 'accept')
      }}
    />
  ))
