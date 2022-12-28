---
nav:
  title: 组件
  path: /components
group:
  path: /components/data
  title: 数据
title: Image
subtitle: 图片
---

## Image 图片

可预览的图片。

<br />

例子:

```tsx
/**
 * title: 基本
 * description: 图片的基础用法
 */
import { Image } from '@weblif/fast-ui'

export default () => {
  return (
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  )
}
```

## API

| 参数        | 说明                               | 类型                                   | 默认值 | 版本                        |
| ----------- | ---------------------------------- | -------------------------------------- | ------ | --------------------------- |
| alt         | 图像描述                           | string                                 | -      |                             |
| fallback    | 加载失败容错地址                   | string                                 | -      |                             |
| height      | 图像高度                           | string \| number                       | -      |                             |
| placeholder | 加载占位, 为 `true` 时使用默认占位 | ReactNode                              | -      |                             |
| preview     | 预览参数，为 `false` 时禁用        | boolean \| [previewType](#previewType) | true   | [previewType](#previewType) |
| src         | 图片地址                           | string                                 | -      |                             |
| width       | 图像宽度                           | string \| number                       | -      |                             |
| onError     | 加载错误回调                       | (event: Event) => void                 | -      |                             |

### previewType

```js | pure
{
  visible?: boolean;
  onVisibleChange?: (visible, prevVisible) => void;
  getContainer?: string | HTMLElement | (() => HTMLElement);
  src?: string;
  mask?: ReactNode;
  maskClassName?: string;
  current?: number;
```

其他属性见 [&lt;img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)
