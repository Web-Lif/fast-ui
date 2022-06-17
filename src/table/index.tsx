import { css } from '@emotion/css'
import { Table as RCTable } from '@weblif/rc-table'
import { PaginationProps } from 'antd'
import produce from 'immer'
import React, {
    CSSProperties,
    Key,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import { AutoSize, Pagination } from '..'
import { Empty } from '../index'
import useBody from './body'
import useHeader from './header'
import { Column, RowClassNameParam, RowSelectType, SortDirection } from './type'

export interface InternalTableProps<T> {
    /** 表格的宽度 */
    width: number

    /** 表格的高度信息 */
    height: number

    /** 实际表格的内容信息 */
    rows: T[]

    /** 编辑模式 Cell 表示单元格编辑, Row 表示行编辑 */
    mode?: 'cell' | 'row'

    /** 设置行的数据,表示将符合行的数据开启为编辑模式, mode 必须为 `row` 模式 */
    rowEditKey?: string[]

    /** 数据的唯一Key */
    rowKey: string

    /** 列信息 */
    columns: Column<T>[]

    /** 选择配置 */
    rowSelection?: RowSelectType<T>

    /** 设置行的 className */
    rowClassName?: (param: RowClassNameParam<T>) => string

    /** 排序字段 */
    sortColumns?: SortDirection[]

    /** 当前选中的行信息 */
    selectedRows?: Key[]

    /** 当选中改变行的时候触发的事件 */
    onSelectedRowsChange?: (selectedRows: Key[]) => void

    /** 表格单击行触发的事件 */
    onRowClick?: (row: T) => void

    /** 表格双击行触发的事件 */
    onRowDoubleClick?: (row: T) => void

    /** 改变表格数据触发的事件 */
    onChange?: (rows: T[]) => void

    /** 改变表格列信息触发的事件 */
    onChangeColumns?: (cols: Column<T>[]) => void

    /** 排序字段改变触发的事件 */
    onSortColumnsChange?: (change: SortDirection[]) => void
}

function InternalTable<T>({
    width,
    height,
    columns = [],
    rows = [],
    rowKey,
    mode,
    sortColumns = [],
    rowSelection,
    selectedRows = [],
    rowEditKey = [],
    onSelectedRowsChange,
    onChange,
    onRowClick,
    onRowDoubleClick,
    onChangeColumns,
    rowClassName = ({ className }) => className,
    onSortColumnsChange = () => {},
}: InternalTableProps<T>) {
    const moveOffset = useRef<{
        x: number
        y: number
    }>({
        x: 0,
        y: 0,
    })

    const startMoveOffset = useRef<{
        x: number
        y: number
    }>({
        x: -1,
        y: -1,
    })

    const startMoveColName = useRef<Column<T>>()

    if (typeof rowKey !== 'string') {
        throw new Error('FAST-UI: 表格 [rowKey] 属性要是一个字符串。')
    }

    const colsProcess = useMemo(() => {
        if (
            rowSelection &&
            rowSelection.model &&
            columns?.[0]?.name !== '$select'
        ) {
            return produce(columns, (draft) => {
                draft.splice(0, 0, {
                    name: '$select',
                    title: '',
                    width: 35,
                    fixed: 'left',
                })
            })
        }
        return columns
    }, [columns])

    const headers = useHeader<T>({
        width,
        columns: colsProcess,
        onSortColumnsChange,
        sortColumns,
        onColumnMouseDown: (e, col) => {
            if (e.button === 0) {
                startMoveColName.current = col
                startMoveOffset.current = {
                    x: moveOffset.current.x,
                    y: moveOffset.current.y,
                }
            }
        },
        onChangeColumns,
    })

    const bodys = useBody<T>({
        rows,
        width,
        columns: colsProcess,
        rowSelection,
        rowKey,
        mode,
        selectedRows,
        rowEditKey,
        onSelectedRowsChange,
        onChange,
        rowClassName,
    })

    const moveTicking = useRef<boolean>(false)

    const [_, forceRefresh] = useState<number>(0)

    useEffect(() => {
        forceRefresh(new Date().getTime())
    }, [])

    return (
        <RCTable<T>
            width={width}
            height={height}
            rows={headers.concat(bodys)}
            onMouseMove={(e) => {
                moveOffset.current = {
                    x: e.clientX,
                    y: e.clientY,
                }
                // 修改列的宽度信息
                if (
                    startMoveOffset.current.x !== -1 &&
                    startMoveOffset.current.y !== -1 &&
                    !moveTicking.current
                ) {
                    const offsetX =
                        moveOffset.current.x - startMoveOffset.current.x
                    requestAnimationFrame(() => {
                        if (colsProcess) {
                            const changeColumns = produce(
                                colsProcess,
                                (draft) => {
                                    draft.some((element: any) => {
                                        if (
                                            element.name ===
                                                startMoveColName.current
                                                    ?.name &&
                                            typeof element.width === 'number'
                                        ) {
                                            if (
                                                element.$initWidth === undefined
                                            ) {
                                                element.$initWidth =
                                                    element.width
                                            }
                                            element.width =
                                                element.$initWidth + offsetX
                                            return true
                                        }
                                        return false
                                    })
                                }
                            )
                            onChangeColumns?.(changeColumns)
                        }
                        setTimeout(() => {
                            moveTicking.current = false
                        }, 40)
                    })
                    moveTicking.current = true
                }
            }}
            onMouseUp={() => {
                if (colsProcess) {
                    const changeColumns = produce(colsProcess, (draft) => {
                        draft.some((element: any) => {
                            if (
                                element.name ===
                                    startMoveColName.current?.name &&
                                typeof element.width === 'number'
                            ) {
                                if (element.$initWidth !== undefined) {
                                    element.$initWidth = undefined
                                }
                                return true
                            }
                            return false
                        })
                    })
                    onChangeColumns?.(changeColumns)
                }
                startMoveOffset.current = {
                    x: -1,
                    y: -1,
                }
            }}
            onRowClick={({ row }) => {
                if (
                    rowSelection?.clickModel === 'row' &&
                    rowSelection?.model === 'multiple'
                ) {
                    const key: Key = (row.object as any)[rowKey]

                    if (selectedRows?.includes(key)) {
                        onSelectedRowsChange?.(
                            selectedRows.filter((rowKey) => rowKey !== key)
                        )
                    } else {
                        onSelectedRowsChange?.([...selectedRows, key])
                    }
                } else if (
                    rowSelection?.clickModel === 'row' &&
                    rowSelection?.model === 'single'
                ) {
                    const changeData = produce<T[], T[]>(rows, (draft) => {
                        draft.forEach((ele) => {
                            if (
                                (ele as any)[rowKey] ===
                                (row.object as any)[rowKey]
                            ) {
                                ;(ele as any)['$select'] = !(ele as any)[
                                    '$select'
                                ]
                            } else {
                                ;(ele as any)['$select'] = false
                            }
                        })
                    })
                    onChange?.(changeData)
                }

                if (row.object) {
                    onRowClick?.(row.object)
                }
            }}
            onRowDoubleClick={({ row }) => {
                if (row.object) {
                    onRowDoubleClick?.(row.object)
                }
            }}
            onRowMouseEnter={(e, table) => {
                const currentTarget = e.currentTarget
                setTimeout(() => {
                    const classNames = currentTarget.className.split(' ')
                    const className = classNames.find((className) =>
                        className.includes('rc-table-row-')
                    )
                    const elements = table.querySelectorAll(`.${className}`)
                    table
                        .querySelectorAll(`.rc-table-row`)
                        .forEach((element) => {
                            const htmlElement = element as HTMLElement
                            if (
                                htmlElement.style.getPropertyValue(
                                    '--rc-table-background-color'
                                )
                            ) {
                                htmlElement.style.removeProperty(
                                    '--rc-table-background-color'
                                )
                            }
                        })

                    elements.forEach((element) => {
                        ;(element as HTMLElement).style.setProperty(
                            '--rc-table-background-color',
                            '#f5f5f5'
                        )
                    })
                }, 0)
            }}
            onEmptyRowsRenderer={() => <Empty />}
        />
    )
}

export interface TableProps<T>
    extends Omit<InternalTableProps<T>, 'width' | 'height'> {
    /**
     * 设置表格样式信息
     */
    className?: string
    /**
     * CSSProperties
     */
    style?: CSSProperties
    /**
     * 如果存在，则添加对应的分页信息
     */
    pagination?: PaginationProps
}

function Table<T>({
    className,
    style,
    pagination,
    ...restProps
}: TableProps<T>) {
    const renderPagination = () => {
        if (pagination) {
            const {
                size = 'small',
                showQuickJumper = true,
                showSizeChanger = true,
                pageSizeOptions = ['50', '100', '200', '500'],
                ...paginationProps
            } = pagination
            return (
                <div
                    style={{
                        width: style?.width,
                    }}
                    className={css`
                        display: flex;
                        justify-content: center;
                        padding: 0.3rem;
                        border-left: 1px solid
                            var(--rc-table-border-color, #ddd);
                        border-bottom: 1px solid
                            var(--rc-table-border-color, #ddd);
                        border-right: 1px solid
                            var(--rc-table-border-color, #ddd);
                        background-color: #f9f9f9;
                    `}
                >
                    <div
                        className={css`
                            flex: 1;
                        `}
                    />
                    <Pagination
                        size={size}
                        showQuickJumper={showQuickJumper}
                        showSizeChanger={showSizeChanger}
                        pageSizeOptions={pageSizeOptions}
                        {...paginationProps}
                    />
                </div>
            )
        }
        return null
    }
    return (
        <>
            <AutoSize className={className} style={style}>
                {({ width, height }) => (
                    <>
                        <InternalTable
                            width={width}
                            height={height}
                            {...restProps}
                        />
                    </>
                )}
            </AutoSize>
            {renderPagination()}
        </>
    )
}

export default Table
