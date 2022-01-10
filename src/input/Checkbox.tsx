import React, { FC } from 'react'
import { Checkbox as AntCheckbox, CheckboxProps as AntCheckboxProps } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import 'antd/es/checkbox/style/index'

interface CheckboxProps extends Omit<AntCheckboxProps, 'value' | 'checked' | 'onChange'> {
    value?: boolean 
    onChange?: (value: boolean, event: CheckboxChangeEvent) => void
}

const InternalCheckbox: FC<CheckboxProps>= ({
    value,
    onChange,
    ...restProps
}) => {

    return (
        <AntCheckbox
            onChange={(e) => {
                onChange?.(e.target.checked, e)
            }}
            {...{
                value
            }}
            {...restProps}
        />
    )
}


type InternalCheckboxType = typeof InternalCheckbox;

interface CheckboxInterface extends InternalCheckboxType {
    Group: typeof AntCheckbox.Group;
}

const Checkbox = InternalCheckbox as CheckboxInterface;

Checkbox.Group = AntCheckbox.Group

export default Checkbox



