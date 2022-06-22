---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## QRCode 二维码

生成和显示二维码信息

例子

<br />

<code src="./__demo__/basis.tsx"></code>

## API

| 属性名        | 描述           | 类型                     | 默认值    |
| ------------- | -------------- | ------------------------ | --------- |
| value         | 二维码值       | `string`                 | ''        |
| size          | 大小           | `number`                 | 128       |
| bgColor       | 背景颜色值     | `string`                 | "#FFFFFF" |
| fgColor       | 颜色值         | `string`                 | "#000000" |
| level         | 级别           | 'L' \| 'M' \| 'Q' \| 'H' | "L"       |
| includeMargin | 是否包含外边距 | `boolean`                | false     |
| imageSettings | 图像设置       | `ImageSettings`          | -         |

### ImageSettings

| 属性名   | 描述                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| src      | 源                         | `string`  | -       |
| x        | x 坐标                     | `number`  | -       |
| y        | y 坐标                     | `number`  | -       |
| height   | 高度                       | `number`  | -       |
| width    | 宽度                       | `number`  | -       |
| excavate | 是否将图片置于二维码最顶层 | `boolean` | `false` |
