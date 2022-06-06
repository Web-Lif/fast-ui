import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';
import { Row } from '@weblif/rc-table';
import { Cell } from '@weblif/rc-table/es/types';
import React, { useMemo } from 'react';
import { Column, SortDirection } from './type';
import { calcAutoColumnWidth, processColumns } from './utils/column';

interface HeaderTitleProps<T> {
    onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, column: Column<T>) => void;
    column: Column<T>;
    sortColumns: SortDirection[];
    onSortColumnsChange: (change: SortDirection[]) => void;
}

function HeaderTitle<T>({
    column,
    sortColumns,
    onSortColumnsChange,
    onMouseDown,
}: HeaderTitleProps<T>) {
    let iconDirection = null;

    let sc = sortColumns.find((sc) => sc.name === column.name);
    if (sc && sc.direction === 'ASC') {
        iconDirection = <ArrowUpOutlined />;
    } else if (sc && sc.direction === 'DESC') {
        iconDirection = <ArrowDownOutlined />;
    }

    return (
        <>
            <div
                className={css`
                    cursor: pointer;
                    display: inline-block;
                    width: calc(100% - 4px);
                    padding: 0px 0px 0px 8px;
                    ${column.align?.header !== undefined
                        ? `text-align: ${column.align?.header};`
                        : ''};
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
            {column.resizable === true ? (
                <div
                    className={css`
                        display: inline-block;
                        width: 4px;
                        cursor: col-resize;
                    `}
                    onMouseDown={(e) => {
                        onMouseDown?.(e, column);
                    }}
                >
                    &nbsp;
                </div>
            ) : null}
        </>
    );
}

interface HeaderParam<T> {
    width: number;
    columns: Column<T>[];
    onColumnMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, column: Column<T>) => void;
    sortColumns: SortDirection[];
    onSortColumnsChange: (change: SortDirection[]) => void;
}

function useHeader<T>({
    width,
    columns: tempColumns,
    sortColumns = [],
    onSortColumnsChange,
    onColumnMouseDown,
}: HeaderParam<T>) {
    const columns = useMemo(() => {
        return processColumns<T>(tempColumns);
    }, [tempColumns]);

    const realCols: Column<T>[] = [];
    const {
        colsWidth: tempColWidth,
        autoCount,
        colsCountFixedWidth,
    } = calcAutoColumnWidth<T>(columns, width);

    const cells: Cell[] = columns.map((col, index) => {
        let colWidth = tempColWidth[index];
        let widthResult = 0;
        if (colWidth === 'auto') {
            widthResult = (width - colsCountFixedWidth) / autoCount;
        } else if (typeof colWidth === 'number') {
            widthResult = colWidth;
        }
        realCols.push({
            ...col,
            width: widthResult,
        });

        return {
            width: widthResult,
            selectd: false,
            key: col.name,
            value: (
                <HeaderTitle<T>
                    column={col}
                    onMouseDown={onColumnMouseDown}
                    sortColumns={sortColumns}
                    onSortColumnsChange={onSortColumnsChange}
                />
            ),
            sticky: col.fixed,
            className: css`
                --rc-table-background-color: #f9f9f9;
            `,
        };
    });

    const headers: Row<T>[] = [
        {
            height: 35,
            sticky: 'top',
            cells,
            key: 'header',
        },
    ];

    return {
        headers,
        columns: realCols,
    };
}

export default useHeader;
