import AntInputNumber, {
    InputNumberProps as AntInputNumberProps,
} from 'antd/es/input-number'
import { forwardRef } from 'react'

export interface InputNumberProps extends Omit<AntInputNumberProps, ''> {}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
    (props, refs) => {
        return <AntInputNumber ref={refs} {...props} />
    }
)

export default InputNumber
