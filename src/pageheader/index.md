---
nav:
  title: 组件
  path: /components
group:
  path: /components/navigation
  title: 导航
---

## PageHeader 页头

页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成

<br />

例子:

```tsx
/**
 * title: 标准样式
 * desc: 标准页头，适合使用在需要简单描述的场景
 */
import React from 'react'
import { PageHeader } from '@weblif/fast-ui'

export default () => {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
  )
}
```

## API

| 参数             | 说明                                             | 类型                                                  | 默认值           | 版本 |
| ---------------- | ------------------------------------------------ | ----------------------------------------------------- | ---------------- | ---- |
| avatar           | 标题栏旁的头像                                   | [AvatarProps](/components/avatar/)                    | -                |      |
| backIcon         | 自定义 back icon ，如果为 false 不渲染 back icon | ReactNode \| boolean                                  | &lt;ArrowLeft /> |      |
| breadcrumb       | 面包屑的配置                                     | [Breadcrumb](/components/breadcrumb/)                 | -                |      |
| breadcrumbRender | 自定义面包屑区域的内容                           | `(props, originBreadcrumb) => ReactNode`              | -                |      |
| extra            | 操作区，位于 title 行的行尾                      | ReactNode                                             | -                |      |
| footer           | PageHeader 的页脚，一般用于渲染 TabBar           | ReactNode                                             | -                |      |
| ghost            | pageHeader 的类型，将会改变背景颜色              | boolean                                               | true             |      |
| subTitle         | 自定义的二级标题文字                             | ReactNode                                             | -                |      |
| tags             | title 旁的 tag 列表                              | [Tag](/components/tag/)\[] \| [Tag](/components/tag/) | -                |      |
| title            | 自定义标题文字                                   | ReactNode                                             | -                |      |
| onBack           | 返回按钮的点击事件                               | () => void                                            | -                |      |
