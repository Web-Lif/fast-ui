import React, { cloneElement, useContext, useMemo, useState } from 'react';
import { Row } from '@weblif/rc-table';
import { Cell } from '@weblif/rc-table/es/types';
import produce from 'immer';
import { Checkbox, Radio } from 'antd';

import { Column, RowSelectType } from './type';
import { processColumns } from './utils/column';
import { classNames } from '../utils/css';

import './styles/index.less';

interface BodyParam<T> {
    rows: T[];
    columns: Column<T>[];
    rowKey: string,
    rowSelection?: RowSelectType;
    mode?: 'cell' | 'row';
    onChange?: (data: T[]) => void;
}

function useBody<T>({
    rows,
    columns: tempColumns,
    rowSelection,
    mode,
    rowKey,
    onChange
}: BodyParam<T>) {
    const [editCells, setEditCells] = useState<string[]>([])
    
    const columns = useMemo(() => {
        return processColumns<T>(tempColumns);
    }, [tempColumns]);

    const bodys: Row<T>[] = rows.map((row, rowIndex) => {
        const cells: Cell[] = [];
        let className = '';
        columns.forEach((col) => {
            let value = (row as any)[col.name];
            const cell: Cell = {
                width: col.width || 120,
                key: `${col.name}-${(row as any)[rowKey]}`,
                value: value as string,
            };

            if (col.name === '$select') {
                cell.selectd = false;
                cell.className = 'fu-table-row-cell-padding'
                if (rowSelection?.model === 'multiple') {
                    cell.value = (
                        <Checkbox
                            checked={value === true}
                            onChange={(e) => {
                                const checked = e.target.checked;
                                const changeData = produce<T[], T[]>(rows, (draft) => {
                                    draft.some((ele) => {
                                        if (`${col.name}-${(ele as any)[rowKey]}` === cell.key) {
                                            (ele as any)['$select'] = checked;
                                            return true;
                                        }
                                        return false;
                                    });
                                });
                                onChange?.(changeData);
                            }}
                        />
                    );
                    cell.sticky = 'left';
                } else if (rowSelection?.model === 'single') {
                    cell.value = (
                        <Radio
                            checked={value === true}
                            className={classNames({
                                'fu-form-select-radio': true,
                            })}
                            onChange={(e) => {
                                const checked = e.target.checked;
                                const changeData = produce<T[], T[]>(rows, (draft) => {
                                    draft.some((ele) => {
                                        if (`${col.name}-${(ele as any)[rowKey]}` === cell.key) {
                                            (ele as any)['$select'] = checked;
                                            return true
                                        } else {
                                            (ele as any)['$select'] = false;
                                            return false
                                        }
                                    });
                                });
                                onChange?.(changeData);
                            }}
                        />
                    );
                    cell.sticky = 'left';
                }
            } else {
                const renderCell = () => {
                    if (editCells.includes(cell.key as string) && col.editor) {
                        const editorElement = col.editor({
                            column: col,
                            row,
                            value,
                            onChange: (value: string) => {
                                const changeRowsData = produce<T[], T[]>(rows, (draft) => {
                                    draft.some((ele) => {
                                        if (`${col.name}-${(ele as any)[rowKey]}` === cell.key) {
                                            (ele as any)[col.name] = value;
                                            (ele as any)['$state'] = 'update'
                                            return true
                                        } else {
                                            return false
                                        }
                                    });
                                });
                                onChange?.(changeRowsData)
                            },
                            onFinish: () => {
                                const index = editCells.indexOf(cell.key as string)
                                const changeData = produce<string[], string[]>(editCells, (draft) => {
                                    draft.splice(index, 1)
                                })

                                setEditCells(changeData)
                            }
                        })
                        const { style, ...restProps} = editorElement.props
                        return cloneElement(editorElement, {
                            ...restProps,
                            style: {
                                width: '100%',
                                height: '100%',
                                ...(style || {}),
                            }
                        })
                    }
                    if (col.render) {
                        return col.render({
                            column: col, row, value
                        })
                    }
                    return value
                }

                cell.value = (
                    <div
                        className={classNames({
                            'fu-table-row-cell': true,
                            'fu-table-row-cell-padding': !editCells.includes(cell.key as string)
                        })} 
                        onDoubleClick={() => {
                            // 如果是单元格编辑
                            if (mode === 'cell' && col.editor) {
                                const index = editCells.indexOf(cell.key as string)
                                if (index !== -1){
                                    const changeData = produce<string[], string[]>(editCells, (draft) => {
                                        draft.splice(index, 1)
                                    })
                                    setEditCells(changeData)
                                } else {
                                    const changeData = produce<string[], string[]>(editCells, (draft) => {
                                        draft.push(cell.key as string)
                                    })
                                    setEditCells(changeData)
                                }
                            }
                        }}
                    >
                        {renderCell()}
                    </div>
                )
            }

            if (col.fixed) {
                cell.sticky = col.fixed;
            }
            cells.push(cell);
        });
        return {
            height: 35,
            cells,
            key: rowIndex,
            className,
            object: row,
        };
    });
    return bodys;
}

export default useBody;
