---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

<br />

例子:

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 基本
 * desc: 数字输入框。
 */
import { InputNumber } from '@weblif/fast-ui';
import React from 'react';

export default () => {
    return (
        <>
            <InputNumber
                onChange={(value) => {
                    console.log(value);
                }}
            />
        </>
    );
};
```

</div>

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 禁用
 * desc: 禁用数字输入框。
 */
import { InputNumber } from '@weblif/fast-ui';
import React from 'react';

export default () => {
    return (
        <>
            <InputNumber
                disabled
                onChange={(value) => {
                    console.log(value);
                }}
            />
        </>
    );
};
```

</div>

</div>

<br />

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | `function` | - |
| bodyStyle | Modal body 样式 | `CSSProperties` |
| cancelButtonProps | cancel 按钮 props | `ButtonProps` | - |
| cancelText | 取消按钮文字 | `ReactNode` | 取消 |
| centered | 垂直居中展示 Modal | `boolean` | false |
| closable | 是否显示右上角的关闭按钮 | `boolean` | true |
| closeIcon | 自定义关闭图标 | `ReactNode` | `<CloseOutlined />` |
| confirmLoading | 确定按钮 loading | `boolean` | false |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | `boolean` | false |
| focusTriggerAfterClose | 对话框关闭后是否需要聚焦触发元素 | `boolean` | true |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | `ReactNode` | (确定取消按钮) |
| forceRender | 强制渲染 Modal | `boolean` | false |
| getContainer | 指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom | `HTMLElement` \| `() => HTMLElement` \| `Selectors` \| `false` | document.body |
| keyboard | 是否支持键盘 esc 关闭 | `boolean` | true |
| mask | 是否展示遮罩 | `boolean` | true |
| maskClosable | 点击蒙层是否允许关闭 | `boolean` | true |
| maskStyle | 遮罩样式 | `CSSProperties` | - |
| modalRender | 自定义渲染对话框 | `(node: ReactNode) => ReactNode` | - |
| okButtonProps | ok 按钮 props | `ButtonProps` | - |
| okText | 确认按钮文字 | `ReactNode` | `确定` |
| okType | 确认按钮类型 | `string` | `primary` |
| status | 设置校验状态 | `'error'` \| `'warning'` |
| style | 可用于设置浮层的样式，调整浮层位置等 | `CSSProperties` | - |
| title | 标题 | `ReactNode` | - |
| visible | 对话框是否可见 | `boolean` | - |
| width | 宽度 | `string` \| `number` | 520 |
| wrapClassName | 对话框外层容器的类名 | `string` | - |
| zIndex | 设置 Modal 的 `z-index` | `number` | 1000 |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | `function(e)` | - |
| onOk | 点击确定回调 | `function(e)` | - |
