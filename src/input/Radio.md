---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## Radio 单选框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

<br />

例子:

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 基本
 * desc: 最简单的用法
 */
import React, { useState, useRef } from 'react';
import { Radio } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Radio>单选框</Radio>
        </>
    );
};
```

</div>

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 不可用
 * desc: Radio 不可用。
 */
import React, { useState, useRef } from 'react';
import { Radio } from '@weblif/fast-ui';

export default () => {
    return <Radio disabled>不可用</Radio>;
};
```

</div>
</div>

## API

#### Radio/Radio.Button

| 属性           | 说明                              | 类型      | 默认值 |
| -------------- | --------------------------------- | --------- | ------ |
| autoFocus      | 自动获取焦点                      | `boolean` | false  |
| checked        | 指定当前是否选中                  | `boolean` | false  |
| defaultChecked | 初始是否选中                      | `boolean` | false  |
| disabled       | 禁用 Radio                        | `boolean` | false  |
| value          | 根据 value 进行比较，判断是否选中 | `any`     | -      |

#### RadioGroup

单选框组合，用于包裹一组 Radio。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline` \| `solid` | `outline` |
| defaultValue | 默认选中的值 | `any` | - |
| disabled | 禁选所有子单选器 | `boolean` | false |
| name | RadioGroup 下所有 input[type="radio"] 的 name 属性 | `string` | - |
| options | 以配置形式设置子元素 | `string[]` \| `Array<{ label: string value: string disabled?: boolean }>` | - |
| optionType | 用于设置 Radio options 类型 | `default` \| `button` | `default` |
| size | 大小，只对按钮样式生效 | `large` \| `middle` \| `small` | - |
| value | 用于设置当前选中的值 | `any` | - |
| onChange | 选项变化时的回调函数 | `function(e:Event)` | - |

## 方法

Radio

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
