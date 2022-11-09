import React, { useState, forwardRef, useRef } from 'react'
import { css, cx } from '@emotion/css'
import AButton, { ButtonProps as AButtonProps } from 'antd/es/button'

export interface ButtonProps extends Omit<AButtonProps, 'onClick'> {
    /** 点击按钮触发的事件, 返回一个 `Promise<void>` 对象 */
    onClick?: (
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => Promise<void> | void
}

const Button = forwardRef<HTMLElement, ButtonProps>(
    (props: ButtonProps, refs) => {
        const { onClick, className, type = 'default', ...restProps } = props

        const [loading, setLoading] = useState<boolean>(false)
        const buttonClickCount = useRef<number>(0)

        const disabledCss = () => {
            let cssText = `
                color: #00000040;
                text-shadow: none;
                box-shadow: none;
            `
            if (type === 'default' || type === 'primary') {
                cssText += `
                    border-color: #d9d9d9;
                    background: #f5f5f5;
                `
            }
            if (type === 'ghost' || type === 'dashed') {
                cssText += `
                    border-color: #d9d9d9;
                `
            }
            return cssText
        }
        return (
            <AButton
                ref={refs}
                className={cx({
                    [className || '']: typeof className === 'string',
                    [css`
                        ${disabledCss()}
                        pointer-events:none;
                        &hover,
                        &:focus {
                            ${disabledCss()}
                        }
                    `]: loading,
                })}
                type={type}
                {...restProps}
                onClick={(e) => {
                    if (buttonClickCount.current > 0) return
                    buttonClickCount.current += 1
                    setLoading(true)
                    const res = onClick?.(e)
                    if (res instanceof Promise) {
                        res?.finally(() => {
                            setLoading(false)
                            buttonClickCount.current = 0
                        })
                    } else {
                        setLoading(false)
                        buttonClickCount.current = 0
                    }
                }}
            />
        )
    }
)

export default Button
