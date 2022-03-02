import React, { FC, ReactNode } from "react";
import { Cascader, CascaderProps } from 'antd'
import ChinaRegionData from './data/pca-code'
import { DefaultOptionType } from "antd/lib/select";


const ChinaRegion: FC<CascaderProps<DefaultOptionType>> = ({
    ...restProps
}) => {
    return (
        <Cascader
            {...restProps}
            options={ChinaRegionData}
        />
    )
}

export default ChinaRegion