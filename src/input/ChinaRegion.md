---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## ChinaRegion 地区选择

用于选择中国地区

<br />

例子:

```tsx
/**
 * title: 基本
 * desc: 基础的颜色选择器
 */
import React, { useState, useRef } from 'react';
import { ChinaRegion } from '@weblif/fast-ui';

export default () => {
    return (
        <ChinaRegion  />
    );
};
```

<br />

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否支持清除 | boolean | true |  |
| autoFocus | 自动获取焦点 | boolean | false |  |
| bordered | 是否有边框 | boolean | true |  |
| changeOnSelect | （单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | boolean | false |  |
| className | 自定义类名 | string | - |  |
| defaultValue | 默认的选中项 | string\[] \| number\[] | \[] |  |
| disabled | 禁用 | boolean | false |  |
| displayRender | 选择后展示的渲染函数 | (label, selectedOptions) => ReactNode | label => label.join(`/`) |  |
| dropdownClassName | 自定义浮层类名 | string | - |  |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - |  |
| expandIcon | 自定义次级菜单展开图标 | ReactNode | - |  |
| expandTrigger | 次级菜单的展开方式，可选 'click' 和 'hover' | string | `click` |  |
| fieldNames | 自定义 options 中 label value children 的字段 | object | { label: `label`, value: `value`, children: `children` } |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | function(triggerNode) | () => document.body |  |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - |  |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - |  |
| notFoundContent | 当下拉列表为空时显示的内容 | string | `Not Found` |  |
| open | 控制浮层显隐 | boolean | - |  |
| placeholder | 输入框占位文本 | string | `请选择` |  |
| placement | 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` | string | `bottomLeft` |  |
| showSearch | 在选择框中显示搜索框 | boolean \| [Object](#showSearch) | false |  |
| size | 输入框大小 | `large` \| `middle` \| `small` | - |  |
| style | 自定义样式 | CSSProperties | - |  |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |  |
| tagRender | 自定义 tag 内容，多选时生效 | (props) => ReactNode | - |  |
| value | 指定选中项 | string\[] \| number\[] | - |  |
| onChange | 选择完成后的回调 | (value, selectedOptions) => void | - |  |
| onDropdownVisibleChange | 显示/隐藏浮层的回调 | (value) => void | - |  |
| multiple | 支持多选节点 | boolean | - |  |
| searchValue | 设置搜索的值，需要与 `showSearch` 配合使用 | string | - |  |
| onSearch | 监听搜索，返回输入的值 | (search: string) => void | - |  |
| dropdownMenuColumnStyle | 下拉菜单列的样式 | CSSProperties | - |  |

### showSearch

`showSearch` 为对象时，其中的字段：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| filter | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false | function(inputValue, path): boolean | - |  |
| limit | 搜索结果展示数量 | number \| false | 50 |  |
| matchInputWidth | 搜索结果列表是否与输入框同宽（[效果](https://github.com/ant-design/ant-design/issues/25779)） | boolean | true |  |
| render | 用于渲染 filter 后的选项 | function(inputValue, path): ReactNode | - |  |
| sort | 用于排序 filter 后的选项 | function(a, b, inputValue) | - |  |

### Option

```typescript | pure
interface Option {
  value: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean;
}
```

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
