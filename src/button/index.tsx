import React, { useState, forwardRef } from 'react'
import AButton, { ButtonProps as AButtonProps } from 'antd/es/button'

export interface ButtonProps extends Omit<AButtonProps, 'onClick'> {
    /** 点击按钮触发的事件, 返回一个 `Promise<void>` 对象 */
    onClick?: (
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => Promise<void> | void
}

const Button = forwardRef<HTMLElement, ButtonProps>(
    (props: ButtonProps, refs) => {
        const { onClick, disabled: dis, ...restProps } = props

        const [disabled, setDisabled] = useState(dis)

        return (
            <AButton
                ref={refs}
                {...restProps}
                disabled={dis === false || dis === true ? dis : disabled}
                onClick={(e) => {
                    setDisabled(true)
                    const res = onClick?.(e)
                    if (res instanceof Promise) {
                        res?.finally(() => {
                            setDisabled(false)
                        })
                    } else {
                        setDisabled(false)
                    }
                }}
            />
        )
    }
)

export default Button
