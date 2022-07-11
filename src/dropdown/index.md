---
nav:
    title: 组件
    path: /components
group:
    path: /components/navigation
    title: 导航
---

## Dropdown 下拉菜单

向下弹出的列表。

<br />

例子:

```tsx
/**
 * title: 基本
 * desc: 最简单的下拉菜单。
 */
import React from 'react'
import { Menu, Dropdown } from '@weblif/fast-ui'

export default () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.antgroup.com"
                >
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    2nd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.luohanacademy.com"
                >
                    3rd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
    )
    return (
        <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>Hover me</a>
        </Dropdown>
    )
}
```

### API

属性如下

| 属性               | 说明                                                                                               | 类型                                        | 默认值                |
| ------------------ | -------------------------------------------------------------------------------------------------- | ------------------------------------------- | --------------------- | ------------- | --------- |
| arrow              | 下拉框箭头是否显示                                                                                 | `boolean`                                   | `false`               |
| disabled           | 菜单是否禁用                                                                                       | `boolean`                                   | -                     |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown                                                                            | `boolean`                                   | `false`               |
| getPopupContainer  | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位 | `(triggerNode: HTMLElement) => HTMLElement` | `() => document.body` |
| overlay            | 菜单                                                                                               | `Menu                                       | () => Menu`           | -             |
| overlayClassName   | 下拉根元素的类名称                                                                                 | `string`                                    | -                     |
| overlayStyle       | 下拉根元素的样式                                                                                   | `CSSProperties`                             | -                     |
| placement          | 菜单弹出位置: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`           | `string`                                    | `bottomLeft`          |
| trigger            | 触发下拉的行为, 移动端不支持 `hover`                                                               | `Array<click                                | hover                 | contextMenu>` | `[hover]` |
| visible            | 菜单是否显示                                                                                       | `boolean`                                   | -                     |
| onVisibleChange    | 菜单显示状态改变时调用，参数为 `visible` 。点击菜单按钮导致的消失不会触发                          | `(visible: boolean) => void`                | -                     |

`overlay` 菜单使用 `Menu` ，还包括菜单项 `Menu.Item`，分割线 `Menu.Divider`。

> 注意： Menu.Item 必须设置唯一的 key 属性。
> Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 `<Menu selectable>`。

Dropdown.Button

| 属性            | 说明                                                                                     | 类型                                    | 默认值       |
| --------------- | ---------------------------------------------------------------------------------------- | --------------------------------------- | ------------ |
| buttonsRender   | 自定义左右两个按钮                                                                       | `(buttons: ReactNode[]) => ReactNode[]` | -            |
| loading         | 设置按钮载入状态                                                                         | `boolean` \| `{ delay: number }`        | false        |
| disabled        | 菜单是否禁用                                                                             | `boolean`                               | -            |
| icon            | 右侧的 icon                                                                              | `ReactNode`                             | -            |
| overlay         | 菜单                                                                                     | `Menu`                                  | -            |
| placement       | 菜单弹出位置: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | `string`                                | `bottomLeft` |
| size            | 按钮大小，和 Button 一致                                                                 | `string`                                | `default`    |
| trigger         | 触发下拉的行为                                                                           | `Array<click\|hover\|contextMenu>`      | `[hover]`    |
| type            | 按钮类型，和 Button 一致                                                                 | `string`                                | `default`    |
| visible         | 菜单是否显示                                                                             | `boolean`                               | -            |
| onClick         | 点击左侧按钮的回调，和 Button 一致                                                       | `(event) => void`                       | -            |
| onVisibleChange | 菜单显示状态改变时调用，参数为 visible                                                   | `(visible: boolean) => void`            | -            |
