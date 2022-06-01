import { Table as RCTable, TableInstance } from '@weblif/rc-table';
import produce from 'immer';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Empty } from '../index';
import useBody from './body';
import useHeader from './header';
import { Column, RowClassNameParam, RowSelectType, SortDirection } from './type';

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

    /** 改变表格列信息触发的事件 */
    onChangeColumns?: (cols: Column<T>[]) => void;

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
    onChangeColumns,
    rowClassName = ({ className }) => className,
    onSortColumnsChange = () => {},
}: TableProps<T>) {
    const table = useRef<TableInstance>(null);

    const moveOffset = useRef<{
        x: number;
        y: number;
    }>({
        x: 0,
        y: 0,
    });

    const startMoveOffset = useRef<{
        x: number;
        y: number;
    }>({
        x: -1,
        y: -1,
    });

    const startMoveColName = useRef<Column<T>>();

    if (typeof rowKey !== 'string') {
        throw new Error('FAST-UI: 表格 [rowKey] 属性要是一个字符串。');
    }

    const colsProcess = useMemo(() => {
        if (rowSelection && rowSelection.model && columns?.[0]?.name !== '$select') {
            return produce(columns, (draft) => {
                draft.splice(0, 0, {
                    name: '$select',
                    title: '',
                    width: 35,
                    fixed: 'left',
                });
            });
        }
        return columns;
    }, [columns]);

    const { headers, columns: cols } = useHeader<T>({
        width,
        columns: colsProcess,
        onSortColumnsChange,
        sortColumns,
        table,
        onColumnMouseDown: (e, col) => {
            if (e.button === 0) {
                startMoveColName.current = col;
                startMoveOffset.current = {
                    x: moveOffset.current.x,
                    y: moveOffset.current.y,
                };
            }
        },
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

    const moveTicking = useRef<boolean>(false);

    const [_, forceRefresh] = useState<number>(0);

    useEffect(() => {
        forceRefresh(new Date().getTime());
    }, []);

    return (
        <RCTable<T>
            width={width}
            height={height}
            table={table}
            rows={headers.concat(bodys)}
            onMouseMove={(e) => {
                moveOffset.current = {
                    x: e.clientX,
                    y: e.clientY,
                };
                // 修改列的宽度信息
                if (
                    startMoveOffset.current.x !== -1 &&
                    startMoveOffset.current.y !== -1 &&
                    !moveTicking.current
                ) {
                    const offsetX = moveOffset.current.x - startMoveOffset.current.x;
                    requestAnimationFrame(() => {
                        if (cols) {
                            const changeColumns = produce(cols, (draft) => {
                                draft.some((element: any) => {
                                    if (
                                        element.name === startMoveColName.current?.name &&
                                        typeof element.width === 'number'
                                    ) {
                                        if (element.$initWidth === undefined) {
                                            element.$initWidth = element.width;
                                        }
                                        element.width = element.$initWidth + offsetX;
                                        return true;
                                    }
                                    return false;
                                });
                            });
                            onChangeColumns?.(changeColumns);
                        }
                        setTimeout(() => {
                            moveTicking.current = false;
                        }, 40);
                    });
                    moveTicking.current = true;
                }
            }}
            onMouseUp={() => {
                if (cols) {
                    const changeColumns = produce(cols, (draft) => {
                        draft.some((element: any) => {
                            if (
                                element.name === startMoveColName.current?.name &&
                                typeof element.width === 'number'
                            ) {
                                if (element.$initWidth !== undefined) {
                                    element.$initWidth = undefined;
                                }
                                return true;
                            }
                            return false;
                        });
                    });
                    onChangeColumns?.(changeColumns);
                }
                startMoveOffset.current = {
                    x: -1,
                    y: -1,
                };
            }}
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
            onEmptyRowsRenderer={() => <Empty />}
        />
    );
}

export default Table;
