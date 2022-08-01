---
nav:
  title: 组件
  path: /components
group:
  path: /components/data
  title: 数据
---

## Switch 开关

通过鼠标或键盘输入内容，是最基础的表单域的包装。

<br />

例子:

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 基础使用
 * desc: 这是一个简单使用的例子
 */
import { Switch } from '@weblif/fast-ui'
import React from 'react'

export default () => {
  return (
    <>
      <Switch
        onChange={(checked) => {
          console.log(checked)
        }}
      />
    </>
  )
}
```

```tsx
/**
 * title: 不可用
 * desc: Switch 失效状态。
 */
import { Switch } from '@weblif/fast-ui'
import React from 'react'

export default () => {
  return (
    <>
      <Switch disabled />
    </>
  )
}
```

```tsx
/**
 * title: 两种大小
 * desc: size="small" 表示小号开关。
 */
import { Switch } from '@weblif/fast-ui'
import React from 'react'

export default () => {
  return (
    <>
      <Switch defaultChecked />
      <br />
      <Switch size="small" defaultChecked />
    </>
  )
}
```

</div>

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 加载中
 * desc: 标识开关操作仍在执行中。
 */
import { Switch } from '@weblif/fast-ui'
import React from 'react'

export default () => {
  return (
    <>
      <Switch loading defaultChecked />
      <br />
      <Switch size="small" loading />
    </>
  )
}
```

```tsx
/**
 * title: 文字
 * desc: 带有文字的开关
 */
import { Switch } from '@weblif/fast-ui'
import React from 'react'

export default () => {
  return (
    <>
      <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
      <br />
      <Switch checkedChildren="1" unCheckedChildren="0" />
    </>
  )
}
```

</div>
</div>

## API

| 参数              | 说明                                | 类型                                     | 默认值    |
| ----------------- | ----------------------------------- | ---------------------------------------- | --------- |
| autoFocus         | 组件自动获取焦点                    | boolean                                  | false     |
| checked           | 指定当前是否选中                    | boolean                                  | false     |
| checkedChildren   | 选中时的内容                        | ReactNode                                | -         |
| className         | Switch 器类名                       | string                                   | -         |
| defaultChecked    | 初始是否选中                        | boolean                                  | false     |
| disabled          | 是否禁用                            | boolean                                  | false     |
| loading           | 加载中的开关                        | boolean                                  | false     |
| size              | 开关大小，可选值：`default` `small` | string                                   | `default` |
| unCheckedChildren | 非选中时的内容                      | ReactNode                                | -         |
| onChange          | 变化时回调函数                      | function(checked: boolean, event: Event) | -         |
| onClick           | 点击时回调函数                      | function(checked: boolean, event: Event) | -         |

## 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
