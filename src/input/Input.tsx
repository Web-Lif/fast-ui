import React, { ChangeEvent, FC } from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import { TextAreaProps as AntTextAreaProps } from 'antd/lib/input';
import { classNames } from '../utils/css';
import './styles/input.less';
import 'antd/es/input/style/index';

interface InputProps extends Omit<AntInputProps, 'onChange'> {
    onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}

const InternalInput: FC<InputProps> = ({ onChange, className, ...restProps }) => {
    return (
        <AntInput
            className={`fu-input-count ${className || ''}`}
            {...restProps}
            onChange={(event) => {
                const value: string = event.currentTarget.value as string;
                onChange?.(value, event);
            }}
        />
    );
};

type InternalInputType = typeof InternalInput;

interface TextAreaProps extends AntTextAreaProps {}

const TextArea: FC<TextAreaProps> = ({ className, ...restProps }) => {
    return (
        <AntInput.TextArea
            className={classNames({
                'fu-input-count': true,
            })}
            {...restProps}
        />
    );
};

interface InputInterface extends InternalInputType {
    Group: typeof AntInput.Group;
    Search: typeof AntInput.Search;
    TextArea: typeof TextArea;
    Password: typeof AntInput.Password;
}

const Input = InternalInput as InputInterface;

Input.Group = AntInput.Group;
Input.Search = AntInput.Search;

Input.TextArea = TextArea;
Input.Password = AntInput.Password;

export default Input;
