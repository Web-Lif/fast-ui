import React, { ReactElement, useMemo } from 'react'
import { Row, Table as RCTable } from '@weblif/rc-table'
import { Cell } from '@weblif/rc-table/es/types'
import styles from './styles/index.less'

type AlignType = 'left' | 'right' | 'center'

interface Column<T> {

    /** 对应的字段名称 */
    name: string

    /** 标题显示的名称 */
    title: string

    /** 列的宽度信息 */
    width?: number

    /** 列的最小宽度 */
    minWidth?: number

    /** 列的最大宽度 */
    maxWidth?: number

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
    
    /** 表格单击行触发的事件 */
    onRowClick?: (row: T) => void

    /** 表格双击行触发的事件 */
    onRowDoubleClick?: (row: T) => void
}


function Table<T> ({
    width,
    height,
    columns = [],
    rows = [],
    onRowClick,
    onRowDoubleClick
}: TableProps<T>)  {

    const headers: Row[] = useMemo(() => {
        const cells: Cell[] = columns.map(col => ({
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
    }, [columns])

    const bodys: Row[] = useMemo(() => {
        return rows.map((row, rowIndex) => {
            const cells: Cell[] = [] 
            columns.forEach(col => {
                cells.push({
                    width: col.width || 120,
                    key: `${col.name}-${rowIndex}`,
                    value: (row as any)[col.name] as string,
                })
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