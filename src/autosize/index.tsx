import React, { FC, HTMLAttributes, ReactNode, useLayoutEffect, useRef, useState } from 'react'

type Size = {
    width: number,
    height: number
}

interface AutoSizeProps extends HTMLAttributes<HTMLDivElement> {
    children: (size: Size) => ReactNode
}

const AutoSize: FC<AutoSizeProps> = ({
    children,
    ...restProps
}) => {
    const [size, setSize] = useState<Size>({
        width: 0,
        height: 0
    })
    const divRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            const { width, height} = divRef.current!.getBoundingClientRect()
            setSize({
                width,
                height
            })
        })
        resizeObserver.observe(divRef.current!);
        return () => {
            resizeObserver.disconnect()
        }
    }, [])


    return (
        <div
            ref={divRef}
            {...restProps}
        >
            {
                children(size)
            }
        </div>
    )
}

export default AutoSize
