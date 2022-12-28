---
nav:
  title: 组件
  path: /components
  order: 10
group:
  path: /components/data
  title: 数据
title: Tag
subtitle: 标签
---

## Tag 标签

进行标记和分类的小标签。

```tsx
/**
 * title: 基础使用
 * description: 基本标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose 事件。
 */
import { Space, Tag } from '@weblif/fast-ui'

export default () => {
  return (
    <Space>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
      </Tag>
      <Tag
        closable
        onClose={(e) => {
          console.log(e)
        }}
      >
        Tag 2
      </Tag>
      <Tag
        closable
        onClose={() => {
          e.preventDefault()
          console.log('Clicked! But prevent default.')
        }}
      >
        Prevent Default
      </Tag>
    </Space>
  )
}
```

### Tag

| 属性      | 说明                                                       | 类型          | 默认值  |
| --------- | ---------------------------------------------------------- | ------------- | ------- |
| closable  | 标签是否可以关闭（点击默认关闭）                           | `boolean`     | `false` |
| closeIcon | 自定义关闭按钮                                             | `ReactNode`   | -       |
| color     | 标签色                                                     | `string`      | -       |
| icon      | 设置图标                                                   | `ReactNode`   | -       |
| visible   | 是否显示标签                                               | `boolean`     | `true`  |
| onClose   | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | `(e) => void` | -       |

### Tag.CheckableTag

| 属性     | 说明                 | 类型                | 默认值  |
| -------- | -------------------- | ------------------- | ------- |
| checked  | 设置标签的选中状态   | `boolean`           | `false` |
| onChange | 点击标签时触发的回调 | `(checked) => void` | -       |
