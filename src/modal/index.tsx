import type { Modifier } from '@dnd-kit/core'
import {
    DndContext,
    PointerSensor,
    useDraggable,
    useSensor,
    useSensors,
} from '@dnd-kit/core'
import AntModal, { ModalProps as AntModalProps } from 'antd/es/modal'
import { FC, forwardRef, useLayoutEffect, useRef, useState } from 'react'

const restrictToWindowEdges: Modifier = ({
    transform,
    draggingNodeRect,
    windowRect,
    scrollableAncestors,
}) => {
    const target = scrollableAncestors?.[0] as HTMLElement
    if (!draggingNodeRect || !windowRect || !target) {
        return transform
    }

    const value = {
        ...transform,
    }

    if (draggingNodeRect.top + transform.y <= windowRect.top) {
        value.y = windowRect.top - draggingNodeRect.top
    } else if (
        draggingNodeRect.bottom + transform.y >=
            windowRect.top + windowRect.height &&
        draggingNodeRect.height < windowRect.height
    ) {
        value.y = windowRect.top + windowRect.height - draggingNodeRect.bottom
    }

    if (draggingNodeRect.left + transform.x <= windowRect.left) {
        value.x = windowRect.left - draggingNodeRect.left
    } else if (
        draggingNodeRect.left + transform.x + draggingNodeRect.width >=
        windowRect.left + windowRect.width
    ) {
        value.x =
            windowRect.left +
            windowRect.width -
            draggingNodeRect.right -
            (target.offsetWidth - target.scrollWidth)
    }

    return value
}

export interface ModalProps
    extends Omit<AntModalProps, 'onOk' | 'confirmLoading' | 'visible'> {
    /** 改变状态触发的事件 */
    onOpenChange: (disabled: boolean) => void

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

interface DraggableHandleProps extends React.HTMLAttributes<HTMLDivElement> {}

const DraggableHandle: FC<DraggableHandleProps> = ({
    children,
    ...restProps
}) => {
    const { attributes, listeners } = useDraggable({
        id: 'draggable-title',
    })
    return (
        <div {...listeners} {...attributes} {...restProps}>
            {children}
        </div>
    )
}

interface DraggableProps extends React.HTMLAttributes<HTMLDivElement> {
    transform: {
        x: number
        y: number
        scaleX: number
        scaleY: number
    }
}

const Draggable = forwardRef<HTMLDivElement | null, DraggableProps>(
    ({ children, transform: transf, style, ...restProps }, forwardref) => {
        const { setNodeRef, transform } = useDraggable({
            id: 'draggable-title',
        })

        return (
            <div
                style={{
                    width: '100%',
                    position: 'absolute',
                    top: (transform?.y || 0) + transf.y,
                    left: (transform?.x || 0) + transf.x,
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
    open,
    title,
    destroyOnClose = true,
    onOk,
    onCancel,
    onOpenChange,
    onKeyDown,
    ...restProps
}) => {
    const [loading, setLoading] = useState(false)
    const draggleRef = useRef<HTMLDivElement | null>(null)

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    )

    const onOkFunction = (
        event:
            | React.MouseEvent<HTMLElement, MouseEvent>
            | React.KeyboardEvent<HTMLDivElement>
    ) => {
        setLoading(true)
        const res = onOk?.(event)
        if (res instanceof Promise) {
            res!
                .then((isOpen) => {
                    if (isOpen !== false) {
                        onOpenChange(false)
                    }
                    setLoading(false)
                })
                .catch((error) => {
                    console.error(error)
                    setLoading(false)
                })
        } else {
            if (res !== false) {
                onOpenChange(false)
            }
            setLoading(false)
        }
    }

    useLayoutEffect(() => {
        if (open) {
            setTimeout(() => {
                draggleRef.current?.focus()
            }, 0)
        }
    }, [open])

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
                open={open}
                confirmLoading={loading}
                okText={okText}
                cancelText={cancelText}
                title={<DraggableHandle>{title}</DraggableHandle>}
                modalRender={(dom) => {
                    return (
                        <Draggable
                            ref={draggleRef}
                            tabIndex={-1}
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
                            .then((isOpen) => {
                                if (isOpen !== false) {
                                    onOpenChange(false)
                                }
                            })
                            .catch((error) => {
                                console.error(error)
                            })
                    } else {
                        if (res !== false) {
                            onOpenChange(false)
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
