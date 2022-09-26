import AntSwitch, { SwitchProps as AntSwitchProps } from 'antd/es/switch'
import { forwardRef } from 'react'

interface SwitchProps extends Omit<AntSwitchProps, 'checked'> {
    value: boolean
}

const Switch = forwardRef<HTMLElement, SwitchProps>(
    ({ value, ...restProps }, refs) => {
        return <AntSwitch ref={refs} checked={value} {...restProps} />
    }
)

export default Switch
