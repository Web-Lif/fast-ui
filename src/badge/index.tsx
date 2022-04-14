import React, { ReactNode } from 'react'
import { Badge as AntBadge, BadgeProps as AntBadgeProps } from 'antd'

interface BadgeProps extends AntBadgeProps {
    children?: ReactNode
}

const Badge = (props: BadgeProps) => {
    return <AntBadge {...props}/>
}

export default Badge
