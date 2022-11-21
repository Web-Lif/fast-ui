import { render, fireEvent } from '@testing-library/react'
import React, { useState } from 'react'
import Modal from '..'

const TestDoubleClick = (props: any) => {
    const [open, setOpen] = useState<boolean>(true)
    return (
        <>
            <Modal
                title="这是一个弹出框"
                open={open}
                onOk={props.onOk}
                onOpenChange={setOpen}
            >
                async 请求远程数据
            </Modal>
        </>
    )
}

test('test fast double ok click', async () => {
    const mockOk = jest.fn()
    const { findByText } = render(<TestDoubleClick onOk={mockOk} />)
    const okBut = await findByText('确 定')
    expect(mockOk.mock.calls.length).toBe(0)
    fireEvent.click(okBut)
    fireEvent.click(okBut)
    fireEvent.click(okBut)
    expect(mockOk.mock.calls.length).toBe(1)
})
