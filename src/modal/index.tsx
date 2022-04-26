import React, { useState, useRef, useLayoutEffect, FC } from 'react';
import { Modal as AntModal, ModalProps as AntModalProps, notification } from 'antd';
import Draggable from 'react-draggable';

// see https://github.com/react-grid-layout/react-draggable/pull/648
declare module 'react-draggable' {
    export interface DraggableProps {
        children: React.ReactNode;
    }
}

export interface ModalProps extends Omit<AntModalProps, 'onOk' | 'confirmLoading'> {
    /** 改变状态触发的事件 */
    onChangeVisible: (disabled: boolean) => void;

    /** 点击完成按钮触发的事件, 返回一个 `Promise<void>` 对象 */
    onOk?: (
        event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>,
    ) => Promise<boolean | void> | boolean | void;

    /** 点击取消按钮后触发的事件 */
    onCancel?: (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
    ) => Promise<boolean | void> | boolean | void;

    /** 键盘按键的时候触发的事件 */
    onKeyDown?: (
        e: React.KeyboardEvent<HTMLDivElement>,
        onOkFunction: (
            event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>,
        ) => void,
    ) => void;
}

const Modal: FC<ModalProps> = ({
    okText = '确定',
    cancelText = '取消',
    visible,
    title,
    destroyOnClose = true,
    onOk,
    onCancel,
    onChangeVisible,
    onKeyDown,
    ...restProps
}) => {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const draggleRef = useRef<HTMLDivElement>(null);

    const onOkFunction = (
        event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>,
    ) => {
        setLoading(true);
        const res = onOk?.(event);
        if (res instanceof Promise) {
            res!
                .then((isVisible) => {
                    if (isVisible !== false) {
                        onChangeVisible(false);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    notification.error({
                        message: '系统消息',
                        description: error.message,
                    });
                    setLoading(false);
                });
        } else {
            if (res !== false) {
                onChangeVisible(false);
            }
            setLoading(false);
        }
    };

    useLayoutEffect(() => {
        if (visible) {
            setTimeout(() => {
                draggleRef.current?.focus();
            }, 0);
        }
    }, [visible]);

    return (
        <AntModal
            visible={visible}
            confirmLoading={loading}
            okText={okText}
            cancelText={cancelText}
            title={
                <div
                    tabIndex={0}
                    style={{
                        width: '100%',
                        cursor: 'move',
                    }}
                    onMouseOver={() => {
                        if (disabled) {
                            setDisabled(false);
                        }
                    }}
                    onMouseOut={() => {
                        setDisabled(true);
                    }}
                >
                    {title}
                </div>
            }
            modalRender={(dom) => {
                return (
                    <Draggable
                        disabled={disabled}
                        bounds={bounds}
                        onStart={(event, uiData) => {
                            const { clientWidth, clientHeight } = window.document.documentElement;
                            const targetRect = draggleRef.current?.getBoundingClientRect();
                            if (!targetRect) {
                                return;
                            }
                            setBounds({
                                left: -targetRect.left + uiData.x,
                                right: clientWidth - (targetRect.right - uiData.x),
                                top: -targetRect.top + uiData.y,
                                bottom: clientHeight - (targetRect.bottom - uiData.y),
                            });
                        }}
                    >
                        <div
                            ref={draggleRef}
                            tabIndex={-1}
                            onKeyDown={(e) => {
                                if (onKeyDown) {
                                    onKeyDown(e, onOkFunction);
                                } else if (!e.ctrlKey && e.key === 'Enter' && loading === false) {
                                    onOkFunction(e);
                                }
                            }}
                        >
                            {dom}
                        </div>
                    </Draggable>
                );
            }}
            onOk={(event) => {
                onOkFunction(event);
            }}
            onCancel={(event) => {
                const res = onCancel?.(event);
                if (res instanceof Promise) {
                    res!
                        .then((isVisible) => {
                            if (isVisible !== false) {
                                onChangeVisible(false);
                            }
                        })
                        .catch((error) => {
                            console.error(error);
                            notification.error({
                                message: '系统消息',
                                description: error.message,
                            });
                        });
                } else {
                    if (res !== false) {
                        onChangeVisible(false);
                    }
                }
            }}
            destroyOnClose={destroyOnClose}
            {...restProps}
        />
    );
};

export default Modal;
