import React from 'react'
import { render } from '@testing-library/react'
import TestCard from '../__demo__/base'

test('snapshot', async () => {
    const { container } = render(<TestCard />)
    expect(container).toMatchSnapshot()
})
