/**
 * title: 行编辑
 * desc: 行编辑模式
 */
import {
    Button,
    Column,
    Input,
    Table,
    useTableLocalSort,
} from '@weblif/fast-ui'
import React, { useEffect, useState } from 'react'

interface UserData {
    username: string
    email: string
    id: string
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
    const data: UserData[] = []
    for (let i = 0; i < 100; i += 1) {
        data.push({
            username: 'zhangj',
            email: 'zhang@xx.com',
            id: `${i}`,
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
    const [editKeys, setEditKeys] = useState<string[]>([])

    const [cols, setCols] = useState<Column<UserData>[]>([])

    useEffect(() => {
        setCols([
            {
                name: 'opt',
                title: '操作',
                fixed: 'right',
                allowCellSelectBorder: false,
                readOnly: true,
                render: ({ row }) => {
                    return (
                        <>
                            {editKeys.includes(row.id) ? (
                                <Button
                                    type="link"
                                    onClick={() => {
                                        setEditKeys([])
                                    }}
                                >
                                    保存
                                </Button>
                            ) : (
                                <Button
                                    type="link"
                                    onClick={() => {
                                        setEditKeys([row.id])
                                    }}
                                >
                                    编辑
                                </Button>
                            )}
                        </>
                    )
                },
            },
            {
                name: 'email',
                title: '邮箱地址',
                editor: ({ value, onFinish, onChange }) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onFinish}
                    />
                ),
            },
            {
                name: 'age',
                title: '年龄',
                editor: ({ value, onFinish, onChange }) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onFinish}
                    />
                ),
            },
            {
                name: 'tags',
                title: '标签0',
                editor: ({ value, onFinish, onChange }) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onFinish}
                    />
                ),
            },
            {
                name: 'col0',
                title: '标签1',
                editor: ({ value, onFinish, onChange }) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onFinish}
                    />
                ),
            },
            {
                name: 'col1',
                title: '标签2',
                editor: ({ value, onFinish, onChange }) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onFinish}
                    />
                ),
            },
            {
                name: 'col2',
                title: '标3',
                editor: ({ value, onFinish, onChange }) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onFinish}
                    />
                ),
            },
            {
                name: 'col3',
                title: '标签',
                editor: ({ value, onFinish, onChange }) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onFinish}
                    />
                ),
            },
            {
                name: 'col4',
                title: '标签',
                editor: ({ value, onFinish, onChange }) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onFinish}
                    />
                ),
            },
            {
                name: 'col5',
                title: '标签',
                editor: ({ value, onFinish, onChange }) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onFinish}
                    />
                ),
            },
            {
                name: 'col6',
                title: '标签',
                editor: ({ value, onFinish, onChange }) => (
                    <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onFinish}
                    />
                ),
            },
        ])
    }, [editKeys])

    const { rows, setRows } = useTableLocalSort(myMockData)

    return (
        <>
            <Table
                style={{
                    width: 1200,
                    height: 300,
                }}
                rowKey="id"
                mode="row"
                rowEditKey={editKeys}
                columns={cols}
                rows={rows}
                onChangeColumns={setCols}
                onChange={setRows}
            />
        </>
    )
}
