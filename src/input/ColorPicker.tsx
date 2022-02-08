import React, { CSSProperties, FC, useState } from 'react';
import { Color, SketchPicker, ColorChangeHandler, ColorResult, RGBColor } from 'react-color';
import { Dropdown } from 'antd'
import './styles/color-picker.less'

export interface ColorPickerProps {
    /**
     * 样式设置
     */
    style?: CSSProperties

    /**
     * 颜色值
     */
    color?: Color

    /**
     * 改变颜色触发的事件
     */
    onChange?: ColorChangeHandler

    /**
     * 隐藏颜色面板的时候触发的事件
     */
    onVisibleChange?: (visible: boolean) => void
}

const ColorPicker: FC<ColorPickerProps> = ({
    color,
    onChange,
    onVisibleChange
}) => {

    const [colorValue, setColorValue] = useState<RGBColor>()

    const [value, setValue] = useState<Color>()

    const style: CSSProperties = {}

    if (colorValue) {
        style.background = `rgba(${colorValue.r}, ${colorValue.g}, ${colorValue.b}, ${colorValue.a})`
    }

    return (
        <Dropdown
            trigger={['click']}
            overlay={(
                <>
                    <SketchPicker
                        width="250px"
                        color={color === undefined ? value : color}
                        onChange={(colorChange: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                            setColorValue(colorChange.rgb)
                            onChange?.(colorChange, event)
                            if (color === undefined) {
                                setValue(colorChange.rgb)
                            }
                        }}
                    />
                </>
            )}
            onVisibleChange={onVisibleChange}
        >
            <div className='fu-input-color-picker'>
                <div
                    style={style}
                    className='fu-input-color-picker-value'
                />
            </div>
        </Dropdown>
    )
}

export default ColorPicker