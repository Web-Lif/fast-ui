import React from 'react'
import AntRate, { RateProps as AntRateProps } from 'antd/es/rate'

interface RateProps extends AntRateProps {}

const Rate = ({ ...restProps }: RateProps) => {
    return <AntRate {...restProps} />
}

export default Rate
