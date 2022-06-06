---
nav:
    title: 组件
    path: /components
group:
    path: /components/layout
    title: 布局
---

## Layout 布局

协助进行页面级整体布局

#### 组件描述

-   `Layout`: 布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
-   `Header`: 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
-   `Sider`: 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
-   `Content`: 内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
-   `Footer`: 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

<br />

例子:

```tsx
/**
 * title: 基本
 * desc: 典型的页面布局。
 */
import { Layout } from '@weblif/fast-ui';
import React from 'react';

export default () => {
    return (
        <>
            <Layout>
                <Layout.Header style={{ background: '#7dbcea' }}></Layout.Header>
                <Layout style={{ height: 200 }}>
                    <Layout.Sider style={{ background: '#3ba0e9' }}></Layout.Sider>
                    <Layout.Content
                        style={{ background: 'rgba(16, 142, 233, 1)' }}
                    ></Layout.Content>
                </Layout>
                <Layout.Footer style={{ background: '#7dbcea' }}></Layout.Footer>
            </Layout>
        </>
    );
};
```

<br />

### API

##### Layout

布局容器。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 容器 className | `string` |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | `boolean` |
| style | 指定样式 | `CSSProperties` |

##### Layout.Sider

侧边栏。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| breakpoint | 触发响应式布局的断点 | `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` | - |
| className | 容器 className | `string` |
| collapsed | 当前收起状态 | `boolean` |
| collapsedWidth | 收缩宽度，设置为 0 会出现特殊 trigger | `number` |
| collapsible | 是否可收起 | `boolean` |
| defaultCollapsed | 是否默认收起 | `boolean` |
| reverseArrow | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用 | `boolean` |
| style | 指定样式 | `CSSProperties` |
| theme | 主题颜色 | `light` \| `dark` |
| trigger | 自定义 trigger，设置为 null 时隐藏 trigger | `ReactNode` |
| width | 宽度 | `number` \| `string` |
| zeroWidthTriggerStyle | 指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式 | `object` |
| onBreakpoint | 触发响应式布局断点时的回调 | `(broken) => {}` |
| onCollapse | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发 | `(collapsed, type) => {}` |
