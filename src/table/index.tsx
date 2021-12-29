import React, { ReactElement, useMemo } from 'react'
import { Row, Table as RCTable } from '@weblif/rc-table'
import { Checkbox, Radio } from 'antd'
import { Cell } from '@weblif/rc-table/es/types'
import produce from 'immer'

import styles from './styles/index.less'

type AlignType = 'left' | 'right' | 'center'


interface RowSelectType {
    /** 选择模式, 是单选还是多选模式 */
    model: 'single' | 'multiple'
}

interface Column<T> {

    /** 对应的字段名称 */
    name: string

    /** 标题显示的名称 */
    title: string

    /** 列的宽度信息 */
    width?: number

    /** 固定列的方向 */
    fixed?: 'left' | 'right'

    /** 是否只读 */
    readOnly?: boolean

    /** 设置列的对齐方式 */
    align?: {
        
        /** 默认为 left */
        header?: AlignType,

        /** 默认为 center */
        body?: AlignType | ((row: T) => AlignType)
    }

    /** 编辑器 */
    editor?: ReactElement

}

interface TableProps<T> {
    /** 表格的宽度 */
    width: number

    /** 表格的高度信息 */
    height: number

    /** 实际表格的内容信息 */
    rows: T[]

    /** 列信息 */
    columns: Column<T>[]
    
    /** 选择配置 */
    rowSelection: RowSelectType

    /** 表格单击行触发的事件 */
    onRowClick?: (row: T) => void

    /** 表格双击行触发的事件 */
    onRowDoubleClick?: (row: T) => void

    /** 改变表格数据触发的事件 */
    onChange?: (rows: T[]) => void

}

function Table<T> ({
    width,
    height,
    columns = [],
    rows = [],
    rowSelection,
    onChange,
    onRowClick,
    onRowDoubleClick
}: TableProps<T>)  {

    
    const colsProcess = useMemo(() => {
        if (rowSelection && rowSelection.model) {
            columns.splice(0, 0, {
                name: '$select',
                title: '',
                width: 35,
                fixed: 'left',
    
            })
        }
        return columns
    }, [columns])

    const headers: Row[] = useMemo(() => {
        const cells: Cell[] = colsProcess.map(col => ({
            width: col.width || 120,
            selectd: false,
            key: col.name,
            value: col.title,
        }));
        return [{
            height: 35,
            sticky: 'top',
            cells,
            key: 'header',
            className: styles.header
        }]
    }, [colsProcess])

    const bodys: Row[] = useMemo(() => {
        return rows.map((row, rowIndex) => {
            const cells: Cell[] = [] 
            colsProcess.forEach(col => {
                const value = (row as any)[col.name]
                const cell: Cell = {
                    width: col.width || 120,
                    key: `${col.name}-${rowIndex}`,
                    value: value as string,
                }

                if (col.name === '$select') {
                    cell.selectd = false
                    cell.className = styles.cellSelect
                    if (rowSelection?.model === 'multiple') {
                        cell.value = (
                            <Checkbox
                                checked={value === true}
                                onChange={(e) => {
                                    const checked = e.target.checked
                                    const changeData = produce<T[], T[]>(rows, draft => {
                                        draft.some((ele, index) => {
                                            if (index === rowIndex) {
                                                (ele as any)['$select'] = checked
                                                return true
                                            }
                                            return false
                                        })
                                    })
                                    onChange?.(changeData)
                                }}
                            />
                        ) 
                    } else if (rowSelection?.model === 'single') {
                        cell.value = (
                            <Radio
                                checked={value === true}
                                onChange={(e) => {
                                    const checked = e.target.checked
                                    const changeData = produce<T[], T[]>(rows, draft => {
                                        draft.forEach((ele, index) => {
                                            if (index === rowIndex) {
                                                (ele as any)['$select'] = checked
                                            } else {
                                                (ele as any)['$select'] = false
                                            }
                                        })
                                    })
                                    onChange?.(changeData)
    
                                }}
                            />
                        )
                    }

                }
                cells.push(cell)
            })
            return {
                height: 35,
                cells,
                key: rowIndex
            }
        })
    }, [rows, columns])

    return (
        <RCTable
            width={width}
            height={height}
            rows={headers.concat(bodys)}
            onRowClick={() => {
            }}
            onRowDoubleClick={() => {
            }}
        />
    )
}

export default Table