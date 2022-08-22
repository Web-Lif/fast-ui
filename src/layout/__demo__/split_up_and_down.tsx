/**
 * title: 基础
 * desc: 典型的页面布局。
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
