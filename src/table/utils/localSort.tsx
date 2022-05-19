import React, { useState } from 'react';
import { SortDirection } from '../type';

/** 设置本地排序 */
function useTableLocalSort<T>(data: T[] = []) {
    const [sortDirection, setSortDirection] = useState<SortDirection[]>([]);
    const [rows, setRows] = useState<T[]>(data);

    const sortRows = () => {
        const directionElement = sortDirection.find((element) => element.direction);
        if (directionElement?.name) {
            return rows.sort((element: any, nextElement: any) => {
                if (directionElement.direction === 'ASC') {
                    if (element[directionElement.name] > nextElement[directionElement.name]) {
                        return 1;
                    }
                    return -1;
                } else {
                    if (element[directionElement.name] < nextElement[directionElement.name]) {
                        return 1;
                    }
                    return -1;
                }
            });
        }
        return rows;
    };

    return {
        sortDirection,
        setSortDirection,
        rows: sortRows(),
        setRows,
    };
}

export default useTableLocalSort;
