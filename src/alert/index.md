---
nav:
    title: 组件
    path: /components
group:
    path: /components/feedback
    title: 反馈
---

## Alert 警告提示

警告提示，展现需要关注的信息。


<br />

例子: 

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">


```tsx
/**
 * title: 基本
 * desc: 最简单的用法，适用于简短的警告提示。
 */
import React, { useState, useRef } from 'react';
import { Alert } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Alert message="Success Text" type="success" />
        </>
    );
};
```

</div>

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 四种样式
 * desc: 共有四种样式 `success`, `info`, `warning`, `error` 
 */
import React, { useState, useRef } from 'react';
import { Alert, Space } from '@weblif/fast-ui';

export default () => {
    return (
        <Space direction="vertical" style={{ width: '100%'}}>
            <Alert message="Success Text" type="success" />
            <Alert message="Info Text" type="info" />
            <Alert message="Warning Text" type="warning" />
            <Alert message="Error Text" type="error" />
        </Space>
    );
};
```


</div>
</div>


## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| action | 自定义操作项 | ReactNode | - |  |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - |  |
| banner | 是否用作顶部公告 | boolean | false |  |
| closable | 默认不显示关闭按钮 | boolean | - |  |
| closeText | 自定义关闭按钮 | ReactNode | - |  |
| closeIcon | 自定义关闭 Icon | ReactNode | `<CloseOutlined />` |  |
| description | 警告提示的辅助性文字介绍 | ReactNode | - |  |
| icon | 自定义图标，`showIcon` 为 true 时有效 | ReactNode | - |  |
| message | 警告提示内容 | ReactNode | - |  |
| showIcon | 是否显示辅助图标 | boolean | false，`banner` 模式下默认值为 true |  |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string | `info`，`banner` 模式下默认值为 `warning` |  |
| onClose | 关闭时触发的回调函数 | (e: MouseEvent) => void | - |  |

### Alert.ErrorBoundary

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| description | 自定义错误内容，如果未指定会展示报错堆栈 | ReactNode | {{ error stack }} |  |
| message | 自定义错误标题，如果未指定会展示原生报错信息 | ReactNode | {{ error }} |  |