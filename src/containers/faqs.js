import React from 'react'
import { Accordion, OptForm } from '../components'
// eslint-disable-next-line import/no-named-default
import { default as faqsData } from '../fixtures/fags.json'

function FagContainer () {
  return (
        <Accordion>
            <Accordion.Title>
                Frequently Asked Questions
            </Accordion.Title>
            {faqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>
                        {item.header}
                    </Accordion.Header>
                    <Accordion.Body>
                        {item.body}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />

            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your email to create or restart
                    your membership.
                </OptForm.Text>
            </OptForm>
        </Accordion>
  )
}

export { FagContainer }
