---
nav:
  title: 组件
  path: /components
group:
  path: /components/layout
  title: 布局
title: SplitPane
subtitle: 分割面板
---

## SplitPane 分割面板

例子

<code src="./__demo__/basis.tsx"></code>

### API

| 参数             | 说明                   | 类型            | 默认值 | 版本 |
| ---------------- | ---------------------- | --------------- | ------ | ---- |
| leftReactNode    | 左边的 `React` 组件    | `ReactNode`     | -      | -    |
| title            | 左边组件的标题信息     | `ReactNode`     | -      | -    |
| extra            | 左边组件的扩展信息     | `ReactNode`     | -      | -    |
| size             | 右边组件的大小信息     | `SizeUnit`      | `20%`  | -    |
| minimumSize      | 右边最小的大小信息     | `number`        | -      |
| maximumSize      | 右边组件最大的大小信息 | `number`        |
| contentStyle     | 内容组件的样式信息     | `CSSProperties` | -      | -    |
| contentClassName | 内容组件的样式名称     | `string`        | -      | -    |
| contentTitle     | 内容组件的标题名称     | `ReactNode`     | -      | -    |
| contentExtra     | 内容组件的扩展信息     | `ReactNode`     | -      | -    |
