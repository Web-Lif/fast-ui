import React, { FC } from 'react'
import AntPagination, {
    PaginationProps as AntPaginationProps,
} from 'antd/es/pagination'

export interface PaginationProps extends AntPaginationProps {}

const Pagination: FC<PaginationProps> = ({ ...restProps }) => {
    return <AntPagination {...restProps} />
}

export default Pagination
