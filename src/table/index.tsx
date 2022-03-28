import React, { useMemo } from 'react';
import { Table as RCTable } from '@weblif/rc-table';

import { Column, RowSelectType, SortDirection } from './type';
import useBody from './body';
import useHeader from './header';

interface TableProps<T> {
    /** 表格的宽度 */
    width: number;

    /** 表格的高度信息 */
    height: number;

    /** 实际表格的内容信息 */
    rows: T[];

    /** 编辑模式 Cell 表示单元格编辑, Row 表示行编辑 */
    mode: 'cell' | 'row'

    /** 数据的唯一Key */
    rowKey: string

    /** 列信息 */
    columns: Column<T>[];

    /** 选择配置 */
    rowSelection: RowSelectType;

    /** 排序字段 */
    sortColumns: SortDirection[]

    /** 表格单击行触发的事件 */
    onRowClick?: (row: T) => void;

    /** 表格双击行触发的事件 */
    onRowDoubleClick?: (row: T) => void;

    /** 改变表格数据触发的事件 */
    onChange?: (rows: T[]) => void;

    /** 排序字段改变触发的事件 */
    onSortColumnsChange: (change: SortDirection[]) => void
}

function Table<T>({
    width,
    height,
    columns = [],
    rows = [],
    rowKey,
    mode,
    sortColumns,
    rowSelection,
    onChange,
    onRowClick,
    onRowDoubleClick,
    onSortColumnsChange,
}: TableProps<T>) {

    if (typeof rowKey !== 'string') {
        throw new Error('FAST-UI: 表格 [rowKey] 属性要是一个字符串。')
    }

    const colsProcess = useMemo(() => {
        if (rowSelection && rowSelection.model) {
            columns.splice(0, 0, {
                name: '$select',
                title: '',
                width: 35,
                fixed: 'left',
            });
        }
        return columns;
    }, [columns]);

    const headers = useHeader<T>({
        columns: colsProcess,
        onSortColumnsChange,
        sortColumns
    });

    const bodys = useBody<T>({
        rows,
        columns: colsProcess,
        rowSelection,
        rowKey,
        mode,
        onChange
    });

    return (
        <RCTable<T>
            width={width}
            height={height}
            rows={headers.concat(bodys)}
            onRowClick={({ row }) => {
                if (row.object) {
                    onRowClick?.(row.object);
                }
            }}
            onCellRender={(element, cell) => {
                return element
            }}
            onRowDoubleClick={({ row }) => {
                if (row.object) {
                    onRowDoubleClick?.(row.object);
                }
            }}
        />
    );
}

export default Table;
