import React, { useMemo } from 'react'
import { Row } from '@weblif/rc-table'
import { Cell } from '@weblif/rc-table/es/types'
import produce from 'immer'
import { Checkbox, Radio } from 'antd'

import { Column, RowSelectType } from './type'
import styles from './styles/index.less'


interface BodyParam<T> {
    rows: T[]
    columns: Column<T>[]
    rowSelection?: RowSelectType
    onChange?: (data: T[]) => void
}

function useBody<T>({
    rows,
    columns,
    rowSelection,
    onChange
}: BodyParam<T>) {
    const bodys: Row[] = useMemo(() => {
        return rows.map((row, rowIndex) => {
            const cells: Cell[] = [] 

            let className = ''
            columns.forEach(col => {
                const value = (row as any)[col.name]
                const cell: Cell = {
                    width: col.width || 120,
                    key: `${col.name}-${rowIndex}`,
                    value: value as string,
                }

                if (col.name === '$select') {
                    cell.selectd = false
                    cell.className = styles.cellSelect
                    if (value === true) {
                        className = styles.selectRow
                    }
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
                        cell.sticky = 'left'
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
                        cell.sticky = 'left'
                    }

                }
                cells.push(cell)
            })
            return {
                height: 35,
                cells,
                key: rowIndex,
                
                className
            }
        })
    }, [rows, columns])
    return bodys
}

export default useBody