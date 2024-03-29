---
nav:
  title: 组件
  path: /components
group:
  path: /components/data
  title: 数据
title: QRCode
subtitle: 二维码
---

## QRCode 二维码

生成和显示二维码信息

例子

<br />

<code src="./__demo__/basis.tsx"></code>

## API

| 属性名     | 描述                                     | 类型                               | 默认值   |
| ---------- | ---------------------------------------- | ---------------------------------- | -------- |
| value      | 扫描后的地址                             | `string`                           | -        |
| icon       | 二维码中图片的地址（目前只支持图片地址） | `string`                           | -        |
| size       | 二维码大小                               | `number`                           | 160      |
| iconSize   | 二维码中图片的大小                       | `number`                           | 40       |
| color      | 二维码颜色                               | `string`                           | `#000`   |
| bordered   | 是否有边框                               | `boolean`                          | `true`   |
| errorLevel | 二维码纠错等级                           | `'L'` \| `'M'` \| `'Q'` \| `'H'`   | `M`      |
| status     | 二维码状态                               | `active` \| `expired` \| `loading` | `active` |
| onRefresh  | 点击"点击刷新"的回调                     | `() => void`                       | -        |

## FAQ

#### 关于二维码纠错等级

纠错等级也叫纠错率，就是指二维码可以被遮挡后还能正常扫描，而这个能被遮挡的最大面积就是纠错率。

通常情况下二维码分为 4 个纠错级别：L 级 可纠正约 7% 错误、M 级 可纠正约 15% 错误、Q 级 可纠正约 25% 错误、H 级 可纠正约 30% 错误。并不是所有位置都可以缺损，像最明显的三个角上的方框，直接影响初始定位。中间零散的部分是内容编码，可以容忍缺损。当二维码的内容编码携带信息比较少的时候，也就是链接比较短的时候，设置不同的纠错等级，生成的图片不会发生变化。

> 有关更多信息，可参阅相关资料：https://www.qrcode.com/zh/about/error_correction
