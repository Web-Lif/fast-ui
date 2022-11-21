import { css } from '@emotion/css'
import { CSSProperties, FC, useRef, useState } from 'react'
import Dropdown from 'antd/es/dropdown'
import {
    Color,
    ColorChangeHandler,
    ColorResult,
    RGBColor,
    SketchPicker,
} from 'react-color'

export interface ColorPickerProps {
    /**
     * 样式设置
     */
    style?: CSSProperties

    /**
     * 颜色值
     *
     * @default "#fff"
     */
    value?: Color

    /**
     * 宽度信息
     *
     * @default "250px"
     */
    width?: string

    /**
     * 改变颜色触发的事件
     */
    onChange?: ColorChangeHandler
}

const InternalColorPicker: FC<ColorPickerProps> = ({
    value: color,
    width = '250px',
    onChange,
}) => {
    const [colorValue, setColorValue] = useState<RGBColor>()

    const [value, setValue] = useState<Color>()
    const [open, setOpen] = useState<boolean>(false)

    const style: CSSProperties = {}

    if (colorValue) {
        style.background = `rgba(${colorValue.r}, ${colorValue.g}, ${colorValue.b}, ${colorValue.a})`
    }

    const isMouseOut = useRef<boolean>(false)
    const divRef = useRef<HTMLDivElement>(null)

    return (
        <Dropdown
            autoFocus
            open={open}
            overlay={
                <div
                    ref={divRef}
                    tabIndex={-1}
                    onBlur={() => {
                        if (isMouseOut.current) {
                            setOpen(false)
                        }
                    }}
                    onMouseOut={() => {
                        isMouseOut.current = true
                    }}
                    onMouseMove={() => {
                        isMouseOut.current = false
                    }}
                >
                    <SketchPicker
                        width={width}
                        color={color === undefined ? value : color}
                        onChange={(
                            colorChange: ColorResult,
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setColorValue(colorChange.rgb)
                            onChange?.(colorChange, event)
                            if (color === undefined) {
                                setValue(colorChange.rgb)
                            }
                        }}
                    />
                </div>
            }
        >
            <div
                className={css`
                    padding: 5px;
                    background: rgb(255, 255, 255);
                    border-radius: 1px;
                    box-shadow: rgba(0, 0, 0, 10%) 0px 0px 0px 1px;
                    display: inline-block;
                    cursor: pointer;
                `}
                onClick={() => {
                    isMouseOut.current = true
                    setOpen(true)
                }}
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

type InternalColorPickerType = typeof InternalColorPicker

interface ColorPickerInterface extends InternalColorPickerType {
    Panel: typeof SketchPicker
}

const ColorPicker = InternalColorPicker as ColorPickerInterface

ColorPicker.Panel = SketchPicker

export default ColorPicker
