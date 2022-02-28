---
nav:
    title: 组件
    path: /components
group:
    path: /components/universal
    title: 通用
---

## Typography 排版

文本的基本格式。

<br />

例子:

```tsx
/**
 * title: 标题组件
 * desc: 展示不同级别的标题。
 */
import React from 'react';
import { Typography } from '@weblif/fast-ui';

export default () => {
    return (
        <>
            <Typography.Title>h1. Fast UI</Typography.Title>
            <Typography.Title level={2}>h2. FAST UI</Typography.Title>
            <Typography.Title level={3}>h3. FAST UI</Typography.Title>
            <Typography.Title level={4}>h4. FAST UI</Typography.Title>
            <Typography.Title level={5}>h5. FAST UI</Typography.Title>
        </>
    );
};
```

<br />

## API

### Typography.Text

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |  |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | 添加删除线样式 | boolean | false |  |
| disabled | 禁用文本 | boolean | false |  |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false | [editable](#editable) |
| ellipsis | 自动溢出省略，为对象时不能设置省略行数、是否可展开、onExpand 展开事件 | boolean \| [Omit<ellipsis, 'expandable' \| 'rows' \| 'onExpand'>](#ellipsis) | false | [ellipsis](#ellipsis) |
| keyboard | 添加键盘样式 | boolean | false |  |
| mark | 添加标记样式 | boolean | false |  |
| onClick | 点击 Text 时的回调 | (event) => void | - |  |
| strong | 是否加粗 | boolean | false |  |
| italic | 是否斜体 | boolean | false |  |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - |  |
| underline | 添加下划线样式 | boolean | false |  |

### Typography.Title

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |  |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | 添加删除线样式 | boolean | false |  |
| disabled | 禁用文本 | boolean | false |  |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false | [editable](#editable) |
| ellipsis | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis) | false | [ellipsis](#ellipsis) |
| level | 重要程度，相当于 `h1`、`h2`、`h3`、`h4`、`h5` | number: 1, 2, 3, 4, 5 | 1 | |
| mark | 添加标记样式 | boolean | false |  |
| onClick | 点击 Title 时的回调 | (event) => void | - |  |
| italic | 是否斜体 | boolean | false |  |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - |  |
| underline | 添加下划线样式 | boolean | false |  |

### Typography.Paragraph

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |  |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | 添加删除线样式 | boolean | false |  |
| disabled | 禁用文本 | boolean | false |  |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false | [editable](#editable) |
| ellipsis | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis) | false | [ellipsis](#ellipsis) |
| mark | 添加标记样式 | boolean | false |  |
| onClick | 点击 Paragraph 时的回调 | (event) => void | - |  |
| strong | 是否加粗 | boolean | false |  |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - |  |
| underline | 添加下划线样式 | boolean | false |  |

### copyable

    {
      text: string,
      onCopy: function,
      icon: ReactNode,
      tooltips: false | [ReactNode, ReactNode],
    }

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| icon | 自定义拷贝图标：\[默认图标, 拷贝后的图标] | \[ReactNode, ReactNode] | - |  |
| text | 拷贝到剪切板里的文本 | string | - |  |
| tooltips | 自定义提示文案，为 false 时隐藏文案 | \[ReactNode, ReactNode] | \[`复制`, `复制成功`] |  |
| onCopy | 拷贝成功的回调函数 | function | - |  |

### editable

    {
      icon: ReactNode,
      tooltip: boolean | ReactNode,
      editing: boolean,
      maxLength: number,
      autoSize: boolean | { minRows: number, maxRows: number },
      onStart: function,
      onChange: function(string),
      onCancel: function,
      onEnd: function,
      triggerType: ('icon' | 'text')[],
      enterIcon: ReactNode,
    }

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoSize | 自动 resize 文本域 | boolean \| { minRows: number, maxRows: number } | - |  |
| editing | 控制是否是编辑中状态 | boolean | false |  |
| icon | 自定义编辑图标 | ReactNode | &lt;EditOutlined /> |  |
| maxLength | 编辑中文本域最大长度 | number | - |  |
| tooltip | 自定义提示文本，为 false 时关闭 | boolean \| ReactNode | `编辑` |  |
| onCancel | 按 ESC 退出编辑状态时触发 | function | - |  |
| onChange | 文本域编辑时触发 | function(event) | - |  |
| onEnd | 按 ENTER 结束编辑状态时触发 | function | - |  |
| onStart | 进入编辑中状态时触发 | function | - |  |
| triggerType | Edit mode trigger - icon, text or both (not specifying icon as trigger hides it) | Array&lt;`icon`\|`text`> | \[`icon`] |  |
| enterIcon | 在编辑段中自定义“enter”图标（传递“null”将删除图标） | ReactNode | `<EnterOutlined />` |  |

### ellipsis

    {
      rows: number,
      expandable: boolean,
      suffix: string,
      symbol: ReactNode,
      tooltip: boolean | ReactNode,
      onExpand: function(event),
      onEllipsis: function(ellipsis),
    }

| 参数       | 说明                 | 类型                 | 默认值 | 版本   |
| ---------- | -------------------- | -------------------- | ------ | ------ |
| expandable | 是否可展开           | boolean              | -      |        |
| rows       | 最多显示的行数       | number               | -      |        |
| suffix     | 自定义省略内容后缀   | string               | -      |        |
| symbol     | 自定义展开描述文案   | ReactNode            | `展开` |        |
| tooltip    | 省略时，展示提示信息 | boolean \| ReactNode | -      |  |
| onEllipsis | 触发省略时的回调     | function(ellipsis)   | -      |  |
| onExpand   | 点击展开时的回调     | function(event)      | -      |        |

## FAQ

### Typography.Link 如何与 react-router 库集成？

`react-router` 支持[自定义](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md#component-reactcomponent)渲染组件：

```tsx | pure
<Link to="/" component={Typography.Link} />
```

**注意：** 这并不是和 react-router 的 Link 的执行逻辑等价 [参考](https://github.com/ant-design/ant-design/pull/26737/files#r488769888)