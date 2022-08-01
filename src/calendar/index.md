---
nav:
  title: 组件
  path: /components
  order: 10
group:
  path: /components/data
  title: 数据
---

## Calendar 日历

按照日历形式展示数据的容器。

```tsx
/**
 * title: 基础使用
 * desc: 最简单的用法。
 */
import { Calendar } from '@weblif/fast-ui'
import React from 'react'

export default () => {
  return <Calendar />
}
```

## API

| 参数                | 说明                                                                                                                | 类型                                                                           | 默认值  | 版本 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------- | ---- |
| dateCellRender      | 自定义渲染日期单元格，返回内容会被追加到单元格                                                                      | function(date: Date): ReactNode                                                | -       |      |
| dateFullCellRender  | 自定义渲染日期单元格，返回内容覆盖单元格                                                                            | function(date: Date): ReactNode                                                | -       |      |
| defaultValue        | 默认展示的日期                                                                                                      | `Date`                                                                         | -       |      |
| disabledDate        | 不可选择的日期，参数为当前 `value`，注意使用时[不要直接修改](https://github.com/ant-design/ant-design/issues/30987) | (currentDate: Date) => boolean                                                 | -       |      |
| fullscreen          | 是否全屏显示                                                                                                        | boolean                                                                        | true    |      |
| headerRender        | 自定义头部内容                                                                                                      | function(object:{value: Date, type: string, onChange: f(), onTypeChange: f()}) | -       |      |
| locale              | 国际化配置                                                                                                          | object                                                                         |         |      |
| mode                | 初始模式                                                                                                            | `month` \| `year`                                                              | `month` |      |
| monthCellRender     | 自定义渲染月单元格，返回内容会被追加到单元格                                                                        | function(date: Date): ReactNode                                                | -       |      |
| monthFullCellRender | 自定义渲染月单元格，返回内容覆盖单元格                                                                              | function(date: Date): ReactNode                                                | -       |      |
| validRange          | 设置可以显示的日期                                                                                                  | `Date`                                                                         | -       |      |
| value               | 展示日期                                                                                                            | `Date`                                                                         | -       |      |
| onChange            | 日期变化回调                                                                                                        | function(date: Date)                                                           | -       |      |
| onPanelChange       | 日期面板变化回调                                                                                                    | function(date: Date, mode: string)                                             | -       |      |
| onSelect            | 点击选择日期回调                                                                                                    | function(date: Date）                                                          | -       |      |
