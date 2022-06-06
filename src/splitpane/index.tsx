import { css, cx } from '@emotion/css';
import React, { CSSProperties, FC, ReactNode } from 'react';
import * as ReactSpaces from 'react-spaces';
import { IResizableProps } from 'react-spaces';
import { SizeUnit } from 'react-spaces/dist/core-types';
import { AutoSize, Card } from '..';

interface SplitPaneProps extends Omit<IResizableProps, 'size'> {
    leftReactNode?: ReactNode;
    title?: ReactNode;
    extra?: ReactNode;
    contentStyle?: CSSProperties;
    contentClassName?: string;
    contentTitle?: ReactNode;
    contentExtra?: ReactNode;
    size?: SizeUnit;
}

const SplitPane: FC<SplitPaneProps> = ({
    children,
    leftReactNode,
    style,
    className,
    size = '20%',
    title,
    extra,
    contentExtra,
    contentTitle,
    contentStyle,
    contentClassName,
    ...restProps
}) => {
    return (
        <AutoSize style={style}>
            {({ height, width }) => (
                <ReactSpaces.Fixed
                    className={css`
                        .ant-card-extra {
                            padding: 10px;
                        }
                        .resize-right {
                            z-index: 40;
                            transition: background-color 0.8s;
                            &:hover {
                                background-color: var(--ant-primary-color-hover, #40a9ff);
                            }
                        }
                    `}
                    height={height}
                    width={width}
                >
                    <ReactSpaces.LeftResizable
                        className={cx({
                            [className || '']: typeof className === 'string',
                        })}
                        size={size}
                        {...restProps}
                    >
                        <Card
                            title={title}
                            extra={extra}
                            className={css`
                                height: 100%;
                            `}
                            bodyStyle={{
                                height: '100%',
                            }}
                        >
                            <AutoSize>
                                {({ width, height }) => (
                                    <div
                                        style={{
                                            width,
                                            height,
                                            overflow: 'auto',
                                        }}
                                    >
                                        {leftReactNode}
                                    </div>
                                )}
                            </AutoSize>
                        </Card>
                    </ReactSpaces.LeftResizable>
                    <ReactSpaces.Fill
                        style={contentStyle}
                        className={cx({
                            [contentClassName || '']: typeof contentClassName === 'string',
                        })}
                    >
                        <Card
                            title={contentTitle}
                            extra={contentExtra}
                            className={css`
                                height: 100%;
                            `}
                            bodyStyle={{
                                height: '100%',
                            }}
                        >
                            <AutoSize>
                                {({ width, height }) => (
                                    <div
                                        style={{
                                            width,
                                            height,
                                            overflow: 'auto',
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                            </AutoSize>
                        </Card>
                    </ReactSpaces.Fill>
                </ReactSpaces.Fixed>
            )}
        </AutoSize>
    );
};

export default SplitPane;
