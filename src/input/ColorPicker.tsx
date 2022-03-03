import React, { CSSProperties, FC, useState } from 'react';
import { Color, SketchPicker, ColorChangeHandler, ColorResult, RGBColor } from 'react-color';
import { Dropdown } from 'antd'
import { css } from '@emotion/css';

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
            <div
                className={css`
                    padding: 5px;
                    background: rgb(255, 255, 255);
                    border-radius: 1px;
                    box-shadow: rgba(0,0,0,10%) 0px 0px 0px 1px;
                    display: inline-block;
                    cursor: pointer;   
                `}
            >
                <div
                    style={style}
                    className={css`
                        width: 36px;
                        height: 14px;
                        border-radius: 2px;
                        background: #fff;
                    `}
                />
            </div>
        </Dropdown>
    )
}

export default ColorPicker