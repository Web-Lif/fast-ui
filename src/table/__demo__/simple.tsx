/**
 * title: 基础功能演示
 * desc: 可通过 `AutoSize` 来进行百分比的设置,
 */
import { AutoSize, Table } from '@weblif/fast-ui';
import React, { useState } from 'react';

interface UserData {
    username: string;
    email: string;
    id: number;
    age: string;
    tags: number;
    col0: string;
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
    col6: string;
}

/** Mock 数据 */
const mockData = () => {
    const data = [];
    for (let i = 0; i < 10; i += 1) {
        data.push({
            username: 'zhangj',
            email: 'zhang@xx.com',
            id: i,
            age: '25',
            tags: Math.floor(Math.random() * 100),
            col0: `col0 - ${i}`,
            col1: `col1 - ${i}`,
            col2: `col2 - ${i}`,
            col3: `col3 - ${i}`,
            col4: `col4 - ${i}`,
            col5: `col5 - ${i}`,
            col6: `col6 - ${i}`,
        });
    }
    return data;
};

const myMockData = mockData();

export default () => {
    const [rows, setRows] = useState<UserData[]>(myMockData);
    const [cols, setCols] = useState([
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
    return (
        <>
            <AutoSize
                style={{
                    width: 1200,
                    height: 300,
                }}
            >
                {({ width, height }) => (
                    <Table
                        width={width}
                        height={height}
                        rowKey="id"
                        mode="cell"
                        columns={cols}
                        rows={rows}
                        onChangeColumns={setCols}
                        onChange={setRows}
                    />
                )}
            </AutoSize>
        </>
    );
};
