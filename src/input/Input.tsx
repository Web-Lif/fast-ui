import React, { ChangeEvent, FC } from 'react'
import { Input as AntInput, InputProps as AntInputProps} from 'antd'

interface InputProps extends Omit<AntInputProps, 'onChange'> {
    onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void
}


const InternalInput: FC<InputProps> = ({
    onChange,
    ...restProps
}) => {
    return (
        <AntInput
            {...restProps}
            onChange={(event) => {
                const value: string = event.currentTarget.value as string
                onChange?.(value, event)
            }}
        />
    )
}

type InternalInputType = typeof InternalInput;

interface InputInterface extends InternalInputType {
    Group: typeof AntInput.Group
    Search: typeof AntInput.Search
    TextArea: typeof AntInput.TextArea
    Password: typeof AntInput.Password
}

const Input = InternalInput as InputInterface;

Input.Group = AntInput.Group
Input.Search = AntInput.Search
Input.TextArea = AntInput.TextArea
Input.Password = AntInput.Password

export default Input