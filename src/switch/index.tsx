import AntSwitch, { SwitchProps as AntSwitchProps } from 'antd/es/switch'
import React from 'react'

interface SwitchProps extends Omit<AntSwitchProps, 'checked'> {
    value: boolean
}

export const Switch = ({ value, ...restProps }: SwitchProps) => {
    return <AntSwitch checked={value} {...restProps} />
}
