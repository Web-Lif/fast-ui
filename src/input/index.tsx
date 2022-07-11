import React, { ChangeEvent, FC } from 'react'
import AntInput, {
    InputProps as AntInputProps,
    TextAreaProps as AntTextAreaProps,
} from 'antd/es/input'

interface InputProps extends Omit<AntInputProps, 'onChange'> {
    onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void
}

const InternalInput: FC<InputProps> = ({
    onChange,
    className,
    ...restProps
}) => {
    return (
        <AntInput
            className={`fu-input-count ${className || ''}`}
            {...restProps}
            onChange={(event) => {
                const value: string = event.currentTarget.value as string
                onChange?.(value, event)
            }}
        />
    )
}

type InternalInputType = typeof InternalInput

interface TextAreaProps extends Omit<AntTextAreaProps, 'onChange'> {
    onChange?: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<TextAreaProps> = ({ onChange, ...restProps }) => {
    return (
        <AntInput.TextArea
            onChange={(event) => {
                const value: string = event.currentTarget.value as string
                onChange?.(value, event)
            }}
            {...restProps}
        />
    )
}

interface InputInterface extends InternalInputType {
    Group: typeof AntInput.Group
    Search: typeof AntInput.Search
    TextArea: typeof TextArea
    Password: typeof AntInput.Password
}

const Input = InternalInput as InputInterface

Input.Group = AntInput.Group
Input.Search = AntInput.Search

Input.TextArea = TextArea
Input.Password = AntInput.Password

export default Input
