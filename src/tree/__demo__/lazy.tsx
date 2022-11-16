/**
 * title: 懒加载
 * desc: 异步加载树的信息, 可极大的优化加载效率
 */
import { Tree } from '@weblif/fast-ui'
import React, { useRef, useState } from 'react'

export default () => {
    const tree = useRef<any>()
    const [treeData, setTreeData] = useState([])
    return (
        <Tree
            tree={tree}
            style={{ height: 250 }}
            treeData={treeData}
            onChangeTreeData={setTreeData}
            loadData={(treeNode) => {
                return new Promise((resolve) => {
                    if (treeNode === null) {
                        resolve([
                            { title: 'Expand to load', key: '0' },
                            { title: 'Expand to load', key: '1' },
                            { title: 'Tree Node', key: '2', isLeaf: true },
                        ])
                        return
                    }

                    setTimeout(() => {
                        resolve([
                            {
                                title: `Child Node - ${treeNode.key}`,
                                key: `${treeNode.key}-0`,
                            },
                            {
                                title: `Child Node - ${treeNode.key}-1`,
                                key: `${treeNode.key}-1`,
                            },
                        ])
                    }, 1000)
                })
            }}
            contextMenuRender={(node) => {
                if (node === null) {
                    return []
                }
                return [
                    {
                        key: 'delete',
                        label: '删除',
                        onClick: () => {
                            if (tree.current) {
                                tree.current.removeNodes([node.key])
                            }
                        },
                    },
                    {
                        key: 'refresh',
                        label: '刷新',
                        onClick: () => {
                            tree.current.refresh(node)
                        },
                    },
                    {
                        key: 'add',
                        label: '添加节点信息',
                        onClick: () => {
                            tree.current.addNodes(node, (nodes) => {
                                return [
                                    ...nodes,
                                    {
                                        title: `Add Child Node - ${node.key}`,
                                        key: `${node.key}-add-0`,
                                    },
                                ]
                            })
                            tree.current.addNodes(node, (nodes) => {
                                return [
                                    ...nodes,
                                    {
                                        title: `Add Child Node - ${node.key} 1`,
                                        key: `${node.key}-add-1`,
                                    },
                                ]
                            })
                        },
                    },
                    {
                        key: 'edit',
                        label: '编辑节点',
                        onClick: () => {
                            tree.current.editNode(node.key, {
                                title: `${node.title} - 已修改`,
                            })
                        },
                    },
                ]
            }}
        />
    )
}
