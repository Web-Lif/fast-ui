import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import Button from '../index';

const sleep = (time: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

test('Button -> test fast double click', async () => {
    const mockClickEvent = jest.fn();

    const { getByText } = render(
        <Button
            onClick={async () => {
                mockClickEvent();
                await sleep(100);
            }}
        >
            button
        </Button>,
    );

    const button = await waitFor(() => getByText('button'));
    fireEvent.click(button);
    fireEvent.click(button);
    act(() => {
        fireEvent.click(button);
    });
    expect(mockClickEvent.mock.calls.length).toBe(1);
});
