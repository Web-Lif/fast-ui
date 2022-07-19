import {
    DndContext,
    PointerSensor,
    useDraggable,
    useSensor,
    useSensors,
} from '@dnd-kit/core'
import { restrictToWindowEdges } from '@dnd-kit/modifiers'
import { CSS } from '@dnd-kit/utilities'
import AntModal, { ModalProps as AntModalProps } from 'antd/es/modal'
import React, { FC, useLayoutEffect, useRef, useState } from 'react'

export interface ModalProps
    extends Omit<AntModalProps, 'onOk' | 'confirmLoading'> {
    /** 改变状态触发的事件 */
    onChangeVisible: (disabled: boolean) => void

    /** 点击完成按钮触发的事件, 返回一个 `Promise<void>` 对象 */
    onOk?: (
        event:
            | React.MouseEvent<HTMLElement, MouseEvent>
            | React.KeyboardEvent<HTMLDivElement>
    ) => Promise<boolean | void> | boolean | void

    /** 点击取消按钮后触发的事件 */
    onCancel?: (
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => Promise<boolean | void> | boolean | void

    /** 键盘按键的时候触发的事件 */
    onKeyDown?: (
        e: React.KeyboardEvent<HTMLDivElement>,
        onOkFunction: (
            event:
                | React.MouseEvent<HTMLElement, MouseEvent>
                | React.KeyboardEvent<HTMLDivElement>
        ) => void
    ) => void
}

interface DraggableProps extends React.HTMLAttributes<HTMLDivElement> {
    transform: {
        x: number
        y: number
        scaleX: number
        scaleY: number
    }
    disabled?: boolean
}

const Draggable = React.forwardRef<HTMLDivElement | null, DraggableProps>(
    (
        { children, transform: transf, style, disabled, ...restProps },
        forwardref
    ) => {
        const { attributes, listeners, setNodeRef, transform } = useDraggable({
            id: 'draggable-title',
            disabled,
        })

        return (
            <div
                style={{
                    width: '100%',
                    transform: CSS.Translate.toString({
                        x: (transform?.x || 0) + transf.x,
                        y: (transform?.y || 0) + transf.y,
                        scaleX: 0,
                        scaleY: 0,
                    }),
                    ...style,
                }}
                ref={(ref) => {
                    setNodeRef(ref)
                    if (typeof forwardref === 'function') {
                        forwardref(ref)
                    } else if (forwardref) {
                        forwardref.current = ref
                    }
                }}
                {...listeners}
                {...attributes}
                {...restProps}
            >
                {children}
            </div>
        )
    }
)

const InternalModal: FC<ModalProps> = ({
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
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const draggleRef = useRef<HTMLDivElement>(null)

    const onOkFunction = (
        event:
            | React.MouseEvent<HTMLElement, MouseEvent>
            | React.KeyboardEvent<HTMLDivElement>
    ) => {
        setLoading(true)
        const res = onOk?.(event)
        if (res instanceof Promise) {
            res!
                .then((isVisible) => {
                    if (isVisible !== false) {
                        onChangeVisible(false)
                    }
                    setLoading(false)
                })
                .catch((error) => {
                    console.error(error)
                    setLoading(false)
                })
        } else {
            if (res !== false) {
                onChangeVisible(false)
            }
            setLoading(false)
        }
    }

    useLayoutEffect(() => {
        if (visible) {
            setTimeout(() => {
                draggleRef.current?.focus()
            }, 0)
        }
    }, [visible])

    const [delta, setDelta] = useState<{
        x: number
        y: number
        scaleX: number
        scaleY: number
    }>({
        x: 0,
        y: 0,
        scaleX: 0,
        scaleY: 0,
    })

    const sensors = useSensors(useSensor(PointerSensor))

    return (
        <DndContext
            sensors={sensors}
            modifiers={[restrictToWindowEdges]}
            onDragEnd={({ delta }) => {
                setDelta(({ x, y }) => ({
                    x: delta.x + x,
                    y: delta.y + y,
                    scaleX: 0,
                    scaleY: 0,
                }))
            }}
        >
            <AntModal
                visible={visible}
                confirmLoading={loading}
                okText={okText}
                cancelText={cancelText}
                title={
                    <div
                        onMouseMove={() => {
                            setDisabled(false)
                        }}
                        onMouseOut={() => {
                            setDisabled(true)
                        }}
                    >
                        {title}
                    </div>
                }
                modalRender={(dom) => {
                    return (
                        <Draggable
                            ref={draggleRef}
                            tabIndex={-1}
                            disabled={disabled}
                            transform={delta}
                            onKeyDown={(e) => {
                                if (onKeyDown) {
                                    onKeyDown(e, onOkFunction)
                                } else if (
                                    !e.ctrlKey &&
                                    e.key === 'Enter' &&
                                    loading === false
                                ) {
                                    onOkFunction(e)
                                }
                            }}
                        >
                            {dom}
                        </Draggable>
                    )
                }}
                onOk={(event) => {
                    onOkFunction(event)
                }}
                onCancel={(event) => {
                    const res = onCancel?.(event)
                    if (res instanceof Promise) {
                        res!
                            .then((isVisible) => {
                                if (isVisible !== false) {
                                    onChangeVisible(false)
                                }
                            })
                            .catch((error) => {
                                console.error(error)
                            })
                    } else {
                        if (res !== false) {
                            onChangeVisible(false)
                        }
                    }
                }}
                destroyOnClose={destroyOnClose}
                {...restProps}
            />
        </DndContext>
    )
}

type InternalModalType = typeof InternalModal

interface ModalInterface extends InternalModalType {
    info: typeof AntModal.info
    success: typeof AntModal.success
    warning: typeof AntModal.warning
    error: typeof AntModal.error
    confirm: typeof AntModal.confirm
}

const Modal = InternalModal as ModalInterface

Modal.info = AntModal.info
Modal.warning = AntModal.warning
Modal.success = AntModal.success
Modal.error = AntModal.error
Modal.confirm = AntModal.confirm

export default Modal
