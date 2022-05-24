import { InputNumber as AntInputNumber, InputNumberProps as AntInputNumberProps } from 'antd';
import React, { FC } from 'react';

export interface InputNumberProps extends Omit<AntInputNumberProps, ''> {}

const InputNumber: FC<InputNumberProps> = ({ ...restProps }) => {
    return <AntInputNumber {...restProps} />;
};

export default InputNumber;
