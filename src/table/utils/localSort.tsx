import { produce } from 'immer'
import { useEffect, useState } from 'react'
import { SortDirection } from '../type'

/** 设置本地排序 */
function useTableLocalSort<T>(data: T[] = []) {
    const [sortDirection, setSortDirection] = useState<SortDirection[]>([])
    const [rows, setRows] = useState<T[]>([])

    useEffect(() => {
        setRows(
            data.map((row, index) => ({
                ...row,
                $$serialNumber: index,
            }))
        )
    }, [])

    return {
        sortDirection,
        setSortDirection: (sortDirection: SortDirection[]) => {
            const directionElement = sortDirection.find(
                (element) => element.direction
            )
            setSortDirection(sortDirection)
            if (directionElement?.name) {
                setRows(
                    produce(rows, (draft) => {
                        draft.sort((element: any, nextElement: any) => {
                            if (directionElement.direction === 'ASC') {
                                if (
                                    element[directionElement.name] >
                                    nextElement[directionElement.name]
                                ) {
                                    return 1
                                }
                                return -1
                            } else {
                                if (
                                    element[directionElement.name] <
                                    nextElement[directionElement.name]
                                ) {
                                    return 1
                                }
                                return -1
                            }
                        })
                    })
                )
                return
            }
            setRows(
                produce(rows, (draft) => {
                    draft.sort((element: any, nextElement: any) => {
                        if (
                            element.$$serialNumber > nextElement.$$serialNumber
                        ) {
                            return 1
                        }
                        return -1
                    })
                })
            )
        },
        rows,
        setRows,
    }
}

export default useTableLocalSort
