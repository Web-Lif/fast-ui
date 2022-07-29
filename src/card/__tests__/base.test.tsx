import React from 'react'
import { render } from '@testing-library/react'
import Card from '..'

const TestCard = () => {
    return (
        <>
            <div
                style={{
                    height: 400,
                    width: 500,
                }}
            >
                <Card title="Default size card" extra={<a href="#">More</a>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        </>
    )
}

test('snapshot', async () => {
    const { container } = render(<TestCard />)
    expect(container).toMatchSnapshot()
})
