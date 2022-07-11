import React, { useEffect } from 'react'
import AntCascader, {
    CascaderProps as AntCascaderProps,
} from 'antd/es/cascader'

interface Option {
    key: string | number
    title: React.ReactNode
    disabled?: boolean
    children?: Option[]
    isLeaf?: boolean
}

interface CascaderProps extends Omit<AntCascaderProps<Option>, 'loadData'> {
    onChangeOptions?: (options: Option[]) => void
    loadData?: (selectedOptions: Option | null) => Promise<Option[]>
}

function Cascader({
    options,
    loadData,
    onChangeOptions,
    ...restProps
}: CascaderProps) {
    let extProps: {
        loadData?: (selectOptions: any[]) => void
    } = {
        loadData: undefined,
    }

    if (typeof loadData === 'function') {
        extProps.loadData = (selectOptions) => {
            const targetOption = selectOptions[selectOptions.length - 1]
            targetOption.loading = true
            loadData?.(targetOption).then((children) => {
                targetOption.loading = false
                targetOption.children = children
                onChangeOptions?.([...(options || [])])
            })
        }
    }

    useEffect(() => {
        loadData?.(null).then((children) => {
            onChangeOptions?.(children)
        })
    }, [])

    return (
        <AntCascader
            {...extProps}
            options={options}
            fieldNames={{
                label: 'title',
                value: 'key',
                children: 'children',
            }}
            {...(restProps as any)}
        />
    )
}

export default Cascader
