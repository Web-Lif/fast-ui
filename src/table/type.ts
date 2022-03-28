import { ReactElement } from "react";

type AlignType = 'left' | 'right' | 'center'


export interface RowSelectType {
    /** 选择模式, 是单选还是多选模式 */
    model: 'single' | 'multiple'
}

interface RenderType<T> {
    column: Column<T>
    row: T
    value: string
}

interface EditRenderType<T> extends RenderType<T> {
    /** 编辑完成后调用的方法 */
    onFinish: () => void
    /** 表格改变后触发的事件 */
    onChange: (value: string) => void
}

export interface Column<T> {

    /** 对应的字段名称 */
    name: string

    /** 标题显示的名称 */
    title: string

    /** 列的宽度信息 */
    width?: number

    /** 固定列的方向 */
    fixed?: 'left' | 'right'

    /** 是否只读 */
    readOnly?: boolean

    /** 设置列的对齐方式 */
    align?: {

        /** 默认为 left */
        header?: AlignType,

        /** 默认为 center */
        body?: AlignType | ((row: T) => AlignType)
    }

    /** 编辑器 */
    editor?: (renderType: EditRenderType<T>) => ReactElement

    /** 渲染单元格触发的事件 */
    render?: (renderType: RenderType<T>) => ReactElement
}

export interface SortDirection {
    name: string
    direction?: 'ASC' | 'DESC'
}
