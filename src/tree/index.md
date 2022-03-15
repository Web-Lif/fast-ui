---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## Tree 树形控件

多层次的结构列表。

```tsx
/**
 * title: 基础
 * desc: 异步加载树的信息
 */
import React, { useState } from 'react';
import { Tree } from '@weblif/fast-ui';


export default () => {

    return (
        <Tree
            loadData={(treeNode) => {
                return new Promise((resolve) => {
                    if (treeNode === null) {
                        resolve([
                            { title: 'Expand to load', key: '0' },
                            { title: 'Expand to load', key: '1' },
                            { title: 'Tree Node', key: '2', isLeaf: true },
                        ])
                        return;
                    }

                    setTimeout(() => {
                        resolve([
                            { title: `Child Node - ${treeNode.key}`, key: `${treeNode.key}-0` },
                            { title: `Child Node - ${treeNode.key}-1`, key: `${treeNode.key}-1` },
                        ])
                    }, 1000)
                }) 
            }}
            onMenuClick={(type, node) => {
                console.log(type, node)
            }}
            contextMenuRender={() => {
                return [{
                    key: 'delete',
                    title: '删除'
                }]
            }}
        />
    );
};
```
