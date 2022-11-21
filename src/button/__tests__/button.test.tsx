import { render, fireEvent, waitFor, act } from '@testing-library/react'
import Button from '../index'

const sleep = (time: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

test('snapshot', async () => {
    const { container } = render(<Button>button</Button>)
    expect(container).toMatchSnapshot()
})

test('test disabled', async () => {
    const { container } = render(<Button disabled>button</Button>)
    expect(container).toMatchSnapshot()
})

test('test fast double click promise', async () => {
    const mockClickEvent = jest.fn()

    const { getByText } = render(
        <Button
            onClick={async () => {
                mockClickEvent()
                await sleep(100)
            }}
        >
            button
        </Button>
    )

    const button = await waitFor(() => getByText('button'))
    fireEvent.click(button)
    fireEvent.click(button)
    act(() => {
        fireEvent.click(button)
    })
    expect(mockClickEvent.mock.calls.length).toBe(1)
})

test('test fast double click', async () => {
    const mockClickEvent = jest.fn()
    const { getByText } = render(
        <Button
            onClick={() => {
                mockClickEvent()
            }}
        >
            button
        </Button>
    )

    const button = await waitFor(() => getByText('button'))
    fireEvent.click(button)
    setTimeout(() => {
        expect(mockClickEvent.mock.calls.length).toBe(1)
    }, 0)
})
