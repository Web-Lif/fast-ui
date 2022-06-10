/**
 * title: 空数据
 * desc: 显示空数据信息
 */
import { Column, Table, useTableLocalSort } from '@weblif/fast-ui';
import React, { useState } from 'react';

export default () => {
    const [cols, setCols] = useState<Column<any>[]>([
        {
            name: 'username',
            title: '人员名称',
            fixed: 'right',
        },
        {
            name: 'email',
            title: '邮箱地址',
        },
        {
            name: 'age',
            title: '年龄',
        },
        {
            name: 'tags',
            title: '标签0',
        },
        {
            name: 'col0',
            title: '标签1',
        },
        {
            name: 'col1',
            title: '标签2',
        },
        {
            name: 'col2',
            title: '标3',
        },
        {
            name: 'col3',
            title: '标签',
        },
        {
            name: 'col4',
            title: '标签',
        },
        {
            name: 'col5',
            title: '标签',
        },
        {
            name: 'col6',
            title: '标签',
        },
    ]);

    const { rows, setRows } = useTableLocalSort([]);
    return (
        <>
            <Table
                style={{
                    width: 1200,
                    height: 300,
                }}
                rowKey="id"
                mode="cell"
                columns={cols}
                rows={rows}
                onChangeColumns={setCols}
                onChange={setRows}
            />
        </>
    );
};
