import React, { useMemo, createContext as reactCreateContext, Dispatch } from 'react'
import { Column } from './type';
import { Row } from '@weblif/rc-table';
import { Cell } from '@weblif/rc-table/es/types';

import { processColumns } from './utils/column'
import './styles/index.less';
import { classNames } from '../utils/css';

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
            className: classNames({
                'fu-table-header': true,
                'fu-table-row-cell-padding': true
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