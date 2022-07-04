import { ReactElement } from 'react'

type AlignType = 'left' | 'right' | 'center'

export interface RowSelectType<T> {
    /** 选择模式, 是单选还是多选模式 */
    model: 'single' | 'multiple'

    /** 点击模式, row 表示点击表格行则进行选中 */
    clickModel?: 'row'

    /** 允许禁用选择这一行 */
    allowDisabledSelect?: (row: T) => boolean
}

export type AllowCellSelectBorderParam<T> = {
    row: T
    selectd?: boolean
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
    width?: number | string

    /** 是否可改变列的大小 */
    resizable?: boolean

    /** 是否可以排序 */
    sort?: boolean

    /** 固定列的方向 */
    fixed?: 'left' | 'right'

    /** 是否只读 */
    readOnly?: boolean

    /** 是否隐藏此列 */
    hidden?: boolean

    /** 设置列的对齐方式 */
    align?: {
        /** 默认为 left */
        header?: AlignType

        /** 默认为 center */
        body?: AlignType | ((row: T) => AlignType)
    }

    /** 编辑器 */
    editor?: (renderType: EditRenderType<T>) => ReactElement

    /** 渲染单元格触发的事件 */
    render?: (renderType: RenderType<T>) => ReactElement

    /** 是否允许显示选择的边框 */
    allowCellSelectBorder?:
        | ((param: AllowCellSelectBorderParam<T>) => boolean)
        | boolean
}

export interface SortDirection {
    name: string
    direction?: 'ASC' | 'DESC'
}

export type RowClassNameParam<T> = {
    className: string
    row: T
}
