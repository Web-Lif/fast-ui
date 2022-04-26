import React, { Key, ReactNode, useEffect, useMemo, useState } from 'react';
import { Tree as AntTree, TreeProps as AntTreeProps, Dropdown, Menu } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { DataNode, EventDataNode } from 'antd/lib/tree';
import { produce } from 'immer';
import { ExpandAction } from 'antd/lib/tree/DirectoryTree';

interface MenuType {
    key: string;
    title: ReactNode;
    icon?: ReactNode;
}

interface TreeProps extends Omit<AntTreeProps, 'loadData' | 'loadedKeys' | 'treeData'> {
    /** 是否设置为目录树 */
    directoryTree?: boolean;

    /** 装载数据 */
    loadData: ((treeNode: DataNode | null) => Promise<DataNode[]>) | DataNode[];

    /** 渲染右键菜单 */
    contextMenuRender?: (node: DataNode) => MenuType[];

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
                setTreeData(data);
            });
        }
    }, []);

    const loadDataFunction = () => {
        if (typeof loadData === 'function') {
            return async (treeNode: EventDataNode) => {
                const datas = await loadData?.(treeNode);
                const newTreeNode = produce(treeData, (draft) => {
                    changeTreeDataChildren(draft, treeNode.key, datas);
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

                const renderReloadMenu = () => {
                    if (typeof loadData === 'function') {
                        return (
                            <Menu.Item
                                icon={<ReloadOutlined />}
                                onClick={() => {
                                    if (typeof loadData === 'function') {
                                        loadData?.(node).then((data) => {
                                            const newTreeData = produce(treeData, (draft) => {
                                                changeTreeDataChildren(draft, node.key, data);
                                            });
                                            setTreeData(newTreeData);
                                            if (node.children) {
                                                const childrens = getChildrenFlatList(
                                                    node.children,
                                                ).map((data) => data.key);
                                                const newLoadedKeys = loadedKeys.filter(
                                                    (key) =>
                                                        !childrens.includes(key) &&
                                                        expandedKeys.includes(key),
                                                );
                                                setLoadedKeys(newLoadedKeys);
                                            }
                                        });
                                    }
                                }}
                            >
                                刷新节点
                            </Menu.Item>
                        );
                    }
                    return null;
                };

                const menu = (
                    <Menu>
                        {renderReloadMenu()}
                        {menuItems?.map((menu) => (
                            <Menu.Item
                                key={`${node.key}-${menu.key}`}
                                onClick={() => {
                                    onMenuClick?.(menu.key, node);
                                }}
                            >
                                {menu.title}
                            </Menu.Item>
                        ))}
                    </Menu>
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