## 0.29.8

`2022-11-10`

- Table
  - 🐞 修复表格刷新后,滚动条导致表格白屏的问题

## 0.29.7

`2022-11-9`

- Button
  - 🐞 修复点击的时候会和 disabled 属性冲突, 导致 disabled 属性没有按照预期行为生效

## 0.29.6

`2022-10-27`

- Table
  - 🐞 修复表格刷新后,滚动条导致表格白屏的问题

## 0.29.5

`2022-9-15`

- Table
  - 🐞 删除 `debugger` 关键字

## 0.29.4

`2022-9-15`

- Table
  - 🐞 修复禁用选中后, 仍然可以点击行进行修改状态
  - 🆕 添加 `allowSingleSelectNonEmpty` 来控制单选是否允许不为空

## 0.29.3

`2022-9-9`

- Table
  - 🐞 修复表格点击头部的时候会触发选择事件 [#275](https://github.com/Web-Lif/fast-ui/pull/275) [@robothot](https://github.com/robothot)

## 0.29.2

`2022-8-8`

- Table
  - 🐞 修复表格滚动的时候，单元格没有正常显示的问题 [#255](https://github.com/Web-Lif/fast-ui/pull/255) [@robothot](https://github.com/robothot)

## 0.29.1

`2022-8-8`

- Table
  - 🆕 在表格中, 可以使用 CSS var 来进行自定义表格样式 [#254](https://github.com/Web-Lif/fast-ui/pull/254) [@robothot](https://github.com/robothot)

## 0.29.0

`2022-8-3`

- Table
  - 🆕 添加汇总栏的功能 [#249](https://github.com/Web-Lif/fast-ui/pull/249) [@robothot](https://github.com/robothot)
  - 🔥 将 `Column` 类型中的 `summary`, `editor`, `render` 返回值改成 `ReactNode` [#249](https://github.com/Web-Lif/fast-ui/pull/249) [@robothot](https://github.com/robothot)

## 0.28.3

`2022-8-2`

- 🐞 修复 `Input` 中无法正确获取 `ref` 对象 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)
- 🐞 修复 `TextArea` 中无法正确获取 `ref` 对象 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)
- 🐞 修复 `Button` 中无法正确获取 `ref` 对象 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)
- 🐞 修复 `Card` 中无法正确获取 `ref` 对象 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)
- 🐞 修复 `InputNumber` 中无法正确获取 `ref` 对象 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)
- 🐞 修复 `Radio` 中无法正确获取 `ref` 对象 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)
- 🐞 修复 `Rate` 中无法正确获取 `ref` 对象 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)
- 🐞 修复 `Switch` 中无法正确获取 `ref` 对象 [#246](https://github.com/Web-Lif/fast-ui/pull/246) [@robothot](https://github.com/robothot)

## 0.28.2

`2022-8-1`

- ⚡️ 采用 `react/jsx-runtime` 进行转义, 略微改善 bundle 的大小 [#243](https://github.com/Web-Lif/fast-ui/pull/243) [@robothot](https://github.com/robothot)

## 0.28.1

`2022-8-1`

- 🐞 修复 `Table` 表格的 `rowSelection.clickModel` 模式在 `single` 模式下未生效的问题 [#242](https://github.com/Web-Lif/fast-ui/pull/242) [@robothot](https://github.com/robothot)

## 0.28.0

`2022-8-1`

- Collapse
  - 🆕 添加 `Collapse` 支持百分比高度布局 [#228](https://github.com/Web-Lif/fast-ui/pull/228) [@robothot](https://github.com/robothot)
- Card
  - 🆕 添加 `Card` 支持百分比高度布局 [#235](https://github.com/Web-Lif/fast-ui/pull/235) [@robothot](https://github.com/robothot)
- Tabs
  - 🆕 添加 `Tabs` 支持百分比高度布局 [#240](https://github.com/Web-Lif/fast-ui/pull/240) [@robothot](https://github.com/robothot)
