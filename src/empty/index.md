---
nav:
  title: 组件
  path: /components
group:
  path: /components/data
  title: 数据
---

## Empty 空状态

空状态时的展示占位图。

<br />

例子:

```tsx
/**
 * title: 基本
 * description: 简单的展示。
 */
import { Empty } from '@weblif/fast-ui'

export default () => {
  return (
    <>
      <Empty />
    </>
  )
}
```

## API

```jsx | pure
<Empty>
  <Button>创建</Button>
</Empty>
```

| 参数        | 说明                                           | 类型          | 默认值                          | 版本 |
| ----------- | ---------------------------------------------- | ------------- | ------------------------------- | ---- |
| description | 自定义描述内容                                 | ReactNode     | -                               |      |
| image       | 设置显示图片，为 string 时表示自定义图片地址。 | ReactNode     | `Empty.PRESENTED_IMAGE_DEFAULT` |      |
| imageStyle  | 图片样式                                       | CSSProperties | -                               |      |
