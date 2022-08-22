/**
 * title: 上下切割
 * desc: 简单的上下切割的例子
 */
import { Layout } from '@weblif/fast-ui'
import React from 'react'

const Simple = () => (
    <Layout.Fixed height={500}>
        <Layout.TopResizable
            size="40%"
            style={{
                backgroundColor: '#7dbcea',
            }}
        />
        <Layout.Fill
            style={{
                backgroundColor: '#108ee9',
            }}
        />
    </Layout.Fixed>
)

export default Simple
