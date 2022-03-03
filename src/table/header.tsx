import { useMemo } from 'react'
import { Column } from './type';
import { Row } from '@weblif/rc-table';
import { Cell } from '@weblif/rc-table/es/types';
import { css } from '@emotion/css';
import { processColumns } from './utils/column'

interface HeaderParam<T> {
    columns: Column<T>[]
}

function useHeader<T>({
    columns: tempColumns
}: HeaderParam<T>) {
    const columns = useMemo(() => {
        return processColumns<T>(tempColumns)
    }, [tempColumns])

    const headers: Row<T>[] = useMemo(() => {
        const cells: Cell[] = columns.map(col => ({
            width: col.width || 120,
            selectd: false,
            key: col.name,
            value: col.title,
            sticky: col.fixed,
            className: css({
                '--rc-table-background-color': '#f9f9f9',
                padding: '0 8px'
            })
        }));
        return [{
            height: 35,
            sticky: 'top',
            cells,
            key: 'header',
        }]
    }, [columns])
    return headers
}


export default useHeader