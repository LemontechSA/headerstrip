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
  .add('with no props', () => (
    <Headerstrip />
  ))
  .add('with id', () => (
    <Headerstrip id={uid()} />
  ))
  .add('with customized texts', () => (
    <Headerstrip
      id={uid()}
      texts={{
        accept: 'Refer someone',
        dismiss: 'Not interested',
        remind_me_later: 'Snooze please!'
      }}
    />
  ))
  .add('with custom title', () => (
    <Headerstrip
      id={uid()}
      title='Refer someone and win a trip to the moon!'
    />
  ))
  .add('generate alert when snoozing', () => (
    <Headerstrip
      id={uid()}
      title='Click Snooze'
      onSnooze={() => {
        alert('Hey, you snoozed!')
      }}
    />
  ))
  .add('open a website when accepting', () => (
    <Headerstrip
      id={uid()}
      title='Click Accept'
      onAccept={() => {
        window.open('https://blog.5rabbits.com/','_blank');
      }}
    />
  ))
