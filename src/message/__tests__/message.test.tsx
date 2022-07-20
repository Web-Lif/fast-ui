import { render, fireEvent } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import message from '..'

const TestMessage = () => {
    useEffect(() => {
        message.info('testmessage')
    }, [])

    return <div />
}

test('test message', async () => {
    const { baseElement, findAllByText } = render(<TestMessage />)
    await findAllByText('testmessage')
    expect(baseElement).toMatchSnapshot()
})
