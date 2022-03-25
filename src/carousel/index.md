---
nav:
    title: 组件
    path: /components
    order: 10
group:
    path: /components/data
    title: 数据
---

## Carousel 轮播图

旋转木马，一组轮播的区域。

<br />

例子: 

```tsx
/**
 * title: 基础
 * desc: 基础的轮播图
 */
import React from 'react';
import { Carousel } from '@weblif/fast-ui';

export default () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <Carousel>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};
```


## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoplay | 是否自动切换 | boolean | false |  |
| dotPosition | 面板指示点位置，可选 `top` `bottom` `left` `right` | string | `bottom` |  |
| dots | 是否显示面板指示点，如果为 `object` 则同时可以指定 `dotsClass` 或者 | boolean \| { className?: string } | true |  |
| easing | 动画效果 | string | `linear` |  |
| effect | 动画效果函数 | `scrollx` \| `fade` | `scrollx` |  |
| afterChange | 切换面板的回调 | function(current) | - |  |
| beforeChange | 切换面板的回调 | function(from, to) | - |  |

## 方法

| 名称 | 描述 |
| --- | --- |
| goTo(slideNumber, dontAnimate) | 切换到指定面板, dontAnimate = true 时，不使用动画 |
| next() | 切换到下一面板 |
| prev() | 切换到上一面板 |

更多 API 可参考：<https://react-slick.neostack.com/docs/api>

## FAQ

### 如何自定义箭头？

可参考 [#12479](https://github.com/ant-design/ant-design/issues/12479)。
