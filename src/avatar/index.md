---
nav:
    title: 组件
    path: /components
group:
    path: /components/data
    title: 数据
---

## Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 基础使用
 * desc: 最简单的用法。
 */
import React from 'react';
import { Avatar } from '@weblif/fast-ui';
import { UserOutlined } from '@ant-design/icons';

export default () => {
    return (
        <div>
            <Avatar size={64} icon={<UserOutlined />} style={{ marginRight: 20 }} />
            <Avatar size="large" icon={<UserOutlined />} style={{ marginRight: 20 }} />
            <Avatar icon={<UserOutlined />} style={{ marginRight: 20 }} />
            <Avatar size="small" icon={<UserOutlined />} style={{ marginRight: 20 }} />
        </div>
    );
};
```

</div>

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 类型
 * desc: 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
 */
import React from 'react';
import { Avatar } from '@weblif/fast-ui';
import { UserOutlined } from '@ant-design/icons';
import { Image } from 'antd';

export default () => {
    return (
        <div>
            <Avatar icon={<UserOutlined />} style={{ marginRight: 20 }} />
            <Avatar style={{ marginRight: 20 }}>U</Avatar>
            <Avatar size={40} style={{ marginRight: 20 }}>
                USER
            </Avatar>
            <Avatar src="https://joeschmoe.io/api/v1/random" style={{ marginRight: 20 }} />
            <Avatar
                src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />}
                style={{ marginRight: 20 }}
            />
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginRight: 20 }}>
                U
            </Avatar>
            <Avatar
                style={{ backgroundColor: '#87d068', marginRight: 20 }}
                icon={<UserOutlined />}
            />
        </div>
    );
};
```

</div>
</div>

### Avatar

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| alt | 图像无法显示时的替代文本 | `string` | - |
| gap | 字符类型距离左右两侧边界单位像素 | `number` | `4` |
| icon | 设置头像的自定义图标 | `ReactNode` | - |
| shape | 指定头像的形状 | `circle` \| `square` | `circle` |
| size | 设置头像的大小 | `number` \| `large` \| `small` \| `default` \| `{ xs: number, sm: number, ...}` | `default` |
| src | 图片类头像的资源地址或者图片元素 | `string` \| `ReactNode` | - |
| srcSet | 设置图片类头像响应式资源地址 | `string` | - |
| draggable | 图片是否允许拖动 | `boolean` \| `true` \| `false` | - |
| crossOrigin | CORS 属性设置 | `anonymous` \| `use-credentials` \| `''` | - |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | `() => boolean` | - |

### Avatar.Group (4.5.0+)

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxCount | 显示的最大头像个数 | `number` | - |
| maxPopoverPlacement | 多余头像气泡弹出位置 | `top` \| `bottom` | `top` |
| maxPopoverTrigger | 设置多余头像 `Popover` 的触发方式 | `hover` \| `focus` \| `click` | `hover` |
| maxStyle | 多余头像样式 | `CSSProperties` | - |
| size | 设置头像的大小 | `number` \| `large` \| `small` \| `default` \| `{ xs: number, sm: number, ...}` | `default` |
