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
 * desc: 基础的颜色选择器
 */
import React, { useState, useRef } from 'react';
import { ColorPicker } from '@weblif/fast-ui';

export default () => {
    return (
        <ColorPicker />
    );
};
```

<br />

<API src="./ColorPicker.tsx"></API>