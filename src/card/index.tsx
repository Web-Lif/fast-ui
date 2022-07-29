import { css, cx } from '@emotion/css'
import AntCard, { CardProps } from 'antd/es/card'
import React from 'react'

const InternalAntCard = ({ className, ...props }: CardProps) => {
    return (
        <AntCard
            className={cx([
                {
                    [className || '']: typeof className === 'string',
                    [css`
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        > .ant-card-body {
                            flex: 1;
                        }
                    `]: true,
                },
            ])}
            {...props}
        />
    )
}

type InternalCardType = typeof InternalAntCard

interface CardInterface extends InternalCardType {
    Grid: typeof AntCard.Grid
    Meta: typeof AntCard.Meta
}

const Card = InternalAntCard as CardInterface
Card.Grid = AntCard.Grid
Card.Meta = AntCard.Meta

export default Card
