---
nav:
  title: 组件
  path: /components
  order: 10
group:
  path: /components/data
  title: 数据
title: Drawer
subtitle: 抽屉
---

## Drawer 抽屉

屏幕边缘滑出的浮层面板。

<br />

例子:

```tsx
/**
 * title: 基础
 * description: 基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。
 */
import { Button, Drawer } from '@weblif/fast-ui'
import { useState } from 'react'
export default () => {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        打开
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}
```

## API

| 参数                | 说明                                                                             | 类型                                                   | 默认值               | 版本   |
| ------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------ | -------------------- | ------ |
| autoFocus           | 抽屉展开后是否将焦点切换至其 Dom 节点                                            | boolean                                                | true                 | 4.17.0 |
| afterVisibleChange  | 切换抽屉时动画结束后的回调                                                       | function(visible)                                      | -                    |        |
| bodyStyle           | 可用于设置 Drawer 内容部分的样式                                                 | CSSProperties                                          | -                    |        |
| className           | 对话框外层容器的类名                                                             | string                                                 | -                    |        |
| closable            | 是否显示左上角的关闭按钮                                                         | boolean                                                | true                 |        |
| closeIcon           | 自定义关闭图标                                                                   | ReactNode                                              | &lt;CloseOutlined /> |        |
| contentWrapperStyle | 可用于设置 Drawer 包裹内容部分的样式                                             | CSSProperties                                          | -                    |        |
| destroyOnClose      | 关闭时销毁 Drawer 里的子元素                                                     | boolean                                                | false                |        |
| drawerStyle         | 用于设置 Drawer 弹出层的样式                                                     | CSSProperties                                          | -                    |        |
| extra               | 抽屉右上角的操作区域                                                             | ReactNode                                              | -                    | 4.17.0 |
| footer              | 抽屉的页脚                                                                       | ReactNode                                              | -                    |        |
| footerStyle         | 抽屉页脚部件的样式                                                               | CSSProperties                                          | -                    |        |
| forceRender         | 预渲染 Drawer 内元素                                                             | boolean                                                | false                |        |
| getContainer        | 指定 Drawer 挂载的 HTML 节点, false 为挂载在当前 dom                             | HTMLElement \| () => HTMLElement \| Selectors \| false | body                 |        |
| headerStyle         | 用于设置 Drawer 头部的样式                                                       | CSSProperties                                          | -                    |        |
| height              | 高度, 在 `placement` 为 `top` 或 `bottom` 时使用                                 | string \| number                                       | 256                  |        |
| keyboard            | 是否支持键盘 esc 关闭                                                            | boolean                                                | true                 |        |
| mask                | 是否展示遮罩                                                                     | boolean                                                | true                 |        |
| maskClosable        | 点击蒙层是否允许关闭                                                             | boolean                                                | true                 |        |
| maskStyle           | 遮罩样式                                                                         | CSSProperties                                          | {}                   |        |
| placement           | 抽屉的方向                                                                       | `top` \| `right` \| `bottom` \| `left`                 | `right`              |        |
| push                | 用于设置多层 Drawer 的推动行为                                                   | boolean \| { distance: string \| number }              | { distance: 180 }    | 4.5.0+ |
| size                | 预设抽屉宽度（或高度），default `378px` 和 large `736px`                         | 'default' \| 'large'                                   | 'default'            | 4.17.0 |
| style               | 可用于设置 Drawer 最外层容器的样式，和 `drawerStyle` 的区别是作用节点包括 `mask` | CSSProperties                                          | -                    |        |
| title               | 标题                                                                             | ReactNode                                              | -                    |        |
| visible             | Drawer 是否可见                                                                  | boolean                                                | -                    |        |
| width               | 宽度                                                                             | string \| number                                       | 378                  |        |
| zIndex              | 设置 Drawer 的 `z-index`                                                         | number                                                 | 1000                 |        |
| onClose             | 点击遮罩层或左上角叉或取消按钮的回调                                             | function(e)                                            | -                    |        |
