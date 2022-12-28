---
nav:
  title: 组件
  path: /components
group:
  path: /components/data
  title: 数据
---

## Rate 评分

评分组件

### 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 基础使用
 * description: 最简单的用法。
 */
import { Rate } from '@weblif/fast-ui'

export default () => {
  return <Rate />
}
```

```tsx
/**
 * title: 只读
 * description: 只读，无法进行鼠标交互。
 */
import { Rate } from '@weblif/fast-ui'

export default () => {
  return <Rate disabled defaultValue={2} />
}
```

</div>

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 半星
 * description: 支持选中半星。
 */
import { Rate } from '@weblif/fast-ui'

export default () => {
  return <Rate allowHalf defaultValue={2.5} />
}
```

</div>

</div>

<br />

| 属性          | 说明                     | 类型                                      | 默认值           |
| ------------- | ------------------------ | ----------------------------------------- | ---------------- |
| allowClear    | 是否允许再次点击后清除   | `boolean`                                 | `true`           |
| allowHalf     | 是否允许半选             | `boolean`                                 | `false`          |
| autoFocus     | 自动获取焦点             | `boolean`                                 | `false`          |
| character     | 自定义字符               | `ReactNode` \| `(RateProps) => ReactNode` | `<StarFilled />` |
| className     | 自定义样式类名           | `string`                                  | -                |
| count         | star 总数                | `number`                                  | `5`              |
| defaultValue  | 默认值                   | `number`                                  | `0`              |
| disabled      | 只读，无法进行交互       | `boolean`                                 | `false`          |
| style         | 自定义样式对象           | `CSSProperties`                           | -                |
| tooltips      | 自定义每项的提示信息     | `string[]`                                | -                |
| value         | 当前数，受控值           | `number`                                  | -                |
| onBlur        | 失去焦点时的回调         | `function()`                              | -                |
| onChange      | 选择时的回调             | `function(value: number)`                 | -                |
| onFocus       | 获取焦点时的回调         | `function()`                              | -                |
| onHoverChange | 鼠标经过时数值变化的回调 | `function(value: number)`                 | -                |
| onKeyDown     | 按键回调                 | `function(event)`                         | -                |

## 方法

| 属性    | 说明     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
