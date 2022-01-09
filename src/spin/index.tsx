import React from 'react';
import { Spin as AntSpin, SpinProps as AntSpinProps } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/es/spin/style/index';

export interface SpinProps extends AntSpinProps {}

const Spin = (props: SpinProps) => (
    <AntSpin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} {...props} />
);

export default Spin;
