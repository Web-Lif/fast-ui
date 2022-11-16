import { ReactNode } from 'react'
import AntBadge, { BadgeProps as AntBadgeProps } from 'antd/es/badge'

interface BadgeProps extends AntBadgeProps {
    children?: ReactNode
}

const Badge = (props: BadgeProps) => {
    return <AntBadge {...props} />
}

export default Badge
