import { ChangeEvent, forwardRef } from 'react'
import AntInput, {
    InputProps as AntInputProps,
    InputRef,
    TextAreaProps as AntTextAreaProps,
} from 'antd/es/input'
import { TextAreaRef } from 'antd/es/input/TextArea'

interface InputProps extends Omit<AntInputProps, 'onChange'> {
    onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void
}

const InternalInput = forwardRef<InputRef, InputProps>(
    ({ onChange, ...restProps }, refs) => {
        return (
            <AntInput
                ref={refs}
                {...restProps}
                onChange={(event) => {
                    const value: string = event.currentTarget.value as string
                    onChange?.(value, event)
                }}
            />
        )
    }
)

type InternalInputType = typeof InternalInput

interface TextAreaProps extends Omit<AntTextAreaProps, 'onChange'> {
    onChange?: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = forwardRef<TextAreaRef, TextAreaProps>(
    ({ onChange, ...restProps }, refs) => {
        return (
            <AntInput.TextArea
                onChange={(event) => {
                    const value: string = event.currentTarget.value as string
                    onChange?.(value, event)
                }}
                ref={refs}
                {...restProps}
            />
        )
    }
)

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
