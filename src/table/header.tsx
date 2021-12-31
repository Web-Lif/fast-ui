import React, { useMemo } from 'react'
import { Column, RowSelectType } from './type';
import styles from './styles/index.less'
import { Row } from '@weblif/rc-table';
import { Cell } from '@weblif/rc-table/es/types';


interface HeaderParam<T> {
    columns: Column<T>[]
}


function useHeader<T>({
    columns
}: HeaderParam<T>) {
    const headers: Row[] = useMemo(() => {
        const cells: Cell[] = columns.map(col => ({
            width: col.width || 120,
            selectd: false,
            key: col.name,
            value: col.title,
            sticky: col.name === '$select' ? 'left' : undefined
        }));
        return [{
            height: 35,
            sticky: 'top',
            cells,
            key: 'header',
            className: styles.header
        }]
    }, [columns])
    return headers
}


export default useHeader