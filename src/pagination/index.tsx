import React, { FC } from 'react';
import { Pagination as AntPagination, PaginationProps as AntPaginationProps } from 'antd';

import zhCN from 'antd/lib/locale/zh_CN';

export interface PaginationProps extends AntPaginationProps {}

const Pagination: FC<PaginationProps> = ({ ...restProps }) => {
    return <AntPagination locale={zhCN.Pagination} {...restProps} />;
};

export default Pagination;
