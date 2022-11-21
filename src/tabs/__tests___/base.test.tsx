import { render } from '@testing-library/react'
import Tabs from '../index'

const TestTabs = () => {
    const items = [
        { label: 'Tab 1', key: 'item-1', children: 'Content 1' }, // remember to pass the key prop
        { label: 'Tab 2', key: 'item-2', children: 'Content 2' },
    ]
    return (
        <div
            style={{
                height: 500,
            }}
        >
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    )
}

test('snapshot', async () => {
    const { container } = render(<TestTabs />)
    expect(container).toMatchSnapshot()
})
