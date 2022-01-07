---
nav:
    title: Components
    path: /components
group:
    path: /components/data
    title: 数据
---

## Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

<br />

例子: 

```tsx
/**
 * title: 执行耗时任务
 * desc: 执行耗时任务可以自动进行防止多次点击按钮, 当执行成功后才让继续点击
 */
import React, { useState, useRef} from 'react';
import { Input } from '@weblif/fast-ui';
import 'antd/dist/antd.css';

export default () => {
    return (
        <>
            <Input
                onChange={(value) => {
                    console.log(value)
                }}
            />
        </>
    )
}
```
