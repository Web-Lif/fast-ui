---
nav:
  title: 组件
  path: /components
  order: 10
group:
  path: /components/data
  title: 数据
title: Progress
subtitle: 进度条
---

## Progress 进度条

展示操作的当前进度。

<br />

例子

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 基础
 * description: 基本的时间轴。
 */
import { Progress } from '@weblif/fast-ui'

export default () => {
  return (
    <>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </>
  )
}
```

</div>
</div>

## API

各类型共用的属性。

| 属性          | 说明                                                           | 类型                                     | 默认值                     |
| ------------- | -------------------------------------------------------------- | ---------------------------------------- | -------------------------- |
| format        | 内容的模板函数                                                 | function(percent, successPercent)        | (percent) => percent + `%` |
| percent       | 百分比                                                         | number                                   | 0                          |
| showInfo      | 是否显示进度数值或状态图标                                     | boolean                                  | true                       |
| status        | 状态，可选：`success` `exception` `normal` `active`(仅限 line) | string                                   | -                          |
| strokeColor   | 进度条的色彩                                                   | string                                   | -                          |
| strokeLinecap | 进度条的样式                                                   | `round` \| `square`                      | `round`                    |
| success       | 成功进度条相关配置                                             | { percent: number, strokeColor: string } | -                          |
| trailColor    | 未完成的分段的颜色                                             | string                                   | -                          |
| type          | 类型，可选 `line` `circle` `dashboard`                         | string                                   | `line`                     |

### `type="line"`

| 属性        | 说明                               | 类型                                                      | 默认值 |
| ----------- | ---------------------------------- | --------------------------------------------------------- | ------ |
| steps       | 进度条总共步数                     | number                                                    | -      |
| strokeColor | 进度条的色彩，传入 object 时为渐变 | string \| { from: string; to: string; direction: string } | -      |
| strokeWidth | 进度条线的宽度，单位 px            | number                                                    | 10     |

### `type="circle"`

| 属性        | 说明                                             | 类型             | 默认值 |
| ----------- | ------------------------------------------------ | ---------------- | ------ |
| strokeColor | 圆形进度条线的色彩，传入 object 时为渐变         | string \| object | -      |
| strokeWidth | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number           | 6      |
| width       | 圆形进度条画布宽度，单位 px                      | number           | 132    |

### `type="dashboard"`

| 属性        | 说明                                               | 类型                                   | 默认值   |
| ----------- | -------------------------------------------------- | -------------------------------------- | -------- |
| gapDegree   | 仪表盘进度条缺口角度，可取值 0 ~ 295               | number                                 | 75       |
| gapPosition | 仪表盘进度条缺口位置                               | `top` \| `bottom` \| `left` \| `right` | `bottom` |
| strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number                                 | 6        |
| width       | 仪表盘进度条画布宽度，单位 px                      | number                                 | 132      |
