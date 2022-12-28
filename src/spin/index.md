---
nav:
  title: 组件
  path: /components
group:
  path: /components/feedback
  title: 反馈
---

## Spin 加载中

例子:

- `Spin.setDefaultIndicator(indicator: ReactNode)`

```tsx
/**
 * title: 执行耗时任务
 * description: 执行耗时任务可以自动进行防止多次点击按钮, 当执行成功后才让继续点击
 */
import { Spin } from '@weblif/fast-ui'

export default () => {
  return <Spin />
}
```

<br />

## API

| 参数             | 说明                                         | 类型          | 默认值    |
| ---------------- | -------------------------------------------- | ------------- | --------- |
| delay            | 延迟显示加载效果的时间（防止闪烁）           | number (毫秒) | -         |
| indicator        | 加载指示符                                   | ReactNode     | -         |
| size             | 组件大小，可选值为 `small` `default` `large` | string        | `default` |
| spinning         | 是否为加载中状态                             | boolean       | true      |
| tip              | 当作为包裹元素时，可以自定义描述文案         | ReactNode     | -         |
| wrapperClassName | 包装器的类属性                               | string        | -         |

### 静态方法

- `Spin.setDefaultIndicator(indicator: ReactNode)`

  你可以自定义全局默认 Spin 的元素。
