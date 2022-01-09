import React, { MutableRefObject, useState, useEffect, useRef } from 'react';
import { Modal as AntModal, ModalProps as AntModalProps, notification } from 'antd';
import Draggable from 'react-draggable';
import 'antd/es/modal/style/index';

export interface ModalInstance {
    show: () => void;
    hide: () => void;
}

export interface ModalProps extends Omit<AntModalProps, 'onOk' | 'confirmLoading' | 'visible'> {
    /** 点击完成按钮触发的事件, 返回一个 `Promise<void>` 对象 */
    onOk?: (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
    ) => Promise<boolean | void> | boolean | void;
    /** 点击取消按钮后触发的事件 */
    onCancel?: (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
    ) => Promise<boolean | void> | boolean | void;
    /** 改变显示状态 */
    modal?: MutableRefObject<ModalInstance>;
}

const Modal = ({
    onOk,
    onCancel,
    modal,
    title,
    destroyOnClose = true,
    ...restProps
}: ModalProps) => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const [disabled, setDisabled] = useState(true);
    const draggleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (modal) {
            modal.current = {
                hide: () => {
                    setVisible(false);
                },
                show: () => {
                    setVisible(true);
                },
            };
        }
    }, []);

    return (
        <AntModal
            visible={visible}
            confirmLoading={loading}
            title={
                <div
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
                        <div ref={draggleRef}>{dom}</div>
                    </Draggable>
                );
            }}
            onOk={(event) => {
                setLoading(true);
                const res = onOk?.(event);
                if (res instanceof Promise) {
                    res!
                        .then((isVisible) => {
                            if (isVisible !== false) {
                                setVisible(false);
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
                        setVisible(false);
                    }
                    setLoading(false);
                }
            }}
            onCancel={(event) => {
                const res = onCancel?.(event);
                if (res instanceof Promise) {
                    res!
                        .then((isVisible) => {
                            if (isVisible !== false) {
                                setVisible(false);
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
                        setVisible(false);
                    }
                }
            }}
            destroyOnClose={destroyOnClose}
            {...restProps}
        />
    );
};

export default Modal;
