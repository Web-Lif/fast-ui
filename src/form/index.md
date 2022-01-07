---
nav:
    title: Components
    path: /components
group:
    path: /components/data
    title: 数据
---

## Form 表单

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。

<br />

例子: 

```tsx
/**
 * title: Form 基础用法
 * desc: 通过 `cols` 和 `colSpan` 以及 `rowSpan` 作为表单的简单布局
 */
import React, { useState, useRef} from 'react';
import { Form } from '@weblif/fast-ui';
import { Input } from 'antd'
import 'antd/dist/antd.css';

export default () => {
    return (
        <Form
            cols={4}
        >
            <Form.Item
                label="Field 0"
                key="field0"
                name="field0"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Field 1"
                name="field1"
                key="field1"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Field 2"
                name="field2"
                key="field2"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Field 3"
                name="field3"
                key="field3"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Field 4"
                name="field4"
                key="field4"
                colSpan={2}
            >
                <Input />
            </Form.Item>
        </Form>
    )
}
```

<br />

| 属性                 | 说明                       | 类型      |  默认值
|----                 |----                       |----      |-------
|cols                 | 一行显示多少列, 如果配置此属性, 就会按照传统 Form 方式进行布局 | `number` | -
|colon                | 配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | `boolean` | `true`
|component            | 设置 Form 渲染元素，为 false 则不创建 DOM 节点 | `ComponentType` \| `false` | `form`
|fields               |	通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看 | `FieldData[]` | -
|form                 | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建 | `FormInstance` | -
|initialValues        | 表单默认值，只有初始化以及重置时生效 | `object` | -
|labelAlign           | label 标签的文本对齐方式 | `left` \| `right` | `right`
|labelWrap            | label 标签的文本换行方式 | `boolean` | `false`
|labelCol             | label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12} | `object` | -
|layout               | 表单布局 | `horizontal` \| `vertical` \| `inline` | `horizontal`
|name                 | 表单名称，会作为表单字段 id 前缀使用 | `string` | -
|preserve             | 当字段被删除时保留字段值 | `boolean` | `true`
|requiredMark         |	必选样式，可以切换为必选或者可选展示样式。此为 Form 配置，Form.Item 无法单独配置 | `boolean` \| `optional` | `true`
|scrollToFirstError   | 提交失败自动滚动到第一个错误字段 | `boolean` \| `Options` | `false`
|size                 | 设置字段组件的尺寸（仅限 antd 组件）| `small` \| `middle` \| `large` | -
|validateMessages     | 验证提示模板，说明   | `ValidateMessages` | -
|validateTrigger      | 统一设置字段触发验证的时机 | `string` \| `string[]` | `onChange`
|wrapperCol           | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | `object`
|onFieldsChange       | 字段更新时触发回调事件 | `function(changedFields, allFields)` | -
|onFinish             | 提交表单且数据验证成功后回调事件 | `function(values)` | -
|onFinishFailed       | 提交表单且数据验证失败后回调事件 | `function({ values, errorFields, outOfDate })` | -
|onValuesChange       | 字段值更新时触发回调事件 | `function(changedValues, allValues)` | -

### validateMessages

Form 为验证提供了默认的错误提示信息，你可以通过配置 validateMessages 属性，修改对应的提示模板。一种常见的使用方式，是配置国际化提示信息：

```js
const validateMessages = {
  required: "'${name}' 是必选字段",
  // ...
};

<Form validateMessages={validateMessages} />;
```

此外，ConfigProvider 也提供了全局化配置方案，允许统一配置错误提示模板：

```js
const validateMessages = {
  required: "'${name}' 是必选字段",
  // ...
};

<ConfigProvider form={{ validateMessages }}>
  <Form />
</ConfigProvider>;
```