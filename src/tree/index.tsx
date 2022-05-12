import React, { Key, MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { Tree as AntTree, TreeProps as AntTreeProps, Dropdown, Menu } from 'antd';
import { DataNode, EventDataNode } from 'antd/lib/tree';
import { produce } from 'immer';
import { ExpandAction } from 'antd/lib/tree/DirectoryTree';
import { MenuItemType } from 'rc-menu/lib/interface';

type FunAddDataNodesParam = (nodes: DataNode[]) => DataNode[];

export interface TreeInstance {
    /** 添加节点信息 */
    addNodes: (parent: DataNode, nodes: FunAddDataNodesParam) => void;

    /** 删除节点 */
    removeNodes: (nodeKeys: (string | number)[]) => void;

    /** 编辑节点信息 */
    editNode: (key: string | number, newNode: DataNode) => void;

    /** 刷新 Tree 节点 */
    refresh: (node: DataNode | null) => void;
}

interface TreeProps extends Omit<AntTreeProps, 'loadData' | 'loadedKeys' | 'treeData'> {
    tree?: MutableRefObject<TreeInstance | null>;

    /** 是否设置为目录树 */
    directoryTree?: boolean;

    /** 装载数据 */
    loadData: ((treeNode: DataNode | null) => Promise<DataNode[]>) | DataNode[];

    /** 渲染右键菜单 */
    contextMenuRender?: (node: DataNode) => MenuItemType[];

    /** 点击右键菜单触发的事件 */
    onMenuClick?: (type: string, node: DataNode) => void;

    expandAction?: ExpandAction;
}

const changeTreeDataChildren = (
    draft: DataNode[],
    key: string | number,
    children: DataNode[],
): boolean => {
    return draft.some((data) => {
        if (data.key === key) {
            data.children = children;
            return true;
        }
        if (data.children && data.children.length > 0) {
            return changeTreeDataChildren(data.children, key, children);
        }
        return false;
    });
};

const getChildrenFlatList = (node: DataNode[]): DataNode[] => {
    let result: DataNode[] = [];
    if (node && node.length > 0) {
        node.forEach((ele) => {
            result.push(ele);
            if (ele.children && ele.children.length > 0) {
                const childrenResult = getChildrenFlatList(ele.children);
                result = result.concat(childrenResult);
            }
        });
    }
    return result;
};

const Tree = ({
    loadData,
    directoryTree,
    tree,
    contextMenuRender,
    onMenuClick,
    onExpand,
    expandAction,
    ...restProps
}: TreeProps) => {
    const [treeData, setTreeData] = useState<DataNode[]>([]);
    const [loadedKeys, setLoadedKeys] = useState<string[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<Key[]>([]);

    useEffect(() => {
        if (typeof loadData === 'function') {
            loadData?.(null).then((data) => {
                setTreeData(
                    data.map((node) => ({
                        parent: null,
                        ...node,
                    })),
                );
            });
        }
    }, []);

    const loadDataFunction = () => {
        if (typeof loadData === 'function') {
            return async (treeNode: EventDataNode) => {
                const datas = await loadData?.(treeNode);
                const newTreeNode = produce(treeData, (draft) => {
                    changeTreeDataChildren(
                        draft,
                        treeNode.key,
                        datas.map((data) => ({
                            parent: treeNode,
                            ...data,
                        })),
                    );
                });
                setTreeData(newTreeNode);
                const newLoadedKeys = produce(loadedKeys, (draft) => {
                    draft.push(treeNode.key as string);
                });
                setLoadedKeys(newLoadedKeys);
            };
        }
        return undefined;
    };
    let extProps: {
        expandAction?: ExpandAction;
    } = {};
    const AntTempTree = useMemo(() => {
        extProps.expandAction = expandAction;
        if (directoryTree) {
            return AntTree.DirectoryTree;
        }
        return AntTree;
    }, [directoryTree]);

    const refresh = (node: DataNode | null) => {
        if (typeof loadData === 'function' && node) {
            loadData?.(node).then((data) => {
                setTreeData((prevState) => {
                    const newTreeData = produce(prevState, (draft) => {
                        changeTreeDataChildren(draft, node.key, data);
                    });
                    return newTreeData;
                });

                if (node.children) {
                    const childrens = getChildrenFlatList(node.children).map((data) => data.key);

                    setLoadedKeys((prevState) => {
                        const newLoadedKeys = prevState.filter(
                            (key) => !childrens.includes(key) && expandedKeys.includes(key),
                        );
                        return newLoadedKeys;
                    });
                }
            });
        } else if (typeof loadData === 'function' && node === null) {
            loadData?.(node).then((data) => {
                setTreeData(data);
                const childrens = getChildrenFlatList(data).map((data) => data.key);

                setLoadedKeys((prevState) => {
                    const newLoadedKeys = prevState.filter(
                        (key) => !childrens.includes(key) && expandedKeys.includes(key),
                    );
                    return newLoadedKeys;
                });
            });
        }
    };

    if (tree) {
        tree.current = {
            addNodes: (parent, fn) => {
                const recursion = (datanodes: DataNode[]) => {
                    datanodes.some((node) => {
                        if (node.key === parent.key) {
                            node.children = fn(node.children || []);
                            return true;
                        }
                        if (Array.isArray(node.children)) {
                            recursion(node.children);
                            return false;
                        }
                    });
                };

                setTreeData((prevState) => {
                    const newTreeData = produce(prevState, (draft) => {
                        recursion(draft);
                    });
                    return newTreeData;
                });
            },
            editNode: (key, newNode) => {
                const recursion = (datanodes: DataNode[]) => {
                    datanodes.some((node, index) => {
                        if (node.key === key) {
                            datanodes[index] = {
                                ...node,
                                ...newNode,
                                key: node.key,
                            };
                            return true;
                        }
                        if (Array.isArray(node.children)) {
                            recursion(node.children);
                            return false;
                        }
                    });
                };
                setTreeData((prevState) => {
                    const newTreeData = produce(prevState, (draft) => {
                        recursion(draft);
                    });
                    return newTreeData;
                });
            },
            removeNodes: (nodeKeys) => {
                const recursion = (nodes: DataNode[]) => {
                    const rms: number[] = [];
                    nodes.forEach((node, index) => {
                        if (nodeKeys.includes(node.key)) {
                            rms.push(index);
                            return;
                        }

                        if (node.children) {
                            recursion(node.children);
                        }
                    });
                    rms.forEach((rmIndex) => {
                        nodes.splice(rmIndex, 1);
                    });
                };

                setTreeData((prevState) => {
                    const newTreeData = produce(prevState, (draft) => {
                        recursion(draft);
                    });
                    return newTreeData;
                });
                setLoadedKeys((prevState) => prevState.filter((key) => !nodeKeys.includes(key)));
            },
            refresh: (node) => {
                refresh(node);
            },
        };
    }

    return (
        <AntTempTree
            loadData={loadDataFunction()}
            loadedKeys={loadedKeys}
            treeData={typeof loadData === 'function' ? treeData : loadData}
            expandedKeys={expandedKeys}
            onContextMenu={(e) => {
                e.preventDefault();
            }}
            onExpand={(eKeys, info) => {
                setExpandedKeys(eKeys);
                onExpand?.(eKeys, info);
            }}
            titleRender={(node) => {
                const menuItems = contextMenuRender?.(node) || [];

                const menu = (
                    <Menu
                        items={menuItems}
                        onClick={(info) => {
                            onMenuClick?.(info.key, node);
                        }}
                    />
                );

                return (
                    <Dropdown overlay={menu} trigger={['contextMenu']}>
                        <span>{node.title}</span>
                    </Dropdown>
                );
            }}
            {...restProps}
            {...extProps}
        />
    );
};

export default Tree;
