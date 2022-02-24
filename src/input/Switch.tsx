import React from 'react'
import { Switch as AntSwitch, SwitchProps as AntSwitchProps } from 'antd'

interface SwitchProps extends Omit<AntSwitchProps, 'checked'> {
    value: boolean
}

export const Switch = ({
    value,
    ...restProps
}: SwitchProps) => {
    return <AntSwitch checked={value} {...restProps}  />
}