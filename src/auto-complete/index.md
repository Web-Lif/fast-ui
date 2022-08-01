---
nav:
  title: 组件
  path: /components
group:
  path: /components/data
  title: 数据
---

## AutoComplete 自动完成

输入框自动完成功能。

## 何时使用

- 需要一个输入框而不是选择器。
- 需要输入建议/辅助提示。

和 Select 的区别是：

- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助**输入**。
- Select 是在限定的可选项中进行选择，关键词是**选择**。

例子:

<code src="./__demo__/simple.tsx"></code>

## API

| 参数                        | 说明                                                                                                                                            | 类型                                                                               | 默认值              | 版本 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------- | ---- |
| allowClear                  | 支持清除                                                                                                                                        | boolean                                                                            | false               |      |
| autoFocus                   | 自动获取焦点                                                                                                                                    | boolean                                                                            | false               |      |
| backfill                    | 使用键盘选择选项的时候把选中项回填到输入框中                                                                                                    | boolean                                                                            | false               |      |
| children (自动完成的数据源) | 自动完成的数据源                                                                                                                                | React.ReactElement&lt;OptionProps> \| Array&lt;React.ReactElement&lt;OptionProps>> | -                   |      |
| children (自定义输入框)     | 自定义输入框                                                                                                                                    | HTMLInputElement \| HTMLTextAreaElement \| React.ReactElement&lt;InputProps>       | &lt;Input />        |      |
| defaultActiveFirstOption    | 是否默认高亮第一个选项                                                                                                                          | boolean                                                                            | true                |      |
| defaultOpen                 | 是否默认展开下拉菜单                                                                                                                            | boolean                                                                            | -                   |      |
| defaultValue                | 指定默认选中的条目                                                                                                                              | string                                                                             | -                   |      |
| disabled                    | 是否禁用                                                                                                                                        | boolean                                                                            | false               |      |
| dropdownClassName           | 下拉菜单的 className 属性                                                                                                                       | string                                                                             | -                   |      |
| dropdownMatchSelectWidth    | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动                                              | boolean \| number                                                                  | true                |      |
| filterOption                | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false      | boolean \| function(inputValue, option)                                            | true                |      |
| getPopupContainer           | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode)                                                              | () => document.body |      |
| notFoundContent             | 当下拉列表为空时显示的内容                                                                                                                      | ReactNode                                                                          | -                   |      |
| open                        | 是否展开下拉菜单                                                                                                                                | boolean                                                                            | -                   |      |
| options                     | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能                                                                                           | { label, value }\[]                                                                | -                   |      |
| placeholder                 | 输入框提示                                                                                                                                      | string                                                                             | -                   |      |
| status                      | 设置校验状态                                                                                                                                    | 'error' \| 'warning'                                                               | -                   |      |
| value                       | 指定当前选中的条目                                                                                                                              | string                                                                             | -                   |      |
| onBlur                      | 失去焦点时的回调                                                                                                                                | function()                                                                         | -                   |      |
| onChange                    | 选中 option，或 input 的 value 变化时，调用此函数                                                                                               | function(value)                                                                    | -                   |      |
| onDropdownVisibleChange     | 展开下拉菜单的回调                                                                                                                              | function(open)                                                                     | -                   |      |
| onFocus                     | 获得焦点时的回调                                                                                                                                | function()                                                                         | -                   |      |
| onSearch                    | 搜索补全项的时候调用                                                                                                                            | function(value)                                                                    | -                   |      |
| onSelect                    | 被选中时调用，参数为选中项的 value 值                                                                                                           | function(value, option)                                                            | -                   |      |
| onClear                     | 清除内容时回调                                                                                                                                  | function                                                                           | -                   |      |

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
