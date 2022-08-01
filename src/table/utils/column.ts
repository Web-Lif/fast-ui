import { Column } from '../type'

export function processColumns<T>(columns: Column<T>[]) {
    const leftColumns: Column<T>[] = []
    const rightColumns: Column<T>[] = []
    const normalColumns: Column<T>[] = []

    columns.forEach((column) => {
        if (column.hidden === true) {
            return
        }
        if (column.fixed === 'left') {
            leftColumns.push(column)
        } else if (column.fixed === 'right') {
            rightColumns.push(column)
        } else {
            normalColumns.push(column)
        }
    })
    return leftColumns.concat(normalColumns).concat(rightColumns)
}

export function calcAutoColumnWidth<T>(columns: Column<T>[], width: number) {
    const tempColWidth: (string | number)[] = []

    let autoCount = 0
    let colsCountFixedWidth = 0
    columns.forEach((col) => {
        if (typeof col.width === 'number') {
            colsCountFixedWidth += col.width
            tempColWidth.push(col.width)
        } else if (col.width === null || col.width === undefined) {
            tempColWidth.push('auto')
            autoCount += 1
        } else if (typeof col.width === 'string') {
            const percentage = Number.parseFloat(col.width)
            if (percentage === NaN) {
                tempColWidth.push('auto')
                autoCount += 1
            } else {
                const calcWidth = (percentage / 100) * width
                tempColWidth.push(calcWidth)
                colsCountFixedWidth += calcWidth
            }
        }
    })
    return {
        colsWidth: tempColWidth,
        autoCount,
        colsCountFixedWidth,
    }
}
