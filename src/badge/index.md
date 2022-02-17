---
nav:
    title: 组件
    path: /components
    order: 10
group:
    path: /components/data
    title: 数据
---

## Badge 徽标数

图标右上角的圆形徽标数字。

<div class="fu-code-block-row">

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 基础使用
 * desc: 简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示
 */
import React from 'react';
import { Avatar, Badge, Space } from '@weblif/fast-ui';
import { ClockCircleOutlined } from '@ant-design/icons';

export default () => {
    return (
        <Space size="middle">
            <Badge count={5}>
                <Avatar shape="square" size="large" />
            </Badge>
            <Badge count={0} showZero>
                <Avatar shape="square" size="large" />
            </Badge>
            <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
                <Avatar shape="square" size="large" />
            </Badge>
        </Space>
    );
};
```

</div>

<div class="fu-code-block-col-2-1">

```tsx
/**
 * title: 封顶数字
 * desc: 超过 overflowCount 的会显示为 ${overflowCount}+，默认的 overflowCount 为 99。
 */
import React from 'react';
import { Badge, Avatar, Space } from '@weblif/fast-ui';

export default () => {
    return (
        <Space size="middle">
            <Badge count={99}>
                <Avatar shape="square" size="large" />
            </Badge>
            <Badge count={100}>
                <Avatar shape="square" size="large" />
            </Badge>
            <Badge count={99} overflowCount={10}>
                <Avatar shape="square" size="large" />
            </Badge>
            <Badge count={1000} overflowCount={999}>
                <Avatar shape="square" size="large" />
            </Badge>
        </Space>
    );
};
```

</div>
</div>

### Badge

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|color |自定义小圆点的颜色 |`string` | -
|count |展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 |`ReactNode` | -
|dot   |不展示数字，只有一个小红点 | `boolean` | -
|offset|设置状态点的位置偏移  | `[number, number]` | -
|overflowCount|展示封顶的数字值 | `number` | `99`
|showZero|当数值为 0 时，是否展示 Badge | `boolean` | `false`
|size    |在设置了 count 的前提下有效，设置小圆点的大小 | `default` \| `small` | -
|status  |设置 Badge 为状态点          |`success` \| `processing` \| `default` \| `error` \| `warning` | -
|text    |在设置了 status 的前提下有效，设置状态点的文本 | `ReactNode` | -
|title   |设置鼠标放在状态点上时显示的文字 | `string` | -
 
### Badge.Ribbon

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|color |自定义缎带的颜色 | `string` | - 
|placement | 缎带的位置，start 和 end 随文字方向（RTL 或 LTR）变动 | `start` \| `end` | `end`
|text     |缎带中填入的内容 | `ReactNode` | -

