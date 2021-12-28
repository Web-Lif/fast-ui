---
nav:
    title: Components
    path: /components
group:
    path: /components/feedback
    title: 反馈
---

## Modal 对话框

相对于原生的 `antd` 的组件, 有以下功能点优化

- 防止多次点击按钮, 执行一次 `onOk` 完成后才能在执行, 防止用户多次提交数据.
- 点击确定的时候，执行成功后会自动隐藏表格, 如果返回 `false` 表示不自动隐藏, 如果发生异常也不会隐藏弹出框
- 点击取消的时候，执行成功后会自动隐藏表格, 如果返回 `false` 表示不自动隐藏, 如果发生异常也不会隐藏弹出框
- 采用 `modal` 属性的 `ModalInstance` 来控制对话框的隐藏和显示
- 默认情况下清空对话框的内容， 可通过 `destroyOnClose={false}` 来保留隐藏后清除内容的逻辑
- 默认支持对话框的标题可拖拽移动
<br />

例子: 

```tsx
/**
 * title: 执行耗时任务
 * desc: 执行耗时任务可以自动进行防止多次点击按钮, 当执行成功后才让继续点击
 */
import React, { useState, useRef} from 'react';
import { Modal, Button, ModalInstance} from '@weblif/fast-ui';
import { message, Input } from 'antd'
import 'antd/dist/antd.css';

/** Mock 请求数据, 或则一些耗时操作 */
const requestData = () => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve('模拟任务执行完成.')
        }, 3000)
    })
}

export default () => {
    const modal = useRef<ModalInstance>()
    return (
        <>
            <Button
                onClick={() => {
                    modal.current.show()
                }}
            >
                点击显示弹出框
            </Button>
            <Modal
                title="这是一个弹出框"
                modal={modal}
                onOk={async () => {
                    const msg = await requestData()
                    message.info(msg)
                }}
            >
                async 请求远程数据
            </Modal>
        </>
    )
}
```

<br />

| 属性                 | 说明                       | 类型      |  默认值
|----                 |----                       |----      |-------
|afterClose           |Modal 完全关闭后的回调        |`function` | 	-
|bodyStyle            |Modal body 样式             |`CSSProperties` | 
|cancelButtonProps    |cancel 按钮 props           |`ButtonProps` | -
|cancelText           |取消按钮文字                 |`ReactNode`   | 取消
|centered             |垂直居中展示 Modal           |`boolean`     | false	
|closable             |是否显示右上角的关闭按钮       |`boolean`     | true
|closeIcon            |自定义关闭图标                |`ReactNode`   | `<CloseOutlined />`
|confirmLoading       |确定按钮 loading             |`boolean`     | false
|destroyOnClose       |关闭时销毁 Modal 里的子元素     |`boolean`    | false
|focusTriggerAfterClose|对话框关闭后是否需要聚焦触发元素 |`boolean`    | true
|footer               |底部内容，当不需要默认底部按钮时，可以设为 `footer={null}`|`ReactNode` | (确定取消按钮)
|forceRender          |强制渲染 Modal                 |`boolean` | false
|getContainer         |指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom|`HTMLElement` \| `() => HTMLElement` \| `Selectors` \| `false` | document.body	
|keyboard             |是否支持键盘 esc 关闭           |`boolean` | true
|mask                 |是否展示遮罩                    |`boolean` | true
|maskClosable         |点击蒙层是否允许关闭             |`boolean` | true
|maskStyle            |遮罩样式                       |`CSSProperties` | -
|modalRender          |自定义渲染对话框                |`(node: ReactNode) => ReactNode` |  -
|okButtonProps        |ok 按钮 props                 |`ButtonProps` | -
|okText               |确认按钮文字                    |`ReactNode` | `确定`
|okType               |确认按钮类型                    |`string`    | `primary`
|style                |可用于设置浮层的样式，调整浮层位置等|`CSSProperties` |  -
|title                |标题                           |`ReactNode` | -
|visible              |对话框是否可见                   |`boolean` | -
|width                |宽度                            | `string` \| `number` | 520
|wrapClassName        |对话框外层容器的类名              | `string`  | -
|zIndex               |设置 Modal 的 `z-index`         | `number`  | 1000
|onCancel	          |点击遮罩层或右上角叉或取消按钮的回调 | `function(e)` | -
|onOk                 |点击确定回调                     | `function(e)` | -
