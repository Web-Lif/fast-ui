/**
 * title: 虚拟滚动
 * description: 1000条表格数据信息进行测试
 */
import { Table } from '@weblif/fast-ui'
import { useState } from 'react'

/** Mock 数据 */
const mockData = () => {
    return Array.from(
        {
            length: 1000,
        },
        (_, i) => ({
            username: 'zhangj',
            email: 'zhang@xx.com',
            id: i,
            age: i,
            tags: '人类',
            col0: `col0 - ${i}`,
            col1: `col1 - ${i}`,
            col2: `col2 - ${i}`,
            col3: `col3 - ${i}`,
            col4: `col4 - ${i}`,
            col5: `col5 - ${i}`,
            col6: `col6 - ${i}`,
        })
    )
}

export default () => {
    const [data, setData] = useState(mockData())
    const [cols, setCols] = useState<any[]>([
        {
            name: 'username',
            title: '人员名称',
            width: 120,
            fixed: 'right',
        },
        {
            name: 'email',
            width: 120,
            title: '邮箱地址',
        },
        {
            name: 'age',
            width: 120,
            title: '年龄',
        },
        {
            name: 'tags',
            width: 120,
            title: '标签',
        },
        {
            name: 'col0',
            width: 120,
            title: '标签',
        },
        {
            name: 'col1',
            width: 120,
            title: '标签',
        },
        {
            name: 'col2',
            title: '标签',
            width: 120,
        },
        {
            name: 'col3',
            title: '标签',
            width: 120,
        },
        {
            name: 'col4',
            title: '标签',
            width: 120,
        },
        {
            name: 'col5',
            title: '标签',
            width: 120,
        },
        {
            name: 'col6',
            title: '标签',
            width: 120,
        },
    ])
    return (
        <>
            <Table
                style={{
                    height: 600,
                    width: 1200,
                }}
                rowKey="id"
                mode="cell"
                columns={cols}
                rows={data}
                onChangeColumns={setCols}
                onChange={setData}
            />
        </>
    )
}
