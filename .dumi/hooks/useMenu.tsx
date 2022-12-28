import type { MenuProps } from 'antd'
import { Link, useFullSidebarData, useLocation, useSidebarData } from 'dumi'
import type { ReactNode } from 'react'
import { useMemo } from 'react'

export type UseMenuOptions = {
    before?: ReactNode
    after?: ReactNode
}

const useMenu = (
    options: UseMenuOptions = {}
): [MenuProps['items'], string] => {
    const fullData = useFullSidebarData()
    const { pathname, search } = useLocation()
    const sidebarData = useSidebarData()
    const { before, after } = options

    const menuItems = useMemo<MenuProps['items']>(() => {
        const sidebarItems = [...(sidebarData ?? [])]

        // 将设计文档未分类的放在最后
        if (pathname.startsWith('/docs/spec')) {
            const notGrouped = sidebarItems.splice(0, 1)
            sidebarItems.push(...notGrouped)
        }

        // 把 /changelog 拼到开发文档中
        if (pathname.startsWith('/docs/react')) {
            const changelogData = Object.entries(fullData).find(([key]) =>
                key.startsWith('/changelog')
            )?.[1]
            if (changelogData) {
                sidebarItems.push(...changelogData)
            }
        }
        if (pathname.startsWith('/changelog')) {
            const reactDocData = Object.entries(fullData).find(([key]) =>
                key.startsWith('/docs/react')
            )?.[1]
            if (reactDocData) {
                sidebarItems.unshift(...reactDocData)
            }
        }
        debugger
        return (
            sidebarItems?.reduce<Exclude<MenuProps['items'], undefined>>(
                (result, group) => {
                    if (group?.title) {
                        // 设计文档特殊处理二级分组
                        if (pathname.startsWith('/docs/spec')) {
                            const childrenGroup = group.children.reduce<
                                Record<
                                    string,
                                    ReturnType<
                                        typeof useSidebarData
                                    >[number]['children']
                                >
                            >((childrenResult, child) => {
                                const type =
                                    (child.frontmatter as any).type ?? 'default'
                                if (!childrenResult[type]) {
                                    childrenResult[type] = []
                                }
                                childrenResult[type].push(child)
                                return childrenResult
                            }, {})
                            const childItems = []
                            childItems.push(
                                ...childrenGroup.default.map((item) => ({
                                    label: (
                                        <Link to={`${item.link}${search}`}>
                                            {before}
                                            {item?.title}
                                            {after}
                                        </Link>
                                    ),
                                    key: item.link.replace(/(-cn$)/g, ''),
                                }))
                            )
                            Object.entries(childrenGroup).forEach(
                                ([type, children]) => {
                                    if (type !== 'default') {
                                        childItems.push({
                                            type: 'group',
                                            label: type,
                                            key: type,
                                            children: children?.map((item) => ({
                                                label: (
                                                    <Link
                                                        to={`${item.link}${search}`}
                                                    >
                                                        {before}
                                                        {item?.title}
                                                        {after}
                                                    </Link>
                                                ),
                                                key: item.link.replace(
                                                    /(-cn$)/g,
                                                    ''
                                                ),
                                            })),
                                        })
                                    }
                                }
                            )

                            result.push({
                                label: group?.title,
                                key: group?.title,
                                children: childItems,
                            })
                        } else {
                            result.push({
                                type: 'group',
                                label: group?.title,
                                key: group?.title,
                                children: group.children?.map((item) => ({
                                    label: (
                                        <Link to={`${item.link}${search}`}>
                                            {before}
                                            <span key="english">
                                                {item?.title}
                                            </span>
                                            <span
                                                className="chinese"
                                                key="chinese"
                                            >
                                                {
                                                    (item.frontmatter as any)
                                                        .subtitle
                                                }
                                            </span>
                                            {after}
                                        </Link>
                                    ),
                                    key: item.link.replace(/(-cn$)/g, ''),
                                })),
                            })
                        }
                    } else {
                        result.push(
                            ...(group.children?.map((item) => ({
                                label: (
                                    <Link to={`${item.link}${search}`}>
                                        {before}
                                        {item?.title}
                                        {after}
                                    </Link>
                                ),
                                key: item.link.replace(/(-cn$)/g, ''),
                            })) ?? [])
                        )
                    }
                    return result
                },
                []
            ) ?? []
        )
    }, [sidebarData, fullData, pathname, search])

    return [menuItems, pathname]
}

export default useMenu
