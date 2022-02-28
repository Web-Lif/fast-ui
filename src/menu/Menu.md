---
nav:
    title: 组件
    path: /components
group:
    path: /components/navigation
    title: 导航
---

## Menu 导航菜单

为页面和功能提供导航的菜单列表。

例子:


```tsx
/**
 * title: 顶部导航
 * desc: 水平的顶部导航菜单。
 */
import React, { useState } from 'react';
import { Menu, Dropdown } from '@weblif/fast-ui';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

export default () => {
    const [selectKey, setSelectKey] = useState<string>('mail')
    return (
        <Menu onClick={(e) => { setSelectKey(e.key)}} selectedKeys={[selectKey]} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                Navigation Two
            </Menu.Item>
            <Menu.SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item key="alipay">
                <a href="https://ui.lif.ink" target="_blank" rel="noopener noreferrer">
                    Navigation Four - FAST-UI
                </a>
            </Menu.Item>
        </Menu>
    );
};
```

## API

```jsx | pure
<Menu>
  <Menu.Item>菜单项</Menu.Item>
  <SubMenu title="子菜单">
    <Menu.Item>子菜单项</Menu.Item>
  </SubMenu>
</Menu>
```

### Menu

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 | string\[] | - |  |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | string\[] | - |  |
| expandIcon | 自定义展开图标 | ReactNode \| `(props: SubMenuProps & { isSubMenu: boolean }) => ReactNode` | - | 4.9.0 |
| forceSubMenuRender | 在子菜单展示之前就渲染进 DOM | boolean | false |  |
| inlineCollapsed | inline 时菜单是否收起状态 | boolean | - |  |
| inlineIndent | inline 模式的菜单缩进宽度 | number | 24 |  |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `vertical` \| `horizontal` \| `inline` | `vertical` |  |
| multiple | 是否允许多选 | boolean | false |  |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | string\[] | - |  |
| overflowedIndicator | 用于自定义 Menu 水平空间不足时的省略收缩的图标 | ReactNode | `<EllipsisOutlined />` |  |
| selectable | 是否允许选中 | boolean | true |  |
| selectedKeys | 当前选中的菜单项 key 数组 | string\[] | - |  |
| style | 根节点样式 | CSSProperties | - |  |
| subMenuCloseDelay | 用户鼠标离开子菜单后关闭延时，单位：秒 | number | 0.1 |  |
| subMenuOpenDelay | 用户鼠标进入子菜单后开启延时，单位：秒 | number | 0 |  |
| theme | 主题颜色 | `light` \| `dark` | `light` |  |
| triggerSubMenuAction | SubMenu 展开/关闭的触发行为 | `hover` \| `click` | `hover` |  |
| onClick | 点击 MenuItem 调用此函数 | function({ item, key, keyPath, domEvent }) | - |  |
| onDeselect | 取消选中时调用，仅在 multiple 生效 | function({ item, key, keyPath, selectedKeys, domEvent }) | - |  |
| onOpenChange | SubMenu 展开/关闭的回调 | function(openKeys: string\[]) | - |  |
| onSelect | 被选中时调用 | function({ item, key, keyPath, selectedKeys, domEvent }) | -   |  |

> 更多属性查看 [rc-menu](https://github.com/react-component/menu#api)

### Menu.Item

| 参数     | 说明                     | 类型      | 默认值 | 版本  |
| -------- | ------------------------ | --------- | ------ | ----- |
| danger   | 展示错误状态样式         | boolean   | false  | 4.3.0 |
| disabled | 是否禁用                 | boolean   | false  |       |
| icon     | 菜单图标                 | ReactNode | -      | 4.2.0 |
| key      | item 的唯一标志          | string    | -      |       |
| title    | 设置收缩时展示的悬浮标题 | string    | -      |       |


### Menu.SubMenu

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| children | 子菜单的菜单项 | Array&lt;MenuItem \| SubMenu> | - |  |
| disabled | 是否禁用 | boolean | false |  |
| icon | 菜单图标 | ReactNode | - | 4.2.0 |
| key | 唯一标志 | string | - |  |
| popupClassName | 子菜单样式，`mode="inline"` 时无效 | string | - |  |
| popupOffset | 子菜单偏移量，`mode="inline"` 时无效 | \[number, number] | - |  |
| title | 子菜单项值 | ReactNode | - |  |
| onTitleClick | 点击子菜单标题 | function({ key, domEvent }) | - |  |

### Menu.ItemGroup

| 参数     | 说明         | 类型        | 默认值 | 版本 |
| -------- | ------------ | ----------- | ------ | ---- |
| children | 分组的菜单项 | MenuItem\[] | -      |      |
| title    | 分组标题     | ReactNode   | -      |      |

### Menu.Divider

菜单项分割线，只用在弹出菜单内。

| 参数   | 说明     | 类型    | 默认值 | 版本   |
| ------ | -------- | ------- | ------ | ------ |
| dashed | 是否虚线 | boolean | false  | 4.17.0 |

## FAQ

### 为何 Menu 的子元素会渲染两次？

Menu 通过[二次渲染](https://github.com/react-component/menu/blob/f4684514096d6b7123339cbe72e7b0f68db0bce2/src/Menu.tsx#L543)收集嵌套结构信息以支持 HOC 的结构。合并成一个推导结构会使得逻辑变得十分复杂，欢迎 PR 以协助改进该设计。