import React, { FC } from 'react';
import { Pagination as AntPagination, PaginationProps as AntPaginationProps } from 'antd';
import 'antd/es/pagination/style/index';

export interface PaginationProps extends AntPaginationProps {}

const Pagination: FC<PaginationProps> = ({ ...restProps }) => {
    return <AntPagination {...restProps} />;
};

export default Pagination;
