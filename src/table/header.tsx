import {
    AlignLeftOutlined,
    AlignRightOutlined,
    ArrowDownOutlined,
    ArrowUpOutlined,
    MenuOutlined,
} from '@ant-design/icons'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { css, cx } from '@emotion/css'
import { Row } from '@weblif/rc-table'
import { Cell } from '@weblif/rc-table/es/types'
import { Dropdown, Menu, Checkbox } from '..'
import { Column, SortDirection } from './type'
import { calcAutoColumnWidth, processColumns } from './utils/column'

interface HeaderTitleProps<T> {
    onMouseDown: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        column: Column<T>
    ) => void
    column: Column<T>
    columns: Column<T>[]
    sortColumns: SortDirection[]
    onChangeColumns?: (cols: Column<T>[]) => void
    onSortColumnsChange: (change: SortDirection[]) => void
}

function HeaderTitle<T>({
    column,
    columns,
    sortColumns,
    onSortColumnsChange,
    onMouseDown,
    onChangeColumns,
}: HeaderTitleProps<T>) {
    let iconDirection = null
    let sc = sortColumns.find((sc) => sc.name === column.name)
    if (sc && sc.direction === 'ASC') {
        iconDirection = <ArrowUpOutlined />
    } else if (sc && sc.direction === 'DESC') {
        iconDirection = <ArrowDownOutlined />
    }
    const [visible, setVisible] = useState<boolean>(false)

    const [openKeys, setOpenKeys] = useState<string[]>([])

    const divRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (visible === true) {
            const taskid = setInterval(() => {
                const className =
                    document.activeElement?.getAttribute('class') || ''
                if (
                    className.indexOf('ant-dropdown') === -1 &&
                    className.indexOf('ant-checkbox-input') === -1
                ) {
                    setOpenKeys([])
                    setVisible(false)
                }
            }, 200)
            return () => {
                clearInterval(taskid)
            }
        }
    }, [visible])

    const items = [
        {
            label: '列信息',
            key: 'columns',
            onTitleClick: ({ key }: { key: string }) => {
                setOpenKeys([key])
            },
            children: columns
                .filter((col) => col.name !== '$select')
                .map(({ title, name, visibility = true }) => ({
                    label: (
                        <>
                            <Checkbox
                                value={visibility}
                                className={css`
                                    margin-right: 7px;
                                `}
                            />
                            {title}
                        </>
                    ),
                    disabled: column.name === name,
                    onClick: () => {
                        const newCols = columns.map((col) => {
                            if (col.name === name) {
                                return {
                                    ...col,
                                    visibility: !visibility,
                                }
                            }
                            return col
                        })
                        onChangeColumns?.(newCols)
                    },
                    key: name,
                })),
        },
        {
            label: '设置固定列',
            key: 'fixed',
            onTitleClick: ({ key }: { key: string }) => {
                setOpenKeys([key])
            },
            children: [
                {
                    label: column.fixed === 'left' ? '取消左边' : '左边',
                    icon: <AlignLeftOutlined />,
                    onClick: () => {
                        const newCols: Column<T>[] = columns.map((col) => {
                            if (col.name === column.name) {
                                if (col.fixed === 'left') {
                                    return {
                                        ...col,
                                        fixed: undefined,
                                    }
                                }
                                return {
                                    ...col,
                                    fixed: 'left',
                                }
                            }
                            return col
                        })
                        onChangeColumns?.(newCols)
                    },
                },
                {
                    label: column.fixed === 'right' ? '取消右边' : '右边',
                    icon: <AlignRightOutlined />,
                    onClick: () => {
                        const newCols: Column<T>[] = columns.map((col) => {
                            if (col.name === column.name) {
                                if (col.fixed === 'right') {
                                    return {
                                        ...col,
                                        fixed: undefined,
                                    }
                                }
                                return {
                                    ...col,
                                    fixed: 'right',
                                }
                            }
                            return col
                        })
                        onChangeColumns?.(newCols)
                    },
                },
            ],
        },
    ]
    return (
        <>
            <div
                ref={divRef}
                className={css`
                    cursor: ${column.sort ? 'pointer' : 'auto'};
                    display: inline-block;
                    width: calc(100% - 4px);
                    padding: 0px 0px 0px 8px;
                    ${column.align?.header !== undefined
                        ? `text-align: ${column.align?.header};`
                        : ''};
                    &:hover {
                        .rc-table-header-menus {
                            opacity: 1;
                        }
                    }
                `}
                onClick={(e) => {
                    if (column.sort) {
                        if (sc?.direction === 'ASC') {
                            onSortColumnsChange?.([
                                {
                                    name: column.name,
                                    direction: 'DESC',
                                },
                            ])
                        } else if (sc?.direction === 'DESC') {
                            onSortColumnsChange?.([
                                {
                                    name: column.name,
                                    direction: undefined,
                                },
                            ])
                        } else {
                            onSortColumnsChange?.([
                                {
                                    name: column.name,
                                    direction: 'ASC',
                                },
                            ])
                        }
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
                    <Dropdown
                        autoFocus
                        visible={visible}
                        overlay={
                            <Menu
                                multiple
                                openKeys={openKeys}
                                rootClassName={css`
                                    min-width: 120px;
                                    .ant-dropdown-menu {
                                        min-width: 120px;
                                        max-height: 300px;
                                        padding: 0px;
                                        overflow: auto;
                                        box-shadow: 0 3px 6px -4px rgb(0 0 0 /
                                                        12%),
                                            0 6px 16px 0 rgb(0 0 0 / 8%),
                                            0 9px 28px 8px rgb(0 0 0 / 5%);
                                    }
                                `}
                                getPopupContainer={(element) => element}
                                items={items}
                            />
                        }
                    >
                        <div
                            className={cx({
                                [css`
                                    float: right;
                                    cursor: pointer;
                                    opacity: ${visible ? 1 : 0};
                                    transition: opacity 0.2s;
                                    margin-right: 5px;
                                    margin-left: 3px;
                                `]: true,
                                'rc-table-header-menus': true,
                            })}
                            onClick={(e) => {
                                e.preventDefault()
                                setVisible(true)
                            }}
                        >
                            <MenuOutlined />
                        </div>
                    </Dropdown>
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
                        onMouseDown?.(e, column)
                    }}
                >
                    &nbsp;
                </div>
            ) : null}
        </>
    )
}

interface HeaderParam<T> {
    width: number
    columns: Column<T>[]
    onChangeColumns?: (cols: Column<T>[]) => void
    onColumnMouseDown: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        column: Column<T>
    ) => void
    sortColumns: SortDirection[]
    onSortColumnsChange: (change: SortDirection[]) => void
}

function useHeader<T>({
    width,
    columns: tempColumns,
    sortColumns = [],
    onSortColumnsChange,
    onChangeColumns,
    onColumnMouseDown,
}: HeaderParam<T>) {
    const columns = useMemo(() => {
        return processColumns<T>(tempColumns)
    }, [tempColumns])

    const realCols: Column<T>[] = []

    const {
        colsWidth: tempColWidth,
        autoCount,
        colsCountFixedWidth,
    } = calcAutoColumnWidth<T>(columns, width)

    const cells: Cell[] = columns
        .filter((col) => col.visibility !== false)
        .map((col, index) => {
            let colWidth = tempColWidth[index]
            let widthResult = 0
            if (colWidth === 'auto') {
                widthResult = (width - colsCountFixedWidth) / autoCount
            } else if (typeof colWidth === 'number') {
                widthResult = colWidth
            }
            realCols.push({
                ...col,
                width: widthResult,
            })

            return {
                width: widthResult,
                selectd: false,
                key: col.name,
                value: (
                    <HeaderTitle<T>
                        column={col}
                        columns={tempColumns}
                        onMouseDown={onColumnMouseDown}
                        sortColumns={sortColumns}
                        onChangeColumns={onChangeColumns}
                        onSortColumnsChange={onSortColumnsChange}
                    />
                ),
                sticky: col.fixed,
                className: css`
                    --rc-table-background-color: #f9f9f9;
                `,
            }
        })

    const headers: Row<T>[] = [
        {
            height: 35,
            sticky: 'top',
            cells,
            key: 'header',
        },
    ]

    return headers
}

export default useHeader
