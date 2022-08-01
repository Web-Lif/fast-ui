---
nav:
  title: 组件
  path: /components
  order: 10
group:
  path: /components/data
  title: 数据
---

## Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

<br />

例子:

```tsx
/**
 * title: 基础使用
 * desc: 最简单的用法，浮层的大小由内容区域决定。
 */
import React from 'react'
import { Popover, Button } from '@weblif/fast-ui'

export default () => {
  return (
    <Popover
      content={
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      }
      title="Title"
    >
      <Button type="primary">Hover me</Button>
    </Popover>
  )
}
```

## API

| 参数    | 说明     | 类型                         | 默认值 | 版本 |
| ------- | -------- | ---------------------------- | ------ | ---- |
| content | 卡片内容 | ReactNode \| () => ReactNode | -      |      |
| title   | 卡片标题 | ReactNode \| () => ReactNode | -      |      |

更多属性请参考 [Tooltip](/components/tooltip/#API)。

## 注意

请确保 `Popover` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
