import { render } from '@testing-library/react'
import React from 'react'
import message from '..'

const TestMessage = () => {
    const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = message
    return <InternalPanel content="testmessage" type="error" />
}

test('test message', async () => {
    const { findAllByText } = render(<TestMessage />)
    const element = await findAllByText('testmessage')
    expect(element.length).toBe(1)
})
