import AntRadio, { RadioProps as AntRadioProps } from 'antd/es/radio'
import React, { FC } from 'react'

interface RadioProps extends AntRadioProps {}

const InternalRadio: FC<RadioProps> = ({ ...restProps }) => {
    return <AntRadio {...restProps} />
}

type InternalRadioType = typeof InternalRadio

interface RadioInterface extends InternalRadioType {
    Button: typeof AntRadio.Button
    Group: typeof AntRadio.Group
}

const Radio = InternalRadio as RadioInterface

Radio.Button = AntRadio.Button
Radio.Group = AntRadio.Group

export default Radio
