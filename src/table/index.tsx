import React, { useMemo } from 'react'
import { Table as RCTable } from '@weblif/rc-table'

import { Column, RowSelectType } from './type'
import useBody from './body'
import useHeader from './header'



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

function Table<T>({
    width,
    height,
    columns = [],
    rows = [],
    rowSelection,
    onChange,
    onRowClick,
    onRowDoubleClick
}: TableProps<T>) {

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

    const headers = useHeader<T>({
        columns: colsProcess,
    })

    const bodys = useBody<T>({
        rows,
        columns: colsProcess,
        rowSelection,
        onChange
    })

    return (
        <RCTable<T>
            width={width}
            height={height}
            rows={headers.concat(bodys)}
            onRowClick={({
                row
            }) => {
                if (row.object) {
                    onRowClick?.(row.object)
                }
            }}
            onRowDoubleClick={({
                row
            }) => {
                if (row.object) {
                    onRowDoubleClick?.(row.object)
                }
            }}
        />
    )
}

export default Table