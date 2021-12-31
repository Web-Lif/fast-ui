import { Column } from "../type"

export function processColumns<T> (columns: Column<T>[]) {
    const leftColumns: Column<T>[] = []
    const rightColumns: Column<T>[] = []
    const normalColumns: Column<T>[] = []

    columns.forEach(column => {
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