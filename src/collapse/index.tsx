import AntCollapse, { CollapseProps } from 'antd/es/collapse'
import React from 'react'
import { css, cx } from '@emotion/css'

const InternalCollapse = ({ className, ...props }: CollapseProps) => {
    return (
        <AntCollapse
            className={cx([
                {
                    [className || '']: typeof className === 'string',
                    [css`
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        .ant-collapse-item-active {
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            .ant-collapse-content-active {
                                flex: 1;
                            }
                        }
                    `]: true,
                },
            ])}
            {...props}
        />
    )
}

type InternalCollapseType = typeof InternalCollapse

interface CollapseInterface extends InternalCollapseType {
    Panel: typeof AntCollapse.Panel
}

const Collapse = InternalCollapse as CollapseInterface
Collapse.Panel = AntCollapse.Panel

export default Collapse
