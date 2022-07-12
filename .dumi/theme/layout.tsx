import React from 'react'
import Layout from 'dumi-theme-default/es/layout'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from '@weblif/fast-ui'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export default ({ children, ...props }: any) => (
    <Layout {...props}>
        <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    </Layout>
)
