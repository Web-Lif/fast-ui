import React, { FC, forwardRef } from 'react'
import AntAvatar, { AvatarProps as AntAvatarProps } from 'antd/es/avatar'

interface AvatarProps extends AntAvatarProps {}

const Avatar = forwardRef<HTMLElement, AvatarProps>((props, refs) => {
    return <AntAvatar ref={refs} {...props} />
})

export default Avatar
