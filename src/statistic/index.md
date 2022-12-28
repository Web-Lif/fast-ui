---
nav:
  title: 组件
  path: /components
  order: 10
group:
  path: /components/data
  title: 数据
title: Statistic
subtitle: 统计数值
---

## Statistic 统计数值

展示统计数值。

<br />

例子:

```tsx
/**
 * title: 基础使用
 * description: 最简单的用法。
 */
import { Button, Col, Row, Statistic } from '@weblif/fast-ui'

export default () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
        <Button style={{ marginTop: 16 }} type="primary">
          Recharge
        </Button>
      </Col>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} loading />
      </Col>
    </Row>
  )
}
```

## API

#### Statistic

| 参数             | 说明             | 类型                 | 默认值 | 版本 |
| ---------------- | ---------------- | -------------------- | ------ | ---- |
| decimalSeparator | 设置小数点       | string               | `.`    |      |
| formatter        | 自定义数值展示   | (value) => ReactNode | -      |      |
| groupSeparator   | 设置千分位标识符 | string               | `,`    |      |
| loading          | 数值是否加载中   | boolean              | false  |      |
| precision        | 数值精度         | number               | -      |      |
| prefix           | 设置数值的前缀   | ReactNode            | -      |      |
| suffix           | 设置数值的后缀   | ReactNode            | -      |      |
| title            | 数值的标题       | ReactNode            | -      |      |
| value            | 数值内容         | string \| number     | -      |      |
| valueStyle       | 设置数值的样式   | CSSProperties        | -      |      |

#### Statistic.Countdown

| 参数       | 说明                 | 类型                    | 默认值     | 版本 |
| ---------- | -------------------- | ----------------------- | ---------- | ---- |
| format     | 格式化倒计时展示     | string                  | `HH:mm:ss` |      |
| prefix     | 设置数值的前缀       | ReactNode               | -          |      |
| suffix     | 设置数值的后缀       | ReactNode               | -          |      |
| title      | 数值的标题           | ReactNode               | -          |      |
| value      | 数值内容             | number \| moment        | -          |      |
| valueStyle | 设置数值的样式       | CSSProperties           | -          |      |
| onFinish   | 倒计时完成时触发     | () => void              | -          |      |
| onChange   | 倒计时时间变化时触发 | (value: number) => void | -          |      |
