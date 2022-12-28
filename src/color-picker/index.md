---
nav:
  title: 组件
  path: /components
group:
  path: /components/data
  title: 数据
---

## ColorPicker 颜色选择器

用于输入颜色信息, 快速方便的选择颜色

<br />

例子:

```tsx
/**
 * title: 基本
 * description: 基础的颜色选择器
 */
import { ColorPicker } from '@weblif/fast-ui'

export default () => {
  return <ColorPicker />
}
```

```tsx
/**
 * title: 颜色面板
 * description: 可将面板放置到任意一个位置, 使用 `ColorPickerPanel`, API 见 [https://github.com/casesandberg/react-color](https://github.com/casesandberg/react-color)
 */
import { ColorPicker } from '@weblif/fast-ui'
import { useState } from 'react'

export default () => {
  const [colorValue, setColorValue] = useState<string>('#fff')

  return (
    <ColorPicker.Panel
      color={colorValue}
      width={250}
      onChange={(colorChange) => {
        setColorValue(colorChange.rgb)
      }}
    />
  )
}
```

<br />

<API></API>
