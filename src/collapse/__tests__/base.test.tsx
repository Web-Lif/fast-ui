import React from 'react'
import { render } from '@testing-library/react'
import Collapse from '../index'

const TestCollapse = () => {
    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `
    return (
        <div
            style={{
                height: 600,
            }}
        >
            <Collapse defaultActiveKey={['1']}>
                <Collapse.Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Collapse.Panel>
                <Collapse.Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Collapse.Panel>
            </Collapse>
        </div>
    )
}

test('snapshot', async () => {
    const { container } = render(<TestCollapse />)
    expect(container).toMatchSnapshot()
})
