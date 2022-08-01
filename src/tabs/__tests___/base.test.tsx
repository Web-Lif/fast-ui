import React from 'react'
import { render } from '@testing-library/react'
import Tabs from '../index'

const TestTabs = () => {
    return (
        <div
            style={{
                height: 500,
            }}
        >
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

test('snapshot', async () => {
    const { container } = render(<TestTabs />)
    expect(container).toMatchSnapshot()
})
