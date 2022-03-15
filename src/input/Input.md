---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## Input 输入框

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
import React, { useState, useRef } from 'react';
import { Input } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Input
                onChange={(value) => {
                    console.log(value);
                }}
            />
        </>
    );
};
```

```tsx
/**
 * title: 密码输入框
 * desc: 用来输入密码的信息
 */
import React, { useState, useRef } from 'react';
import { Input } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Input.Password
                onChange={(value) => {
                    console.log(value);
                }}
            />
        </>
    );
};
```

```tsx
/**
 * title: 无边框
 * desc: 没有边框。
 */
import React, { useState, useRef } from 'react';
import { Input } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Input
                bordered={false}
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
 * title: 文本域
 * desc: 用于多行输入。
 */
import React, { useState, useRef } from 'react';
import { Input } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Input.TextArea
                maxLength={100}
                showCount
                onChange={(value) => {
                    console.log(value);
                }}
            />
        </>
    );
};
```

```tsx
/**
 * title: 搜索框
 * desc: 带有搜索按钮的输入框。
 */
import React, { useState, useRef } from 'react';
import { Input } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Input.Search
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

## API

#### Input

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | `ReactNode` |
| addonBefore | 带标签的 input，设置前置标签 | `ReactNode` |
| allowClear | 可以点击清除图标删除内容 | `boolean` |
| bordered | 是否有边框 | `boolean` |
| defaultValue | 输入框默认内容 | `string` |
| disabled | 是否禁用状态，默认为 false | `boolean` |
| id | 输入框的 id | `string` |
| maxLength | 最大长度 | `number` |
| status    | 设置校验状态 | `'error'` \| `'warning'` | 
| showCount | 是否展示字数 | `boolean` \| `{ formatter: ({ count: number, maxLength?: number }) => ReactNode }` |
| prefix | 带有前缀图标的 input | `ReactNode` |
| size | 控件大小。注：标准表单内的输入框大小限制为 large | `large` \| `middle` \| `small` |
| suffix | 带有后缀图标的 input | `ReactNode` |
| type | 声明 input 类型，同原生 input 标签的 type 属性 | `string` |
| value | 输入框内容 | `string` |
| onChange | 输入框内容变化时的回调 | `function(e)` |
| onPressEnter | 按下回车的回调 | `function(e)` |

> 如果 Input 在 Form.Item 内，并且 Form.Item 设置了 id 和 options 属性，则 value defaultValue 和 id 属性会被自动设置。

Input 的其他属性和 React 自带的 input 一致。

#### Input.TextArea

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 可以点击清除图标删除内容 | `boolean` \| `{ clearIcon: ReactNode }` |
| autoSize | 自适应内容高度，可设置为 true \|`false` 或对象：`{ minRows: 2, maxRows: 6 }` \|`boolean` \| `object` |
| bordered | 是否有边框 | `boolean` |
| defaultValue | 输入框默认内容 | `string` |
| maxLength | 内容最大长度 | `number` |
| showCount | 是否展示字数 | `boolean` \| `{ formatter: ({ count: number, maxLength?: number }) => string }` |
| value | 输入框内容 | string |
| onPressEnter | 按下回车的回调 | `function(e)` |
| onResize | resize 回调 | `function({ width, height })` |

Input.TextArea 的其他属性和浏览器自带的 textarea 一致。

#### Input.Search

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 addonAfter 冲突。 | `boolean` \| `ReactNode` |
| loading | 搜索 loading | `boolean` |
| onSearch | 点击搜索图标、清除图标，或按下回车键时的回调 | `function(value, event)` |

其余属性和 Input 一致。

#### Input.Group

| 属性    | 说明                                                        | 类型      | 默认值 |
| ------- | ----------------------------------------------------------- | --------- | ------ |
| compact | 是否用紧凑模式                                              | `boolean` |
| size    | Input.Group 中所有的 Input 的大小，可选 large default small | `string`  |

#### Input.Password

| 属性             | 说明             | 类型                     | 默认值 |
| ---------------- | ---------------- | ------------------------ | ------ |
| iconRender       | 自定义切换按钮   | `(visible) => ReactNode` |
| visibilityToggle | 是否显示切换按钮 | `boolean`                |

### 方法

| 名称  | 说明     |
| ----- | -------- |
| blur  | 取消焦点 |
| focus | 获取焦点 |

### 常见问题

#### 为什么我动态改变 prefix/suffix 时，Input 会失去焦点？

当 Input 动态添加或者删除 prefix/suffix 时，React 会重新创建 DOM 结构而新的 input 是没有焦点的。你可以预设一个空的 `<span />` 来保持 DOM 结构不变：

```js
const suffix = condition ? <Icon type="smile" /> : <span />;
<Input suffix={suffix} />;
```

#### 为何 TextArea 受控时，value 可以超过 maxLength？

受控时，组件应该按照受控内容展示。以防止在表单组件内使用时显示值和提交值不同的问题。
