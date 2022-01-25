import React, { FC } from 'react';
import { InputNumber as AntInputNumber, InputNumberProps as AntInputNumberProps } from 'antd';

export interface InputNumberProps extends Omit<AntInputNumberProps, ''> {}

const InputNumber: FC<InputNumberProps> = ({ ...restProps }) => {
    return <AntInputNumber {...restProps} />;
};

export default InputNumber;
