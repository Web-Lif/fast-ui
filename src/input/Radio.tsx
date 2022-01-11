import React, { FC } from 'react'
import { Radio as AntRadio, RadioProps as AntRadioProps } from 'antd'

interface RadioProps extends AntRadioProps {
}

const Radio: FC<RadioProps> = ({
    ...restProps
}) => {
    return (
        <AntRadio {...restProps}/>
    )
}

export default Radio