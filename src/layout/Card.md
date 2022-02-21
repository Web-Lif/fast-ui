---
nav:
    title: 组件
    path: /components
group:
    path: /components/layout
    title: 布局
---

## Card 卡片

通用卡片容器。

<br />

例子:


```tsx
/**
 * title: 经典卡片
 * desc: 包含标题、内容、操作区域。
 */
import React, { useState, useRef } from 'react';
import { Card } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <br />
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </>
    );
};
```

<br />

### API

##### Card

| 属性           | 说明                                    | 类型              | 默认值 |
| -------------- | --------------------------------------- | ----------------- | ------ |
|actions         | 卡片操作组，位置在卡片底部                  | `Array<ReactNode>`
|activeTabKey    | 当前激活页签的 key                        | `string`
|bodyStyle       | 内容区域自定义样式                         | `CSSProperties`
|bordered        | 是否有边框                                | `boolean`
|cover           | 卡片封面                                  | `ReactNode`
|defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey | `string`
|extra            | 卡片右上角的操作区域                        | `ReactNode`
|headStyle        | 自定义标题区域样式                          | `CSSProperties`
|hoverable        | 鼠标移过时可浮起                            | `boolean`
|loading          | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | `boolean`
|size             | card 的尺寸                               | `default` \| `small`
|tabBarExtraContent | tab bar 上额外的元素                     | `ReactNode`
|tabList          | 页签标题列表                               | `Array<{key: string, tab: ReactNode}>`
|tabProps         | Tabs                                     | `-`
|title            | 卡片标题                                  | `ReactNode`
|type             | 卡片类型，可设置为 `inner` 或 不设置         | `string`
|onTabChange      | 页签切换的回调                             | `(key) => void`

###### Card.Grid

| 属性           | 说明                                    | 类型              | 默认值 |
| -------------- | --------------------------------------- | ----------------- | ------ |
|className       |网格容器类名                               | `string`          
|hoverable       |鼠标移过时可浮起                            | `boolean`
|style           |定义网格容器类名的样式                       | `CSSProperties`


##### Card.Meta

| 属性           | 说明                                    | 类型              | 默认值 |
| -------------- | --------------------------------------- | ----------------- | ------ |
|avatar          | 头像/图标                                | `ReactNode`
|className       | 容器类名                                 | `string`
|description     | 描述内容                                 | `ReactNode`
|style           | 定义容器类名的样式                         | `CSSProperties`
|title           | 标题内容                                 | `ReactNode`