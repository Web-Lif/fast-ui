import { Dropdown, Menu, Tree as AntTree, TreeProps as AntTreeProps } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { DataNode, EventDataNode } from 'antd/lib/tree';
import { ExpandAction } from 'antd/lib/tree/DirectoryTree';
import { produce } from 'immer';
import { MenuItemType } from 'rc-menu/lib/interface';
import React, {
    Dispatch,
    Key,
    MutableRefObject,
    SetStateAction,
    useEffect,
    useMemo,
    useState,
} from 'react';

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

interface TreeProps extends Omit<AntTreeProps, 'loadData' | 'loadedKeys'> {
    tree?: MutableRefObject<TreeInstance | null>;

    /** 是否设置为目录树 */
    directoryTree?: boolean;

    /** 装载数据 */
    loadData?: (treeNode: DataNode | null) => Promise<DataNode[]>;

    expandAction?: ExpandAction;

    /** 渲染右键菜单 */
    contextMenuRender?: (node: DataNode | null) => MenuItemType[];

    /** 改变节点触发的事件 */
    onChangeTreeData?: Dispatch<SetStateAction<any>>;
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
    treeData,
    loadData,
    directoryTree,
    tree,
    contextMenuRender,
    onExpand,
    onChangeTreeData,
    expandAction,
    defaultExpandedKeys,
    ...restProps
}: TreeProps) => {
    const [loadedKeys, setLoadedKeys] = useState<string[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<Key[]>(defaultExpandedKeys || []);

    useEffect(() => {
        if (typeof loadData === 'function') {
            loadData?.(null).then((data) => {
                onChangeTreeData?.(
                    data.map((node) => ({
                        parent: null,
                        ...node,
                    })),
                );
            });
        }
    }, []);

    useEffect(() => {
        setExpandedKeys([...expandedKeys]);
    }, [treeData]);

    const loadDataFunction = () => {
        if (typeof loadData === 'function') {
            return async (treeNode: EventDataNode) => {
                const datas = await loadData?.(treeNode);
                const newTreeNode = produce(treeData, (draft: DataNode[]) => {
                    changeTreeDataChildren(
                        draft,
                        treeNode.key,
                        datas.map((data) => ({
                            parent: treeNode,
                            ...data,
                        })),
                    );
                });
                onChangeTreeData?.(newTreeNode);
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
                onChangeTreeData?.((prevState: any) => {
                    const newTreeData = produce(prevState, (draft: DataNode[]) => {
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
                onChangeTreeData?.(data);
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

                onChangeTreeData?.((prevState: any) => {
                    const newTreeData = produce(prevState, (draft: DataNode[]) => {
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
                onChangeTreeData?.((prevState: any) => {
                    const newTreeData = produce(prevState, (draft: DataNode[]) => {
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

                onChangeTreeData?.((prevState: any) => {
                    const newTreeData = produce(prevState, (draft: DataNode[]) => {
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

    const [visible, setVisible] = useState<boolean>(false);

    const [items, setItems] = useState<ItemType[]>([]);

    useEffect(() => {
        if (contextMenuRender) {
            setItems(contextMenuRender?.(null));
        }
    }, []);

    return (
        <Dropdown
            trigger={['contextMenu']}
            visible={visible}
            onVisibleChange={(changeVisible) => {
                setVisible((data) => {
                    if (data !== changeVisible && changeVisible === true) {
                        setItems(contextMenuRender?.(null) || []);
                    }
                    return changeVisible;
                });
            }}
            overlay={
                <Menu
                    items={items}
                    onClick={() => {
                        setVisible(false);
                    }}
                />
            }
        >
            <AntTempTree
                loadData={loadDataFunction()}
                loadedKeys={loadedKeys}
                treeData={treeData}
                expandedKeys={expandedKeys}
                onRightClick={(info) => {
                    setItems(contextMenuRender?.(info.node) || []);
                    setVisible(true);
                }}
                onExpand={(eKeys, info) => {
                    setExpandedKeys(eKeys);
                    onExpand?.(eKeys, info);
                }}
                {...restProps}
                {...extProps}
            />
        </Dropdown>
    );
};

export default Tree;
