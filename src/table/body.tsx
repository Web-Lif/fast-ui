import { css, cx } from '@emotion/css'
import { Row } from '@weblif/rc-table'
import { Cell } from '@weblif/rc-table/es/types'
import { Checkbox, Radio } from 'antd'
import produce from 'immer'
import {
    cloneElement,
    isValidElement,
    Key,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { Column, RowClassNameParam, RowSelectType } from './type'
import { calcAutoColumnWidth, processColumns } from './utils/column'

interface BodyParam<T> {
    rows: T[]
    width: number
    columns: Column<T>[]
    rowKey: string
    rowSelection?: RowSelectType<T>
    selectedRows?: Key[]
    onSelectedRowsChange?: (selectedRows: Key[]) => void
    mode?: 'cell' | 'row'
    rowEditKey?: string[]
    onChange?: (data: T[]) => void
    rowClassName?: (param: RowClassNameParam<T>) => string
}

function useBody<T>({
    rows,
    columns: tempColumns,
    rowSelection,
    mode,
    rowKey,
    width,
    selectedRows = [],
    rowEditKey,
    onSelectedRowsChange,
    rowClassName,
    onChange,
}: BodyParam<T>) {
    const [editCells, setEditCells] = useState<string[]>([])

    const columns = useMemo(() => {
        return processColumns<T>(tempColumns)
    }, [tempColumns])

    useEffect(() => {
        if (mode === 'row') {
            const edits: string[] = []
            tempColumns.forEach((col) => {
                if (col.readOnly || typeof col.editor !== 'function') {
                    return
                }
                rowEditKey?.forEach((key) => {
                    edits.push(`${col.name}-${key}`)
                })
            })
            setEditCells(edits)
        }
    }, [rowEditKey])

    const bodys: Row<T>[] = rows.map((row, rowIndex) => {
        const cells: Cell[] = []

        let className = rowClassName?.({
            className: css`
                --rc-table-background-color: var(
                    --rctbl-body-row-background-color,
                    #fff
                );
            `,
            row,
        })
        const {
            colsWidth: tempColWidth,
            autoCount,
            colsCountFixedWidth,
        } = calcAutoColumnWidth<T>(columns, width)

        let isSelectRow = false

        columns.forEach((col, index) => {
            // 是否是合法的字段信息
            let value = ''
            const colSplit = col.name.split('.')
            if (colSplit.length > 0) {
                let tempRowData = row as any
                col.name.split('.').forEach((dataName) => {
                    tempRowData = tempRowData[dataName]
                })
                value = tempRowData
            } else {
                value = (row as any)[col.name]
            }

            let colWidth = tempColWidth[index]
            let widthResult = 0
            if (colWidth === 'auto') {
                widthResult = (width - colsCountFixedWidth) / autoCount
            } else if (typeof colWidth === 'number') {
                widthResult = colWidth
            }

            const key = (row as any)[rowKey]
            const cell: Cell = {
                width: widthResult,
                key: `${col.name}-${key}`,
                value: value as string,
            }

            const rowSelectDisabled = rowSelection?.allowDisabledSelect?.(row)

            if (col.name === '$select') {
                cell.selectd = false
                cell.className = css`
                    padding: 0 8px;
                `

                isSelectRow = selectedRows.includes(key)
                if (rowSelection?.model === 'multiple') {
                    cell.value = (
                        <Checkbox
                            disabled={rowSelectDisabled}
                            checked={isSelectRow}
                            onChange={(e) => {
                                const checked = e.target.checked
                                if (checked) {
                                    onSelectedRowsChange?.([
                                        ...selectedRows,
                                        key,
                                    ])
                                } else {
                                    const newKeys = selectedRows.filter(
                                        (rowKey) => rowKey !== key
                                    )
                                    onSelectedRowsChange?.(newKeys)
                                }
                            }}
                        />
                    )
                    cell.sticky = 'left'
                } else if (rowSelection?.model === 'single') {
                    cell.value = (
                        <Radio
                            disabled={rowSelectDisabled}
                            checked={isSelectRow}
                            className={css`
                                margin-right: 0px;
                            `}
                            onChange={(e) => {
                                const checked = e.target.checked
                                if (checked) {
                                    onSelectedRowsChange?.([key])
                                }
                            }}
                        />
                    )
                    cell.sticky = 'left'
                }
            } else {
                const renderCell = () => {
                    if (editCells.includes(cell.key as string) && col.editor) {
                        const editorElement = col.editor({
                            column: col,
                            row,
                            value,
                            onChange: (value: string) => {
                                const changeRowsData = produce<T[], T[]>(
                                    rows,
                                    (draft) => {
                                        draft.some((ele) => {
                                            if (
                                                `${col.name}-${
                                                    (ele as any)[rowKey]
                                                }` === cell.key
                                            ) {
                                                ;(ele as any)[col.name] = value
                                                ;(ele as any)['$state'] =
                                                    'update'
                                                return true
                                            } else {
                                                return false
                                            }
                                        })
                                    }
                                )
                                onChange?.(changeRowsData)
                            },
                            onFinish: () => {
                                if (mode === 'cell') {
                                    const index = editCells.indexOf(
                                        cell.key as string
                                    )
                                    const changeData = produce<
                                        string[],
                                        string[]
                                    >(editCells, (draft) => {
                                        draft.splice(index, 1)
                                    })

                                    setEditCells(changeData)
                                }
                            },
                        })
                        if (isValidElement(editorElement)) {
                            const { style, ...restProps } = editorElement.props
                            return cloneElement(editorElement, {
                                ...restProps,
                                style: {
                                    width: '100%',
                                    height: '100%',
                                    ...(style || {}),
                                },
                            })
                        }
                        return editorElement
                    }
                    if (col.render) {
                        return col.render({
                            column: col,
                            row,
                            value,
                        })
                    }
                    return value
                }

                let textAlign = ''

                if (typeof col.align?.body === 'string') {
                    textAlign = col.align?.body
                } else if (typeof col.align?.body === 'function') {
                    textAlign = col.align?.body(row)
                }

                cell.value = (
                    <div
                        className={cx(
                            {
                                [css`
                                    width: 100%;
                                    height: 100%;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                `]: true,
                            },
                            {
                                [css`
                                    text-align: ${textAlign};
                                `]:
                                    typeof col.align?.body === 'string' ||
                                    typeof col.align?.body === 'function',
                            },
                            {
                                [css`
                                    padding: 0 8px;
                                `]: !editCells.includes(cell.key as string),
                                [css`
                                    padding: 0px 2px 5px 2px;
                                `]: editCells.includes(cell.key as string),
                            }
                        )}
                        onDoubleClick={() => {
                            // 如果是单元格编辑
                            if (
                                mode === 'cell' &&
                                col.editor &&
                                col.readOnly !== true
                            ) {
                                const index = editCells.indexOf(
                                    cell.key as string
                                )
                                if (index !== -1) {
                                    const changeData = produce<
                                        string[],
                                        string[]
                                    >(editCells, (draft) => {
                                        draft.splice(index, 1)
                                    })
                                    setEditCells(changeData)
                                } else {
                                    const changeData = produce<
                                        string[],
                                        string[]
                                    >(editCells, (draft) => {
                                        draft.push(cell.key as string)
                                    })
                                    setEditCells(changeData)
                                }
                            }
                        }}
                    >
                        {renderCell()}
                    </div>
                )
            }

            if (col.fixed) {
                cell.sticky = col.fixed
            }

            let selectd = cell.selectd

            if (mode === undefined) {
                selectd = false
            } else if (typeof col.allowCellSelectBorder === 'function') {
                selectd = col.allowCellSelectBorder({
                    row,
                    selectd: cell.selectd,
                })
            } else if (typeof col.allowCellSelectBorder === 'boolean') {
                selectd = col.allowCellSelectBorder
            }
            if (mode === 'row') {
                cell.selectd = false
            } else {
                cell.selectd = selectd
            }
            cells.push(cell)
        })

        const selectClass = cx({
            [css`
                > div {
                    background-color: var(
                        --rctbl-body-row-select-background-color,
                        #f5f5f5
                    );
                }
            `]: isSelectRow,
        })
        return {
            height: 35,
            cells,
            key: rowIndex,
            className: `${className} ${selectClass}`,
            object: row,
        }
    })

    const isHaveSummary = columns.some((col) => {
        if (col.summary) {
            return true
        }
        return false
    })

    if (isHaveSummary) {
        const cells: Cell[] = []

        tempColumns.forEach((col, index) => {
            const {
                colsWidth: tempColWidth,
                autoCount,
                colsCountFixedWidth,
            } = calcAutoColumnWidth<T>(columns, width)

            let colWidth = tempColWidth[index]
            let widthResult = 0
            if (colWidth === 'auto') {
                widthResult = (width - colsCountFixedWidth) / autoCount
            } else if (typeof colWidth === 'number') {
                widthResult = colWidth
            }
            cells.push({
                width: widthResult,
                key: `${col.name}-summary`,
                value: col?.summary?.(rows) || '',
                selectd: false,
                sticky: col.fixed,
            })
        })
        bodys.push({
            height: 35,
            cells,
            key: 'rc-table-row-summary',
            sticky: 'bottom',
            className: css`
                background-color: var(--rctbl-body-row-background-color);
            `,
        })
    }

    return bodys
}

export default useBody
