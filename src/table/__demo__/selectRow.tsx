/**
 * title: 选中行信息
 * desc: 可以使用 `rowSelection` 来设置选中模式
 */
import { Column, Table, useTableLocalSort, Button } from '@weblif/fast-ui'
import React, { Key, useState } from 'react'

interface UserData {
    username: string
    email: string
    id: number
    age: string
    tags: number
    col0: string
    col1: string
    col2: string
    col3: string
    col4: string
    col5: string
    col6: string
}

/** Mock 数据 */
const mockData = () => {
    const data = []
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
        })
    }
    return data
}

const myMockData = mockData()

export default () => {
    const [cols, setCols] = useState<Column<UserData>[]>([
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
    ])

    const { rows, setRows } = useTableLocalSort(myMockData)
    const [selectRows, setSelectRows] = useState<Key[]>([])
    const [model, setModel] = useState<'single' | 'multiple'>('multiple')
    return (
        <>
            <Button
                onClick={() => {
                    if (model === 'multiple') {
                        setModel('single')
                    } else {
                        setModel('multiple')
                    }
                }}
            >
                切换到 {model === 'multiple' ? '单选' : '多选'}
            </Button>
            <br />
            <br />
            <Table
                style={{
                    width: 1200,
                    height: 300,
                }}
                selectedRows={selectRows}
                onSelectedRowsChange={setSelectRows}
                rowSelection={{
                    model,
                }}
                rowKey="id"
                mode="cell"
                columns={cols}
                rows={rows}
                onChangeColumns={setCols}
                onChange={setRows}
            />
        </>
    )
}
