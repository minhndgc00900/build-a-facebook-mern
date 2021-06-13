import React from 'react'
import { Accordion } from '../components';
import { default as faqsData } from '../fixtures/fags.json';

function FagContainer() {
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
        </Accordion>
    )
}

export { FagContainer };