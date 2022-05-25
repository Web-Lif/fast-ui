import { useEffect, useState } from 'react';
import { SortDirection } from '../type';

/** 设置本地排序 */
function useTableLocalSort<T>(data: T[] = []) {
    const [sortDirection, setSortDirection] = useState<SortDirection[]>([]);
    const [rows, setRows] = useState<T[]>([]);

    useEffect(() => {
        setRows(
            data.map((row, index) => ({
                ...row,
                $$serialNumber: index,
            })),
        );
    }, []);

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
        return rows.sort((element: any, nextElement: any) => {
            if (element.$$serialNumber > nextElement.$$serialNumber) {
                return 1;
            }
            return -1;
        });
    };

    return {
        sortDirection,
        setSortDirection,
        rows: sortRows(),
        setRows,
    };
}

export default useTableLocalSort;
