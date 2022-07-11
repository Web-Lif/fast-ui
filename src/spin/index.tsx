import React from 'react'
import AntSpin, { SpinProps as AntSpinProps } from 'antd/es/spin'
import LoadingOutlined from '@ant-design/icons/LoadingOutlined'

export interface SpinProps extends AntSpinProps {}

const Spin = (props: SpinProps) => (
    <AntSpin
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        {...props}
    />
)

export default Spin
