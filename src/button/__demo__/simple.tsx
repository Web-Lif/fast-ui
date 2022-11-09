/**
 * title: 执行耗时任务
 * desc: 执行耗时任务可以自动进行防止多次点击按钮, 当执行成功后才让继续点击
 */
import React from 'react'
import { Button, Space } from '@weblif/fast-ui'

/** Mock 请求数据, 或则一些耗时操作 */
const requestData = () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('模拟任务执行完成.')
        }, 3000)
    })
}

export default () => {
    return (
        <Space>
            <Button
                onClick={async () => {
                    const msg = await requestData()
                    console.log(msg)
                }}
            >
                default
            </Button>
            <Button
                type="primary"
                onClick={async () => {
                    const msg = await requestData()
                    console.log(msg)
                }}
            >
                primary
            </Button>
            <Button
                type="link"
                onClick={async () => {
                    const msg = await requestData()
                    console.log(msg)
                }}
            >
                link
            </Button>
            <Button
                type="text"
                onClick={async () => {
                    const msg = await requestData()
                    console.log(msg)
                }}
            >
                text
            </Button>
            <Button
                type="ghost"
                onClick={async () => {
                    const msg = await requestData()
                    console.log(msg)
                }}
            >
                ghost
            </Button>
            <Button
                type="dashed"
                onClick={async () => {
                    const msg = await requestData()
                    console.log(msg)
                }}
            >
                dashed
            </Button>
        </Space>
    )
}
