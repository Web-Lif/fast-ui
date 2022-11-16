import { FC } from 'react'
import AntCheckbox, {
    CheckboxChangeEvent,
    CheckboxProps as AntCheckboxProps,
} from 'antd/es/checkbox'

interface CheckboxProps
    extends Omit<AntCheckboxProps, 'value' | 'checked' | 'onChange'> {
    value?: boolean
    onChange?: (value: boolean, event: CheckboxChangeEvent) => void
}

const InternalCheckbox: FC<CheckboxProps> = ({
    value,
    onChange,
    ...restProps
}) => {
    let props: AntCheckboxProps = restProps
    if (value !== undefined) {
        props.checked = value
    }
    return (
        <AntCheckbox
            onChange={(e) => {
                onChange?.(e.target.checked, e)
            }}
            {...props}
        />
    )
}

type InternalCheckboxType = typeof InternalCheckbox

interface CheckboxInterface extends InternalCheckboxType {
    Group: typeof AntCheckbox.Group
}

const Checkbox = InternalCheckbox as CheckboxInterface

Checkbox.Group = AntCheckbox.Group

export default Checkbox
