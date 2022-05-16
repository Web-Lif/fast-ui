import React, { useMemo, useRef } from 'react';
import { Table as RCTable, TableInstance } from '@weblif/rc-table';

import { Column, RowClassNameParam, RowSelectType, SortDirection } from './type';
import useBody from './body';
import useHeader from './header';
import produce from 'immer';

export interface TableProps<T> {
    /** 表格的宽度 */
    width: number;

    /** 表格的高度信息 */
    height: number;

    /** 实际表格的内容信息 */
    rows: T[];

    /** 编辑模式 Cell 表示单元格编辑, Row 表示行编辑 */
    mode?: 'cell' | 'row';

    /** 数据的唯一Key */
    rowKey: string;

    /** 列信息 */
    columns: Column<T>[];

    /** 选择配置 */
    rowSelection?: RowSelectType;

    /** 设置行的 className */
    rowClassName?: (param: RowClassNameParam<T>) => string;

    /** 排序字段 */
    sortColumns?: SortDirection[];

    /** 表格单击行触发的事件 */
    onRowClick?: (row: T) => void;

    /** 表格双击行触发的事件 */
    onRowDoubleClick?: (row: T) => void;

    /** 改变表格数据触发的事件 */
    onChange?: (rows: T[]) => void;

    /** 排序字段改变触发的事件 */
    onSortColumnsChange?: (change: SortDirection[]) => void;
}

function Table<T>({
    width,
    height,
    columns = [],
    rows = [],
    rowKey,
    mode,
    sortColumns = [],
    rowSelection,
    onChange,
    onRowClick,
    onRowDoubleClick,
    rowClassName = ({ className }) => className,
    onSortColumnsChange = () => {},
}: TableProps<T>) {
    const table = useRef<TableInstance>(null);

    if (typeof rowKey !== 'string') {
        throw new Error('FAST-UI: 表格 [rowKey] 属性要是一个字符串。');
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
        width,
        columns: colsProcess,
        onSortColumnsChange,
        sortColumns,
        table,
    });

    const bodys = useBody<T>({
        rows,
        width,
        columns: colsProcess,
        rowSelection,
        rowKey,
        mode,
        onChange,
        rowClassName,
        table,
    });

    return (
        <RCTable<T>
            width={width}
            height={height}
            table={table}
            rows={headers.concat(bodys)}
            onRowClick={({ row }) => {
                if (rowSelection?.clickModel === 'row' && rowSelection?.model === 'multiple') {
                    const changeRowsData = produce<T[], T[]>(rows, (draft) => {
                        draft.some((ele) => {
                            if ((ele as any)[rowKey] === (row.object as any)[rowKey]) {
                                (ele as any)['$select'] = !(ele as any)['$select'];
                                (ele as any)['$state'] = 'update';
                                return true;
                            } else {
                                return false;
                            }
                        });
                    });
                    onChange?.(changeRowsData);
                } else if (rowSelection?.clickModel === 'row' && rowSelection?.model === 'single') {
                    const changeData = produce<T[], T[]>(rows, (draft) => {
                        draft.forEach((ele) => {
                            if ((ele as any)[rowKey] === (row.object as any)[rowKey]) {
                                (ele as any)['$select'] = !(ele as any)['$select'];
                            } else {
                                (ele as any)['$select'] = false;
                            }
                        });
                    });
                    onChange?.(changeData);
                }

                if (row.object) {
                    onRowClick?.(row.object);
                }
            }}
            onCellRender={(element, cell) => {
                return element;
            }}
            onRowDoubleClick={({ row }) => {
                if (row.object) {
                    onRowDoubleClick?.(row.object);
                }
            }}
            onRowMouseEnter={(e, table) => {
                const currentTarget = e.currentTarget;
                setTimeout(() => {
                    const classNames = currentTarget.className.split(' ');
                    const className = classNames.find((className) =>
                        className.includes('rc-table-row-'),
                    );
                    const elements = table.querySelectorAll(`.${className}`);
                    table.querySelectorAll(`.rc-table-row`).forEach((element) => {
                        const htmlElement = element as HTMLElement;
                        if (htmlElement.style.getPropertyValue('--rc-table-background-color')) {
                            htmlElement.style.removeProperty('--rc-table-background-color');
                        }
                    });

                    elements.forEach((element) => {
                        (element as HTMLElement).style.setProperty(
                            '--rc-table-background-color',
                            '#f5f5f5',
                        );
                    });
                }, 0);
            }}
        />
    );
}

export default Table;
