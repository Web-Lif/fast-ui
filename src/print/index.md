---
nav:
    title: 组件
    path: /components
group:
    path: /components/other
    title: 其他
---

## Print 打印

用来打印网页的一部分信息

> 如果资源是跨域访问的时候，则无法正常显示打印对应的元素, 例如 `img` 标签的跨域显示图片

<br />

例子:

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 打印
 * desc: 打印容器里面的内容
 */
import React, { useState, useRef } from 'react';
import { Print, Button } from '@weblif/fast-ui';

export default () => {
    const print = useRef();
    return (
        <>
            <Button
                onClick={async () => {
                    console.log('print.current.print()');
                    await print.current.print();
                }}
            >
                点击打印
            </Button>
            <br />
            <br />
            <Print print={print}>
                <table border="1">
                    <tbody>
                        <tr>
                            <td>row 1, cell 1</td>
                            <td>row 1, cell 2</td>
                        </tr>
                        <tr>
                            <td>row 2, cell 1</td>
                            <td>row 2, cell 2</td>
                        </tr>
                    </tbody>
                </table>
            </Print>
        </>
    );
};
```

</div>

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 指定元素
 * desc: 打印指定的元素
 */
import React, { useState, useRef } from 'react';
import { printSnapshotDom, Button } from '@weblif/fast-ui';

export default () => {
    const print = useRef();
    return (
        <>
            <Button
                onClick={async () => {
                    const table = document.querySelector('#table');
                    await printSnapshotDom(table);
                }}
            >
                点击打印指定的网页元素
            </Button>
            <br />
            <br />

            <table border="1" id="table">
                <tbody>
                    <tr>
                        <td>row 1, cell 1</td>
                        <td>row 1, cell 2</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};
```

</div>

</div>

<br />

| 属性  | 说明           | 类型            | 默认值 |
| ----- | -------------- | --------------- | ------ |
| print | 调用打印的方法 | `PrintInstance` | -      |

### PrintInstance 方法

| 名称  | 类型                  |
| ----- | --------------------- |
| print | `() => Promise<void>` |
