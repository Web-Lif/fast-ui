/**
 * title: 全部加载
 * desc: 一次性加载节点数据, 可通过 `directoryTree` 来设置树的类型，在数据量大的时候存在性能问题
 */
import { Tree } from '@weblif/fast-ui'
import React, { useEffect, useState } from 'react'

const mockTreeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: <span style={{ color: '#1890ff' }}>sss</span>,
                        key: '0-0-1-0',
                    },
                ],
            },
        ],
    },
]

export default () => {
    const [treeData, setTreeData] = useState<any[]>([])
    useEffect(() => {
        setTreeData(mockTreeData)
    }, [])

    return (
        <Tree
            style={{ height: 250 }}
            checkable
            defaultExpandedKeys={['0-0']}
            treeData={treeData}
        />
    )
}
