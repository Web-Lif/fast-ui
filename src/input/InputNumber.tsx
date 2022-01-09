import React, { FC } from 'react';
import { InputNumber as AntInputNumber, InputNumberProps as AntInputNumberProps } from 'antd';
import 'antd/es/input-number/style/index';

export interface InputNumberProps extends Omit<AntInputNumberProps, ''> {}

const InputNumber: FC<InputNumberProps> = ({ ...restProps }) => {
    return <AntInputNumber {...restProps} />;
};

export default InputNumber;
