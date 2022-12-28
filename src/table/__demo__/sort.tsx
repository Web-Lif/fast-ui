/**
 * title: 本地排序
 * description: 可通过 `useTableLocalSort` 来进行本地排序, 可点击表格头部进行排序, 可通过 `Column` 的 `sort` 属性来进行控制， 默认不排序
 */
import { Column, Table, useTableLocalSort } from '@weblif/fast-ui'
import { useState } from 'react'

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
    const { rows, setRows, sortDirection, setSortDirection } =
        useTableLocalSort(myMockData)
    const [cols, setCols] = useState<Column<UserData>[]>([
        {
            name: 'username',
            title: '人员名称',
            sort: true,
        },
        {
            name: 'email',
            title: '邮箱地址',
            sort: true,
        },
        {
            name: 'age',
            title: '年龄',
            sort: true,
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
    return (
        <>
            <Table<UserData>
                style={{
                    width: 1200,
                    height: 300,
                }}
                rowKey="id"
                mode="cell"
                columns={cols}
                rows={rows}
                sortColumns={sortDirection}
                onSortColumnsChange={setSortDirection}
                onChangeColumns={setCols}
                onChange={setRows}
            />
        </>
    )
}
