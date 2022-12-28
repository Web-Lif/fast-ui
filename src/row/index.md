---
nav:
  title: 组件
  path: /components
group:
  path: /components/layout
  title: 布局
---

## Grid 布局

协助进行页面级整体布局

例子:

```tsx
/**
 * title: 基本
 * description: 典型的页面布局。
 */
import { Col, Row } from '@weblif/fast-ui'

export default () => {
  const style = { background: '#7dbcea', height: 100 }
  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <div style={style} />
        </Col>
        <Col span={6}>
          <div style={style} />
        </Col>
        <Col span={6}>
          <div style={style} />
        </Col>
        <Col span={6}>
          <div style={style} />
        </Col>
      </Row>
    </>
  )
}
```

## API

Row

| 属性    | 说明                                                                                                                                   | 类型                                                              | 默认值  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| align   | 垂直对齐方式                                                                                                                           | `top` \| `middle` \| `bottom`                                     |
| gutter  | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 `{ xs: 8, sm: 16, md: 24}`。或者使用数组形式同时设置 [水平间距, 垂直间距] | `number` \| `object` \| `array`                                   |
| justify | 水平排列方式                                                                                                                           | `start` \| `end` \| `center` \| `space-around` \| `space-between` | `start` |
| wrap    | 是否自动换行                                                                                                                           | `true`                                                            |

Col

| 属性   | 说明                                                         | 类型                 | 默认值 |
| ------ | ------------------------------------------------------------ | -------------------- | ------ |
| flex   | flex 布局属性                                                | `string` \| `number` |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格                       | `number`             |
| order  | 栅格顺序                                                     | `number`             |
| pull   | 栅格向左移动格数                                             | `number`             |
| push   | 栅格向右移动格数                                             | `number`             |
| span   | 栅格占位格数，为 0 时相当于 display: none                    | `number`             |
| xs     | 屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number` \| `object` |
| sm     | 屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number` \| `object` |
| md     | 屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number` \| `object` |
| lg     | 屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number` \| `object` |
| xl     | 屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number` \| `object` |
| xxl    | 屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象 | `number` \| `object` |
