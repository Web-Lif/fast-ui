import React, { FC } from 'react';
import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd';

interface AvatarProps extends AntAvatarProps {}

const Avatar: FC<AvatarProps> = ({ ...restProps }) => {
    return <AntAvatar {...restProps} />;
};

export default Avatar;
