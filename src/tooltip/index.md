---
nav:
  title: 组件
  path: /components
  order: 10
group:
  path: /components/data
  title: 数据
title: Tooltip
subtitle: 文字提示
---

## Tooltip 文字提示

简单的文字提示气泡框。

<br />

例子:

```tsx
/**
 * title: 基础使用
 * description: 最简单的用法。
 */
import { Tooltip } from '@weblif/fast-ui'

export default () => {
  return (
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  )
}
```

## API

| 参数  | 说明     | 类型                         | 默认值 |
| ----- | -------- | ---------------------------- | ------ |
| title | 提示文字 | ReactNode \| () => ReactNode | -      |

### 共同的 API

以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。

| 参数                 | 说明                                                                                                                                           | 类型                                | 默认值              | 版本  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------- | ----- |
| align                | 该值将合并到 placement 的配置中，设置参考 [rc-tooltip](https://github.com/react-component/tooltip)                                             | object                              | -                   |       |
| arrowPointAtCenter   | 箭头是否指向目标元素中心                                                                                                                       | boolean                             | false               |       |
| autoAdjustOverflow   | 气泡被遮挡时自动调整位置                                                                                                                       | boolean                             | true                |       |
| color                | 背景颜色                                                                                                                                       | string                              | -                   | 4.3.0 |
| defaultVisible       | 默认是否显隐                                                                                                                                   | boolean                             | false               |       |
| destroyTooltipOnHide | 关闭后是否销毁 Tooltip，当 `keepParent` 为 `false` 时销毁父容器                                                                                | boolean \| { keepParent?: boolean } | false               |       |
| getPopupContainer    | 浮层渲染父节点，默认渲染到 body 上                                                                                                             | function(triggerNode)               | () => document.body |       |
| mouseEnterDelay      | 鼠标移入后延时多少才显示 Tooltip，单位：秒                                                                                                     | number                              | 0.1                 |       |
| mouseLeaveDelay      | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒                                                                                                     | number                              | 0.1                 |       |
| overlayClassName     | 卡片类名                                                                                                                                       | string                              | -                   |       |
| overlayStyle         | 卡片样式                                                                                                                                       | object                              | -                   |       |
| overlayInnerStyle    | 卡片内容区域的样式对象                                                                                                                         | object                              | -                   |       |
| placement            | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string                              | `top`               |       |
| trigger              | 触发行为，可选 `hover` \| `focus` \| `click` \| `contextMenu`，可使用数组设置多个触发行为                                                      | string \| string\[]                 | `hover`             |       |
| visible              | 用于手动控制浮层显隐                                                                                                                           | boolean                             | false               |       |
| zIndex               | 设置 Tooltip 的 `z-index`                                                                                                                      | number                              | -                   |       |
| onVisibleChange      | 显示隐藏的回调                                                                                                                                 | (visible) => void                   | -                   |       |

## 注意

请确保 `Tooltip` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
