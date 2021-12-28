import React from 'react'
import { Spin as AntSpin, SpinProps } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

const Spin = (props: SpinProps) => (
    <AntSpin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} {...props} />
)

export default Spin