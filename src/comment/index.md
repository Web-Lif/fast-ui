---
nav:
  title: 组件
  path: /components
  order: 10
group:
  path: /components/data
  title: 数据
---

## Comment 评论

对网站内容的反馈、评价和讨论。

```tsx
/**
 * title: 基本评论
 * desc: 一个基本的评论组件，带有作者、头像、时间和操作。
 */
import React, { useState, useRef } from 'react'
import { Comment, Avatar } from '@weblif/fast-ui'

export default () => {
  const actions = [<span key="comment-basic-reply-to">Reply to</span>]
  return (
    <>
      <Comment
        actions={actions}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
      />
    </>
  )
}
```

## API

| 参数     | 说明                                                 | 类型                | 默认值 | 版本 |
| -------- | ---------------------------------------------------- | ------------------- | ------ | ---- |
| actions  | 在评论内容下面呈现的操作项列表                       | Array&lt;ReactNode> | -      |      |
| author   | 要显示为注释作者的元素                               | ReactNode           | -      |      |
| avatar   | 要显示为评论头像的元素 - 通常是 antd Avatar 或者 src | ReactNode           | -      |      |
| children | 嵌套注释应作为注释的子项提供                         | ReactNode           | -      |      |
| content  | 评论的主要内容                                       | ReactNode           | -      |      |
| datetime | 展示时间描述                                         | ReactNode           | -      |      |
