import React, { useMemo } from 'react';
import { Column, SortDirection } from './type';
import { getScrollbarWidth, Row, TableInstance } from '@weblif/rc-table';
import { Cell } from '@weblif/rc-table/es/types';
import { css } from '@emotion/css';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import { calcAutoColumnWidth, processColumns } from './utils/column';

interface HeaderTitleProps<T> {
    column: Column<T>;
    sortColumns: SortDirection[];
    onSortColumnsChange: (change: SortDirection[]) => void;
}

function HeaderTitle<T>({ column, sortColumns, onSortColumnsChange }: HeaderTitleProps<T>) {
    let iconDirection = null;

    let sc = sortColumns.find((sc) => sc.name === column.name);
    if (sc && sc.direction === 'ASC') {
        iconDirection = <ArrowUpOutlined />;
    } else if (sc && sc.direction === 'DESC') {
        iconDirection = <ArrowDownOutlined />;
    }

    return (
        <div
            className={css`
                cursor: pointer;
            `}
            onClick={() => {
                if (sc?.direction === 'ASC') {
                    onSortColumnsChange?.([
                        {
                            name: column.name,
                            direction: 'DESC',
                        },
                    ]);
                } else if (sc?.direction === 'DESC') {
                    onSortColumnsChange?.([
                        {
                            name: column.name,
                            direction: undefined,
                        },
                    ]);
                } else {
                    onSortColumnsChange?.([
                        {
                            name: column.name,
                            direction: 'ASC',
                        },
                    ]);
                }
            }}
        >
            {column.title}
            <div
                className={css`
                    float: right;
                    color: rgba(0, 0, 0, 0.85);
                `}
            >
                {iconDirection}
            </div>
        </div>
    );
}

interface HeaderParam<T> {
    width: number;
    columns: Column<T>[];
    sortColumns: SortDirection[];
    onSortColumnsChange: (change: SortDirection[]) => void;
    table: React.MutableRefObject<TableInstance | null>;
}

function useHeader<T>({
    width,
    columns: tempColumns,
    sortColumns = [],
    onSortColumnsChange,
    table,
}: HeaderParam<T>) {
    const columns = useMemo(() => {
        return processColumns<T>(tempColumns);
    }, [tempColumns]);

    const headers: Row<T>[] = useMemo(() => {
        const {
            colsWidth: tempColWidth,
            autoCount,
            colsCountFixedWidth,
        } = calcAutoColumnWidth<T>(columns, width);
        const cells: Cell[] = columns.map((col, index) => {
            let colWidth = tempColWidth[index];
            let widthResult = 0;
            if (colWidth === 'auto') {
                console.log(table.current?.getScrollbarWidthOffset());
                widthResult =
                    (width -
                        colsCountFixedWidth -
                        (table.current?.getScrollbarWidthOffset() || 0) -
                        2) /
                    autoCount;
            } else if (typeof colWidth === 'number') {
                widthResult = colWidth;
            }

            return {
                width: widthResult,
                selectd: false,
                key: col.name,
                value: (
                    <HeaderTitle<T>
                        column={col}
                        sortColumns={sortColumns}
                        onSortColumnsChange={onSortColumnsChange}
                    />
                ),
                sticky: col.fixed,
                className: css({
                    '--rc-table-background-color': '#f9f9f9',
                    padding: '0 8px',
                }),
            };
        });
        return [
            {
                height: 35,
                sticky: 'top',
                cells,
                key: 'header',
            },
        ];
    }, [columns, table.current]);
    return headers;
}

export default useHeader;
