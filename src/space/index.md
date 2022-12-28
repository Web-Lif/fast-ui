---
nav:
  title: 组件
  path: /components
group:
  path: /components/layout
  title: 布局
title: Space
subtitle: 间距
---

## Space 间距

设置组件之间的间距。

<br />

例子:

```tsx
/**
 * title: 基本
 * description: 最简单的用法，在浮层中可以选择或者输入日期。
 */
import { Button, Space } from '@weblif/fast-ui'

export default () => {
  return (
    <Space>
      间距
      <Button type="primary">按钮一</Button>
      <Button>按钮二</Button>
      <Button>按钮三</Button>
    </Space>
  )
}
```

```tsx
/**
 * title: 垂直间距
 * description: 相邻组件垂直间距。
 */
import { Space } from '@weblif/fast-ui'
import { Card } from 'antd'

export default () => {
  return (
    <Space direction="vertical">
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  )
}
```

<br />

### API

| 属性      | 说明                                   | 类型                                     | 默认值   |
| --------- | -------------------------------------- | ---------------------------------------- | -------- |
| align     | 对齐方式                               | `start` \| `end` \|`center` \|`baseline` |
| direction | 间距方向                               | `vertical` \| `horizontal`               |
| size      | 间距大小                               | `Size`                                   | `Size[]` |
| split     | 设置拆分                               | `ReactNode`                              |
| wrap      | 是否自动换行，仅在 `horizontal` 时有效 | `boolean`                                |
