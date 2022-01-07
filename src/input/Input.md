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

<div class="fu-half-inline-block">

```tsx
/**
 * title: 基础使用
 * desc: 这是一个简单使用的例子
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
</div>
<div class="fu-half-inline-block">

```tsx
/**
 * title: 文本域
 * desc: 用于多行输入。
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

</div>