---
nav:
    title: Components
    path: /components
group:
    path: /components/data
    title: 数据
---

## Checkbox 多选框

多选框。

<br />

例子:

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 基本
 * desc: 最简单的用法，在浮层中可以选择或者输入日期。
 */
import React, { useState, useRef } from 'react';
import { Checkbox } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Checkbox
               onChange={(value) => {
                   console.log(value)
               }}
            >
                Checkbox
            </Checkbox>
        </>
    );
};
```

</div>

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 不可用
 * desc: Checkbox 不可用
 */
import React, { useState, useRef } from 'react';
import { Checkbox } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Checkbox
                disabled
            >
                Checkbox
            </Checkbox>
        </>
    );
};
```

</div>

</div>

<br />

### API

#### Checkbox

| 属性           | 说明                                    | 类型              | 默认值 |
| -------------- | --------------------------------------- | ----------------- | ------ |
| autoFocus      | 自动获取焦点                            | boolean           | false  |
| value          | 指定当前是否选中                        | boolean           | false  |
| defaultChecked | 初始是否选中                            | boolean           | false  |
| disabled       | 失效状态                                | boolean           | false  |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制 | boolean           | false  |
| onChange       | 变化时回调函数                          | function(e:Event) | -      |

#### Checkbox Group

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | `string[]` | `[]` |
| disabled | 整组失效 | `boolean` | `false` |
| name | `CheckboxGroup` 下所有 input`[type="checkbox"]` 的 name 属性 | `string` | - |
| options | 指定可选项 | `string[]` \| `Option[]` | `[]` |
| value | 指定选中的选项 | `string[]` | `[]` |
| onChange | 变化时回调函数 | `function(checkedValue)` | - |

##### Option

```ts
interface Option {
    label: string;
    value: string;
    disabled?: boolean;
}
```

### 方法

Checkbox

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |
