---
nav:
    title: 组件
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
import React, { useState, useRef } from 'react';
import { Form, Input } from '@weblif/fast-ui';

export default () => {
    return (
        <Form cols={4}>
            <Form.Item label="Field 0" key="field0" name="field0">
                <Input />
            </Form.Item>
            <Form.Item label="Field 1" name="field1" key="field1">
                <Input />
            </Form.Item>
            <Form.Item label="Field 2" name="field2" key="field2">
                <Input />
            </Form.Item>
             <Form.Item label="Field 3" name="field2" key="field3">
                <Input />
            </Form.Item>
            <Form.Item label="Field 4" key="field4" name="field4">
                <Input />
            </Form.Item>
            <Form.Item label="Field 5" name="field5" key="field5">
                <Input />
            </Form.Item>
            <Form.Item label="Field 6" name="field6" key="field6">
                <Input />
            </Form.Item>
             <Form.Item label="Field 7" name="field7" key="field7">
                <Input />
            </Form.Item>
            <Form.Item label="Field 8" name="field8" key="field8" colSpan={4}>
                <Input />
            </Form.Item>
        </Form>
    );
};
```


```tsx
/**
 * title: 强制换行
 * desc: 可通过 Form.Item 属性中的 `br` 进行强制换行
 */
import React, { useState, useRef } from 'react';
import { Form, Input } from '@weblif/fast-ui';

export default () => {
    return (
        <Form cols={4}>
            <Form.Item label="Field 0" key="field0" name="field0" br>
                <Input />
            </Form.Item>
            <Form.Item label="Field 1" name="field1" key="field1" br>
                <Input />
            </Form.Item>
            <Form.Item label="Field 2" name="field2" key="field2" br>
                <Input />
            </Form.Item>
            <Form.Item label="Field 4" name="field4" key="field4" colSpan={4}>
                <Input />
            </Form.Item>
        </Form>
    );
};
```

```tsx
/**
 * title: JSON Form
 * desc: 通过 `JSON` 数据动态生成表单
 */
import React, { useState, useEffect, useRef } from 'react';
import { Form, Modal, Input, Button, InputNumber,JSONFormsData, ModalInstance } from '@weblif/fast-ui';

const JSON_DATA = {
    cols: 4,
    fields: [{
        name: 'field0',
        label: 'Field 0'
    },{
        name: 'field1',
        label: 'Field 1'
    },{
        name: 'field2',
        label: 'Field 2'
    },{
        name: 'field3',
        label: 'Field 3'
    },{
        name: 'field4',
        label: 'Field 4'
    },{
        name: 'field5',
        label: 'Field 5'
    },{
        name: 'field6',
        label: 'Field 6'
    },{
        name: 'field7',
        label: 'Field 7',
        editor: 'number'
    }]
}

export default () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<string>(JSON_DATA);

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <Button
                onClick={() => {
                    setVisible(true)
                }}
            >
                修改 JSON 数据进行动态加载
            </Button>
            
            <br />
            <br />
            <Form.DynamicJSONForm
                data={data}
                extendEditors={[{
                    name: 'number',
                    editor: <InputNumber />
                }]}
            />
            <Modal
                title="输入的JSON数据"
                visible={visible}
                onChangeVisible={setVisible}

            >
                <Input.TextArea
                    defaultValue={JSON.stringify(data, null, 2)}
                    style={{
                        height: 400
                    }}
                    onChange={value => {
                        try{
                            setData(JSON.parse(value))
                        }catch(e) {
                        }
                    }}
                />
            </Modal>
        </>
    )
};
```
<br />

## Form

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cols | 一行显示多少列, 如果配置此属性, 就会按照传统 Form 方式进行布局 | `number` | - |
| colon | 配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | `boolean` | `true` |
| component | 设置 Form 渲染元素，为 false 则不创建 DOM 节点 | `ComponentType` \| `false` | `form` |
| fields | 通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看 | `FieldData[]` | - |
| form | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建 | `FormInstance` | - |
| initialValues | 表单默认值，只有初始化以及重置时生效 | `object` | - |
| labelAlign | label 标签的文本对齐方式 | `left` \| `right` | `right` |
| labelWrap | label 标签的文本换行方式 | `boolean` | `false` |
| labelCol | label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12} | `object` | - |
| layout | 表单布局 | `horizontal` \| `vertical` \| `inline` | `horizontal` |
| name | 表单名称，会作为表单字段 id 前缀使用 | `string` | - |
| preserve | 当字段被删除时保留字段值 | `boolean` | `true` |
| requiredMark | 必选样式，可以切换为必选或者可选展示样式。此为 Form 配置，Form.Item 无法单独配置 | `boolean` \| `optional` | `true` |
| scrollToFirstError | 提交失败自动滚动到第一个错误字段 | `boolean` \| `Options` | `false` |
| size | 设置字段组件的尺寸（仅限 antd 组件） | `small` \| `middle` \| `large` | - |
| validateMessages | 验证提示模板，说明 | `ValidateMessages` | - |
| validateTrigger | 统一设置字段触发验证的时机 | `string` \| `string[]` | `onChange` |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | `object` |
| onFieldsChange | 字段更新时触发回调事件 | `function(changedFields, allFields)` | - |
| onFinish | 提交表单且数据验证成功后回调事件 | `function(values)` | - |
| onFinishFailed | 提交表单且数据验证失败后回调事件 | `function({ values, errorFields, outOfDate })` | - |
| onValuesChange | 字段值更新时触发回调事件 | `function(changedValues, allValues)` | - |

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

## Form.Item

表单字段组件，用于数据双向绑定、校验、布局等。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colon | 配合 label 属性使用，表示是否显示 label 后面的冒号 | `boolean` | - |
| dependencies | 设置依赖字段，说明见下 | `NamePath[]` | - |
| extra | 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 | `ReactNode` | - |
| getValueFromEvent | 设置如何将 event 的值转换成字段值 | `(..args: any[]) => any` | - |
| getValueProps | 为子元素添加额外的属性 | `(value: any) => any` | - |
| hasFeedback | 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用 | `boolean` | - |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | `ReactNode` | - |
| hidden | 是否隐藏字段（依然会收集和校验字段） | `boolean` | - |
| htmlFor | 设置子元素 label htmlFor 属性 | `string` | - |
| initialValue | 设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准 | `string` | - |
| label | label 标签的文本 | `ReactNode` | - |
| labelAlign | 标签文本对齐方式 | `left` \| `right` | - |
| labelCol | label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}。你可以通过 Form 的 labelCol 进行统一设置，，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 | `object` | - |
| messageVariables | 默认验证字段的信息 | `Record<string, string>` | - |
| name | 字段名，支持数组 | `NamePath` | - |
| normalize | 组件获取值后进行转换，再放入 Form 中。不支持异步 | `(value, prevValue, prevValues) => any` | - |
| noStyle | 为 true 时不带样式，作为纯字段控件使用 | `boolean` | - |
| preserve | 当字段被删除时保留字段值 | `boolean` | `true` |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | `boolean` | - |
| rules | 校验规则，设置字段的校验逻辑 | `Rule[]` | - |
| shouldUpdate | 自定义字段更新逻辑 | `boolean` \| `(prevValue, curValue) => boolean` | - |
| tooltip | 配置提示信息 | `ReactNode` \| `TooltipProps & { icon: ReactNode }` | - |
| trigger | 设置收集字段值变更的时机。 | `string` | - |
| validateFirst | 当某一规则校验不通过时，是否停止剩下的规则的校验。设置 parallel 时会并行校验 | `boolean` \| `parallel` |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating' | `string` |
| validateTrigger | 设置字段校验的时机 | `string` \| `string[]` |
| valuePropName | 子节点的值的属性，如 Switch 的是 'checked'。该属性为 getValueProps 的封装，自定义 getValueProps 后会失效 | `string` |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol。你可以通过 Form 的 wrapperCol 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 | `object` | - |

被设置了 name 属性的 Form.Item 包装的控件，表单控件会自动添加 value（或 valuePropName 指定的其他属性） onChange（或 trigger 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果：

1. 你不再需要也不应该用 onChange 来做数据收集同步（你可以使用 Form 的 onValuesChange），但还是可以继续监听 onChange 事件。
2. 你不能用控件的 value 或 defaultValue 等属性来设置表单域的值，默认值可以用 Form 里的 initialValues 来设置。注意 initialValues 不能被 setState 动态更新，你需要用 setFieldsValue 来更新。
3. 你不应该用 setState，可以使用 form.setFieldsValue 来动态改变表单值。

### dependencies

当字段间存在依赖关系时使用。如果一个字段设置了 dependencies 属性。那么它所依赖的字段更新时，该字段将自动触发更新与校验。一种常见的场景，就是注册用户表单的“密码”与“确认密码”字段。“确认密码”校验依赖于“密码”字段，设置 dependencies 后，“密码”字段更新会重新触发“校验密码”的校验逻辑。你可以参考具体例子。

dependencies 不应和 shouldUpdate 一起使用，因为这可能带来更新逻辑的混乱。

dependencies 支持使用 render props 类型 children 的 Form.Item。

### shouldUpdate

Form 通过增量更新方式，只更新被修改的字段相关组件以达到性能优化目的。大部分场景下，你只需要编写代码或者与 `dependencies` 属性配合校验即可。而在某些特定场景，例如修改某个字段值后出现新的字段选项、或者纯粹希望表单任意变化都对某一个区域进行渲染。你可以通过 shouldUpdate 修改 Form.Item 的更新逻辑。

当 `shouldUpdate` 为 `true` 时，Form 的任意变化都会使该 Form.Item 重新渲染。这对于自定义渲染一些区域十分有帮助：

```tsx | pure
<Form.Item shouldUpdate>
    {() => {
        return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
    }}
</Form.Item>
```

当 shouldUpdate 为方法时，表单的每次数值更新都会调用该方法，提供原先的值与当前的值以供你比较是否需要更新。这对于是否根据值来渲染额外字段十分有帮助：

```tsx | pure
<Form.Item shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}>
    {() => {
        return (
            <Form.Item name="other">
                <Input />
            </Form.Item>
        );
    }}
</Form.Item>
```

### messageVariables

你可以通过 messageVariables 修改 Form.Item 的默认验证信息。

```tsx | pure
<Form>
    <Form.Item messageVariables={{ another: 'good' }} label="user">
        <Input />
    </Form.Item>
    <Form.Item messageVariables={{ label: 'good' }} label={<span>user</span>}>
        <Input />
    </Form.Item>
</Form>
```
