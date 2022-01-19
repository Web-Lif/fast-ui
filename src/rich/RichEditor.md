---
nav:
    title: Components
    path: /components
group:
    path: /components/other
    title: 其他
---

## RichEditor 富文本编辑

一个基于 `React` 和 `Prosemirror` 的编辑器, 该编辑器是所见即所得的，包括格式化工具，同时保留内联编写 `Markdown` 快捷方式和输出纯 `Markdown` 的能力

<br />

例子:

```tsx
/**
 * title: 富文本编辑器
 * desc: 打印容器里面的内容
 */
import React, { useState, useRef } from 'react';
import { RichEditor } from '@weblif/fast-ui';

export default () => {
    const print = useRef();
    return (
        <RichEditor
            id="0"
            defaultValue="Hello world!"
            onChange={(text) => {
                console.log(text());
            }}
        />
    );
};
```

<br />

### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| id | 此编辑器的唯一 ID | `string` | - |
| defaultValue | 一个 `markdown` 字符串，表示编辑器的初始值。使用它来支持恢复以前保存的内容，以供用户继续编辑。 | `string` | - |
| value | 一个 `markdown` 字符串，表示编辑器的值。安装后使用此道具更改编辑器的值，这将重新渲染整个编辑器，因此仅适用于 `readOnly` 模式。不要将 `onChangeback` 的值通过管道传递给 `value` ,编辑器会保持它自己的内部状态，这会导致意想不到的副作用。 | - |
| placeholder | 允许覆盖占位符。 | `string` | "Write something nice…" |
| readOnly | `readOnly` 设置为 `false` 编辑器已针对合成进行了优化。当 `true` 编辑器可用于显示以前编写的内容时 - 标题获得锚点并且链接变得可点击 | `boolean` | - |
| readOnlyWriteCheckboxes | 当 `readOnlyWriteCheckboxes` 设置为时, `true` 复选框仍然可以被选中或取消选中作为特殊情况，否则 `readOnly` 无法 `true` 编辑编辑器。 |
| autoFocus | 设置为只读的时候，自动聚焦在文档的末尾 | - |
| maxLength | 设置时强制文档上的最大字符长度，不包括 markdown 的语法。 |
| extensions | 允许将其他 `Prosemirror` 插件传递给底层 `Prosemirror` 实例。 |
| disableExtensions | 要禁用的包含的扩展名列表。删除相应的菜单项和命令。例如设置为["em", "blockquote"]禁用斜体文本和块引用。 |
| theme | 允许覆盖内置主题以标记编辑器，例如使用您自己的字体和品牌颜色使编辑器适合您的应用程序。有关应提供的键的示例 |
| dictionary | 允许覆盖内置的复制字典，例如使编辑器国际化 |
| dark | `dark` 设置为 `true` 编辑器将使用包含的默认深色主题 |
| dir | 控制文档的方向 | `ltr` \| `rtl` \| `auto` | `auto` |
| tooltip | 一个 React 组件，它将被包裹在具有可选工具提示的项目周围。您可以使用它来将您自己的工具提示库注入到编辑器中 | `tooltip` \| `placement` \| `children` | - |
| headingsOffset | 将文档标题偏移多个级别的数字 |
| scrollTo | 代表标题锚点的字符串, 文档将平滑滚动 |
| embeds | `matcher` 当函数返回一个 `true` 值时，可以选择定义嵌入代替链接。 `matcher` 方法的返回值将在 `props.attrs.matches`. 如果提供 `title` 和 `icon` 则嵌入也将出现在块菜单中 |
| uploadImage | 如果您希望编辑器支持图像，则必须提供此回调。回调应接受单个 File 对象并在图像已上传到存储位置（例如 S3）时返回解析为 url 的承诺 | `(file: Blob) => Promise<string>` | - |
| onBlur | 失去焦点触发的事件 | `() => void` |
| onFocus | 获取焦点触发的事件 | `() => void` |
| onSave | 用户保存触发的事件 | `({ done: boolean }) => void` | - |
| onCancel | 取消编辑触发的事件 | `() => void` | - |
| onChange | 当编辑器的内容发生变化时触发此回调 | `(value: () => string) => void` | - |
| onImageUploadStart | 此回调在之前触发 `uploadImage`，可用于显示一些指示上传正在进行的 UI | `() => void` |
| onImageUploadStop | 图像上传成功或失败时触发 | `() => void` |
| onSearchLink | 编辑器提供了从格式化工具栏中搜索要插入的链接的功能。如果提供了这个回调，它应该接受一个搜索词作为唯一的参数，并返回一个解析为对象数组的承诺 | `(term: string) => Promise<{ title: string, subtitle?: string, url: string }[]>` |
| onCreateLink | 编辑器提供了从格式化工具栏创建链接的能力，以便即时创建文档。如果提供了这个回调，它应该接受一个链接 "标题" 作为唯一的参数，并返回一个解析为所创建链接的 url 的承诺 | `(title: string) => Promise<string>` |
| onShowToast | 当编辑器希望向用户显示消息时触发。连接到您应用的通知系统，或简单地使用 window.alert(message). 第二个参数是 toast 的类型：'error' 或 'info'。 | `(message: string, type: ToastType) => void` |
| onClickLink | 此回调允许覆盖链接处理。通常情况下，您希望外部链接打开一个新窗口并让内部链接使用类似 react-router 导航的东西。如果未提供回调，则打开新选项卡的默认行为将应用于所有链接 | `(href: string, event: MouseEvent) => void` |
| onHoverLink | 此回调允许检测用户何时将鼠标悬停在文档中的链接上。 | `(event: MouseEvent) => boolean` |
| onClickHashtag | 此回调允许处理单击文档文本中的主题标签。如果未提供回调，则主题标签将呈现为常规文本，因此您可以通过传递此属性来选择是否支持它们。 | `(tag: string, event: MouseEvent) => void` |
| handleDOMEvents | 事件的回调函数 | `{[name: string]: (view: EditorView, event: Event) => boolean;}` |
