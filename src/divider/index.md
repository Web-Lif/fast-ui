---
nav:
    title: 组件
    path: /components
group:
    path: /components/layout
    title: 布局
---

## Divider 分割线

区隔内容的分割线。

<br />

例子:

```tsx
/**
 * title: 垂直分割线
 * desc: 使用 `type="vertical"` 设置为行内的垂直分割线。
 */
import React, { useState, useRef } from 'react'
import { Divider } from '@weblif/fast-ui'

export default () => {
    return (
        <>
            Text
            <Divider type="vertical" />
            <a href="#">Link</a>
            <Divider type="vertical" />
            <a href="#">Link</a>
        </>
    )
}
```

<br />

### API

| 属性              | 说明                                                                                      | 类型                          | 默认值       |
| ----------------- | ----------------------------------------------------------------------------------------- | ----------------------------- | ------------ |
| children          | 嵌套的标题                                                                                | `ReactNode`                   | -            |
| className         | 分割线样式类                                                                              | `string`                      | -            |
| dashed            | 是否虚线                                                                                  | `boolean`                     | false        |
| orientation       | 分割线标题的位置                                                                          | `left` \| `right` \| `center` | `center`     |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right | `string` \| `number`          | -            |
| plain             | 文字是否显示为普通正文样式                                                                | `boolean`                     | false        |
| style             | 分割线样式对象                                                                            | `CSSProperties`               | -            |
| type              | 水平还是垂直类型                                                                          | `horizontal` \| `vertical`    | `horizontal` |
