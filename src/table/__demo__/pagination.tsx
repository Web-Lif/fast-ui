/**
 * title: 分页
 * desc: 带分页的表格信息
 */
import { Column, Table } from '@weblif/fast-ui'
import React, { useState } from 'react'

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
const mockData = (page: number, pageSize: number) => {
    const data: UserData[] = []
    for (let i = 0; i < pageSize; i += 1) {
        data.push({
            username: `${page}, ${pageSize} zhangj`,
            email: `${page}, ${pageSize}, zhang@xx.com`,
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

export default () => {
    const [cols, setCols] = useState<Column<UserData>[]>([
        {
            name: 'username',
            title: '人员名称',
            fixed: 'right',
            width: 200,
        },
        {
            name: 'email',
            title: '邮箱地址',
            width: 200,
            summary: () => {
                return <>共计: xx 条</>
            },
        },
        {
            name: 'age',
            title: '年龄',
            width: 200,
        },
        {
            name: 'tags',
            title: '标签0',
            width: 200,
        },
        {
            name: 'col0',
            title: '标签1',
            width: 200,
        },
        {
            name: 'col1',
            title: '标签2',
            width: 200,
        },
        {
            name: 'col2',
            title: '标3',
            width: 200,
        },
        {
            name: 'col3',
            title: '标签',
            width: 200,
        },
        {
            name: 'col4',
            title: '标签',
            width: 200,
        },
        {
            name: 'col5',
            title: '标签',
            width: 200,
        },
        {
            name: 'col6',
            title: '标签',
            width: 200,
        },
    ])

    const [page, setPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(20)
    const [rows, setRows] = useState<UserData[]>(mockData(1, pageSize))
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
                pagination={{
                    current: page,
                    pageSize,
                    total: 50,
                    onChange: (changePage, changePageSize) => {
                        setPage(changePage)
                        setPageSize(changePageSize)
                        setRows(mockData(page, pageSize))
                    },
                }}
                onChangeColumns={setCols}
                onChange={setRows}
            />
        </>
    )
}
