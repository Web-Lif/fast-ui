---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## Table 表格

展示行列数据。

### 何时使用

-   当有大量结构化的数据需要展现时；
-   当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

### 功能

-   [x] 虚拟滚动
-   [x] 固定列左边/右边
-   [x] 表格行的单选/多选模式
-   [x] 空数据显示渲染
-   [x] 点击表格头部进行单列排序
-   [x] 点击单元格进行编辑
-   [x] 表格分页配置
-   [x] 自定义显示/隐藏列信息
-   [x] 表格菜单栏的固定列配置
-   [ ] 表格进行本地/远程筛选
-   [ ] 表头分组
-   [ ] 总结栏
-   [ ] 表格的行/列合并
-   [ ] 表格行在单选和多选模式进行全选/反选
-   [ ] 表格可展开行

<br />

例子:

<code src="./__demo__/simple.tsx"></code>

<code src="./__demo__/selectRow.tsx"></code>

<code src="./__demo__/pagination.tsx"></code>

<code src="./__demo__/row-edit.tsx"></code>

<code src="./__demo__/sort.tsx"></code>

<code src="./__demo__/emptyRows.tsx"></code>

<code src="./__demo__/virtualscroll.tsx"></code>

<br />

<API></API>

## Column

| 属性名                | 描述                 | 类型                                                                  | 默认值 |
| --------------------- | -------------------- | --------------------------------------------------------------------- | ------ |
| name                  | 字段名称             | `string`                                                              | `必选` |
| title                 | 显示的标题           | `string`                                                              | `必选` |
| width                 | 列的宽度信息         | `number`                                                              | -      |
| fixed                 | 固定列的方向         | `'left'` \| `'right'`                                                 | -      |
| readOnly              | 是否只读             | `boolean`                                                             | -      |
| resizable             | 是否可拖拽改变宽度   | `boolean`                                                             | -      |
| align                 | 列的对齐方式         | `{ header?: AlignType, body?: AlignType \| ((row: T) => AlignType) }` | -      |
| editor                | 编辑器               | `(renderType: EditRenderType<T>) => ReactElement`                     | -      |
| render                | 渲染单元格           | `(renderType: RenderType<T>) => ReactElement`                         | -      |
| allowCellSelectBorder | 是否允许单元格被选中 | `((param: AllowCellSelectBorderParam<T>) => boolean) \| boolean`      |

|
