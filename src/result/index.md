---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## Result 结果


用于反馈一系列操作任务的处理结果。


<br />

例子:

```tsx
/**
 * title: 基本
 * desc: 简单的展示。
 */
import React, { useState, useRef } from 'react';
import { Result, Button } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Result
                status="success"
                title="成功"
                subTitle="这是一个子标题信息"
                extra={[
                    <Button type="primary" key="console">
                        回到控制台
                    </Button>,
                    <Button key="buy">购买</Button>,
                ]}
            />
        </>
    );
};
```



## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 操作区 | ReactNode | - |
| icon | 自定义 icon | ReactNode | - |
| status | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| subTitle | subTitle 文字 | ReactNode | - |
| title | title 文字 | ReactNode | - |