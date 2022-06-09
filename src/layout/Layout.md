---
nav:
    title: 组件
    path: /components
group:
    path: /components/layout
    title: 布局
---

## Layout 布局

协助进行页面级整体布局

## 布局组件描述

-   `ViewPort` 将接管浏览器窗口的整个视口。调整浏览器窗口大小将自动调整此空间和所有嵌套空间的大小。
-   `Fixed` 这表示可以指定一个高度，也可以指定一个宽度（默认情况下，它的大小为容器的 100%）。所有嵌套空间都将包含在这个固定大小的空间内。
-   `Left` 父容器空间的左侧
-   `Right` 在父容器空间的右侧
-   `Top` 在父容器空间的顶部
-   `Bottom` 在父容器空间的底部
-   `Fill` 填充剩余空间
-   `Positioned` 可以按照定位进行浮动在父组件的任意位置
-   `Layer` 图层允许您在父空间中创建图层
-   `Centered` 将空间的内容水平和垂直居中。
-   `CenteredVertically` 垂直居中空间的内容

<br />

例子:

<code src="./__demo__/simple_layout.tsx"></code>

<br />

### API

共同属性

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| as | `string` \| `React.ComponentType<ICommonProps>` | `div` | 允许通过 HTML 5 语义标记或自定义组件控制输出的 HTML 元素。 |
| className | `string` |  |  | 应用于元素的类名。 |
| id | `string` | Randomly generated id | 默认情况下，空间输出具有随机生成 id 的元素。您可以指定自己的 ID。最好在根据状态更改添加和删除的组件上指定一个 id。 |
| scrollable | `boolean` | `false` | 使空间可滚动。默认情况下，溢出空间的内容将被隐藏。如果内容溢出，这将允许添加滚动条。 |
| style | `CSSProperties` |  | CSS properties |
| trackSize | `boolean` | `false` | 告诉空间在将大小更改为 `useCurrentSpace()` 挂钩时报告其大小。关闭此功能后，空间将仅报告初始大小。 |
| zIndex | `number` | `0` | 一个数字，表示空间所在的层。如果未指定，则空间位于第 0 层。较高的数字出现在较低的数字前面。这旨在替代使用 `<Layer />` 作为包装器，并且更适合在不同层之间移动的空间以避免重新安装子组件。 |
| allowOverflow | `boolean` | `false` | 为 true 时，允许空间内的内容超出空间边界 |
| onClick | `(event) => void` |  | onClick 事件 |
| onDoubleClick | `(event) => void` |  | onDoubleClick 事件 |
| onMouseDown | `(event) => void` |  | onMouseDown 事件 |
| onMouseEnter | `(event) => void` |  | onMouseEnter 事件 |
| onMouseLeave | `(event) => void` |  | onMouseLeave 事件 |
| onMouseMove | `(event) => void` |  | onMouseMove 事件 |
| onTouchStart | `(event) => void` |  | onTouchStart 事件 |
| onTouchMove | `(event) => void` |  | onTouchMove 事件 |
| onTouchEnd | `(event) => void` |  | onTouchEnd 事件 |
