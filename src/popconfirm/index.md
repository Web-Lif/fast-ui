---
nav:
  title: 组件
  path: /components
  order: 10
group:
  path: /components/data
  title: 数据
---

## Popconfirm 气泡确认框

点击元素，弹出气泡式的确认框。

<br />

例子:

```tsx
/**
 * title: 基础使用
 * description: 最简单的用法。
 */
import { Popconfirm } from '@weblif/fast-ui'

export default () => {
  return (
    <Popconfirm
      title="Are you sure to delete this task?"
      okText="Yes"
      cancelText="No"
    >
      <a href="#">Delete</a>
    </Popconfirm>
  )
}
```

## API

| 参数              | 说明                                   | 类型                                   | 默认值                   | 版本 |
| ----------------- | -------------------------------------- | -------------------------------------- | ------------------------ | ---- |
| cancelButtonProps | cancel 按钮 props                      | [ButtonProps](/components/button/#API) | -                        |      |
| cancelText        | 取消按钮文字                           | string                                 | `取消`                   |      |
| disabled          | 阻止点击 Popconfirm 子元素时弹出确认框 | boolean                                | false                    |      |
| icon              | 自定义弹出气泡 Icon 图标               | ReactNode                              | &lt;ExclamationCircle /> |      |
| okButtonProps     | ok 按钮 props                          | [ButtonProps](/components/button/#API) | -                        |      |
| okText            | 确认按钮文字                           | string                                 | `确定`                   |      |
| okType            | 确认按钮类型                           | string                                 | `primary`                |      |
| showCancel        | 是否显示取消按钮                       | boolean                                | true                     |      |
| title             | 确认框的描述                           | ReactNode \| () => ReactNode           | -                        |      |
| onCancel          | 点击取消的回调                         | function(e)                            | -                        |      |
| onConfirm         | 点击确认的回调                         | function(e)                            | -                        |      |

更多属性请参考 [Tooltip](/components/tooltip/#API)。

## 注意

请确保 `Popconfirm` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
