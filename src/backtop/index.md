---
nav:
  title: 组件
  path: /components
group:
  path: /components/navigation
  title: 导航
---

## BackTop 回到顶部

返回页面顶部的操作按钮。

```tsx
/**
 * title: 基本
 * description: 最简单的用法。
 */
import { BackTop } from '@weblif/fast-ui'

export default () => {
  return (
    <>
      <BackTop />
      Scroll down to see the bottom-right
      <strong className="site-back-top-basic"> gray </strong>
      button.
    </>
  )
}
```

## API

> 有默认样式，距离底部 `50px`，可覆盖。
>
> 自定义样式宽高不大于 40px \* 40px。

| 参数             | 说明                                                          | 类型              | 默认值       | 版本  |
| ---------------- | ------------------------------------------------------------- | ----------------- | ------------ | ----- |
| duration         | 回到顶部所需时间（ms）                                        | number            | 450          | 4.4.0 |
| target           | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |       |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop                            | number            | 400          |       |
| onClick          | 点击按钮的回调函数                                            | function          | -            |       |
