import React, { forwardRef } from 'react'
import AntRate, { RateProps as AntRateProps } from 'antd/es/rate'

interface RateProps extends AntRateProps {}

const Rate = forwardRef<unknown, RateProps>((props, refs) => {
    return <AntRate ref={refs} {...props} />
})

export default Rate
