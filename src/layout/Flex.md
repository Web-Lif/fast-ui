---
nav:
    title: 组件
    path: /components
group:
    path: /components/layout
    title: 布局
---

## Flex 布局

可调整大小的 Flex 布局容器组件

<br />

例子:


```tsx
/**
 * title: 基本
 * desc: 基础布局, 根据 `orientation` 属性来进行拆分
 */
import React, { useState, useRef } from 'react';
import { Flex, Button } from '@weblif/fast-ui';

export default () => {
    return (
        <Flex orientation="vertical">
            <Flex.Element>
                <div
                    style={{
                        background: 'rgba(0,146,255,.75)',
                        width: '100%',
                        height: 200,
                        lineHeight: '200px',
                        borderRadius: 4,
                        textAlign: 'center',
                        color: '#fff'
                    }}
                >
                    左边
                </div>
            </Flex.Element>
            <Flex.Splitter/>
            <Flex.Element>
                <div
                    style={{
                        background: 'rgba(0,146,255,.75)',
                        width: '100%',
                        height: 200,
                        lineHeight: '200px',
                        borderRadius: 4,
                        textAlign: 'center',
                        color: '#fff'
                    }}
                >
                    右边
                </div>
            </Flex.Element>
        </Flex>
    );
};
```

```tsx
/**
 * title: 可改变大小
 * desc: 可通过拖拽鼠标改变对应的大小信息
 */
import React, { useState, useRef } from 'react';
import { Flex, Button } from '@weblif/fast-ui';

export default () => {
    return (
        <div
            style={{
                height: 200
            }}
        >
        <Flex orientation="vertical">
            <Flex.Element>
                <div
                    style={{
                        background: 'rgba(0,146,255,.75)',
                        width: '100%',
                        lineHeight: '200px',
                        borderRadius: 4,
                        textAlign: 'center',
                        color: '#fff'
                    }}
                >
                    左边(可拖拽改变)
                </div>
            </Flex.Element>
            <Flex.Splitter/>
            <Flex.Element
                minSize={500}
                maxSize={900}
            >
                <div
                    style={{
                        background: 'rgba(0,146,255,.75)',
                        width: '100%',
                        lineHeight: '200px',
                        borderRadius: 4,
                        textAlign: 'center',
                        color: '#fff'
                    }}
                >
                    右边(可拖拽改变，但是最大900px, 最小 500px)
                </div>
            </Flex.Element>
        </Flex>
        </div>
    );
};
```




<br />

### API

Flex

| 属性           | 说明                                    | 类型              | 默认值 |
| -------------- | --------------------------------------- | ----------------- | ------ |
|orientation     |方向                                  |`horizontal` \| `vertical`  | `horizontal`
|maxRecDepth     |最大递归深度，根据用户提供的值解决布局元素的初始弹性。如果约束求解器无法在元素上找到合适的维度来满足初始输入，这可以防止无限递归。 | `number` | `100`
|windowResizeAware |当设置为 `true` 时，此标志将在窗口调整大小事件时更新布局以尝试满足每个元素的 `minSize/maxSize` 约束。如果您的元素没有这些约束，则不需要这样做 | `boolean` | `false`
|className       |类名                                |`string` | `''`
|style           |内联样式                             |`CSSProperties` | `{}`


Flex.Element

| 属性           | 说明                                               | 类型              | 默认值 |
| -------------- | ---------------------------------------           | ----------------- | ------ |
|propagateDimensions |将其设置为`true`会将 height/width 属性传播给子级    |`boolean`          | `false`
|propagateDimensionsRate |定义子元素上的尺寸更新速率（以每秒次数为单位）。通过在调整大小期间跳过一些重新渲染步骤，这有助于提高在重组件上使用此方法时的性能 | `number` | `100`
|resizeHeight          |允许控制 `height`                              |`boolean`         | `true`
|resizeWidth           |允许控制 `width`                               |`boolean`         | `true`
|size                  |允许控制元素的大小                              | `number`          |
|minSize               |对用户可以调整到的元素的最小尺寸（以像素为单位）创建一个约束 | `number`   |
|maxSize               |对用户可以调整到的元素的最大尺寸（以像素为单位）创建一个约束 | `number`   |
|flex                  |指定 flex 元素的首字母                            | `number`       |
|direction             |允许控制元素在size修改其属性时将向哪个方向收缩/扩展    | `-1` \| `1`    |
|onStartResize         |当用户启动布局调整大小时触发的事件。                 | `function({domElement, component})` | 
|onStopResize          |当用户完成布局调整大小时触发的事件                   | `function({domElement, component})` |
|onResize              |当用户调整布局大小时，在每个调整大小步骤触发的事件      | `function({domElement, component})` |
|className       |类名                                |`string` | `''`
|style           |内联样式                             |`CSSProperties` | `{}`


Flex.Splitter

| 属性           | 说明                                               | 类型              | 默认值 |
| -------------- | ---------------------------------------           | ----------------- | ------ |
|propagate      |跨多个拆分器调整布局大小时传播拖动 `Layou` 必须至少有 3 个元素，因此需要 2 个拆分器才能使此属性相关 | `boolean` | `false`
|onStartResize  |当用户启动布局调整大小时触发的事件                       | `function({domElement, component})` | 
|onStopResize   |当用户完成布局调整大小时触发的事件                       | `function({domElement, component})` |
|onResize       |当用户调整布局大小时，在每个调整大小步骤触发的事件          | `function({domElement, component})` |
|className       |类名                                |`string` | `''`
|style           |内联样式                             |`CSSProperties` | `{}`
