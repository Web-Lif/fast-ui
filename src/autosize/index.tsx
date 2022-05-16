import { css } from '@emotion/css';
import React, { FC, HTMLAttributes, ReactNode, useLayoutEffect, useRef, useState } from 'react';

type Size = {
    width: number;
    height: number;
};

interface AutoSizeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    children: (size: Size) => ReactNode;
}

const AutoSize: FC<AutoSizeProps> = ({ children, className, ...restProps }) => {
    const [size, setSize] = useState<Size>({
        width: 0,
        height: 0,
    });
    const divRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            const { width, height } = divRef.current!.getBoundingClientRect();
            setSize({
                width,
                height,
            });
        });
        resizeObserver.observe(divRef.current!);
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const divCss = css`
        box-sizing: border-box;
        overflow: hidden;
    `;

    const renderChildren = () => {
        if (size.width === 0 && size.height === 0) {
            return <div className={`${divCss} ${className}`} ref={divRef} {...restProps} />;
        }
        return (
            <div className={`${divCss} ${className}`} ref={divRef} {...restProps}>
                {children(size)}
            </div>
        );
    };

    return renderChildren();
};

export default AutoSize;
