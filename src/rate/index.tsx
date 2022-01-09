import React from 'react';
import { Rate as AntRate, RateProps as AntRateProps } from 'antd';
import 'antd/es/rate/style/index';

interface RateProps extends AntRateProps {}

const Rate = ({ ...restProps }: RateProps) => {
    return <AntRate {...restProps} />;
};

export default Rate;
