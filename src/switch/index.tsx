import AntSwitch, { SwitchProps as AntSwitchProps } from 'antd/es/switch'
import React, { forwardRef } from 'react'

interface SwitchProps extends Omit<AntSwitchProps, 'checked'> {
    value: boolean
}

export const Switch = forwardRef<HTMLElement, SwitchProps>(
    ({ value, ...restProps }, refs) => {
        return <AntSwitch ref={refs} checked={value} {...restProps} />
    }
)
