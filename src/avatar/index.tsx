import React, { FC } from 'react'
import AntAvatar, { AvatarProps as AntAvatarProps } from 'antd/es/avatar'

interface AvatarProps extends AntAvatarProps {}

const Avatar: FC<AvatarProps> = ({ ...restProps }) => {
    return <AntAvatar {...restProps} />
}

export default Avatar
