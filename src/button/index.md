---
nav:
    title: Components
    path: /components
group:
    path: /components/universal
    title: 通用
    order: 10
---

## Button 按钮

按钮用于开始一个即时操作。

<br />

例子: 

```tsx
/**
 * title: 执行耗时任务
 * desc: 执行耗时任务可以自动进行防止多次点击按钮, 当执行成功后才让继续点击
 */
import React from 'react';
import { Button } from '@weblif/fast-ui';
import { message } from 'antd'
import 'antd/dist/antd.css';

/** Mock 请求数据, 或则一些耗时操作 */
const requestData = () => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve('模拟任务执行完成.')
        }, 3000)
    })
}

export default () => {
    return (
        <Button
            onClick={async () => {
                const msg = await requestData()
                message.info(msg)
            }}
        >
            async 请求远程数据
        </Button>
    )
}
```

<br />

| 属性     | 说明                       | 类型      |  默认值
|----      |----                       |----      |-------
|block     |将按钮宽度调整为其父宽度的选项  |`boolean` | false
|danger    |设置危险按钮                 |`boolean` | false
|disabled  |按钮失效状态                 |`boolean` | false
|ghost     |幽灵属性，使按钮背景透明       |`boolean` | false
|href      |点击跳转的地址，指定此属性 button 的行为和 a 链接一致|`string` | -
|htmlType  |设置 button 原生的 type 值|`string` | button
|icon      |设置按钮的图标组件         |`ReactNode` | -
|loading   |设置按钮载入状态           |`boolean` \| `{ delay: number }` | false
|shape     |设置按钮形状               | `default` \| `circle` \| `round` | 'default'
|size      |设置按钮大小               | `large` \| `middle` \| `small` | 'default'
|target    |相当于 a 链接的 target 属性，href 存在时生效 | `string` | -
|type      |设置按钮类型               |`primary` \| `ghost` \| `dashed` \| `link` \| `text` \| `default` | 
|onClick   |点击按钮时的回调            | `(event) => void` | - 


支持原生 button 的其他所有属性。

